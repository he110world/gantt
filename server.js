// Generated by CoffeeScript 1.8.0
(function() {
  var Duplex, argv, backend, browserChannel, connect, serveStatic, livedb, livedbMongo, numClients, port, share, sharejs, webserver;

  Duplex = require('stream').Duplex;

  browserChannel = require('browserchannel').server;

  connect = require('connect');

  serveStatic = require('serve-static');

  argv = require('optimist').argv;

  livedb = require('livedb');

  livedbMongo = require('livedb-mongo');

  var auth = require('./auth');

  try {
    require('heapdump');
  } catch (_error) {}

  sharejs = require('share');

  webserver = connect();
  webserver.use(serveStatic("" + __dirname + "/public"));
  webserver.use(serveStatic(sharejs.scriptsDir));

  var compression = require('compression');
  webserver.use(compression());

  var bodyParser = require('body-parser');
  webserver.use(bodyParser.urlencoded());
  webserver.use(bodyParser.json());

  backend = livedb.client(livedbMongo('mongodb://localhost:27017/gantt?auto_reconnect', {
    safe: false
  }));

  backend.addProjection('_users', 'users', 'json0', {
    x: true
  });

  share = sharejs.server.createClient({
    backend: backend
  });


  /*
  share.use 'validate', (req, callback) ->
    err = 'noooo' if req.snapshot.data?.match /x/
    callback err
  
  share.use 'connect', (req, callback) ->
    console.log req.agent
    callback()
   */

  numClients = 0;

  webserver.use(browserChannel({
    webserver: webserver,
    sessionTimeoutInterval: 5000
  }, function(client) {
    var stream;
    numClients++;
    stream = new Duplex({
      objectMode: true
    });
    stream._write = function(chunk, encoding, callback) {
      console.log('s->c ', JSON.stringify(chunk));
      if (client.state !== 'closed') {
        client.send(chunk);
      }
      return callback();
    };
    stream._read = function() {};
    stream.headers = client.headers;
    stream.remoteAddress = stream.address;
    client.on('message', function(data) {
      console.log('c->s ', JSON.stringify(data));
      return stream.push(data);
    });
    stream.on('error', function(msg) {
      return client.stop();
    });
    client.on('close', function(reason) {
      stream.push(null);
      stream.emit('close');
      numClients--;
      return console.log('client went away', numClients);
    });
    stream.on('end', function() {
      return client.close();
    });
    return share.listen(stream);
  }));

  webserver.use('/doc', share.rest());

  webserver.use('/del', function(req, res, next){
    if (req.method === 'POST') {
      try {
        console.log('delete',req.body.name);
        backend.submit('gantt', req.body.name, {del:true}, function(err){
          res.end();
        });
      } catch (e) {
        res.statusCode = 400;
        res.end();
      }
    }
  });

  webserver.use('/docs', function (req, res, next) {
    try {
      var col = backend.snapshotDb.mongo.collection('gantt');
      col.find({},{_id:1,_data:1}).toArray(function(err, data){
        var docs = [];
        data.forEach(function(doc){
          if (doc._data !== null) {
            docs.push(decodeURI(doc._id));
          }
        });
        res.end(JSON.stringify(docs.sort()));
      });
    } catch (e) {
      res.end('[]');
    }
  });

  var accountCol = backend.snapshotDb.mongo.collection('gantt_accounts');
  webserver.use('/auth', auth.auth(accountCol));
  webserver.use('/accounts', function (req, res, next) {
    if (req.method === 'GET') {
      accountCol.find({}).toArray(function(err, data) {
        res.end(JSON.stringify(data));
      });
    } else if (req.method === 'POST') {
      if (!Array.isArray(req.body.username)) {
        if (req.body.username) {
          req.body._id = req.body.username;
          accountCol.remove({}, function(err,results){
            accountCol.insert(req.body, function(err,r){
              res.end();
            });
          });
        } else {
          res.end();
        }
        return;
      }
      // id is username
      var accounts = [];
      var keys = Object.keys(req.body);
      delete keys[keys.indexOf('username')];
      req.body.username.forEach(function(username, i){
        var acc = {};
        acc._id = username;
        keys.forEach(function(key){
          acc[key] = req.body[key][i];
        });
        accounts.push(acc);
      });
      console.log(accounts);
      accountCol.remove({}, function(err,results){
        accountCol.insert(accounts, function(err, r){
          res.end();
        });
      });
    }
  });

  port = argv.p || 7007;

  webserver.listen(port);

  console.log("Listening on http://localhost:" + port + "/");

}).call(this);
