!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, 
        e.Plotly = t();
    }
}(function() {
    var t;
    return function t(e, r, n) {
        function a(i, l) {
            if (!r[i]) {
                if (!e[i]) {
                    var s = "function" == typeof require && require;
                    if (!l && s) return s(i, !0);
                    if (o) return o(i, !0);
                    var c = new Error("Cannot find module '" + i + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var d = r[i] = {
                    exports: {}
                };
                e[i][0].call(d.exports, function(t) {
                    var r = e[i][1][t];
                    return a(r ? r : t);
                }, d, d.exports, t, e, r, n);
            }
            return r[i].exports;
        }
        for (var o = "function" == typeof require && require, i = 0; i < n.length; i++) a(n[i]);
        return a;
    }({
        1: [ function(t, e) {
            function r() {
                if (!i) {
                    i = !0;
                    for (var t, e = o.length; e; ) {
                        t = o, o = [];
                        for (var r = -1; ++r < e; ) t[r]();
                        e = o.length;
                    }
                    i = !1;
                }
            }
            function n() {}
            var a = e.exports = {}, o = [], i = !1;
            a.nextTick = function(t) {
                o.push(t), i || setTimeout(r, 0);
            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", 
            a.versions = {}, a.on = n, a.addListener = n, a.once = n, a.off = n, a.removeListener = n, 
            a.removeAllListeners = n, a.emit = n, a.binding = function() {
                throw new Error("process.binding is not supported");
            }, a.cwd = function() {
                return "/";
            }, a.chdir = function() {
                throw new Error("process.chdir is not supported");
            }, a.umask = function() {
                return 0;
            };
        }, {} ],
        2: [ function(t) {
            "use strict";
            var e = t("../src/plotly"), r = {
                "X,X div": "font-family:'Open Sans', verdana, arial, sans-serif;margin:0;padding:0;",
                "X input,X button": "font-family:'Open Sans', verdana, arial, sans-serif;",
                "X input:focus,X button:focus": "outline:none;",
                "X a": "text-decoration:none;",
                "X a:hover": "text-decoration:none;",
                "X .crisp": "shape-rendering:crispEdges;",
                "X svg a": "fill:#447adb;",
                "X svg a:hover": "fill:#3c6dc5;",
                "X .main-svg": "position:absolute;top:0;left:0;pointer-events:none;",
                "X .main-svg .draglayer": "pointer-events:all;",
                "X .cursor-pointer": "cursor:pointer;",
                "X .cursor-crosshair": "cursor:crosshair;",
                "X .cursor-move": "cursor:move;",
                "X .cursor-col-resize": "cursor:col-resize;",
                "X .cursor-row-resize": "cursor:row-resize;",
                "X .cursor-ns-resize": "cursor:ns-resize;",
                "X .cursor-ew-resize": "cursor:ew-resize;",
                "X .cursor-sw-resize": "cursor:sw-resize;",
                "X .cursor-s-resize": "cursor:s-resize;",
                "X .cursor-se-resize": "cursor:se-resize;",
                "X .cursor-w-resize": "cursor:w-resize;",
                "X .cursor-e-resize": "cursor:e-resize;",
                "X .cursor-nw-resize": "cursor:nw-resize;",
                "X .cursor-n-resize": "cursor:n-resize;",
                "X .cursor-ne-resize": "cursor:ne-resize;",
                "X .modebar": "position:absolute;top:2px;right:2px;z-index:1001;background:rgba(255,255,255,0.7);",
                "X .modebar--hover": "opacity:0;-webkit-transition:opacity 0.3s ease 0s;-moz-transition:opacity 0.3s ease 0s;-ms-transition:opacity 0.3s ease 0s;-o-transition:opacity 0.3s ease 0s;transition:opacity 0.3s ease 0s;",
                "X:hover .modebar--hover": "opacity:1;",
                "X .modebar-group": "float:left;display:inline-block;box-sizing:border-box;margin-left:8px;position:relative;vertical-align:middle;white-space:nowrap;",
                "X .modebar-group:first-child": "margin-left:0px;",
                "X .modebar-btn": "position:relative;font-size:16px;padding:3px 4px;cursor:pointer;line-height:normal;box-sizing:border-box;",
                "X .modebar-btn svg": "position:relative;top:2px;",
                "X .modebar-btn path": "fill:rgba(0,31,95,0.3);",
                "X .modebar-btn.active path,X .modebar-btn:hover path": "fill:rgba(0,22,72,0.5);",
                "X .modebar-btn.modebar-btn--logo": "padding:3px 1px;",
                "X .modebar-btn.modebar-btn--logo path": "fill:#447adb !important;",
                "X [data-title]:before,X [data-title]:after": "position:absolute;-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);display:none;opacity:0;z-index:1001;pointer-events:none;top:110%;right:50%;",
                "X [data-title]:hover:before,X [data-title]:hover:after": "display:block;opacity:1;",
                "X [data-title]:before": "content:'';position:absolute;background:transparent;border:6px solid transparent;z-index:1002;margin-top:-12px;border-bottom-color:#69738a;margin-right:-6px;",
                "X [data-title]:after": "content:attr(data-title);background:#69738a;color:white;padding:8px 10px;font-size:12px;line-height:12px;white-space:nowrap;margin-right:-18px;border-radius:2px;",
                Y: "position:fixed;top:50px;right:20px;z-index:10000;",
                "Y .notifier-note": "min-width:180px;max-width:250px;border:1px solid #fff;z-index:3000;margin:0;background-color:#8c97af;background-color:rgba(140,151,175,0.9);color:#fff;padding:10px;",
                "Y .notifier-close": "color:#fff;opacity:0.8;float:right;padding:0 5px;background:none;border:none;font-size:20px;font-weight:bold;line-height:20px;",
                "Y .notifier-close:hover": "color:#444;text-decoration:none;cursor:pointer;"
            };
            for (var n in r) {
                var a = n.replace(/^,/, " ,").replace(/X/g, ".js-plotly-plot .plotly").replace(/Y/g, ".plotly-notifier");
                e.Lib.addStyleRule(a, r[n]);
            }
        }, {
            "../src/plotly": 27
        } ],
        3: [ function(t, e) {
            "use strict";
            e.exports = {
                ascent: 850,
                descent: -150,
                undo: {
                    width: 857.1,
                    path: "m857 350q0-87-34-166t-91-137-137-92-166-34q-96 0-183 41t-147 114q-4 6-4 13t5 11l76 77q6 5 14 5 9-1 13-7 41-53 100-82t126-29q58 0 110 23t92 61 61 91 22 111-22 111-61 91-92 61-110 23q-55 0-105-20t-90-57l77-77q17-16 8-38-10-23-33-23h-250q-15 0-25 11t-11 25v250q0 24 22 33 22 10 39-8l72-72q60 57 137 88t159 31q87 0 166-34t137-92 91-137 34-166z"
                },
                home: {
                    width: 928.6,
                    path: "m786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-4-7 2-12 7l-35 41q-4 5-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-5 6-12t-4-13z"
                },
                "camera-retro": {
                    width: 1e3,
                    path: "m518 386q0 8-5 13t-13 5q-37 0-63-27t-26-63q0-8 5-13t13-5 12 5 5 13q0 23 16 38t38 16q8 0 13 5t5 13z m125-73q0-59-42-101t-101-42-101 42-42 101 42 101 101 42 101-42 42-101z m-572-320h858v71h-858v-71z m643 320q0 89-62 152t-152 62-151-62-63-152 63-151 151-63 152 63 62 151z m-571 358h214v72h-214v-72z m-72-107h858v143h-462l-36-71h-360v-72z m929 143v-714q0-30-21-51t-50-21h-858q-29 0-50 21t-21 51v714q0 30 21 51t50 21h858q29 0 50-21t21-51z"
                },
                zoombox: {
                    width: 1e3,
                    path: "m1000-25l-250 251c40 63 63 138 63 218 0 224-182 406-407 406-224 0-406-182-406-406s183-406 407-406c80 0 155 22 218 62l250-250 125 125z m-812 250l0 438 437 0 0-438-437 0z m62 375l313 0 0-312-313 0 0 312z"
                },
                pan: {
                    width: 1e3,
                    path: "m1000 350l-187 188 0-125-250 0 0 250 125 0-188 187-187-187 125 0 0-250-250 0 0 125-188-188 186-187 0 125 252 0 0-250-125 0 187-188 188 188-125 0 0 250 250 0 0-126 187 188z"
                },
                zoom_plus: {
                    width: 1e3,
                    path: "m1 787l0-875 875 0 0 875-875 0z m687-500l-187 0 0-187-125 0 0 187-188 0 0 125 188 0 0 187 125 0 0-187 187 0 0-125z"
                },
                zoom_minus: {
                    width: 1e3,
                    path: "m0 788l0-876 875 0 0 876-875 0z m688-500l-500 0 0 125 500 0 0-125z"
                },
                autoscale: {
                    width: 1e3,
                    path: "m250 850l-187 0-63 0 0-62 0-188 63 0 0 188 187 0 0 62z m688 0l-188 0 0-62 188 0 0-188 62 0 0 188 0 62-62 0z m-875-938l0 188-63 0 0-188 0-62 63 0 187 0 0 62-187 0z m875 188l0-188-188 0 0-62 188 0 62 0 0 62 0 188-62 0z m-125 188l-1 0-93-94-156 156 156 156 92-93 2 0 0 250-250 0 0-2 93-92-156-156-156 156 94 92 0 2-250 0 0-250 0 0 93 93 157-156-157-156-93 94 0 0 0-250 250 0 0 0-94 93 156 157 156-157-93-93 0 0 250 0 0 250z"
                },
                tooltip_basic: {
                    width: 1500,
                    path: "m375 725l0 0-375-375 375-374 0-1 1125 0 0 750-1125 0z"
                },
                tooltip_compare: {
                    width: 1125,
                    path: "m187 786l0 2-187-188 188-187 0 0 937 0 0 373-938 0z m0-499l0 1-187-188 188-188 0 0 937 0 0 376-938-1z"
                },
                plotlylogo: {
                    width: 1542,
                    path: "m0-10h182v-140h-182v140z m228 146h183v-286h-183v286z m225 714h182v-1000h-182v1000z m225-285h182v-715h-182v715z m225 142h183v-857h-183v857z m231-428h182v-429h-182v429z m225-291h183v-138h-183v138z"
                },
                "z-axis": {
                    width: 1e3,
                    path: "m833 5l-17 108v41l-130-65 130-66c0 0 0 38 0 39 0-1 36-14 39-25 4-15-6-22-16-30-15-12-39-16-56-20-90-22-187-23-279-23-261 0-341 34-353 59 3 60 228 110 228 110-140-8-351-35-351-116 0-120 293-142 474-142 155 0 477 22 477 142 0 50-74 79-163 96z m-374 94c-58-5-99-21-99-40 0-24 65-43 144-43 79 0 143 19 143 43 0 19-42 34-98 40v216h87l-132 135-133-135h88v-216z m167 515h-136v1c16 16 31 34 46 52l84 109v54h-230v-71h124v-1c-16-17-28-32-44-51l-89-114v-51h245v72z"
                },
                "3d_rotate": {
                    width: 1e3,
                    path: "m922 660c-5 4-9 7-14 11-359 263-580-31-580-31l-102 28 58-400c0 1 1 1 2 2 118 108 351 249 351 249s-62 27-100 42c88 83 222 183 347 122 16-8 30-17 44-27-2 1-4 2-6 4z m36-329c0 0 64 229-88 296-62 27-124 14-175-11 157-78 225-208 249-266 8-19 11-31 11-31 2 5 6 15 11 32-5-13-8-20-8-20z m-775-239c70-31 117-50 198-32-121 80-199 346-199 346l-96-15-58-12c0 0 55-226 155-287z m603 133l-317-139c0 0 4-4 19-14 7-5 24-15 24-15s-177-147-389 4c235-287 536-112 536-112l31-22 100 299-4-1z m-298-153c6-4 14-9 24-15 0 0-17 10-24 15z"
                }
            };
        }, {} ],
        4: [ function(t, e) {
            "use strict";
            var r = Object.prototype.hasOwnProperty, n = Object.prototype.toString, a = function(t) {
                return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === n.call(t);
            }, o = function(t) {
                if (!t || "[object Object]" !== n.call(t)) return !1;
                var e = r.call(t, "constructor"), a = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");
                if (t.constructor && !e && !a) return !1;
                var o;
                for (o in t) ;
                return "undefined" == typeof o || r.call(t, o);
            };
            e.exports = function t() {
                var e, r, n, i, l, s, c = arguments[0], d = 1, u = arguments.length, f = !1;
                for ("boolean" == typeof c ? (f = c, c = arguments[1] || {}, d = 2) : ("object" != typeof c && "function" != typeof c || null == c) && (c = {}); u > d; ++d) if (e = arguments[d], 
                null != e) for (r in e) n = c[r], i = e[r], c !== i && (f && i && (o(i) || (l = a(i))) ? (l ? (l = !1, 
                s = n && a(n) ? n : []) : s = n && o(n) ? n : {}, c[r] = t(f, s, i)) : "undefined" != typeof i && (c[r] = i));
                return c;
            };
        }, {} ],
        5: [ function(t, e) {
            function r(t, e) {
                var r = e[0], n = e[1], a = e[2], o = e[3], i = r + r, l = n + n, s = a + a, c = r * i, d = n * i, u = n * l, f = a * i, h = a * l, p = a * s, g = o * i, m = o * l, y = o * s;
                return t[0] = 1 - u - p, t[1] = d + y, t[2] = f - m, t[3] = 0, t[4] = d - y, t[5] = 1 - c - p, 
                t[6] = h + g, t[7] = 0, t[8] = f + m, t[9] = h - g, t[10] = 1 - c - u, t[11] = 0, 
                t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
            }
            e.exports = r;
        }, {} ],
        6: [ function(t, e) {
            "use strict";
            function r(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t);
            }
            e.exports = Object.assign || function(t) {
                for (var e, n, a = r(t), o = 1; o < arguments.length; o++) {
                    e = arguments[o], n = Object.keys(Object(e));
                    for (var i = 0; i < n.length; i++) a[n[i]] = e[n[i]];
                }
                return a;
            };
        }, {} ],
        7: [ function(e, r) {
            !function() {
                function e(t, r) {
                    if (t = t ? t : "", r = r || {}, t instanceof e) return t;
                    if (!(this instanceof e)) return new e(t, r);
                    var a = n(t);
                    this._originalInput = t, this._r = a.r, this._g = a.g, this._b = a.b, this._a = a.a, 
                    this._roundA = H(100 * this._a) / 100, this._format = r.format || a.format, this._gradientType = r.gradientType, 
                    this._r < 1 && (this._r = H(this._r)), this._g < 1 && (this._g = H(this._g)), this._b < 1 && (this._b = H(this._b)), 
                    this._ok = a.ok, this._tc_id = F++;
                }
                function n(t) {
                    var e = {
                        r: 0,
                        g: 0,
                        b: 0
                    }, r = 1, n = !1, o = !1;
                    return "string" == typeof t && (t = I(t)), "object" == typeof t && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (e = a(t.r, t.g, t.b), 
                    n = !0, o = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = P(t.s), 
                    t.v = P(t.v), e = s(t.h, t.s, t.v), n = !0, o = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = P(t.s), 
                    t.l = P(t.l), e = i(t.h, t.s, t.l), n = !0, o = "hsl"), t.hasOwnProperty("a") && (r = t.a)), 
                    r = M(r), {
                        ok: n,
                        format: t.format || o,
                        r: V(255, q(e.r, 0)),
                        g: V(255, q(e.g, 0)),
                        b: V(255, q(e.b, 0)),
                        a: r
                    };
                }
                function a(t, e, r) {
                    return {
                        r: 255 * L(t, 255),
                        g: 255 * L(e, 255),
                        b: 255 * L(r, 255)
                    };
                }
                function o(t, e, r) {
                    t = L(t, 255), e = L(e, 255), r = L(r, 255);
                    var n, a, o = q(t, e, r), i = V(t, e, r), l = (o + i) / 2;
                    if (o == i) n = a = 0; else {
                        var s = o - i;
                        switch (a = l > .5 ? s / (2 - o - i) : s / (o + i), o) {
                          case t:
                            n = (e - r) / s + (r > e ? 6 : 0);
                            break;

                          case e:
                            n = (r - t) / s + 2;
                            break;

                          case r:
                            n = (t - e) / s + 4;
                        }
                        n /= 6;
                    }
                    return {
                        h: n,
                        s: a,
                        l: l
                    };
                }
                function i(t, e, r) {
                    function n(t, e, r) {
                        return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? t + 6 * (e - t) * r : .5 > r ? e : 2 / 3 > r ? t + (e - t) * (2 / 3 - r) * 6 : t;
                    }
                    var a, o, i;
                    if (t = L(t, 360), e = L(e, 100), r = L(r, 100), 0 === e) a = o = i = r; else {
                        var l = .5 > r ? r * (1 + e) : r + e - r * e, s = 2 * r - l;
                        a = n(s, l, t + 1 / 3), o = n(s, l, t), i = n(s, l, t - 1 / 3);
                    }
                    return {
                        r: 255 * a,
                        g: 255 * o,
                        b: 255 * i
                    };
                }
                function l(t, e, r) {
                    t = L(t, 255), e = L(e, 255), r = L(r, 255);
                    var n, a, o = q(t, e, r), i = V(t, e, r), l = o, s = o - i;
                    if (a = 0 === o ? 0 : s / o, o == i) n = 0; else {
                        switch (o) {
                          case t:
                            n = (e - r) / s + (r > e ? 6 : 0);
                            break;

                          case e:
                            n = (r - t) / s + 2;
                            break;

                          case r:
                            n = (t - e) / s + 4;
                        }
                        n /= 6;
                    }
                    return {
                        h: n,
                        s: a,
                        v: l
                    };
                }
                function s(t, e, r) {
                    t = 6 * L(t, 360), e = L(e, 100), r = L(r, 100);
                    var n = R.floor(t), a = t - n, o = r * (1 - e), i = r * (1 - a * e), l = r * (1 - (1 - a) * e), s = n % 6, c = [ r, i, o, o, l, r ][s], d = [ l, r, r, i, o, o ][s], u = [ o, o, l, r, r, i ][s];
                    return {
                        r: 255 * c,
                        g: 255 * d,
                        b: 255 * u
                    };
                }
                function c(t, e, r, n) {
                    var a = [ S(H(t).toString(16)), S(H(e).toString(16)), S(H(r).toString(16)) ];
                    return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
                }
                function d(t, e, r, n) {
                    var a = [ S(T(n)), S(H(t).toString(16)), S(H(e).toString(16)), S(H(r).toString(16)) ];
                    return a.join("");
                }
                function u(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var n = e(t).toHsl();
                    return n.s -= r / 100, n.s = z(n.s), e(n);
                }
                function f(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var n = e(t).toHsl();
                    return n.s += r / 100, n.s = z(n.s), e(n);
                }
                function h(t) {
                    return e(t).desaturate(100);
                }
                function p(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var n = e(t).toHsl();
                    return n.l += r / 100, n.l = z(n.l), e(n);
                }
                function g(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var n = e(t).toRgb();
                    return n.r = q(0, V(255, n.r - H(255 * -(r / 100)))), n.g = q(0, V(255, n.g - H(255 * -(r / 100)))), 
                    n.b = q(0, V(255, n.b - H(255 * -(r / 100)))), e(n);
                }
                function m(t, r) {
                    r = 0 === r ? 0 : r || 10;
                    var n = e(t).toHsl();
                    return n.l -= r / 100, n.l = z(n.l), e(n);
                }
                function y(t, r) {
                    var n = e(t).toHsl(), a = (H(n.h) + r) % 360;
                    return n.h = 0 > a ? 360 + a : a, e(n);
                }
                function v(t) {
                    var r = e(t).toHsl();
                    return r.h = (r.h + 180) % 360, e(r);
                }
                function x(t) {
                    var r = e(t).toHsl(), n = r.h;
                    return [ e(t), e({
                        h: (n + 120) % 360,
                        s: r.s,
                        l: r.l
                    }), e({
                        h: (n + 240) % 360,
                        s: r.s,
                        l: r.l
                    }) ];
                }
                function b(t) {
                    var r = e(t).toHsl(), n = r.h;
                    return [ e(t), e({
                        h: (n + 90) % 360,
                        s: r.s,
                        l: r.l
                    }), e({
                        h: (n + 180) % 360,
                        s: r.s,
                        l: r.l
                    }), e({
                        h: (n + 270) % 360,
                        s: r.s,
                        l: r.l
                    }) ];
                }
                function _(t) {
                    var r = e(t).toHsl(), n = r.h;
                    return [ e(t), e({
                        h: (n + 72) % 360,
                        s: r.s,
                        l: r.l
                    }), e({
                        h: (n + 216) % 360,
                        s: r.s,
                        l: r.l
                    }) ];
                }
                function w(t, r, n) {
                    r = r || 6, n = n || 30;
                    var a = e(t).toHsl(), o = 360 / n, i = [ e(t) ];
                    for (a.h = (a.h - (o * r >> 1) + 720) % 360; --r; ) a.h = (a.h + o) % 360, i.push(e(a));
                    return i;
                }
                function k(t, r) {
                    r = r || 6;
                    for (var n = e(t).toHsv(), a = n.h, o = n.s, i = n.v, l = [], s = 1 / r; r--; ) l.push(e({
                        h: a,
                        s: o,
                        v: i
                    })), i = (i + s) % 1;
                    return l;
                }
                function A(t) {
                    var e = {};
                    for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
                    return e;
                }
                function M(t) {
                    return t = parseFloat(t), (isNaN(t) || 0 > t || t > 1) && (t = 1), t;
                }
                function L(t, e) {
                    D(t) && (t = "100%");
                    var r = O(t);
                    return t = V(e, q(0, parseFloat(t))), r && (t = parseInt(t * e, 10) / 100), R.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e);
                }
                function z(t) {
                    return V(1, q(0, t));
                }
                function C(t) {
                    return parseInt(t, 16);
                }
                function D(t) {
                    return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t);
                }
                function O(t) {
                    return "string" == typeof t && -1 != t.indexOf("%");
                }
                function S(t) {
                    return 1 == t.length ? "0" + t : "" + t;
                }
                function P(t) {
                    return 1 >= t && (t = 100 * t + "%"), t;
                }
                function T(t) {
                    return Math.round(255 * parseFloat(t)).toString(16);
                }
                function E(t) {
                    return C(t) / 255;
                }
                function I(t) {
                    t = t.replace(N, "").replace(B, "").toLowerCase();
                    var e = !1;
                    if (X[t]) t = X[t], e = !0; else if ("transparent" == t) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    var r;
                    return (r = G.rgb.exec(t)) ? {
                        r: r[1],
                        g: r[2],
                        b: r[3]
                    } : (r = G.rgba.exec(t)) ? {
                        r: r[1],
                        g: r[2],
                        b: r[3],
                        a: r[4]
                    } : (r = G.hsl.exec(t)) ? {
                        h: r[1],
                        s: r[2],
                        l: r[3]
                    } : (r = G.hsla.exec(t)) ? {
                        h: r[1],
                        s: r[2],
                        l: r[3],
                        a: r[4]
                    } : (r = G.hsv.exec(t)) ? {
                        h: r[1],
                        s: r[2],
                        v: r[3]
                    } : (r = G.hsva.exec(t)) ? {
                        h: r[1],
                        s: r[2],
                        v: r[3],
                        a: r[4]
                    } : (r = G.hex8.exec(t)) ? {
                        a: E(r[1]),
                        r: C(r[2]),
                        g: C(r[3]),
                        b: C(r[4]),
                        format: e ? "name" : "hex8"
                    } : (r = G.hex6.exec(t)) ? {
                        r: C(r[1]),
                        g: C(r[2]),
                        b: C(r[3]),
                        format: e ? "name" : "hex"
                    } : (r = G.hex3.exec(t)) ? {
                        r: C(r[1] + "" + r[1]),
                        g: C(r[2] + "" + r[2]),
                        b: C(r[3] + "" + r[3]),
                        format: e ? "name" : "hex"
                    } : !1;
                }
                function j(t) {
                    var e, r;
                    return t = t || {
                        level: "AA",
                        size: "small"
                    }, e = (t.level || "AA").toUpperCase(), r = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA"), 
                    "small" !== r && "large" !== r && (r = "small"), {
                        level: e,
                        size: r
                    };
                }
                var N = /^[\s,#]+/, B = /\s+$/, F = 0, R = Math, H = R.round, V = R.min, q = R.max, Z = R.random;
                e.prototype = {
                    isDark: function() {
                        return this.getBrightness() < 128;
                    },
                    isLight: function() {
                        return !this.isDark();
                    },
                    isValid: function() {
                        return this._ok;
                    },
                    getOriginalInput: function() {
                        return this._originalInput;
                    },
                    getFormat: function() {
                        return this._format;
                    },
                    getAlpha: function() {
                        return this._a;
                    },
                    getBrightness: function() {
                        var t = this.toRgb();
                        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
                    },
                    getLuminance: function() {
                        var t, e, r, n, a, o, i = this.toRgb();
                        return t = i.r / 255, e = i.g / 255, r = i.b / 255, n = .03928 >= t ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4), 
                        a = .03928 >= e ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4), o = .03928 >= r ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4), 
                        .2126 * n + .7152 * a + .0722 * o;
                    },
                    setAlpha: function(t) {
                        return this._a = M(t), this._roundA = H(100 * this._a) / 100, this;
                    },
                    toHsv: function() {
                        var t = l(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            v: t.v,
                            a: this._a
                        };
                    },
                    toHsvString: function() {
                        var t = l(this._r, this._g, this._b), e = H(360 * t.h), r = H(100 * t.s), n = H(100 * t.v);
                        return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + n + "%)" : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
                    },
                    toHsl: function() {
                        var t = o(this._r, this._g, this._b);
                        return {
                            h: 360 * t.h,
                            s: t.s,
                            l: t.l,
                            a: this._a
                        };
                    },
                    toHslString: function() {
                        var t = o(this._r, this._g, this._b), e = H(360 * t.h), r = H(100 * t.s), n = H(100 * t.l);
                        return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + n + "%)" : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
                    },
                    toHex: function(t) {
                        return c(this._r, this._g, this._b, t);
                    },
                    toHexString: function(t) {
                        return "#" + this.toHex(t);
                    },
                    toHex8: function() {
                        return d(this._r, this._g, this._b, this._a);
                    },
                    toHex8String: function() {
                        return "#" + this.toHex8();
                    },
                    toRgb: function() {
                        return {
                            r: H(this._r),
                            g: H(this._g),
                            b: H(this._b),
                            a: this._a
                        };
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + H(this._r) + ", " + H(this._g) + ", " + H(this._b) + ")" : "rgba(" + H(this._r) + ", " + H(this._g) + ", " + H(this._b) + ", " + this._roundA + ")";
                    },
                    toPercentageRgb: function() {
                        return {
                            r: H(100 * L(this._r, 255)) + "%",
                            g: H(100 * L(this._g, 255)) + "%",
                            b: H(100 * L(this._b, 255)) + "%",
                            a: this._a
                        };
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + H(100 * L(this._r, 255)) + "%, " + H(100 * L(this._g, 255)) + "%, " + H(100 * L(this._b, 255)) + "%)" : "rgba(" + H(100 * L(this._r, 255)) + "%, " + H(100 * L(this._g, 255)) + "%, " + H(100 * L(this._b, 255)) + "%, " + this._roundA + ")";
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : this._a < 1 ? !1 : $[c(this._r, this._g, this._b, !0)] || !1;
                    },
                    toFilter: function(t) {
                        var r = "#" + d(this._r, this._g, this._b, this._a), n = r, a = this._gradientType ? "GradientType = 1, " : "";
                        if (t) {
                            var o = e(t);
                            n = o.toHex8String();
                        }
                        return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + n + ")";
                    },
                    toString: function(t) {
                        var e = !!t;
                        t = t || this._format;
                        var r = !1, n = this._a < 1 && this._a >= 0, a = !e && n && ("hex" === t || "hex6" === t || "hex3" === t || "name" === t);
                        return a ? "name" === t && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === t && (r = this.toRgbString()), 
                        "prgb" === t && (r = this.toPercentageRgbString()), ("hex" === t || "hex6" === t) && (r = this.toHexString()), 
                        "hex3" === t && (r = this.toHexString(!0)), "hex8" === t && (r = this.toHex8String()), 
                        "name" === t && (r = this.toName()), "hsl" === t && (r = this.toHslString()), "hsv" === t && (r = this.toHsvString()), 
                        r || this.toHexString());
                    },
                    _applyModification: function(t, e) {
                        var r = t.apply(null, [ this ].concat([].slice.call(e)));
                        return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
                    },
                    lighten: function() {
                        return this._applyModification(p, arguments);
                    },
                    brighten: function() {
                        return this._applyModification(g, arguments);
                    },
                    darken: function() {
                        return this._applyModification(m, arguments);
                    },
                    desaturate: function() {
                        return this._applyModification(u, arguments);
                    },
                    saturate: function() {
                        return this._applyModification(f, arguments);
                    },
                    greyscale: function() {
                        return this._applyModification(h, arguments);
                    },
                    spin: function() {
                        return this._applyModification(y, arguments);
                    },
                    _applyCombination: function(t, e) {
                        return t.apply(null, [ this ].concat([].slice.call(e)));
                    },
                    analogous: function() {
                        return this._applyCombination(w, arguments);
                    },
                    complement: function() {
                        return this._applyCombination(v, arguments);
                    },
                    monochromatic: function() {
                        return this._applyCombination(k, arguments);
                    },
                    splitcomplement: function() {
                        return this._applyCombination(_, arguments);
                    },
                    triad: function() {
                        return this._applyCombination(x, arguments);
                    },
                    tetrad: function() {
                        return this._applyCombination(b, arguments);
                    }
                }, e.fromRatio = function(t, r) {
                    if ("object" == typeof t) {
                        var n = {};
                        for (var a in t) t.hasOwnProperty(a) && (n[a] = "a" === a ? t[a] : P(t[a]));
                        t = n;
                    }
                    return e(t, r);
                }, e.equals = function(t, r) {
                    return t && r ? e(t).toRgbString() == e(r).toRgbString() : !1;
                }, e.random = function() {
                    return e.fromRatio({
                        r: Z(),
                        g: Z(),
                        b: Z()
                    });
                }, e.mix = function(t, r, n) {
                    n = 0 === n ? 0 : n || 50;
                    var a, o = e(t).toRgb(), i = e(r).toRgb(), l = n / 100, s = 2 * l - 1, c = i.a - o.a;
                    a = s * c == -1 ? s : (s + c) / (1 + s * c), a = (a + 1) / 2;
                    var d = 1 - a, u = {
                        r: i.r * a + o.r * d,
                        g: i.g * a + o.g * d,
                        b: i.b * a + o.b * d,
                        a: i.a * l + o.a * (1 - l)
                    };
                    return e(u);
                }, e.readability = function(t, r) {
                    var n = e(t), a = e(r);
                    return (Math.max(n.getLuminance(), a.getLuminance()) + .05) / (Math.min(n.getLuminance(), a.getLuminance()) + .05);
                }, e.isReadable = function(t, r, n) {
                    var a, o, i = e.readability(t, r);
                    switch (o = !1, a = j(n), a.level + a.size) {
                      case "AAsmall":
                      case "AAAlarge":
                        o = i >= 4.5;
                        break;

                      case "AAlarge":
                        o = i >= 3;
                        break;

                      case "AAAsmall":
                        o = i >= 7;
                    }
                    return o;
                }, e.mostReadable = function(t, r, n) {
                    var a, o, i, l, s = null, c = 0;
                    n = n || {}, o = n.includeFallbackColors, i = n.level, l = n.size;
                    for (var d = 0; d < r.length; d++) a = e.readability(t, r[d]), a > c && (c = a, 
                    s = e(r[d]));
                    return e.isReadable(t, s, {
                        level: i,
                        size: l
                    }) || !o ? s : (n.includeFallbackColors = !1, e.mostReadable(t, [ "#fff", "#000" ], n));
                };
                var X = e.names = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "0ff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000",
                    blanchedalmond: "ffebcd",
                    blue: "00f",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    burntsienna: "ea7e5d",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "0ff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkgrey: "a9a9a9",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkslategrey: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dimgrey: "696969",
                    dodgerblue: "1e90ff",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "f0f",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    grey: "808080",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgray: "d3d3d3",
                    lightgreen: "90ee90",
                    lightgrey: "d3d3d3",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslategray: "789",
                    lightslategrey: "789",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "0f0",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "f0f",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370db",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "db7093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    rebeccapurple: "663399",
                    red: "f00",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    slategrey: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    wheat: "f5deb3",
                    white: "fff",
                    whitesmoke: "f5f5f5",
                    yellow: "ff0",
                    yellowgreen: "9acd32"
                }, $ = e.hexNames = A(X), G = function() {
                    var t = "[-\\+]?\\d+%?", e = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + e + ")|(?:" + t + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
                    return {
                        rgb: new RegExp("rgb" + n),
                        rgba: new RegExp("rgba" + a),
                        hsl: new RegExp("hsl" + n),
                        hsla: new RegExp("hsla" + a),
                        hsv: new RegExp("hsv" + n),
                        hsva: new RegExp("hsva" + a),
                        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                    };
                }();
                "undefined" != typeof r && r.exports ? r.exports = e : "function" == typeof t && t.amd ? t(function() {
                    return e;
                }) : window.tinycolor = e;
            }();
        }, {} ],
        8: [ function(t, e) {
            "use strict";
            function r(t, e) {
                function r(e, r) {
                    return i.Lib.coerce(t, n, o.layoutAttributes, e, r);
                }
                var n = {};
                r("opacity"), r("align"), r("bgcolor");
                var a = r("bordercolor"), l = i.Color.opacity(a);
                r("borderpad");
                var s = r("borderwidth"), c = r("showarrow");
                c && (r("arrowcolor", l ? n.bordercolor : i.Color.defaultLine), r("arrowhead"), 
                r("arrowsize"), r("arrowwidth", 2 * (l && s || 1)), r("ax"), r("ay"), i.Lib.noneOrAll(t, n, [ "ax", "ay" ])), 
                r("text", c ? "&nbsp;" : "new text"), r("textangle"), r("font", e.font);
                for (var d = [ "x", "y" ], u = 0; 2 > u; u++) {
                    var f = d[u], h = {
                        _fullLayout: e
                    }, p = i.Axes.coerceRef(t, n, h, f), g = .5;
                    if ("paper" !== p) {
                        var m = i.Axes.getFromId(h, p);
                        if (g = m.range[0] + g * (m.range[1] - m.range[0]), -1 !== [ "date", "category" ].indexOf(m.type) && "string" == typeof t[f]) {
                            var y;
                            "date" === m.type ? (y = i.Lib.dateTime2ms(t[f]), y !== !1 && (t[f] = y)) : (m._categories || []).length && (y = m._categories.indexOf(t[f]), 
                            -1 !== y && (t[f] = y));
                        }
                    }
                    r(f, g), c || r(f + "anchor");
                }
                return i.Lib.noneOrAll(t, n, [ "x", "y" ]), n;
            }
            function n(t) {
                var e = t._fullLayout;
                e.annotations.forEach(function(e) {
                    var r = i.Axes.getFromId(t, e.xref), n = i.Axes.getFromId(t, e.yref);
                    if (r || n) {
                        var a = (e._xsize || 0) / 2, o = e._xshift || 0, l = (e._ysize || 0) / 2, s = e._yshift || 0, c = a - o, d = a + o, u = l - s, f = l + s;
                        if (e.showarrow) {
                            var h = 3 * e.arrowsize * e.arrowwidth;
                            c = Math.max(c, h), d = Math.max(d, h), u = Math.max(u, h), f = Math.max(f, h);
                        }
                        r && r.autorange && i.Axes.expand(r, [ r.l2c(e.x) ], {
                            ppadplus: d,
                            ppadminus: c
                        }), n && n.autorange && i.Axes.expand(n, [ n.l2c(e.y) ], {
                            ppadplus: f,
                            ppadminus: u
                        });
                    }
                });
            }
            function a(t, e, r, n, a, o, i, l) {
                var s = r - t, c = a - t, d = i - a, u = n - e, f = o - e, h = l - o, p = s * h - d * u;
                if (0 === p) return null;
                var g = (c * h - d * f) / p, m = (c * u - s * f) / p;
                return 0 > m || m > 1 || 0 > g || g > 1 ? null : {
                    x: t + s * g,
                    y: e + u * g
                };
            }
            var o = e.exports = {}, i = t("./plotly"), l = t("./isnumeric");
            o.ARROWPATHS = [ "", {
                path: "M-2.4,-3V3L0.6,0Z",
                backoff: .6
            }, {
                path: "M-3.7,-2.5V2.5L1.3,0Z",
                backoff: 1.3
            }, {
                path: "M-4.45,-3L-1.65,-0.2V0.2L-4.45,3L1.55,0Z",
                backoff: 1.55
            }, {
                path: "M-2.2,-2.2L-0.2,-0.2V0.2L-2.2,2.2L-1.4,3L1.6,0L-1.4,-3Z",
                backoff: 1.6
            }, {
                path: "M-4.4,-2.1L-0.6,-0.2V0.2L-4.4,2.1L-4,3L2,0L-4,-3Z",
                backoff: 2
            }, {
                path: "M2,0A2,2 0 1,1 0,-2A2,2 0 0,1 2,0Z",
                backoff: 0
            }, {
                path: "M2,2V-2H-2V2Z",
                backoff: 0
            } ], o.layoutAttributes = {
                text: {
                    type: "string",
                    blankOk: !1
                },
                textangle: {
                    type: "angle",
                    dflt: 0
                },
                font: {
                    type: "font"
                },
                opacity: {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 1
                },
                align: {
                    type: "enumerated",
                    values: [ "left", "center", "right" ],
                    dflt: "center"
                },
                bgcolor: {
                    type: "color",
                    dflt: "rgba(0,0,0,0)"
                },
                bordercolor: {
                    type: "color",
                    dflt: "rgba(0,0,0,0)"
                },
                borderpad: {
                    type: "number",
                    min: 0,
                    dflt: 1
                },
                borderwidth: {
                    type: "number",
                    min: 0,
                    dflt: 1
                },
                showarrow: {
                    type: "boolean",
                    dflt: !0
                },
                arrowcolor: {
                    type: "color"
                },
                arrowhead: {
                    type: "integer",
                    min: 0,
                    max: o.ARROWPATHS.length,
                    dflt: 1
                },
                arrowsize: {
                    type: "number",
                    min: .3,
                    dflt: 1
                },
                arrowwidth: {
                    type: "number",
                    min: .1
                },
                ax: {
                    type: "number",
                    dflt: -10
                },
                ay: {
                    type: "number",
                    dflt: -30
                },
                xref: {
                    type: "enumerated"
                },
                x: {
                    type: "number"
                },
                xanchor: {
                    type: "enumerated",
                    values: [ "auto", "left", "center", "right" ],
                    dflt: "auto"
                },
                yref: {
                    type: "enumerated"
                },
                y: {
                    type: "number"
                },
                yanchor: {
                    type: "enumerated",
                    values: [ "auto", "top", "middle", "bottom" ],
                    dflt: "auto"
                }
            }, o.supplyLayoutDefaults = function(t, e) {
                for (var n = t.annotations || [], a = e.annotations = [], o = 0; o < n.length; o++) a.push(r(n[o] || {}, e));
            }, o.drawAll = function(t) {
                var e = t._fullLayout;
                e._infolayer.selectAll(".annotation").remove();
                for (var r = 0; r < e.annotations.length; r++) o.draw(t, r);
                return i.Plots.previousPromises(t);
            }, o.add = function(t) {
                var e = t._fullLayout.annotations.length;
                i.relayout(t, "annotations[" + e + "]", "add");
            }, o.draw = function(t, e, n, s) {
                function c(t) {
                    return t.call(i.Drawing.font, X).attr({
                        "text-anchor": {
                            left: "start",
                            right: "end"
                        }[T.align] || "middle"
                    }), i.util.convertToTspans(t, d), t;
                }
                function d() {
                    function r(t, e) {
                        return "auto" === e && (e = 1 / 3 > t ? "left" : t > 2 / 3 ? "right" : "center"), 
                        {
                            center: 0,
                            middle: 0,
                            left: .5,
                            bottom: -.5,
                            right: -.5,
                            top: .5
                        }[e];
                    }
                    G.selectAll("tspan.line").attr({
                        y: 0,
                        x: 0
                    });
                    var n = R.select(".annotation-math-group"), l = !n.empty(), s = i.Drawing.bBox((l ? n : G).node()), c = s.width, d = s.height, u = Math.round(c + 2 * q), f = Math.round(d + 2 * q);
                    T._w = c, T._h = d;
                    var p = !1;
                    if ([ "x", "y" ].forEach(function(e) {
                        var n, a = i.Axes.getFromId(t, T[e + "ref"] || e), o = (N + ("x" === e ? 0 : 90)) * Math.PI / 180, l = u * Math.abs(Math.cos(o)) + f * Math.abs(Math.sin(o)), s = T[e + "anchor"];
                        if (a) {
                            if (!a.autorange && (T[e] - a.range[0]) * (T[e] - a.range[1]) > 0) return void (p = !0);
                            j[e] = a._offset + a.l2p(T[e]), n = .5;
                        } else n = T[e], "y" === e && (n = 1 - n), j[e] = "x" === e ? _.l + _.w * n : _.t + _.h * n;
                        var c = 0;
                        c = T.showarrow ? T["a" + e] : l * r(n, s), j[e] += c, T["_" + e + "type"] = a && a.type, 
                        T["_" + e + "size"] = l, T["_" + e + "shift"] = c;
                    }), p) return void R.remove();
                    var g, m;
                    T.showarrow && (g = i.Lib.constrain(j.x - T.ax, 1, h.width - 1), m = i.Lib.constrain(j.y - T.ay, 1, h.height - 1)), 
                    j.x = i.Lib.constrain(j.x, 1, h.width - 1), j.y = i.Lib.constrain(j.y, 1, h.height - 1);
                    var y = q - s.top, v = q - s.left;
                    l ? n.select("svg").attr({
                        x: q - 1,
                        y: q
                    }) : (G.attr({
                        x: v,
                        y: y
                    }), G.selectAll("tspan.line").attr({
                        y: y,
                        x: v
                    })), Z.call(i.Drawing.setRect, H / 2, H / 2, u - H, f - H), R.call(i.Drawing.setRect, Math.round(j.x - u / 2), Math.round(j.y - f / 2), u, f);
                    var x = "annotations[" + e + "]", b = function(r, n) {
                        $(t).find('.annotation-arrow-g[data-index="' + e + '"]').remove();
                        var l = j.x + r, s = j.y + n, c = i.Lib.rotationXYMatrix(N, l, s), d = i.Lib.apply2DTransform(c), u = i.Lib.apply2DTransform2(c), f = Z.attr("width") / 2, h = Z.attr("height") / 2, p = [ [ l - f, s - h, l - f, s + h ], [ l - f, s + h, l + f, s + h ], [ l + f, s + h, l + f, s - h ], [ l + f, s - h, l - f, s - h ] ].map(u);
                        if (!p.reduce(function(t, e) {
                            return t ^ !!a(g, m, g + 1e6, m + 1e6, e[0], e[1], e[2], e[3]);
                        }, !1)) {
                            p.forEach(function(t) {
                                var e = a(l, s, g, m, t[0], t[1], t[2], t[3]);
                                e && (l = e.x, s = e.y);
                            });
                            var y = T.arrowwidth, v = T.arrowcolor, b = B.append("g").style({
                                opacity: i.Color.opacity(v)
                            }).classed("annotation-arrow-g", !0).attr("data-index", String(e)), w = b.append("path").attr("d", "M" + l + "," + s + "L" + g + "," + m).style("stroke-width", y + "px").call(i.Color.stroke, i.Color.rgb(v));
                            o.arrowhead(w, T.arrowhead, "end", T.arrowsize);
                            var k = b.append("path").classed("annotation", !0).classed("anndrag", !0).attr({
                                "data-index": String(e),
                                d: "M3,3H-3V-3H3ZM0,0L" + (l - g) + "," + (s - m),
                                transform: "translate(" + g + "," + m + ")"
                            }).style("stroke-width", y + 6 + "px").call(i.Color.stroke, "rgba(0,0,0,0)").call(i.Color.fill, "rgba(0,0,0,0)");
                            if (t._context.editable) {
                                var A, M, L;
                                i.Fx.dragElement({
                                    element: k.node(),
                                    prepFn: function() {
                                        M = Number(R.attr("x")), L = Number(R.attr("y")), A = {}, E && E.autorange && (A[E._name + ".autorange"] = !0), 
                                        I && I.autorange && (A[I._name + ".autorange"] = !0);
                                    },
                                    moveFn: function(t, e) {
                                        b.attr("transform", "translate(" + t + "," + e + ")");
                                        var r = d(M, L), n = r[0] + t, a = r[1] + e;
                                        R.call(i.Drawing.setPosition, n, a), A[x + ".x"] = E ? T.x + t / E._m : (g + t - _.l) / _.w, 
                                        A[x + ".y"] = I ? T.y + e / I._m : 1 - (m + e - _.t) / _.h, F.attr({
                                            transform: "rotate(" + N + "," + n + "," + a + ")"
                                        });
                                    },
                                    doneFn: function(e) {
                                        if (e) {
                                            i.relayout(t, A);
                                            var r = document.querySelector(".js-notes-box-panel");
                                            r && r.redraw(r.selectedObj);
                                        }
                                    }
                                });
                            }
                        }
                    };
                    T.showarrow && b(0, 0);
                    var w = i.Lib.rotationXYMatrix(N, j.x, j.y), k = i.Lib.apply2DTransform(w);
                    if (t._context.editable) {
                        var A, M, L;
                        i.Fx.dragElement({
                            element: R.node(),
                            prepFn: function() {
                                A = Number(R.attr("x")), M = Number(R.attr("y")), L = {};
                            },
                            moveFn: function(t, e) {
                                R.call(i.Drawing.setPosition, A + t, M + e);
                                var r = "pointer";
                                if (T.showarrow) L[x + ".ax"] = T.ax + t, L[x + ".ay"] = T.ay + e, b(t, e); else {
                                    if (E) L[x + ".x"] = T.x + t / E._m; else {
                                        var n = T._xsize / _.w, a = T.x + T._xshift / _.w - n / 2;
                                        L[x + ".x"] = i.Fx.dragAlign(a + t / _.w, n, 0, 1, T.xanchor);
                                    }
                                    if (I) L[x + ".y"] = T.y + e / I._m; else {
                                        var o = T._ysize / _.h, l = T.y - T._yshift / _.h - o / 2;
                                        L[x + ".y"] = i.Fx.dragAlign(l - e / _.h, o, 0, 1, T.yanchor);
                                    }
                                    E && I || (r = i.Fx.dragCursors(E ? .5 : L[x + ".x"], I ? .5 : L[x + ".y"], T.xanchor, T.yanchor));
                                }
                                var s = k(A, M), c = s[0] + t, d = s[1] + e;
                                R.call(i.Drawing.setPosition, c, d), F.attr({
                                    transform: "rotate(" + N + "," + c + "," + d + ")"
                                }), i.Fx.setCursor(R, r);
                            },
                            doneFn: function(e) {
                                if (i.Fx.setCursor(R), e) {
                                    i.relayout(t, L);
                                    var r = document.querySelector(".js-notes-box-panel");
                                    r && r.redraw(r.selectedObj);
                                }
                            }
                        });
                    }
                }
                var u, f = t.layout, h = t._fullLayout;
                if (!l(e) || -1 === e) {
                    if (!e && Array.isArray(s)) return f.annotations = s, o.supplyLayoutDefaults(f, h), 
                    void o.drawAll(t);
                    if ("remove" === s) return delete f.annotations, h.annotations = [], void o.drawAll(t);
                    if (n && "add" !== s) {
                        for (u = 0; u < h.annotations.length; u++) o.draw(t, u, n, s);
                        return;
                    }
                    e = h.annotations.length, h.annotations.push({});
                }
                if (!n && s) {
                    if ("remove" === s) {
                        for (h._infolayer.selectAll('.annotation[data-index="' + e + '"]').remove(), h.annotations.splice(e, 1), 
                        f.annotations.splice(e, 1), u = e; u < h.annotations.length; u++) h._infolayer.selectAll('.annotation[data-index="' + (u + 1) + '"]').attr("data-index", String(u)), 
                        o.draw(t, u);
                        return;
                    }
                    if ("add" === s || $.isPlainObject(s)) {
                        h.annotations.splice(e, 0, {});
                        var p = $.isPlainObject(s) ? $.extend({}, s) : {
                            text: "New text"
                        };
                        for (f.annotations ? f.annotations.splice(e, 0, p) : f.annotations = [ p ], u = h.annotations.length - 1; u > e; u--) h._infolayer.selectAll('.annotation[data-index="' + (u - 1) + '"]').attr("data-index", String(u)), 
                        o.draw(t, u);
                    }
                }
                h._infolayer.selectAll('.annotation[data-index="' + e + '"]').remove();
                var g = f.annotations[e], m = h.annotations[e];
                if (g) {
                    var y = {
                        xref: g.xref,
                        yref: g.yref
                    }, v = {};
                    "string" == typeof n && n ? v[n] = s : $.isPlainObject(n) && (v = n);
                    var x = Object.keys(v);
                    for (u = 0; u < x.length; u++) {
                        var b = x[u];
                        i.Lib.nestedProperty(g, b).set(v[b]);
                    }
                    var _ = h._size, w = [ "x", "y" ];
                    for (u = 0; 2 > u; u++) {
                        var k = w[u];
                        if (void 0 === v[k] && void 0 !== g[k]) {
                            var A = i.Axes.getFromId(t, i.Axes.coerceRef(y, {}, t, k)), M = i.Axes.getFromId(t, i.Axes.coerceRef(g, {}, t, k)), L = g[k], z = m["_" + k + "type"];
                            if (void 0 !== v[k + "ref"]) {
                                var C = "auto" === g[k + "anchor"], D = "x" === k ? _.w : _.h, O = (m["_" + k + "size"] || 0) / (2 * D);
                                if (A && M) L = (L - A.range[0]) / (A.range[1] - A.range[0]), L = M.range[0] + L * (M.range[1] - M.range[0]); else if (A) {
                                    if (L = (L - A.range[0]) / (A.range[1] - A.range[0]), L = A.domain[0] + L * (A.domain[1] - A.domain[0]), 
                                    C) {
                                        var S = L + O, P = L - O;
                                        2 / 3 > L + P ? L = P : L + S > 4 / 3 && (L = S);
                                    }
                                } else M && (C && (1 / 3 > L ? L += O : L > 2 / 3 && (L -= O)), L = (L - M.domain[0]) / (M.domain[1] - M.domain[0]), 
                                L = M.range[0] + L * (M.range[1] - M.range[0]));
                            }
                            M && M === A && z && ("log" === z && "log" !== M.type ? L = Math.pow(10, L) : "log" !== z && "log" === M.type && (L = L > 0 ? Math.log(L) / Math.LN10 : void 0)), 
                            g[k] = L;
                        }
                    }
                    var T = r(g, h);
                    h.annotations[e] = T;
                    var E = i.Axes.getFromId(t, T.xref), I = i.Axes.getFromId(t, T.yref), j = {
                        x: 0,
                        y: 0
                    }, N = +T.textangle || 0, B = h._infolayer.append("g").classed("annotation", !0).attr("data-index", String(e)).style("opacity", T.opacity).on("click", function() {
                        t._dragging = !1, $(t).trigger("plotly_clickannotation", {
                            index: e,
                            annotation: g,
                            fullAnnotation: T
                        });
                    }), F = B.append("g").classed("annotation-text-g", !0).attr("data-index", String(e)), R = F.append("svg").call(i.Drawing.setPosition, 0, 0), H = T.borderwidth, V = T.borderpad, q = H + V, Z = R.append("rect").attr("class", "bg").style("stroke-width", H + "px").call(i.Color.stroke, T.bordercolor).call(i.Color.fill, T.bgcolor), X = T.font, G = R.append("text").classed("annotation", !0).attr("data-unformatted", T.text).text(T.text);
                    t._context.editable ? G.call(i.util.makeEditable, R).call(c).on("edit", function(r) {
                        T.text = r, this.attr({
                            "data-unformatted": T.text
                        }), this.call(c);
                        var n = {};
                        n["annotations[" + e + "].text"] = T.text, E && E.autorange && (n[E._name + ".autorange"] = !0), 
                        I && I.autorange && (n[I._name + ".autorange"] = !0), i.relayout(t, n);
                    }) : G.call(c), F.attr({
                        transform: "rotate(" + N + "," + j.x + "," + j.y + ")"
                    }).call(i.Drawing.setPosition, j.x, j.y);
                }
            }, o.arrowhead = function(t, e, r, n) {
                l(n) || (n = 1);
                var a = t.node(), s = o.ARROWPATHS[e || 0];
                if (s) {
                    "string" == typeof r && r || (r = "end");
                    var c, d, u, f, h = (i.Drawing.getPx(t, "stroke-width") || 1) * n, p = t.style("stroke") || i.Color.defaultLine, g = t.style("stroke-opacity") || 1, m = r.indexOf("start") >= 0, y = r.indexOf("end") >= 0, v = s.backoff * h;
                    if ("line" === a.nodeName) {
                        if (c = {
                            x: +t.attr("x1"),
                            y: +t.attr("y1")
                        }, d = {
                            x: +t.attr("x2"),
                            y: +t.attr("y2")
                        }, u = Math.atan2(c.y - d.y, c.x - d.x), f = u + Math.PI, v) {
                            var x = v * Math.cos(u), b = v * Math.sin(u);
                            m && (c.x -= x, c.y -= b, t.attr({
                                x1: c.x,
                                y1: c.y
                            })), y && (d.x += x, d.y += b, t.attr({
                                x2: d.x,
                                y2: d.y
                            }));
                        }
                    } else if ("path" === a.nodeName) {
                        var _ = a.getTotalLength(), w = "";
                        if (m) {
                            var k = a.getPointAtLength(0), A = a.getPointAtLength(.1);
                            u = Math.atan2(k.y - A.y, k.x - A.x), c = a.getPointAtLength(Math.min(v, _)), v && (w = "0px," + v + "px,");
                        }
                        if (y) {
                            var M = a.getPointAtLength(_), L = a.getPointAtLength(_ - .1);
                            if (f = Math.atan2(M.y - L.y, M.x - L.x), d = a.getPointAtLength(Math.max(0, _ - v)), 
                            v) {
                                var z = w ? 2 * v : v;
                                w += _ - z + "px," + _ + "px";
                            }
                        } else w && (w += _ + "px");
                        w && t.style("stroke-dasharray", w);
                    }
                    var C = function(r, n) {
                        e > 5 && (n = 0), d3.select(a.parentElement).append("path").attr({
                            "class": t.attr("class"),
                            d: s.path,
                            transform: "translate(" + r.x + "," + r.y + ")rotate(" + 180 * n / Math.PI + ")scale(" + h + ")"
                        }).style({
                            fill: p,
                            opacity: g,
                            "stroke-width": 0
                        });
                    };
                    m && C(c, u), y && C(d, f);
                }
            }, o.calcAutorange = function(t) {
                var e = t._fullLayout, r = e.annotations;
                if (r.length && t._fullData.length) {
                    var a = {};
                    r.forEach(function(t) {
                        a[t.xref] = !0, a[t.yref] = !0;
                    });
                    var l = i.Axes.list(t).filter(function(t) {
                        return t.autorange && a[t._id];
                    });
                    if (l.length) return i.Lib.syncOrAsync([ o.drawAll, n ], t);
                }
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27
        } ],
        9: [ function(t, e) {
            "use strict";
            function r(t, e) {
                if ("-" === t.type) {
                    var r = t._id, i = r.charAt(0);
                    -1 !== r.indexOf("scene") && (r = i);
                    var l = o(e, r, i);
                    if (l) {
                        if ("histogram" === l.type && i === {
                            v: "y",
                            h: "x"
                        }[l.orientation || "v"]) return void (t.type = "linear");
                        if (a(l, i)) {
                            for (var s, c = n(l), d = [], u = 0; u < e.length; u++) s = e[u], M.Plots.traceIs(s, "box") && (s[i + "axis"] || i) === r && d.push(void 0 !== s[c] ? s[c][0] : void 0 !== s.name ? s.name : "text");
                            t.type = A.autoType(d);
                        } else t.type = A.autoType(l[i] || [ l[i + "0"] ]);
                    }
                }
            }
            function n(t) {
                return {
                    v: "x",
                    h: "y"
                }[t.orientation || "v"];
            }
            function a(t, e) {
                var r = n(t);
                return M.Plots.traceIs(t, "box") && e === r && void 0 === t[r] && void 0 === t[r + "0"];
            }
            function o(t, e, r) {
                for (var n, o = 0; o < t.length; o++) if (n = t[o], (n[r + "axis"] || r) === e) {
                    if (a(n, r)) return n;
                    if ((n[r] || []).length || n[r + "0"]) return n;
                }
            }
            function i(t) {
                if (!t) return !1;
                for (var e = 0; e < t.length; e++) if (L(t[e])) return !0;
                return !1;
            }
            function l(t) {
                var e, r, n = t.tickvals, a = t.ticktext, o = new Array(n.length), i = 1.0001 * t.range[0] - 1e-4 * t.range[1], l = 1.0001 * t.range[1] - 1e-4 * t.range[0], s = Math.min(i, l), c = Math.max(i, l), d = 0;
                for (Array.isArray(a) || (a = []), r = 0; r < n.length; r++) e = t.d2l(n[r]), e > s && c > e && (o[d] = void 0 === a[r] ? A.tickText(t, e) : u(t, e, String(a[r])), 
                d++);
                return d < n.length && o.splice(d, n.length - d), o;
            }
            function s(t, e, r) {
                return e * M.Lib.roundUp(t / e, r);
            }
            function c(t) {
                var e, r = t.dtick;
                if (t._tickexponent = 0, L(r) || "string" == typeof r || (r = 1), "category" === t.type) t._tickround = null; else if (L(r) || "L" === r.charAt(0)) if ("date" === t.type) t._tickround = r >= 864e5 ? "d" : r >= 36e5 ? "H" : r >= 6e4 ? "M" : r >= 1e3 ? "S" : 3 - Math.round(Math.log(r / 2) / Math.LN10); else {
                    L(r) || (r = Number(r.substr(1))), t._tickround = 2 - Math.floor(Math.log(r) / Math.LN10 + .01), 
                    e = "log" === t.type ? Math.pow(10, Math.max(t.range[0], t.range[1])) : Math.max(Math.abs(t.range[0]), Math.abs(t.range[1]));
                    var n = Math.floor(Math.log(e) / Math.LN10 + .01);
                    Math.abs(n) > 3 && (t._tickexponent = "SI" === t.exponentformat || "B" === t.exponentformat ? 3 * Math.round((n - 1) / 3) : n);
                } else t._tickround = "M" === r.charAt(0) ? 2 === r.length ? "m" : "y" : null;
            }
            function d(t, e) {
                var r = t.match(Z), n = new Date(e);
                if (r) {
                    var a = Math.min(+r[1] || 6, 6), o = String(e / 1e3 % 1 + 2.0000005).substr(2, a).replace(/0+$/, "") || "0";
                    return d3.time.format(t.replace(Z, o))(n);
                }
                return d3.time.format(t)(n);
            }
            function u(t, e, r) {
                var n = t.tickfont || t._td._fullLayout.font;
                return {
                    x: e,
                    dx: 0,
                    dy: 0,
                    text: r || "",
                    fontSize: n.size,
                    font: n.family,
                    fontColor: n.color
                };
            }
            function f(t, e, r, n) {
                var a, o = e.x, i = t._tickround, l = new Date(o), s = "";
                r && t.hoverformat ? a = d(t.hoverformat, o) : t.tickformat ? a = d(t.tickformat, o) : (n && (L(i) ? i += 2 : i = {
                    y: "m",
                    m: "d",
                    d: "H",
                    H: "M",
                    M: "S",
                    S: 2
                }[i]), "y" === i ? a = B(l) : "m" === i ? a = F(l) : (o !== t._tmin || r || (s = "<br>" + B(l)), 
                "d" === i ? a = R(l) : "H" === i ? a = H(l) : (o !== t._tmin || r || (s = "<br>" + R(l) + ", " + B(l)), 
                a = V(l), "M" !== i && (a += q(l), "S" !== i && (a += m(k(o / 1e3, 1), t, "none", r).substr(1)))))), 
                e.text = a + s;
            }
            function h(t, e, r, n, a) {
                var o = t.dtick, i = e.x;
                if (!n || "string" == typeof o && "L" === o.charAt(0) || (o = "L3"), t.tickformat || "string" == typeof o && "L" === o.charAt(0)) e.text = m(Math.pow(10, i), t, a, n); else if (L(o) || "D" === o.charAt(0) && k(i + .01, 1) < .1) if (-1 !== [ "e", "E", "power" ].indexOf(t.exponentformat)) {
                    var l = Math.round(i);
                    e.text = 0 === l ? 1 : 1 === l ? "10" : l > 1 ? "10<sup>" + l + "</sup>" : "10<sup>−" + -l + "</sup>", 
                    e.fontSize *= 1.25;
                } else e.text = m(Math.pow(10, i), t, "", "fakehover"), "D1" === o && "y" === t._id.charAt(0) && (e.dy -= e.fontSize / 6); else {
                    if ("D" !== o.charAt(0)) throw "unrecognized dtick " + String(o);
                    e.text = String(Math.round(Math.pow(10, k(i, 1)))), e.fontSize *= .75;
                }
                if ("D1" === t.dtick) {
                    var s = String(e.text).charAt(0);
                    ("0" === s || "1" === s) && ("y" === t._id.charAt(0) ? e.dx -= e.fontSize / 4 : (e.dy += e.fontSize / 2, 
                    e.dx += (t.range[1] > t.range[0] ? 1 : -1) * e.fontSize * (0 > i ? .5 : .25)));
                }
            }
            function p(t, e) {
                var r = t._categories[Math.round(e.x)];
                void 0 === r && (r = ""), e.text = String(r);
            }
            function g(t, e, r, n, a) {
                "all" === t.showexponent && Math.abs(e.x / t.dtick) < 1e-6 && (a = "hide"), e.text = m(e.x, t, a, n);
            }
            function m(t, e, r, n) {
                var a = 0 > t, o = e._tickround, i = r || e.exponentformat || "B", l = e._tickexponent, s = e.tickformat;
                if (n) {
                    var d = {
                        exponentformat: e.exponentformat,
                        dtick: "none" === e.showexponent ? e.dtick : L(t) ? Math.abs(t) || 1 : 1,
                        range: "none" === e.showexponent ? e.range : [ 0, t || 1 ]
                    };
                    c(d), o = (Number(d._tickround) || 0) + 4, l = d._tickexponent, e.hoverformat && (s = e.hoverformat);
                }
                if (s) return d3.format(s)(t).replace(/-/g, "−");
                var u = Math.pow(10, -o) / 2;
                if ("none" === i && (l = 0), t = Math.abs(t), u > t) t = "0", a = !1; else {
                    if (t += u, l && (t *= Math.pow(10, -l), o += l), 0 === o) t = String(Math.floor(t)); else if (0 > o) {
                        t = String(Math.round(t)), t = t.substr(0, t.length + o);
                        for (var f = o; 0 > f; f++) t += "0";
                    } else {
                        t = String(t);
                        var h = t.indexOf(".") + 1;
                        h && (t = t.substr(0, h + o).replace(/\.?0+$/, ""));
                    }
                    t = y(t, e._td._fullLayout.separators);
                }
                if (l && "hide" !== i) {
                    var p;
                    p = 0 > l ? "−" + -l : "power" !== i ? "+" + l : String(l), "e" === i || ("SI" === i || "B" === i) && (l > 12 || -15 > l) ? t += "e" + p : "E" === i ? t += "E" + p : "power" === i ? t += "&times;10<sup>" + p + "</sup>" : "B" === i && 9 === l ? t += "B" : ("SI" === i || "B" === i) && (t += X[l / 3 + 5]);
                }
                return a ? "−" + t : t;
            }
            function y(t, e) {
                var r = e.charAt(0), n = e.charAt(1), a = t.split("."), o = a[0], i = a.length > 1 ? r + a[1] : "";
                if (n && (a.length > 1 || o.length > 4)) for (;$.test(o); ) o = o.replace($, "$1" + n + "$2");
                return o + i;
            }
            function v(t, e, r) {
                function n(t) {
                    return Object.keys(t).filter(function(t) {
                        return e && t.charAt(0) !== e ? !1 : t.match(/^[xyz]axis[0-9]*/g);
                    }).sort();
                }
                var a = t._fullLayout;
                if (!a) return [];
                var o = n(a);
                if (r) return o;
                var i = [], l = M.Plots.getSubplotIds(a, "gl3d");
                return l && l.forEach(function(t) {
                    i = i.concat(n(a[t]).map(function(e) {
                        return t + "." + e;
                    }));
                }), o.concat(i);
            }
            function x(t, e) {
                var r, n, a = [];
                for (r = 0; r < e.length; r++) {
                    var o = [], i = t._fullData[e[r]].xaxis, l = t._fullData[e[r]].yaxis;
                    if (i && l) {
                        for (n = 0; n < a.length; n++) (-1 !== a[n].x.indexOf(i) || -1 !== a[n].y.indexOf(l)) && o.push(n);
                        if (o.length) {
                            var s, c = a[o[0]];
                            if (o.length > 1) for (n = 1; n < o.length; n++) s = a[o[n]], b(c.x, s.x), b(c.y, s.y);
                            b(c.x, [ i ]), b(c.y, [ l ]);
                        } else a.push({
                            x: [ i ],
                            y: [ l ]
                        });
                    }
                }
                return a;
            }
            function b(t, e) {
                for (var r = 0; r < e.length; r++) -1 === t.indexOf(e[r]) && t.push(e[r]);
            }
            function _(t, e, r) {
                var n, a, o = [], i = [], l = t.layout;
                for (n = 0; n < e.length; n++) o.push(A.getFromId(t, e[n]));
                for (n = 0; n < r.length; n++) i.push(A.getFromId(t, r[n]));
                var s = Object.keys(o[0]), c = [ "anchor", "domain", "overlaying", "position", "side", "tickangle" ], d = [ "linear", "log" ];
                for (n = 0; n < s.length; n++) {
                    var u = s[n], f = o[0][u], h = i[0][u], p = !0, g = !1, m = !1;
                    if ("_" !== u.charAt(0) && "function" != typeof f && -1 === c.indexOf(u)) {
                        for (a = 1; a < o.length && p; a++) {
                            var y = o[a][u];
                            "type" === u && -1 !== d.indexOf(f) && -1 !== d.indexOf(y) && f !== y ? g = !0 : y !== f && (p = !1);
                        }
                        for (a = 1; a < i.length && p; a++) {
                            var v = i[a][u];
                            "type" === u && -1 !== d.indexOf(h) && -1 !== d.indexOf(v) && h !== v ? m = !0 : i[a][u] !== h && (p = !1);
                        }
                        p && (g && (l[o[0]._name].type = "linear"), m && (l[i[0]._name].type = "linear"), 
                        w(l, u, o, i));
                    }
                }
                for (n = 0; n < t._fullLayout.annotations.length; n++) {
                    var x = t._fullLayout.annotations[n];
                    -1 !== e.indexOf(x.xref) && -1 !== r.indexOf(x.yref) && M.Lib.swapAttrs(l.annotations[n], [ "?" ]);
                }
            }
            function w(t, e, r, n) {
                var a, o = M.Lib.nestedProperty, i = o(t[r[0]._name], e).get(), l = o(t[n[0]._name], e).get();
                for ("title" === e && ("Click to enter X axis title" === i && (i = "Click to enter Y axis title"), 
                "Click to enter Y axis title" === l && (l = "Click to enter X axis title")), a = 0; a < r.length; a++) o(t, r[a]._name + "." + e).set(l);
                for (a = 0; a < n.length; a++) o(t, n[a]._name + "." + e).set(i);
            }
            function k(t, e) {
                return (t % e + e) % e;
            }
            var A = e.exports = {}, M = t("./plotly"), L = t("./isnumeric");
            A.layoutAttributes = {
                title: {
                    type: "string"
                },
                titlefont: {
                    type: "font"
                },
                type: {
                    type: "enumerated",
                    values: [ "-", "linear", "log", "date", "category" ],
                    dflt: "-"
                },
                autorange: {
                    type: "enumerated",
                    values: [ !0, !1, "reversed" ],
                    dflt: !0
                },
                rangemode: {
                    type: "enumerated",
                    values: [ "normal", "tozero", "nonnegative" ],
                    dflt: "normal"
                },
                range: [ {
                    type: "number"
                }, {
                    type: "number"
                } ],
                fixedrange: {
                    type: "boolean",
                    dflt: !1
                },
                tickmode: {
                    type: "enumerated",
                    values: [ "auto", "linear", "array" ]
                },
                nticks: {
                    type: "integer",
                    min: 0,
                    dflt: 0
                },
                tick0: {
                    type: "number",
                    dflt: 0
                },
                dtick: {
                    type: "any",
                    dflt: 1
                },
                tickvals: {
                    type: "data_array"
                },
                ticktext: {
                    type: "data_array"
                },
                ticks: {
                    type: "enumerated",
                    values: [ "outside", "inside", "" ]
                },
                mirror: {
                    type: "enumerated",
                    values: [ !0, "ticks", !1, "all", "allticks" ],
                    dflt: !1
                },
                ticklen: {
                    type: "number",
                    min: 0,
                    dflt: 5
                },
                tickwidth: {
                    type: "number",
                    min: 0,
                    dflt: 1
                },
                tickcolor: {
                    type: "color",
                    dflt: M.Color.defaultLine
                },
                showticklabels: {
                    type: "boolean",
                    dflt: !0
                },
                tickfont: {
                    type: "font"
                },
                tickangle: {
                    type: "angle",
                    dflt: "auto"
                },
                tickprefix: {
                    type: "string",
                    dflt: ""
                },
                showtickprefix: {
                    type: "enumerated",
                    values: [ "all", "first", "last", "none" ],
                    dflt: "all"
                },
                ticksuffix: {
                    type: "string",
                    dflt: ""
                },
                showticksuffix: {
                    type: "enumerated",
                    values: [ "all", "first", "last", "none" ],
                    dflt: "all"
                },
                showexponent: {
                    type: "enumerated",
                    values: [ "all", "first", "last", "none" ],
                    dflt: "all"
                },
                exponentformat: {
                    type: "enumerated",
                    values: [ "none", "e", "E", "power", "SI", "B" ],
                    dflt: "B"
                },
                tickformat: {
                    type: "string",
                    dflt: ""
                },
                hoverformat: {
                    type: "string",
                    dflt: ""
                },
                showline: {
                    type: "boolean",
                    dflt: !1
                },
                linecolor: {
                    type: "color",
                    dflt: M.Color.defaultLine
                },
                linewidth: {
                    type: "number",
                    min: 0,
                    dflt: 1
                },
                showgrid: {
                    type: "boolean"
                },
                gridcolor: {
                    type: "color",
                    dflt: M.Color.lightLine
                },
                gridwidth: {
                    type: "number",
                    min: 0,
                    dflt: 1
                },
                zeroline: {
                    type: "boolean"
                },
                zerolinecolor: {
                    type: "color",
                    dflt: M.Color.defaultLine
                },
                zerolinewidth: {
                    type: "number",
                    dflt: 1
                },
                anchor: {
                    type: "enumerated"
                },
                side: {
                    type: "enumerated"
                },
                overlaying: {
                    type: "enumerated"
                },
                domain: [ {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 0
                }, {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 1
                } ],
                position: {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 0
                }
            };
            var z = /^xaxis[0-9]*$/, C = /^yaxis[0-9]*$/;
            A.supplyLayoutDefaults = function(t, e, r) {
                function n(t, e) {
                    var r = Number(t.substr(5) || 1), n = Number(e.substr(5) || 1);
                    return r - n;
                }
                var a, o = Object.keys(t), i = [], l = [], s = {}, c = {};
                for (a = 0; a < o.length; a++) {
                    var d = o[a];
                    z.test(d) ? i.push(d) : C.test(d) && l.push(d);
                }
                for (a = 0; a < r.length; a++) {
                    var u = r[a], f = A.id2name(u.xaxis), h = A.id2name(u.yaxis);
                    if (f && -1 === i.indexOf(f) && i.push(f), h && -1 === l.indexOf(h) && l.push(h), 
                    M.Plots.traceIs(u, "2dMap") && (s[f] = !0, s[h] = !0), M.Plots.traceIs(u, "oriented")) {
                        var p = "h" === u.orientation ? h : f;
                        c[p] = !0;
                    }
                }
                (e._hasCartesian || !r.length) && (i.length ? i.sort(n) : i = [ "xaxis" ], l.length ? l.sort(n) : l = [ "yaxis" ]), 
                i.concat(l).forEach(function(n) {
                    function a(t, e) {
                        return M.Lib.coerce(d, u, A.layoutAttributes, t, e);
                    }
                    var o = n.charAt(0), d = t[n] || {}, u = {}, f = {
                        letter: o,
                        font: e.font,
                        outerTicks: s[n],
                        showGrid: !c[n],
                        name: n,
                        data: r
                    }, h = {
                        letter: o,
                        counterAxes: {
                            x: l,
                            y: i
                        }[o].map(A.name2id),
                        overlayableAxes: {
                            x: i,
                            y: l
                        }[o].filter(function(e) {
                            return e !== n && !(t[e] || {}).overlaying;
                        }).map(A.name2id)
                    };
                    A.handleAxisDefaults(d, u, a, f), A.handleAxisPositioningDefaults(d, u, a, h), e[n] = u, 
                    t[n] || "-" === d.type || (t[n] = {
                        type: d.type
                    });
                }), i.length && l.length && M.Lib.coerce(t, e, M.Plots.layoutAttributes, "plot_bgcolor");
            }, A.handleAxisDefaults = function(t, e, n, a) {
                var o = a.letter, i = a.font || {}, l = "Click to enter " + (a.title || o.toUpperCase() + " axis") + " title";
                a.name && (e._name = a.name, e._id = A.name2id(a.name));
                var s = n("type");
                "-" === s && (r(e, a.data), "-" === e.type ? e.type = "linear" : s = t.type = e.type), 
                A.setConvert(e), n("title", l), n("titlefont", {
                    family: i.family,
                    size: Math.round(1.2 * i.size),
                    color: i.color
                });
                var c = 2 === (t.range || []).length && L(t.range[0]) && L(t.range[1]), d = n("autorange", !c);
                d && n("rangemode");
                var u = n("range[0]", -1), f = n("range[1]", "x" === o ? 6 : 4);
                u === f && (e.range = [ u - 1, u + 1 ]), M.Lib.noneOrAll(t.range, e.range, [ 0, 1 ]), 
                n("fixedrange"), A.handleTickValueDefaults(t, e, n, s), A.handleTickDefaults(t, e, n, s, a);
                var h = n("showline");
                h && (n("linecolor"), n("linewidth")), (h || e.ticks) && n("mirror");
                var p = n("showgrid", a.showGrid);
                p && (n("gridcolor"), n("gridwidth"));
                var g = n("zeroline", a.showGrid);
                return g && (n("zerolinecolor"), n("zerolinewidth")), e;
            }, A.handleTickDefaults = function(t, e, r, n, a) {
                var o = r("ticks", a.outerTicks ? "outside" : "");
                o && (r("ticklen"), r("tickwidth"), r("tickcolor"));
                var i = r("showticklabels");
                if (i) {
                    r("tickfont", a.font || {}), r("tickangle");
                    var l = A.getShowAttrDflt(t);
                    if ("category" !== n) {
                        var s = r("tickformat");
                        a.noHover || r("hoverformat"), s || "date" === n || (r("showexponent", l), r("exponentformat"));
                    }
                    var c = r("tickprefix");
                    c && r("showtickprefix", l);
                    var d = r("ticksuffix");
                    d && r("showticksuffix", l);
                }
            }, A.handleTickValueDefaults = function(t, e, r, n) {
                var a = "auto";
                "array" !== t.tickmode || "log" !== n && "date" !== n || (t.tickmode = "auto"), 
                Array.isArray(t.tickvals) ? a = "array" : t.dtick && L(t.dtick) && (a = "linear");
                var o = r("tickmode", a);
                if ("auto" === o) r("nticks"); else if ("linear" === o) r("tick0"), r("dtick"); else {
                    var i = r("tickvals");
                    void 0 === i ? e.tickmode = "auto" : r("ticktext");
                }
            }, A.handleAxisPositioningDefaults = function(t, e, r, n) {
                var a = n.counterAxes || [], o = n.overlayableAxes || [], i = n.letter, l = M.Lib.coerce(t, e, {
                    anchor: {
                        type: "enumerated",
                        values: [ "free" ].concat(a),
                        dflt: L(t.position) ? "free" : a[0] || "free"
                    }
                }, "anchor");
                "free" === l && r("position"), M.Lib.coerce(t, e, {
                    side: {
                        type: "enumerated",
                        values: "x" === i ? [ "bottom", "top" ] : [ "left", "right" ],
                        dflt: "x" === i ? "bottom" : "left"
                    }
                }, "side");
                var s = !1;
                if (o.length && (s = M.Lib.coerce(t, e, {
                    overlaying: {
                        type: "enumerated",
                        values: [ !1 ].concat(o),
                        dflt: !1
                    }
                }, "overlaying")), !s) {
                    var c = r("domain[0]"), d = r("domain[1]");
                    c > d - .01 && (e.domain = [ 0, 1 ]), M.Lib.noneOrAll(t.domain, e.domain, [ 0, 1 ]);
                }
                return e;
            }, A.coerceRef = function(t, e, r, n) {
                var a = A.listIds(r, n), o = n + "ref", i = {};
                return i[o] = {
                    type: "enumerated",
                    values: a.concat([ "paper" ]),
                    dflt: a[0] || "paper"
                }, M.Lib.coerce(t, e, i, o);
            }, A.clearTypes = function(t, e) {
                Array.isArray(e) && e.length || (e = t._fullData.map(function(t, e) {
                    return e;
                })), e.forEach(function(e) {
                    var r = t.data[e];
                    delete (A.getFromId(t, r.xaxis) || {}).type, delete (A.getFromId(t, r.yaxis) || {}).type;
                });
            };
            var D = /^[xyz][0-9]*$/, O = /^[xyz]axis[0-9]*$/;
            A.id2name = function(t) {
                if ("string" == typeof t && t.match(D)) {
                    var e = t.substr(1);
                    return "1" === e && (e = ""), t.charAt(0) + "axis" + e;
                }
            }, A.name2id = function(t) {
                if (t.match(O)) {
                    var e = t.substr(5);
                    return "1" === e && (e = ""), t.charAt(0) + e;
                }
            }, A.cleanId = function(t, e) {
                if (t.match(D) && (!e || t.charAt(0) === e)) {
                    var r = t.substr(1).replace(/^0+/, "");
                    return "1" === r && (r = ""), t.charAt(0) + r;
                }
            }, A.cleanName = function(t, e) {
                if (t.match(D) && (!e || t.charAt(0) === e)) {
                    var r = t.substr(5).replace(/^0+/, "");
                    return "1" === r && (r = ""), t.charAt(0) + "axis" + r;
                }
            }, A.counterLetter = function(t) {
                return {
                    x: "y",
                    y: "x"
                }[t.charAt(0)];
            }, A.autoType = function(t) {
                return A.moreDates(t) ? "date" : A.category(t) ? "category" : i(t) ? "linear" : "-";
            }, A.getShowAttrDflt = function(t) {
                var e = [ "showexponent", "showtickprefix", "showticksuffix" ], r = e.filter(function(e) {
                    return void 0 !== t[e];
                }), n = function(e) {
                    return t[e] === t[r[0]];
                };
                return r.every(n) || 1 === r.length ? t[r[0]] : void 0;
            }, A.moreDates = function(t) {
                for (var e, r = 0, n = 0, a = Math.max(1, (t.length - 1) / 1e3), o = 0; o < t.length; o += a) e = t[Math.round(o)], 
                M.Lib.isDateTime(e) && (r += 1), L(e) && (n += 1);
                return r > 2 * n;
            }, A.category = function(t) {
                for (var e, r = Math.max(1, (t.length - 1) / 1e3), n = 0, a = 0, o = 0; o < t.length; o += r) e = A.cleanDatum(t[Math.round(o)]), 
                L(e) ? n++ : "string" == typeof e && "" !== e && "None" !== e && a++;
                return a > 2 * n;
            }, A.cleanDatum = function(t) {
                try {
                    if ("object" == typeof t && null !== t && t.getTime) return M.Lib.ms2DateTime(t);
                    if ("string" != typeof t && !L(t)) return "";
                    t = t.toString().replace(/['"%,$# ]/g, "");
                } catch (e) {
                    console.log(e, t);
                }
                return t;
            }, A.BADNUM = void 0, A.setConvert = function(t) {
                function e(e, r) {
                    if (e > 0) return Math.log(e) / Math.LN10;
                    if (0 >= e && r && t.range && 2 === t.range.length) {
                        var n = t.range[0], o = t.range[1];
                        return .5 * (n + o - 3 * a * Math.abs(n - o));
                    }
                    return A.BADNUM;
                }
                function r(t) {
                    return Math.pow(10, t);
                }
                function n(t) {
                    return L(t) ? Number(t) : A.BADNUM;
                }
                var a = 10;
                if (t.c2l = "log" === t.type ? e : n, t.l2c = "log" === t.type ? r : n, t.l2d = function(e) {
                    return t.c2d(t.l2c(e));
                }, t.setScale = function() {
                    var e, r = t._td._fullLayout._size;
                    if (t._categories || (t._categories = []), t.overlaying) {
                        var n = A.getFromId(t._td, t.overlaying);
                        t.domain = n.domain;
                    }
                    for (t.range && 2 === t.range.length && t.range[0] !== t.range[1] || (t.range = [ -1, 1 ]), 
                    e = 0; 2 > e; e++) L(t.range[e]) || (t.range[e] = L(t.range[1 - e]) ? t.range[1 - e] * (e ? 10 : .1) : e ? 1 : -1), 
                    t.range[e] < -(Number.MAX_VALUE / 2) ? t.range[e] = -(Number.MAX_VALUE / 2) : t.range[e] > Number.MAX_VALUE / 2 && (t.range[e] = Number.MAX_VALUE / 2);
                    if ("y" === t._id.charAt(0) ? (t._offset = r.t + (1 - t.domain[1]) * r.h, t._length = r.h * (t.domain[1] - t.domain[0]), 
                    t._m = t._length / (t.range[0] - t.range[1]), t._b = -t._m * t.range[1]) : (t._offset = r.l + t.domain[0] * r.w, 
                    t._length = r.w * (t.domain[1] - t.domain[0]), t._m = t._length / (t.range[1] - t.range[0]), 
                    t._b = -t._m * t.range[0]), !isFinite(t._m) || !isFinite(t._b)) throw M.Lib.notifier("Something went wrong with axis scaling", "long"), 
                    t._td._replotting = !1, new Error("axis scaling");
                }, t.l2p = function(e) {
                    return L(e) ? d3.round(M.Lib.constrain(t._b + t._m * e, -a * t._length, (1 + a) * t._length), 2) : A.BADNUM;
                }, t.p2l = function(e) {
                    return (e - t._b) / t._m;
                }, t.c2p = function(e, r) {
                    return t.l2p(t.c2l(e, r));
                }, t.p2c = function(e) {
                    return t.l2c(t.p2l(e));
                }, -1 !== [ "linear", "log", "-" ].indexOf(t.type)) t.c2d = n, t.d2c = function(t) {
                    return t = A.cleanDatum(t), L(t) ? Number(t) : A.BADNUM;
                }, t.d2l = function(e, r) {
                    return "log" === t.type ? t.c2l(t.d2c(e), r) : t.d2c(e);
                }; else if ("date" === t.type) {
                    if (t.c2d = function(t) {
                        return L(t) ? M.Lib.ms2DateTime(t) : A.BADNUM;
                    }, t.d2c = function(t) {
                        return L(t) ? Number(t) : M.Lib.dateTime2ms(t);
                    }, t.d2l = t.d2c, t.range && t.range.length > 1) try {
                        var o = t.range.map(M.Lib.dateTime2ms);
                        !L(t.range[0]) && L(o[0]) && (t.range[0] = o[0]), !L(t.range[1]) && L(o[1]) && (t.range[1] = o[1]);
                    } catch (e) {
                        console.log(e, t.range);
                    }
                } else "category" === t.type && (t.c2d = function(e) {
                    return t._categories[Math.round(e)];
                }, t.d2c = function(e) {
                    -1 === t._categories.indexOf(e) && t._categories.push(e);
                    var r = t._categories.indexOf(e);
                    return -1 === r ? A.BADNUM : r;
                }, t.d2l = t.d2c);
                t.makeCalcdata = function(e, r) {
                    var n, a, o;
                    if (r in e) for (n = e[r], a = new Array(n.length), o = 0; o < n.length; o++) a[o] = t.d2c(n[o]); else {
                        var i = r + "0" in e ? t.d2c(e[r + "0"]) : 0, l = e["d" + r] ? Number(e["d" + r]) : 1;
                        for (n = e[{
                            x: "y",
                            y: "x"
                        }[r]], a = new Array(n.length), o = 0; o < n.length; o++) a[o] = i + o * l;
                    }
                    return a;
                }, t._min = [], t._max = [], t._minDtick = null, t._forceTick0 = null;
            }, A.minDtick = function(t, e, r, n) {
                -1 === [ "log", "category" ].indexOf(t.type) && n ? null === t._minDtick ? (t._minDtick = e, 
                t._forceTick0 = r) : t._minDtick && ((t._minDtick / e + 1e-6) % 1 < 2e-6 && ((r - t._forceTick0) / e % 1 + 1.000001) % 1 < 2e-6 ? (t._minDtick = e, 
                t._forceTick0 = r) : ((e / t._minDtick + 1e-6) % 1 > 2e-6 || ((r - t._forceTick0) / t._minDtick % 1 + 1.000001) % 1 > 2e-6) && (t._minDtick = 0)) : t._minDtick = 0;
            }, A.doAutoRange = function(t) {
                if (t._length || t.setScale(), t.autorange && t._min && t._max && t._min.length && t._max.length) {
                    var e, r = t._min[0].val, n = t._max[0].val;
                    for (e = 1; e < t._min.length && r === n; e++) r = Math.min(r, t._min[e].val);
                    for (e = 1; e < t._max.length && r === n; e++) n = Math.max(n, t._max[e].val);
                    var a, o, i, l, s, c, d, u = 0, f = t.range && t.range[1] < t.range[0];
                    for ("reversed" === t.autorange && (f = !0, t.autorange = !0), e = 0; e < t._min.length; e++) for (o = t._min[e], 
                    a = 0; a < t._max.length; a++) i = t._max[a], d = i.val - o.val, c = t._length - o.pad - i.pad, 
                    d > 0 && c > 0 && d / c > u && (l = o, s = i, u = d / c);
                    r === n ? t.range = f ? [ r + 1, r - 1 ] : [ r - 1, r + 1 ] : u && (("linear" === t.type || "-" === t.type) && ("tozero" === t.rangemode && l.val >= 0 ? l = {
                        val: 0,
                        pad: 0
                    } : "nonnegative" === t.rangemode && (l.val - u * l.pad < 0 && (l = {
                        val: 0,
                        pad: 0
                    }), s.val < 0 && (s = {
                        val: 1,
                        pad: 0
                    })), u = (s.val - l.val) / (t._length - l.pad - s.pad)), t.range = [ l.val - u * l.pad, s.val + u * s.pad ], 
                    t.range[0] === t.range[1] && (t.range = [ t.range[0] - 1, t.range[0] + 1 ]), f && t.range.reverse());
                    var h = t._td.layout[t._name];
                    h || (t._td.layout[t._name] = h = {}), h !== t && (h.range = t.range.slice(), h.autorange = t.autorange);
                }
            }, A.saveRangeInitial = function(t, e) {
                for (var r, n, a, o = M.Axes.list(t, "", !0), i = !1, l = 0; l < o.length; l++) r = o[l], 
                n = void 0 === r._rangeInitial, a = n || !(r.range[0] === r._rangeInitial[0] && r.range[1] === r._rangeInitial[1]), 
                (n && r.autorange === !1 || e && a) && (r._rangeInitial = r.range.slice(), i = !0);
                return i;
            };
            var S = Number.MAX_VALUE / 2;
            A.expand = function(t, e, r) {
                function n(t) {
                    if (Array.isArray(t)) return function(e) {
                        return Math.max(Number(t[e] || 0), 0);
                    };
                    var e = Math.max(Number(t || 0), 0);
                    return function() {
                        return e;
                    };
                }
                function a(r) {
                    function n(t) {
                        return L(t) && Math.abs(t) < S;
                    }
                    if (s = e[r], L(s)) {
                        if (u = x(r) + y, f = b(r) + y, p = s - w(r), g = s + _(r), "log" === t.type && g / 10 > p && (p = g / 10), 
                        c = t.c2l(p), d = t.c2l(g), v && (c = Math.min(0, c), d = Math.max(0, d)), n(c)) {
                            for (h = !0, i = 0; i < t._min.length && h; i++) l = t._min[i], l.val <= c && l.pad >= f ? h = !1 : l.val >= c && l.pad <= f && (t._min.splice(i, 1), 
                            i--);
                            h && t._min.push({
                                val: c,
                                pad: v && 0 === c ? 0 : f
                            });
                        }
                        if (n(d)) {
                            for (h = !0, i = 0; i < t._max.length && h; i++) l = t._max[i], l.val >= d && l.pad >= u ? h = !1 : l.val <= d && l.pad <= u && (t._max.splice(i, 1), 
                            i--);
                            h && t._max.push({
                                val: d,
                                pad: v && 0 === d ? 0 : u
                            });
                        }
                    }
                }
                if (t.autorange && e) {
                    t._min || (t._min = []), t._max || (t._max = []), r || (r = {}), t._m || t.setScale();
                    var o, i, l, s, c, d, u, f, h, p, g, m = e.length, y = r.padded ? .05 * t._length : 0, v = r.tozero && ("linear" === t.type || "-" === t.type), x = n((t._m > 0 ? r.ppadplus : r.ppadminus) || r.ppad || 0), b = n((t._m > 0 ? r.ppadminus : r.ppadplus) || r.ppad || 0), _ = n(r.vpadplus || r.vpad), w = n(r.vpadminus || r.vpad);
                    for (o = 0; 6 > o; o++) a(o);
                    for (o = m - 1; o > 5; o--) a(o);
                }
            }, A.autoBin = function(t, e, r, n) {
                function a(t) {
                    return (1 + 100 * (t - h) / u.dtick) % 100 < 2;
                }
                var o = M.Lib.aggNums(Math.min, null, t), i = M.Lib.aggNums(Math.max, null, t);
                if ("category" === e.type) return {
                    start: o - .5,
                    end: i + .5,
                    size: 1
                };
                var l;
                if (r) l = (i - o) / r; else {
                    var s = M.Lib.distinctVals(t), c = Math.pow(10, Math.floor(Math.log(s.minDiff) / Math.LN10)), d = c * M.Lib.roundUp(s.minDiff / c, [ .9, 1.9, 4.9, 9.9 ], !0);
                    l = Math.max(d, 2 * M.Lib.stdev(t) / Math.pow(t.length, n ? .25 : .4));
                }
                var u = {
                    type: "log" === e.type ? "linear" : e.type,
                    range: [ o, i ]
                };
                A.autoTicks(u, l);
                var f, h = A.tickIncrement(A.tickFirst(u), u.dtick, "reverse");
                if ("number" == typeof u.dtick) {
                    for (var p = 0, g = 0, m = 0, y = 0, v = 0; v < t.length; v++) t[v] % 1 === 0 ? m++ : L(t[v]) || y++, 
                    a(t[v]) && p++, a(t[v] + u.dtick / 2) && g++;
                    var x = t.length - y;
                    if (m === x && "date" !== e.type) u.dtick < 1 ? h = o - .5 * u.dtick : h -= .5; else if (.1 * x > g && (p > .3 * x || a(o) || a(i))) {
                        var b = u.dtick / 2;
                        h += o > h + b ? b : -b;
                    }
                    var _ = 1 + Math.floor((i - h) / u.dtick);
                    f = h + _ * u.dtick;
                } else for (f = h; i >= f; ) f = A.tickIncrement(f, u.dtick);
                return {
                    start: h,
                    end: f,
                    size: u.dtick
                };
            }, A.calcTicks = function(t) {
                if ("array" === t.tickmode) return l(t);
                if ("auto" === t.tickmode || !t.dtick) {
                    var e, r = t.nticks;
                    r || ("category" === t.type ? (e = t.tickfont ? 1.2 * (t.tickfont.size || 12) : 15, 
                    r = t._length / e) : (e = "y" === t._id.charAt(0) ? 40 : 80, r = M.Lib.constrain(t._length / e, 4, 9) + 1)), 
                    A.autoTicks(t, Math.abs(t.range[1] - t.range[0]) / r), t._minDtick > 0 && t.dtick < 2 * t._minDtick && (t.dtick = t._minDtick, 
                    t.tick0 = t._forceTick0);
                }
                t.tick0 || (t.tick0 = "date" === t.type ? new Date(2e3, 0, 1).getTime() : 0), c(t), 
                t._tmin = A.tickFirst(t);
                var n = t.range[1] < t.range[0], a = [], o = 1.0001 * t.range[1] - 1e-4 * t.range[0];
                "category" === t.type && (o = n ? Math.max(-.5, o) : Math.min(t._categories.length - .5, o));
                for (var i = t._tmin; (n ? i >= o : o >= i) && (a.push(i), !(a.length > 1e3)); i = A.tickIncrement(i, t.dtick, n)) ;
                t._tmax = a[a.length - 1];
                for (var s = new Array(a.length), d = 0; d < a.length; d++) s[d] = A.tickText(t, a[d]);
                return s;
            };
            var P = [ 2, 5, 10 ], T = [ 1, 2, 3, 6, 12 ], E = [ 1, 2, 5, 10, 15, 30 ], I = [ 1, 2, 3, 7, 14 ], j = [ -.046, 0, .301, .477, .602, .699, .778, .845, .903, .954, 1 ], N = [ -.301, 0, .301, .699, 1 ];
            A.autoTicks = function(t, e) {
                var r;
                if ("date" === t.type) t.tick0 = new Date(2e3, 0, 1).getTime(), e > 157788e5 ? (e /= 315576e5, 
                r = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)), t.dtick = "M" + 12 * s(e, r, P)) : e > 12096e5 ? (e /= 26298e5, 
                t.dtick = "M" + s(e, 1, T)) : e > 432e5 ? (t.dtick = s(e, 864e5, I), t.tick0 = new Date(2e3, 0, 2).getTime()) : e > 18e5 ? t.dtick = s(e, 36e5, T) : e > 3e4 ? t.dtick = s(e, 6e4, E) : e > 500 ? t.dtick = s(e, 1e3, E) : (r = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)), 
                t.dtick = s(e, r, P)); else if ("log" === t.type) if (t.tick0 = 0, e > .7) t.dtick = Math.ceil(e); else if (Math.abs(t.range[1] - t.range[0]) < 1) {
                    var n = 1.5 * Math.abs((t.range[1] - t.range[0]) / e);
                    e = Math.abs(Math.pow(10, t.range[1]) - Math.pow(10, t.range[0])) / n, r = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)), 
                    t.dtick = "L" + s(e, r, P);
                } else t.dtick = e > .3 ? "D2" : "D1"; else "category" === t.type ? (t.tick0 = 0, 
                t.dtick = Math.ceil(Math.max(e, 1))) : (t.tick0 = 0, r = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)), 
                t.dtick = s(e, r, P));
                if (0 === t.dtick && (t.dtick = 1), !L(t.dtick) && "string" != typeof t.dtick) {
                    var a = t.dtick;
                    throw t.dtick = 1, "ax.dtick error: " + String(a);
                }
            }, A.tickIncrement = function(t, e, r) {
                var n = r ? -1 : 1;
                if (L(e)) return t + n * e;
                var a = e.charAt(0), o = n * Number(e.substr(1));
                if ("M" === a) {
                    var i = new Date(t);
                    return i.setMonth(i.getMonth() + o);
                }
                if ("L" === a) return Math.log(Math.pow(10, t) + o) / Math.LN10;
                if ("D" === a) {
                    var l = "D2" === e ? N : j, s = t + .01 * n, c = M.Lib.roundUp(k(s, 1), l, r);
                    return Math.floor(s) + Math.log(d3.round(Math.pow(10, c), 1)) / Math.LN10;
                }
                throw "unrecognized dtick " + String(e);
            }, A.tickFirst = function(t) {
                var e = t.range[1] < t.range[0], r = e ? Math.floor : Math.ceil, n = 1.0001 * t.range[0] - 1e-4 * t.range[1], a = t.dtick, o = t.tick0;
                if (L(a)) {
                    var i = r((n - o) / a) * a + o;
                    return "category" === t.type && (i = M.Lib.constrain(i, 0, t._categories.length - 1)), 
                    i;
                }
                var l, s, c, d = a.charAt(0), u = Number(a.substr(1));
                if ("M" === d) {
                    for (l = new Date(o), n = new Date(n), s = 12 * (n.getFullYear() - l.getFullYear()) + n.getMonth() - l.getMonth(), 
                    c = l.setMonth(l.getMonth() + (Math.round(s / u) + (e ? 1 : -1)) * u); e ? c > n : n > c; ) c = A.tickIncrement(c, a, e);
                    return c;
                }
                if ("L" === d) return Math.log(r((Math.pow(10, n) - o) / u) * u + o) / Math.LN10;
                if ("D" === d) {
                    var f = "D2" === a ? N : j, h = M.Lib.roundUp(k(n, 1), f, e);
                    return Math.floor(n) + Math.log(d3.round(Math.pow(10, h), 1)) / Math.LN10;
                }
                throw "unrecognized dtick " + String(a);
            };
            var B = d3.time.format("%Y"), F = d3.time.format("%b %Y"), R = d3.time.format("%b %-d"), H = d3.time.format("%b %-d %Hh"), V = d3.time.format("%H:%M"), q = d3.time.format(":%S"), Z = /%(\d?)f/g;
            A.tickText = function(t, e, r) {
                function n(n) {
                    var a;
                    return void 0 === n ? !0 : r ? "none" === n : (a = {
                        first: t._tmin,
                        last: t._tmax
                    }[n], "all" !== n && e !== a);
                }
                var a, o = u(t, e), i = "array" === t.tickmode, l = r || i;
                if (i && Array.isArray(t.ticktext)) {
                    for (var s = Math.abs(t.range[1] - t.range[0]) / 1e4, c = 0; c < t.ticktext.length && !(Math.abs(e - t.d2l(t.tickvals[c])) < s); c++) ;
                    if (c < t.ticktext.length) return o.text = String(t.ticktext[c]), o;
                }
                return a = "none" !== t.exponentformat && n(t.showexponent) ? "hide" : "", "date" === t.type ? f(t, o, r, l) : "log" === t.type ? h(t, o, r, l, a) : "category" === t.type ? p(t, o) : g(t, o, r, l, a), 
                t.tickprefix && !n(t.showtickprefix) && (o.text = t.tickprefix + o.text), t.ticksuffix && !n(t.showticksuffix) && (o.text += t.ticksuffix), 
                o;
            };
            var X = [ "f", "p", "n", "&mu;", "m", "", "k", "M", "G", "T" ], $ = /(\d+)(\d{3})/;
            A.list = function(t, e, r) {
                return v(t, e, r).map(function(e) {
                    return M.Lib.nestedProperty(t._fullLayout, e).get();
                });
            }, A.listIds = function(t, e) {
                return v(t, e, !0).map(A.name2id);
            }, A.getFromId = function(t, e, r) {
                var n = t._fullLayout;
                return "x" === r ? e = e.replace(/y[0-9]*/, "") : "y" === r && (e = e.replace(/x[0-9]*/, "")), 
                n[A.id2name(e)];
            }, A.getFromTrace = function(t, e, r) {
                var n = t._fullLayout, a = null;
                if (M.Plots.traceIs(e, "gl3d")) {
                    var o = e.scene;
                    "scene" === o.substr(0, 5) && (a = n[o][r + "axis"]);
                } else a = A.getFromId(t, e[r + "axis"] || r);
                return a;
            }, A.getSubplots = function(t, e) {
                var r = t.data, n = [];
                (r || []).forEach(function(t) {
                    if (t.visible !== !1 && "legendonly" !== t.visible && M.Plots.traceIs(t, "cartesian")) {
                        var e = t.xaxis || "x", r = t.yaxis || "y", a = e + r;
                        -1 === n.indexOf(a) && n.push(a);
                    }
                }), A.list(t, "", !0).forEach(function(e) {
                    function r(t) {
                        return -1 !== t.indexOf(e._id);
                    }
                    var a = e._id.charAt(0), o = "free" === e.anchor ? {
                        x: "y",
                        y: "x"
                    }[a] : e.anchor, i = A.getFromId(t, o);
                    if ("free" !== e.anchor || !n.some(r)) {
                        if (!i) return void console.log("warning: couldnt find anchor " + o + " for axis " + e._id);
                        var l = "x" === a ? e._id + i._id : i._id + e._id;
                        -1 === n.indexOf(l) && n.push(l);
                    }
                });
                var a = /^x([0-9]*)y([0-9]*)$/, o = n.filter(function(t) {
                    return t.match(a);
                }).sort(function(t, e) {
                    var r = t.match(a), n = e.match(a);
                    return r[1] === n[1] ? +(r[2] || 1) - (n[2] || 1) : +(r[1] || 0) - (n[1] || 0);
                });
                if (e) {
                    var i = new RegExp("x" === e._id.charAt(0) ? "^" + e._id + "y" : e._id + "$");
                    return o.filter(function(t) {
                        return t.match(i);
                    });
                }
                return o;
            }, A.makeClipPaths = function(t) {
                var e, r, n = t._fullLayout, a = n._defs, o = {
                    _offset: 0,
                    _length: n.width,
                    _id: ""
                }, i = {
                    _offset: 0,
                    _length: n.height,
                    _id: ""
                }, l = A.list(t, "x", !0), s = A.list(t, "y", !0), c = [];
                for (e = 0; e < l.length; e++) for (c.push({
                    x: l[e],
                    y: i
                }), r = 0; r < s.length; r++) 0 === e && c.push({
                    x: o,
                    y: s[r]
                }), c.push({
                    x: l[e],
                    y: s[r]
                });
                var d = a.selectAll("g.clips").data([ 0 ]);
                d.enter().append("g").classed("clips", !0);
                var u = d.selectAll(".axesclip").data(c, function(t) {
                    return t.x._id + t.y._id;
                });
                u.enter().append("clipPath").classed("axesclip", !0).attr("id", function(t) {
                    return "clip" + n._uid + t.x._id + t.y._id;
                }).append("rect"), u.exit().remove(), u.each(function(t) {
                    d3.select(this).select("rect").attr({
                        x: t.x._offset || 0,
                        y: t.y._offset || 0,
                        width: t.x._length || 1,
                        height: t.y._length || 1
                    });
                });
            }, A.doTicks = function(t, e, r) {
                function n(t) {
                    var e = s.l2p(t.x);
                    return e > 1 && e < s._length - 1;
                }
                function a(t, e) {
                    var r = t.selectAll("path." + b).data("inside" === s.ticks ? T : v, x);
                    e && s.ticks ? (r.enter().append("path").classed(b, 1).classed("ticks", 1).classed("crisp", 1).call(M.Color.stroke, s.tickcolor).style("stroke-width", O + "px").attr("d", e), 
                    r.attr("transform", f), r.exit().remove()) : r.remove();
                }
                function o(n, a) {
                    function o(t, e) {
                        t.each(function(t) {
                            var r = h(e), n = d3.select(this), a = n.select(".text-math-group"), o = f(t) + (L(e) && 0 !== +e ? " rotate(" + e + "," + d(t) + "," + (u(t) - t.fontSize / 2) + ")" : "");
                            if (a.empty()) {
                                var i = n.select("text").attr({
                                    transform: o,
                                    "text-anchor": r
                                });
                                i.empty() || i.selectAll("tspan.line").attr({
                                    x: i.attr("x"),
                                    y: i.attr("y")
                                });
                            } else {
                                var l = M.Drawing.bBox(a.node()).width * {
                                    end: -.5,
                                    start: .5
                                }[r];
                                a.attr("transform", o + (l ? "translate(" + l + ",0)" : ""));
                            }
                        });
                    }
                    function i() {
                        return A.length && Promise.all(A);
                    }
                    function l() {
                        if (o(c, s.tickangle), "x" === m && !L(s.tickangle) && ("log" !== s.type || "D" !== String(s.dtick).charAt(0))) {
                            var n = [];
                            for (c.each(function(t) {
                                var e = d3.select(this), r = e.select(".text-math-group"), a = s.l2p(t.x);
                                r.empty() && (r = e.select("text"));
                                var o = M.Drawing.bBox(r.node());
                                n.push({
                                    top: 0,
                                    bottom: 10,
                                    height: 10,
                                    left: a - o.width / 2,
                                    right: a + o.width / 2 + 2,
                                    width: o.width + 2
                                });
                            }), g = 0; g < n.length - 1; g++) if (M.Lib.bBoxIntersect(n[g], n[g + 1])) {
                                w = 30;
                                break;
                            }
                            if (w) {
                                var a = Math.abs((v[v.length - 1].x - v[0].x) * s._m) / (v.length - 1);
                                2.5 * _ > a && (w = 90), o(c, w);
                            }
                            s._lastangle = w;
                        }
                        return r || M.Plots.titles(t, e + "title"), e + " done";
                    }
                    var c = n.selectAll("g." + b).data(v, x);
                    if (!s.showticklabels || !L(a)) return c.remove(), void M.Plots.titles(t, e + "title");
                    var d, u, h, p;
                    if ("x" === m) {
                        var y = "bottom" === S ? 1 : -1;
                        d = function(t) {
                            return t.dx;
                        }, p = a + (z + k) * y, u = function(t) {
                            return t.dy + p + t.fontSize * ("bottom" === S ? 1 : -.5);
                        }, h = function(t) {
                            return L(t) && 0 !== t && 180 !== t ? 0 > t * y ? "end" : "start" : "middle";
                        };
                    } else u = function(t) {
                        return t.dy + t.fontSize / 2;
                    }, d = function(t) {
                        return t.dx + a + (z + k + (90 === Math.abs(s.tickangle) ? t.fontSize / 2 : 0)) * ("right" === S ? 1 : -1);
                    }, h = function(t) {
                        return L(t) && 90 === Math.abs(t) ? "middle" : "right" === S ? "start" : "end";
                    };
                    var _ = 0, w = 0, A = [];
                    c.enter().append("g").classed(b, 1).append("text").attr("text-anchor", "middle").each(function(e) {
                        var r = d3.select(this), n = t._promises.length;
                        r.call(M.Drawing.setPosition, d(e), u(e)).call(M.Drawing.font, e.font, e.fontSize, e.fontColor).text(e.text).call(M.util.convertToTspans), 
                        n = t._promises[n], n ? A.push(t._promises.pop().then(function() {
                            o(r, s.tickangle);
                        })) : o(r, s.tickangle);
                    }), c.exit().remove(), c.each(function(t) {
                        _ = Math.max(_, t.fontSize);
                    }), o(c, s._lastangle || s.tickangle);
                    var C = M.Lib.syncOrAsync([ i, l ]);
                    return C && C.then && t._promises.push(C), C;
                }
                function i(t, e) {
                    return t.visible !== !0 || t.xaxis + t.yaxis !== e ? !1 : M.Plots.traceIs(t, "bar") && t.orientation === {
                        x: "h",
                        y: "v"
                    }[m] ? !0 : t.fill && t.fill.charAt(t.fill.length - 1) === m;
                }
                function l(e, r, a) {
                    var o = e.gridlayer, l = e.zerolinelayer, c = e["hidegrid" + m] ? [] : T, d = "M0,0" + ("x" === m ? "v" : "h") + r._length, u = o.selectAll("path." + _).data(s.showgrid === !1 ? [] : c, x);
                    u.enter().append("path").classed(_, 1).classed("crisp", 1).attr("d", d).each(function(t) {
                        s.zeroline && ("linear" === s.type || "-" === s.type) && Math.abs(t.x) < s.dtick / 100 && d3.select(this).remove();
                    }), u.attr("transform", f).call(M.Color.stroke, s.gridcolor || "#ddd").style("stroke-width", C + "px"), 
                    u.exit().remove();
                    for (var h = !1, p = 0; p < t._fullData.length; p++) if (i(t._fullData[p], a)) {
                        h = !0;
                        break;
                    }
                    var g = s.range[0] * s.range[1] <= 0 && s.zeroline && ("linear" === s.type || "-" === s.type) && c.length && (h || n({
                        x: 0
                    }) || !s.showline), y = l.selectAll("path." + w).data(g ? [ {
                        x: 0
                    } ] : []);
                    y.enter().append("path").classed(w, 1).classed("zl", 1).classed("crisp", 1).attr("d", d), 
                    y.attr("transform", f).call(M.Color.stroke, s.zerolinecolor || M.Color.defaultLine).style("stroke-width", D + "px"), 
                    y.exit().remove();
                }
                var s, c = t._fullLayout, d = !1;
                if ("object" == typeof e) s = e, e = s._id, d = !0; else if (s = A.getFromId(t, e), 
                "redraw" === e && c._paper.selectAll("g.subplot").each(function(t) {
                    var e = c._plots[t], r = e.x(), n = e.y();
                    e.plot.attr("viewBox", "0 0 " + r._length + " " + n._length), e.xaxislayer.selectAll("." + r._id + "tick").remove(), 
                    e.yaxislayer.selectAll("." + n._id + "tick").remove(), e.gridlayer.selectAll("path").remove(), 
                    e.zerolinelayer.selectAll("path").remove();
                }), !e || "redraw" === e) return M.Lib.syncOrAsync(A.list(t, "", !0).map(function(r) {
                    return function() {
                        if (r._id) {
                            var n = A.doTicks(t, r._id);
                            return "redraw" === e && (r._r = r.range.slice()), n;
                        }
                    };
                }));
                s.tickformat || (-1 === [ "none", "e", "E", "power", "SI", "B" ].indexOf(s.exponentformat) && (s.exponentformat = "e"), 
                -1 === [ "all", "first", "last", "none" ].indexOf(s.showexponent) && (s.showexponent = "all")), 
                s.range = [ +s.range[0], +s.range[1] ], s.setScale();
                var u, f, h, p, g, m = e.charAt(0), y = A.counterLetter(e), v = A.calcTicks(s), x = function(t) {
                    return t.text + t.x + s.mirror;
                }, b = e + "tick", _ = e + "grid", w = e + "zl", k = (s.linewidth || 1) / 2, z = ("outside" === s.ticks ? s.ticklen : 1) + (s.linewidth || 0), C = M.Drawing.crispRound(t, s.gridwidth, 1), D = M.Drawing.crispRound(t, s.zerolinewidth, C), O = M.Drawing.crispRound(t, s.tickwidth, 1);
                if ("x" === m) u = [ "bottom", "top" ], f = function(t) {
                    return "translate(" + s.l2p(t.x) + ",0)";
                }, h = "M0,", p = "v"; else {
                    if ("y" !== m) return void console.log("unrecognized doTicks axis", e);
                    u = [ "left", "right" ], f = function(t) {
                        return "translate(0," + s.l2p(t.x) + ")";
                    }, h = "M", p = ",0h";
                }
                var S = s.side || u[0], P = [ -1, 1, S === u[1] ? 1 : -1 ];
                "inside" !== s.ticks == ("x" === m) && (P = P.map(function(t) {
                    return -t;
                }));
                var T = v.filter(n);
                if (d) return a(s._axislayer, h + (s._pos + k * P[2]) + p + P[2] * s.ticklen), o(s._axislayer, s._pos);
                var E = A.getSubplots(t, s).map(function(t) {
                    var e = c._plots[t], r = e[m + "axislayer"], n = s._linepositions[t] || [], i = e[y](), d = i._id === s.anchor, f = [ !1, !1, !1 ], v = "";
                    if ("allticks" === s.mirror ? f = [ !0, !0, !1 ] : d && ("ticks" === s.mirror ? f = [ !0, !0, !1 ] : f[u.indexOf(S)] = !0), 
                    s.mirrors) for (g = 0; 2 > g; g++) {
                        var x = s.mirrors[i._id + u[g]];
                        ("ticks" === x || "labels" === x) && (f[g] = !0);
                    }
                    return void 0 !== n[2] && (f[2] = !0), f.forEach(function(t, e) {
                        var r = n[e], a = P[e];
                        t && L(r) && (v += h + (r + k * a) + p + a * s.ticklen);
                    }), a(r, v), l(e, i, t), o(r, n[3]);
                }).filter(function(t) {
                    return t && t.then;
                });
                return E.length ? Promise.all(E) : 0;
            }, A.swap = function(t, e) {
                for (var r = x(t, e), n = 0; n < r.length; n++) _(t, r[n].x, r[n].y);
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27
        } ],
        10: [ function(t, e) {
            "use strict";
            var r = e.exports = {}, n = t("./plotly"), a = t("./isnumeric");
            n.Plots.register(r, "bar", [ "cartesian", "bar", "oriented", "markerColorscale", "errorBarsOK", "showLegend" ]);
            var o = n.Scatter.attributes, i = o.marker, l = i.line;
            r.attributes = {
                x: o.x,
                x0: o.x0,
                dx: o.dx,
                y: o.y,
                y0: o.y0,
                dy: o.dy,
                text: o.text,
                orientation: {
                    type: "enumerated",
                    values: [ "v", "h" ]
                },
                marker: {
                    color: i.color,
                    colorscale: i.colorscale,
                    cauto: i.cauto,
                    cmax: i.cmax,
                    cmin: i.cmin,
                    autocolorscale: i.autocolorscale,
                    reversescale: i.reversescale,
                    showscale: i.showscale,
                    line: {
                        color: l.color,
                        colorscale: l.colorscale,
                        cauto: l.cauto,
                        cmax: l.cmax,
                        cmin: l.cmin,
                        width: l.width,
                        autocolorscale: l.autocolorscale,
                        reversescale: l.reversescale
                    }
                },
                _nestedModules: {
                    error_y: "ErrorBars",
                    error_x: "ErrorBars",
                    "marker.colorbar": "Colorbar"
                },
                _composedModules: {
                    histogram: "Histogram"
                }
            }, r.layoutAttributes = {
                barmode: {
                    type: "enumerated",
                    values: [ "stack", "group", "overlay" ],
                    dflt: "group"
                },
                barnorm: {
                    type: "enumerated",
                    values: [ "", "fraction", "percent" ],
                    dflt: ""
                },
                bargap: {
                    type: "number",
                    min: 0,
                    max: 1
                },
                bargroupgap: {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 0
                }
            }, r.supplyDefaults = function(t, e, a, o) {
                function i(a, o) {
                    return n.Lib.coerce(t, e, r.attributes, a, o);
                }
                if ("histogram" === e.type) {
                    if (n.Histogram.supplyDefaults(t, e), !e.visible) return;
                } else {
                    var l = n.Scatter.handleXYDefaults(t, e, i);
                    if (!l) return void (e.visible = !1);
                    i("orientation", e.x && !e.y ? "h" : "v");
                }
                i("marker.color", a), n.Colorscale.hasColorscale(t, "marker") && n.Colorscale.handleDefaults(t, e, o, i, {
                    prefix: "marker.",
                    cLetter: "c"
                }), i("marker.line.color", n.Color.defaultLine), n.Colorscale.hasColorscale(t, "marker.line") && n.Colorscale.handleDefaults(t, e, o, i, {
                    prefix: "marker.line.",
                    cLetter: "c"
                }), i("marker.line.width", 0), i("text"), n.ErrorBars && (n.ErrorBars.supplyDefaults(t, e, n.Color.defaultLine, {
                    axis: "y"
                }), n.ErrorBars.supplyDefaults(t, e, n.Color.defaultLine, {
                    axis: "x",
                    inherit: "y"
                }));
            }, r.supplyLayoutDefaults = function(t, e, a) {
                function o(a, o) {
                    return n.Lib.coerce(t, e, r.layoutAttributes, a, o);
                }
                var i, l, s, c = !1, d = !1, u = !1, f = {};
                for (i = 0; i < a.length; i++) if (l = a[i], n.Plots.traceIs(l, "bar") && (c = !0, 
                "overlay" !== t.barmode && "stack" !== t.barmode && (s = l.xaxis + l.yaxis, f[s] && (u = !0), 
                f[s] = !0), l.visible && "histogram" === l.type)) {
                    var h = n.Axes.getFromId({
                        _fullLayout: e
                    }, l["v" === l.orientation ? "xaxis" : "yaxis"]);
                    "category" !== h.type && (d = !0);
                }
                if (c) {
                    var p = o("barmode");
                    "overlay" !== p && o("barnorm"), o("bargap", d && !u ? 0 : .2), o("bargroupgap");
                }
            }, r.colorbar = n.Scatter.colorbar, r.calc = function(t, e) {
                if ("histogram" === e.type) return n.Histogram.calc(t, e);
                var r, o, i, l = n.Axes.getFromId(t, e.xaxis || "x"), s = n.Axes.getFromId(t, e.yaxis || "y"), c = e.orientation || (e.x && !e.y ? "h" : "v");
                "h" === c ? (o = l.makeCalcdata(e, "x"), r = s.makeCalcdata(e, "y")) : (o = s.makeCalcdata(e, "y"), 
                r = l.makeCalcdata(e, "x"));
                var d = Math.min(r.length, o.length), u = [];
                for (i = 0; d > i; i++) a(r[i]) && a(o[i]) && u.push({
                    p: r[i],
                    s: o[i],
                    b: 0
                });
                return n.Colorscale.hasColorscale(e, "marker") && n.Colorscale.calc(e, e.marker.color, "marker", "c"), 
                n.Colorscale.hasColorscale(e, "marker.line") && n.Colorscale.calc(e, e.marker.line.color, "marker.line", "c"), 
                u;
            }, r.setPositions = function(t, e) {
                var r, o, i = t._fullLayout, l = e.x(), s = e.y();
                [ "v", "h" ].forEach(function(c) {
                    function d(e) {
                        function r(t) {
                            t[f] = t.p + h;
                        }
                        var a = [];
                        e.forEach(function(e) {
                            t.calcdata[e].forEach(function(t) {
                                a.push(t.p);
                            });
                        });
                        var o = n.Lib.distinctVals(a), l = o.vals, s = o.minDiff, c = !1, d = [];
                        "group" === i.barmode && e.forEach(function(e) {
                            c || (t.calcdata[e].forEach(function(t) {
                                c || d.forEach(function(e) {
                                    Math.abs(t.p - e) < s && (c = !0);
                                });
                            }), c || t.calcdata[e].forEach(function(t) {
                                d.push(t.p);
                            }));
                        }), n.Axes.minDtick(p, s, l[0], c), n.Axes.expand(p, l, {
                            vpad: s / 2
                        }), s *= 1 - i.bargap, c && (s /= u.length);
                        for (var h, g = 0; g < e.length; g++) {
                            var m = t.calcdata[e[g]][0].t;
                            m.barwidth = s * (1 - i.bargroupgap), m.poffset = ((c ? (2 * g + 1 - e.length) * s : 0) - m.barwidth) / 2, 
                            m.dbar = o.minDiff, h = m.poffset + m.barwidth / 2, t.calcdata[e[g]].forEach(r);
                        }
                    }
                    var u = [], f = {
                        v: "x",
                        h: "y"
                    }[c], h = {
                        v: "y",
                        h: "x"
                    }[c], p = e[f](), g = e[h]();
                    if (t._fullData.forEach(function(t, e) {
                        t.visible === !0 && n.Plots.traceIs(t, "bar") && t.orientation === c && t.xaxis === l._id && t.yaxis === s._id && u.push(e);
                    }), u.length) {
                        "overlay" === i.barmode ? u.forEach(function(t) {
                            d([ t ]);
                        }) : d(u);
                        var m = "stack" === i.barmode, y = i.barnorm;
                        if (m || y) {
                            var v, x, b, _ = g.l2c(g.c2l(0)), w = _, k = {}, A = t.calcdata[u[0]][0].t.barwidth / 100, M = 0, L = !0;
                            for (r = 0; r < u.length; r++) for (x = t.calcdata[u[r]], o = 0; o < x.length; o++) {
                                M = Math.round(x[o].p / A);
                                var z = k[M] || 0;
                                m && (x[o].b = z), v = x[o].b + x[o].s, k[M] = z + x[o].s, m && (x[o][h] = v, !y && a(g.c2l(v)) && (_ = Math.max(_, v), 
                                w = Math.min(w, v)));
                            }
                            if (y) {
                                L = !1;
                                var C = "fraction" === y ? 1 : 100, D = C / 1e9;
                                for (w = 0, _ = m ? C : 0, r = 0; r < u.length; r++) for (x = t.calcdata[u[r]], 
                                o = 0; o < x.length; o++) b = C / k[Math.round(x[o].p / A)], x[o].b *= b, x[o].s *= b, 
                                v = x[o].b + x[o].s, x[o][h] = v, a(g.c2l(v)) && (w - D > v && (L = !0, w = v), 
                                v > _ + D && (L = !0, _ = v));
                            }
                            n.Axes.expand(g, [ w, _ ], {
                                tozero: !0,
                                padded: L
                            });
                        } else {
                            var O = function(t) {
                                return t[h] = t.s, t.s;
                            };
                            for (r = 0; r < u.length; r++) n.Axes.expand(g, t.calcdata[u[r]].map(O), {
                                tozero: !0,
                                padded: !0
                            });
                        }
                    }
                });
            }, r.arraysToCalcdata = function(t) {
                var e = t[0].trace, r = e.marker, a = r.line;
                n.Lib.mergeArray(e.text, t, "tx"), n.Lib.mergeArray(r.opacity, t, "mo"), n.Lib.mergeArray(r.color, t, "mc"), 
                n.Lib.mergeArray(a.color, t, "mlc"), n.Lib.mergeArray(a.width, t, "mlw");
            }, r.plot = function(t, e, o) {
                var i = e.x(), l = e.y(), s = t._fullLayout, c = e.plot.select(".barlayer").selectAll("g.trace.bars").data(o).enter().append("g").attr("class", "trace bars");
                c.append("g").attr("class", "points").each(function(e) {
                    var o = e[0].t, c = e[0].trace;
                    r.arraysToCalcdata(e), d3.select(this).selectAll("path").data(n.Lib.identity).enter().append("path").each(function(e) {
                        function r(t) {
                            return 0 === s.bargap && 0 === s.bargroupgap ? d3.round(Math.round(t) - m, 2) : t;
                        }
                        function d(t, e) {
                            return Math.abs(t - e) >= 2 ? r(t) : t > e ? Math.ceil(t) : Math.floor(t);
                        }
                        var u, f, h, p;
                        if ("h" === c.orientation ? (h = l.c2p(o.poffset + e.p, !0), p = l.c2p(o.poffset + e.p + o.barwidth, !0), 
                        u = i.c2p(e.b, !0), f = i.c2p(e.s + e.b, !0)) : (u = i.c2p(o.poffset + e.p, !0), 
                        f = i.c2p(o.poffset + e.p + o.barwidth, !0), p = l.c2p(e.s + e.b, !0), h = l.c2p(e.b, !0)), 
                        !(a(u) && a(f) && a(h) && a(p) && u !== f && h !== p)) return void d3.select(this).remove();
                        var g = (e.mlw + 1 || c.marker.line.width + 1 || (e.trace ? e.trace.marker.line.width : 0) + 1) - 1, m = d3.round(g / 2 % 1, 2);
                        if (!t._context.staticPlot) {
                            var y = n.Color.opacity(e.mc || c.marker.color), v = 1 > y || g > .01 ? r : d;
                            u = v(u, f), f = v(f, u), h = v(h, p), p = v(p, h);
                        }
                        d3.select(this).attr("d", "M" + u + "," + h + "V" + p + "H" + f + "V" + h + "Z");
                    });
                });
            }, r.style = function(t) {
                var e = d3.select(t).selectAll("g.trace.bars"), r = e.size(), a = t._fullLayout;
                e.style("opacity", function(t) {
                    return t[0].trace.opacity;
                }).each(function(t) {
                    ("stack" === a.barmode && r > 1 || 0 === a.bargap && 0 === a.bargroupgap && !t[0].trace.marker.line.width) && d3.select(this).attr("shape-rendering", "crispEdges");
                }), e.selectAll("g.points").each(function(t) {
                    var e = t[0].trace, r = e.marker, a = r.line, o = (e._input || {}).marker || {}, i = n.Drawing.tryColorscale(r, o, ""), l = n.Drawing.tryColorscale(r, o, "line.");
                    d3.select(this).selectAll("path").each(function(t) {
                        var e, o, s = (t.mlw + 1 || a.width + 1) - 1, c = d3.select(this);
                        e = "mc" in t ? t.mcc = i(t.mc) : Array.isArray(r.color) ? n.Color.defaultLine : r.color, 
                        c.style("stroke-width", s + "px").call(n.Color.fill, e), s && (o = "mlc" in t ? t.mlcc = l(t.mlc) : Array.isArray(a.color) ? n.Color.defaultLine : a.color, 
                        c.call(n.Color.stroke, o));
                    });
                });
            }, r.hoverPoints = function(t, e, r, a) {
                var o, i = t.cd, l = i[0].trace, s = i[0].t, c = t.xa, d = t.ya, u = "closest" === a ? s.barwidth / 2 : s.dbar * (1 - c._td._fullLayout.bargap) / 2;
                o = "closest" !== a ? function(t) {
                    return t.p;
                } : "h" === l.orientation ? function(t) {
                    return t.y;
                } : function(t) {
                    return t.x;
                };
                var f, h;
                "h" === l.orientation ? (f = function(t) {
                    return n.Fx.inbox(t.b - e, t.x - e) + (t.x - e) / (t.x - t.b);
                }, h = function(t) {
                    var e = o(t) - r;
                    return n.Fx.inbox(e - u, e + u);
                }) : (h = function(t) {
                    return n.Fx.inbox(t.b - r, t.y - r) + (t.y - r) / (t.y - t.b);
                }, f = function(t) {
                    var r = o(t) - e;
                    return n.Fx.inbox(r - u, r + u);
                });
                var p = n.Fx.getDistanceFunction(a, f, h);
                if (n.Fx.getClosest(i, p, t), t.index !== !1) {
                    var g = i[t.index], m = g.mcc || l.marker.color, y = g.mlcc || l.marker.line.color, v = g.mlw || l.marker.line.width;
                    return n.Color.opacity(m) ? t.color = m : n.Color.opacity(y) && v && (t.color = y), 
                    "h" === l.orientation ? (t.x0 = t.x1 = c.c2p(g.x, !0), t.xLabelVal = g.s, t.y0 = d.c2p(o(g) - u, !0), 
                    t.y1 = d.c2p(o(g) + u, !0), t.yLabelVal = g.p) : (t.y0 = t.y1 = d.c2p(g.y, !0), 
                    t.yLabelVal = g.s, t.x0 = c.c2p(o(g) - u, !0), t.x1 = c.c2p(o(g) + u, !0), t.xLabelVal = g.p), 
                    g.tx && (t.text = g.tx), n.ErrorBars && n.ErrorBars.hoverInfo(g, l, t), [ t ];
                }
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27
        } ],
        11: [ function(t, e) {
            "use strict";
            function r(t) {
                if (o(t) || "string" != typeof t) return t;
                var e = t.trim();
                if ("rgb" !== e.substr(0, 3)) return t;
                var r = e.match(/^rgba?\s*\(([^()]*)\)$/);
                if (!r) return t;
                var n = r[1].trim().split(/\s*[\s,]\s*/), a = "a" === e.charAt(3) && 4 === n.length;
                if (!a && 3 !== n.length) return t;
                for (var i = 0; i < n.length; i++) {
                    if (!n[i].length) return t;
                    if (n[i] = Number(n[i]), !(n[i] >= 0)) return t;
                    if (3 === i) n[i] > 1 && (n[i] = 1); else if (n[i] >= 1) return t;
                }
                var l = Math.round(255 * n[0]) + ", " + Math.round(255 * n[1]) + ", " + Math.round(255 * n[2]);
                return a ? "rgba(" + l + ", " + n[3] + ")" : "rgb(" + l + ")";
            }
            var n = e.exports = {}, a = t("tinycolor2"), o = t("./isnumeric");
            n.defaults = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ], 
            n.defaultLine = "#444", n.lightLine = "#eee", n.background = "#fff", n.tinyRGB = function(t) {
                var e = t.toRgb();
                return "rgb(" + Math.round(e.r) + ", " + Math.round(e.g) + ", " + Math.round(e.b) + ")";
            }, n.rgb = function(t) {
                return n.tinyRGB(a(t));
            }, n.opacity = function(t) {
                return t ? a(t).getAlpha() : 0;
            }, n.addOpacity = function(t, e) {
                var r = a(t).toRgb();
                return "rgba(" + Math.round(r.r) + ", " + Math.round(r.g) + ", " + Math.round(r.b) + ", " + e + ")";
            }, n.combine = function(t, e) {
                var r = a(t).toRgb();
                if (1 === r.a) return a(t).toRgbString();
                var o = a(e || n.background).toRgb(), i = 1 === o.a ? o : {
                    r: 255 * (1 - o.a) + o.r * o.a,
                    g: 255 * (1 - o.a) + o.g * o.a,
                    b: 255 * (1 - o.a) + o.b * o.a
                }, l = {
                    r: i.r * (1 - r.a) + r.r * r.a,
                    g: i.g * (1 - r.a) + r.g * r.a,
                    b: i.b * (1 - r.a) + r.b * r.a
                };
                return a(l).toRgbString();
            }, n.stroke = function(t, e) {
                var r = a(e);
                t.style({
                    stroke: n.tinyRGB(r),
                    "stroke-opacity": r.getAlpha()
                });
            }, n.fill = function(t, e) {
                var r = a(e);
                t.style({
                    fill: n.tinyRGB(r),
                    "fill-opacity": r.getAlpha()
                });
            }, n.clean = function(t) {
                if (t && "object" == typeof t) {
                    var e, a, o, i, l = Object.keys(t);
                    for (e = 0; e < l.length; e++) if (o = l[e], i = t[o], "color" === o.substr(o.length - 5)) if (Array.isArray(i)) for (a = 0; a < i.length; a++) i[a] = r(i[a]); else t[o] = r(i); else if ("colorscale" === o.substr(o.length - 10) && Array.isArray(i)) for (a = 0; a < i.length; a++) Array.isArray(i[a]) && (i[a][1] = r(i[a][1])); else if (Array.isArray(i)) {
                        var s = i[0];
                        if (!Array.isArray(s) && s && "object" == typeof s) for (a = 0; a < i.length; a++) n.clean(i[a]);
                    } else i && "object" == typeof i && n.clean(i);
                }
            };
        }, {
            "./isnumeric": 20,
            tinycolor2: 7
        } ],
        12: [ function(t, e) {
            "use strict";
            var r = t("./plotly"), n = t("./isnumeric"), a = e.exports = function(t, e) {
                function n() {
                    function a(t, e) {
                        return r.Lib.coerce(E, I, r.Axes.layoutAttributes, t, e);
                    }
                    function i() {
                        if (-1 !== [ "top", "bottom" ].indexOf(o.titleside)) {
                            var e = H.select(".cbtitle"), n = e.select("text"), a = [ -o.outlinewidth / 2, o.outlinewidth / 2 ], i = e.select(".h" + I._id + "title-math-group").node(), l = 15.6;
                            if (n.node() && (l = 1.3 * parseInt(n.style("font-size"), 10)), i ? (q = r.Drawing.bBox(i).height, 
                            q > l && (a[1] -= (q - l) / 2)) : n.node() && !n.classed("js-placeholder") && (q = r.Drawing.bBox(e.node()).height), 
                            q) {
                                if (q += 5, "top" === o.titleside) I.domain[1] -= q / s._size.h, a[1] *= -1; else {
                                    I.domain[0] += q / s._size.h;
                                    var c = Math.max(1, n.selectAll("tspan.line").size());
                                    a[1] += (1 - c) * l;
                                }
                                e.attr("transform", "translate(" + a + ")"), I.setScale();
                            }
                        }
                        H.selectAll(".cbfills,.cblines,.cbaxis").attr("transform", "translate(0," + Math.round(s._size.h * (1 - I.domain[1])) + ")");
                        var g = H.select(".cbfills").selectAll("rect.cbfill").data(f);
                        g.enter().append("rect").classed("cbfill", !0).style("stroke", "none"), g.exit().remove(), 
                        g.each(function(t, e) {
                            var r = [ 0 === e ? d[0] : (f[e] + f[e - 1]) / 2, e === f.length - 1 ? d[1] : (f[e] + f[e + 1]) / 2 ].map(I.c2p).map(Math.round);
                            e !== f.length - 1 && (r[1] += r[1] > r[0] ? 1 : -1), d3.select(this).attr({
                                x: D,
                                width: Math.max(w, 2),
                                y: d3.min(r),
                                height: Math.max(d3.max(r) - d3.min(r), 2)
                            }).style("fill", p(t));
                        });
                        var m = H.select(".cblines").selectAll("path.cbline").data(o.line.color && o.line.width ? u : []);
                        return m.enter().append("path").classed("cbline", !0), m.exit().remove(), m.each(function(t) {
                            d3.select(this).attr("d", "M" + D + "," + (Math.round(I.c2p(t)) + o.line.width / 2 % 1) + "h" + w).call(r.Drawing.lineGroupStyle, o.line.width, h(t), o.line.dash);
                        }), I._axislayer.selectAll("g." + I._id + "tick,path").remove(), I._pos = D + w + (o.outlinewidth || 0) / 2 - ("outside" === o.ticks ? 1 : 0), 
                        I.side = o.orient, r.Axes.doTicks(t, I);
                    }
                    function l() {
                        var n = w + o.outlinewidth / 2 + r.Drawing.bBox(I._axislayer.node()).width;
                        if (x = V.select("text"), x.node() && !x.classed("js-placeholder")) {
                            var a, i = V.select(".h" + I._id + "title-math-group").node();
                            a = i && -1 !== [ "top", "bottom" ].indexOf(o.titleside) ? r.Drawing.bBox(i).width : r.Drawing.bBox(V.node()).right - D - s._size.l, 
                            n = Math.max(n, a);
                        }
                        var l = 2 * o.xpad + n + o.borderwidth + o.outlinewidth / 2, c = P - T;
                        H.select(".cbbg").attr({
                            x: D - o.xpad - (o.borderwidth + o.outlinewidth) / 2,
                            y: T - z,
                            width: Math.max(l, 2),
                            height: Math.max(c + 2 * z, 2)
                        }).call(r.Color.fill, o.bgcolor).call(r.Color.stroke, o.bordercolor).style({
                            "stroke-width": o.borderwidth
                        }), H.selectAll(".cboutline").attr({
                            x: D,
                            y: T + o.ypad + ("top" === o.titleside ? q : 0),
                            width: Math.max(w, 2),
                            height: Math.max(c - 2 * o.ypad - q, 2)
                        }).call(r.Color.stroke, o.outlinecolor).style({
                            fill: "None",
                            "stroke-width": o.outlinewidth
                        });
                        var d = ({
                            center: .5,
                            right: 1
                        }[o.xanchor] || 0) * l;
                        H.attr("transform", "translate(" + (s._size.l - d) + "," + s._size.t + ")"), r.Plots.autoMargin(t, e, {
                            x: o.x,
                            y: o.y,
                            l: l * ({
                                right: 1,
                                center: .5
                            }[o.xanchor] || 0),
                            r: l * ({
                                left: 1,
                                center: .5
                            }[o.xanchor] || 0),
                            t: c * ({
                                bottom: 1,
                                middle: .5
                            }[o.yanchor] || 0),
                            b: c * ({
                                top: 1,
                                middle: .5
                            }[o.yanchor] || 0)
                        });
                    }
                    var s = t._fullLayout;
                    if ("function" != typeof o.fillcolor && "function" != typeof o.line.color) return void s._infolayer.selectAll("g." + e).remove();
                    var c, d = d3.extent(("function" == typeof o.fillcolor ? o.fillcolor : o.line.color).domain()), u = [], f = [], h = "function" == typeof o.line.color ? o.line.color : function() {
                        return o.line.color;
                    }, p = "function" == typeof o.fillcolor ? o.fillcolor : function() {
                        return o.fillcolor;
                    }, g = o.levels.end + o.levels.size / 100, m = o.levels.size, y = 1.001 * d[0] - .001 * d[1], v = 1.001 * d[1] - .001 * d[0];
                    for (c = o.levels.start; 0 > (c - g) * m; c += m) c > y && v > c && u.push(c);
                    if ("function" == typeof o.fillcolor) if (o.filllevels) for (g = o.filllevels.end + o.filllevels.size / 100, 
                    m = o.filllevels.size, c = o.filllevels.start; 0 > (c - g) * m; c += m) c > d[0] && c < d[1] && f.push(c); else f = u.map(function(t) {
                        return t - o.levels.size / 2;
                    }), f.push(f[f.length - 1] + o.levels.size); else o.fillcolor && "string" == typeof o.fillcolor && (f = [ 0 ]);
                    o.levels.size < 0 && (u.reverse(), f.reverse());
                    var x, b = s.height - s.margin.t - s.margin.b, _ = s.width - s.margin.l - s.margin.r, w = Math.round(o.thickness * ("fraction" === o.thicknessmode ? _ : 1)), k = w / s._size.w, A = Math.round(o.len * ("fraction" === o.lenmode ? b : 1)), M = A / s._size.h, L = o.xpad / s._size.w, z = (o.borderwidth + o.outlinewidth) / 2, C = o.ypad / s._size.h, D = Math.round(o.x * s._size.w + o.xpad), O = o.x - k * ({
                        middle: .5,
                        right: 1
                    }[o.xanchor] || 0), S = o.y + M * (({
                        top: -.5,
                        bottom: .5
                    }[o.yanchor] || 0) - .5), P = Math.round(s._size.h * (1 - S)), T = P - A, E = {
                        type: "linear",
                        range: d,
                        tickmode: o.tickmode,
                        nticks: o.nticks,
                        tick0: o.tick0,
                        dtick: o.dtick,
                        tickvals: o.tickvals,
                        ticktext: o.ticktext,
                        ticks: o.ticks,
                        ticklen: o.ticklen,
                        tickwidth: o.tickwidth,
                        tickcolor: o.tickcolor,
                        showticklabels: o.showticklabels,
                        tickfont: o.tickfont,
                        tickangle: o.tickangle,
                        tickformat: o.tickformat,
                        exponentformat: o.exponentformat,
                        showexponent: o.showexponent,
                        showtickprefix: o.showtickprefix,
                        tickprefix: o.tickprefix,
                        showticksuffix: o.showticksuffix,
                        ticksuffix: o.ticksuffix,
                        title: o.title,
                        titlefont: o.titlefont,
                        anchor: "free",
                        position: 1
                    }, I = {}, j = {
                        letter: "y",
                        font: s.font,
                        noHover: !0
                    };
                    if (r.Axes.handleAxisDefaults(E, I, a, j), r.Axes.handleAxisPositioningDefaults(E, I, a, j), 
                    I._id = "y" + e, I._td = t, I.position = o.x + L + k, n.axis = I, -1 !== [ "top", "bottom" ].indexOf(o.titleside) && (I.titleside = o.titleside, 
                    I.titlex = o.x + L, I.titley = S + ("top" === o.titleside ? M - C : C)), o.line.color && "auto" === o.tickmode) {
                        I.tickmode = "linear", I.tick0 = o.levels.start;
                        var N = o.levels.size, B = r.Lib.constrain((P - T) / 50, 4, 15) + 1, F = (d[1] - d[0]) / ((o.nticks || B) * N);
                        if (F > 1) {
                            var R = Math.pow(10, Math.floor(Math.log(F) / Math.LN10));
                            N *= R * r.Lib.roundUp(F / R, [ 2, 5, 10 ]), (Math.abs(o.levels.start) / o.levels.size + 1e-6) % 1 < 2e-6 && (I.tick0 = 0);
                        }
                        I.dtick = N;
                    }
                    I.domain = [ S + C, S + M - C ], I.setScale();
                    var H = s._infolayer.selectAll("g." + e).data([ 0 ]);
                    H.enter().append("g").classed(e, !0).each(function() {
                        var t = d3.select(this);
                        t.append("rect").classed("cbbg", !0), t.append("g").classed("cbfills", !0), t.append("g").classed("cblines", !0), 
                        t.append("g").classed("cbaxis", !0).classed("crisp", !0), t.append("g").classed("cbtitleunshift", !0).append("g").classed("cbtitle", !0), 
                        t.append("rect").classed("cboutline", !0);
                    }), H.attr("transform", "translate(" + Math.round(s._size.l) + "," + Math.round(s._size.t) + ")");
                    var V = H.select(".cbtitleunshift").attr("transform", "translate(-" + Math.round(s._size.l) + ",-" + Math.round(s._size.t) + ")");
                    I._axislayer = H.select(".cbaxis");
                    var q = 0;
                    -1 !== [ "top", "bottom" ].indexOf(o.titleside) && r.Plots.titles(t, I._id + "title");
                    var Z = r.Lib.syncOrAsync([ r.Plots.previousPromises, i, r.Plots.previousPromises, l ], t);
                    if (Z && Z.then && (t._promises || []).push(Z), t._context.editable) {
                        var X, $, G;
                        r.Fx.dragElement({
                            element: H.node(),
                            prepFn: function() {
                                X = H.attr("transform"), r.Fx.setCursor(H);
                            },
                            moveFn: function(e, n) {
                                var a = t._fullLayout._size;
                                H.attr("transform", X + " translate(" + e + "," + n + ")"), $ = r.Fx.dragAlign(O + e / a.w, k, 0, 1, o.xanchor), 
                                G = r.Fx.dragAlign(S - n / a.h, M, 0, 1, o.yanchor);
                                var i = r.Fx.dragCursors($, G, o.xanchor, o.yanchor);
                                r.Fx.setCursor(H, i);
                            },
                            doneFn: function(n) {
                                if (r.Fx.setCursor(H), n && void 0 !== $ && void 0 !== G) {
                                    var a, o = e.substr(2);
                                    t._fullData.some(function(t) {
                                        return t.uid === o ? (a = t.index, !0) : void 0;
                                    }), r.restyle(t, {
                                        "colorbar.x": $,
                                        "colorbar.y": G
                                    }, a);
                                }
                            }
                        });
                    }
                    return Z;
                }
                var o = {};
                return Object.keys(a.attributes).forEach(function(t) {
                    o[t] = null;
                }), o.fillcolor = null, o.line = {
                    color: null,
                    width: null,
                    dash: null
                }, o.levels = {
                    start: null,
                    end: null,
                    size: null
                }, o.filllevels = null, Object.keys(o).forEach(function(t) {
                    n[t] = function(e) {
                        return arguments.length ? ($.isPlainObject(o[t]) ? $.extend(o[t], e) : o[t] = e, 
                        n) : o[t];
                    };
                }), n.options = function(t) {
                    return Object.keys(t).forEach(function(e) {
                        "function" == typeof n[e] && n[e](t[e]);
                    }), n;
                }, n._opts = o, n;
            }, o = r.Axes.layoutAttributes, i = r.Lib.extendFlat;
            a.attributes = {
                orient: {
                    type: "enumerated",
                    values: [ "left", "right", "top", "bottom" ],
                    dflt: "right"
                },
                thicknessmode: {
                    type: "enumerated",
                    values: [ "fraction", "pixels" ],
                    dflt: "pixels"
                },
                thickness: {
                    type: "number",
                    min: 0,
                    dflt: 30
                },
                lenmode: {
                    type: "enumerated",
                    values: [ "fraction", "pixels" ],
                    dflt: "fraction"
                },
                len: {
                    type: "number",
                    min: 0,
                    dflt: 1
                },
                x: {
                    type: "number",
                    dflt: 1.02
                },
                xanchor: {
                    type: "enumerated",
                    values: [ "left", "center", "right" ],
                    dflt: "left"
                },
                xpad: {
                    type: "number",
                    min: 0,
                    dflt: 10
                },
                y: {
                    type: "number",
                    dflt: .5
                },
                yanchor: {
                    type: "enumerated",
                    values: [ "top", "middle", "bottom" ],
                    dflt: "middle"
                },
                ypad: {
                    type: "number",
                    min: 0,
                    dflt: 10
                },
                outlinecolor: o.linecolor,
                outlinewidth: o.linewidth,
                bordercolor: o.linecolor,
                borderwidth: {
                    type: "number",
                    min: 0,
                    dflt: 0
                },
                bgcolor: {
                    type: "color",
                    dflt: "rgba(0,0,0,0)"
                },
                tickmode: o.tickmode,
                nticks: o.nticks,
                tick0: o.tick0,
                dtick: o.dtick,
                tickvals: o.tickvals,
                ticktext: o.ticktext,
                ticks: i(o.ticks, {
                    dflt: ""
                }),
                ticklen: o.ticklen,
                tickwidth: o.tickwidth,
                tickcolor: o.tickcolor,
                showticklabels: o.showticklabels,
                tickfont: o.tickfont,
                tickangle: o.tickangle,
                tickformat: o.tickformat,
                tickprefix: o.tickprefix,
                showtickprefix: o.showtickprefix,
                ticksuffix: o.ticksuffix,
                showticksuffix: o.showticksuffix,
                exponentformat: o.exponentformat,
                showexponent: o.showexponent,
                title: {
                    type: "string",
                    dflt: "Click to enter colorscale title"
                },
                titlefont: o.titlefont,
                titleside: {
                    type: "enumerated",
                    values: [ "right", "top", "bottom" ],
                    dflt: "top"
                }
            }, a.supplyDefaults = function(t, e, n) {
                function o(t, e) {
                    return r.Lib.coerce(l, i, a.attributes, t, e);
                }
                var i = e.colorbar = {}, l = t.colorbar || {};
                o("orient");
                var s = o("thicknessmode");
                o("thickness", "fraction" === s ? 30 / (n.width - n.margin.l - n.margin.r) : 30);
                var c = o("lenmode");
                o("len", "fraction" === c ? 1 : n.height - n.margin.t - n.margin.b), o("x"), o("xanchor"), 
                o("xpad"), o("y"), o("yanchor"), o("ypad"), r.Lib.noneOrAll(l, i, [ "x", "y" ]), 
                o("outlinecolor"), o("outlinewidth"), o("bordercolor"), o("borderwidth"), o("bgcolor"), 
                r.Axes.handleTickValueDefaults(l, i, o, "linear"), r.Axes.handleTickDefaults(l, i, o, "linear", {
                    outerTicks: !1,
                    font: n.font,
                    noHover: !0
                }), o("title"), o("titlefont", n.font), o("titleside");
            }, a.traceColorbar = function(t, e) {
                var o = e[0].trace, i = "cb" + o.uid, l = r.Colorscale.getScale(o.colorscale), s = o.zmin, c = o.zmax;
                if (n(s) || (s = r.Lib.aggNums(Math.min, null, o.z)), n(c) || (c = r.Lib.aggNums(Math.max, null, o.z)), 
                t._fullLayout._infolayer.selectAll("." + i).remove(), !o.showscale) return void r.Plots.autoMargin(t, i);
                var d = e[0].t.cb = a(t, i);
                d.fillcolor(d3.scale.linear().domain(l.map(function(t) {
                    return s + t[0] * (c - s);
                })).range(l.map(function(t) {
                    return t[1];
                }))).filllevels({
                    start: s,
                    end: c,
                    size: (c - s) / 254
                }).options(o.colorbar)(), r.Lib.markTime("done colorbar");
            }, a.traceColorbarAttributes = {
                zauto: {
                    type: "boolean",
                    dflt: !0
                },
                zmin: {
                    type: "number",
                    dflt: null
                },
                zmax: {
                    type: "number",
                    dflt: null
                },
                colorscale: {
                    type: "colorscale"
                },
                reversescale: {
                    type: "boolean",
                    dflt: !1
                },
                showscale: {
                    type: "boolean",
                    dflt: !0
                }
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27
        } ],
        13: [ function(t, e) {
            "use strict";
            function r(t) {
                var e, r = !0, n = 0;
                if (Array.isArray(t)) {
                    if (0 !== +t[0][0] || 1 !== +t[t.length - 1][0]) return !1;
                    for (var a = 0; a < t.length; a++) {
                        if (e = t[a], 2 !== e.length || +e[0] < n || !o(e[1]).isValid()) {
                            r = !1;
                            break;
                        }
                        n = +e[0];
                    }
                    return r;
                }
                return !1;
            }
            var n = e.exports = {}, a = t("./plotly"), o = t("tinycolor2"), i = t("./isnumeric");
            n.scales = {
                Greys: [ [ 0, "rgb(0,0,0)" ], [ 1, "rgb(255,255,255)" ] ],
                YIGnBu: [ [ 0, "rgb(8, 29, 88)" ], [ .125, "rgb(37, 52, 148)" ], [ .25, "rgb(34, 94, 168)" ], [ .375, "rgb(29, 145, 192)" ], [ .5, "rgb(65, 182, 196)" ], [ .625, "rgb(127, 205, 187)" ], [ .75, "rgb(199, 233, 180)" ], [ .875, "rgb(237, 248, 217)" ], [ 1, "rgb(255, 255, 217)" ] ],
                Greens: [ [ 0, "rgb(0, 68, 27)" ], [ .125, "rgb(0, 109, 44)" ], [ .25, "rgb(35, 139, 69)" ], [ .375, "rgb(65, 171, 93)" ], [ .5, "rgb(116, 196, 118)" ], [ .625, "rgb(161, 217, 155)" ], [ .75, "rgb(199, 233, 192)" ], [ .875, "rgb(229, 245, 224)" ], [ 1, "rgb(247, 252, 245)" ] ],
                YIOrRd: [ [ 0, "rgb(128, 0, 38)" ], [ .125, "rgb(189, 0, 38)" ], [ .25, "rgb(227, 26, 28)" ], [ .375, "rgb(252, 78, 42)" ], [ .5, "rgb(253, 141, 60)" ], [ .625, "rgb(254, 178, 76)" ], [ .75, "rgb(254, 217, 118)" ], [ .875, "rgb(255, 237, 160)" ], [ 1, "rgb(255, 255, 204)" ] ],
                Bluered: [ [ 0, "rgb(0,0,255)" ], [ 1, "rgb(255,0,0)" ] ],
                RdBu: [ [ 0, "rgb(5, 10, 172)" ], [ .35, "rgb(106, 137, 247)" ], [ .5, "rgb(190,190,190)" ], [ .6, "rgb(220, 170, 132)" ], [ .7, "rgb(230, 145, 90)" ], [ 1, "rgb(178, 10, 28)" ] ],
                Reds: [ [ 0, "rgb(220, 220, 220)" ], [ .2, "rgb(245, 195, 157)" ], [ .4, "rgb(245, 160, 105)" ], [ 1, "rgb(178, 10, 28)" ] ],
                Blues: [ [ 0, "rgb(5, 10, 172)" ], [ .35, "rgb(40, 60, 190)" ], [ .5, "rgb(70, 100, 245)" ], [ .6, "rgb(90, 120, 245)" ], [ .7, "rgb(106, 137, 247)" ], [ 1, "rgb(220, 220, 220)" ] ],
                Picnic: [ [ 0, "rgb(0,0,255)" ], [ .1, "rgb(51,153,255)" ], [ .2, "rgb(102,204,255)" ], [ .3, "rgb(153,204,255)" ], [ .4, "rgb(204,204,255)" ], [ .5, "rgb(255,255,255)" ], [ .6, "rgb(255,204,255)" ], [ .7, "rgb(255,153,255)" ], [ .8, "rgb(255,102,204)" ], [ .9, "rgb(255,102,102)" ], [ 1, "rgb(255,0,0)" ] ],
                Rainbow: [ [ 0, "rgb(150,0,90)" ], [ .125, "rgb(0, 0, 200)" ], [ .25, "rgb(0, 25, 255)" ], [ .375, "rgb(0, 152, 255)" ], [ .5, "rgb(44, 255, 150)" ], [ .625, "rgb(151, 255, 0)" ], [ .75, "rgb(255, 234, 0)" ], [ .875, "rgb(255, 111, 0)" ], [ 1, "rgb(255, 0, 0)" ] ],
                Portland: [ [ 0, "rgb(12,51,131)" ], [ .25, "rgb(10,136,186)" ], [ .5, "rgb(242,211,56)" ], [ .75, "rgb(242,143,56)" ], [ 1, "rgb(217,30,30)" ] ],
                Jet: [ [ 0, "rgb(0,0,131)" ], [ .125, "rgb(0,60,170)" ], [ .375, "rgb(5,255,255)" ], [ .625, "rgb(255,255,0)" ], [ .875, "rgb(250,0,0)" ], [ 1, "rgb(128,0,0)" ] ],
                Hot: [ [ 0, "rgb(0,0,0)" ], [ .3, "rgb(230,0,0)" ], [ .6, "rgb(255,210,0)" ], [ 1, "rgb(255,255,255)" ] ],
                Blackbody: [ [ 0, "rgb(0,0,0)" ], [ .2, "rgb(230,0,0)" ], [ .4, "rgb(230,210,0)" ], [ .7, "rgb(255,255,255)" ], [ 1, "rgb(160,200,255)" ] ],
                Earth: [ [ 0, "rgb(0,0,130)" ], [ .1, "rgb(0,180,180)" ], [ .2, "rgb(40,210,40)" ], [ .4, "rgb(230,230,50)" ], [ .6, "rgb(120,70,20)" ], [ 1, "rgb(255,255,255)" ] ],
                Electric: [ [ 0, "rgb(0,0,0)" ], [ .15, "rgb(30,0,100)" ], [ .4, "rgb(120,0,100)" ], [ .6, "rgb(160,90,0)" ], [ .8, "rgb(230,200,0)" ], [ 1, "rgb(255,250,220)" ] ],
                Viridis: [ [ 0, "#440154" ], [ .06274509803921569, "#48186a" ], [ .12549019607843137, "#472d7b" ], [ .18823529411764706, "#424086" ], [ .25098039215686274, "#3b528b" ], [ .3137254901960784, "#33638d" ], [ .3764705882352941, "#2c728e" ], [ .4392156862745098, "#26828e" ], [ .5019607843137255, "#21918c" ], [ .5647058823529412, "#1fa088" ], [ .6274509803921569, "#28ae80" ], [ .6901960784313725, "#3fbc73" ], [ .7529411764705882, "#5ec962" ], [ .8156862745098039, "#84d44b" ], [ .8784313725490196, "#addc30" ], [ .9411764705882353, "#d8e219" ], [ 1, "#fde725" ] ]
            }, n.defaultScale = n.scales.RdBu, n.isValidScale = function(t) {
                return void 0 !== n.scales[t] ? !0 : r(t);
            }, n.getScale = function(t, e) {
                function a() {
                    try {
                        t = n.scales[t] || JSON.parse(t);
                    } catch (r) {
                        t = e;
                    }
                }
                return e || (e = n.defaultScale), t ? ("string" == typeof t && (a(), "string" == typeof t && a()), 
                r(t) ? t : e) : e;
            }, n.flipScale = function(t) {
                for (var e, r = t.length, n = new Array(r), a = r - 1, o = 0; a >= 0; a--, o++) e = t[a], 
                n[o] = [ 1 - e[0], e[1] ];
                return n;
            }, n.hasColorscale = function(t, e) {
                var r = e ? a.Lib.nestedProperty(t, e).get() || {} : t, o = r.color, l = !1;
                if (Array.isArray(o)) for (var s = 0; s < o.length; s++) if (i(o[s])) {
                    l = !0;
                    break;
                }
                return "object" == typeof r && null !== r && (l || r.showscale === !0 || i(r.cmin) && i(r.cmax) || n.isValidScale(r.colorscale) || "object" == typeof r.colorbar && null !== r.colorbar);
            }, n.hasColorbar = function(t) {
                return "object" == typeof t.colorbar && null !== t.colorbar;
            }, n.handleDefaults = function(t, e, r, o, l) {
                var s, c, d, u, f, h, p = l.prefix, g = l.cLetter, m = p.slice(0, p.length - 1), y = p ? a.Lib.nestedProperty(t, m).get() || {} : t, v = p ? a.Lib.nestedProperty(e, m).get() || {} : e, x = y[g + "min"], b = y[g + "max"], _ = y.colorscale;
                s = i(x) && i(b) && b > x, o(p + g + "auto", !s), o(p + g + "min"), o(p + g + "max"), 
                void 0 !== _ && (c = !n.isValidScale(_)), o(p + "autocolorscale", c), u = o(p + "colorscale"), 
                f = o(p + "reversescale"), f && (v.colorscale = n.flipScale(u)), "marker.line." !== p && (p && (d = n.hasColorbar(y)), 
                h = o(p + "showscale", d), h && a.Colorbar.supplyDefaults(y, v, r));
            }, n.calc = function(t, e, r, o) {
                var i, l;
                r ? (i = a.Lib.nestedProperty(t, r).get(), l = a.Lib.nestedProperty(t._input, r).get()) : (i = t, 
                l = t._input);
                var s = i[o + "auto"], c = i[o + "min"], d = i[o + "max"], u = i.colorscale;
                (s !== !1 || void 0 === c) && (c = a.Lib.aggNums(Math.min, null, e)), (s !== !1 || void 0 === d) && (d = a.Lib.aggNums(Math.max, null, e)), 
                c === d && (c -= .5, d += .5), i[o + "min"] = c, i[o + "max"] = d, l[o + "min"] = c, 
                l[o + "max"] = d, i.autocolorscale && (u = 0 > c * d ? n.scales.RdBu : c >= 0 ? n.scales.Reds : n.scales.Blues, 
                l.colorscale = u, i.reversescale && (u = n.flipScale(u)), i.colorscale = u);
            }, n.makeScaleFunction = function(t, e, r) {
                for (var n, l = t.length, s = new Array(l), c = new Array(l), d = 0; l > d; d++) n = t[d], 
                s[d] = e + n[0] * (r - e), c[d] = n[1];
                var u = d3.scale.linear().domain(s).interpolate(d3.interpolateRgb).range(c);
                return function(t) {
                    return i(t) ? u(t) : o(t).isValid() ? t : a.Color.defaultLine;
                };
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27,
            tinycolor2: 7
        } ],
        14: [ function(t, e, r) {
            "undefined" != typeof MathJax ? (r.MathJax = !0, MathJax.Hub.Config({
                messageStyle: "none",
                skipStartupTypeset: !0,
                displayAlign: "left",
                tex2jax: {
                    inlineMath: [ [ "$", "$" ], [ "\\(", "\\)" ] ]
                }
            }), MathJax.Hub.Configured()) : r.MathJax = !1;
        }, {} ],
        15: [ function(t, e) {
            "use strict";
            function r(t, e, r, n) {
                var a = t[0] - e[0], o = t[1] - e[1], i = r[0] - e[0], l = r[1] - e[1], s = Math.pow(a * a + o * o, u / 2), c = Math.pow(i * i + l * l, u / 2), d = (c * c * a - s * s * i) * n, f = (c * c * o - s * s * l) * n, h = 3 * c * (s + c), p = 3 * s * (s + c);
                return [ [ d3.round(e[0] + (h && d / h), 2), d3.round(e[1] + (h && f / h), 2) ], [ d3.round(e[0] - (p && d / p), 2), d3.round(e[1] - (p && f / p), 2) ] ];
            }
            var n = e.exports = {}, a = t("./plotly"), o = t("./isnumeric");
            n.font = function(t, e, r, n) {
                e && e.family && (n = e.color, r = e.size, e = e.family), e && t.style("font-family", e), 
                r + 1 && t.style("font-size", r + "px"), n && t.call(a.Color.fill, n);
            }, n.setPosition = function(t, e, r) {
                t.attr("x", e).attr("y", r);
            }, n.setSize = function(t, e, r) {
                t.attr("width", e).attr("height", r);
            }, n.setRect = function(t, e, r, a, o) {
                t.call(n.setPosition, e, r).call(n.setSize, a, o);
            }, n.translatePoints = function(t, e, r) {
                t.each(function(t) {
                    var n = t.xp || e.c2p(t.x), a = t.yp || r.c2p(t.y), i = d3.select(this);
                    o(n) && o(a) ? "text" === this.nodeName ? i.attr("x", n).attr("y", a) : i.attr("transform", "translate(" + n + "," + a + ")") : i.remove();
                });
            }, n.getPx = function(t, e) {
                return Number(t.style(e).replace(/px$/, ""));
            }, n.crispRound = function(t, e, r) {
                return e && o(e) ? t._context.staticPlot ? e : 1 > e ? 1 : Math.round(e) : r || 0;
            }, n.lineGroupStyle = function(t, e, r, o) {
                t.style("fill", "none").each(function(t) {
                    var i = (((t || [])[0] || {}).trace || {}).line || {}, l = e || i.width || 0, s = o || i.dash || "";
                    d3.select(this).call(a.Color.stroke, r || i.color).call(n.dashLine, s, l);
                });
            }, n.dashLine = function(t, e, r) {
                var n = Math.max(r, 3);
                "solid" === e ? e = "" : "dot" === e ? e = n + "px," + n + "px" : "dash" === e ? e = 3 * n + "px," + 3 * n + "px" : "longdash" === e ? e = 5 * n + "px," + 5 * n + "px" : "dashdot" === e ? e = 3 * n + "px," + n + "px," + n + "px," + n + "px" : "longdashdot" === e && (e = 5 * n + "px," + 2 * n + "px," + n + "px," + 2 * n + "px"), 
                t.style({
                    "stroke-dasharray": e,
                    "stroke-width": r + "px"
                });
            }, n.fillGroupStyle = function(t) {
                t.style("stroke-width", 0).each(function(e) {
                    var r = d3.select(this);
                    try {
                        r.call(a.Color.fill, e[0].trace.fillcolor);
                    } catch (e) {
                        console.log(e, t), r.remove();
                    }
                });
            };
            var i = {
                circle: {
                    n: 0,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + ",0A" + e + "," + e + " 0 1,1 0,-" + e + "A" + e + "," + e + " 0 0,1 " + e + ",0Z";
                    }
                },
                square: {
                    n: 1,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + "," + e + "H-" + e + "V-" + e + "H" + e + "Z";
                    }
                },
                diamond: {
                    n: 2,
                    f: function(t) {
                        var e = d3.round(1.3 * t, 2);
                        return "M" + e + ",0L0," + e + "L-" + e + ",0L0,-" + e + "Z";
                    }
                },
                cross: {
                    n: 3,
                    f: function(t) {
                        var e = d3.round(.4 * t, 2), r = d3.round(1.2 * t, 2);
                        return "M" + r + "," + e + "H" + e + "V" + r + "H-" + e + "V" + e + "H-" + r + "V-" + e + "H-" + e + "V-" + r + "H" + e + "V-" + e + "H" + r + "Z";
                    }
                },
                x: {
                    n: 4,
                    f: function(t) {
                        var e = d3.round(.8 * t / Math.sqrt(2), 2), r = "l" + e + "," + e, n = "l" + e + ",-" + e, a = "l-" + e + ",-" + e, o = "l-" + e + "," + e;
                        return "M0," + e + r + n + a + n + a + o + a + o + r + o + r + "Z";
                    }
                },
                "triangle-up": {
                    n: 5,
                    f: function(t) {
                        var e = d3.round(2 * t / Math.sqrt(3), 2), r = d3.round(t / 2, 2), n = d3.round(t, 2);
                        return "M-" + e + "," + r + "H" + e + "L0,-" + n + "Z";
                    }
                },
                "triangle-down": {
                    n: 6,
                    f: function(t) {
                        var e = d3.round(2 * t / Math.sqrt(3), 2), r = d3.round(t / 2, 2), n = d3.round(t, 2);
                        return "M-" + e + ",-" + r + "H" + e + "L0," + n + "Z";
                    }
                },
                "triangle-left": {
                    n: 7,
                    f: function(t) {
                        var e = d3.round(2 * t / Math.sqrt(3), 2), r = d3.round(t / 2, 2), n = d3.round(t, 2);
                        return "M" + r + ",-" + e + "V" + e + "L-" + n + ",0Z";
                    }
                },
                "triangle-right": {
                    n: 8,
                    f: function(t) {
                        var e = d3.round(2 * t / Math.sqrt(3), 2), r = d3.round(t / 2, 2), n = d3.round(t, 2);
                        return "M-" + r + ",-" + e + "V" + e + "L" + n + ",0Z";
                    }
                },
                "triangle-ne": {
                    n: 9,
                    f: function(t) {
                        var e = d3.round(.6 * t, 2), r = d3.round(1.2 * t, 2);
                        return "M-" + r + ",-" + e + "H" + e + "V" + r + "Z";
                    }
                },
                "triangle-se": {
                    n: 10,
                    f: function(t) {
                        var e = d3.round(.6 * t, 2), r = d3.round(1.2 * t, 2);
                        return "M" + e + ",-" + r + "V" + e + "H-" + r + "Z";
                    }
                },
                "triangle-sw": {
                    n: 11,
                    f: function(t) {
                        var e = d3.round(.6 * t, 2), r = d3.round(1.2 * t, 2);
                        return "M" + r + "," + e + "H-" + e + "V-" + r + "Z";
                    }
                },
                "triangle-nw": {
                    n: 12,
                    f: function(t) {
                        var e = d3.round(.6 * t, 2), r = d3.round(1.2 * t, 2);
                        return "M-" + e + "," + r + "V-" + e + "H" + r + "Z";
                    }
                },
                pentagon: {
                    n: 13,
                    f: function(t) {
                        var e = d3.round(.951 * t, 2), r = d3.round(.588 * t, 2), n = d3.round(-t, 2), a = d3.round(t * -.309, 2), o = d3.round(.809 * t, 2);
                        return "M" + e + "," + a + "L" + r + "," + o + "H-" + r + "L-" + e + "," + a + "L0," + n + "Z";
                    }
                },
                hexagon: {
                    n: 14,
                    f: function(t) {
                        var e = d3.round(t, 2), r = d3.round(t / 2, 2), n = d3.round(t * Math.sqrt(3) / 2, 2);
                        return "M" + n + ",-" + r + "V" + r + "L0," + e + "L-" + n + "," + r + "V-" + r + "L0,-" + e + "Z";
                    }
                },
                hexagon2: {
                    n: 15,
                    f: function(t) {
                        var e = d3.round(t, 2), r = d3.round(t / 2, 2), n = d3.round(t * Math.sqrt(3) / 2, 2);
                        return "M-" + r + "," + n + "H" + r + "L" + e + ",0L" + r + ",-" + n + "H-" + r + "L-" + e + ",0Z";
                    }
                },
                octagon: {
                    n: 16,
                    f: function(t) {
                        var e = d3.round(.924 * t, 2), r = d3.round(.383 * t, 2);
                        return "M-" + r + ",-" + e + "H" + r + "L" + e + ",-" + r + "V" + r + "L" + r + "," + e + "H-" + r + "L-" + e + "," + r + "V-" + r + "Z";
                    }
                },
                star: {
                    n: 17,
                    f: function(t) {
                        var e = 1.4 * t, r = d3.round(.225 * e, 2), n = d3.round(.951 * e, 2), a = d3.round(.363 * e, 2), o = d3.round(.588 * e, 2), i = d3.round(-e, 2), l = d3.round(e * -.309, 2), s = d3.round(.118 * e, 2), c = d3.round(.809 * e, 2), d = d3.round(.382 * e, 2);
                        return "M" + r + "," + l + "H" + n + "L" + a + "," + s + "L" + o + "," + c + "L0," + d + "L-" + o + "," + c + "L-" + a + "," + s + "L-" + n + "," + l + "H-" + r + "L0," + i + "Z";
                    }
                },
                hexagram: {
                    n: 18,
                    f: function(t) {
                        var e = d3.round(.66 * t, 2), r = d3.round(.38 * t, 2), n = d3.round(.76 * t, 2);
                        return "M-" + n + ",0l-" + r + ",-" + e + "h" + n + "l" + r + ",-" + e + "l" + r + "," + e + "h" + n + "l-" + r + "," + e + "l" + r + "," + e + "h-" + n + "l-" + r + "," + e + "l-" + r + ",-" + e + "h-" + n + "Z";
                    }
                },
                "star-triangle-up": {
                    n: 19,
                    f: function(t) {
                        var e = d3.round(t * Math.sqrt(3) * .8, 2), r = d3.round(.8 * t, 2), n = d3.round(1.6 * t, 2), a = d3.round(4 * t, 2), o = "A " + a + "," + a + " 0 0 1 ";
                        return "M-" + e + "," + r + o + e + "," + r + o + "0,-" + n + o + "-" + e + "," + r + "Z";
                    }
                },
                "star-triangle-down": {
                    n: 20,
                    f: function(t) {
                        var e = d3.round(t * Math.sqrt(3) * .8, 2), r = d3.round(.8 * t, 2), n = d3.round(1.6 * t, 2), a = d3.round(4 * t, 2), o = "A " + a + "," + a + " 0 0 1 ";
                        return "M" + e + ",-" + r + o + "-" + e + ",-" + r + o + "0," + n + o + e + ",-" + r + "Z";
                    }
                },
                "star-square": {
                    n: 21,
                    f: function(t) {
                        var e = d3.round(1.1 * t, 2), r = d3.round(2 * t, 2), n = "A " + r + "," + r + " 0 0 1 ";
                        return "M-" + e + ",-" + e + n + "-" + e + "," + e + n + e + "," + e + n + e + ",-" + e + n + "-" + e + ",-" + e + "Z";
                    }
                },
                "star-diamond": {
                    n: 22,
                    f: function(t) {
                        var e = d3.round(1.4 * t, 2), r = d3.round(1.9 * t, 2), n = "A " + r + "," + r + " 0 0 1 ";
                        return "M-" + e + ",0" + n + "0," + e + n + e + ",0" + n + "0,-" + e + n + "-" + e + ",0Z";
                    }
                },
                "diamond-tall": {
                    n: 23,
                    f: function(t) {
                        var e = d3.round(.7 * t, 2), r = d3.round(1.4 * t, 2);
                        return "M0," + r + "L" + e + ",0L0,-" + r + "L-" + e + ",0Z";
                    }
                },
                "diamond-wide": {
                    n: 24,
                    f: function(t) {
                        var e = d3.round(1.4 * t, 2), r = d3.round(.7 * t, 2);
                        return "M0," + r + "L" + e + ",0L0,-" + r + "L-" + e + ",0Z";
                    }
                },
                hourglass: {
                    n: 25,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + "," + e + "H-" + e + "L" + e + ",-" + e + "H-" + e + "Z";
                    },
                    noDot: !0
                },
                bowtie: {
                    n: 26,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + "," + e + "V-" + e + "L-" + e + "," + e + "V-" + e + "Z";
                    },
                    noDot: !0
                },
                "circle-cross": {
                    n: 27,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M0," + e + "V-" + e + "M" + e + ",0H-" + e + "M" + e + ",0A" + e + "," + e + " 0 1,1 0,-" + e + "A" + e + "," + e + " 0 0,1 " + e + ",0Z";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "circle-x": {
                    n: 28,
                    f: function(t) {
                        var e = d3.round(t, 2), r = d3.round(t / Math.sqrt(2), 2);
                        return "M" + r + "," + r + "L-" + r + ",-" + r + "M" + r + ",-" + r + "L-" + r + "," + r + "M" + e + ",0A" + e + "," + e + " 0 1,1 0,-" + e + "A" + e + "," + e + " 0 0,1 " + e + ",0Z";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "square-cross": {
                    n: 29,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M0," + e + "V-" + e + "M" + e + ",0H-" + e + "M" + e + "," + e + "H-" + e + "V-" + e + "H" + e + "Z";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "square-x": {
                    n: 30,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + "," + e + "L-" + e + ",-" + e + "M" + e + ",-" + e + "L-" + e + "," + e + "M" + e + "," + e + "H-" + e + "V-" + e + "H" + e + "Z";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "diamond-cross": {
                    n: 31,
                    f: function(t) {
                        var e = d3.round(1.3 * t, 2);
                        return "M" + e + ",0L0," + e + "L-" + e + ",0L0,-" + e + "ZM0,-" + e + "V" + e + "M-" + e + ",0H" + e;
                    },
                    needLine: !0,
                    noDot: !0
                },
                "diamond-x": {
                    n: 32,
                    f: function(t) {
                        var e = d3.round(1.3 * t, 2), r = d3.round(.65 * t, 2);
                        return "M" + e + ",0L0," + e + "L-" + e + ",0L0,-" + e + "ZM-" + r + ",-" + r + "L" + r + "," + r + "M-" + r + "," + r + "L" + r + ",-" + r;
                    },
                    needLine: !0,
                    noDot: !0
                },
                "cross-thin": {
                    n: 33,
                    f: function(t) {
                        var e = d3.round(1.4 * t, 2);
                        return "M0," + e + "V-" + e + "M" + e + ",0H-" + e;
                    },
                    needLine: !0,
                    noDot: !0
                },
                "x-thin": {
                    n: 34,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + "," + e + "L-" + e + ",-" + e + "M" + e + ",-" + e + "L-" + e + "," + e;
                    },
                    needLine: !0,
                    noDot: !0
                },
                asterisk: {
                    n: 35,
                    f: function(t) {
                        var e = d3.round(1.2 * t, 2), r = d3.round(.85 * t, 2);
                        return "M0," + e + "V-" + e + "M" + e + ",0H-" + e + "M" + r + "," + r + "L-" + r + ",-" + r + "M" + r + ",-" + r + "L-" + r + "," + r;
                    },
                    needLine: !0,
                    noDot: !0
                },
                hash: {
                    n: 36,
                    f: function(t) {
                        var e = d3.round(t / 2, 2), r = d3.round(t, 2);
                        return "M" + e + "," + r + "V-" + r + "m-" + r + ",0V" + r + "M" + r + "," + e + "H-" + r + "m0,-" + r + "H" + r;
                    },
                    needLine: !0
                },
                "y-up": {
                    n: 37,
                    f: function(t) {
                        var e = d3.round(1.2 * t, 2), r = d3.round(1.6 * t, 2), n = d3.round(.8 * t, 2);
                        return "M-" + e + "," + n + "L0,0M" + e + "," + n + "L0,0M0,-" + r + "L0,0";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "y-down": {
                    n: 38,
                    f: function(t) {
                        var e = d3.round(1.2 * t, 2), r = d3.round(1.6 * t, 2), n = d3.round(.8 * t, 2);
                        return "M-" + e + ",-" + n + "L0,0M" + e + ",-" + n + "L0,0M0," + r + "L0,0";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "y-left": {
                    n: 39,
                    f: function(t) {
                        var e = d3.round(1.2 * t, 2), r = d3.round(1.6 * t, 2), n = d3.round(.8 * t, 2);
                        return "M" + n + "," + e + "L0,0M" + n + ",-" + e + "L0,0M-" + r + ",0L0,0";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "y-right": {
                    n: 40,
                    f: function(t) {
                        var e = d3.round(1.2 * t, 2), r = d3.round(1.6 * t, 2), n = d3.round(.8 * t, 2);
                        return "M-" + n + "," + e + "L0,0M-" + n + ",-" + e + "L0,0M" + r + ",0L0,0";
                    },
                    needLine: !0,
                    noDot: !0
                },
                "line-ew": {
                    n: 41,
                    f: function(t) {
                        var e = d3.round(1.4 * t, 2);
                        return "M" + e + ",0H-" + e;
                    },
                    needLine: !0,
                    noDot: !0
                },
                "line-ns": {
                    n: 42,
                    f: function(t) {
                        var e = d3.round(1.4 * t, 2);
                        return "M0," + e + "V-" + e;
                    },
                    needLine: !0,
                    noDot: !0
                },
                "line-ne": {
                    n: 43,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + ",-" + e + "L-" + e + "," + e;
                    },
                    needLine: !0,
                    noDot: !0
                },
                "line-nw": {
                    n: 44,
                    f: function(t) {
                        var e = d3.round(t, 2);
                        return "M" + e + "," + e + "L-" + e + ",-" + e;
                    },
                    needLine: !0,
                    noDot: !0
                }
            };
            n.symbolNames = [], n.symbolFuncs = [], n.symbolNeedLines = {}, n.symbolNoDot = {}, 
            n.symbolList = [], Object.keys(i).forEach(function(t) {
                var e = i[t];
                n.symbolList = n.symbolList.concat([ e.n, t, e.n + 100, t + "-open" ]), n.symbolNames[e.n] = t, 
                n.symbolFuncs[e.n] = e.f, e.needLine && (n.symbolNeedLines[e.n] = !0), e.noDot ? n.symbolNoDot[e.n] = !0 : n.symbolList = n.symbolList.concat([ e.n + 200, t + "-dot", e.n + 300, t + "-open-dot" ]);
            });
            var l = n.symbolNames.length, s = "M0,0.5L0.5,0L0,-0.5L-0.5,0Z";
            n.symbolNumber = function(t) {
                if ("string" == typeof t) {
                    var e = 0;
                    t.indexOf("-open") > 0 && (e = 100, t = t.replace("-open", "")), t.indexOf("-dot") > 0 && (e += 200, 
                    t = t.replace("-dot", "")), t = n.symbolNames.indexOf(t), t >= 0 && (t += e);
                }
                return t % 100 >= l || t >= 400 ? 0 : Math.floor(Math.max(t, 0));
            }, n.pointStyle = function(t, e) {
                if (t.size()) {
                    var r = e.marker, o = r.line;
                    if (a.Plots.traceIs(e, "symbols")) {
                        var i = a.Scatter.getBubbleSizeFn(e);
                        t.attr("d", function(t) {
                            var o;
                            o = "various" === t.ms || "various" === r.size ? 3 : a.Scatter.isBubble(e) ? i(t.ms) : (r.size || 6) / 2, 
                            t.mrc = o;
                            var l = n.symbolNumber(t.mx || r.symbol) || 0, c = l % 100;
                            return t.om = l % 200 >= 100, n.symbolFuncs[c](o) + (l >= 200 ? s : "");
                        }).style("opacity", function(t) {
                            return (t.mo + 1 || r.opacity + 1) - 1;
                        });
                    }
                    var l = (e._input || {}).marker || {}, c = n.tryColorscale(r, l, ""), d = n.tryColorscale(r, l, "line.");
                    t.each(function(t) {
                        var e, n, i;
                        t.so ? (i = o.outlierwidth, n = o.outliercolor, e = r.outliercolor) : (i = (t.mlw + 1 || o.width + 1 || (t.trace ? t.trace.marker.line.width : 0) + 1) - 1, 
                        n = "mlc" in t ? t.mlcc = d(t.mlc) : Array.isArray(o.color) ? a.Color.defaultLine : o.color, 
                        e = "mc" in t ? t.mcc = c(t.mc) : Array.isArray(r.color) ? a.Color.defaultLine : r.color || "rgba(0,0,0,0)");
                        var l = d3.select(this);
                        t.om ? l.call(a.Color.stroke, e).style({
                            "stroke-width": (i || 1) + "px",
                            fill: "none"
                        }) : (l.style("stroke-width", i + "px").call(a.Color.fill, e), i && l.call(a.Color.stroke, n));
                    });
                }
            }, n.tryColorscale = function(t, e, r) {
                var n = a.Lib.nestedProperty(t, r + "color").get(), i = a.Lib.nestedProperty(t, r + "colorscale").get(), l = a.Lib.nestedProperty(t, r + "cauto").get(), s = a.Lib.nestedProperty(t, r + "cmin"), c = a.Lib.nestedProperty(t, r + "cmax"), d = s.get(), u = c.get();
                return i && Array.isArray(n) ? (!l && o(d) && o(u) || (d = 1 / 0, u = -1 / 0, n.forEach(function(t) {
                    o(t) && (d > t && (d = +t), t > u && (u = +t));
                }), d > u && (d = 0, u = 1), s.set(d), c.set(u), a.Lib.nestedProperty(e, r + "cmin").set(d), 
                a.Lib.nestedProperty(e, r + "cmax").set(u)), a.Colorscale.makeScaleFunction(i, d, u)) : a.Lib.identity;
            };
            var c = {
                start: 1,
                end: -1,
                middle: 0,
                bottom: 1,
                top: -1
            }, d = 1.3;
            n.textPointStyle = function(t, e) {
                t.each(function(t) {
                    var r = d3.select(this);
                    if (!t.tx) return void r.remove();
                    var i = t.tp || e.textposition, l = -1 !== i.indexOf("top") ? "top" : -1 !== i.indexOf("bottom") ? "bottom" : "middle", s = -1 !== i.indexOf("left") ? "end" : -1 !== i.indexOf("right") ? "start" : "middle", u = t.ts || e.textfont.size, f = t.mrc ? t.mrc / .8 + 1 : 0;
                    u = o(u) && u > 0 ? u : 0, r.call(n.font, t.tf || e.textfont.family, u, t.tc || e.textfont.color).attr("text-anchor", s).text(t.tx).call(a.util.convertToTspans);
                    var h = d3.select(this.parentNode), p = r.selectAll("tspan.line"), g = ((p[0].length || 1) - 1) * d + 1, m = c[s] * f, y = .75 * u + c[l] * f + (c[l] - 1) * g * u / 2;
                    h.attr("transform", "translate(" + m + "," + y + ")"), g > 1 && p.attr({
                        x: r.attr("x"),
                        y: r.attr("y")
                    });
                });
            };
            var u = .5;
            n.smoothopen = function(t, e) {
                if (t.length < 3) return "M" + t.join("L");
                var n, a = "M" + t[0], o = [];
                for (n = 1; n < t.length - 1; n++) o.push(r(t[n - 1], t[n], t[n + 1], e));
                for (a += "Q" + o[0][0] + " " + t[1], n = 2; n < t.length - 1; n++) a += "C" + o[n - 2][1] + " " + o[n - 1][0] + " " + t[n];
                return a += "Q" + o[t.length - 3][1] + " " + t[t.length - 1];
            }, n.smoothclosed = function(t, e) {
                if (t.length < 3) return "M" + t.join("L") + "Z";
                var n, a = "M" + t[0], o = t.length - 1, i = [ r(t[o], t[0], t[1], e) ];
                for (n = 1; o > n; n++) i.push(r(t[n - 1], t[n], t[n + 1], e));
                for (i.push(r(t[o - 1], t[o], t[0], e)), n = 1; o >= n; n++) a += "C" + i[n - 1][1] + " " + i[n][0] + " " + t[n];
                return a += "C" + i[o][1] + " " + i[0][0] + " " + t[0] + "Z";
            };
            var f = {
                hv: function(t, e) {
                    return "H" + d3.round(e[0], 2) + "V" + d3.round(e[1], 2);
                },
                vh: function(t, e) {
                    return "V" + d3.round(e[1], 2) + "H" + d3.round(e[0], 2);
                },
                hvh: function(t, e) {
                    return "H" + d3.round((t[0] + e[0]) / 2, 2) + "V" + d3.round(e[1], 2) + "H" + d3.round(e[0], 2);
                },
                vhv: function(t, e) {
                    return "V" + d3.round((t[1] + e[1]) / 2, 2) + "H" + d3.round(e[0], 2) + "V" + d3.round(e[1], 2);
                }
            }, h = function(t, e) {
                return "L" + d3.round(e[0], 2) + "," + d3.round(e[1], 2);
            };
            n.steps = function(t) {
                var e = f[t] || h;
                return function(t) {
                    for (var r = "M" + d3.round(t[0][0], 2) + "," + d3.round(t[0][1], 2), n = 1; n < t.length; n++) r += e(t[n - 1], t[n]);
                    return r;
                };
            }, n.makeTester = function(t) {
                var e = d3.select("body").selectAll("#js-plotly-tester").data([ 0 ]);
                e.enter().append("svg").attr({
                    id: "js-plotly-tester",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xmlns:xlink": "http://www.w3.org/1999/xlink"
                }).style({
                    position: "absolute",
                    left: "-10000px",
                    top: "-10000px",
                    width: "9000px",
                    height: "9000px"
                });
                var r = e.selectAll(".js-reference-point").data([ 0 ]);
                r.enter().append("path").classed("js-reference-point", !0).attr("d", "M0,0H1V1H0Z").style({
                    "stroke-width": 0,
                    fill: "black"
                }), e.node()._cache || (e.node()._cache = {}), t._tester = e, t._testref = r;
            };
            var p = [], g = 1e4;
            n.bBox = function(t) {
                var e = t.attributes["data-bb"];
                if (e && e.value) return $.extend({}, p[e.value]);
                var r = d3.select("#js-plotly-tester"), n = r.node(), o = t.cloneNode(!0);
                n.appendChild(o), d3.select(o).attr({
                    x: 0,
                    y: 0,
                    transform: ""
                });
                var i = o.getBoundingClientRect(), l = r.select(".js-reference-point").node().getBoundingClientRect();
                n.removeChild(o);
                var s = {
                    height: i.height,
                    width: i.width,
                    left: i.left - l.left,
                    top: i.top - l.top,
                    right: i.right - l.left,
                    bottom: i.bottom - l.top
                };
                return p.length >= g && (d3.selectAll("[data-bb]").attr("data-bb", null), p = []), 
                t.setAttribute("data-bb", p.length), p.push(s), a.Lib.extendFlat(s);
            }, n.setClipUrl = function(t, e) {
                if (!e) return void t.attr("clip-path", null);
                var r = "#" + e, n = d3.select("base");
                n.size() && n.attr("href") && (r = window.location.href + r), t.attr("clip-path", "url(" + r + ")");
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27
        } ],
        16: [ function(t, e) {
            "use strict";
            function r(t, e) {
                for (var r = [], n = t.length; n > 0; n--) r.push(e);
                return r;
            }
            function n(t, e) {
                for (var r = [], n = 0; n < t.length; n++) r.push(t[n].p2c(e));
                return r;
            }
            function a(t, e) {
                return function(r) {
                    var n = t(r), a = e(r);
                    return Math.sqrt(n * n + a * a);
                };
            }
            function o(t, e, a) {
                a || (a = "xy");
                var o = t._fullLayout, f = o._plots[a], h = [ a ].concat(f.overlays.map(function(t) {
                    return t.id;
                })), p = h.map(function(e) {
                    return b.Axes.getFromId(t, e, "x");
                }), g = h.map(function(e) {
                    return b.Axes.getFromId(t, e, "y");
                }), m = e.hovermode || o.hovermode;
                if (-1 === [ "x", "y", "closest" ].indexOf(m) || !t.calcdata || t.querySelector(".zoombox") || t._dragging) return u(t, e);
                var y, v, x, _, A, M, L, z, C, D, O, S, P = [], T = [];
                if (Array.isArray(e)) for (m = "array", x = 0; x < e.length; x++) A = t.calcdata[e[x].curveNumber || 0], 
                "none" !== A[0].trace.hoverinfo && T.push(A); else {
                    for (_ = 0; _ < t.calcdata.length; _++) A = t.calcdata[_], M = A[0].trace, "none" !== M.hoverinfo && -1 !== h.indexOf(M.xaxis + M.yaxis) && T.push(A);
                    var E, I;
                    if (e.target && "clientX" in e && "clientY" in e) {
                        if ($(t).triggerHandler("plotly_beforehover", e) === !1) return;
                        var j = e.target.getBoundingClientRect();
                        if (E = e.clientX - j.left, I = e.clientY - j.top, 0 > E || E > j.width || 0 > I || I > j.height) return u(t, e);
                    } else E = "xpx" in e ? e.xpx : p[0]._length / 2, I = "ypx" in e ? e.ypx : g[0]._length / 2;
                    if (y = "xval" in e ? r(h, e.xval) : n(p, E), v = "yval" in e ? r(h, e.yval) : n(g, I), 
                    !w(y[0]) || !w(v[0])) return console.log("Plotly.Fx.hover failed", e, t), u(t, e);
                }
                var N = 1 / 0;
                for (_ = 0; _ < T.length; _++) if (A = T[_], A && A[0] && A[0].trace && A[0].trace.visible === !0) {
                    if (M = A[0].trace, L = h.indexOf(M.xaxis + M.yaxis), z = m, O = {
                        cd: A,
                        trace: M,
                        xa: p[L],
                        ya: g[L],
                        name: t.data.length > 1 || -1 !== M.hoverinfo.indexOf("name") ? M.name : void 0,
                        index: !1,
                        distance: Math.min(N, k.MAXDIST),
                        color: b.Color.defaultLine,
                        x0: void 0,
                        x1: void 0,
                        y0: void 0,
                        y1: void 0,
                        xLabelVal: void 0,
                        yLabelVal: void 0,
                        zLabelVal: void 0,
                        text: void 0
                    }, S = P.length, "array" === z) {
                        var B = e[_];
                        "pointNumber" in B ? (O.index = B.pointNumber, z = "closest") : (z = "", "xval" in B && (C = B.xval, 
                        z = "x"), "yval" in B && (D = B.yval, z = z ? "closest" : "y"));
                    } else C = y[L], D = v[L];
                    if (M._module && M._module.hoverPoints) {
                        var F = M._module.hoverPoints(O, C, D, z);
                        if (F) for (var R, H = 0; H < F.length; H++) R = F[H], w(R.x0) && w(R.y0) && P.push(i(R, m));
                    } else console.log("unrecognized trace type in hover", M);
                    "closest" === m && P.length > S && (P.splice(0, S), N = P[0].distance);
                }
                if (0 === P.length) return u(t, e);
                var V = "y" === m && T.length > 1;
                P.sort(function(t, e) {
                    return t.distance - e.distance;
                });
                var q = {
                    hovermode: m,
                    rotateLabels: V,
                    bgColor: b.Color.combine(o.plot_bgcolor, o.paper_bgcolor),
                    container: o._hoverlayer,
                    outerContainer: o._paperdiv
                }, Z = l(P, q);
                s(P, V ? p[0] : g[0]), c(Z, V);
                var X = t._hoverdata, G = [];
                for (x = 0; x < P.length; x++) {
                    var Y = P[x], U = {
                        data: Y.trace._input,
                        fullData: Y.trace,
                        curveNumber: Y.trace.index,
                        pointNumber: Y.index,
                        x: Y.xVal,
                        y: Y.yVal,
                        xaxis: Y.xa,
                        yaxis: Y.ya
                    };
                    void 0 !== Y.zLabelVal && (U.z = Y.zLabelVal), G.push(U);
                }
                t._hoverdata = G, d(t, e, X) && (X && $(t).trigger("plotly_unhover", {
                    points: X
                }), $(t).trigger("plotly_hover", {
                    points: t._hoverdata,
                    xaxes: p,
                    yaxes: g,
                    xvals: y,
                    yvals: v
                }));
            }
            function i(t, e) {
                t.posref = "y" === e ? (t.x0 + t.x1) / 2 : (t.y0 + t.y1) / 2, t.x0 = b.Lib.constrain(t.x0, 0, t.xa._length), 
                t.x1 = b.Lib.constrain(t.x1, 0, t.xa._length), t.y0 = b.Lib.constrain(t.y0, 0, t.ya._length), 
                t.y1 = b.Lib.constrain(t.y1, 0, t.ya._length);
                var r;
                if (void 0 !== t.xLabelVal) {
                    r = "log" === t.xa.type && t.xLabelVal <= 0;
                    var n = b.Axes.tickText(t.xa, t.xa.c2l(r ? -t.xLabelVal : t.xLabelVal), "hover");
                    t.xLabel = r ? 0 === t.xLabelVal ? "0" : "-" + n.text : n.text, t.xVal = t.xa.c2d(t.xLabelVal);
                }
                if (void 0 !== t.yLabelVal) {
                    r = "log" === t.ya.type && t.yLabelVal <= 0;
                    var a = b.Axes.tickText(t.ya, t.ya.c2l(r ? -t.yLabelVal : t.yLabelVal), "hover");
                    t.yLabel = r ? 0 === t.yLabelVal ? "0" : "-" + a.text : a.text, t.yVal = t.ya.c2d(t.yLabelVal);
                }
                if (void 0 !== t.zLabelVal && (t.zLabel = String(t.zLabelVal)), void 0 !== t.xerr) {
                    var o = b.Axes.tickText(t.xa, t.xa.c2l(t.xerr), "hover").text;
                    t.xLabel += void 0 !== t.xerrneg ? " +" + o + " / -" + b.Axes.tickText(t.xa, t.xa.c2l(t.xerrneg), "hover").text : " &plusmn; " + o, 
                    "x" === e && (t.distance += 1);
                }
                if (void 0 !== t.yerr) {
                    var i = b.Axes.tickText(t.ya, t.ya.c2l(t.yerr), "hover").text;
                    t.yLabel += void 0 !== t.yerrneg ? " +" + i + " / -" + b.Axes.tickText(t.ya, t.ya.c2l(t.yerrneg), "hover").text : " &plusmn; " + i, 
                    "y" === e && (t.distance += 1);
                }
                var l = t.trace.hoverinfo;
                return "all" !== l && (l = l.split("+"), -1 === l.indexOf("x") && (t.xLabel = void 0), 
                -1 === l.indexOf("y") && (t.yLabel = void 0), -1 === l.indexOf("z") && (t.zLabel = void 0), 
                -1 === l.indexOf("text") && (t.text = void 0), -1 === l.indexOf("name") && (t.name = void 0)), 
                t;
            }
            function l(t, e) {
                var r, n, a = e.hovermode, o = e.rotateLabels, i = e.bgColor, l = e.container, s = e.outerContainer, c = t[0], d = c.xa, u = c.ya, f = "y" === a ? "yLabel" : "xLabel", h = c[f], p = (h || "").split(" ")[0], g = s.node().getBoundingClientRect(), m = g.top, y = g.width, v = g.height, x = c.distance <= k.MAXDIST && ("x" === a || "y" === a);
                for (r = 0; r < t.length; r++) if (n = t[r].trace.hoverinfo, -1 === n.indexOf("all") && -1 === n.indexOf(a)) {
                    x = !1;
                    break;
                }
                var w = l.selectAll("g.axistext").data(x ? [ 0 ] : []);
                w.enter().append("g").classed("axistext", !0), w.exit().remove(), w.each(function() {
                    var e = d3.select(this), r = e.selectAll("path").data([ 0 ]), n = e.selectAll("text").data([ 0 ]);
                    r.enter().append("path").style({
                        fill: b.Color.defaultLine,
                        "stroke-width": "1px",
                        stroke: b.Color.background
                    }), n.enter().append("text").call(b.Drawing.font, T, P, b.Color.background).attr("data-notex", 1), 
                    n.text(h).call(b.util.convertToTspans).call(b.Drawing.setPosition, 0, 0).selectAll("tspan.line").call(b.Drawing.setPosition, 0, 0), 
                    e.attr("transform", "");
                    var o = n.node().getBoundingClientRect();
                    if ("x" === a) {
                        n.attr("text-anchor", "middle").call(b.Drawing.setPosition, 0, "top" === d.side ? m - o.bottom - O - S : m - o.top + O + S).selectAll("tspan.line").attr({
                            x: n.attr("x"),
                            y: n.attr("y")
                        });
                        var i = "top" === d.side ? "-" : "";
                        r.attr("d", "M0,0L" + O + "," + i + O + "H" + (S + o.width / 2) + "v" + i + (2 * S + o.height) + "H-" + (S + o.width / 2) + "V" + i + O + "H-" + O + "Z"), 
                        e.attr("transform", "translate(" + (d._offset + (c.x0 + c.x1) / 2) + "," + (u._offset + ("top" === d.side ? 0 : u._length)) + ")");
                    } else {
                        n.attr("text-anchor", "right" === u.side ? "start" : "end").call(b.Drawing.setPosition, ("right" === u.side ? 1 : -1) * (S + O), m - o.top - o.height / 2).selectAll("tspan.line").attr({
                            x: n.attr("x"),
                            y: n.attr("y")
                        });
                        var l = "right" === u.side ? "" : "-";
                        r.attr("d", "M0,0L" + l + O + "," + O + "V" + (S + o.height / 2) + "h" + l + (2 * S + o.width) + "V-" + (S + o.height / 2) + "H" + l + O + "V-" + O + "Z"), 
                        e.attr("transform", "translate(" + (d._offset + ("right" === u.side ? d._length : 0)) + "," + (u._offset + (c.y0 + c.y1) / 2) + ")");
                    }
                    t = t.filter(function(t) {
                        return void 0 !== t.zLabelVal || (t[f] || "").split(" ")[0] === p;
                    });
                });
                var A = l.selectAll("g.hovertext").data(t, function(t) {
                    return [ t.trace.index, t.index, t.x0, t.y0, t.name, t.attr || "" ].join(",");
                });
                return A.enter().append("g").classed("hovertext", !0).each(function() {
                    var t = d3.select(this);
                    t.append("rect").call(b.Color.fill, b.Color.addOpacity(i, .8)), t.append("text").classed("name", !0).call(b.Drawing.font, T, P), 
                    t.append("path").style("stroke-width", "1px"), t.append("text").classed("nums", !0).call(b.Drawing.font, T, P);
                }), A.exit().remove(), A.each(function(t) {
                    var e = d3.select(this).attr("transform", ""), r = "", n = "", l = b.Color.opacity(t.color) ? t.color : b.Color.defaultLine, s = b.Color.combine(l, i), c = _(s).getBrightness() > 128 ? "#000" : b.Color.background;
                    if (t.name && void 0 === t.zLabelVal) {
                        var f = document.createElement("p");
                        f.innerHTML = t.name, r = f.textContent || "", r.length > 15 && (r = r.substr(0, 12) + "...");
                    }
                    void 0 !== t.zLabel ? (void 0 !== t.xLabel && (n += "x: " + t.xLabel + "<br>"), 
                    void 0 !== t.yLabel && (n += "y: " + t.yLabel + "<br>"), n += (n ? "z: " : "") + t.zLabel) : x && t[a + "Label"] === h ? n = t[("x" === a ? "y" : "x") + "Label"] || "" : void 0 === t.xLabel ? void 0 !== t.yLabel && (n = t.yLabel) : n = void 0 === t.yLabel ? t.xLabel : "(" + t.xLabel + ", " + t.yLabel + ")", 
                    t.text && (n += (n ? "<br>" : "") + t.text), "" === n && ("" === r && e.remove(), 
                    n = r);
                    var p = e.select("text.nums").style("fill", c).call(b.Drawing.setPosition, 0, 0).text(n).attr("data-notex", 1).call(b.util.convertToTspans);
                    p.selectAll("tspan.line").call(b.Drawing.setPosition, 0, 0);
                    var g = e.select("text.name"), w = 0;
                    r && r !== n ? (g.style("fill", s).text(r).call(b.Drawing.setPosition, 0, 0).attr("data-notex", 1).call(b.util.convertToTspans), 
                    g.selectAll("tspan.line").call(b.Drawing.setPosition, 0, 0), w = g.node().getBoundingClientRect().width + 2 * S) : (g.remove(), 
                    e.select("rect").remove()), e.select("path").style({
                        fill: s,
                        stroke: c
                    });
                    var k, A, L = p.node().getBoundingClientRect(), z = d._offset + (t.x0 + t.x1) / 2, C = u._offset + (t.y0 + t.y1) / 2, D = Math.abs(t.x1 - t.x0), P = Math.abs(t.y1 - t.y0), T = L.width + O + S + w;
                    t.ty0 = m - L.top, t.bx = L.width + 2 * S, t.by = L.height + 2 * S, t.anchor = "start", 
                    t.txwidth = L.width, t.tx2width = w, t.offset = 0, o ? (t.pos = z, k = v >= C + P / 2 + T, 
                    A = C - P / 2 - T >= 0, "top" !== t.idealAlign && k || !A ? k ? (C += P / 2, t.anchor = "start") : t.anchor = "middle" : (C -= P / 2, 
                    t.anchor = "end")) : (t.pos = C, k = y >= z + D / 2 + T, A = z - D / 2 - T >= 0, 
                    "left" !== t.idealAlign && k || !A ? k ? (z += D / 2, t.anchor = "start") : t.anchor = "middle" : (z -= D / 2, 
                    t.anchor = "end")), p.attr("text-anchor", t.anchor), w && g.attr("text-anchor", t.anchor), 
                    e.attr("transform", "translate(" + z + "," + C + ")" + (o ? "rotate(" + M + ")" : ""));
                }), A;
            }
            function s(t, e) {
                function r(t) {
                    var e = t[0], r = t[t.length - 1];
                    if (a = u - e.pos - e.dp + e.size, o = r.pos + r.dp + r.size - f, a > .01) {
                        for (l = t.length - 1; l >= 0; l--) t[l].dp += a;
                        n = !1;
                    }
                    if (!(.01 > o)) {
                        if (-.01 > a) {
                            for (l = t.length - 1; l >= 0; l--) t[l].dp -= o;
                            n = !1;
                        }
                        if (n) {
                            var c = 0;
                            for (i = 0; i < t.length; i++) s = t[i], s.pos + s.dp + s.size > f && c++;
                            for (i = t.length - 1; i >= 0 && !(0 >= c); i--) s = t[i], s.pos > f - 1 && (s.del = !0, 
                            c--);
                            for (i = 0; i < t.length && !(0 >= c); i++) if (s = t[i], s.pos < u + 1) for (s.del = !0, 
                            c--, o = 2 * s.size, l = t.length - 1; l >= 0; l--) t[l].dp -= o;
                            for (i = t.length - 1; i >= 0 && !(0 >= c); i--) s = t[i], s.pos + s.dp + s.size > f && (s.del = !0, 
                            c--);
                        }
                    }
                }
                for (var n, a, o, i, l, s, c, d = 0, u = e._offset, f = e._offset + e._length, h = t.map(function(t, r) {
                    return [ {
                        i: r,
                        dp: 0,
                        pos: t.pos,
                        posref: t.posref,
                        size: t.by * ("x" === e._id.charAt(0) ? z : 1) / 2
                    } ];
                }).sort(function(t, e) {
                    return t[0].posref - e[0].posref;
                }); !n && d <= t.length; ) {
                    for (d++, n = !0, i = 0; i < h.length - 1; ) {
                        var p = h[i], g = h[i + 1], m = p[p.length - 1], y = g[0];
                        if (a = m.pos + m.dp + m.size - y.pos - y.dp + y.size, a > .01) {
                            for (l = g.length - 1; l >= 0; l--) g[l].dp += a;
                            for (p.push.apply(p, g), h.splice(i + 1, 1), c = 0, l = p.length - 1; l >= 0; l--) c += p[l].dp;
                            for (o = c / p.length, l = p.length - 1; l >= 0; l--) p[l].dp -= o;
                            n = !1;
                        } else i++;
                    }
                    h.forEach(r);
                }
                for (i = h.length - 1; i >= 0; i--) {
                    var v = h[i];
                    for (l = v.length - 1; l >= 0; l--) {
                        var x = v[l], b = t[x.i];
                        b.offset = x.dp, b.del = x.del;
                    }
                }
            }
            function c(t, e) {
                t.each(function(t) {
                    var r = d3.select(this);
                    if (t.del) return void r.remove();
                    var n = "end" === t.anchor ? -1 : 1, a = r.select("text.nums"), o = {
                        start: 1,
                        end: -1,
                        middle: 0
                    }[t.anchor], i = o * (O + S), l = i + o * (t.txwidth + S), s = 0, c = t.offset;
                    "middle" === t.anchor && (i -= t.tx2width / 2, l -= t.tx2width / 2), e && (c *= -D, 
                    s = t.offset * C), r.select("path").attr("d", "middle" === t.anchor ? "M-" + t.bx / 2 + ",-" + t.by / 2 + "h" + t.bx + "v" + t.by + "h-" + t.bx + "Z" : "M0,0L" + (n * O + s) + "," + (O + c) + "v" + (t.by / 2 - O) + "h" + n * t.bx + "v-" + t.by + "H" + (n * O + s) + "V" + (c - O) + "Z"), 
                    a.call(b.Drawing.setPosition, i + s, c + t.ty0 - t.by / 2 + S).selectAll("tspan.line").attr({
                        x: a.attr("x"),
                        y: a.attr("y")
                    }), t.tx2width && (r.select("text.name, text.name tspan.line").call(b.Drawing.setPosition, l + o * S + s, c + t.ty0 - t.by / 2 + S), 
                    r.select("rect").call(b.Drawing.setRect, l + (o - 1) * t.tx2width / 2 + s, c - t.by / 2 - 1, t.tx2width, t.by + 2));
                });
            }
            function d(t, e, r) {
                if (!e.target) return !1;
                if (!r || r.length !== t._hoverdata.length) return !0;
                for (var n = r.length - 1; n >= 0; n--) {
                    var a = r[n], o = t._hoverdata[n];
                    if (a.curveNumber !== o.curveNumber || String(a.pointNumber) !== String(o.pointNumber)) return !0;
                }
                return !1;
            }
            function u(t, e) {
                var r = t._fullLayout;
                e || (e = {}), e.target && $(t).triggerHandler("plotly_beforehover", e) === !1 || (r._hoverlayer.selectAll("g").remove(), 
                e.target && t._hoverdata && $(t).trigger("plotly_unhover", {
                    points: t._hoverdata
                }), t._hoverdata = void 0);
            }
            function f(t) {
                if (t._hasGL3D) return [ [ "orbitRotation", "tableRotation", "zoom3d", "pan3d" ], [ "resetCameraDefault3d", "resetCameraLastSave3d" ], [ "hoverClosest3d" ] ];
                if (t._hasGeo) return [ [ "zoomInGeo", "zoomOutGeo", "resetGeo" ], [ "hoverClosestGeo" ] ];
                var e, r, n = b.Axes.list({
                    _fullLayout: t
                }, null, !0), a = !0;
                for (e = 0; e < n.length; e++) if (!n[e].fixedrange) {
                    a = !1;
                    break;
                }
                return r = a ? [] : [ [ "zoom2d", "pan2d" ], [ "zoomIn2d", "zoomOut2d", "resetScale2d", "autoScale2d" ] ], 
                t._hasCartesian ? r.push([ "hoverClosest2d", "hoverCompare2d" ]) : t._hasPie && r.push([ "hoverClosestPie" ]), 
                r;
            }
            function h(t, e) {
                return t ? "nsew" === t ? "pan" === e ? "move" : "crosshair" : t.toLowerCase() + "-resize" : "pointer";
            }
            function p(t, e, r, n, a, o, i, l) {
                function s(t, e) {
                    for (C = 0; C < t.length; C++) if (!t[C].fixedrange) return e;
                    return "";
                }
                function c(t) {
                    t[0] = Number(t[0]), t[1] = Number(t[1]);
                }
                function d(r, n, a) {
                    var o = Z.getBoundingClientRect();
                    for ($ = n - o.left, G = a - o.top, Y = {
                        l: $,
                        r: $,
                        w: 0,
                        t: G,
                        b: G,
                        h: 0
                    }, U = t._hmpixcount ? t._hmlumcount / t._hmpixcount : _(t._fullLayout.plot_bgcolor).getLuminance(), 
                    J = J = "M0,0H" + j + "V" + N + "H0V0", Q = !1, W = "xy", K = e.plot.append("path").attr("class", "zoombox").style({
                        fill: U > .2 ? "rgba(0,0,0,0)" : "rgba(255,255,255,0)",
                        "stroke-width": 0
                    }).attr("d", J + "Z"), te = e.plot.append("path").attr("class", "zoombox-corners").style({
                        fill: b.Color.background,
                        stroke: b.Color.defaultLine,
                        "stroke-width": 1,
                        opacity: 0
                    }).attr("d", "M0,0Z"), C = 0; C < B.length; C++) c(B[C].range);
                }
                function u(t, e) {
                    var r = Math.max(0, Math.min(j, t + $)), n = Math.max(0, Math.min(N, e + G)), a = Math.abs(r - $), o = Math.abs(n - G), i = Math.floor(Math.min(o, a, k.MINZOOM) / 2);
                    Y.l = Math.min($, r), Y.r = Math.max($, r), Y.t = Math.min(G, n), Y.b = Math.max(G, n), 
                    !R || o < Math.min(Math.max(.6 * a, k.MINDRAG), k.MINZOOM) ? a < k.MINDRAG ? (W = "", 
                    Y.r = Y.l, Y.t = Y.b, te.attr("d", "M0,0Z")) : (Y.t = 0, Y.b = N, W = "x", te.attr("d", "M" + (Y.l - .5) + "," + (G - k.MINZOOM - .5) + "h-3v" + (2 * k.MINZOOM + 1) + "h3ZM" + (Y.r + .5) + "," + (G - k.MINZOOM - .5) + "h3v" + (2 * k.MINZOOM + 1) + "h-3Z")) : !F || a < Math.min(.6 * o, k.MINZOOM) ? (Y.l = 0, 
                    Y.r = j, W = "y", te.attr("d", "M" + ($ - k.MINZOOM - .5) + "," + (Y.t - .5) + "v-3h" + (2 * k.MINZOOM + 1) + "v3ZM" + ($ - k.MINZOOM - .5) + "," + (Y.b + .5) + "v3h" + (2 * k.MINZOOM + 1) + "v-3Z")) : (W = "xy", 
                    te.attr("d", "M" + (Y.l - 3.5) + "," + (Y.t - .5 + i) + "h3v" + -i + "h" + i + "v-3h-" + (i + 3) + "ZM" + (Y.r + 3.5) + "," + (Y.t - .5 + i) + "h-3v" + -i + "h" + -i + "v-3h" + (i + 3) + "ZM" + (Y.r + 3.5) + "," + (Y.b + .5 - i) + "h-3v" + i + "h" + -i + "v3h" + (i + 3) + "ZM" + (Y.l - 3.5) + "," + (Y.b + .5 - i) + "h3v" + i + "h" + i + "v3h-" + (i + 3) + "Z")), 
                    Y.w = Y.r - Y.l, Y.h = Y.b - Y.t, K.attr("d", J + "M" + Y.l + "," + Y.t + "v" + Y.h + "h" + Y.w + "v-" + Y.h + "h-" + Y.w + "Z"), 
                    Q || (K.transition().style("fill", U > .2 ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.3)").duration(200), 
                    te.transition().style("opacity", 1).duration(200), Q = !0);
                }
                function f(t, e, r) {
                    var n, a, o;
                    for (n = 0; n < t.length; n++) a = t[n], a.fixedrange || (o = a.range, a.range = [ o[0] + (o[1] - o[0]) * e, o[0] + (o[1] - o[0]) * r ]);
                }
                function p(e, r) {
                    return Math.min(Y.h, Y.w) < 2 * k.MINDRAG ? (2 === r ? M() : m(t), v(t)) : (("xy" === W || "x" === W) && f(T, Y.l / j, Y.r / j), 
                    ("xy" === W || "y" === W) && f(E, (N - Y.b) / N, (N - Y.t) / N), v(t), L(W), void (I && t.data && t._context.showTips && (b.Lib.notifier("Double-click to<br>zoom back out", "long"), 
                    I = !1)));
                }
                function y(e, r) {
                    var n = 1 === (i + l).length;
                    if (e) L(); else if (2 !== r || n) if (1 === r && n) {
                        var a = i ? E[0] : T[0], o = "s" === i || "w" === l ? 0 : 1, s = a._name + ".range[" + o + "]", c = g(a, o), d = "left", u = "middle";
                        if (a.fixedrange) return;
                        i ? (u = "n" === i ? "top" : "bottom", "right" === a.side && (d = "right")) : "e" === l && (d = "right"), 
                        q.call(b.util.makeEditable, null, {
                            immediate: !0,
                            background: S.paper_bgcolor,
                            text: String(c),
                            fill: a.tickfont ? a.tickfont.color : "#444",
                            horizontalAlign: d,
                            verticalAlign: u
                        }).on("edit", function(e) {
                            var r = "category" === a.type ? a.c2l(e) : a.d2l(e);
                            void 0 !== r && b.relayout(t, s, r);
                        });
                    } else m(t); else M();
                }
                function x(e) {
                    function r(t, e, r) {
                        if (!t.fixedrange) {
                            c(t.range);
                            var n = t.range, a = n[0] + (n[1] - n[0]) * e;
                            t.range = [ a + (n[0] - a) * r, a + (n[1] - a) * r ];
                        }
                    }
                    if (t._context.scrollZoom || S._enablescrollzoom) {
                        var n = t.querySelector(".plotly");
                        if (!(n.scrollHeight - n.clientHeight > 10 || n.scrollWidth - n.clientWidth > 10)) {
                            clearTimeout(re);
                            var a = -e.deltaY;
                            if (isFinite(a) || (a = e.wheelDelta / 10), !isFinite(a)) return void console.log("did not find wheel motion attributes", e);
                            var o, s = Math.exp(-Math.min(Math.max(a, -20), 20) / 100), d = ae.draglayer.select(".nsewdrag").node().getBoundingClientRect(), u = (e.clientX - d.left) / d.width, f = ee[0] + ee[2] * u, h = (d.bottom - e.clientY) / d.height, p = ee[1] + ee[3] * (1 - h);
                            if (l) {
                                for (o = 0; o < T.length; o++) r(T[o], u, s);
                                ee[2] *= s, ee[0] = f - ee[2] * u;
                            }
                            if (i) {
                                for (o = 0; o < E.length; o++) r(E[o], h, s);
                                ee[3] *= s, ee[1] = p - ee[3] * (1 - h);
                            }
                            return z(ee), A(i, l), re = setTimeout(function() {
                                ee = [ 0, 0, j, N ], L();
                            }, ne), b.Lib.pauseEvent(e);
                        }
                    }
                }
                function w(t, e) {
                    function r(t, e) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.fixedrange || (n.range = [ n._r[0] - e / n._m, n._r[1] - e / n._m ]);
                        }
                    }
                    function n(t) {
                        return 1 - (t >= 0 ? Math.min(t, .9) : 1 / (1 / Math.max(t, -.3) + 3.222));
                    }
                    function a(t, e, r) {
                        for (var a = 1 - e, o = 0, i = 0; i < t.length; i++) {
                            var l = t[i];
                            l.fixedrange || (o = i, l.range[e] = l._r[a] + (l._r[e] - l._r[a]) / n(r / l._length));
                        }
                        return t[o]._length * (t[o]._r[e] - t[o].range[e]) / (t[o]._r[e] - t[o]._r[a]);
                    }
                    return "ew" === F || "ns" === R ? (F && r(T, t), R && r(E, e), z([ F ? -t : 0, R ? -e : 0, j, N ]), 
                    void A(R, F)) : ("w" === F ? t = a(T, 0, t) : "e" === F ? t = a(T, 1, -t) : F || (t = 0), 
                    "n" === R ? e = a(E, 1, e) : "s" === R ? e = a(E, 0, -e) : R || (e = 0), z([ "w" === F ? t : 0, "n" === R ? e : 0, j - t, N - e ]), 
                    void A(R, F));
                }
                function A(e, r) {
                    function n(t) {
                        for (o = 0; o < t.length; o++) t[o].fixedrange || i.push(t[o]._id);
                    }
                    function a(n, a) {
                        var l;
                        for (o = 0; o < n.length; o++) l = n[o], (r && -1 !== i.indexOf(l.xref) || e && -1 !== i.indexOf(l.yref)) && a.draw(t, o);
                    }
                    var o, i = [];
                    for (r && n(T), e && n(E), o = 0; o < i.length; o++) b.Axes.doTicks(t, i[o], !0);
                    a(S.annotations || [], b.Annotations), a(S.shapes || [], b.Shapes);
                }
                function M() {
                    var e, r, n = t._context.doubleClick, a = (F ? T : []).concat(R ? E : []), o = {};
                    if ("autosize" === n) for (r = 0; r < a.length; r++) e = a[r], e.fixedrange || (o[e._name + ".autorange"] = !0); else if ("reset" === n) for (r = 0; r < a.length; r++) e = a[r], 
                    o[e._name + ".range"] = e._rangeInitial.slice(); else if ("reset+autosize" === n) for (r = 0; r < a.length; r++) e = a[r], 
                    e.fixedrange || (void 0 === e._rangeInitial || e.range[0] === e._rangeInitial[0] && e.range[1] === e._rangeInitial[1] ? o[e._name + ".autorange"] = !0 : o[e._name + ".range"] = e._rangeInitial.slice());
                    b.relayout(t, o);
                }
                function L(e) {
                    for (var r = {}, n = 0; n < B.length; n++) {
                        var a = B[n];
                        e && -1 === e.indexOf(a._id.charAt(0)) || (a._r[0] !== a.range[0] && (r[a._name + ".range[0]"] = a.range[0]), 
                        a._r[1] !== a.range[1] && (r[a._name + ".range[1]"] = a.range[1]), a.range = a._r.slice());
                    }
                    z([ 0, 0, j, N ]), b.relayout(t, r);
                }
                function z(t) {
                    var e, r, n, a, o, s, c = S._plots, d = Object.keys(c);
                    for (e = 0; e < d.length; e++) if (r = c[d[e]], n = r.x(), a = r.y(), o = l && -1 !== T.indexOf(n) && !n.fixedrange, 
                    s = i && -1 !== E.indexOf(a) && !a.fixedrange, o || s) {
                        var u = [ 0, 0, n._length, a._length ];
                        o && (u[0] = t[0], u[2] = t[2]), s && (u[1] = t[1], u[3] = t[3]), r.plot.attr("viewBox", u.join(" "));
                    }
                }
                var C, D, O, S = t._fullLayout, P = [ e ].concat(i && l ? e.overlays : []), T = [ e.x() ], E = [ e.y() ], j = T[0]._length, N = E[0]._length;
                for (C = 1; C < P.length; C++) D = P[C].x(), O = P[C].y(), -1 === T.indexOf(D) && T.push(D), 
                -1 === E.indexOf(O) && E.push(O);
                var B = T.concat(E), F = s(T, l), R = s(E, i), H = h(R + F, S.dragmode), V = i + l + "drag", q = e.draglayer.selectAll("." + V).data([ 0 ]);
                q.enter().append("rect").classed("drag", !0).classed(V, !0).style({
                    fill: "transparent",
                    "stroke-width": 0
                }).attr("data-subplot", e.id), q.call(b.Drawing.setRect, r, n, a, o).call(k.setCursor, H);
                var Z = q.node();
                if (!R && !F) return Z.onmousedown = null, Z.style.pointerEvents = i + l === "nsew" ? "all" : "none", 
                Z;
                var X = {
                    element: Z,
                    prepFn: function(t, e, r) {
                        i + l === "nsew" && ("zoom" === S.dragmode ? !t.shiftKey : t.shiftKey) ? (X.moveFn = u, 
                        X.doneFn = p, d(t, e, r)) : (X.moveFn = w, X.doneFn = y);
                    }
                };
                k.dragElement(X);
                var $, G, Y, U, J, Q, W, K, te, ee = [ 0, 0, j, N ], re = null, ne = 300, ae = e.mainplot ? S._plots[e.mainplot] : e;
                return i.length * l.length !== 1 && (void 0 !== Z.onwheel ? Z.onwheel = x : void 0 !== Z.onmousewheel && (Z.onmousewheel = x)), 
                Z;
            }
            function g(t, e) {
                var r, n = t.range[e], a = Math.abs(n - t.range[1 - e]);
                return "date" === t.type ? b.Lib.ms2DateTime(n, a) : "log" === t.type ? (r = Math.ceil(Math.max(0, -Math.log(a) / Math.LN10)) + 3, 
                d3.format("." + r + "g")(Math.pow(10, n))) : (r = Math.floor(Math.log(Math.abs(n)) / Math.LN10) - Math.floor(Math.log(a) / Math.LN10) + 4, 
                d3.format("." + String(r) + "g")(n));
            }
            function m(t) {
                t._dragging = !0;
                var e = t._replotPending;
                t._replotPending = !1, setTimeout(function() {
                    t._replotPending = e, y(t);
                }, k.DBLCLICKDELAY);
            }
            function y(t) {
                t._dragging = !1, t._replotPending && b.plot(t);
            }
            function v(t) {
                d3.select(t).selectAll(".zoombox,.js-zoombox-backdrop,.js-zoombox-menu,.zoombox-corners").remove();
            }
            function x() {
                var t = document.createElement("div");
                t.className = "dragcover";
                var e = t.style;
                return e.position = "fixed", e.left = 0, e.right = 0, e.top = 0, e.bottom = 0, e["z-index"] = 999999999, 
                e.background = "none", document.body.appendChild(t), t;
            }
            var b = t("./plotly"), _ = t("tinycolor2"), w = t("./isnumeric"), k = e.exports = {};
            k.layoutAttributes = {
                dragmode: {
                    type: "enumerated",
                    values: [ "zoom", "pan", "orbit", "turntable" ]
                },
                hovermode: {
                    type: "enumerated",
                    values: [ "x", "y", "closest", !1 ]
                }
            }, k.supplyLayoutDefaults = function(t, e, r) {
                function n(r, n) {
                    return b.Lib.coerce(t, e, k.layoutAttributes, r, n);
                }
                var a;
                n("dragmode", e._hasGL3D ? "turntable" : "zoom"), e._hasGL3D || e._hasGeo ? n("hovermode", "closest") : (a = e._isHoriz = k.isHoriz(r), 
                n("hovermode", a ? "y" : "x"));
            }, k.isHoriz = function(t) {
                var e, r, n = !0;
                for (e = 0; e < t.length; e++) if (r = t[e], "h" !== r.orientation) {
                    n = !1;
                    break;
                }
                return n;
            }, k.DBLCLICKDELAY = 600, k.MINDRAG = 8, k.MINZOOM = 20;
            var A = 20;
            k.init = function(t) {
                var e = t._fullLayout;
                if (!(e._hasGL3D || e._hasGeo || t._context.staticPlot)) {
                    var r = Object.keys(e._plots).sort(function(t, r) {
                        if ((e._plots[t].mainplot && !0) === (e._plots[r].mainplot && !0)) {
                            var n = t.split("y"), a = r.split("y");
                            return n[0] === a[0] ? Number(n[1] || 1) - Number(a[1] || 1) : Number(n[0] || 1) - Number(a[0] || 1);
                        }
                        return e._plots[t].mainplot ? 1 : -1;
                    });
                    r.forEach(function(r) {
                        var n = e._plots[r], a = n.x(), o = n.y(), i = (a._linepositions[r] || [])[3], l = (o._linepositions[r] || [])[3];
                        if (w(i) && "top" === a.side && (i -= A), w(l) && "right" !== o.side && (l -= A), 
                        !n.mainplot) {
                            var s = p(t, n, 0, 0, a._length, o._length, "ns", "ew");
                            $(s).mousemove(function(n) {
                                k.hover(t, n, r), e._lasthover = s, e._hoversubplot = r;
                            }).mouseout(function(e) {
                                "undefined" == typeof window.navigator.msSaveBlob && k.unhover(t, e);
                            }).click(function(e) {
                                k.click(t, e);
                            }), p(t, n, -A, -A, A, A, "n", "w"), p(t, n, a._length, -A, A, A, "n", "e"), p(t, n, -A, o._length, A, A, "s", "w"), 
                            p(t, n, a._length, o._length, A, A, "s", "e");
                        }
                        w(i) && ("free" === a.anchor && (i -= e._size.h * (1 - o.domain[1])), p(t, n, .1 * a._length, i, .8 * a._length, A, "", "ew"), 
                        p(t, n, 0, i, .1 * a._length, A, "", "w"), p(t, n, .9 * a._length, i, .1 * a._length, A, "", "e")), 
                        w(l) && ("free" === o.anchor && (l -= e._size.w * a.domain[0]), p(t, n, l, .1 * o._length, A, .8 * o._length, "ns", ""), 
                        p(t, n, l, .9 * o._length, A, .1 * o._length, "s", ""), p(t, n, l, 0, A, .1 * o._length, "n", ""));
                    }), $(e._hoverlayer.node()).off("mousemove click").on("mousemove", function(r) {
                        r.target = e._lasthover, k.hover(t, r, e._hoversubplot);
                    }).on("click", function(r) {
                        r.target = e._lasthover, k.click(t, r);
                    }), e._hoverlayer.node().onmousedown = function(t) {
                        e._lasthover.onmousedown(t);
                    };
                }
            };
            var M = 60, L = Math.PI * M / 180, z = 1 / Math.sin(L), C = Math.cos(L), D = Math.sin(L), O = 6, S = 3, P = 13, T = "Arial, sans-serif";
            k.MAXDIST = 20;
            var E = 100;
            k.hover = function(t, e, r) {
                return "string" == typeof t && (t = document.getElementById(t)), void 0 === t._lastHoverTime && (t._lastHoverTime = 0), 
                void 0 !== t._hoverTimer && (clearTimeout(t._hoverTimer), t._hoverTimer = void 0), 
                Date.now() > t._lastHoverTime + E ? (o(t, e, r), void (t._lastHoverTime = Date.now())) : void (t._hoverTimer = setTimeout(function() {
                    o(t, e, r), t._lastHoverTime = Date.now(), t._hoverTimer = void 0;
                }, E));
            }, k.unhover = function(t, e, r) {
                "string" == typeof t && (t = document.getElementById(t)), t._hoverTimer && (clearTimeout(t._hoverTimer), 
                t._hoverTimer = void 0), u(t, e, r);
            }, k.getDistanceFunction = function(t, e, r, n) {
                return "closest" === t ? n || a(e, r) : "x" === t ? e : r;
            }, k.getClosest = function(t, e, r) {
                if (r.index !== !1) r.index >= 0 && r.index < t.length ? r.distance = 0 : r.index = !1; else for (var n = 0; n < t.length; n++) {
                    var a = e(t[n]);
                    a < r.distance && (r.index = n, r.distance = a);
                }
                return r;
            }, k.loneHover = function(t, e) {
                var r = {
                    color: t.color || b.Color.defaultLine,
                    x0: t.x0 || t.x || 0,
                    x1: t.x1 || t.x || 0,
                    y0: t.y0 || t.y || 0,
                    y1: t.y1 || t.y || 0,
                    xLabel: t.xLabel,
                    yLabel: t.yLabel,
                    zLabel: t.zLabel,
                    text: t.text,
                    name: t.name,
                    idealAlign: t.idealAlign,
                    trace: {
                        index: 0,
                        hoverinfo: ""
                    },
                    xa: {
                        _offset: 0
                    },
                    ya: {
                        _offset: 0
                    },
                    index: 0
                }, n = d3.select(e.container), a = e.outerContainer ? d3.select(e.outerContainer) : n, o = {
                    hovermode: "closest",
                    rotateLabels: !1,
                    bgColor: e.bgColor || b.Color.background,
                    container: n,
                    outerContainer: a
                }, i = l([ r ], o);
                return c(i, o.rotateLabels), i.node();
            }, k.loneUnhover = function(t) {
                var e = t instanceof d3.selection ? t : d3.select(t);
                e.selectAll("g.hovertext").remove();
            }, k.click = function(t, e) {
                t._hoverdata && e && e.target && ($(t).trigger("plotly_click", {
                    points: t._hoverdata
                }), e.stopImmediatePropagation());
            }, k.modeBar = function(t) {
                function e() {
                    var e = new b.ModeBar({
                        buttons: o,
                        container: a._paperdiv.node(),
                        Plotly: b,
                        graphInfo: t
                    });
                    return a._privateplot && d3.select(e.element).append("span").classed("badge-private float--left", !0).text("PRIVATE"), 
                    e;
                }
                function r() {
                    b.Lib.removeElement(t.querySelector(".modebar"));
                }
                var n, a = t._fullLayout || {};
                if (!t._context.displayModeBar) return r();
                var o = f(a);
                a._modebar || (r(), a._modebar = e()), n = a._modebar, n.hasButtons(o) || (a._modebar.cleanup(), 
                a._modebar = e());
            };
            var I = !0;
            k.dragAlign = function(t, e, r, n, a) {
                var o = (t - r) / (n - r), i = o + e / (n - r), l = (o + i) / 2;
                return "left" === a || "bottom" === a ? o : "center" === a || "middle" === a ? l : "right" === a || "top" === a ? i : 2 / 3 - l > o ? o : i > 4 / 3 - l ? i : l;
            };
            var j = [ [ "sw-resize", "s-resize", "se-resize" ], [ "w-resize", "move", "e-resize" ], [ "nw-resize", "n-resize", "ne-resize" ] ];
            k.dragCursors = function(t, e, r, n) {
                return t = "left" === r ? 0 : "center" === r ? 1 : "right" === r ? 2 : b.Lib.constrain(Math.floor(3 * t), 0, 2), 
                e = "bottom" === n ? 0 : "middle" === n ? 1 : "top" === n ? 2 : b.Lib.constrain(Math.floor(3 * e), 0, 2), 
                j[e][t];
            }, k.dragElement = function(t) {
                function e(e) {
                    var u = document.querySelector(".plugin-editable");
                    return u && d3.select(u).on("blur").call(u), c._dragged = !1, c._dragging = !0, 
                    a = e.clientX, o = e.clientY, s = e.target, i = new Date().getTime(), i - c._mouseDownTime < k.DBLCLICKDELAY ? d += 1 : (d = 1, 
                    c._mouseDownTime = i), t.prepFn && t.prepFn(e, a, o), l = x(), l.onmousemove = r, 
                    l.onmouseup = n, l.onmouseout = n, b.Lib.pauseEvent(e);
                }
                function r(e) {
                    var r = e.clientX - a, n = e.clientY - o;
                    return Math.abs(r) < k.MINDRAG && (r = 0), Math.abs(n) < k.MINDRAG && (n = 0), (r || n) && (c._dragged = !0), 
                    t.moveFn && t.moveFn(r, n, c._dragged), b.Lib.pauseEvent(e);
                }
                function n(e) {
                    if (l.onmousemove = null, l.onmouseup = null, l.onmouseout = null, b.Lib.removeElement(l), 
                    !c._dragging) return void (c._dragged = !1);
                    if (c._dragging = !1, new Date().getTime() - c._mouseDownTime > k.DBLCLICKDELAY && (d = Math.max(d - 1, 1)), 
                    t.doneFn && t.doneFn(c._dragged, d), !c._dragged) {
                        var r = document.createEvent("MouseEvents");
                        r.initEvent("click", !0, !0), s.dispatchEvent(r);
                    }
                    return y(c), c._dragged = !1, b.Lib.pauseEvent(e);
                }
                var a, o, i, l, s, c = b.Lib.getPlotDiv(t.element) || {}, d = 1;
                c._mouseDownTime || (c._mouseDownTime = 0), t.element.onmousedown = e, t.element.style.pointerEvents = "all";
            }, k.setCursor = function(t, e) {
                (t.attr("class") || "").split(" ").forEach(function(e) {
                    0 === e.indexOf("cursor-") && t.classed(e, !1);
                }), e && t.classed("cursor-" + e, !0);
            }, k.inbox = function(t, e) {
                return 0 > t * e || 0 === t ? k.MAXDIST * (.6 - .3 / Math.max(3, Math.abs(t - e))) : 1 / 0;
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27,
            tinycolor2: 7
        } ],
        17: [ function(t, e) {
            "use strict";
            function r(t) {
                return "object" == typeof t && (t = t.type), t;
            }
            function n(t, e) {
                try {
                    t._fullLayout._paper.style("background", e);
                } catch (t) {
                    console.log(t);
                }
            }
            function a(t, e) {
                t._fullLayout._paperdiv.style("background", "white"), n(t, e);
            }
            function o(t, e) {
                t._context || (t._context = $.extend({}, B.defaultConfig));
                var r = t._context;
                e && (Object.keys(e).forEach(function(t) {
                    t in r && (r[t] = "setBackground" === t && "opaque" === e[t] ? a : e[t]);
                }), t._fullLayout && t._fullLayout._modebar && delete t._fullLayout._modebar), r.staticPlot && (r.workspace = !1, 
                r.editable = !1, r.autosizable = !1, r.scrollZoom = !1, r.doubleClick = !1, r.showTips = !1, 
                r.showLink = !1, r.displayModeBar = !1);
            }
            function i(t, e) {
                e.text("");
                var r = e.append("a").attr({
                    "xlink:xlink:href": "#",
                    "class": "link--impt link--embedview",
                    "font-weight": "bold"
                }).text(t._context.linkText + " " + String.fromCharCode(187));
                if (t._context.sendData) r.on("click", function() {
                    $(t).trigger("plotly_beforeexport");
                    var e = window.PLOTLYENV && window.PLOTLYENV.BASE_URL || "https://plot.ly", r = $('<div id="hiddenform" style="display:none;"><form action="' + e + '/external" method="post" target="_blank"><input type="text" name="data" /></form></div>').appendTo(t);
                    return r.find("input").val(B.graphJson(t, !1, "keepdata")), r.find("form").submit(), 
                    r.remove(), $(t).trigger("plotly_afterexport"), !1;
                }); else {
                    var n = window.location.pathname.split("/");
                    r.attr({
                        "xlink:xlink:show": "new",
                        "xlink:xlink:href": "/" + n[2].split(".")[0] + "/" + n[1]
                    });
                }
            }
            function l(t) {
                var e, r, n, a, o, i = t._fullLayout, l = t._fullData, s = B.getSubplotIds(i, "gl3d");
                for (i._paperdiv.style({
                    width: i.width + "px",
                    height: i.height + "px"
                }), t._context.setBackground(t, i.paper_bgcolor), e = 0; e < s.length; e++) r = s[e], 
                n = B.getSubplotData(l, "gl3d", r), a = i[r]._scene, void 0 === a && (o = {
                    container: t.querySelector(".gl-container"),
                    id: r,
                    staticPlot: t._context.staticPlot,
                    plot3dPixelRatio: t._context.plot3dPixelRatio
                }, a = new I.Scene(o, i), i[r]._scene = a), a.plot(n, i, t.layout);
            }
            function s(t) {
                var e, r, n, a, o = t._fullLayout, i = t._fullData, l = B.getSubplotIds(o, "geo");
                for (void 0 === window.PlotlyGeoAssets && (window.PlotlyGeoAssets = {
                    topojsons: {}
                }), e = 0; e < l.length; e++) r = l[e], n = B.getSubplotData(i, "geo", r), a = o[r]._geo, 
                void 0 === a && (a = new I.Geo({
                    id: r,
                    container: o._geocontainer.node()
                }, o), o[r]._geo = a), a.plot(n, o);
            }
            function c(t, e, r) {
                var n = d3.select(t).selectAll(".plot-container").data([ 0 ]);
                n.enter().insert("div", ":first-child").classed("plot-container plotly", !0);
                var a = n.selectAll(".svg-container").data([ 0 ]);
                a.enter().append("div").classed("svg-container", !0).style("position", "relative"), 
                a.html(""), e && (t.data = e), r && (t.layout = r), I.micropolar.manager.fillLayout(t), 
                "initial" === t._fullLayout.autosize && t._context.autosizable && (D(t, {}), t._fullLayout.autosize = r.autosize = !0), 
                a.style({
                    width: t._fullLayout.width + "px",
                    height: t._fullLayout.height + "px"
                }), t.framework = I.micropolar.manager.framework(t), t.framework({
                    data: t.data,
                    layout: t.layout
                }, a.node()), t.framework.setUndoPoint();
                var o = t.framework.svg(), i = 1, l = t._fullLayout.title;
                "" !== l && l || (i = 0);
                var s = "Click to enter title", c = function() {
                    this.call(I.util.convertToTspans);
                }, d = o.select(".title-group text").call(c);
                if (t._context.editable) {
                    d.attr({
                        "data-unformatted": l
                    }), l && l !== s || (i = .2, d.attr({
                        "data-unformatted": s
                    }).text(s).style({
                        opacity: i
                    }).on("mouseover.opacity", function() {
                        d3.select(this).transition().duration(100).style("opacity", 1);
                    }).on("mouseout.opacity", function() {
                        d3.select(this).transition().duration(1e3).style("opacity", 0);
                    }));
                    var u = function() {
                        this.call(I.util.makeEditable).on("edit", function(e) {
                            t.framework({
                                layout: {
                                    title: e
                                }
                            }), this.attr({
                                "data-unformatted": e
                            }).text(e).call(c), this.call(u);
                        }).on("cancel", function() {
                            var t = this.attr("data-unformatted");
                            this.text(t).call(c);
                        });
                    };
                    d.call(u), I.ToolPanel.tweakMenu(t);
                }
                return t._context.setBackground(t, t._fullLayout.paper_bgcolor), B.addLinks(t), 
                Promise.resolve();
            }
            function d(t) {
                var e, r;
                t || (t = {}), t.xaxis1 && (t.xaxis || (t.xaxis = t.xaxis1), delete t.xaxis1), t.yaxis1 && (t.yaxis || (t.yaxis = t.yaxis1), 
                delete t.yaxis1);
                var n = I.Axes.list({
                    _fullLayout: t
                });
                for (e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.anchor && "free" !== a.anchor && (a.anchor = I.Axes.cleanId(a.anchor)), a.overlaying && (a.overlaying = I.Axes.cleanId(a.overlaying)), 
                    a.type || (a.isdate ? a.type = "date" : a.islog ? a.type = "log" : a.isdate === !1 && a.islog === !1 && (a.type = "linear")), 
                    ("withzero" === a.autorange || "tozero" === a.autorange) && (a.autorange = !0, a.rangemode = "tozero"), 
                    delete a.islog, delete a.isdate, delete a.categories, p(a, "domain") && delete a.domain, 
                    void 0 !== a.autotick && (void 0 === a.tickmode && (a.tickmode = a.autotick ? "auto" : "linear"), 
                    delete a.autotick);
                }
                void 0 === t.annotations || Array.isArray(t.annotations) || (console.log("annotations must be an array"), 
                delete t.annotations);
                var o = (t.annotations || []).length;
                for (e = 0; o > e; e++) {
                    var i = t.annotations[e];
                    i.ref && ("paper" === i.ref ? (i.xref = "paper", i.yref = "paper") : "data" === i.ref && (i.xref = "x", 
                    i.yref = "y"), delete i.ref), u(i, "xref"), u(i, "yref");
                }
                void 0 === t.shapes || Array.isArray(t.shapes) || (console.log("shapes must be an array"), 
                delete t.shapes);
                var l = (t.shapes || []).length;
                for (e = 0; l > e; e++) {
                    var s = t.shapes[e];
                    u(s, "xref"), u(s, "yref");
                }
                var c = t.legend;
                c && (c.x > 3 ? (c.x = 1.02, c.xanchor = "left") : c.x < -2 && (c.x = -.02, c.xanchor = "right"), 
                c.y > 3 ? (c.y = 1.02, c.yanchor = "bottom") : c.y < -2 && (c.y = -.02, c.yanchor = "top")), 
                "rotate" === t.dragmode && (t.dragmode = "orbit"), t.scene1 && (t.scene || (t.scene = t.scene1), 
                delete t.scene1);
                var d, f, h, g, m, y, v, x = B.getSubplotIds(t, "gl3d");
                for (e = 0; e < x.length; e++) if (d = t[x[e]], f = d.cameraposition, Array.isArray(f) && 4 === f[0].length) {
                    for (h = f[0], m = f[1], g = f[2], y = j([], h), v = [], r = 0; 3 > r; ++r) v[r] = m[e] + g * y[2 + 4 * r];
                    d.camera = {
                        eye: {
                            x: v[0],
                            y: v[1],
                            z: v[2]
                        },
                        center: {
                            x: m[0],
                            y: m[1],
                            z: m[2]
                        },
                        up: {
                            x: y[1],
                            y: y[5],
                            z: y[9]
                        }
                    }, delete d.cameraposition;
                }
                return I.Lib.markTime("finished rest of cleanLayout, starting color"), I.Color.clean(t), 
                I.Lib.markTime("finished cleanLayout color.clean"), t;
            }
            function u(t, e) {
                var r = t[e], n = e.charAt(0);
                r && "paper" !== r && (t[e] = I.Axes.cleanId(r, n));
            }
            function f(t, e) {
                for (var r = [], n = (t.concat(Array.isArray(e) ? e : []).filter(function(t) {
                    return "uid" in t;
                }).map(function(t) {
                    return t.uid;
                })), a = 0; a < t.length; a++) {
                    var o = t[a];
                    if (!("uid" in o) || -1 !== r.indexOf(o.uid)) {
                        var i, l;
                        for (l = 0; 100 > l && (i = I.Lib.randstr(n), -1 !== r.indexOf(i)); l++) ;
                        o.uid = I.Lib.randstr(n), n.push(o.uid);
                    }
                    if (r.push(o.uid), "histogramy" === o.type && "xbins" in o && !("ybins" in o) && (o.ybins = o.xbins, 
                    delete o.xbins), o.error_y && "opacity" in o.error_y) {
                        var s = I.Color.defaults, c = o.error_y.color || (B.traceIs(o, "bar") ? I.Color.defaultLine : s[a % s.length]);
                        o.error_y.color = I.Color.addOpacity(I.Color.rgb(c), I.Color.opacity(c) * o.error_y.opacity), 
                        delete o.error_y.opacity;
                    }
                    "bardir" in o && ("h" !== o.bardir || !B.traceIs(o, "bar") && "histogram" !== o.type.substr(0, 9) || (o.orientation = "h", 
                    L(o)), delete o.bardir), "histogramy" === o.type && L(o), ("histogramx" === o.type || "histogramy" === o.type) && (o.type = "histogram"), 
                    "scl" in o && (o.colorscale = o.scl, delete o.scl), "reversescl" in o && (o.reversescale = o.reversescl, 
                    delete o.reversescl), o.xaxis && (o.xaxis = I.Axes.cleanId(o.xaxis, "x")), o.yaxis && (o.yaxis = I.Axes.cleanId(o.yaxis, "y")), 
                    o.scene && (o.scene = I.Gl3dLayout.cleanId(o.scene)), B.traceIs(o, "pie") || (Array.isArray(o.textposition) ? o.textposition = o.textposition.map(h) : o.textposition && (o.textposition = h(o.textposition))), 
                    p(o, "line") && delete o.line, "marker" in o && (p(o.marker, "line") && delete o.marker.line, 
                    p(o, "marker") && delete o.marker), I.Lib.markTime("finished rest of cleanData, starting color"), 
                    I.Color.clean(o), I.Lib.markTime("finished cleanData color.clean");
                }
            }
            function h(t) {
                var e = "middle", r = "center";
                return -1 !== t.indexOf("top") ? e = "top" : -1 !== t.indexOf("bottom") && (e = "bottom"), 
                -1 !== t.indexOf("left") ? r = "left" : -1 !== t.indexOf("right") && (r = "right"), 
                e + " " + r;
            }
            function p(t, e) {
                return e in t && "object" == typeof t[e] && 0 === Object.keys(t[e]).length;
            }
            function g(t) {
                if (t && t.margin) {
                    var e, r = t.width, n = t.height, a = t.margin, o = r - (a.l + a.r), i = n - (a.t + a.b);
                    0 > o && (e = (r - 1) / (a.l + a.r), a.l = Math.floor(e * a.l), a.r = Math.floor(e * a.r)), 
                    0 > i && (e = (n - 1) / (a.t + a.b), a.t = Math.floor(e * a.t), a.b = Math.floor(e * a.b));
                }
            }
            function m(t, e) {
                for (var r, n = B.getSubplotIds(e, "gl3d"), a = 0; a < n.length; a++) r = n[a], 
                !t[r] && e[r]._scene && e[r]._scene.destroy();
            }
            function y(t, e) {
                for (var r, n = Object.keys(e), a = 0; a < n.length; ++a) {
                    var o = n[a];
                    if ("_" === o.charAt(0) || "function" == typeof e[o]) {
                        if (o in t) continue;
                        t[o] = e[o];
                    } else if (Array.isArray(e[o]) && Array.isArray(t[o]) && e[o].length && $.isPlainObject(e[o][0])) {
                        if (e[o].length !== t[o].length) throw new Error("relinkPrivateKeys needs equal length arrays");
                        for (r = 0; r < e[o].length; r++) y(t[o][r], e[o][r]);
                    } else $.isPlainObject(e[o]) && $.isPlainObject(t[o]) && (y(t[o], e[o]), Object.keys(t[o]).length || delete t[o]);
                }
            }
            function v(t) {
                var e, r, n, a, o = I.Axes.list(t), i = t._fullData, l = t._fullLayout, s = t.calcdata = new Array(i.length);
                for (t.firstscatter = !0, t.numboxes = 0, t._hmpixcount = 0, t._hmlumcount = 0, 
                l._piecolormap = {}, l._piedefaultcolorcount = 0, e = 0; e < o.length; e++) o[e]._categories = [];
                for (e = 0; e < i.length; e++) r = i[e], n = r._module, a = [], n && r.visible === !0 && n.calc && (a = n.calc(t, r)), 
                Array.isArray(a) && a[0] || (a = [ {
                    x: !1,
                    y: !1
                } ]), a[0].t || (a[0].t = {}), a[0].trace = r, I.Lib.markTime("done with calcdata for " + e), 
                s[e] = a;
            }
            function x(t, e) {
                var r, n, a = e + 1, o = [];
                for (r = 0; r < t.length; r++) n = t[r], o.push(0 > n ? a + n : n);
                return o;
            }
            function b(t, e, r) {
                var n, a;
                for (n = 0; n < e.length; n++) {
                    if (a = e[n], a !== parseInt(a, 10)) throw new Error("all values in " + r + " must be integers");
                    if (a >= t.data.length || a < -t.data.length) throw new Error(r + " must be valid indices for gd.data.");
                    if (e.indexOf(a, n + 1) > -1 || a >= 0 && e.indexOf(-t.data.length + a) > -1 || 0 > a && e.indexOf(t.data.length + a) > -1) throw new Error("each index in " + r + " must be unique.");
                }
            }
            function _(t, e, r) {
                if (!Array.isArray(t.data)) throw new Error("gd.data must be an array.");
                if ("undefined" == typeof e) throw new Error("currentIndices is a required argument.");
                if (Array.isArray(e) || (e = [ e ]), b(t, e, "currentIndices"), "undefined" == typeof r || Array.isArray(r) || (r = [ r ]), 
                "undefined" != typeof r && b(t, r, "newIndices"), "undefined" != typeof r && e.length !== r.length) throw new Error("current and new indices must be of equal length.");
            }
            function w(t, e, r) {
                var n, a;
                if (!Array.isArray(t.data)) throw new Error("gd.data must be an array.");
                if ("undefined" == typeof e) throw new Error("traces must be defined.");
                for (Array.isArray(e) || (e = [ e ]), n = 0; n < e.length; n++) if (a = e[n], "object" != typeof a || Array.isArray(a) || null === a) throw new Error("all values in traces array must be non-array objects");
                if ("undefined" == typeof r || Array.isArray(r) || (r = [ r ]), "undefined" != typeof r && r.length !== e.length) throw new Error("if indices is specified, traces.length must equal indices.length");
            }
            function k(t, e, r, n) {
                var a = $.isPlainObject(n);
                if (!Array.isArray(t.data)) throw new Error("gd.data must be an array");
                if (!$.isPlainObject(e)) throw new Error("update must be a key:value object");
                if ("undefined" == typeof r) throw new Error("indices must be an integer or array of integers");
                b(t, r, "indices");
                for (var o in e) {
                    if (!Array.isArray(e[o]) || e[o].length !== r.length) throw new Error("attribute " + o + " must be an array of length equal to indices array length");
                    if (!(!a || o in n && Array.isArray(n[o]) && n[o].length === e[o].length)) throw new Error("when maxPoints is set as a key:value object it must contain a 1:1 corrispondence with the keys and number of traces in the update object");
                }
            }
            function A(t, e, r, n) {
                var a, o, i, l, s, c = $.isPlainObject(n), d = [];
                Array.isArray(r) || (r = [ r ]), r = x(r, t.data.length - 1);
                for (var u in e) for (var f = 0; f < r.length; f++) {
                    if (a = t.data[r[f]], i = I.Lib.nestedProperty(a, u), o = i.get(), l = e[u][f], 
                    !Array.isArray(l)) throw new Error("attribute: " + u + " index: " + f + " must be an array");
                    if (!Array.isArray(o)) throw new Error("cannot extend missing or non-array attribute: " + u);
                    s = c ? n[u][f] : n, N(s) || (s = -1), d.push({
                        prop: i,
                        target: o,
                        insert: l,
                        maxp: Math.floor(s)
                    });
                }
                return d;
            }
            function M(t, e, r, n, a, o) {
                k(t, e, r, n);
                for (var i, l, s, c = A(t, e, r, n), d = [], u = {}, f = {}, h = 0; h < c.length; h++) l = c[h].prop, 
                s = c[h].maxp, i = a(c[h].target, c[h].insert), s >= 0 && s < i.length && (d = o(i, s)), 
                s = c[h].target.length, l.set(i), Array.isArray(u[l.astr]) || (u[l.astr] = []), 
                Array.isArray(f[l.astr]) || (f[l.astr] = []), u[l.astr].push(d), f[l.astr].push(s);
                return {
                    update: u,
                    maxPoints: f
                };
            }
            function L(t) {
                var e;
                if (I.Lib.swapAttrs(t, [ "?", "?0", "d?", "?bins", "nbins?", "autobin?", "?src", "error_?" ]), 
                Array.isArray(t.z) && Array.isArray(t.z[0]) && (t.transpose ? delete t.transpose : t.transpose = !0), 
                t.error_x && t.error_y) {
                    var r = t.error_y, n = "copy_ystyle" in r ? r.copy_ystyle : !(r.color || r.thickness || r.width);
                    I.Lib.swapAttrs(t, [ "error_?.copy_ystyle" ]), n && I.Lib.swapAttrs(t, [ "error_?.color", "error_?.thickness", "error_?.width" ]);
                }
                if (t.hoverinfo) {
                    var a = t.hoverinfo.split("+");
                    for (e = 0; e < a.length; e++) "x" === a[e] ? a[e] = "y" : "y" === a[e] && (a[e] = "x");
                    t.hoverinfo = a.join("+");
                }
            }
            function z(t) {
                if (t && t._context && t._context.workspace && t._fullLayout && "plot" === t.tabtype && "none" !== $(t).css("display")) {
                    var e = $(t).find(".plot-container"), r = t._fullLayout.width > parseInt(e.css("width"), 10);
                    t._fullLayout.autosize || !r ? e.removeClass("is-fixed-size") : r && e.addClass("is-fixed-size");
                }
            }
            function C(t) {
                var e, r = {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                };
                if (t) for (e in t) t.hasOwnProperty(e) && (r.left += t[e].left || 0, r.right += t[e].right || 0, 
                r.bottom += t[e].bottom || 0, r.top += t[e].top || 0);
                return r;
            }
            function D(t, e) {
                var r, n, a, o, i = t._fullLayout, l = C(t._boundingBoxMargins);
                if (t._context.workspace) {
                    setFileAndCommentsSize(t);
                    var s = i._container.node().getBoundingClientRect();
                    n = l.left + l.right, r = l.bottom + l.top, o = Math.round(.9 * (s.width - n)), 
                    a = Math.round(.9 * (s.height - r));
                } else t._context.fillFrame ? (o = window.innerWidth, a = window.innerHeight, document.body.style.overflow = "hidden") : (a = parseFloat(window.getComputedStyle(t).height) || i.height, 
                o = parseFloat(window.getComputedStyle(t).width) || i.width);
                return Math.abs(i.width - o) > 1 || Math.abs(i.height - a) > 1 ? (i.height = t.layout.height = a, 
                i.width = t.layout.width = o) : "initial" !== i.autosize && (delete e.autosize, 
                i.autosize = t.layout.autosize = !0), g(i), e;
            }
            function O(t) {
                return "string" == typeof t ? document.getElementById(t) : t;
            }
            function S(t) {
                function e(t) {
                    t.append("g").classed("maplayer", !0), t.append("g").classed("barlayer", !0), t.append("g").classed("errorlayer", !0), 
                    t.append("g").classed("boxlayer", !0), t.append("g").classed("scatterlayer", !0);
                }
                var r = d3.select(t), n = I.Axes.getSubplots(t), a = t._fullLayout;
                a._hasGL3D && I.Gl3dAxes.initAxes(t);
                var o = a._fileandcomments = r.selectAll(".file-and-comments");
                if (o.node() || (o = r), a._container = o.selectAll(".plot-container").data([ 0 ]), 
                a._container.enter().insert("div", ":first-child").classed("plot-container", !0).classed("plotly", !0).classed("workspace-plot", t._context.workspace), 
                a._paperdiv = a._container.selectAll(".svg-container").data([ 0 ]), a._paperdiv.enter().append("div").classed("svg-container", !0).style("position", "relative"), 
                "initial" === a.autosize && (t._context.workspace && setFileAndCommentsSize(t), 
                D(t, {}), a.autosize = !0, t.layout.autosize = !0), a._glcontainer = a._paperdiv.selectAll(".gl-container").data([ 0 ]), 
                a._glcontainer.enter().append("div").classed("gl-container", !0), a._geocontainer = a._paperdiv.selectAll(".geo-container").data([ 0 ]), 
                a._geocontainer.enter().append("div").classed("geo-container", !0), a._paperdiv.selectAll(".main-svg").remove(), 
                a._paper = a._paperdiv.insert("svg", ":first-child").classed("main-svg", !0), a._toppaper = a._paperdiv.append("svg").classed("main-svg", !0), 
                !a._uid) {
                    var i = [];
                    d3.selectAll("defs").each(function() {
                        this.id && i.push(this.id.split("-")[1]);
                    }), a._uid = I.Lib.randstr(i);
                }
                a._paperdiv.selectAll(".main-svg").attr({
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xmlns:xlink": "http://www.w3.org/1999/xlink"
                }), a._defs = a._paper.append("defs").attr("id", "defs-" + a._uid), a._draggers = a._paper.append("g").classed("draglayer", !0);
                var l = [];
                a._plots = {}, a._paper.selectAll("g.subplot").data(n).enter().append("g").classed("subplot", !0).each(function(r) {
                    var o = a._plots[r] = {}, i = d3.select(this).classed(r, !0);
                    o.id = r, o.x = function() {
                        return I.Axes.getFromId(t, r, "x");
                    }, o.y = function() {
                        return I.Axes.getFromId(t, r, "y");
                    };
                    var s = o.x(), c = o.y();
                    o.overlays = [];
                    var d = I.Axes.getFromId(t, s.overlaying) || s;
                    d !== s && d.overlaying && (d = s, s.overlaying = !1);
                    var u = I.Axes.getFromId(t, c.overlaying) || c;
                    u !== c && u.overlaying && (u = c, c.overlaying = !1);
                    var f = d._id + u._id;
                    f !== r && -1 !== n.indexOf(f) ? (o.mainplot = f, l.push(o), s.domain = d.domain.slice(), 
                    c.domain = u.domain.slice()) : (o.bg = i.append("rect").style("stroke-width", 0), 
                    o.gridlayer = i.append("g"), o.overgrid = i.append("g"), o.zerolinelayer = i.append("g"), 
                    o.overzero = i.append("g"), o.plot = i.append("svg").call(e), o.overplot = i.append("g"), 
                    o.xlines = i.append("path"), o.ylines = i.append("path"), o.overlines = i.append("g"), 
                    o.xaxislayer = i.append("g"), o.yaxislayer = i.append("g"), o.overaxes = i.append("g")), 
                    o.draglayer = a._draggers.append("g");
                }), l.forEach(function(t) {
                    var r = a._plots[t.mainplot];
                    r.overlays.push(t), t.gridlayer = r.overgrid.append("g"), t.zerolinelayer = r.overzero.append("g"), 
                    t.plot = r.overplot.append("svg").call(e), t.xlines = r.overlines.append("path"), 
                    t.ylines = r.overlines.append("path"), t.xaxislayer = r.overaxes.append("g"), t.yaxislayer = r.overaxes.append("g");
                }), n.forEach(function(t) {
                    var e = a._plots[t];
                    e.plot.attr("preserveAspectRatio", "none").style("fill", "none"), e.xlines.style("fill", "none").classed("crisp", !0), 
                    e.ylines.style("fill", "none").classed("crisp", !0);
                }), a._shapelayer = a._paper.append("g").classed("shapelayer", !0), a._pielayer = a._paper.append("g").classed("pielayer", !0), 
                a._glimages = a._paper.append("g").classed("glimages", !0), a._geoimages = a._paper.append("g").classed("geoimages", !0), 
                a._infolayer = a._toppaper.append("g").classed("infolayer", !0), a._hoverlayer = a._toppaper.append("g").classed("hoverlayer", !0);
                var s = I.Lib.syncOrAsync([ T, function() {
                    return I.Axes.doTicks(t, "redraw");
                }, I.Fx.init ], t);
                return s && s.then && t._promises.push(s), s;
            }
            function P(t) {
                var e = t._fullLayout;
                e._size || (e._size = {}), e._pushmargin || (e._pushmargin = {});
                var r = e._size, n = JSON.stringify(r), a = Math.max(e.margin.l || 0, 0), o = Math.max(e.margin.r || 0, 0), i = Math.max(e.margin.t || 0, 0), l = Math.max(e.margin.b || 0, 0), s = e._pushmargin;
                return e.margin.autoexpand !== !1 && (s.base = {
                    l: {
                        val: 0,
                        size: a
                    },
                    r: {
                        val: 1,
                        size: o
                    },
                    t: {
                        val: 1,
                        size: i
                    },
                    b: {
                        val: 0,
                        size: l
                    }
                }, Object.keys(s).forEach(function(t) {
                    var r = s[t].l || {}, n = s[t].b || {}, c = r.val, d = r.size, u = n.val, f = n.size;
                    Object.keys(s).forEach(function(t) {
                        if (N(d) && s[t].r) {
                            var r = s[t].r.val, n = s[t].r.size;
                            if (r > c) {
                                var h = (d * r + (n - e.width) * c) / (r - c), p = (n * (1 - c) + (d - e.width) * (1 - r)) / (r - c);
                                h >= 0 && p >= 0 && h + p > a + o && (a = h, o = p);
                            }
                        }
                        if (N(f) && s[t].t) {
                            var g = s[t].t.val, m = s[t].t.size;
                            if (g > u) {
                                var y = (f * g + (m - e.height) * u) / (g - u), v = (m * (1 - u) + (f - e.height) * (1 - g)) / (g - u);
                                y >= 0 && v >= 0 && y + v > l + i && (l = y, i = v);
                            }
                        }
                    });
                })), r.l = Math.round(a), r.r = Math.round(o), r.t = Math.round(i), r.b = Math.round(l), 
                r.p = Math.round(e.margin.pad), r.w = Math.round(e.width) - r.l - r.r, r.h = Math.round(e.height) - r.t - r.b, 
                t._replotting || "{}" === n || n === JSON.stringify(e._size) ? void 0 : I.plot(t);
            }
            function T(t) {
                return I.Lib.syncOrAsync([ P, E ], t);
            }
            function E(t) {
                var e, r = t._fullLayout, n = r._size, a = I.Axes.list(t);
                for (e = 0; e < a.length; e++) a[e]._linepositions = {};
                r._paperdiv.style({
                    width: r.width + "px",
                    height: r.height + "px"
                }).selectAll(".main-svg").call(I.Drawing.setSize, r.width, r.height), t._context.setBackground(t, r.paper_bgcolor);
                var o = [];
                return r._paper.selectAll("g.subplot").each(function(e) {
                    var a = r._plots[e], i = I.Axes.getFromId(t, e, "x"), l = I.Axes.getFromId(t, e, "y");
                    i.setScale(), l.setScale(), a.bg && a.bg.call(I.Drawing.setRect, i._offset - n.p, l._offset - n.p, i._length + 2 * n.p, l._length + 2 * n.p).call(I.Color.fill, r.plot_bgcolor), 
                    a.plot.call(I.Drawing.setRect, i._offset, l._offset, i._length, l._length);
                    var s = I.Drawing.crispRound(t, i.linewidth, 1), c = I.Drawing.crispRound(t, l.linewidth, 1), d = n.p + c, u = "M" + -d + ",", f = "h" + (i._length + 2 * d), h = "free" === i.anchor && -1 === o.indexOf(i._id), p = n.h * (1 - (i.position || 0)) + s / 2 % 1, g = i.anchor === l._id && (i.mirror || "top" !== i.side) || "all" === i.mirror || "allticks" === i.mirror || i.mirrors && i.mirrors[l._id + "bottom"], m = l._length + n.p + s / 2, y = i.anchor === l._id && (i.mirror || "top" === i.side) || "all" === i.mirror || "allticks" === i.mirror || i.mirrors && i.mirrors[l._id + "top"], v = -n.p - s / 2, x = n.p, b = g ? 0 : s, _ = y ? 0 : s, w = "," + (-x - _) + "v" + (l._length + 2 * x + _ + b), k = "free" === l.anchor && -1 === o.indexOf(l._id), A = n.w * (l.position || 0) + c / 2 % 1, M = l.anchor === i._id && (l.mirror || "right" !== l.side) || "all" === l.mirror || "allticks" === l.mirror || l.mirrors && l.mirrors[i._id + "left"], L = -n.p - c / 2, z = l.anchor === i._id && (l.mirror || "right" === l.side) || "all" === l.mirror || "allticks" === l.mirror || l.mirrors && l.mirrors[i._id + "right"], C = i._length + n.p + c / 2;
                    i._linepositions[e] = [ g ? m : void 0, y ? v : void 0, h ? p : void 0 ], i.anchor === l._id ? i._linepositions[e][3] = "top" === i.side ? v : m : h && (i._linepositions[e][3] = p), 
                    l._linepositions[e] = [ M ? L : void 0, z ? C : void 0, k ? A : void 0 ], l.anchor === i._id ? l._linepositions[e][3] = "right" === l.side ? C : L : k && (l._linepositions[e][3] = A);
                    var D = "translate(" + i._offset + "," + l._offset + ")", O = D, S = D;
                    h && (O = "translate(" + i._offset + "," + n.t + ")", v += l._offset - n.t, m += l._offset - n.t), 
                    k && (S = "translate(" + n.l + "," + l._offset + ")", L += i._offset - n.l, C += i._offset - n.l), 
                    a.xlines.attr("transform", O).attr("d", (g ? u + m + f : "") + (y ? u + v + f : "") + (h ? u + p + f : "") || "M0,0").style("stroke-width", s + "px").call(I.Color.stroke, i.showline ? i.linecolor : "rgba(0,0,0,0)"), 
                    a.ylines.attr("transform", S).attr("d", (M ? "M" + L + w : "") + (z ? "M" + C + w : "") + (k ? "M" + A + w : "") || "M0,0").attr("stroke-width", c + "px").call(I.Color.stroke, l.showline ? l.linecolor : "rgba(0,0,0,0)"), 
                    a.xaxislayer.attr("transform", O), a.yaxislayer.attr("transform", S), a.gridlayer.attr("transform", D), 
                    a.zerolinelayer.attr("transform", D), a.draglayer.attr("transform", D), h && o.push(i._id), 
                    k && o.push(l._id);
                }), I.Axes.makeClipPaths(t), B.titles(t, "gtitle"), I.Fx.modeBar(t), z(t), t._promises.length && Promise.all(t._promises);
            }
            var I = t("./plotly"), j = t("gl-mat4/fromQuat"), N = t("./isnumeric"), B = e.exports = {}, F = B.modules = {}, R = B.allTypes = [], H = B.allCategories = {};
            B.register = function(t, e, r) {
                if (F[e]) throw new Error("type " + e + " already registered");
                for (var n = {}, a = 0; a < r.length; a++) n[r[a]] = !0, H[r[a]] = !0;
                F[e] = {
                    module: t,
                    categories: n
                }, R.push(e);
            }, B.getModule = function(t) {
                if (void 0 !== t.r) return console.log("Oops, tried to put a polar trace on an incompatible graph of cartesian data. Ignoring this dataset.", t), 
                !1;
                var e = F[r(t)];
                return e ? e.module : !1;
            }, B.traceIs = function(t, e) {
                if (t = r(t), "various" === t) return !1;
                var n = F[t];
                return n || (void 0 !== t && console.warn("unrecognized trace type " + t), n = F[B.attributes.type.dflt]), 
                !!n.categories[e];
            }, B.subplotsRegistry = {
                gl3d: {
                    attr: "scene",
                    idRegex: /^scene[0-9]*$/
                },
                geo: {
                    attr: "geo",
                    idRegex: /^geo[0-9]*$/
                }
            }, B.getSubplotIds = function(t, e) {
                for (var r, n = B.subplotsRegistry[e].idRegex, a = Object.keys(t), o = [], i = 0; i < a.length; i++) r = a[i], 
                n.test(r) && o.push(r);
                return o;
            }, B.getSubplotIdsInData = function(t, e) {
                for (var r, n = B.subplotsRegistry[e].attr, a = [], o = 0; o < t.length; o++) r = t[o], 
                I.Plots.traceIs(r, e) && -1 === a.indexOf(r[n]) && a.push(r[n]);
                return a;
            }, B.getSubplotData = function(t, e, r) {
                for (var n, a = B.subplotsRegistry[e].attr, o = [], i = 0; i < t.length; i++) n = t[i], 
                n[a] === r && o.push(n);
                return o;
            }, B.newTab = function(t, e) {
                I.ToolPanel.makeMenu(document.getElementById(t));
                var r = {
                    workspace: !0,
                    editable: !0,
                    autosizable: !0,
                    scrollZoom: !0,
                    showLink: !1,
                    setBackground: "opaque"
                };
                return I.plot(t, [], e, r);
            }, B.redrawText = function(t) {
                return t = O(t), t._fullLayout._hasGL3D || t.data && t.data[0] && t.data[0].r ? void 0 : new Promise(function(e) {
                    setTimeout(function() {
                        I.Annotations.drawAll(t), I.Legend.draw(t), (t.calcdata || []).forEach(function(t) {
                            t[0] && t[0].t && t[0].t.cb && t[0].t.cb();
                        }), e(B.previousPromises(t));
                    }, 300);
                });
            }, B.defaultConfig = {
                staticPlot: !1,
                workspace: !1,
                editable: !1,
                autosizable: !1,
                fillFrame: !1,
                scrollZoom: !1,
                doubleClick: "reset+autosize",
                showTips: !0,
                showLink: !0,
                sendData: !0,
                linkText: "Edit chart",
                displayModeBar: "hover",
                displaylogo: !0,
                plot3dPixelRatio: 2,
                setBackground: n
            }, B.addLinks = function(t) {
            }, B.adjustReservedMargins = function(t, e, r) {
                var n;
                return t._boundingBoxMargins = t._boundingBoxMargins || {}, t._boundingBoxMargins[e] = {}, 
                [ "left", "right", "top", "bottom" ].forEach(function(a) {
                    n = r[a] || 0, t._boundingBoxMargins[e][a] = n;
                }), t._boundingBoxMargins;
            }, I.plot = function(t, e, r, n) {
                function a() {
                    var e, r, n, a = t.calcdata;
                    for (I.Legend.draw(t), e = 0; e < a.length; e++) r = a[e], n = r[0].trace, n.visible === !0 && n._module.colorbar ? n._module.colorbar(t, r) : B.autoMargin(t, "cb" + n.uid);
                    return P(t), B.previousPromises(t);
                }
                function i() {
                    var e = JSON.stringify(k._size) === L ? [] : [ a, T ];
                    return I.Lib.syncOrAsync(e.concat(I.Fx.init), t);
                }
                function u() {
                    var e, r, n, a, o, i;
                    if (A) {
                        for (n = I.Axes.getSubplots(t), o = t._modules, e = 0; e < n.length; e++) for (a = t._fullLayout._plots[n[e]], 
                        r = 0; r < o.length; r++) i = o[r], i.setPositions && i.setPositions(t, a);
                        return I.Lib.markTime("done with bar/box adjustments"), I.ErrorBars && (I.ErrorBars.calc(t), 
                        I.Lib.markTime("done Plotly.ErrorBars.calc")), I.Lib.syncOrAsync([ I.Shapes.calcAutorange, I.Annotations.calcAutorange, h ], t);
                    }
                }
                function h() {
                    for (var e = I.Axes.list(t, "", !0), r = 0; r < e.length; r++) I.Axes.doAutoRange(e[r]);
                }
                function p() {
                    return I.Axes.doTicks(t, "redraw");
                }
                function g() {
                    function e(t, e) {
                        var r, n, a, o = [];
                        for (r = 0; r < t.length; r++) n = t[r], a = n[0].trace, a.xaxis + a.yaxis === e && o.push(n);
                        return o;
                    }
                    function r(t, e) {
                        var r, n, a, o = [];
                        for (r = 0; r < t.length; r++) n = t[r], a = n[0].trace, a._module === e && a.visible === !0 && o.push(n);
                        return o;
                    }
                    var n, a, o, i, c, d, u, f, h, p, g, m = t.calcdata, y = I.Axes.getSubplots(t), v = t._modules;
                    for (t._fullLayout._hasGL3D && l(t), t._fullLayout._hasGeo && s(t), n = 0; n < m.length; n++) o = m[n], 
                    i = o[0].trace, i.visible === !0 && i._module.colorbar || (c = i.uid, k._paper.selectAll(".hm" + c + ",.contour" + c + ",.cb" + c + ",#clip" + c).remove());
                    for (n = 0; n < y.length; n++) {
                        for (d = y[n], u = t._fullLayout._plots[d], f = e(m, d), h = [], u.plot.selectAll("g.trace").remove(), 
                        a = 0; a < v.length; a++) {
                            if (g = v[a], !g.plot) return;
                            p = r(f, g), g.plot(t, u, p), I.Lib.markTime("done " + (p[0] && p[0][0].trace.type)), 
                            p[0] && p[0][0].trace && B.traceIs(p[0][0].trace, "errorBarsOK") && (h = h.concat(p));
                        }
                        I.ErrorBars && (I.ErrorBars.plot(t, u, h), I.Lib.markTime("done ErrorBars"));
                    }
                    var x = r(m, I.Pie);
                    return x.length && I.Pie.plot(t, x), B.style(t), I.Lib.markTime("done plots.style"), 
                    I.Shapes.drawAll(t), I.Annotations.drawAll(t), B.addLinks(t), B.previousPromises(t);
                }
                function m() {
                    t._replotting = !1, I.Lib.markTime("done plot"), $(t).trigger("plotly_afterplot");
                }
                I.Lib.markTime("in plot"), t = O(t);
                var y = $(t).triggerHandler("plotly_beforeplot", [ e, r, n ]);
                if (y !== !1) {
                    e || r || I.Lib.isPlotDiv(t) || console.log("Warning: calling Plotly.plot as if redrawing but this container doesn't yet have a plot.", t), 
                    o(t, n), r || (r = {}), d3.select(t).classed("js-plotly-plot", !0), I.Drawing.makeTester(t), 
                    t._promises = [];
                    var x = 0 === (t.data || []).length && Array.isArray(e);
                    if (Array.isArray(e) && (f(e, t.data), x ? t.data = e : t.data.push.apply(t.data, e), 
                    t.empty = !1), (!t.layout || x) && (t.layout = d(r)), t._dragging) return void (t._replotPending = !0);
                    if (t._replotPending = !1, B.supplyDefaults(t), e && e[0] && e[0].r) return c(t, e, r);
                    t._context.editable && I.ToolPanel.tweakMenu(t), t._replotting = !0;
                    var b = t._fullData.length > 0;
                    if (b) {
                        var _ = I.Axes.getSubplots(t).join(""), w = Object.keys(t._fullLayout._plots || {}).join("");
                        (t.framework !== S || x || w !== _) && (t.framework = S, S(t));
                    } else x && S(t);
                    $(t).find(".data-only").attr("disabled", !b);
                    var k = t._fullLayout, A = !t.calcdata || t.calcdata.length !== (t.data || []).length;
                    A && (v(t), (t._context.doubleClick !== !1 || t._context.displayModeBar !== !1) && I.Axes.saveRangeInitial(t));
                    for (var M = 0; M < t.calcdata.length; M++) t.calcdata[M][0].trace = t._fullData[M];
                    var L = JSON.stringify(k._size), z = I.Lib.syncOrAsync([ B.previousPromises, a, T, i, u, p, g ], t, m);
                    return z && z.then ? z : Promise.resolve();
                }
            }, B.previousPromises = function(t) {
                return (t._promises || []).length ? Promise.all(t._promises).then(function() {
                    t._promises = [];
                }) : void 0;
            }, I.redraw = function(t) {
                return t = O(t), I.Lib.isPlotDiv(t) ? (t.calcdata = void 0, I.plot(t).then(function() {
                    $(t).trigger("plotly_redraw");
                })) : void console.log("This element is not a Plotly Plot", t);
            }, I.newPlot = function(t, e, r, n) {
                t = O(t), I.Plots.purge(t), I.plot(t, e, r, n);
            }, B.attributes = {
                type: {
                    type: "enumerated",
                    values: R,
                    dflt: "scatter"
                },
                visible: {
                    type: "enumerated",
                    values: [ !0, !1, "legendonly" ],
                    dflt: !0
                },
                showlegend: {
                    type: "boolean",
                    dflt: !0
                },
                legendgroup: {
                    type: "string",
                    dflt: ""
                },
                opacity: {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 1
                },
                name: {
                    type: "string"
                },
                xaxis: {
                    type: "axisid",
                    dflt: "x"
                },
                yaxis: {
                    type: "axisid",
                    dflt: "y"
                },
                scene: {
                    type: "sceneid",
                    dflt: "scene"
                },
                geo: {
                    type: "geoid",
                    dflt: "geo"
                },
                uid: {
                    type: "string",
                    dflt: ""
                },
                hoverinfo: {
                    type: "flaglist",
                    flags: [ "x", "y", "z", "text", "name" ],
                    extras: [ "all", "none" ],
                    dflt: "all"
                }
            }, B.supplyDefaults = function(t) {
                var e, r, n, a, o, i, l = t._fullLayout || {}, s = t._fullLayout = {}, c = t.layout || {}, d = t._fullData || [], u = t._fullData = [], f = t.data || [], h = t._modules = [];
                for (B.supplyLayoutGlobalDefaults(c, s), e = 0; e < f.length; e++) r = f[e], n = B.supplyDataDefaults(r, e, s), 
                u.push(n), B.traceIs(n, "cartesian") ? s._hasCartesian = !0 : B.traceIs(n, "gl3d") ? s._hasGL3D = !0 : B.traceIs(n, "geo") ? s._hasGeo = !0 : B.traceIs(n, "pie") ? s._hasPie = !0 : "r" in n && (s._hasPolar = !0), 
                a = n._module, a && -1 === h.indexOf(a) && h.push(a);
                for (e = 0; e < h.length; e++) a = h[e], a.cleanData && a.cleanData(u);
                if (d.length === f.length) for (e = 0; e < u.length; e++) y(u[e], d[e]);
                for (B.supplyLayoutModuleDefaults(c, s, u), m(s, l), y(s, l), P(t), o = I.Axes.list(t), 
                e = 0; e < o.length; e++) i = o[e], i._td = t, i.setScale();
                if ((t.calcdata || []).length === u.length) for (e = 0; e < u.length; e++) r = u[e], 
                (t.calcdata[e][0] || {}).trace = r;
            }, B.supplyDataDefaults = function(t, e, r) {
                function n(e, r) {
                    return I.Lib.coerce(t, a, B.attributes, e, r);
                }
                var a = {}, o = I.Color.defaults[e % I.Color.defaults.length];
                a.index = e;
                var i, l, s = n("visible");
                return n("type"), n("uid"), B.traceIs(a, "gl3d") && (i = n("scene")), B.traceIs(a, "geo") && (i = n("geo")), 
                (s || i) && (l = B.getModule(a), a._module = l), l && s && l.supplyDefaults(t, a, o, r), 
                s && (n("name", "trace " + e), B.traceIs(a, "pie") || n("hoverinfo"), B.traceIs(a, "noOpacity") || n("opacity"), 
                B.traceIs(a, "cartesian") && (n("xaxis"), n("yaxis")), B.traceIs(a, "showLegend") && (n("showlegend"), 
                n("legendgroup"))), a._input = t, a;
            }, B.layoutAttributes = {
                font: {
                    type: "font",
                    dflt: {
                        family: '"Open sans", verdana, arial, sans-serif',
                        size: 12,
                        color: I.Color.defaultLine
                    }
                },
                title: {
                    type: "string",
                    dflt: "Click to enter Plot title"
                },
                titlefont: {
                    type: "font"
                },
                autosize: {
                    type: "enumerated",
                    values: [ !0, !1, "initial" ]
                },
                width: {
                    type: "number",
                    min: 10,
                    dflt: 700
                },
                height: {
                    type: "number",
                    min: 10,
                    dflt: 450
                },
                margin: {
                    l: {
                        type: "number",
                        min: 0,
                        dflt: 80
                    },
                    r: {
                        type: "number",
                        min: 0,
                        dflt: 80
                    },
                    t: {
                        type: "number",
                        min: 0,
                        dflt: 100
                    },
                    b: {
                        type: "number",
                        min: 0,
                        dflt: 80
                    },
                    pad: {
                        type: "number",
                        min: 0,
                        dflt: 0
                    },
                    autoexpand: {
                        type: "boolean",
                        dflt: !0
                    }
                },
                paper_bgcolor: {
                    type: "color",
                    dflt: I.Color.background
                },
                plot_bgcolor: {
                    type: "color",
                    dflt: I.Color.background
                },
                separators: {
                    type: "string",
                    dflt: ".,"
                },
                hidesources: {
                    type: "boolean",
                    dflt: !1
                },
                smith: {
                    type: "enumerated",
                    values: [ !1 ],
                    dflt: !1
                },
                showlegend: {
                    type: "boolean"
                },
                _hasCartesian: {
                    type: "boolean",
                    dflt: !1
                },
                _hasGL3D: {
                    type: "boolean",
                    dflt: !1
                },
                _hasGeo: {
                    type: "boolean",
                    dflt: !1
                },
                _hasPie: {
                    type: "boolean",
                    dflt: !1
                }
            }, B.supplyLayoutGlobalDefaults = function(t, e) {
                function r(r, n) {
                    return I.Lib.coerce(t, e, B.layoutAttributes, r, n);
                }
                var n = r("font");
                r("title"), r("titlefont", {
                    family: n.family,
                    size: Math.round(1.4 * n.size),
                    color: n.color
                });
                var a = r("autosize", t.width && t.height ? !1 : "initial");
                r("width"), r("height"), r("margin.l"), r("margin.r"), r("margin.t"), r("margin.b"), 
                r("margin.pad"), r("margin.autoexpand"), "initial" !== a && g(e), r("paper_bgcolor"), 
                r("separators"), r("hidesources"), r("smith"), r("_hasCartesian"), r("_hasGL3D"), 
                r("_hasGeo"), r("_hasPie");
            }, B.supplyLayoutModuleDefaults = function(t, e, r) {
                var n, a, o = [ "Axes", "Annotations", "Shapes", "Fx", "Bars", "Boxes", "Gl3dLayout", "GeoLayout", "Pie", "Legend" ];
                for (n = 0; n < o.length; n++) a = o[n], I[a] && I[a].supplyLayoutDefaults(t, e, r);
            }, B.purge = function(t) {
                delete t.data, delete t.layout, delete t._fullData, delete t._fullLayout, delete t.calcdata, 
                delete t.framework, delete t.empty, delete t.fid, delete t.undoqueue, delete t.undonum, 
                delete t.autoplay, delete t.changed, delete t._modules, delete t._tester, delete t._testref, 
                delete t._promises, delete t._redrawTimer, delete t._replotting, delete t.firstscatter, 
                delete t.hmlumcount, delete t.hmpixcount, delete t.numboxes, delete t._hoverTimer, 
                delete t._lastHoverTime;
            }, B.style = function(t) {
                var e, r, n = I.ErrorBars ? t._modules.concat(I.ErrorBars) : t._modules;
                for (e = 0; e < n.length; e++) r = n[e], r.style && r.style(t);
            }, I.extendTraces = function t(e, r, n, a) {
                e = O(e);
                var o = M(e, r, n, a, function(t, e) {
                    return t.concat(e);
                }, function(t, e) {
                    return t.splice(0, t.length - e);
                });
                I.redraw(e);
                var i = [ e, o.update, n, o.maxPoints ];
                I.Queue && I.Queue.add(e, I.prependTraces, i, t, arguments);
            }, I.prependTraces = function t(e, r, n, a) {
                e = O(e);
                var o = M(e, r, n, a, function(t, e) {
                    return e.concat(t);
                }, function(t, e) {
                    return t.splice(e, t.length);
                });
                I.redraw(e);
                var i = [ e, o.update, n, o.maxPoints ];
                I.Queue && I.Queue.add(e, I.extendTraces, i, t, arguments);
            }, I.addTraces = function t(e, r, n) {
                e = O(e);
                var a, o = [], i = I.deleteTraces, l = t, s = [ e, o ], c = [ e, r ];
                for (w(e, r, n), Array.isArray(r) || (r = [ r ]), a = 0; a < r.length; a += 1) e.data.push(r[a]);
                for (a = 0; a < r.length; a++) o.push(-r.length + a);
                if ("undefined" == typeof n) return I.redraw(e), void (I.Queue && I.Queue.add(e, i, s, l, c));
                Array.isArray(n) || (n = [ n ]);
                try {
                    _(e, o, n);
                } catch (t) {
                    throw e.data.splice(e.data.length - r.length, r.length), t;
                }
                I.Queue && I.Queue.startSequence(e), I.Queue && I.Queue.add(e, i, s, l, c), I.moveTraces(e, o, n), 
                I.Queue && I.Queue.stopSequence(e);
            }, I.deleteTraces = function t(e, r) {
                e = O(e);
                var n, a, o = [], i = I.addTraces, l = t, s = [ e, o, r ], c = [ e, r ];
                if ("undefined" == typeof r) throw new Error("indices must be an integer or array of integers.");
                for (Array.isArray(r) || (r = [ r ]), b(e, r, "indices"), r = x(r, e.data.length - 1), 
                r.sort().reverse(), n = 0; n < r.length; n += 1) a = e.data.splice(r[n], 1)[0], 
                o.push(a);
                I.redraw(e), I.Queue && I.Queue.add(e, i, s, l, c);
            }, I.moveTraces = function t(e, r, n) {
                e = O(e);
                var a, o = [], i = [], l = t, s = t, c = [ e, n, r ], d = [ e, r, n ];
                if (_(e, r, n), r = Array.isArray(r) ? r : [ r ], "undefined" == typeof n) for (n = [], 
                a = 0; a < r.length; a++) n.push(-r.length + a);
                for (n = Array.isArray(n) ? n : [ n ], r = x(r, e.data.length - 1), n = x(n, e.data.length - 1), 
                a = 0; a < e.data.length; a++) -1 === r.indexOf(a) && o.push(e.data[a]);
                for (a = 0; a < r.length; a++) i.push({
                    newIndex: n[a],
                    trace: e.data[r[a]]
                });
                for (i.sort(function(t, e) {
                    return t.newIndex - e.newIndex;
                }), a = 0; a < i.length; a += 1) o.splice(i[a].newIndex, 0, i[a].trace);
                e.data = o, I.redraw(e), I.Queue && I.Queue.add(e, l, c, s, d);
            }, I.restyle = function t(e, r, n, a) {
                function o() {
                    return a.map(function() {
                        return void 0;
                    });
                }
                function i(t) {
                    var e = I.Axes.id2name(t);
                    -1 === p.indexOf(e) && p.push(e);
                }
                function l(t) {
                    return "LAYOUT" + t + ".autorange";
                }
                function s(t) {
                    return "LAYOUT" + t + ".range";
                }
                function c(t, r, n) {
                    if (Array.isArray(t)) return void t.forEach(function(t) {
                        c(t, r, n);
                    });
                    if (!(t in f)) {
                        var i;
                        i = "LAYOUT" === t.substr(0, 6) ? I.Lib.nestedProperty(e.layout, t.replace("LAYOUT", "")) : I.Lib.nestedProperty(e.data[a[n]], t), 
                        t in M || (M[t] = o()), void 0 === M[t][n] && (M[t][n] = i.get()), void 0 !== r && i.set(r);
                    }
                }
                e = O(e);
                var d, u = e._fullLayout, f = {};
                if ("string" == typeof r) f[r] = n; else {
                    if (!$.isPlainObject(r)) return void console.log("restyle fail", r, n, a);
                    f = r, void 0 === a && (a = n);
                }
                Object.keys(f).length && (e.changed = !0), N(a) ? a = [ a ] : Array.isArray(a) && a.length || (a = e._fullData.map(function(t, e) {
                    return e;
                }));
                var h = [ "mode", "visible", "type", "orientation", "fill", "histfunc", "histnorm", "text", "x", "y", "z", "xtype", "x0", "dx", "ytype", "y0", "dy", "xaxis", "yaxis", "line.width", "connectgaps", "transpose", "zsmooth", "showscale", "marker.showscale", "zauto", "marker.cauto", "autocolorscale", "marker.autocolorscale", "colorscale", "marker.colorscale", "reversescale", "marker.reversescale", "autobinx", "nbinsx", "xbins", "xbins.start", "xbins.end", "xbins.size", "autobiny", "nbinsy", "ybins", "ybins.start", "ybins.end", "ybins.size", "autocontour", "ncontours", "contours", "contours.coloring", "error_y", "error_y.visible", "error_y.value", "error_y.type", "error_y.traceref", "error_y.array", "error_y.symmetric", "error_y.arrayminus", "error_y.valueminus", "error_y.tracerefminus", "error_x", "error_x.visible", "error_x.value", "error_x.type", "error_x.traceref", "error_x.array", "error_x.symmetric", "error_x.arrayminus", "error_x.valueminus", "error_x.tracerefminus", "swapxy", "swapxyaxes", "orientationaxes", "colors", "values", "labels", "label0", "dlabel", "sort", "textinfo", "textposition", "textfont.size", "textfont.family", "textfont.color", "insidetextfont.size", "insidetextfont.family", "insidetextfont.color", "outsidetextfont.size", "outsidetextfont.family", "outsidetextfont.color", "hole", "scalegroup", "domain", "domain.x", "domain.y", "domain.x[0]", "domain.x[1]", "domain.y[0]", "domain.y[1]", "tilt", "tiltaxis", "depth", "direction", "rotation", "pull" ];
                for (d = 0; d < a.length; d++) if (B.traceIs(e._fullData[a[d]], "box")) {
                    h.push("name");
                    break;
                }
                var p, g = [ "marker", "marker.size", "textfont", "boxpoints", "jitter", "pointpos", "whiskerwidth", "boxmean" ], m = [ "zmin", "zmax", "zauto", "marker.cmin", "marker.cmax", "marker.cauto", "contours.start", "contours.end", "contours.size", "contours.showlines", "line", "line.smoothing", "line.shape", "error_y.width", "error_x.width", "error_x.copy_ystyle", "marker.maxdisplayed" ], y = [ "type", "x", "y", "x0", "y0", "orientation", "xaxis", "yaxis" ], v = !1, x = !1, b = !1, _ = !1, w = !1, k = !1, A = {}, M = {}, z = {};
                (u._hasGL3D || u._hasGeo) && (b = !0);
                var C = [ "zmin", "zmax" ], D = [ "xbins.start", "xbins.end", "xbins.size" ], S = [ "ybins.start", "ybins.end", "ybins.size" ], P = [ "contours.start", "contours.end", "contours.size" ];
                for (var T in f) {
                    var E, j, F, R, H, V = f[T];
                    if (A[T] = V, "LAYOUT" !== T.substr(0, 6)) {
                        for (M[T] = o(), d = 0; d < a.length; d++) {
                            if (E = e.data[a[d]], j = e._fullData[a[d]], F = I.Lib.nestedProperty(E, T), R = F.get(), 
                            H = Array.isArray(V) ? V[d % V.length] : V, -1 !== C.indexOf(T)) c("zauto", !1, d); else if ("colorscale" === T) c("autocolorscale", !1, d); else if ("autocolorscale" === T) c("colorscale", void 0, d); else if ("marker.colorscale" === T) c("marker.autocolorscale", !1, d); else if ("marker.autocolorscale" === T) c("marker.colorscale", void 0, d); else if ("zauto" === T) c(C, void 0, d); else if (-1 !== D.indexOf(T)) c("autobinx", !1, d); else if ("autobinx" === T) c(D, void 0, d); else if (-1 !== S.indexOf(T)) c("autobiny", !1, d); else if ("autobiny" === T) c(S, void 0, d); else if (-1 !== P.indexOf(T)) c("autocontour", !1, d); else if ("autocontour" === T) c(P, void 0, d); else if (-1 !== [ "x0", "dx" ].indexOf(T) && j.x && "scaled" !== j.xtype) c("xtype", "scaled", d); else if (-1 !== [ "y0", "dy" ].indexOf(T) && j.y && "scaled" !== j.ytype) c("ytype", "scaled", d); else if ("colorbar.thicknessmode" === T && F.get() !== H && -1 !== [ "fraction", "pixels" ].indexOf(H) && j.colorbar) {
                                var q = -1 !== [ "top", "bottom" ].indexOf(j.colorbar.orient) ? u.height - u.margin.t - u.margin.b : u.width - u.margin.l - u.margin.r;
                                c("colorbar.thickness", j.colorbar.thickness * ("fraction" === H ? 1 / q : q), d);
                            } else if ("colorbar.lenmode" === T && F.get() !== H && -1 !== [ "fraction", "pixels" ].indexOf(H) && j.colorbar) {
                                var Z = -1 !== [ "top", "bottom" ].indexOf(j.colorbar.orient) ? u.width - u.margin.l - u.margin.r : u.height - u.margin.t - u.margin.b;
                                c("colorbar.len", j.colorbar.len * ("fraction" === H ? 1 / Z : Z), d);
                            } else "colorbar.tick0" === T || "colorbar.dtick" === T ? c("colorbar.tickmode", "linear", d) : "colorbar.tickmode" === T && c([ "colorbar.tick0", "colorbar.dtick" ], void 0, d);
                            if ("type" === T && "pie" === H != ("pie" === R)) {
                                var X = "x", G = "y";
                                "bar" !== H && "bar" !== R || "h" !== E.orientation || (X = "y", G = "x"), I.Lib.swapAttrs(E, [ "?", "?src" ], "labels", X), 
                                I.Lib.swapAttrs(E, [ "d?", "?0" ], "label", X), I.Lib.swapAttrs(E, [ "?", "?src" ], "values", G), 
                                "pie" === R ? u._pielayer.selectAll("g.trace").remove() : B.traceIs(E, "cartesian") && (z[E.xaxis || "x"] = !0, 
                                z[E.yaxis || "y"] = !0);
                            }
                            M[T][d] = R;
                            var Y = [ "swapxy", "swapxyaxes", "orientation", "orientationaxes" ];
                            if (-1 !== Y.indexOf(T)) {
                                if ("orientation" === T) {
                                    if (F.set(H), F.get() === M[T][d]) continue;
                                } else "orientationaxes" === T && (E.orientation = {
                                    v: "h",
                                    h: "v"
                                }[j.orientation]);
                                L(E);
                            } else F.set(H);
                        }
                        if (-1 !== [ "swapxyaxes", "orientationaxes" ].indexOf(T) && I.Axes.swap(e, a), 
                        "orientationaxes" === T) {
                            var U = I.Lib.nestedProperty(e.layout, "hovermode");
                            "x" === U.get() ? U.set("y") : "y" === U.get() && U.set("x");
                        }
                        if (-1 !== a.indexOf(0) && -1 !== y.indexOf(T) && (I.Axes.clearTypes(e, a), v = !0), 
                        (-1 === [ "autobinx", "autobiny", "zauto" ].indexOf(T) || H !== !1) && (w = !0), 
                        (-1 !== [ "colorbar", "line" ].indexOf(F.parts[0]) || "marker" === F.parts[0] && "colorbar" === F.parts[1]) && (k = !0), 
                        -1 !== h.indexOf(T)) {
                            if (-1 !== [ "orientation", "type" ].indexOf(T)) {
                                for (p = [], d = 0; d < a.length; d++) {
                                    var J = e.data[a[d]];
                                    B.traceIs(J, "cartesian") && (i(J.xaxis || "x"), i(J.yaxis || "y"), "type" === r && c([ "autobinx", "autobiny" ], !0, d));
                                }
                                c(p.map(l), !0, 0), c(p.map(s), [ 0, 1 ], 0);
                            }
                            v = !0;
                        } else -1 !== m.indexOf(T) ? b = !0 : -1 !== g.indexOf(T) && (x = !0);
                    } else F = I.Lib.nestedProperty(e.layout, T.replace("LAYOUT", "")), M[T] = [ F.get() ], 
                    F.set(Array.isArray(V) ? V[0] : V), v = !0;
                }
                var Q = Object.keys(z);
                t: for (d = 0; d < Q.length; d++) {
                    for (var W = Q[d], K = W.charAt(0), te = K + "axis", ee = 0; ee < e.data.length; ee++) if (B.traceIs(e.data[ee], "cartesian") && (e.data[ee][te] || K) === W) continue t;
                    c("LAYOUT" + I.Axes.id2name(W), null, 0);
                }
                I.Queue && I.Queue.add(e, t, [ e, M, a ], t, [ e, A, a ]);
                var re = !1;
                I.Axes.list(e).forEach(function(t) {
                    t.autorange && (re = !0);
                }), (v || _ || x && re) && (e.calcdata = void 0);
                var ne;
                _ ? ne = [ function() {
                    var t = e.layout;
                    return e.layout = void 0, I.plot(e, "", t);
                } ] : v || b || x ? ne = [ I.plot ] : (B.supplyDefaults(e), ne = [ B.previousPromises ], 
                w && ne.push(function() {
                    var t, r, n;
                    for (t = 0; t < e.calcdata.length; t++) r = e.calcdata[t], n = (((r[0] || {}).trace || {})._module || {}).arraysToCalcdata, 
                    n && n(r);
                    return B.style(e), I.Legend.draw(e), B.previousPromises(e);
                }), k && ne.push(function() {
                    return e.calcdata.forEach(function(t) {
                        if ((t[0].t || {}).cb) {
                            var e = t[0].trace, r = t[0].t.cb;
                            B.traceIs(e, "contour") && r.line({
                                width: e.contours.showlines !== !1 ? e.line.width : 0,
                                dash: e.line.dash,
                                color: "line" === e.contours.coloring ? r._opts.line.color : e.line.color
                            }), B.traceIs(e, "markerColorscale") ? r.options(e.marker.colorbar)() : r.options(e.colorbar)();
                        }
                    }), B.previousPromises(e);
                }));
                var ae = I.Lib.syncOrAsync(ne, e);
                return ae && ae.then || (ae = Promise.resolve()), ae.then(function() {
                    $(e).trigger("plotly_restyle", $.extend(!0, [], [ A, a ]));
                });
            }, I.relayout = function t(e, r, n) {
                function a(t, e) {
                    if (Array.isArray(t)) return void t.forEach(function(t) {
                        a(t, e);
                    });
                    if (!(t in h)) {
                        var r = I.Lib.nestedProperty(f, t);
                        t in A || (A[t] = r.get()), void 0 !== e && r.set(e);
                    }
                }
                function o(t, r) {
                    var n = I.Axes.id2name(t[r + "ref"] || r);
                    return (e._fullLayout[n] || {}).autorange;
                }
                if (e = O(e), !e.framework || !e.framework.isPolar) {
                    var i, l, s, c, d, u, f = e.layout, h = {}, p = !1, g = !1, m = !1, y = !1, v = !1, x = !1, b = !1;
                    if ("string" == typeof r) h[r] = n; else {
                        if (!$.isPlainObject(r)) return void console.log("relayout fail", r, n);
                        h = r;
                    }
                    Object.keys(h).length && (e.changed = !0), s = Object.keys(h), l = I.Axes.list(e);
                    for (var _ = 0; _ < s.length; _++) {
                        if (0 === s[_].indexOf("allaxes")) {
                            for (var w = 0; w < l.length; w++) d = l[w]._id.substr(1), u = -1 !== d.indexOf("scene") ? d + "." : "", 
                            i = s[_].replace("allaxes", u + l[w]._name), h[i] || (h[i] = h[s[_]]);
                            delete h[s[_]];
                        }
                        s[_].match(/^annotations\[[0-9-]+\].ref$/) && (c = h[s[_]].split("y"), h[s[_].replace("ref", "xref")] = c[0], 
                        h[s[_].replace("ref", "yref")] = 2 === c.length ? "y" + c[1] : "paper", delete h[s[_]]);
                    }
                    var k = {}, A = {}, M = [ "height", "width" ];
                    for (var L in h) {
                        var z = I.Lib.nestedProperty(f, L), C = h[L], S = z.parts.length, P = "string" == typeof z.parts[S - 1] ? S - 1 : S - 2, E = z.parts[P], j = z.parts[P - 1] + "." + E, N = z.parts.slice(0, P).join("."), F = I.Lib.nestedProperty(e.layout, N).get(), R = I.Lib.nestedProperty(e._fullLayout, N).get();
                        if (k[L] = C, A[L] = "reverse" === E ? C : z.get(), -1 !== M.indexOf(L) ? a("autosize", !1) : "autosize" === L ? a(M, void 0) : j.match(/^[xyz]axis[0-9]*\.range(\[[0|1]\])?$/) ? a(N + ".autorange", !1) : j.match(/^[xyz]axis[0-9]*\.autorange$/) ? a([ N + ".range[0]", N + ".range[1]" ], void 0) : j.match(/^aspectratio\.[xyz]$/) ? a(z.parts[0] + ".aspectmode", "manual") : j.match(/^aspectmode$/) ? a([ N + ".x", N + ".y", N + ".z" ], void 0) : "tick0" === E || "dtick" === E ? a(N + ".tickmode", "linear") : "tickmode" === E && a([ N + ".tick0", N + ".dtick" ], void 0), 
                        "type" === E && "log" === R.type != ("log" === C)) {
                            var H = F;
                            if (H && H.range) if (R.autorange) "log" === C && (H.range = H.range[1] > H.range[0] ? [ 1, 2 ] : [ 2, 1 ]); else {
                                var V = H.range[0], q = H.range[1];
                                "log" === C ? (0 >= V && 0 >= q && a(N + ".autorange", !0), 0 >= V ? V = q / 1e6 : 0 >= q && (q = V / 1e6), 
                                a(N + ".range[0]", Math.log(V) / Math.LN10), a(N + ".range[1]", Math.log(q) / Math.LN10)) : (a(N + ".range[0]", Math.pow(10, V)), 
                                a(N + ".range[1]", Math.pow(10, q)));
                            } else a(N + ".autorange", !0);
                        }
                        if ("reverse" === E) F.range ? F.range.reverse() : (a(N + ".autorange", !0), F.range = [ 1, 0 ]), 
                        R.autorange ? v = !0 : y = !0; else if ("annotations" === z.parts[0] || "shapes" === z.parts[0]) {
                            var Z = z.parts[1], X = z.parts[0], G = f[X] || [], Y = I[I.Lib.titleCase(X)], U = G[Z] || {};
                            2 === z.parts.length && ("add" === h[L] || $.isPlainObject(h[L]) ? A[L] = "remove" : "remove" === h[L] ? -1 === Z ? (A[X] = G, 
                            delete A[L]) : A[L] = U : console.log("???", h)), !o(U, "x") && !o(U, "y") || I.Lib.containsAny(L, [ "color", "opacity", "align", "dash" ]) || (v = !0), 
                            Y.draw(e, Z, z.parts.slice(2).join("."), h[L]), delete h[L];
                        } else 0 === z.parts[0].indexOf("scene") ? y = !0 : 0 === z.parts[0].indexOf("geo") ? y = !0 : "hiddenlabels" === L ? v = !0 : -1 !== z.parts[0].indexOf("legend") ? p = !0 : -1 !== L.indexOf("title") ? g = !0 : -1 !== z.parts[0].indexOf("bgcolor") ? m = !0 : z.parts.length > 1 && I.Lib.containsAny(z.parts[1], [ "tick", "exponent", "grid", "zeroline" ]) ? g = !0 : -1 !== L.indexOf(".linewidth") && -1 !== L.indexOf("axis") ? g = m = !0 : z.parts.length > 1 && -1 !== z.parts[1].indexOf("line") ? m = !0 : z.parts.length > 1 && "mirror" === z.parts[1] ? g = m = !0 : "margin.pad" === L ? g = m = !0 : "margin" === z.parts[0] || "autorange" === z.parts[1] || "rangemode" === z.parts[1] || "type" === z.parts[1] || "domain" === z.parts[1] || L.match(/^(bar|box|font)/) ? v = !0 : "hovermode" === L ? x = !0 : "dragmode" === L ? b = !0 : -1 === [ "hovermode", "dragmode", "height", "width", "autosize" ].indexOf(L) && (y = !0), 
                        z.set(C);
                    }
                    I.Queue && I.Queue.add(e, t, [ e, A ], t, [ e, k ]), h.autosize && (h = D(e, h)), 
                    (h.height || h.width || h.autosize) && (v = !0);
                    var J = Object.keys(h), Q = [ B.previousPromises ];
                    if (y || v) Q.push(function() {
                        return e.layout = void 0, v && (e.calcdata = void 0), I.plot(e, "", f);
                    }); else if (J.length) {
                        B.supplyDefaults(e), p && Q.push(function() {
                            return I.Legend.draw(e), B.previousPromises(e);
                        }), m && Q.push(T), g && Q.push(function() {
                            return I.Axes.doTicks(e, "redraw"), B.titles(e, "gtitle"), B.previousPromises(e);
                        }), x && I.Fx.modeBar(e);
                        var W;
                        if (b) for (W = B.getSubplotIds(e._fullLayout, "gl3d"), _ = 0; _ < W.length; _++) d = e._fullLayout[W[_]]._scene, 
                        d.handleDragmode(e._fullLayout.dragmode);
                    }
                    var K = I.Lib.syncOrAsync(Q, e);
                    return K && K.then || (K = Promise.resolve()), K.then(function() {
                        $(e).trigger("plotly_relayout", $.extend(!0, {}, k));
                    });
                }
            }, B.resize = function(t) {
                t = O(t), t._context.workspace && setFileAndCommentsSize(t), t && "none" !== $(t).css("display") && (t._redrawTimer && clearTimeout(t._redrawTimer), 
                t._redrawTimer = setTimeout(function() {
                    if ((t._fullLayout || {}).autosize) {
                        var e = t.changed;
                        t.autoplay = !0, I.relayout(t, {
                            autosize: !0
                        }), t.changed = e;
                    }
                }, 100)), z(t);
            }, B.autoMargin = function(t, e, r) {
                var n = t._fullLayout;
                if (n._pushmargin || (n._pushmargin = {}), n.margin.autoexpand !== !1) {
                    if (r) {
                        var a = r.pad || 12;
                        r.l + r.r > .5 * n.width && (r.l = r.r = 0), r.b + r.t > .5 * n.height && (r.b = r.t = 0), 
                        n._pushmargin[e] = {
                            l: {
                                val: r.x,
                                size: r.l + a
                            },
                            r: {
                                val: r.x,
                                size: r.r + a
                            },
                            b: {
                                val: r.y,
                                size: r.b + a
                            },
                            t: {
                                val: r.y,
                                size: r.t + a
                            }
                        };
                    } else delete n._pushmargin[e];
                    t._replotting || P(t);
                }
            }, B.titles = function(t, e) {
                function r(t) {
                    I.Lib.syncOrAsync([ n, a ], t);
                }
                function n(e) {
                    return e.attr("transform", A ? "rotate(" + [ A.rotate, s.x, s.y ] + ") translate(0, " + A.offset + ")" : null), 
                    e.style({
                        "font-family": _,
                        "font-size": d3.round(w, 2) + "px",
                        fill: I.Color.rgb(k),
                        opacity: C * I.Color.opacity(k)
                    }).attr(s).call(I.util.convertToTspans).attr(s), e.selectAll("tspan.line").attr(s), 
                    B.previousPromises(t);
                }
                function a(t) {
                    var e = d3.select(t.node().parentNode);
                    if (L && L.selection && L.side && S) {
                        e.attr("transform", null);
                        var r = 0, n = {
                            left: "right",
                            right: "left",
                            top: "bottom",
                            bottom: "top"
                        }[L.side], a = -1 !== [ "left", "top" ].indexOf(L.side) ? -1 : 1, o = N(L.pad) ? L.pad : 2, i = I.Drawing.bBox(e.node()), l = {
                            left: 0,
                            top: 0,
                            right: c.width,
                            bottom: c.height
                        }, s = f ? c.width : (l[L.side] - i[L.side]) * ("left" === L.side || "top" === L.side ? -1 : 1);
                        if (0 > s ? r = s : (i.left -= L.offsetLeft, i.right -= L.offsetLeft, i.top -= L.offsetTop, 
                        i.bottom -= L.offsetTop, L.selection.each(function() {
                            var t = I.Drawing.bBox(this);
                            I.Lib.bBoxIntersect(i, t, o) && (r = Math.max(r, a * (t[L.side] - i[n]) + o));
                        }), r = Math.min(s, r)), r > 0 || 0 > s) {
                            var d = {
                                left: [ -r, 0 ],
                                right: [ r, 0 ],
                                top: [ 0, -r ],
                                bottom: [ 0, r ]
                            }[L.side];
                            e.attr("transform", "translate(" + d + ")");
                        }
                    }
                }
                function o() {
                    C = 0, D = !0, S = j, c._infolayer.select("." + e).attr({
                        "data-unformatted": S
                    }).text(S).on("mouseover.opacity", function() {
                        d3.select(this).transition().duration(100).style("opacity", 1);
                    }).on("mouseout.opacity", function() {
                        d3.select(this).transition().duration(1e3).style("opacity", 0);
                    });
                }
                if (t = O(t), !e) return I.Axes.listIds(t).forEach(function(e) {
                    B.titles(t, e + "title");
                }), void B.titles(t, "gtitle");
                var i, l, s, c = t._fullLayout, d = c._size, u = e.charAt(0), f = "cb" === e.substr(1, 2);
                if (f) {
                    var h = e.substr(3).replace("title", "");
                    t._fullData.some(function(e, r) {
                        return e.uid === h ? (i = r, l = t.calcdata[r][0].t.cb.axis, !0) : void 0;
                    });
                } else l = c[I.Axes.id2name(e.replace("title", ""))] || c;
                var p, g, m, y, v, x = l === c ? "title" : l._name + ".title", b = f ? "colorscale" : (l._id || u).toUpperCase() + " axis", _ = l.titlefont.family, w = l.titlefont.size, k = l.titlefont.color, A = "", M = {}, L = {
                    selection: d3.select(t).selectAll("g." + l._id + "tick"),
                    side: l.side
                }, z = f ? 0 : 1.5;
                f ? (L.offsetLeft = d.l, L.offsetTop = d.t) : L.selection.size() && (v = d3.select(L.selection.node().parentNode).attr("transform").match(/translate\(([-\.\d]+),([-\.\d]+)\)/), 
                v && (L.offsetLeft = +v[1], L.offsetTop = +v[2])), f && l.titleside ? (p = d.l + l.titlex * d.w, 
                g = d.t + (1 - l.titley) * d.h + ("top" === l.titleside ? 3 + .75 * w : -3 - .25 * w), 
                s = {
                    x: p,
                    y: g,
                    "text-anchor": "start"
                }, L = {}, e = "h" + e) : "x" === u ? (m = l, y = "free" === m.anchor ? {
                    _offset: d.t + (1 - (m.position || 0)) * d.h,
                    _length: 0
                } : I.Axes.getFromId(t, m.anchor), p = m._offset + m._length / 2, g = y._offset + ("top" === m.side ? -10 - w * (z + (m.showticklabels ? 1 : 0)) : y._length + 10 + w * (z + (m.showticklabels ? 1.5 : .5))), 
                s = {
                    x: p,
                    y: g,
                    "text-anchor": "middle"
                }, L.side || (L.side = "bottom")) : "y" === u ? (y = l, m = "free" === y.anchor ? {
                    _offset: d.l + (y.position || 0) * d.w,
                    _length: 0
                } : I.Axes.getFromId(t, y.anchor), g = y._offset + y._length / 2, p = m._offset + ("right" === y.side ? m._length + 10 + w * (z + (y.showticklabels ? 1 : .5)) : -10 - w * (z + (y.showticklabels ? .5 : 0))), 
                M = {
                    center: 0
                }, s = {
                    x: p,
                    y: g,
                    "text-anchor": "middle"
                }, A = {
                    rotate: "-90",
                    offset: 0
                }, L.side || (L.side = "left")) : (b = "Plot", w = c.titlefont.size, p = c.width / 2, 
                g = c._size.t / 2, s = {
                    x: p,
                    y: g,
                    "text-anchor": "middle"
                }, L = {});
                var C = 1, D = !1, S = l.title.trim();
                "" === S && (C = 0), S.match(/Click to enter .+ title/) && (C = .2, D = !0);
                var P;
                if (f) {
                    P = d3.select(t).selectAll("." + l._id.substr(1) + " .cbtitle");
                    var T = "h" === e.charAt(0) ? e.substr(1) : "h" + e;
                    P.selectAll("." + T + ",." + T + "-math-group").remove();
                } else P = c._infolayer.selectAll(".g-" + e).data([ 0 ]), P.enter().append("g").classed("g-" + e, !0);
                var E = P.selectAll("text").data([ 0 ]);
                E.enter().append("text"), E.text(S).attr("class", e), E.attr({
                    "data-unformatted": S
                }).call(r);
                var j = "Click to enter " + b.replace(/\d+/, "") + " title";
                t._context.editable ? (S || o(), E.call(I.util.makeEditable).on("edit", function(e) {
                    if (f) {
                        var r = t._fullData[i];
                        B.traceIs(r, "markerColorscale") ? I.restyle(t, "marker.colorbar.title", e, i) : I.restyle(t, "colorbar.title", e, i);
                    } else I.relayout(t, x, e);
                }).on("cancel", function() {
                    this.text(this.attr("data-unformatted")).call(r);
                }).on("input", function(t) {
                    this.text(t || " ").attr(s).selectAll("tspan.line").attr(s);
                })) : (!S || S.match(/Click to enter .+ title/)) && E.remove(), E.classed("js-placeholder", D);
            }, B.graphJson = function(t, e, r, n, a) {
                function o(t) {
                    if ("function" == typeof t) return null;
                    if ($.isPlainObject(t)) {
                        var e, n = {};
                        for (e in t) if ("function" != typeof t[e] && -1 === [ "_", "[" ].indexOf(e.charAt(0))) {
                            if ("keepdata" === r) {
                                if ("src" === e.substr(e.length - 3)) continue;
                            } else if ("keepall" !== r) {
                                var a = t[e + "src"];
                                if ("string" == typeof a && a.indexOf(":") > 0) continue;
                            }
                            n[e] = o(t[e]);
                        }
                        return n;
                    }
                    return Array.isArray(t) ? t.map(o) : t && t.getTime ? I.Lib.ms2DateTime(t) : t;
                }
                t = O(t), (a && e && !t._fullData || a && !e && !t._fullLayout) && B.supplyDefaults(t);
                var i = a ? t._fullData : t.data, l = a ? t._fullLayout : t.layout, s = {
                    data: (i || []).map(function(t) {
                        var r = o(t);
                        return e && delete r.fit, r;
                    })
                };
                return e || (s.layout = o(l)), t.framework && t.framework.isPolar && (s = t.framework.getConfig()), 
                "object" === n ? s : JSON.stringify(s);
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27,
            "gl-mat4/fromQuat": 5
        } ],
        18: [ function(t, e) {
            "use strict";
            function r() {
                var t = n.Plots;
                return t.allTypes.forEach(function(t) {
                    o[t] = {}, i.getAttributes(t), i.getLayoutAttributes(t);
                }), o;
            }
            var n = t("./plotly"), a = t("object-assign"), o = {}, i = {}, l = "_nestedModules", s = "_composedModules";
            e.exports = r, i.getAttributes = function(t) {
                var e, r = n.Plots.attributes, l = {};
                l = a(l, r), e = i.getModule({
                    type: t
                }), l = i.coupleAttrs(e.attributes, l, "attributes", t), l.type = t, l = i.removeUnderscoreAttrs(l), 
                o[t].attributes = l;
            }, i.getLayoutAttributes = function(t) {
                var e, r = n.Plots, l = r.layoutAttributes, s = {};
                s = a(s, l), s = a(s, n.Fx.layoutAttributes), s.legend = n.Legend.layoutAttributes, 
                r.traceIs(t, "gl3d") ? (e = n.Gl3dLayout.layoutAttributes, e = i.coupleAttrs(e, {}, "layoutAttributes", "-"), 
                s.scene = e) : (s.xaxis = n.Axes.layoutAttributes, s.yaxis = n.Axes.layoutAttributes, 
                s.annotations = n.Annotations.layoutAttributes), s = i.removeUnderscoreAttrs(s), 
                o[t].layoutAttributes = s;
            }, i.coupleAttrs = function(t, e, r, o) {
                var c, d, u, f, h;
                return Object.keys(t).forEach(function(p) {
                    return p === l ? void Object.keys(t[p]).forEach(function(a) {
                        c = i.getModule({
                            module: t[p][a]
                        }), void 0 !== c && (d = c[r], u = i.coupleAttrs(d, {}, r, o), n.Lib.nestedProperty(e, a).set(u));
                    }) : p === s ? void Object.keys(t[p]).forEach(function(n) {
                        n === o && (f = i.getModule({
                            module: t[p][n]
                        }), void 0 !== f && (h = f[r], h = i.coupleAttrs(h, {}, r, o), e = a(e, h)));
                    }) : void (e[p] = t[p]);
                }), e;
            }, i.getModule = function(t) {
                return "type" in t ? n.Plots.getModule({
                    type: t.type
                }) : "module" in t ? n[t.module] : void 0;
            }, i.removeUnderscoreAttrs = function(t) {
                return Object.keys(t).forEach(function(e) {
                    "_" === e.charAt(0) && delete t[e];
                }), t;
            };
        }, {
            "./plotly": 27,
            "object-assign": 6
        } ],
        19: [ function(t, e) {
            "use strict";
            function r(t, e) {
                var r = e(t), n = r ? e(t + "type", "array") : "scaled";
                return "scaled" === n && (e(t + "0"), e("d" + t)), r;
            }
            function n(t) {
                for (var e, r = !0, n = !1, a = !1, o = 0; o < t.length; o++) {
                    if (e = t[o], !Array.isArray(e)) {
                        r = !1;
                        break;
                    }
                    e.length > 0 && (n = !0);
                    for (var i = 0; i < e.length; i++) if (p(e[i])) {
                        a = !0;
                        break;
                    }
                }
                return r && n && a;
            }
            function a(t) {
                return p(t) ? +t : void 0;
            }
            function o(t, e, r, n, a, o) {
                var i, l, s, c = [], d = f.Plots.traceIs(t, "contour"), u = f.Plots.traceIs(t, "histogram");
                if (Array.isArray(e) && !u && "category" !== o.type) {
                    e = e.map(o.d2c);
                    var h = e.length;
                    if (!(a >= h)) return e.slice(0, a + 1);
                    if (d) c = e.slice(0, a); else if (1 === a) c = [ e[0] - .5, e[0] + .5 ]; else {
                        for (c = [ 1.5 * e[0] - .5 * e[1] ], s = 1; h > s; s++) c.push(.5 * (e[s - 1] + e[s]));
                        c.push(1.5 * e[h - 1] - .5 * e[h - 2]);
                    }
                    if (a > h) {
                        var p = c[c.length - 1], g = p - c[c.length - 2];
                        for (s = h; a > s; s++) p += g, c.push(p);
                    }
                } else for (l = n || 1, i = void 0 === r ? 0 : u || "category" === o.type ? r : o.d2c(r), 
                s = d ? 0 : -.5; a > s; s++) c.push(i + l * s);
                return c;
            }
            function i(t) {
                return .5 - .25 * Math.min(1, .5 * t);
            }
            function l(t, e, r) {
                var n, a, o = 1;
                if (Array.isArray(r)) for (n = 0; n < e.length; n++) a = e[n], t[a[0]][a[1]] = r[a[0]][a[1]]; else c(t, e);
                for (n = 0; n < e.length && !(e[n][2] < 4); n++) ;
                for (e = e.slice(n), n = 0; 100 > n && o > y; n++) o = c(t, e, i(o));
                return o > y && console.log("interp2d didn't converge quickly", o), t;
            }
            function s(t) {
                var e, r, n, a, o, i, l, s, c = [], d = {}, f = [], h = t[0], p = [], g = [ 0, 0, 0 ], m = u.maxRowLength(t);
                for (r = 0; r < t.length; r++) for (e = p, p = h, h = t[r + 1] || [], n = 0; m > n; n++) void 0 === p[n] && (i = (void 0 !== p[n - 1] ? 1 : 0) + (void 0 !== p[n + 1] ? 1 : 0) + (void 0 !== e[n] ? 1 : 0) + (void 0 !== h[n] ? 1 : 0), 
                i ? (0 === r && i++, 0 === n && i++, r === t.length - 1 && i++, n === p.length - 1 && i++, 
                4 > i && (d[[ r, n ]] = [ r, n, i ]), c.push([ r, n, i ])) : f.push([ r, n ]));
                for (;f.length; ) {
                    for (l = {}, s = !1, o = f.length - 1; o >= 0; o--) a = f[o], r = a[0], n = a[1], 
                    i = ((d[[ r - 1, n ]] || g)[2] + (d[[ r + 1, n ]] || g)[2] + (d[[ r, n - 1 ]] || g)[2] + (d[[ r, n + 1 ]] || g)[2]) / 20, 
                    i && (l[a] = [ r, n, i ], f.splice(o, 1), s = !0);
                    if (!s) throw "findEmpties iterated with no new neighbors";
                    for (a in l) d[a] = l[a], c.push(l[a]);
                }
                return c.sort(function(t, e) {
                    return e[2] - t[2];
                });
            }
            function c(t, e, r) {
                var n, a, o, i, l, s, c, d, u, f, h, p, g, m = 0;
                for (i = 0; i < e.length; i++) {
                    for (n = e[i], a = n[0], o = n[1], h = t[a][o], f = 0, u = 0, l = 0; 4 > l; l++) s = v[l], 
                    c = t[a + s[0]], c && (d = c[o + s[1]], void 0 !== d && (0 === f ? p = g = d : (p = Math.min(p, d), 
                    g = Math.max(g, d)), u++, f += d));
                    if (0 === u) throw "iterateInterp2d order is wrong: no defined neighbors";
                    t[a][o] = f / u, void 0 === h ? 4 > u && (m = 1) : (t[a][o] = (1 + r) * t[a][o] - r * h, 
                    g > p && (m = Math.max(m, Math.abs(t[a][o] - h) / (g - p))));
                }
                return m;
            }
            function d(t, e, r) {
                function n(t, e) {
                    var r = e.length - 2, n = f.Lib.constrain(f.Lib.findBin(t, e), 0, r), a = e[n], o = e[n + 1], i = f.Lib.constrain(n + (t - a) / (o - a) - .5, 0, r), l = Math.round(i), s = Math.abs(i - l);
                    return i && i !== r && s ? {
                        bin0: l,
                        frac: s,
                        bin1: Math.round(l + s / (i - l))
                    } : {
                        bin0: l,
                        bin1: l,
                        frac: 0
                    };
                }
                function a(t, e) {
                    if (void 0 !== t) {
                        var r = Z((t - A) / (M - A));
                        return r[0] = Math.round(r[0]), r[1] = Math.round(r[1]), r[2] = Math.round(r[2]), 
                        ee += e, re += r[0] * e, ne += r[1] * e, ae += r[2] * e, r;
                    }
                    return [ 0, 0, 0, 0 ];
                }
                function o(t, e, r) {
                    t[e] = r[0], t[e + 1] = r[1], t[e + 2] = r[2], t[e + 3] = Math.round(255 * r[3]);
                }
                function i(t, e, r, n) {
                    var o = t[r.bin0];
                    if (void 0 === o) return a(void 0, 1);
                    var i, l = t[r.bin1], s = e[r.bin0], c = e[r.bin1], d = l - o || 0, u = s - o || 0;
                    return i = void 0 === l ? void 0 === c ? 0 : void 0 === s ? 2 * (c - o) : 2 * (2 * c - s - o) / 3 : void 0 === c ? void 0 === s ? 0 : 2 * (2 * o - l - s) / 3 : void 0 === s ? 2 * (2 * c - l - o) / 3 : c + o - l - s, 
                    a(o + r.frac * d + n.frac * (u + r.frac * i));
                }
                f.Lib.markTime("in Heatmap.plot");
                var l = r[0].trace, s = l.uid, c = e.x(), d = e.y(), p = t._fullLayout, g = "hm" + s, m = "cb" + s;
                if (p._paper.selectAll(".contour" + s).remove(), l.visible !== !0) return p._paper.selectAll("." + g).remove(), 
                void p._paper.selectAll("." + m).remove();
                var y, v, x, b, _, w, k = r[0].z, A = l.zmin, M = l.zmax, L = f.Colorscale.getScale(l.colorscale), z = r[0].x, C = r[0].y, D = f.Plots.traceIs(l, "contour"), O = D ? "best" : l.zsmooth, S = k.length, P = u.maxRowLength(k), T = !1, E = !1;
                for (w = 0; void 0 === y && w < z.length - 1; ) y = c.c2p(z[w]), w++;
                for (w = z.length - 1; void 0 === v && w > 0; ) v = c.c2p(z[w]), w--;
                for (y > v && (x = v, v = y, y = x, T = !0), w = 0; void 0 === b && w < C.length - 1; ) b = d.c2p(C[w]), 
                w++;
                for (w = C.length - 1; void 0 === _ && w > 0; ) _ = d.c2p(C[w]), w--;
                if (b > _ && (x = b, b = _, _ = x, E = !0), D && (z = r[0].xfill, C = r[0].yfill), 
                "fast" !== O) {
                    var I = "best" === O ? 0 : .5;
                    y = Math.max(-I * c._length, y), v = Math.min((1 + I) * c._length, v), b = Math.max(-I * d._length, b), 
                    _ = Math.min((1 + I) * d._length, _);
                }
                var j = Math.round(v - y), N = Math.round(_ - b);
                if (!(0 >= j || 0 >= N)) {
                    var B, F;
                    "fast" === O ? (B = P, F = S) : (B = j, F = N);
                    var R = document.createElement("canvas");
                    R.width = B, R.height = F;
                    var H, V, q = R.getContext("2d"), Z = d3.scale.linear().domain(L.map(function(t) {
                        return t[0];
                    })).range(L.map(function(t) {
                        var e = h(t[1]).toRgb();
                        return [ e.r, e.g, e.b, e.a ];
                    })).clamp(!0);
                    "fast" === O ? (H = T ? function(t) {
                        return P - 1 - t;
                    } : f.Lib.identity, V = E ? function(t) {
                        return S - 1 - t;
                    } : f.Lib.identity) : (H = function(t) {
                        return f.Lib.constrain(Math.round(c.c2p(z[t]) - y), 0, j);
                    }, V = function(t) {
                        return f.Lib.constrain(Math.round(d.c2p(C[t]) - b), 0, N);
                    }), f.Lib.markTime("done init png");
                    var X, $, G, Y, U, J, Q = V(0), W = [ Q, Q ], K = T ? 0 : 1, te = E ? 0 : 1, ee = 0, re = 0, ne = 0, ae = 0;
                    if (O) {
                        var oe = 0, ie = new Uint8Array(j * N * 4);
                        if ("best" === O) {
                            var le, se, ce, de = new Array(z.length), ue = new Array(C.length), fe = new Array(j);
                            for (w = 0; w < z.length; w++) de[w] = Math.round(c.c2p(z[w]) - y);
                            for (w = 0; w < C.length; w++) ue[w] = Math.round(d.c2p(C[w]) - b);
                            for (w = 0; j > w; w++) fe[w] = n(w, de);
                            for ($ = 0; N > $; $++) for (le = n($, ue), se = k[le.bin0], ce = k[le.bin1], w = 0; j > w; w++, 
                            oe += 4) J = i(se, ce, fe[w], le), o(ie, oe, J);
                        } else for ($ = 0; S > $; $++) for (U = k[$], W = V($), w = 0; P > w; w++) J = a(U[w], 1), 
                        oe = 4 * (W * j + H(w)), o(ie, oe, J);
                        var he = q.createImageData(j, N);
                        he.data.set(ie), q.putImageData(he, 0, 0);
                    } else for ($ = 0; S > $; $++) if (U = k[$], W.reverse(), W[te] = V($ + 1), W[0] !== W[1] && void 0 !== W[0] && void 0 !== W[1]) for (G = H(0), 
                    X = [ G, G ], w = 0; P > w; w++) X.reverse(), X[K] = H(w + 1), X[0] !== X[1] && void 0 !== X[0] && void 0 !== X[1] && (Y = U[w], 
                    J = a(Y, (X[1] - X[0]) * (W[1] - W[0])), q.fillStyle = "rgba(" + J.join(",") + ")", 
                    q.fillRect(X[0], W[0], X[1] - X[0], W[1] - W[0]));
                    f.Lib.markTime("done filling png"), re = Math.round(re / ee), ne = Math.round(ne / ee), 
                    ae = Math.round(ae / ee);
                    var pe = h("rgb(" + re + "," + ne + "," + ae + ")");
                    t._hmpixcount = (t._hmpixcount || 0) + ee, t._hmlumcount = (t._hmlumcount || 0) + ee * pe.getLuminance(), 
                    p._paper.selectAll("." + g).remove(), e.plot.select(".maplayer").append("svg:image").classed(g, !0).datum(r[0]).attr({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xlink:xlink:href": R.toDataURL("image/png"),
                        height: N,
                        width: j,
                        x: y,
                        y: b,
                        preserveAspectRatio: "none"
                    }), f.Lib.markTime("done showing png");
                }
            }
            var u = e.exports = {}, f = t("./plotly"), h = t("tinycolor2"), p = t("./isnumeric"), g = f.Scatter.attributes;
            f.Plots.register(u, "heatmap", [ "cartesian", "2dMap" ]);
            var m = f.Colorbar.traceColorbarAttributes;
            u.attributes = {
                z: {
                    type: "data_array"
                },
                x: g.x,
                x0: g.x0,
                dx: g.dx,
                y: g.y,
                y0: g.y0,
                dy: g.dy,
                text: {
                    type: "data_array"
                },
                transpose: {
                    type: "boolean",
                    dflt: !1
                },
                xtype: {
                    type: "enumerated",
                    values: [ "array", "scaled" ]
                },
                ytype: {
                    type: "enumerated",
                    values: [ "array", "scaled" ]
                },
                zauto: m.zauto,
                zmin: m.zmin,
                zmax: m.zmax,
                colorscale: m.colorscale,
                autocolorscale: {
                    type: "boolean",
                    dflt: !1
                },
                reversescale: m.reversescale,
                showscale: m.showscale,
                zsmooth: {
                    type: "enumerated",
                    values: [ "fast", "best", !1 ],
                    dflt: !1
                },
                connectgaps: {
                    type: "boolean",
                    dflt: !1
                },
                _nestedModules: {
                    colorbar: "Colorbar"
                },
                _composedModules: {
                    histogram2d: "Histogram",
                    histogram2dcontour: "Histogram"
                }
            }, u.supplyDefaults = function(t, e, r, n) {
                function a(r, n) {
                    return f.Lib.coerce(t, e, u.attributes, r, n);
                }
                var o = f.Plots.traceIs(e, "contour");
                if (o || a("zsmooth"), f.Plots.traceIs(e, "histogram")) {
                    if (f.Histogram.supplyDefaults(t, e), e.visible === !1) return;
                } else {
                    var i = u.handleXYZDefaults(t, e, a);
                    if (!i) return void (e.visible = !1);
                    a("text");
                    var l = u.hasColumns(e);
                    l || a("transpose"), a("connectgaps", l && (o || e.zsmooth !== !1));
                }
                o && "none" === (e.contours || {}).coloring || f.Colorscale.handleDefaults(t, e, n, a, {
                    prefix: "",
                    cLetter: "z"
                });
            }, u.handleXYZDefaults = function(t, e, a) {
                var o, i, l = a("z");
                if (void 0 === l || !l.length) return 0;
                if (u.hasColumns(t)) {
                    if (o = a("x"), i = a("y"), !o || !i) return 0;
                } else if (o = r("x", a), i = r("y", a), !n(l)) return 0;
                return e.z.length;
            }, u.hasColumns = function(t) {
                return !Array.isArray(t.z[0]);
            }, u.convertColumnXYZ = function(t) {
                var e = t.x, r = t.y, n = t.z, a = t.text, o = Math.min(e.length, r.length, n.length), i = void 0 !== a && !Array.isArray(a[0]);
                o < e.length && (e = e.slice(0, o)), o < r.length && (r = r.slice(0, o));
                var l, s, c, d = f.Lib.distinctVals(e), u = d.vals, h = f.Lib.distinctVals(r), p = h.vals, g = f.Lib.init2dArray(p.length, u.length);
                i && (c = f.Lib.init2dArray(p.length, u.length));
                for (var m = 0; o > m; m++) l = f.Lib.findBin(e[m] + d.minDiff / 2, u), s = f.Lib.findBin(r[m] + h.minDiff / 2, p), 
                g[s][l] = n[m], i && (c[s][l] = a[m]);
                t.x = u, t.y = p, t.z = g, i && (t.text = c);
            }, u.calc = function(t, e) {
                function r(t) {
                    b = e._input.zsmooth = e.zsmooth = !1, f.Lib.notifier("cannot fast-zsmooth: " + t);
                }
                f.Lib.markTime("start convert x&y");
                var n, a, i, c, d, h, p, g, m = f.Axes.getFromId(t, e.xaxis || "x"), y = f.Axes.getFromId(t, e.yaxis || "y"), v = f.Plots.traceIs(e, "contour"), x = f.Plots.traceIs(e, "histogram"), b = v ? "best" : e.zsmooth;
                if (m._minDtick = 0, y._minDtick = 0, f.Lib.markTime("done convert x&y"), x) {
                    var _ = f.Histogram.calc2d(t, e);
                    n = _.x, a = _.x0, i = _.dx, c = _.y, d = _.y0, h = _.dy, p = _.z;
                } else u.hasColumns(e) && u.convertColumnXYZ(e), n = e.x ? m.makeCalcdata(e, "x") : [], 
                c = e.y ? y.makeCalcdata(e, "y") : [], a = e.x0 || 0, i = e.dx || 1, d = e.y0 || 0, 
                h = e.dy || 1, p = u.cleanZ(e), (v || e.connectgaps) && (e._emptypoints = s(p), 
                e._interpz = l(p, e._emptypoints, e._interpz));
                if ("fast" === b) if ("log" === m.type || "log" === y.type) r("log axis found"); else if (!x) {
                    if (n.length) {
                        var w = (n[n.length - 1] - n[0]) / (n.length - 1), k = Math.abs(w / 100);
                        for (g = 0; g < n.length - 1; g++) if (Math.abs(n[g + 1] - n[g] - w) > k) {
                            r("x scale is not linear");
                            break;
                        }
                    }
                    if (c.length && "fast" === b) {
                        var A = (c[c.length - 1] - c[0]) / (c.length - 1), M = Math.abs(A / 100);
                        for (g = 0; g < c.length - 1; g++) if (Math.abs(c[g + 1] - c[g] - A) > M) {
                            r("y scale is not linear");
                            break;
                        }
                    }
                }
                var L = f.Lib.aggNums(Math.max, null, p.map(function(t) {
                    return t.length;
                })), z = "scaled" === e.xtype ? "" : e.x, C = o(e, z, a, i, L, m), D = "scaled" === e.ytype ? "" : e.y, O = o(e, D, d, h, p.length, y);
                f.Axes.expand(m, C), f.Axes.expand(y, O);
                var S = {
                    x: C,
                    y: O,
                    z: p
                };
                if (f.Colorscale.calc(e, p, "", "z"), v && e.contours && "heatmap" === e.contours.coloring) {
                    var P = "contour" === e.type ? "heatmap" : "histogram2d";
                    S.xfill = o(P, z, a, i, L, m), S.yfill = o(P, D, d, h, p.length, y);
                }
                return [ S ];
            }, u.cleanZ = function(t) {
                var e, r, n, o, i, l, s = t.z;
                if (t.transpose) {
                    for (e = 0, i = 0; i < s.length; i++) e = Math.max(e, s[i].length);
                    if (0 === e) return !1;
                    n = function(t) {
                        return t.length;
                    }, o = function(t, e, r) {
                        return t[r][e];
                    };
                } else e = s.length, n = function(t, e) {
                    return t[e].length;
                }, o = function(t, e, r) {
                    return t[e][r];
                };
                var c = new Array(e);
                for (i = 0; e > i; i++) for (r = n(s, i), c[i] = new Array(r), l = 0; r > l; l++) c[i][l] = a(o(s, i, l));
                return c;
            };
            var y = .01, v = [ [ -1, 0 ], [ 1, 0 ], [ 0, -1 ], [ 0, 1 ] ];
            u.maxRowLength = function(t) {
                for (var e = 0, r = 0; r < t.length; r++) e = Math.max(e, t[r].length);
                return e;
            }, u.plot = function(t, e, r) {
                r.forEach(function(r) {
                    d(t, e, r);
                });
            }, u.colorbar = f.Colorbar.traceColorbar, u.style = function(t) {
                d3.select(t).selectAll("image").style("opacity", function(t) {
                    return t.trace.opacity;
                });
            }, u.hoverPoints = function(t, e, r, n, a) {
                if (!(t.distance < f.Fx.MAXDIST)) {
                    var o, i, l, s, c = t.cd[0], d = c.trace, u = t.xa, h = t.ya, p = c.x, g = c.y, m = c.z, y = c.zmask, v = p, x = g;
                    if (t.index !== !1) {
                        try {
                            l = Math.round(t.index[1]), s = Math.round(t.index[0]);
                        } catch (e) {
                            return void console.log("Error hovering on heatmap, pointNumber must be [row,col], found:", t.index);
                        }
                        if (0 > l || l >= m[0].length || 0 > s || s > m.length) return;
                    } else {
                        if (f.Fx.inbox(e - p[0], e - p[p.length - 1]) > f.Fx.MAXDIST || f.Fx.inbox(r - g[0], r - g[g.length - 1]) > f.Fx.MAXDIST) return;
                        if (a) {
                            v = [ 2 * p[0] - p[1] ];
                            for (var b = 1; b < p.length; b++) v.push((p[b] + p[b - 1]) / 2);
                            for (v.push([ 2 * p[p.length - 1] - p[p.length - 2] ]), x = [ 2 * g[0] - g[1] ], 
                            b = 1; b < g.length; b++) x.push((g[b] + g[b - 1]) / 2);
                            x.push([ 2 * g[g.length - 1] - g[g.length - 2] ]);
                        }
                        l = Math.max(0, Math.min(v.length - 2, f.Lib.findBin(e, v))), s = Math.max(0, Math.min(x.length - 2, f.Lib.findBin(r, x)));
                    }
                    var _ = u.c2p(p[l]), w = u.c2p(p[l + 1]), k = h.c2p(g[s]), A = h.c2p(g[s + 1]);
                    a ? (w = _, o = p[l], A = k, i = g[s]) : (o = (p[l] + p[l + 1]) / 2, i = (g[s] + g[s + 1]) / 2, 
                    d.zsmooth && (_ = w = (_ + w) / 2, k = A = (k + A) / 2));
                    var M = m[s][l];
                    y && !y[s][l] && (M = void 0);
                    var L;
                    return Array.isArray(d.text) && Array.isArray(d.text[s]) && (L = d.text[s][l]), 
                    [ $.extend(t, {
                        index: [ s, l ],
                        distance: f.Fx.MAXDIST + 10,
                        x0: _,
                        x1: w,
                        y0: k,
                        y1: A,
                        xLabelVal: o,
                        yLabelVal: i,
                        zLabelVal: M,
                        text: L
                    }) ];
                }
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27,
            tinycolor2: 7
        } ],
        20: [ function(t, e) {
            "use strict";
            function r(t) {
                for (var e, r = t.length, n = 0; r > n; n++) if (e = t.charCodeAt(n), (9 > e || e > 13) && 32 !== e && 133 !== e && 160 !== e && 5760 !== e && 6158 !== e && (8192 > e || e > 8205) && 8232 !== e && 8233 !== e && 8239 !== e && 8287 !== e && 8288 !== e && 12288 !== e && 65279 !== e) return !1;
                return !0;
            }
            e.exports = function(t) {
                var e = typeof t;
                if ("string" === e) {
                    var n = t;
                    if (t = +t, 0 === t && r(n)) return !1;
                } else if ("number" !== e) return !1;
                return 1 > t - t;
            };
        }, {} ],
        21: [ function(t, e) {
            "use strict";
            function r(t) {
                return t.visible && i.Plots.traceIs(t, "showLegend");
            }
            function n(t) {
                return -1 !== (t.traceorder || "").indexOf("grouped");
            }
            function a(t) {
                return -1 !== (t.traceorder || "").indexOf("reversed");
            }
            var o = e.exports = {}, i = t("./plotly");
            o.layoutAttributes = {
                bgcolor: {
                    type: "color"
                },
                bordercolor: {
                    type: "color",
                    dflt: i.Color.defaultLine
                },
                borderwidth: {
                    type: "number",
                    min: 0,
                    dflt: 0
                },
                font: {
                    type: "font"
                },
                traceorder: {
                    type: "flaglist",
                    flags: [ "reversed", "grouped" ],
                    extras: [ "normal" ]
                },
                tracegroupgap: {
                    type: "number",
                    min: 0,
                    dflt: 10
                },
                x: {
                    type: "number",
                    min: -2,
                    max: 3,
                    dflt: 1.02
                },
                xanchor: {
                    type: "enumerated",
                    values: [ "auto", "left", "center", "right" ],
                    dflt: "left"
                },
                y: {
                    type: "number",
                    min: -2,
                    max: 3,
                    dflt: 1
                },
                yanchor: {
                    type: "enumerated",
                    values: [ "auto", "top", "middle", "bottom" ],
                    dflt: "auto"
                }
            }, o.supplyLayoutDefaults = function(t, e, l) {
                function s(t, e) {
                    return i.Lib.coerce(d, u, o.layoutAttributes, t, e);
                }
                for (var c, d = t.legend || {}, u = e.legend = {}, f = 0, h = "normal", p = 0; p < l.length; p++) c = l[p], 
                r(c) && (f++, i.Plots.traceIs(c, "pie") && f++), (i.Plots.traceIs(c, "bar") && "stack" === e.barmode || -1 !== [ "tonextx", "tonexty" ].indexOf(c.fill)) && (h = n({
                    traceorder: h
                }) ? "grouped+reversed" : "reversed"), void 0 !== c.legendgroup && "" !== c.legendgroup && (h = a({
                    traceorder: h
                }) ? "reversed+grouped" : "grouped");
                var g = i.Lib.coerce(t, e, i.Plots.layoutAttributes, "showlegend", f > 1);
                g !== !1 && (s("bgcolor", e.paper_bgcolor), s("bordercolor"), s("borderwidth"), 
                s("font", e.font), s("traceorder", h), n(e.legend) && s("tracegroupgap"), s("x"), 
                s("xanchor"), s("y"), s("yanchor"), i.Lib.noneOrAll(d, u, [ "x", "y" ]));
            }, o.lines = function(t) {
                var e = t[0].trace, r = e.visible && e.fill && "none" !== e.fill, n = i.Scatter.hasLines(e), a = d3.select(this).select(".legendfill").selectAll("path").data(r ? [ t ] : []);
                a.enter().append("path").classed("js-fill", !0), a.exit().remove(), a.attr("d", "M5,0h30v6h-30z").call(i.Drawing.fillGroupStyle);
                var o = d3.select(this).select(".legendlines").selectAll("path").data(n ? [ t ] : []);
                o.enter().append("path").classed("js-line", !0).attr("d", "M5,0h30"), o.exit().remove(), 
                o.call(i.Drawing.lineGroupStyle);
            }, o.points = function(t) {
                function e(t, e, r) {
                    var n = i.Lib.nestedProperty(l, t).get(), a = Array.isArray(n) && e ? e(n) : n;
                    if (r) {
                        if (a < r[0]) return r[0];
                        if (a > r[1]) return r[1];
                    }
                    return a;
                }
                function r(t) {
                    return t[0];
                }
                var n, a, o = t[0], l = o.trace, s = i.Scatter.hasMarkers(l), c = i.Scatter.hasText(l), d = i.Scatter.hasLines(l);
                if (s || c || d) {
                    var u = {}, f = {};
                    s && (u.mc = e("marker.color", r), u.mo = e("marker.opacity", i.Lib.mean, [ .2, 1 ]), 
                    u.ms = e("marker.size", i.Lib.mean, [ 2, 16 ]), u.mlc = e("marker.line.color", r), 
                    u.mlw = e("marker.line.width", i.Lib.mean, [ 0, 5 ]), f.marker = {
                        sizeref: 1,
                        sizemin: 1,
                        sizemode: "diameter"
                    }), d && (f.line = {
                        width: e("line.width", r, [ 0, 10 ])
                    }), c && (u.tx = "Aa", u.tp = e("textposition", r), u.ts = 10, u.tc = e("textfont.color", r), 
                    u.tf = e("textfont.family", r)), n = [ i.Lib.minExtend(o, u) ], a = i.Lib.minExtend(l, f);
                }
                var h = d3.select(this).select("g.legendpoints"), p = h.selectAll("path.scatterpts").data(s ? n : []);
                p.enter().append("path").classed("scatterpts", !0).attr("transform", "translate(20,0)"), 
                p.exit().remove(), p.call(i.Drawing.pointStyle, a), s && (n[0].mrc = 3);
                var g = h.selectAll("g.pointtext").data(c ? n : []);
                g.enter().append("g").classed("pointtext", !0).append("text").attr("transform", "translate(20,0)"), 
                g.exit().remove(), g.selectAll("text").call(i.Drawing.textPointStyle, a);
            }, o.bars = function(t) {
                var e = t[0].trace, r = e.marker || {}, n = r.line || {}, a = d3.select(this).select("g.legendpoints").selectAll("path.legendbar").data(i.Plots.traceIs(e, "bar") ? [ t ] : []);
                a.enter().append("path").classed("legendbar", !0).attr("d", "M6,6H-6V-6H6Z").attr("transform", "translate(20,0)"), 
                a.exit().remove(), a.each(function(t) {
                    var e = (t.mlw + 1 || n.width + 1) - 1, a = d3.select(this);
                    a.style("stroke-width", e + "px").call(i.Color.fill, t.mc || r.color), e && a.call(i.Color.stroke, t.mlc || n.color);
                });
            }, o.boxes = function(t) {
                var e = t[0].trace, r = d3.select(this).select("g.legendpoints").selectAll("path.legendbox").data(i.Plots.traceIs(e, "box") && e.visible ? [ t ] : []);
                r.enter().append("path").classed("legendbox", !0).attr("d", "M6,6H-6V-6H6Z").attr("transform", "translate(20,0)"), 
                r.exit().remove(), r.each(function(t) {
                    var r = (t.lw + 1 || e.line.width + 1) - 1, n = d3.select(this);
                    n.style("stroke-width", r + "px").call(i.Color.fill, t.fc || e.fillcolor), r && n.call(i.Color.stroke, t.lc || e.line.color);
                });
            }, o.pie = function(t) {
                var e = t[0].trace, r = d3.select(this).select("g.legendpoints").selectAll("path.legendpie").data(i.Plots.traceIs(e, "pie") && e.visible ? [ t ] : []);
                r.enter().append("path").classed("legendpie", !0).attr("d", "M6,6H-6V-6H6Z").attr("transform", "translate(20,0)"), 
                r.exit().remove(), r.size() && r.call(i.Pie.styleOne, t[0], e);
            }, o.style = function(t) {
                t.each(function(t) {
                    var e = d3.select(this), r = e.selectAll("g.legendfill").data([ t ]);
                    r.enter().append("g").classed("legendfill", !0);
                    var n = e.selectAll("g.legendlines").data([ t ]);
                    n.enter().append("g").classed("legendlines", !0);
                    var a = e.selectAll("g.legendsymbols").data([ t ]);
                    a.enter().append("g").classed("legendsymbols", !0), a.style("opacity", t[0].trace.opacity), 
                    a.selectAll("g.legendpoints").data([ t ]).enter().append("g").classed("legendpoints", !0);
                }).each(o.bars).each(o.boxes).each(o.pie).each(o.lines).each(o.points);
            }, o.texts = function(t, e, r, n, a) {
                function l(t) {
                    i.util.convertToTspans(t, function() {
                        e.firstRender && o.repositionLegend(e, a);
                    }), t.selectAll("tspan.line").attr({
                        x: t.attr("x")
                    });
                }
                var s = e._fullLayout, c = r[0].trace, d = i.Plots.traceIs(c, "pie"), u = c.index, f = d ? r[0].label : c.name, h = d3.select(t).selectAll("text.legendtext").data([ 0 ]);
                h.enter().append("text").classed("legendtext", !0), h.attr({
                    x: 40,
                    y: 0
                }).style("text-anchor", "start").call(i.Drawing.font, s.legend.font).text(f).attr({
                    "data-unformatted": f
                }), e._context.editable && !d ? h.call(i.util.makeEditable).call(l).on("edit", function(t) {
                    this.attr({
                        "data-unformatted": t
                    }), this.text(t).call(l), this.text() || (t = "    "), i.restyle(e, "name", t, u);
                }) : h.call(l);
            }, o.getLegendData = function(t, e) {
                function o(t, r) {
                    if ("" !== t && n(e)) -1 === g.indexOf(t) ? (g.push(t), m = !0, p[t] = [ [ r ] ]) : p[t].push([ r ]); else {
                        var a = "~~i" + v;
                        g.push(a), p[a] = [ [ r ] ], v++;
                    }
                }
                var l, s, c, d, u, f, h, p = {}, g = [], m = !1, y = {}, v = 0;
                for (u = 0; u < t.length; u++) if (l = t[u], s = l[0], c = s.trace, d = c.legendgroup, 
                r(c) && c.showlegend) if (i.Plots.traceIs(c, "pie")) for (y[d] || (y[d] = {}), f = 0; f < l.length; f++) h = l[f].label, 
                y[d][h] || (o(d, {
                    label: h,
                    color: l[f].color,
                    i: l[f].i,
                    trace: c
                }), y[d][h] = !0); else o(d, s);
                if (!g.length) return [];
                var x, b, _ = g.length;
                if (m && n(e)) for (b = new Array(_), u = 0; _ > u; u++) x = p[g[u]], b[u] = a(e) ? x.reverse() : x; else {
                    for (b = [ new Array(_) ], u = 0; _ > u; u++) x = p[g[u]][0], b[0][a(e) ? _ - u - 1 : u] = x;
                    _ = 1;
                }
                return e._lgroupsLength = _, b;
            }, o.draw = function(t) {
                var e = t._fullLayout;
                if (e._infolayer && t.calcdata) {
                    var r = e.legend, a = e.showlegend && o.getLegendData(t.calcdata, r), l = e.hiddenlabels || [];
                    if (!e.showlegend || !a.length) return e._infolayer.selectAll(".legend").remove(), 
                    void i.Plots.autoMargin(t, "legend");
                    "undefined" == typeof t.firstRender ? t.firstRender = !0 : t.firstRender && (t.firstRender = !1);
                    var s = e._infolayer.selectAll("svg.legend").data([ 0 ]);
                    s.enter(0).append("svg").attr("class", "legend");
                    var c = s.selectAll("rect.bg").data([ 0 ]);
                    c.enter(0).append("rect").attr("class", "bg"), c.call(i.Color.stroke, r.bordercolor).call(i.Color.fill, r.bgcolor).style("stroke-width", r.borderwidth + "px");
                    var d = s.selectAll("g.groups").data(a);
                    d.enter().append("g").attr("class", "groups"), d.exit().remove(), n(r) && d.attr("transform", function(t, e) {
                        return "translate(0," + e * r.tracegroupgap + ")";
                    });
                    var u = d.selectAll("g.traces").data(i.Lib.identity);
                    if (u.enter().append("g").attr("class", "traces"), u.exit().remove(), u.call(o.style).style("opacity", function(t) {
                        var e = t[0].trace;
                        return i.Plots.traceIs(e, "pie") ? -1 !== l.indexOf(t[0].label) ? .5 : 1 : "legendonly" === e.visible ? .5 : 1;
                    }).each(function(e, r) {
                        o.texts(this, t, e, r, u);
                        var n = d3.select(this).selectAll("rect").data([ 0 ]);
                        n.enter().append("rect").classed("legendtoggle", !0).style("cursor", "pointer").attr("pointer-events", "all").call(i.Color.fill, "rgba(0,0,0,0)"), 
                        n.on("click", function() {
                            if (!t._dragged) {
                                var r, n, a = t._fullData, o = e[0].trace, s = o.legendgroup, c = [];
                                if (i.Plots.traceIs(o, "pie")) {
                                    var d = e[0].label, u = l.slice(), f = u.indexOf(d);
                                    -1 === f ? u.push(d) : u.splice(f, 1), i.relayout(t, "hiddenlabels", u);
                                } else {
                                    if ("" === s) c = [ o.index ]; else for (var h = 0; h < a.length; h++) r = a[h], 
                                    r.legendgroup === s && c.push(r.index);
                                    n = o.visible === !0 ? "legendonly" : !0, i.restyle(t, "visible", n, c);
                                }
                            }
                        });
                    }), o.repositionLegend(t, u), t._context.editable) {
                        var f, h, p, g, m, y;
                        i.Fx.dragElement({
                            element: s.node(),
                            prepFn: function() {
                                p = Number(s.attr("x")), g = Number(s.attr("y")), m = Number(s.attr("width")), y = Number(s.attr("height")), 
                                i.Fx.setCursor(s);
                            },
                            moveFn: function(e, n) {
                                var a = t._fullLayout._size;
                                s.call(i.Drawing.setPosition, p + e, g + n), f = i.Fx.dragAlign(p + e, m, a.l, a.l + a.w, r.xanchor), 
                                h = i.Fx.dragAlign(g + n + y, -y, a.t + a.h, a.t, r.yanchor);
                                var o = i.Fx.dragCursors(f, h, r.xanchor, r.yanchor);
                                i.Fx.setCursor(s, o);
                            },
                            doneFn: function(e) {
                                i.Fx.setCursor(s), e && void 0 !== f && void 0 !== h && i.relayout(t, {
                                    "legend.x": f,
                                    "legend.y": h
                                });
                            }
                        });
                    }
                }
            }, o.repositionLegend = function(t, e) {
                var r = t._fullLayout, a = r._size, o = r.legend, l = o.borderwidth, s = 0, c = 0;
                e.each(function(t) {
                    var e, r, n = t[0].trace, a = d3.select(this), d = a.selectAll(".legendtoggle"), u = a.selectAll(".legendtext"), f = a.selectAll(".legendtext>tspan"), h = 1.3 * o.font.size, p = f[0].length || 1, g = u.node() && i.Drawing.bBox(u.node()).width, m = a.select("g[class*=math-group]");
                    if (!n.showlegend) return void a.remove();
                    if (m.node()) {
                        var y = i.Drawing.bBox(m.node());
                        h = y.height, g = y.width, m.attr("transform", "translate(0," + h / 4 + ")");
                    } else e = h * (.3 + (1 - p) / 2), u.attr("y", e), f.attr("y", e);
                    r = Math.max(h * p, 16) + 3, a.attr("transform", "translate(" + l + "," + (5 + l + c + r / 2) + ")"), 
                    d.attr({
                        x: 0,
                        y: -r / 2,
                        height: r
                    }), c += r, s = Math.max(s, g || 0);
                }), n(o) && (c += (o._lgroupsLength - 1) * o.tracegroupgap), e.selectAll(".legendtoggle").attr("width", (t._context.editable ? 0 : s) + 40), 
                s += 45 + 2 * l, c += 10 + 2 * l;
                var d = a.l + a.w * o.x, u = a.t + a.h * (1 - o.y), f = "left";
                "right" === o.xanchor || "auto" === o.xanchor && o.x >= 2 / 3 ? (d -= s, f = "right") : ("center" === o.xanchor || "auto" === o.xanchor && o.x > 1 / 3) && (d -= s / 2, 
                f = "center");
                var h = "top";
                "bottom" === o.yanchor || "auto" === o.yanchor && o.y <= 1 / 3 ? (u -= c, h = "bottom") : ("middle" === o.yanchor || "auto" === o.yanchor && o.y < 2 / 3) && (u -= c / 2, 
                h = "middle"), s = Math.ceil(s), c = Math.ceil(c), d = Math.round(d), u = Math.round(u), 
                r._infolayer.selectAll("svg.legend").call(i.Drawing.setRect, d, u, s, c), r._infolayer.selectAll("svg.legend .bg").call(i.Drawing.setRect, l / 2, l / 2, s - l, c - l), 
                i.Plots.autoMargin(t, "legend", {
                    x: o.x,
                    y: o.y,
                    l: s * ({
                        right: 1,
                        center: .5
                    }[f] || 0),
                    r: s * ({
                        left: 1,
                        center: .5
                    }[f] || 0),
                    b: c * ({
                        top: 1,
                        middle: .5
                    }[h] || 0),
                    t: c * ({
                        bottom: 1,
                        middle: .5
                    }[h] || 0)
                });
            };
        }, {
            "./plotly": 27
        } ],
        22: [ function(t, e) {
            "use strict";
            function r(t) {
                var e;
                return e = S.test(t) ? "Y" : "y", e += P.test(t) ? "b" : "";
            }
            function n(t) {
                var e;
                return e = E.test(t) ? T.test(t) ? "I" : "H" : "D";
            }
            function a(t, e) {
                return e > t;
            }
            function o(t, e) {
                return e >= t;
            }
            function i(t, e) {
                return t > e;
            }
            function l(t, e) {
                return t >= e;
            }
            function s(t, e) {
                return function() {
                    var r, n, a, o, i, l = t;
                    for (o = 0; o < e.length - 1; o++) {
                        if (r = e[o], -1 === r) {
                            for (n = !0, a = [], i = 0; i < l.length; i++) a[i] = s(l[i], e.slice(o + 1))(), 
                            a[i] !== a[0] && (n = !1);
                            return n ? a[0] : a;
                        }
                        if ("number" == typeof r && !Array.isArray(l)) return void 0;
                        if (l = l[r], "object" != typeof l || null === l) return void 0;
                    }
                    return "object" != typeof l || null === l ? void 0 : (a = l[e[o]], null === a ? void 0 : a);
                };
            }
            function c(t, e) {
                var r = [ "annotations", "shapes", "range", "domain" ], n = -1 === r.indexOf(e);
                return Array.isArray(t) && n;
            }
            function d(t, e) {
                return function(r) {
                    var n, a, o = t, i = [ t ], l = p(r) && !c(r, e[e.length - 1]);
                    for (a = 0; a < e.length - 1; a++) {
                        if (n = e[a], "number" == typeof n && !Array.isArray(o)) throw "array index but container is not an array";
                        if (-1 === n) {
                            if (l = !u(o, e.slice(a + 1), r)) break;
                            return;
                        }
                        if (!f(o, n, e[a + 1], l)) break;
                        if (o = o[n], "object" != typeof o || null === o) throw "container is not an object";
                        i.push(o);
                    }
                    l ? (a === e.length - 1 && delete o[e[a]], h(i)) : o[e[a]] = r;
                };
            }
            function u(t, e, r) {
                var n, a = Array.isArray(r), o = !0, i = r, l = a ? !1 : p(r), s = e[0];
                for (n = 0; n < t.length; n++) a && (i = r[n % r.length], l = p(i)), l && (o = !1), 
                f(t, n, s, l) && d(t[n], e)(i);
                return o;
            }
            function f(t, e, r, n) {
                if (void 0 === t[e]) {
                    if (n) return !1;
                    t[e] = "number" == typeof r ? [] : {};
                }
                return !0;
            }
            function h(t) {
                var e, r, n, a, o;
                for (e = t.length - 1; e >= 0; e--) {
                    if (n = t[e], o = !1, Array.isArray(n)) for (r = n.length - 1; r >= 0; r--) p(n[r]) ? o ? n[r] = void 0 : n.pop() : o = !0; else if ("object" == typeof n && null !== n) for (a = Object.keys(n), 
                    o = !1, r = a.length - 1; r >= 0; r--) p(n[a[r]]) && !c(n[a[r]], a[r]) ? delete n[a[r]] : o = !0;
                    if (o) return;
                }
            }
            function p(t) {
                return void 0 === t || null === t ? !0 : "object" != typeof t ? !1 : Array.isArray(t) ? !t.length : !Object.keys(t).length;
            }
            function g(t, e, r) {
                return {
                    set: function() {
                        throw "bad container";
                    },
                    get: function() {},
                    astr: e,
                    parts: r,
                    obj: t
                };
            }
            function m() {
                if (null === H) {
                    var t = {
                        arrayOk: !0
                    };
                    H = {
                        family: y.extendFlat(R.family, t),
                        size: y.extendFlat(R.size, t),
                        color: y.extendFlat(R.color, t)
                    };
                }
                return H;
            }
            var y = e.exports = {}, v = t("./plotly"), x = t("tinycolor2"), b = t("./isnumeric");
            y.dateTime2ms = function(t) {
                try {
                    if (t.getTime) return +t;
                } catch (t) {
                    return !1;
                }
                var e, r, n, a, o = String(t).split(" ");
                if (o.length > 2) return !1;
                var i = o[0].split("-");
                if (i.length > 3 || 3 !== i.length && o[1]) return !1;
                if (4 === i[0].length) e = Number(i[0]); else {
                    if (2 !== i[0].length) return !1;
                    var l = new Date().getFullYear();
                    e = ((Number(i[0]) - l + 70) % 100 + 200) % 100 + l - 70;
                }
                return b(e) ? 1 === i.length ? new Date(e, 0, 1).getTime() : (r = Number(i[1]) - 1, 
                i[1].length > 2 || !(r >= 0 && 11 >= r) ? !1 : 2 === i.length ? new Date(e, r, 1).getTime() : (n = Number(i[2]), 
                i[2].length > 2 || !(n >= 1 && 31 >= n) ? !1 : (n = new Date(e, r, n).getTime(), 
                o[1] ? (i = o[1].split(":"), i.length > 3 ? !1 : (a = Number(i[0]), i[0].length > 2 || !(a >= 0 && 23 >= a) ? !1 : (n += 36e5 * a, 
                1 === i.length ? n : (r = Number(i[1]), i[1].length > 2 || !(r >= 0 && 59 >= r) ? !1 : (n += 6e4 * r, 
                2 === i.length ? n : (t = Number(i[2]), t >= 0 && 60 > t ? n + 1e3 * t : !1)))))) : n))) : !1;
            }, y.isDateTime = function(t) {
                return y.dateTime2ms(t) !== !1;
            }, y.ms2DateTime = function(t, e) {
                if ("undefined" == typeof d3) return void console.log("d3 is not defined");
                e || (e = 0);
                var r = new Date(t), n = d3.time.format("%Y-%m-%d")(r);
                return 7776e6 > e ? (n += " " + y.lpad(r.getHours(), 2), 432e6 > e && (n += ":" + y.lpad(r.getMinutes(), 2), 
                108e5 > e && (n += ":" + y.lpad(r.getSeconds(), 2), 3e5 > e && (n += "." + y.lpad(r.getMilliseconds(), 3)))), 
                n.replace(/([:\s]00)*\.?[0]*$/, "")) : n;
            };
            var _ = {
                H: [ "%H:%M:%S~%L", "%H:%M:%S", "%H:%M" ],
                I: [ "%I:%M:%S~%L%p", "%I:%M:%S%p", "%I:%M%p" ],
                D: [ "%H", "%I%p", "%Hh" ]
            }, w = {
                Y: [ "%Y~%m~%d", "%Y%m%d", "%y%m%d", "%m~%d~%Y", "%d~%m~%Y" ],
                Yb: [ "%b~%d~%Y", "%d~%b~%Y", "%Y~%d~%b", "%Y~%b~%d" ],
                y: [ "%m~%d~%y", "%d~%m~%y", "%y~%m~%d" ],
                yb: [ "%b~%d~%y", "%d~%b~%y", "%y~%d~%b", "%y~%b~%d" ]
            }, k = d3.time.format.utc, A = {
                Y: {
                    H: [ "%Y~%m~%dT%H:%M:%S", "%Y~%m~%dT%H:%M:%S~%L" ].map(k),
                    I: [],
                    D: [ "%Y%m%d%H%M%S", "%Y~%m", "%m~%Y" ].map(k)
                },
                Yb: {
                    H: [],
                    I: [],
                    D: [ "%Y~%b", "%b~%Y" ].map(k)
                },
                y: {
                    H: [],
                    I: [],
                    D: []
                },
                yb: {
                    H: [],
                    I: [],
                    D: []
                }
            };
            [ "Y", "Yb", "y", "yb" ].forEach(function(t) {
                w[t].forEach(function(e) {
                    A[t].D.push(k(e)), [ "H", "I", "D" ].forEach(function(r) {
                        _[r].forEach(function(n) {
                            var a = A[t][r];
                            a.push(k(e + "~" + n)), a.push(k(n + "~" + e));
                        });
                    });
                });
            });
            var M = /[a-z]*/g, L = function(t) {
                return t.substr(0, 3);
            }, z = /(mon|tue|wed|thu|fri|sat|sun|the|of|st|nd|rd|th)/g, C = /[\s,\/\-\.\(\)]+/g, D = /~?([ap])~?m(~|$)/, O = function(t, e) {
                return e + "m ";
            }, S = /\d\d\d\d/, P = /(^|~)[a-z]{3}/, T = /[ap]m/, E = /:/, I = /q([1-4])/, j = [ "31~mar", "30~jun", "30~sep", "31~dec" ], N = function(t, e) {
                return j[e - 1];
            }, B = / ?([+\-]\d\d:?\d\d|Z)$/;
            y.parseDate = function(t) {
                if (t.getTime) return t;
                if ("string" != typeof t) return !1;
                t = t.toLowerCase().replace(M, L).replace(z, "").replace(C, "~").replace(D, O).replace(I, N).trim().replace(B, "");
                var e, a, o = null, i = r(t), l = n(t);
                e = A[i][l], a = e.length;
                for (var s = 0; a > s && !(o = e[s].parse(t)); s++) ;
                if (!(o instanceof Date)) return !1;
                var c = o.getTimezoneOffset();
                return o.setTime(o.getTime() + 60 * c * 1e3), o;
            }, y.findBin = function(t, e, r) {
                if (b(e.start)) return r ? Math.ceil((t - e.start) / e.size) - 1 : Math.floor((t - e.start) / e.size);
                var n, s, c = 0, d = e.length, u = 0;
                for (s = e[e.length - 1] > e[0] ? r ? a : o : r ? l : i; d > c && u++ < 100; ) n = Math.floor((c + d) / 2), 
                s(e[n], t) ? c = n + 1 : d = n;
                return u > 90 && console.log("Long binary search..."), c - 1;
            }, y.sorterAsc = function(t, e) {
                return t - e;
            }, y.distinctVals = function(t) {
                var e = t.slice();
                e.sort(y.sorterAsc);
                for (var r = e.length - 1, n = e[r] - e[0] || 1, a = n / (r || 1) / 1e4, o = [ e[0] ], i = 0; r > i; i++) e[i + 1] > e[i] + a && (n = Math.min(n, e[i + 1] - e[i]), 
                o.push(e[i + 1]));
                return {
                    vals: o,
                    minDiff: n
                };
            }, y.roundUp = function(t, e, r) {
                for (var n, a = 0, o = e.length - 1, i = 0, l = r ? 0 : 1, s = r ? 1 : 0, c = r ? Math.ceil : Math.floor; o > a && i++ < 100; ) n = c((a + o) / 2), 
                e[n] <= t ? a = n + l : o = n - s;
                return e[a];
            }, y.nestedProperty = function(t, e) {
                if (b(e)) e = String(e); else if ("string" != typeof e || "[-1]" === e.substr(e.length - 4)) throw "bad property string";
                for (var r, n, a, o = 0, i = e.split("."); o < i.length; ) {
                    if (r = String(i[o]).match(/^([^\[\]]*)((\[\-?[0-9]*\])+)$/)) {
                        if (r[1]) i[o] = r[1]; else {
                            if (0 !== o) throw "bad property string";
                            i.splice(0, 1);
                        }
                        for (n = r[2].substr(1, r[2].length - 2).split("]["), a = 0; a < n.length; a++) o++, 
                        i.splice(o, 0, Number(n[a]));
                    }
                    o++;
                }
                return "object" != typeof t ? g(t, e, i) : {
                    set: d(t, i),
                    get: s(t, i),
                    astr: e,
                    parts: i,
                    obj: t
                };
            }, y.swapAttrs = function(t, e, r, n) {
                r || (r = "x"), n || (n = "y");
                for (var a = 0; a < e.length; a++) {
                    var o = e[a], i = y.nestedProperty(t, o.replace("?", r)), l = y.nestedProperty(t, o.replace("?", n)), s = i.get();
                    i.set(l.get()), l.set(s);
                }
            }, y.pauseEvent = function(t) {
                return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), 
                t.cancelBubble = !0, !1;
            }, y.lpad = function(t, e) {
                return String(t + Math.pow(10, e)).substr(1);
            }, y.aggNums = function(t, e, r, n) {
                var a, o;
                if (n || (n = r.length), b(e) || (e = !1), Array.isArray(r[0])) {
                    for (o = new Array(n), a = 0; n > a; a++) o[a] = y.aggNums(t, e, r[a]);
                    r = o;
                }
                for (a = 0; n > a; a++) b(e) ? b(r[a]) && (e = t(+e, +r[a])) : e = r[a];
                return e;
            }, y.len = function(t) {
                return y.aggNums(function(t) {
                    return t + 1;
                }, 0, t);
            }, y.mean = function(t, e) {
                return e || (e = y.len(t)), y.aggNums(function(t, e) {
                    return t + e;
                }, 0, t) / e;
            }, y.variance = function(t, e, r) {
                return e || (e = y.len(t)), b(r) || (r = y.mean(t, e)), y.aggNums(function(t, e) {
                    return t + Math.pow(e - r, 2);
                }, 0, t) / e;
            }, y.stdev = function(t, e, r) {
                return Math.sqrt(y.variance(t, e, r));
            }, y.interp = function(t, e) {
                if (!b(e)) throw "n should be a finite number";
                if (e = e * t.length - .5, 0 > e) return t[0];
                if (e > t.length - 1) return t[t.length - 1];
                var r = e % 1;
                return r * t[Math.ceil(e)] + (1 - r) * t[Math.floor(e)];
            }, y.VERBOSE = !1, y.TIMER = new Date().getTime(), y.log = function() {
                y.VERBOSE && console.log.apply(console, arguments);
            }, y.markTime = function(t) {
                if (y.VERBOSE) {
                    var e = new Date().getTime();
                    console.log(t, e - y.TIMER, "(msec)"), "trace" === y.VERBOSE && console.trace(), 
                    y.TIMER = e;
                }
            }, y.constrain = function(t, e, r) {
                return e > r ? Math.max(r, Math.min(e, t)) : Math.max(e, Math.min(r, t));
            };
            var F = [];
            y.notifier = function(t, e) {
                function r(t) {
                    t.duration(700).style("opacity", 0).each("end", function(t) {
                        var e = F.indexOf(t);
                        -1 !== e && F.splice(e, 1), d3.select(this).remove();
                    });
                }
                if (-1 === F.indexOf(t)) {
                    F.push(t);
                    var n = 1e3;
                    b(e) ? n = e : "long" === e && (n = 3e3);
                    var a = d3.select("body").selectAll(".plotly-notifier").data([ 0 ]);
                    a.enter().append("div").classed("plotly-notifier", !0);
                    var o = a.selectAll(".notifier-note").data(F);
                    o.enter().append("div").classed("notifier-note", !0).style("opacity", 0).each(function(t) {
                        var e = d3.select(this);
                        e.append("button").classed("notifier-close", !0).html("&times;").on("click", function() {
                            e.transition().call(r);
                        }), e.append("p").html(t), e.transition().duration(700).style("opacity", 1).transition().delay(n).call(r);
                    });
                }
            }, y.bBoxIntersect = function(t, e, r) {
                return r = r || 0, t.left <= e.right + r && e.left <= t.right + r && t.top <= e.bottom + r && e.top <= t.bottom + r;
            }, y.identity = function(t) {
                return t;
            }, y.randstr = function t(e, r, n) {
                if (n || (n = 16), void 0 === r && (r = 24), 0 >= r) return "0";
                var a, o, i, l = Math.log(Math.pow(2, r)) / Math.log(n), s = "";
                for (a = 2; 1 / 0 === l; a *= 2) l = Math.log(Math.pow(2, r / a)) / Math.log(n) * a;
                var c = l - Math.floor(l);
                for (a = 0; a < Math.floor(l); a++) i = Math.floor(Math.random() * n).toString(n), 
                s = i + s;
                c && (o = Math.pow(n, c), i = Math.floor(Math.random() * o).toString(n), s = i + s);
                var d = parseInt(s, n);
                return e && e.indexOf(s) > -1 || 1 / 0 !== d && d >= Math.pow(2, r) ? t(e, r, n) : s;
            }, y.OptionControl = function(t, e) {
                t || (t = {}), e || (e = "opt");
                var r = {};
                return r.optionList = [], r._newoption = function(n) {
                    n[e] = t, r[n.name] = n, r.optionList.push(n);
                }, r["_" + e] = t, r;
            }, y.smooth = function(t, e) {
                if (e = Math.round(e) || 0, 2 > e) return t;
                var r, n, a, o, i = t.length, l = 2 * i, s = 2 * e - 1, c = new Array(s), d = new Array(i);
                for (r = 0; s > r; r++) c[r] = (1 - Math.cos(Math.PI * (r + 1) / e)) / (2 * e);
                for (r = 0; i > r; r++) {
                    for (o = 0, n = 0; s > n; n++) a = r + n + 1 - e, -i > a ? a -= l * Math.round(a / l) : a >= l && (a -= l * Math.floor(a / l)), 
                    0 > a ? a = -1 - a : a >= i && (a = l - 1 - a), o += t[a] * c[n];
                    d[r] = o;
                }
                return d;
            }, y.getSources = function(t) {
                var e = (t.ref_fids || []).join(",");
                (t.fid || e) && window.PLOTLYENV && window.PLOTLYENV.DOMAIN_WEBAPP && $.get("/getsources", {
                    fid: t.fid,
                    extrarefs: e
                }, function(e) {
                    t.sourcelist = JSON.parse(e), Array.isArray(t.sourcelist) || (console.log("sourcelist error", t.sourcelist), 
                    t.sourcelist = []), y.showSources(t);
                });
            }, y.showSources = function(t) {
                function e() {
                    return pullf({
                        fid: l.ref_fid
                    }), !1;
                }
                function r() {
                    var t = $("#sourceModal"), e = t.find("#source-viewer").empty();
                    return e.data("jsontree", "").jsontree(JSON.stringify(v), {
                        terminators: !1,
                        collapsibleOuter: !1
                    }).show(), p ? t.find("[data-fid]").click(function() {
                        return t.modal("hide"), pullf({
                            fid: $(this).attr("data-fid")
                        }), !1;
                    }) : (t.find("[data-fid]").each(function() {
                        f = $(this).attr("data-fid").split(":"), $(this).attr({
                            href: "/~" + f[0] + "/" + f[1]
                        });
                    }), window.self !== window.top && t.css({
                        left: "10px",
                        right: "10px",
                        bottom: "10px",
                        width: "auto",
                        height: "auto",
                        margin: 0
                    })), t.modal("show"), t.find(".close").off("click").on("click", function() {
                        return t.modal("hide"), !1;
                    }), !1;
                }
                function n(t, e) {
                    return 0 > m ? (console.log("infinite loop?"), t) : (m--, a.forEach(function(r) {
                        if (r.ref_by_uid === e) {
                            var a;
                            if (b(r.ref_fid)) a = '<a href="' + r.ref_url + '" target="_blank">' + r.ref_filename + "</a>"; else {
                                var o = r.ref_fid.split(":")[0], i = (o !== window.user ? o + ": " : "") + r.ref_filename;
                                a = '<a href="#" data-fid="' + r.ref_fid + '">' + i + "</a>";
                            }
                            t[a] = n({}, r.uid);
                        }
                    }), t);
                }
                if (!t._context || !t._context.staticPlot) {
                    var a = t.sourcelist;
                    if (!a) return void y.getSources(t);
                    var o = d3.select(t).select(".js-sourcelinks"), i = a.filter(function(t) {
                        return b(t.ref_fid);
                    }), l = i[0] || a[0];
                    if (o.text(""), t.shouldshowsources = !1, l) {
                        var s = {}, c = {};
                        i.forEach(function(t) {
                            s[t.url] = 1;
                        }), a.forEach(function(t) {
                            b(t.ref_fid) || (c[t.ref_fid] = 1);
                        });
                        var d, u, f = String(l.ref_fid).split(":"), h = y.isPlotDiv(t), p = !h || t._context.workspace;
                        if (h) {
                            var g = l.fid.split(":")[0];
                            if (a.every(function(t) {
                                return String(t.ref_fid).split(":")[0] === g;
                            })) return;
                            if (t.shouldshowsources = !0, t.layout.hidesources) return;
                            o.append("tspan").text("Source: "), d = o.append("a").attr({
                                "xlink:xlink:href": "#"
                            }), b(l.ref_fid) ? d.attr({
                                "xlink:xlink:show": "new",
                                "xlink:xlink:href": l.ref_url
                            }) : p || d.attr({
                                "xlink:xlink:show": "new",
                                "xlink:xlink:href": "/" + f[1] + "/~" + f[0]
                            }), a.length > 1 && (o.append("tspan").text(" - "), u = o.append("a").attr({
                                "xlink:xlink:href": "#"
                            }));
                        } else o.node() || (o = d3.select(t).select(".grid-container").append("div").attr("class", "grid-sourcelinks js-sourcelinks")), 
                        o.append("span").text("Source: "), d = o.append("a").attr({
                            href: "#",
                            "class": "link--impt"
                        }), b(l.ref_fid) && d.attr({
                            target: "_blank",
                            href: l.ref_url
                        }), a.length > 1 && (o.append("span").text(" - "), u = o.append("a").attr({
                            href: "#"
                        }).classed("link--impt", !0));
                        d.text(l.ref_filename), (!h || p) && d.on("click", e), u && u.text("Full list").on("click", r);
                        var m = a.length, v = n({}, null);
                    }
                }
            }, y.promiseError = function(t) {
                console.log(t, t.stack);
            }, y.syncOrAsync = function(t, e, r) {
                function n() {
                    return y.markTime("async done " + o.name), y.syncOrAsync(t, e, r);
                }
                for (var a, o; t.length; ) {
                    if (o = t.splice(0, 1)[0], a = o(e), a && a.then) return a.then(n).then(void 0, y.promiseError);
                    y.markTime("sync done " + o.name);
                }
                return r && r(e);
            }, y.init2dArray = function(t, e) {
                for (var r = new Array(t), n = 0; t > n; n++) r[n] = new Array(e);
                return r;
            }, y.transposeRagged = function(t) {
                var e, r, n = 0, a = t.length;
                for (e = 0; a > e; e++) n = Math.max(n, t[e].length);
                var o = new Array(n);
                for (e = 0; n > e; e++) for (o[e] = new Array(a), r = 0; a > r; r++) o[e][r] = t[r][e];
                return o;
            }, y.dot = function(t, e) {
                if (!t.length || !e.length || t.length !== e.length) return null;
                var r, n, a = t.length;
                if (t[0].length) for (r = new Array(a), n = 0; a > n; n++) r[n] = y.dot(t[n], e); else if (e[0].length) {
                    var o = y.transposeRagged(e);
                    for (r = new Array(o.length), n = 0; n < o.length; n++) r[n] = y.dot(t, o[n]);
                } else for (r = 0, n = 0; a > n; n++) r += t[n] * e[n];
                return r;
            }, y.translationMatrix = function(t, e) {
                return [ [ 1, 0, t ], [ 0, 1, e ], [ 0, 0, 1 ] ];
            }, y.rotationMatrix = function(t) {
                var e = t * Math.PI / 180;
                return [ [ Math.cos(e), -Math.sin(e), 0 ], [ Math.sin(e), Math.cos(e), 0 ], [ 0, 0, 1 ] ];
            }, y.rotationXYMatrix = function(t, e, r) {
                return y.dot(y.dot(y.translationMatrix(e, r), y.rotationMatrix(t)), y.translationMatrix(-e, -r));
            }, y.apply2DTransform = function(t) {
                return function() {
                    var e = arguments;
                    3 === e.length && (e = e[0]);
                    var r = 1 === arguments.length ? e[0] : [ e[0], e[1] ];
                    return y.dot(t, [ r[0], r[1], 1 ]).slice(0, 2);
                };
            }, y.apply2DTransform2 = function(t) {
                var e = y.apply2DTransform(t);
                return function(t) {
                    return e(t.slice(0, 2)).concat(e(t.slice(2, 4)));
                };
            }, y.stripTrailingSlash = function(t) {
                return "/" === t.substr(-1) ? t.substr(0, t.length - 1) : t;
            };
            var R = {
                family: {
                    type: "string",
                    noBlank: !0,
                    strict: !0
                },
                size: {
                    type: "number",
                    min: 1
                },
                color: {
                    type: "color"
                }
            }, H = null, V = {
                data_array: function(t, e, r) {
                    Array.isArray(t) ? e.set(t) : void 0 !== r && e.set(r);
                },
                enumerated: function(t, e, r, n) {
                    n.coerceNumber && (t = +t), e.set(-1 === n.values.indexOf(t) ? r : t);
                },
                "boolean": function(t, e, r) {
                    e.set(t === !0 || t === !1 ? t : r);
                },
                number: function(t, e, r, n) {
                    e.set(!b(t) || void 0 !== n.min && t < n.min || void 0 !== n.max && t > n.max ? r : +t);
                },
                integer: function(t, e, r, n) {
                    e.set(t % 1 || !b(t) || void 0 !== n.min && t < n.min || void 0 !== n.max && t > n.max ? r : +t);
                },
                string: function(t, e, r, n) {
                    if (n.strict === !0 && "string" != typeof t) return void e.set(r);
                    var a = String(t);
                    e.set(void 0 === t || n.noBlank === !0 && !a ? r : a);
                },
                color: function(t, e, r) {
                    e.set(x(t).isValid() ? t : r);
                },
                colorscale: function(t, e, r) {
                    e.set(v.Colorscale.getScale(t, r));
                },
                font: function(t, e, r, n) {
                    t || (t = {});
                    var a = {}, o = n && n.arrayOk ? m() : R;
                    y.coerce(t, a, o, "size", r.size), y.coerce(t, a, o, "color", r.color), y.coerce(t, a, o, "family", r.family), 
                    e.set(a);
                },
                angle: function(t, e, r) {
                    "auto" === t ? e.set("auto") : b(t) ? (Math.abs(t) > 180 && (t -= 360 * Math.round(t / 360)), 
                    e.set(+t)) : e.set(r);
                },
                axisid: function(t, e, r) {
                    if ("string" == typeof t && t.charAt(0) === r) {
                        var n = Number(t.substr(1));
                        if (n % 1 === 0 && n > 1) return void e.set(t);
                    }
                    e.set(r);
                },
                sceneid: function(t, e, r) {
                    if ("string" == typeof t && t.substr(0, 5) === r) {
                        var n = Number(t.substr(5));
                        if (n % 1 === 0 && n > 1) return void e.set(t);
                    }
                    e.set(r);
                },
                geoid: function(t, e, r) {
                    if ("string" == typeof t && t.substr(0, 3) === r) {
                        var n = Number(t.substr(3));
                        if (n % 1 === 0 && n > 1) return void e.set(t);
                    }
                    e.set(r);
                },
                flaglist: function(t, e, r, n) {
                    if ("string" != typeof t) return void e.set(r);
                    if (-1 !== n.extras.indexOf(t)) return void e.set(t);
                    for (var a = t.split("+"), o = 0; o < a.length; ) {
                        var i = a[o];
                        -1 === n.flags.indexOf(i) || a.indexOf(i) < o ? a.splice(o, 1) : o++;
                    }
                    e.set(a.length ? a.join("+") : r);
                },
                any: function(t, e, r) {
                    e.set(void 0 === t ? r : t);
                }
            };
            y.coerce = function(t, e, r, n, a) {
                var o = y.nestedProperty(r, n).get(), i = y.nestedProperty(t, n), l = y.nestedProperty(e, n), s = i.get();
                return void 0 === a && (a = o.dflt), o.arrayOk && Array.isArray(s) ? (l.set(s), 
                s) : (V[o.type](s, l, a, o), l.get());
            }, y.noneOrAll = function(t, e, r) {
                if (t) {
                    var n, a, o = !1, i = !0;
                    for (n = 0; n < r.length; n++) a = t[r[n]], void 0 !== a && null !== a ? o = !0 : i = !1;
                    if (o && !i) for (n = 0; n < r.length; n++) t[r[n]] = e[r[n]];
                }
            }, y.mergeArray = function(t, e, r) {
                if (Array.isArray(t)) for (var n = Math.min(t.length, e.length), a = 0; n > a; a++) e[a][r] = t[a];
            }, y.minExtend = function(t, e) {
                var r = {};
                "object" != typeof e && (e = {});
                var n, a, o, i = 3, l = Object.keys(t);
                for (n = 0; n < l.length; n++) a = l[n], o = t[a], "_" !== a.charAt(0) && "function" != typeof o && (r[a] = "module" === a ? o : Array.isArray(o) ? o.slice(0, i) : o && "object" == typeof o ? y.minExtend(t[a], e[a]) : o);
                for (l = Object.keys(e), n = 0; n < l.length; n++) a = l[n], o = e[a], "object" == typeof o && a in r && "object" == typeof r[a] || (r[a] = o);
                return r;
            }, y.extendFlat = function(t, e) {
                function r(t) {
                    for (var e = Object.keys(t), r = 0; r < e.length; r++) n[e[r]] = t[e[r]];
                }
                var n = {};
                return "object" == typeof t && r(t), "object" == typeof e && r(e), n;
            }, y.titleCase = function(t) {
                return t.charAt(0).toUpperCase() + t.substr(1);
            }, y.containsAny = function(t, e) {
                for (var r = 0; r < e.length; r++) if (-1 !== t.indexOf(e[r])) return !0;
                return !1;
            }, y.getPlotDiv = function(t) {
                for (;t && t.removeAttribute; t = t.parentNode) if (y.isPlotDiv(t)) return t;
            }, y.isPlotDiv = function(t) {
                var e = d3.select(t);
                return e.size() && e.classed("js-plotly-plot");
            }, y.removeElement = function(t) {
                var e = t && t.parentNode;
                e && e.removeChild(t);
            }, y.addStyleRule = function(t, e) {
                if (!y.styleSheet) {
                    var r = document.createElement("style");
                    r.appendChild(document.createTextNode("")), document.head.appendChild(r), y.styleSheet = r.sheet;
                }
                var n = y.styleSheet;
                n.insertRule ? n.insertRule(t + "{" + e + "}", 0) : n.addRule ? n.addRule(t, e, 0) : console.warn("addStyleRule failed");
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27,
            tinycolor2: 7
        } ],
        23: [ function(t, e) {
            {
                var r = e.exports = {
                    version: "0.2.2"
                }, n = r;
                t("./plotly");
            }
            n.Axis = function() {
                function t(t) {
                    r = t || r;
                    var l = i.data, c = i.layout;
                    return ("string" == typeof r || r.nodeName) && (r = d3.select(r)), r.datum(l).each(function(t) {
                        function r(t) {
                            return o(t) % 360 + c.orientation;
                        }
                        var i = t.slice();
                        s = {
                            data: n.util.cloneJson(i),
                            layout: n.util.cloneJson(c)
                        };
                        var l = 0;
                        i.forEach(function(t, e) {
                            t.color || (t.color = c.defaultColorRange[l], l = (l + 1) % c.defaultColorRange.length), 
                            t.strokeColor || (t.strokeColor = "LinePlot" === t.geometry ? t.color : d3.rgb(t.color).darker().toString()), 
                            s.data[e].color = t.color, s.data[e].strokeColor = t.strokeColor, s.data[e].strokeDash = t.strokeDash, 
                            s.data[e].strokeSize = t.strokeSize;
                        });
                        var d = i.filter(function(t) {
                            var e = t.visible;
                            return "undefined" == typeof e || e === !0;
                        }), u = !1, f = d.map(function(t) {
                            return u = u || "undefined" != typeof t.groupId, t;
                        });
                        if (u) {
                            var h = d3.nest().key(function(t) {
                                return "undefined" != typeof t.groupId ? t.groupId : "unstacked";
                            }).entries(f), p = [], g = h.map(function(t) {
                                if ("unstacked" === t.key) return t.values;
                                var e = t.values[0].r.map(function() {
                                    return 0;
                                });
                                return t.values.forEach(function(t) {
                                    t.yStack = [ e ], p.push(e), e = n.util.sumArrays(t.r, e);
                                }), t.values;
                            });
                            d = d3.merge(g);
                        }
                        d.forEach(function(t) {
                            t.t = Array.isArray(t.t[0]) ? t.t : [ t.t ], t.r = Array.isArray(t.r[0]) ? t.r : [ t.r ];
                        });
                        var m = Math.min(c.width - c.margin.left - c.margin.right, c.height - c.margin.top - c.margin.bottom) / 2;
                        m = Math.max(10, m);
                        var y, v = [ c.margin.left + m, c.margin.top + m ];
                        if (u) {
                            var x = d3.max(n.util.sumArrays(n.util.arrayLast(d).r[0], n.util.arrayLast(p)));
                            y = [ 0, x ];
                        } else y = d3.extent(n.util.flattenArray(d.map(function(t) {
                            return t.r;
                        })));
                        c.radialAxis.domain != n.DATAEXTENT && (y[0] = 0), a = d3.scale.linear().domain(c.radialAxis.domain != n.DATAEXTENT && c.radialAxis.domain ? c.radialAxis.domain : y).range([ 0, m ]), 
                        s.layout.radialAxis.domain = a.domain();
                        var b, _ = n.util.flattenArray(d.map(function(t) {
                            return t.t;
                        })), w = "string" == typeof _[0];
                        w && (_ = n.util.deduplicate(_), b = _.slice(), _ = d3.range(_.length), d = d.map(function(t) {
                            var e = t;
                            return t.t = [ _ ], u && (e.yStack = t.yStack), e;
                        }));
                        var k = d.filter(function(t) {
                            return "LinePlot" === t.geometry || "DotPlot" === t.geometry;
                        }).length === d.length, A = null === c.needsEndSpacing ? w || !k : c.needsEndSpacing, M = c.angularAxis.domain && c.angularAxis.domain != n.DATAEXTENT && !w && c.angularAxis.domain[0] >= 0, L = M ? c.angularAxis.domain : d3.extent(_), z = Math.abs(_[1] - _[0]);
                        k && !w && (z = 0);
                        var C = L.slice();
                        A && w && (C[1] += z);
                        var D = c.angularAxis.ticksCount || 4;
                        D > 8 && (D = D / (D / 8) + D % 8), c.angularAxis.ticksStep && (D = (C[1] - C[0]) / D);
                        var O = c.angularAxis.ticksStep || (C[1] - C[0]) / (D * (c.minorTicks + 1));
                        b && (O = Math.max(Math.round(O), 1)), C[2] || (C[2] = O);
                        var S = d3.range.apply(this, C);
                        if (S = S.map(function(t) {
                            return parseFloat(t.toPrecision(12));
                        }), o = d3.scale.linear().domain(C.slice(0, 2)).range("clockwise" === c.direction ? [ 0, 360 ] : [ 360, 0 ]), 
                        s.layout.angularAxis.domain = o.domain(), s.layout.angularAxis.endPadding = A ? z : 0, 
                        e = d3.select(this).select("svg.chart-root"), "undefined" == typeof e || e.empty()) {
                            var P = '<svg xmlns="http://www.w3.org/2000/svg" class="chart-root"><g class="outer-group"><g class="chart-group"><circle class="background-circle"></circle><g class="geometry-group"></g><g class="radial axis-group"><circle class="outside-circle"></circle></g><g class="angular axis-group"></g><g class="guides-group"><line></line><circle r="0"></circle></g></g><g class="legend-group"></g><g class="tooltips-group"></g><g class="title-group"><text></text></g></g></svg>', T = new DOMParser().parseFromString(P, "application/xml"), E = this.appendChild(this.ownerDocument.importNode(T.documentElement, !0));
                            e = d3.select(E);
                        }
                        e.select(".guides-group").style({
                            "pointer-events": "none"
                        }), e.select(".angular.axis-group").style({
                            "pointer-events": "none"
                        }), e.select(".radial.axis-group").style({
                            "pointer-events": "none"
                        });
                        var I, j = e.select(".chart-group"), N = {
                            fill: "none",
                            stroke: c.tickColor
                        }, B = {
                            "font-size": c.font.size,
                            "font-family": c.font.family,
                            fill: c.font.color,
                            "text-shadow": [ "-1px 0px", "1px -1px", "-1px 1px", "1px 1px" ].map(function(t) {
                                return " " + t + " 0 " + c.font.outlineColor;
                            }).join(",")
                        };
                        if (c.showLegend) {
                            I = e.select(".legend-group").attr({
                                transform: "translate(" + [ m, c.margin.top ] + ")"
                            }).style({
                                display: "block"
                            });
                            var F = d.map(function(t) {
                                var e = n.util.cloneJson(t);
                                return e.symbol = "DotPlot" === t.geometry ? t.dotType || "circle" : "LinePlot" != t.geometry ? "square" : "line", 
                                e.visibleInLegend = "undefined" == typeof t.visibleInLegend || t.visibleInLegend, 
                                e.color = "LinePlot" === t.geometry ? t.strokeColor : t.color, e;
                            }), R = n.util.deepExtend({}, n.Legend.defaultConfig().legendConfig), H = n.util.deepExtend(R, {
                                container: I,
                                elements: F,
                                reverseOrder: c.legend.reverseOrder
                            }), V = {
                                data: d.map(function(t, e) {
                                    return t.name || "Element" + e;
                                }),
                                legendConfig: H
                            };
                            n.Legend().config(V)();
                            var q = I.node().getBBox();
                            m = Math.min(c.width - q.width - c.margin.left - c.margin.right, c.height - c.margin.top - c.margin.bottom) / 2, 
                            m = Math.max(10, m), v = [ c.margin.left + m, c.margin.top + m ], a.range([ 0, m ]), 
                            s.layout.radialAxis.domain = a.domain(), I.attr("transform", "translate(" + [ v[0] + m, v[1] - m ] + ")");
                        } else I = e.select(".legend-group").style({
                            display: "none"
                        });
                        e.attr({
                            width: c.width,
                            height: c.height
                        }).style({
                            opacity: c.opacity
                        }), j.attr("transform", "translate(" + v + ")").style({
                            cursor: "crosshair"
                        });
                        var Z = [ (c.width - (c.margin.left + c.margin.right + 2 * m + (q ? q.width : 0))) / 2, (c.height - (c.margin.top + c.margin.bottom + 2 * m)) / 2 ];
                        if (Z[0] = Math.max(0, Z[0]), Z[1] = Math.max(0, Z[1]), e.select(".outer-group").attr("transform", "translate(" + Z + ")"), 
                        c.title) {
                            var X = e.select("g.title-group text").style(B).text(c.title), $ = X.node().getBBox();
                            X.attr({
                                x: v[0] - $.width / 2,
                                y: v[1] - m - 20
                            });
                        }
                        var G = e.select(".radial.axis-group");
                        if (c.radialAxis.gridLinesVisible) {
                            var Y = G.selectAll("circle.grid-circle").data(a.ticks(5));
                            Y.enter().append("circle").attr({
                                "class": "grid-circle"
                            }).style(N), Y.attr("r", a), Y.exit().remove();
                        }
                        G.select("circle.outside-circle").attr({
                            r: m
                        }).style(N);
                        var U = e.select("circle.background-circle").attr({
                            r: m
                        }).style({
                            fill: c.backgroundColor,
                            stroke: c.stroke
                        });
                        if (c.radialAxis.visible) {
                            var J = d3.svg.axis().scale(a).ticks(5).tickSize(5);
                            G.call(J).attr({
                                transform: "rotate(" + c.radialAxis.orientation + ")"
                            }), G.selectAll(".domain").style(N), G.selectAll("g>text").text(function() {
                                return this.textContent + c.radialAxis.ticksSuffix;
                            }).style(B).style({
                                "text-anchor": "start"
                            }).attr({
                                x: 0,
                                y: 0,
                                dx: 0,
                                dy: 0,
                                transform: function() {
                                    return "horizontal" === c.radialAxis.tickOrientation ? "rotate(" + -c.radialAxis.orientation + ") translate(" + [ 0, B["font-size"] ] + ")" : "translate(" + [ 0, B["font-size"] ] + ")";
                                }
                            }), G.selectAll("g>line").style({
                                stroke: "black"
                            });
                        }
                        var Q = e.select(".angular.axis-group").selectAll("g.angular-tick").data(S), W = Q.enter().append("g").classed("angular-tick", !0);
                        Q.attr({
                            transform: function(t, e) {
                                return "rotate(" + r(t, e) + ")";
                            }
                        }).style({
                            display: c.angularAxis.visible ? "block" : "none"
                        }), Q.exit().remove(), W.append("line").classed("grid-line", !0).classed("major", function(t, e) {
                            return e % (c.minorTicks + 1) == 0;
                        }).classed("minor", function(t, e) {
                            return !(e % (c.minorTicks + 1) == 0);
                        }).style(N), W.selectAll(".minor").style({
                            stroke: c.minorTickColor
                        }), Q.select("line.grid-line").attr({
                            x1: c.tickLength ? m - c.tickLength : 0,
                            x2: m
                        }).style({
                            display: c.angularAxis.gridLinesVisible ? "block" : "none"
                        }), W.append("text").classed("axis-text", !0).style(B);
                        var K = Q.select("text.axis-text").attr({
                            x: m + c.labelOffset,
                            dy: ".35em",
                            transform: function(t, e) {
                                var n = r(t, e), a = m + c.labelOffset, o = c.angularAxis.tickOrientation;
                                return "horizontal" == o ? "rotate(" + -n + " " + a + " 0)" : "radial" == o ? 270 > n && n > 90 ? "rotate(180 " + a + " 0)" : null : "rotate(" + (180 >= n && n > 0 ? -90 : 90) + " " + a + " 0)";
                            }
                        }).style({
                            "text-anchor": "middle",
                            display: c.angularAxis.labelsVisible ? "block" : "none"
                        }).text(function(t, e) {
                            return e % (c.minorTicks + 1) != 0 ? "" : b ? b[t] + c.angularAxis.ticksSuffix : t + c.angularAxis.ticksSuffix;
                        }).style(B);
                        c.angularAxis.rewriteTicks && K.text(function(t, e) {
                            return e % (c.minorTicks + 1) != 0 ? "" : c.angularAxis.rewriteTicks(this.textContent, e);
                        });
                        var te = d3.max(j.selectAll(".angular-tick text")[0].map(function(t) {
                            return t.getCTM().e + t.getBBox().width;
                        }));
                        I.attr({
                            transform: "translate(" + [ m + te, c.margin.top ] + ")"
                        });
                        var ee = e.select("g.geometry-group").selectAll("g").size() > 0, re = e.select("g.geometry-group").selectAll("g.geometry").data(d);
                        if (re.enter().append("g").attr({
                            "class": function(t, e) {
                                return "geometry geometry" + e;
                            }
                        }), re.exit().remove(), d[0] || ee) {
                            var ne = [];
                            d.forEach(function(t, e) {
                                var r = {};
                                r.radialScale = a, r.angularScale = o, r.container = re.filter(function(t, r) {
                                    return r == e;
                                }), r.geometry = t.geometry, r.orientation = c.orientation, r.direction = c.direction, 
                                r.index = e, ne.push({
                                    data: t,
                                    geometryConfig: r
                                });
                            });
                            var ae = d3.nest().key(function(t) {
                                return "undefined" != typeof t.data.groupId || "unstacked";
                            }).entries(ne), oe = [];
                            ae.forEach(function(t) {
                                "unstacked" === t.key ? oe = oe.concat(t.values.map(function(t) {
                                    return [ t ];
                                })) : oe.push(t.values);
                            }), oe.forEach(function(t) {
                                var e;
                                e = Array.isArray(t) ? t[0].geometryConfig.geometry : t.geometryConfig.geometry;
                                var r = t.map(function(t) {
                                    return n.util.deepExtend(n[e].defaultConfig(), t);
                                });
                                n[e]().config(r)();
                            });
                        }
                        var ie, le, se = e.select(".guides-group"), ce = e.select(".tooltips-group"), de = n.tooltipPanel().config({
                            container: ce,
                            fontSize: 8
                        })(), ue = n.tooltipPanel().config({
                            container: ce,
                            fontSize: 8
                        })(), fe = n.tooltipPanel().config({
                            container: ce,
                            hasTick: !0
                        })();
                        if (!w) {
                            var he = se.select("line").attr({
                                x1: 0,
                                y1: 0,
                                y2: 0
                            }).style({
                                stroke: "grey",
                                "pointer-events": "none"
                            });
                            j.on("mousemove.angular-guide", function() {
                                var t = n.util.getMousePos(U).angle;
                                he.attr({
                                    x2: -m,
                                    transform: "rotate(" + t + ")"
                                }).style({
                                    opacity: .5
                                });
                                var e = (t + 180 + 360 - c.orientation) % 360;
                                ie = o.invert(e);
                                var r = n.util.convertToCartesian(m + 12, t + 180);
                                de.text(n.util.round(ie)).move([ r[0] + v[0], r[1] + v[1] ]);
                            }).on("mouseout.angular-guide", function() {
                                se.select("line").style({
                                    opacity: 0
                                });
                            });
                        }
                        var pe = se.select("circle").style({
                            stroke: "grey",
                            fill: "none"
                        });
                        j.on("mousemove.radial-guide", function() {
                            var t = n.util.getMousePos(U).radius;
                            pe.attr({
                                r: t
                            }).style({
                                opacity: .5
                            }), le = a.invert(n.util.getMousePos(U).radius);
                            var e = n.util.convertToCartesian(t, c.radialAxis.orientation);
                            ue.text(n.util.round(le)).move([ e[0] + v[0], e[1] + v[1] ]);
                        }).on("mouseout.radial-guide", function() {
                            pe.style({
                                opacity: 0
                            }), fe.hide(), de.hide(), ue.hide();
                        }), e.selectAll(".geometry-group .mark").on("mouseover.tooltip", function(t) {
                            var r = d3.select(this), a = r.style("fill"), o = "black", i = r.style("opacity") || 1;
                            if (r.attr({
                                "data-opacity": i
                            }), "none" != a) {
                                r.attr({
                                    "data-fill": a
                                }), o = d3.hsl(a).darker().toString(), r.style({
                                    fill: o,
                                    opacity: 1
                                });
                                var l = {
                                    t: n.util.round(t[0]),
                                    r: n.util.round(t[1])
                                };
                                w && (l.t = b[t[0]]);
                                var s = "t: " + l.t + ", r: " + l.r, c = this.getBoundingClientRect(), d = e.node().getBoundingClientRect(), u = [ c.left + c.width / 2 - Z[0] - d.left, c.top + c.height / 2 - Z[1] - d.top ];
                                fe.config({
                                    color: o
                                }).text(s), fe.move(u);
                            } else a = r.style("stroke"), r.attr({
                                "data-stroke": a
                            }), o = d3.hsl(a).darker().toString(), r.style({
                                stroke: o,
                                opacity: 1
                            });
                        }).on("mousemove.tooltip", function() {
                            return 0 != d3.event.which ? !1 : void (d3.select(this).attr("data-fill") && fe.show());
                        }).on("mouseout.tooltip", function() {
                            fe.hide();
                            var t = d3.select(this), e = t.attr("data-fill");
                            t.style(e ? {
                                fill: e,
                                opacity: t.attr("data-opacity")
                            } : {
                                stroke: t.attr("data-stroke"),
                                opacity: t.attr("data-opacity")
                            });
                        });
                    }), d;
                }
                var e, r, a, o, i = {
                    data: [],
                    layout: {}
                }, l = {}, s = {}, c = d3.dispatch("hover"), d = {};
                return d.render = function(e) {
                    return t(e), this;
                }, d.config = function(t) {
                    if (!arguments.length) return i;
                    var e = n.util.cloneJson(t);
                    return e.data.forEach(function(t, e) {
                        i.data[e] || (i.data[e] = {}), n.util.deepExtend(i.data[e], n.Axis.defaultConfig().data[0]), 
                        n.util.deepExtend(i.data[e], t);
                    }), n.util.deepExtend(i.layout, n.Axis.defaultConfig().layout), n.util.deepExtend(i.layout, e.layout), 
                    this;
                }, d.getLiveConfig = function() {
                    return s;
                }, d.getinputConfig = function() {
                    return l;
                }, d.radialScale = function() {
                    return a;
                }, d.angularScale = function() {
                    return o;
                }, d.svg = function() {
                    return e;
                }, d3.rebind(d, c, "on"), d;
            }, n.Axis.defaultConfig = function() {
                var t = {
                    data: [ {
                        t: [ 1, 2, 3, 4 ],
                        r: [ 10, 11, 12, 13 ],
                        name: "Line1",
                        geometry: "LinePlot",
                        color: null,
                        strokeDash: "solid",
                        strokeColor: null,
                        strokeSize: "1",
                        visibleInLegend: !0,
                        opacity: 1
                    } ],
                    layout: {
                        defaultColorRange: d3.scale.category10().range(),
                        title: null,
                        height: 450,
                        width: 500,
                        margin: {
                            top: 40,
                            right: 40,
                            bottom: 40,
                            left: 40
                        },
                        font: {
                            size: 12,
                            color: "gray",
                            outlineColor: "white",
                            family: "Tahoma, sans-serif"
                        },
                        direction: "clockwise",
                        orientation: 0,
                        labelOffset: 10,
                        radialAxis: {
                            domain: null,
                            orientation: -45,
                            ticksSuffix: "",
                            visible: !0,
                            gridLinesVisible: !0,
                            tickOrientation: "horizontal",
                            rewriteTicks: null
                        },
                        angularAxis: {
                            domain: [ 0, 360 ],
                            ticksSuffix: "",
                            visible: !0,
                            gridLinesVisible: !0,
                            labelsVisible: !0,
                            tickOrientation: "horizontal",
                            rewriteTicks: null,
                            ticksCount: null,
                            ticksStep: null
                        },
                        minorTicks: 0,
                        tickLength: null,
                        tickColor: "silver",
                        minorTickColor: "#eee",
                        backgroundColor: "none",
                        needsEndSpacing: null,
                        showLegend: !0,
                        legend: {
                            reverseOrder: !1
                        },
                        opacity: 1
                    }
                };
                return t;
            }, n.util = {}, n.DATAEXTENT = "dataExtent", n.AREA = "AreaChart", n.LINE = "LinePlot", 
            n.DOT = "DotPlot", n.BAR = "BarChart", n.util._override = function(t, e) {
                for (var r in t) r in e && (e[r] = t[r]);
            }, n.util._extend = function(t, e) {
                for (var r in t) e[r] = t[r];
            }, n.util._rndSnd = function() {
                return 2 * Math.random() - 1 + (2 * Math.random() - 1) + (2 * Math.random() - 1);
            }, n.util.dataFromEquation2 = function(t, e) {
                var r = e || 6, n = d3.range(0, 360 + r, r).map(function(e) {
                    var r = e * Math.PI / 180, n = t(r);
                    return [ e, n ];
                });
                return n;
            }, n.util.dataFromEquation = function(t, e, r) {
                var n = e || 6, a = [], o = [];
                d3.range(0, 360 + n, n).forEach(function(e) {
                    var r = e * Math.PI / 180, n = t(r);
                    a.push(e), o.push(n);
                });
                var i = {
                    t: a,
                    r: o
                };
                return r && (i.name = r), i;
            }, n.util.ensureArray = function(t, e) {
                if ("undefined" == typeof t) return null;
                var r = [].concat(t);
                return d3.range(e).map(function(t, e) {
                    return r[e] || r[0];
                });
            }, n.util.fillArrays = function(t, e, r) {
                return e.forEach(function(e) {
                    t[e] = n.util.ensureArray(t[e], r);
                }), t;
            }, n.util.cloneJson = function(t) {
                return JSON.parse(JSON.stringify(t));
            }, n.util.deepExtend = function(t, e) {
                for (var r in e) e[r] && e[r].constructor && e[r].constructor === Object ? (t[r] = t[r] || {}, 
                arguments.callee(t[r], e[r])) : t[r] = e[r];
                return t;
            }, n.util.validateKeys = function(t, e) {
                "string" == typeof e && (e = e.split("."));
                var r = e.shift();
                return t[r] && (!e.length || objHasKeys(t[r], e));
            }, n.util.sumArrays = function(t, e) {
                return d3.zip(t, e).map(function(t) {
                    return d3.sum(t);
                });
            }, n.util.arrayLast = function(t) {
                return t[t.length - 1];
            }, n.util.arrayEqual = function(t, e) {
                for (var r = Math.max(t.length, e.length, 1); r-- >= 0 && t[r] === e[r]; ) ;
                return -2 === r;
            }, n.util.flattenArray = function(t) {
                for (var e = []; !n.util.arrayEqual(e, t); ) e = t, t = [].concat.apply([], t);
                return t;
            }, n.util.deduplicate = function(t) {
                return t.filter(function(t, e, r) {
                    return r.indexOf(t) == e;
                });
            }, n.util.convertToCartesian = function(t, e) {
                var r = e * Math.PI / 180, n = t * Math.cos(r), a = t * Math.sin(r);
                return [ n, a ];
            }, n.util.round = function(t, e) {
                var r = e || 2, n = Math.pow(10, r);
                return Math.round(t * n) / n;
            }, n.util.getMousePos = function(t) {
                var e = d3.mouse(t.node()), r = e[0], n = e[1], a = {};
                return a.x = r, a.y = n, a.pos = e, a.angle = 180 * (Math.atan2(n, r) + Math.PI) / Math.PI, 
                a.radius = Math.sqrt(r * r + n * n), a;
            }, n.util.duplicatesCount = function(t) {
                for (var e, r = {}, n = {}, a = 0, o = t.length; o > a; a++) e = t[a], e in r ? (r[e]++, 
                n[e] = r[e]) : r[e] = 1;
                return n;
            }, n.util.duplicates = function(t) {
                return Object.keys(n.util.duplicatesCount(t));
            }, n.util.translator = function(t, e, r, n) {
                if (n) {
                    var a = r.slice();
                    r = e, e = a;
                }
                var o = e.reduce(function(t, e) {
                    return "undefined" != typeof t ? t[e] : void 0;
                }, t);
                "undefined" != typeof o && (e.reduce(function(t, r, n) {
                    return "undefined" != typeof t ? (n === e.length - 1 && delete t[r], t[r]) : void 0;
                }, t), r.reduce(function(t, e, n) {
                    return "undefined" == typeof t[e] && (t[e] = {}), n === r.length - 1 && (t[e] = o), 
                    t[e];
                }, t));
            }, n.PolyChart = function() {
                function t() {
                    var t = r[0].geometryConfig, e = t.container;
                    "string" == typeof e && (e = d3.select(e)), e.datum(r).each(function(e) {
                        function r(e) {
                            var r = t.radialScale(e[1]), n = (t.angularScale(e[0]) + t.orientation) * Math.PI / 180;
                            return {
                                r: r,
                                t: n
                            };
                        }
                        function n(t) {
                            var e = t.r * Math.cos(t.t), r = t.r * Math.sin(t.t);
                            return {
                                x: e,
                                y: r
                            };
                        }
                        var a = !!e[0].data.yStack, i = e.map(function(t) {
                            return a ? d3.zip(t.data.t[0], t.data.r[0], t.data.yStack[0]) : d3.zip(t.data.t[0], t.data.r[0]);
                        }), l = t.angularScale, s = t.radialScale.domain()[0], c = {};
                        c.bar = function(r, n, a) {
                            var o = e[a].data, i = t.radialScale(r[1]) - t.radialScale(0), s = t.radialScale(r[2] || 0), c = o.barWidth;
                            d3.select(this).attr({
                                "class": "mark bar",
                                d: "M" + [ [ i + s, -c / 2 ], [ i + s, c / 2 ], [ s, c / 2 ], [ s, -c / 2 ] ].join("L") + "Z",
                                transform: function(e) {
                                    return "rotate(" + (t.orientation + l(e[0])) + ")";
                                }
                            });
                        }, c.dot = function(t, a, o) {
                            var i = t[2] ? [ t[0], t[1] + t[2] ] : t, l = d3.svg.symbol().size(e[o].data.dotSize).type(e[o].data.dotType)(t, a);
                            d3.select(this).attr({
                                "class": "mark dot",
                                d: l,
                                transform: function() {
                                    var t = n(r(i));
                                    return "translate(" + [ t.x, t.y ] + ")";
                                }
                            });
                        };
                        var d = d3.svg.line.radial().interpolate(e[0].data.lineInterpolation).radius(function(e) {
                            return t.radialScale(e[1]);
                        }).angle(function(e) {
                            return t.angularScale(e[0]) * Math.PI / 180;
                        });
                        c.line = function(r, n, a) {
                            var o = r[2] ? i[a].map(function(t) {
                                return [ t[0], t[1] + t[2] ];
                            }) : i[a];
                            if (d3.select(this).each(c.dot).style({
                                opacity: function() {
                                    return +e[a].data.dotVisible;
                                },
                                fill: p.stroke(r, n, a)
                            }).attr({
                                "class": "mark dot"
                            }), !(n > 0)) {
                                var l = d3.select(this.parentNode).selectAll("path.line").data([ 0 ]);
                                l.enter().insert("path"), l.attr({
                                    "class": "line",
                                    d: d(o),
                                    transform: function() {
                                        return "rotate(" + (t.orientation + 90) + ")";
                                    },
                                    "pointer-events": "none"
                                }).style({
                                    fill: function() {
                                        return p.fill(r, n, a);
                                    },
                                    "fill-opacity": 0,
                                    stroke: function() {
                                        return p.stroke(r, n, a);
                                    },
                                    "stroke-width": function() {
                                        return p["stroke-width"](r, n, a);
                                    },
                                    "stroke-dasharray": function() {
                                        return p["stroke-dasharray"](r, n, a);
                                    },
                                    opacity: function() {
                                        return p.opacity(r, n, a);
                                    },
                                    display: function() {
                                        return p.display(r, n, a);
                                    }
                                });
                            }
                        };
                        var u = t.angularScale.range(), f = Math.abs(u[1] - u[0]) / i[0].length * Math.PI / 180, h = d3.svg.arc().startAngle(function() {
                            return -f / 2;
                        }).endAngle(function() {
                            return f / 2;
                        }).innerRadius(function(e) {
                            return t.radialScale(s + (e[2] || 0));
                        }).outerRadius(function(e) {
                            return t.radialScale(s + (e[2] || 0)) + t.radialScale(e[1]);
                        });
                        c.arc = function() {
                            d3.select(this).attr({
                                "class": "mark arc",
                                d: h,
                                transform: function(e) {
                                    return "rotate(" + (t.orientation + l(e[0]) + 90) + ")";
                                }
                            });
                        };
                        var p = {
                            fill: function(t, r, n) {
                                return e[n].data.color;
                            },
                            stroke: function(t, r, n) {
                                return e[n].data.strokeColor;
                            },
                            "stroke-width": function(t, r, n) {
                                return e[n].data.strokeSize + "px";
                            },
                            "stroke-dasharray": function(t, r, n) {
                                return o[e[n].data.strokeDash];
                            },
                            opacity: function(t, r, n) {
                                return e[n].data.opacity;
                            },
                            display: function(t, r, n) {
                                return "undefined" == typeof e[n].data.visible || e[n].data.visible ? "block" : "none";
                            }
                        }, g = d3.select(this).selectAll("g.layer").data(i);
                        g.enter().append("g").attr({
                            "class": "layer"
                        });
                        var m = g.selectAll("path.mark").data(function(t) {
                            return t;
                        });
                        m.enter().append("path").attr({
                            "class": "mark"
                        }), m.style(p).each(c[t.geometryType]), m.exit().remove(), g.exit().remove();
                    });
                }
                var e, r = [ n.PolyChart.defaultConfig() ], a = d3.dispatch("hover"), o = {
                    solid: "none",
                    dash: [ 5, 2 ],
                    dot: [ 2, 5 ]
                };
                return t.config = function(t) {
                    return arguments.length ? (t.forEach(function(t, e) {
                        r[e] || (r[e] = {}), n.util.deepExtend(r[e], n.PolyChart.defaultConfig()), n.util.deepExtend(r[e], t);
                    }), this) : r;
                }, t.getColorScale = function() {
                    return e;
                }, d3.rebind(t, a, "on"), t;
            }, n.PolyChart.defaultConfig = function() {
                var t = {
                    data: {
                        name: "geom1",
                        t: [ [ 1, 2, 3, 4 ] ],
                        r: [ [ 1, 2, 3, 4 ] ],
                        dotType: "circle",
                        dotSize: 64,
                        dotVisible: !1,
                        barWidth: 20,
                        color: "#ffa500",
                        strokeSize: 1,
                        strokeColor: "silver",
                        strokeDash: "solid",
                        opacity: 1,
                        index: 0,
                        visible: !0,
                        visibleInLegend: !0
                    },
                    geometryConfig: {
                        geometry: "LinePlot",
                        geometryType: "arc",
                        direction: "clockwise",
                        orientation: 0,
                        container: "body",
                        radialScale: null,
                        angularScale: null,
                        colorScale: d3.scale.category20()
                    }
                };
                return t;
            }, n.BarChart = function() {
                return n.PolyChart();
            }, n.BarChart.defaultConfig = function() {
                var t = {
                    geometryConfig: {
                        geometryType: "bar"
                    }
                };
                return t;
            }, n.AreaChart = function() {
                return n.PolyChart();
            }, n.AreaChart.defaultConfig = function() {
                var t = {
                    geometryConfig: {
                        geometryType: "arc"
                    }
                };
                return t;
            }, n.DotPlot = function() {
                return n.PolyChart();
            }, n.DotPlot.defaultConfig = function() {
                var t = {
                    geometryConfig: {
                        geometryType: "dot",
                        dotType: "circle"
                    }
                };
                return t;
            }, n.LinePlot = function() {
                return n.PolyChart();
            }, n.LinePlot.defaultConfig = function() {
                var t = {
                    geometryConfig: {
                        geometryType: "line"
                    }
                };
                return t;
            }, n.Legend = function() {
                function t() {
                    var r = e.legendConfig, a = e.data.map(function(t, e) {
                        return [].concat(t).map(function(t, a) {
                            var o = n.util.deepExtend({}, r.elements[e]);
                            return o.name = t, o.color = [].concat(r.elements[e].color)[a], o;
                        });
                    }), o = d3.merge(a);
                    o = o.filter(function(t, e) {
                        return r.elements[e] && (r.elements[e].visibleInLegend || "undefined" == typeof r.elements[e].visibleInLegend);
                    }), r.reverseOrder && (o = o.reverse());
                    var i = r.container;
                    ("string" == typeof i || i.nodeName) && (i = d3.select(i));
                    var l = o.map(function(t) {
                        return t.color;
                    }), s = r.fontSize, c = null == r.isContinuous ? "number" == typeof o[0] : r.isContinuous, d = c ? r.height : s * o.length, u = i.classed("legend-group", !0), f = u.selectAll("svg").data([ 0 ]), h = f.enter().append("svg").attr({
                        width: 300,
                        height: d + s,
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xmlns:xlink": "http://www.w3.org/1999/xlink",
                        version: "1.1"
                    });
                    h.append("g").classed("legend-axis", !0), h.append("g").classed("legend-marks", !0);
                    var p = d3.range(o.length), g = d3.scale[c ? "linear" : "ordinal"]().domain(p).range(l), m = d3.scale[c ? "linear" : "ordinal"]().domain(p)[c ? "range" : "rangePoints"]([ 0, d ]), y = function(t, e) {
                        var r = 3 * e;
                        return "line" === t ? "M" + [ [ -e / 2, -e / 12 ], [ e / 2, -e / 12 ], [ e / 2, e / 12 ], [ -e / 2, e / 12 ] ] + "Z" : -1 != d3.svg.symbolTypes.indexOf(t) ? d3.svg.symbol().type(t).size(r)() : d3.svg.symbol().type("square").size(r)();
                    };
                    if (c) {
                        var v = f.select(".legend-marks").append("defs").append("linearGradient").attr({
                            id: "grad1",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%"
                        }).selectAll("stop").data(l);
                        v.enter().append("stop"), v.attr({
                            offset: function(t, e) {
                                return e / (l.length - 1) * 100 + "%";
                            }
                        }).style({
                            "stop-color": function(t) {
                                return t;
                            }
                        }), f.append("rect").classed("legend-mark", !0).attr({
                            height: r.height,
                            width: r.colorBandWidth,
                            fill: "url(#grad1)"
                        });
                    } else {
                        var x = f.select(".legend-marks").selectAll("path.legend-mark").data(o);
                        x.enter().append("path").classed("legend-mark", !0), x.attr({
                            transform: function(t, e) {
                                return "translate(" + [ s / 2, m(e) + s / 2 ] + ")";
                            },
                            d: function(t) {
                                var e = t.symbol;
                                return y(e, s);
                            },
                            fill: function(t, e) {
                                return g(e);
                            }
                        }), x.exit().remove();
                    }
                    var b = d3.svg.axis().scale(m).orient("right"), _ = f.select("g.legend-axis").attr({
                        transform: "translate(" + [ c ? r.colorBandWidth : s, s / 2 ] + ")"
                    }).call(b);
                    return _.selectAll(".domain").style({
                        fill: "none",
                        stroke: "none"
                    }), _.selectAll("line").style({
                        fill: "none",
                        stroke: c ? r.textColor : "none"
                    }), _.selectAll("text").style({
                        fill: r.textColor,
                        "font-size": r.fontSize
                    }).text(function(t, e) {
                        return o[e].name;
                    }), t;
                }
                var e = n.Legend.defaultConfig(), r = d3.dispatch("hover");
                return t.config = function(t) {
                    return arguments.length ? (n.util.deepExtend(e, t), this) : e;
                }, d3.rebind(t, r, "on"), t;
            }, n.Legend.defaultConfig = function() {
                var t = {
                    data: [ "a", "b", "c" ],
                    legendConfig: {
                        elements: [ {
                            symbol: "line",
                            color: "red"
                        }, {
                            symbol: "square",
                            color: "yellow"
                        }, {
                            symbol: "diamond",
                            color: "limegreen"
                        } ],
                        height: 150,
                        colorBandWidth: 30,
                        fontSize: 12,
                        container: "body",
                        isContinuous: null,
                        textColor: "grey",
                        reverseOrder: !1
                    }
                };
                return t;
            }, n.tooltipPanel = function() {
                var t, e, r, a = {
                    container: null,
                    hasTick: !1,
                    fontSize: 12,
                    color: "white",
                    padding: 5
                }, o = "tooltip-" + n.tooltipPanel.uid++, i = 10, l = function() {
                    t = a.container.selectAll("g." + o).data([ 0 ]);
                    var n = t.enter().append("g").classed(o, !0).style({
                        "pointer-events": "none",
                        display: "none"
                    });
                    return r = n.append("path").style({
                        fill: "white",
                        "fill-opacity": .9
                    }).attr({
                        d: "M0 0"
                    }), e = n.append("text").attr({
                        dx: a.padding + i,
                        dy: .3 * +a.fontSize
                    }), l;
                };
                return l.text = function(n) {
                    var o = d3.hsl(a.color).l, s = o >= .5 ? "#aaa" : "white", c = o >= .5 ? "black" : "white", d = n || "";
                    e.style({
                        fill: c,
                        "font-size": a.fontSize + "px"
                    }).text(d);
                    var u = a.padding, f = e.node().getBBox(), h = {
                        fill: a.color,
                        stroke: s,
                        "stroke-width": "2px"
                    }, p = f.width + 2 * u + i, g = f.height + 2 * u;
                    return r.attr({
                        d: "M" + [ [ i, -g / 2 ], [ i, -g / 4 ], [ a.hasTick ? 0 : i, 0 ], [ i, g / 4 ], [ i, g / 2 ], [ p, g / 2 ], [ p, -g / 2 ] ].join("L") + "Z"
                    }).style(h), t.attr({
                        transform: "translate(" + [ i, -g / 2 + 2 * u ] + ")"
                    }), t.style({
                        display: "block"
                    }), l;
                }, l.move = function(e) {
                    return t ? (t.attr({
                        transform: "translate(" + [ e[0], e[1] ] + ")"
                    }).style({
                        display: "block"
                    }), l) : void 0;
                }, l.hide = function() {
                    return t ? (t.style({
                        display: "none"
                    }), l) : void 0;
                }, l.show = function() {
                    return t ? (t.style({
                        display: "block"
                    }), l) : void 0;
                }, l.config = function(t) {
                    return n.util.deepExtend(a, t), l;
                }, l;
            }, n.tooltipPanel.uid = 1, n.adapter = {}, n.adapter.plotly = function() {
                var t = {};
                return t.convert = function(t, e) {
                    var r = {};
                    if (t.data && (r.data = t.data.map(function(t) {
                        var r = n.util.deepExtend({}, t), a = [ [ r, [ "marker", "color" ], [ "color" ] ], [ r, [ "marker", "opacity" ], [ "opacity" ] ], [ r, [ "marker", "line", "color" ], [ "strokeColor" ] ], [ r, [ "marker", "line", "dash" ], [ "strokeDash" ] ], [ r, [ "marker", "line", "width" ], [ "strokeSize" ] ], [ r, [ "marker", "symbol" ], [ "dotType" ] ], [ r, [ "marker", "size" ], [ "dotSize" ] ], [ r, [ "marker", "barWidth" ], [ "barWidth" ] ], [ r, [ "line", "interpolation" ], [ "lineInterpolation" ] ], [ r, [ "showlegend" ], [ "visibleInLegend" ] ] ];
                        return a.forEach(function(t) {
                            n.util.translator.apply(null, t.concat(e));
                        }), e || delete r.marker, e && delete r.groupId, e ? ("LinePlot" === r.geometry ? (r.type = "scatter", 
                        r.dotVisible === !0 ? (delete r.dotVisible, r.mode = "lines+markers") : r.mode = "lines") : "DotPlot" === r.geometry ? (r.type = "scatter", 
                        r.mode = "markers") : "AreaChart" === r.geometry ? r.type = "area" : "BarChart" === r.geometry && (r.type = "bar"), 
                        delete r.geometry) : ("scatter" === r.type ? "lines" === r.mode ? r.geometry = "LinePlot" : "markers" === r.mode ? r.geometry = "DotPlot" : "lines+markers" === r.mode && (r.geometry = "LinePlot", 
                        r.dotVisible = !0) : "area" === r.type ? r.geometry = "AreaChart" : "bar" === r.type && (r.geometry = "BarChart"), 
                        delete r.mode, delete r.type), r;
                    }), !e && t.layout && "stack" === t.layout.barmode)) {
                        var a = n.util.duplicates(r.data.map(function(t) {
                            return t.geometry;
                        }));
                        r.data.forEach(function(t, e) {
                            var n = a.indexOf(t.geometry);
                            -1 != n && (r.data[e].groupId = n);
                        });
                    }
                    if (t.layout) {
                        var o = n.util.deepExtend({}, t.layout), i = [ [ o, [ "plot_bgcolor" ], [ "backgroundColor" ] ], [ o, [ "showlegend" ], [ "showLegend" ] ], [ o, [ "radialaxis" ], [ "radialAxis" ] ], [ o, [ "angularaxis" ], [ "angularAxis" ] ], [ o.angularaxis, [ "showline" ], [ "gridLinesVisible" ] ], [ o.angularaxis, [ "showticklabels" ], [ "labelsVisible" ] ], [ o.angularaxis, [ "nticks" ], [ "ticksCount" ] ], [ o.angularaxis, [ "tickorientation" ], [ "tickOrientation" ] ], [ o.angularaxis, [ "ticksuffix" ], [ "ticksSuffix" ] ], [ o.angularaxis, [ "range" ], [ "domain" ] ], [ o.angularaxis, [ "endpadding" ], [ "endPadding" ] ], [ o.radialaxis, [ "showline" ], [ "gridLinesVisible" ] ], [ o.radialaxis, [ "tickorientation" ], [ "tickOrientation" ] ], [ o.radialaxis, [ "ticksuffix" ], [ "ticksSuffix" ] ], [ o.radialaxis, [ "range" ], [ "domain" ] ], [ o.angularAxis, [ "showline" ], [ "gridLinesVisible" ] ], [ o.angularAxis, [ "showticklabels" ], [ "labelsVisible" ] ], [ o.angularAxis, [ "nticks" ], [ "ticksCount" ] ], [ o.angularAxis, [ "tickorientation" ], [ "tickOrientation" ] ], [ o.angularAxis, [ "ticksuffix" ], [ "ticksSuffix" ] ], [ o.angularAxis, [ "range" ], [ "domain" ] ], [ o.angularAxis, [ "endpadding" ], [ "endPadding" ] ], [ o.radialAxis, [ "showline" ], [ "gridLinesVisible" ] ], [ o.radialAxis, [ "tickorientation" ], [ "tickOrientation" ] ], [ o.radialAxis, [ "ticksuffix" ], [ "ticksSuffix" ] ], [ o.radialAxis, [ "range" ], [ "domain" ] ], [ o.font, [ "outlinecolor" ], [ "outlineColor" ] ], [ o.legend, [ "traceorder" ], [ "reverseOrder" ] ], [ o, [ "labeloffset" ], [ "labelOffset" ] ], [ o, [ "defaultcolorrange" ], [ "defaultColorRange" ] ] ];
                        if (i.forEach(function(t) {
                            n.util.translator.apply(null, t.concat(e));
                        }), e ? ("undefined" != typeof o.tickLength && (o.angularaxis.ticklen = o.tickLength, 
                        delete o.tickLength), o.tickColor && (o.angularaxis.tickcolor = o.tickColor, delete o.tickColor)) : (o.angularAxis && "undefined" != typeof o.angularAxis.ticklen && (o.tickLength = o.angularAxis.ticklen), 
                        o.angularAxis && "undefined" != typeof o.angularAxis.tickcolor && (o.tickColor = o.angularAxis.tickcolor)), 
                        o.legend && "boolean" != typeof o.legend.reverseOrder && (o.legend.reverseOrder = "normal" != o.legend.reverseOrder), 
                        o.legend && "boolean" == typeof o.legend.traceorder && (o.legend.traceorder = o.legend.traceorder ? "reversed" : "normal", 
                        delete o.legend.reverseOrder), o.margin && "undefined" != typeof o.margin.t) {
                            var l = [ "t", "r", "b", "l", "pad" ], s = [ "top", "right", "bottom", "left", "pad" ], c = {};
                            d3.entries(o.margin).forEach(function(t) {
                                c[s[l.indexOf(t.key)]] = t.value;
                            }), o.margin = c;
                        }
                        e && (delete o.needsEndSpacing, delete o.minorTickColor, delete o.minorTicks, delete o.angularaxis.ticksCount, 
                        delete o.angularaxis.ticksCount, delete o.angularaxis.ticksStep, delete o.angularaxis.rewriteTicks, 
                        delete o.angularaxis.nticks, delete o.radialaxis.ticksCount, delete o.radialaxis.ticksCount, 
                        delete o.radialaxis.ticksStep, delete o.radialaxis.rewriteTicks, delete o.radialaxis.nticks), 
                        r.layout = o;
                    }
                    return r;
                }, t;
            };
        }, {
            "./plotly": 27
        } ],
        24: [ function(t, e) {
            "use strict";
            var r = e.exports = {}, n = t("./plotly");
            r.framework = function(t) {
                function e(e, o) {
                    return o && (s = o), d3.select(d3.select(s).node().parentNode).selectAll(".svg-container>*:not(.chart-root)").remove(), 
                    a = a ? n.micropolar.util.deepExtend(a, e) : e, i || (i = n.micropolar.Axis()), 
                    l = n.micropolar.adapter.plotly().convert(a), i.config(l).render(s), t.data = a.data, 
                    t.layout = a.layout, r.fillLayout(t), a;
                }
                var a, o, i, l, s, c = new n.util.UndoManager();
                return e.isPolar = !0, e.svg = function() {
                    return i.svg();
                }, e.getConfig = function() {
                    return a;
                }, e.getLiveConfig = function() {
                    return n.micropolar.adapter.plotly().convert(i.getLiveConfig(), !0);
                }, e.getLiveScales = function() {
                    return {
                        t: i.angularScale(),
                        r: i.radialScale()
                    };
                }, e.setUndoPoint = function() {
                    var t = this, e = n.micropolar.util.cloneJson(a);
                    !function(e, r) {
                        c.add({
                            undo: function() {
                                r && t(r);
                            },
                            redo: function() {
                                t(e);
                            }
                        });
                    }(e, o), o = n.micropolar.util.cloneJson(e);
                }, e.undo = function() {
                    c.undo();
                }, e.redo = function() {
                    c.redo();
                }, e;
            }, r.fillLayout = function(t) {
                var e = d3.select(t).selectAll(".plot-container"), r = e.selectAll(".svg-container"), a = t.framework && t.framework.svg && t.framework.svg(), o = {
                    width: 800,
                    height: 600,
                    paper_bgcolor: n.Color.background,
                    _container: e,
                    _paperdiv: r,
                    _paper: a
                };
                t._fullLayout = n.micropolar.util.deepExtend(o, t.layout);
            };
        }, {
            "./plotly": 27
        } ],
        25: [ function(t, e) {
            "use strict";
            function r(t) {
                if (!(this instanceof r)) return new r();
                var e = this;
                this.graphInfo = t.graphInfo, this.element = document.createElement("div"), this.element.className = "hover" === this.graphInfo._context.displayModeBar ? "modebar modebar--hover" : "modebar", 
                this.buttons = t.buttons, this.buttonElements = [], this.buttons.forEach(function(t) {
                    var r = e.createGroup();
                    t.forEach(function(t) {
                        var n = e.config()[t];
                        if (!n) throw new Error(t + " not specfied in modebar configuration");
                        var a = e.createButton(n);
                        e.buttonElements.push(a), r.appendChild(a);
                    }), e.element.appendChild(r);
                }), 
                t.container.appendChild(this.element), this.updateActiveButton();
            }
            var n = t("./plotly"), a = r.prototype;
            a.createGroup = function() {
                var t = document.createElement("div");
                return t.className = "modebar-group", t;
            }, a.createButton = function(t) {
                var e = this, r = document.createElement("a");
                return r.setAttribute("rel", "tooltip"), r.className = "modebar-btn", r.setAttribute("data-attr", t.attr), 
                r.setAttribute("data-val", t.val), r.setAttribute("data-title", t.title), r.setAttribute("data-gravity", t.gravity || "n"), 
                r.addEventListener("click", function() {
                    t.click.apply(e, arguments);
                }), r.appendChild(this.createIcon(n.Icons[t.icon])), r;
            }, a.createIcon = function(t) {
                var e = n.Icons, r = e.ascent - e.descent, a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), i = document.createElementNS(a, "path");
                return o.setAttribute("height", "1em"), o.setAttribute("width", t.width / r + "em"), 
                o.setAttribute("viewBox", [ 0, 0, t.width, r ].join(" ")), i.setAttribute("d", t.path), 
                i.setAttribute("transform", "matrix(1 0 0 -1 0 " + e.ascent + ")"), o.appendChild(i), 
                o;
            }, a.updateActiveButton = function() {
                var t = this.graphInfo;
                this.buttonElements.forEach(function(e) {
                    var r = e.getAttribute("data-val") || !0, n = e.getAttribute("data-attr"), a = t._fullLayout[n];
                    d3.select(e).classed("active", a === r);
                });
            }, a.hasButtons = function(t) {
                var e = this.buttons;
                if (t.length !== e.length) return !1;
                for (var r = 0; r < t.length; ++r) {
                    if (t[r].length !== e[r].length) return !1;
                    for (var n = 0; n < t[r].length; n++) if (t[r][n] !== e[r][n]) return !1;
                }
                return !0;
            }, a.getLogo = function() {
                var t = this.createGroup(), e = document.createElement("a");
                return e.href = "https://plot.ly/", e.target = "_blank", e.setAttribute("data-title", "Produced with Plotly"), 
                e.className = "modebar-btn plotlyjsicon modebar-btn--logo", e.appendChild(this.createIcon(n.Icons.plotlylogo)), 
                t.appendChild(e), t;
            }, a.handleCartesian = function(t) {
                var e = t.currentTarget, r = e.getAttribute("data-attr"), a = e.getAttribute("data-val") || !0, o = this, i = this.graphInfo, l = this.graphInfo._fullLayout, s = {};
                if ("zoom" === r) for (var c, d, u, f = "in" === a ? .5 : 2, h = (1 + f) / 2, p = (1 - f) / 2, g = n.Axes.list(i, null, !0), m = 0; m < g.length; m++) c = g[m], 
                c.fixedrange || (d = c._name, "auto" === a ? s[d + ".autorange"] = !0 : "reset" === a ? void 0 === c._rangeInitial ? s[d + ".autorange"] = !0 : s[d + ".range"] = c._rangeInitial.slice() : (u = c.range, 
                s[d + ".range"] = [ h * u[0] + p * u[1], h * u[1] + p * u[0] ])); else "hovermode" !== r || "x" !== a && "y" !== a || (a = l._isHoriz ? "y" : "x", 
                e.setAttribute("data-val", a)), s[r] = a;
                n.relayout(i, s).then(function() {
                    o.updateActiveButton(), "dragmode" === r && (n.Fx.setCursor(l._paper.select(".nsewdrag"), {
                        pan: "move",
                        zoom: "crosshair"
                    }[a]), n.Fx.supplyLayoutDefaults(i.layout, l, i._fullData));
                });
            }, a.handleHover3d = function(t) {
                var e, r, a, o, i, l, s, c, d, u = t.currentTarget, f = JSON.parse(u.getAttribute("data-val")) || !1, h = this, p = this.graphInfo, g = p._fullLayout, m = n.Plots.getSubplotIds(g, "gl3d"), y = {}, v = {}, x = [ "xaxis", "yaxis", "zaxis" ], b = [ "showspikes", "spikesides", "spikethickness", "spikecolor" ];
                if (f) y = f, u.setAttribute("data-val", JSON.stringify(null)); else {
                    for (y = {
                        "allaxes.showspikes": !1
                    }, e = 0; e < m.length; e++) for (r = m[e], a = g[r], o = v[r] = {}, i = 0; 3 > i; i++) for (l = x[i], 
                    s = o[l] = {}, c = 0; c < b.length; c++) d = b[c], s[d] = a[l][d];
                    u.setAttribute("data-val", JSON.stringify(v));
                }
                n.relayout(p, y).then(function() {
                    h.updateActiveButton();
                });
            }, a.handleDrag3d = function(t) {
                var e = t.currentTarget, r = e.getAttribute("data-attr"), a = e.getAttribute("data-val") || !0, o = this, i = this.graphInfo, l = {};
                l[r] = a, n.relayout(i, l).then(function() {
                    o.updateActiveButton();
                });
            }, a.handleCamera3d = function(t) {
                var e, r, a, o, i, l, s = t.currentTarget, c = s.getAttribute("data-attr"), d = this.graphInfo.layout, u = this.graphInfo._fullLayout, f = n.Plots.getSubplotIds(u, "gl3d");
                for (e = 0; e < f.length; e++) r = f[e], a = d[r], o = u[r], i = o._scene, a && "resetDefault" !== c ? "resetLastSave" === c && (l = a.camera, 
                l ? i.setCamera(l) : i.setCameraToDefault()) : i.setCameraToDefault();
            }, a.handleGeo = function(t) {
                for (var e, r, a, o = t.currentTarget, i = o.getAttribute("data-attr"), l = o.getAttribute("data-val") || !0, s = this.graphInfo._fullLayout, c = n.Plots.getSubplotIds(s, "geo"), d = 0; d < c.length; d++) e = s[c[d]]._geo, 
                "zoom" === i ? (r = e.projection.scale(), a = "in" === l ? 2 * r : .5 * r, e.projection.scale(a), 
                e.zoom.scale(a), e.render()) : "reset" === i ? e.zoomReset() : "hovermode" === i && (e.showHover = !e.showHover);
            }, a.handleHoverPie = function() {
                var t = this.graphInfo._fullLayout.hovermode;
                n.relayout(this.graphInfo, "hovermode", t ? !1 : "closest");
            }, a.cleanup = function() {
                this.element.innerHTML = "";
                var t = this.element.parentNode;
                t && t.removeChild(this.element);
            }, a.config = function() {
                return {
                    zoom2d: {
                        title: "Zoom",
                        attr: "dragmode",
                        val: "zoom",
                        icon: "zoombox",
                        click: this.handleCartesian
                    },
                    pan2d: {
                        title: "Pan",
                        attr: "dragmode",
                        val: "pan",
                        icon: "pan",
                        click: this.handleCartesian
                    },
                    zoomIn2d: {
                        title: "Zoom in",
                        attr: "zoom",
                        val: "in",
                        icon: "zoom_plus",
                        click: this.handleCartesian
                    },
                    zoomOut2d: {
                        title: "Zoom out",
                        attr: "zoom",
                        val: "out",
                        icon: "zoom_minus",
                        click: this.handleCartesian
                    },
                    autoScale2d: {
                        title: "Autoscale",
                        attr: "zoom",
                        val: "auto",
                        icon: "autoscale",
                        click: this.handleCartesian
                    },
                    resetScale2d: {
                        title: "Reset axes",
                        attr: "zoom",
                        val: "reset",
                        icon: "home",
                        click: this.handleCartesian
                    },
                    hoverClosest2d: {
                        title: "Show closest data on hover",
                        attr: "hovermode",
                        val: "closest",
                        icon: "tooltip_basic",
                        gravity: "ne",
                        click: this.handleCartesian
                    },
                    hoverCompare2d: {
                        title: "Compare data on hover",
                        attr: "hovermode",
                        val: this.graphInfo._fullLayout._isHoriz ? "y" : "x",
                        icon: "tooltip_compare",
                        gravity: "ne",
                        click: this.handleCartesian
                    },
                    zoom3d: {
                        title: "Zoom",
                        attr: "dragmode",
                        val: "zoom",
                        icon: "zoombox",
                        click: this.handleDrag3d
                    },
                    pan3d: {
                        title: "Pan",
                        attr: "dragmode",
                        val: "pan",
                        icon: "pan",
                        click: this.handleDrag3d
                    },
                    orbitRotation: {
                        title: "orbital rotation",
                        attr: "dragmode",
                        val: "orbit",
                        icon: "3d_rotate",
                        click: this.handleDrag3d
                    },
                    tableRotation: {
                        title: "turntable rotation",
                        attr: "dragmode",
                        val: "turntable",
                        icon: "z-axis",
                        click: this.handleDrag3d
                    },
                    resetCameraDefault3d: {
                        title: "Reset camera to default",
                        attr: "resetDefault",
                        icon: "home",
                        click: this.handleCamera3d
                    },
                    resetCameraLastSave3d: {
                        title: "Reset camera to last save",
                        attr: "resetLastSave",
                        icon: "camera-retro",
                        click: this.handleCamera3d
                    },
                    hoverClosest3d: {
                        title: "Toggle show closest data on hover",
                        attr: "hovermode",
                        val: null,
                        icon: "tooltip_basic",
                        gravity: "ne",
                        click: this.handleHover3d
                    },
                    zoomInGeo: {
                        title: "Zoom in",
                        attr: "zoom",
                        val: "in",
                        icon: "zoom_plus",
                        click: this.handleGeo
                    },
                    zoomOutGeo: {
                        title: "Zoom out",
                        attr: "zoom",
                        val: "out",
                        icon: "zoom_minus",
                        click: this.handleGeo
                    },
                    resetGeo: {
                        title: "Reset",
                        attr: "reset",
                        icon: "autoscale",
                        click: this.handleGeo
                    },
                    hoverClosestGeo: {
                        title: "Toggle show closest data on hover",
                        attr: "hovermode",
                        val: null,
                        icon: "tooltip_basic",
                        gravity: "ne",
                        click: this.handleGeo
                    },
                    hoverClosestPie: {
                        title: "Toggle show closest data on hover",
                        attr: "hovermode",
                        val: null,
                        icon: "tooltip_basic",
                        gravity: "ne",
                        click: this.handleHoverPie
                    }
                };
            }, e.exports = r;
        }, {
            "./plotly": 27
        } ],
        26: [ function(t, e) {
            "use strict";
            function r(t) {
                var e = (100 * t).toPrecision(3);
                return -1 !== e.indexOf(".") ? e.replace(/[.]?0+$/, "") + "%" : e + "%";
            }
            function n(t) {
                var e = t.toPrecision(10);
                return -1 !== e.indexOf(".") ? e.replace(/[.]?0+$/, "") : e;
            }
            function a(t) {
                if (!m) {
                    var e = h.Color.defaults;
                    m = e.slice();
                    for (var r = 0; r < e.length; r++) m.push(g(e[r]).lighten(20).toHexString());
                    for (r = 0; r < h.Color.defaults.length; r++) m.push(g(e[r]).darken(20).toHexString());
                }
                return m[t % m.length];
            }
            function o(t, e) {
                if (t.v === e.vTotal && !e.trace.hole) return 1;
                var r = Math.PI * Math.min(t.v / e.vTotal, .5);
                return Math.min(1 / (1 + 1 / Math.sin(r)), (1 - e.trace.hole) / 2);
            }
            function i(t, e, r) {
                var n = Math.sqrt(t.width * t.width + t.height * t.height), a = t.width / t.height, i = Math.PI * Math.min(e.v / r.vTotal, .5), l = 1 - r.trace.hole, s = o(e, r), c = {
                    scale: s * r.r * 2 / n,
                    rCenter: 1 - s,
                    rotate: 0
                };
                if (c.scale >= 1) return c;
                var d = a + 1 / (2 * Math.tan(i)), u = r.r * Math.min(1 / (Math.sqrt(d * d + .5) + d), l / (Math.sqrt(a * a + l / 2) + a)), f = {
                    scale: 2 * u / t.height,
                    rCenter: Math.cos(u / r.r) - u * a / r.r,
                    rotate: (180 / Math.PI * e.midangle + 720) % 180 - 90
                }, h = 1 / a, p = h + 1 / (2 * Math.tan(i)), g = r.r * Math.min(1 / (Math.sqrt(p * p + .5) + p), l / (Math.sqrt(h * h + l / 2) + h)), m = {
                    scale: 2 * g / t.width,
                    rCenter: Math.cos(g / r.r) - g / a / r.r,
                    rotate: (180 / Math.PI * e.midangle + 810) % 180 - 90
                }, y = m.scale > f.scale ? m : f;
                return c.scale < 1 && y.scale > c.scale ? y : c;
            }
            function l(t, e) {
                var r = e.pxmid[0], n = e.pxmid[1], a = t.width / 2, o = t.height / 2;
                return 0 > r && (a *= -1), 0 > n && (o *= -1), {
                    scale: 1,
                    rCenter: 1,
                    rotate: 0,
                    x: a + Math.abs(o) * (a > 0 ? 1 : -1) / 2,
                    y: o / (1 + r * r / (n * n)),
                    outside: !0
                };
            }
            function s(t, e) {
                function r(t, e) {
                    return t.pxmid[1] - e.pxmid[1];
                }
                function n(t, e) {
                    return e.pxmid[1] - t.pxmid[1];
                }
                function a(t, r) {
                    r || (r = {});
                    var n, a, o, l, f, h, g = r.labelExtraY + (i ? r.yLabelMax : r.yLabelMin), m = i ? t.yLabelMin : t.yLabelMax, y = i ? t.yLabelMax : t.yLabelMin, v = t.cyFinal + c(t.px0[1], t.px1[1]), x = g - m;
                    if (x * u > 0 && (t.labelExtraY = x), Array.isArray(e.pull)) for (a = 0; a < p.length; a++) o = p[a], 
                    o === t || (e.pull[t.i] || 0) >= e.pull[o.i] || ((t.pxmid[1] - o.pxmid[1]) * u > 0 ? (l = o.cyFinal + c(o.px0[1], o.px1[1]), 
                    x = l - m - t.labelExtraY, x * u > 0 && (t.labelExtraY += x)) : (y + t.labelExtraY - v) * u > 0 && (n = 3 * d * Math.abs(a - p.indexOf(t)), 
                    f = o.cxFinal + s(o.px0[0], o.px1[0]), h = f + n - (t.cxFinal + t.pxmid[0]) - t.labelExtraX, 
                    h * d > 0 && (t.labelExtraX += h)));
                }
                var o, i, l, s, c, d, u, f, h, p, g, m, y;
                for (i = 0; 2 > i; i++) for (l = i ? r : n, c = i ? Math.max : Math.min, u = i ? 1 : -1, 
                o = 0; 2 > o; o++) {
                    for (s = o ? Math.max : Math.min, d = o ? 1 : -1, f = t[i][o], f.sort(l), h = t[1 - i][o], 
                    p = h.concat(f), m = [], g = 0; g < f.length; g++) void 0 !== f[g].yLabelMid && m.push(f[g]);
                    for (y = !1, g = 0; i && g < h.length; g++) if (void 0 !== h[g].yLabelMid) {
                        y = h[g];
                        break;
                    }
                    for (g = 0; g < m.length; g++) {
                        var v = g && m[g - 1];
                        y && !g && (v = y), a(m[g], v);
                    }
                }
            }
            function c(t, e) {
                var r, n, a, o, i, l, s, c, d, f, h = [];
                for (a = 0; a < t.length; a++) {
                    if (i = t[a][0], l = i.trace, r = e.w * (l.domain.x[1] - l.domain.x[0]), n = e.h * (l.domain.y[1] - l.domain.y[0]), 
                    s = l.tiltaxis * Math.PI / 180, c = l.pull, Array.isArray(c)) for (c = 0, o = 0; o < l.pull.length; o++) l.pull[o] > c && (c = l.pull[o]);
                    i.r = Math.min(r / u(l.tilt, Math.sin(s), l.depth), n / u(l.tilt, Math.cos(s), l.depth)) / (2 + 2 * c), 
                    i.cx = e.l + e.w * (l.domain.x[1] + l.domain.x[0]) / 2, i.cy = e.t + e.h * (2 - l.domain.y[1] - l.domain.y[0]) / 2, 
                    l.scalegroup && -1 === h.indexOf(l.scalegroup) && h.push(l.scalegroup);
                }
                for (o = 0; o < h.length; o++) {
                    for (f = 1 / 0, d = h[o], a = 0; a < t.length; a++) i = t[a][0], i.trace.scalegroup === d && (f = Math.min(f, i.r * i.r / i.vTotal));
                    for (a = 0; a < t.length; a++) i = t[a][0], i.trace.scalegroup === d && (i.r = Math.sqrt(f * i.vTotal));
                }
            }
            function d(t) {
                function e(t) {
                    var e = u.r * Math.sin(t), r = -u.r * Math.cos(t);
                    return h ? [ e * (1 - l * n * n) + r * i * l, e * i * l + r * (1 - l * a * a), Math.sin(o) * (r * a - e * n) ] : [ e, r ];
                }
                var r, n, a, o, i, l, s, c, d, u = t[0], f = u.trace, h = f.tilt, p = f.rotation * Math.PI / 180, g = 2 * Math.PI / u.vTotal, m = "px0", y = "px1";
                if ("counterclockwise" === f.direction) {
                    for (s = 0; s < t.length && t[s].hidden; s++) ;
                    if (s === t.length) return;
                    p += g * t[s].v, g *= -1, m = "px1", y = "px0";
                }
                for (h && (o = h * Math.PI / 180, r = f.tiltaxis * Math.PI / 180, i = Math.sin(r) * Math.cos(r), 
                l = 1 - Math.cos(o), n = Math.sin(r), a = Math.cos(r)), d = e(p), s = 0; s < t.length; s++) c = t[s], 
                c.hidden || (c[m] = d, p += g * c.v / 2, c.pxmid = e(p), c.midangle = p, p += g * c.v / 2, 
                d = e(p), c[y] = d, c.largeArc = c.v > u.vTotal / 2 ? 1 : 0);
            }
            function u(t, e, r) {
                if (!t) return 1;
                var n = Math.sin(t * Math.PI / 180);
                return Math.max(.01, r * n * Math.abs(e) + 2 * Math.sqrt(1 - n * n * e * e));
            }
            var f = e.exports = {}, h = t("./plotly"), p = t("./isnumeric"), g = t("tinycolor2");
            h.Plots.register(f, "pie", [ "pie", "showLegend" ]), f.attributes = {
                labels: {
                    type: "data_array"
                },
                label0: {
                    type: "number",
                    dflt: 0
                },
                dlabel: {
                    type: "number",
                    dflt: 1
                },
                values: {
                    type: "data_array"
                },
                marker: {
                    colors: {
                        type: "data_array"
                    },
                    line: {
                        color: {
                            type: "color",
                            dflt: h.Color.defaultLine,
                            arrayOk: !0
                        },
                        width: {
                            type: "number",
                            min: 0,
                            dflt: 0,
                            arrayOk: !0
                        }
                    }
                },
                text: {
                    type: "data_array"
                },
                scalegroup: {
                    type: "string",
                    dflt: ""
                },
                textinfo: {
                    type: "flaglist",
                    flags: [ "label", "text", "value", "percent" ],
                    extras: [ "none" ]
                },
                hoverinfo: {
                    type: "flaglist",
                    flags: [ "label", "text", "value", "percent", "name" ],
                    extras: [ "all", "none" ],
                    dflt: "all"
                },
                textposition: {
                    type: "enumerated",
                    values: [ "inside", "outside", "auto", "none" ],
                    dflt: "auto",
                    arrayOk: !0
                },
                textfont: {
                    type: "font"
                },
                insidetextfont: {
                    type: "font"
                },
                outsidetextfont: {
                    type: "font"
                },
                domain: {
                    x: [ {
                        type: "number",
                        min: 0,
                        max: 1,
                        dflt: 0
                    }, {
                        type: "number",
                        min: 0,
                        max: 1,
                        dflt: 1
                    } ],
                    y: [ {
                        type: "number",
                        min: 0,
                        max: 1,
                        dflt: 0
                    }, {
                        type: "number",
                        min: 0,
                        max: 1,
                        dflt: 1
                    } ]
                },
                hole: {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 0
                },
                sort: {
                    type: "boolean",
                    dflt: !0
                },
                direction: {
                    type: "enumerated",
                    values: [ "clockwise", "counterclockwise" ],
                    dflt: "counterclockwise"
                },
                rotation: {
                    type: "number",
                    min: -360,
                    max: 360,
                    dflt: 0
                },
                pull: {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 0,
                    arrayOk: !0
                }
            }, f.supplyDefaults = function(t, e, r, n) {
                function a(r, n) {
                    return h.Lib.coerce(t, e, f.attributes, r, n);
                }
                var o = a("values");
                if (!Array.isArray(o) || !o.length) return void (e.visible = !1);
                var i = a("labels");
                Array.isArray(i) || (a("label0"), a("dlabel"));
                var l = a("marker.line.width");
                l && a("marker.line.color");
                var s = a("marker.colors");
                Array.isArray(s) || (e.marker.colors = []), a("scalegroup");
                var c = a("text"), d = a("textinfo", Array.isArray(c) ? "text+percent" : "percent");
                if (a("hoverinfo"), d && "none" !== d) {
                    var u = a("textposition"), p = Array.isArray(u) || "auto" === u, g = p || "inside" === u, m = p || "outside" === u;
                    if (g || m) {
                        var y = a("textfont", n.font);
                        g && a("insidetextfont", y), m && a("outsidetextfont", y);
                    }
                }
                a("domain.x[0]"), a("domain.x[1]"), a("domain.y[0]"), a("domain.y[1]"), a("hole"), 
                a("sort"), a("direction"), a("rotation"), a("pull");
            }, f.layoutAttributes = {
                hiddenlabels: {
                    type: "data_array"
                }
            }, f.supplyLayoutDefaults = function(t, e) {
                function r(r, n) {
                    return h.Lib.coerce(t, e, f.layoutAttributes, r, n);
                }
                r("hiddenlabels");
            }, f.calc = function(t, e) {
                var o, i, l, s, c, d, u = e.values, f = e.labels, m = [], y = t._fullLayout, v = y._piecolormap, x = {}, b = !1, _ = 0, w = y.hiddenlabels || [];
                if (e.dlabel) for (f = new Array(u.length), o = 0; o < u.length; o++) f[o] = String(e.label0 + o * e.dlabel);
                for (o = 0; o < u.length; o++) i = u[o], p(i) && (i = +i, 0 > i || (l = f[o], (void 0 === l || "" === l) && (l = o), 
                l = String(l), void 0 === x[l] && (x[l] = !0, s = g(e.marker.colors[o]), s.isValid() ? (s = h.Color.tinyRGB(s), 
                v[l] || (v[l] = s)) : v[l] ? s = v[l] : (s = !1, b = !0), c = -1 !== w.indexOf(l), 
                c || (_ += i), m.push({
                    v: i,
                    label: l,
                    color: s,
                    i: o,
                    hidden: c
                }))));
                if (e.sort && m.sort(function(t, e) {
                    return e.v - t.v;
                }), b) for (o = 0; o < m.length; o++) d = m[o], d.color === !1 && (v[d.label] = d.color = a(y._piedefaultcolorcount), 
                y._piedefaultcolorcount++);
                if (m[0] && (m[0].vTotal = _), e.textinfo && "none" !== e.textinfo) {
                    var k, A = -1 !== e.textinfo.indexOf("label"), M = -1 !== e.textinfo.indexOf("text"), L = -1 !== e.textinfo.indexOf("value"), z = -1 !== e.textinfo.indexOf("percent");
                    for (o = 0; o < m.length; o++) d = m[o], k = A ? [ d.label ] : [], M && e.text[d.i] && k.push(e.text[d.i]), 
                    L && k.push(n(d.v)), z && k.push(r(d.v / _)), d.text = k.join("<br>");
                }
                return m;
            };
            var m;
            f.plot = function(t, e) {
                var a = t._fullLayout;
                c(e, a._size);
                var u = a._pielayer.selectAll("g.trace").data(e);
                u.enter().append("g").attr({
                    "stroke-linejoin": "round",
                    "class": "trace"
                }), u.exit().remove(), u.order(), u.each(function(e) {
                    var c = d3.select(this), u = e[0], f = u.trace, p = 0, g = (f.depth || 0) * u.r * Math.sin(p) / 2, m = f.tiltaxis || 0, y = m * Math.PI / 180, v = [ g * Math.sin(y), g * Math.cos(y) ], x = u.r * Math.cos(p), b = c.selectAll("g.part").data(f.tilt ? [ "top", "sides" ] : [ "top" ]);
                    b.enter().append("g").attr("class", function(t) {
                        return t + " part";
                    }), b.exit().remove(), b.order(), d(e), c.selectAll(".top").each(function() {
                        var c = d3.select(this).selectAll("g.slice").data(e);
                        c.enter().append("g").classed("slice", !0), c.exit().remove();
                        var d = [ [ [], [] ], [ [], [] ] ], p = !1;
                        c.each(function(e) {
                            function s() {
                                var a = t._fullLayout, i = t._fullData[f.index], l = i.hoverinfo;
                                if ("all" === l && (l = "label+text+value+percent+name"), !t._dragging && a.hovermode !== !1 && "none" !== l && l) {
                                    var s = o(e, u), c = y + e.pxmid[0] * (1 - s), d = b + e.pxmid[1] * (1 - s), p = [];
                                    -1 !== l.indexOf("label") && p.push(e.label), i.text && i.text[e.i] && -1 !== l.indexOf("text") && p.push(i.text[e.i]), 
                                    -1 !== l.indexOf("value") && p.push(n(e.v)), -1 !== l.indexOf("percent") && p.push(r(e.v / u.vTotal)), 
                                    h.Fx.loneHover({
                                        x0: c - s * u.r,
                                        x1: c + s * u.r,
                                        y: d,
                                        text: p.join("<br>"),
                                        name: -1 !== l.indexOf("name") ? i.name : void 0,
                                        color: e.color,
                                        idealAlign: e.pxmid[0] < 0 ? "left" : "right"
                                    }, {
                                        container: a._hoverlayer.node(),
                                        outerContainer: a._paper.node()
                                    }), k = !0;
                                }
                            }
                            function c() {
                                k && (h.Fx.loneUnhover(a._hoverlayer.node()), k = !1);
                            }
                            function g(t, r, n, a) {
                                return "a" + a * u.r + "," + a * x + " " + m + " " + e.largeArc + (n ? " 1 " : " 0 ") + a * (r[0] - t[0]) + "," + a * (r[1] - t[1]);
                            }
                            if (e.hidden) return void d3.select(this).selectAll("path,g").remove();
                            d[e.pxmid[1] < 0 ? 0 : 1][e.pxmid[0] < 0 ? 0 : 1].push(e);
                            var y = u.cx + v[0], b = u.cy + v[1], _ = d3.select(this), w = _.selectAll("path.surface").data([ e ]), k = !1;
                            if (w.enter().append("path").classed("surface", !0).style({
                                "pointer-events": "all"
                            }), _.select("path.textline").remove(), _.on("mouseover", s).on("mouseout", c), 
                            f.pull) {
                                var A = +(Array.isArray(f.pull) ? f.pull[e.i] : f.pull) || 0;
                                A > 0 && (y += A * e.pxmid[0], b += A * e.pxmid[1]);
                            }
                            e.cxFinal = y, e.cyFinal = b;
                            var M = f.hole;
                            if (e.v === u.vTotal) {
                                var L = "M" + (y + e.px0[0]) + "," + (b + e.px0[1]) + g(e.px0, e.pxmid, !0, 1) + g(e.pxmid, e.px0, !0, 1) + "Z";
                                M ? w.attr("d", "M" + (y + M * e.px0[0]) + "," + (b + M * e.px0[1]) + g(e.px0, e.pxmid, !1, M) + g(e.pxmid, e.px0, !1, M) + "Z" + L) : w.attr("d", L);
                            } else {
                                var z = g(e.px0, e.px1, !0, 1);
                                if (M) {
                                    var C = 1 - M;
                                    w.attr("d", "M" + (y + M * e.px1[0]) + "," + (b + M * e.px1[1]) + g(e.px1, e.px0, !1, M) + "l" + C * e.px0[0] + "," + C * e.px0[1] + z + "Z");
                                } else w.attr("d", "M" + y + "," + b + "l" + e.px0[0] + "," + e.px0[1] + z + "Z");
                            }
                            var D = Array.isArray(f.textposition) ? f.textposition[e.i] : f.textposition, O = _.selectAll("g.slicetext").data(e.text && "none" !== D ? [ 0 ] : []);
                            O.enter().append("g").classed("slicetext", !0), O.exit().remove(), O.each(function() {
                                var t = d3.select(this).selectAll("text").data([ 0 ]);
                                t.enter().append("text").attr("data-notex", 1), t.exit().remove(), t.text(e.text).attr({
                                    "class": "slicetext",
                                    transform: "",
                                    "data-bb": "",
                                    "text-anchor": "middle",
                                    x: 0,
                                    y: 0
                                }).call(h.Drawing.font, "outside" === D ? f.outsidetextfont : f.insidetextfont).call(h.util.convertToTspans), 
                                t.selectAll("tspan.line").attr({
                                    x: 0,
                                    y: 0
                                });
                                var r, n = h.Drawing.bBox(t.node());
                                "outside" === D ? r = l(n, e) : (r = i(n, e, u), "auto" === D && r.scale < 1 && (t.call(h.Drawing.font, f.outsidetextfont), 
                                (f.outsidetextfont.family !== f.insidetextfont.family || f.outsidetextfont.size !== f.insidetextfont.size) && (t.attr({
                                    "data-bb": ""
                                }), n = h.Drawing.bBox(t.node())), r = l(n, e)));
                                var a = y + e.pxmid[0] * r.rCenter + (r.x || 0), o = b + e.pxmid[1] * r.rCenter + (r.y || 0);
                                r.outside && (e.yLabelMin = o - n.height / 2, e.yLabelMid = o, e.yLabelMax = o + n.height / 2, 
                                e.labelExtraX = 0, e.labelExtraY = 0, p = !0), t.attr("transform", "translate(" + a + "," + o + ")" + (r.scale < 1 ? "scale(" + r.scale + ")" : "") + (r.rotate ? "rotate(" + r.rotate + ")" : "") + "translate(" + -(n.left + n.right) / 2 + "," + -(n.top + n.bottom) / 2 + ")");
                            });
                        }), p && s(d, f), c.each(function(t) {
                            if (t.labelExtraX || t.labelExtraY) {
                                var e = d3.select(this), r = e.select("g.slicetext text");
                                r.attr("transform", "translate(" + t.labelExtraX + "," + t.labelExtraY + ")" + r.attr("transform"));
                                var n = t.cxFinal + t.pxmid[0], a = t.cyFinal + t.pxmid[1], o = "M" + n + "," + a, i = (t.yLabelMax - t.yLabelMin) * (t.pxmid[0] < 0 ? -1 : 1) / 4;
                                if (t.labelExtraX) {
                                    var l = t.labelExtraX * t.pxmid[1] / t.pxmid[0], s = t.yLabelMid + t.labelExtraY - (t.cyFinal + t.pxmid[1]);
                                    o += Math.abs(l) > Math.abs(s) ? "l" + s * t.pxmid[0] / t.pxmid[1] + "," + s + "H" + (n + t.labelExtraX + i) : "l" + t.labelExtraX + "," + l + "v" + (s - l) + "h" + i;
                                } else o += "V" + (t.yLabelMid + t.labelExtraY) + "h" + i;
                                e.append("path").classed("textline", !0).call(h.Color.stroke, f.outsidetextfont.color).attr({
                                    "stroke-width": Math.min(2, f.outsidetextfont.size / 8),
                                    d: o,
                                    fill: "none"
                                });
                            }
                        });
                    });
                }), setTimeout(function() {
                    u.selectAll("tspan").each(function() {
                        var t = d3.select(this);
                        t.attr("dy") && t.attr("dy", t.attr("dy"));
                    });
                }, 0);
            }, f.style = function(t) {
                t._fullLayout._pielayer.selectAll(".trace").each(function(t) {
                    var e = t[0], r = e.trace, n = d3.select(this);
                    n.style({
                        opacity: r.opacity
                    }), n.selectAll(".top path.surface").each(function(t) {
                        d3.select(this).call(f.styleOne, t, r);
                    });
                });
            }, f.styleOne = function(t, e, r) {
                var n = r.marker.line.color;
                Array.isArray(n) && (n = n[e.i] || h.Color.defaultLine);
                var a = r.marker.line.width || 0;
                Array.isArray(a) && (a = a[e.i] || 0), t.style({
                    "stroke-width": a,
                    fill: e.color
                }).call(h.Color.stroke, n);
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27,
            tinycolor2: 7
        } ],
        27: [ function(t, e, r) {
            r.micropolar = t("./micropolar"), r.micropolar.manager = t("./micropolar_manager"), 
            r.Lib = t("./lib"), r.util = t("./plotly_util"), r.Color = t("./color"), r.Colorscale = t("./colorscale"), 
            r.Drawing = t("./drawing"), r.Plots = t("./graph_obj"), r.Axes = t("./axes"), r.Colorbar = t("./colorbar"), 
            r.Fx = t("./graph_interact"), r.Scatter = t("./scatter"), r.Bars = t("./bars"), 
            r.Heatmap = t("./heatmap"), r.Pie = t("./pie"), r.Annotations = t("./annotations"), 
            r.Shapes = t("./shapes"), r.Legend = t("./legend"), r.ModeBar = t("./modebar"), 
            r.Icons = t("../build/ploticon"), t("../build/plotcss"), r.getGraphReference = t("./graph_reference"), 
            r.Config = t("./config"), r.Snapshot = t("./snapshot/snapshot"), t("../../../../shelly/static/js/plugins/promise-1.0.0.min.js"), 
            t("../../../../shelly/static/js/plugins/promise-done-1.0.0.js");
        }, {
            "../../../../shelly/static/js/plugins/promise-1.0.0.min.js": 34,
            "../../../../shelly/static/js/plugins/promise-done-1.0.0.js": 35,
            "../build/plotcss": 2,
            "../build/ploticon": 3,
            "./annotations": 8,
            "./axes": 9,
            "./bars": 10,
            "./color": 11,
            "./colorbar": 12,
            "./colorscale": 13,
            "./config": 14,
            "./drawing": 15,
            "./graph_interact": 16,
            "./graph_obj": 17,
            "./graph_reference": 18,
            "./heatmap": 19,
            "./legend": 21,
            "./lib": 22,
            "./micropolar": 23,
            "./micropolar_manager": 24,
            "./modebar": 25,
            "./pie": 26,
            "./plotly_util": 28,
            "./scatter": 29,
            "./shapes": 30,
            "./snapshot/snapshot": 32
        } ],
        28: [ function(t, e) {
            "use strict";
            function r(t) {
                return t.replace(/(<|&lt;|&#60;)/g, "\\lt ").replace(/(>|&gt;|&#62;)/g, "\\gt ");
            }
            var n = e.exports = {}, a = t("./plotly");
            n.scriptLoader = function(t, e) {
                function r(r) {
                    function a(e, r, n, a) {
                        t.getElementById(e) || setTimeout(function() {
                            o = t.createElement("script"), o.type = "text/javascript", o.id = e, o.async = !0, 
                            o.src = r, s.parentNode.insertBefore(o, s), a && a.call(window);
                        }, n);
                    }
                    var o, i = n.loadDelay, l = [].concat(r), s = t.getElementsByTagName("script")[0], c = /^http:/.test(t.location) ? "http" : "https", d = "https" === c ? "https://ssl" : "http://www";
                    if (-1 !== l.indexOf("facebook")) {
                        var u = document.querySelector("body"), f = u.firstChild, h = document.createElement("div");
                        h.id = "fb-root", u.insertBefore(h, f), e.fbAsyncInit = function() {
                            FB.init({
                                appId: PLOTLYENV.FACEBOOK_PAGE_APP_ID,
                                status: !0,
                                cookie: !0,
                                xfbml: !0
                            });
                        };
                        var p = !1;
                        a("facebook-jssdk", "//connect.facebook.net/en_US/all" + (p ? "/debug" : "") + ".js", i);
                    }
                    -1 !== l.indexOf("googleAnalytics") && (e._gaq = e._gaq || [], e._gaq.push([ "_setAccount", PLOTLYENV.GOOGLEANALYTICS_ACCOUNT ]), 
                    e._gaq.push([ "_setSiteSpeedSampleRate", 10 ]), e._gaq.push([ "_trackPageview" ]), 
                    a("google-analytics", d + ".google-analytics.com/ga.js", i)), -1 !== l.indexOf("googlePlus") && a("google-plus", "https://apis.google.com/js/plusone.js", i), 
                    -1 !== l.indexOf("twitter") && a("twitter-wjs", c + "://platform.twitter.com/widgets.js", i);
                }
                var n = {
                    loadDelay: 0
                };
                return r.config = function(t) {
                    return n = t, this;
                }, r;
            }, n.imageExporter = function() {
                function t(t) {
                    function o() {
                        setTimeout(function() {
                            var o;
                            if ("jpeg" === a) o = m.toDataURL("image/jpeg"); else if ("png" === a) o = m.toDataURL("image/png"); else if ("webp" === a) o = m.toDataURL("image/webp"); else {
                                if ("svg" !== a) return e({
                                    err: "Image format is not jpeg, png, or svg",
                                    code: 400
                                });
                                o = t;
                            }
                            0 === s && (r.remove(), g.remove()), o ? n.success(o) : e({
                                err: "Image is empty",
                                code: 530
                            });
                        }, 0);
                    }
                    var l, c, f;
                    if ("string" == typeof t) l = t, c = i.width, f = i.height; else {
                        if (!t.append && !t.className) return e("wrong input svg (d3 selection or DOM node)");
                        var h = t.append ? t.node() : t, p = new XMLSerializer();
                        l = p.serializeToString(h), c = h.offsetWidth, f = h.offsetHeight;
                    }
                    r && r.html(""), r = d3.select("body").append("div").attr({
                        id: u
                    }).style({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        "z-index": 1e3
                    }), 2 > s && r.style({
                        visibility: "hidden"
                    });
                    var g = r.append("canvas").attr({
                        id: d,
                        width: c,
                        height: f
                    }), m = g.node(), y = m.getContext("2d"), v = self.URL || self.webkitURL || self, x = new Image(), b = new Blob([ l ], {
                        type: "image/svg+xml;charset=utf-8"
                    }), _ = v.createObjectURL(b);
                    x.onload = function() {
                        y.drawImage(x, 0, 0), v.revokeObjectURL(_), o();
                    }, x.onerror = function() {
                        return v.revokeObjectURL(_), e("img didnt load");
                    }, x.src = _;
                }
                function e(t) {
                    if (n.error(t), 1 === s) console.log("Error: " + t); else if (2 === s) throw t;
                }
                var r, n = d3.dispatch("success", "error"), a = "png", o = {
                    width: 300,
                    height: 150
                }, i = {
                    width: 300,
                    height: 150
                }, l = "url", s = 0, c = "Converted Image", d = "canvasEl", u = "canvasContainer";
                return d3.rebind(t, n, "on"), t.imageFormat = function(t) {
                    return a = t, this;
                }, t.outputType = function(t) {
                    return l = t, this;
                }, t.debugLevel = function(t) {
                    return s = t, this;
                }, t.title = function(t) {
                    return c = t, this;
                }, t.sourceSize = function(t) {
                    return i = t, this;
                }, t.targetSize = function(t) {
                    return o = t, this;
                }, t.canvasContainerId = function(t) {
                    return u = t, this;
                }, t.canvasElId = function(t) {
                    return d = t, this;
                }, t;
            }, d3.selection.prototype.appendSVG = function(t) {
                for (var e = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + t + "</svg>", r = new DOMParser().parseFromString(e, "application/xml"), n = r.documentElement.firstChild; n; ) this.node().appendChild(this.node().ownerDocument.importNode(n, !0)), 
                n = n.nextSibling;
                return r.querySelector("parsererror") ? (console.log(r.querySelector("parsererror div").textContent), 
                null) : d3.select(this.node().lastChild);
            }, n.compileTemplate = function(t, e) {
                return [].concat(e).map(function(e) {
                    return t.replace(/{([^}]*)}/g, function(t, r) {
                        return e[r] || "";
                    });
                }).join("\n");
            }, n.tmpl = function(t, e) {
                var r = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                }, n = /\\|'|\r|\n|\u2028|\u2029/g, a = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, o = function(t) {
                    return "\\" + a[t];
                }, i = /(.)^/, l = new RegExp([ (r.escape || i).source, (r.interpolate || i).source, (r.evaluate || i).source ].join("|") + "|$", "g"), s = 0, c = "__p+='";
                t.replace(l, function(e, r, a, i, l) {
                    return c += t.slice(s, l).replace(n, o), s = l + e.length, r ? c += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : a ? c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : i && (c += "';\n" + i + "\n__p+='"), 
                    e;
                }), c += "';\n", r.variable || (c = "with(obj||{}){\n" + c + "}\n"), c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
                var d;
                try {
                    d = new Function(r.variable || "obj", "_", c);
                } catch (t) {
                    throw t.source = c, t;
                }
                if (e) return d(e);
                var u = function(t) {
                    return d.call(this, t);
                }, f = r.variable || "obj";
                return u.source = "function(" + f + "){\n" + c + "}", u;
            }, n.getSVGBBoxFromString = function(t, e) {
                var r = d3.select("body").append("div").style({
                    visibility: "none"
                }), n = r.append("svg").append("text").text(t).style(e), a = n.node().getBBox();
                return r.remove(), a;
            }, n.html_entity_decode = function(t) {
                var e = d3.select("body").append("div").style({
                    display: "none"
                }).html(""), r = t.replace(/(&[^;]*;)/gi, function(t) {
                    return "&lt;" === t ? "&#60;" : "&rt;" === t ? "&#62;" : e.html(t).text();
                });
                return e.remove(), r;
            }, n.xml_entity_encode = function(t) {
                return t.replace(/&(?!\w+;|\#[0-9]+;| \#x[0-9A-F]+;)/g, "&amp;");
            }, n.toCamelCase = function(t) {
                return t.toLowerCase().replace(/-(.)/g, function(t, e) {
                    return e.toUpperCase();
                });
            }, n.jsHook = function(t) {
                var e = t.className.match(/js-[^ ]+/);
                return e ? e[0] : null;
            }, n.wrap = function(t) {
                return function() {
                    function e() {
                        var t = this.node().getBBox().height;
                        this.text("").selectAll("tspan").data(l).enter().append("tspan").attr({
                            x: 0,
                            y: function(e, r) {
                                return (r + 1) * t;
                            }
                        }).text(function(t) {
                            return t.join(" ");
                        });
                    }
                    function r(t) {
                        var e = n.style({
                            visibility: "hidden"
                        }).text(t), r = e.node().getBBox().width;
                        return n.style({
                            visibility: "visible"
                        }).text(a), r;
                    }
                    var n = this, a = this.text(), o = this.node().parentNode, i = a.split(" "), l = [ [] ], s = 0;
                    i.forEach(function(e) {
                        r(l[s].concat(e).join(" "), o) >= t && (s++, l[s] = []), l[s].push(e);
                    }), this.call(e);
                };
            }, n.getSize = function(t, e) {
                return t.node().getBoundingClientRect()[e];
            }, n.convertToTspans = function(t, e) {
                function r() {
                    c.empty() || (d = i.attr("class") + "-math", c.select("svg." + d).remove()), t.text("").style({
                        visibility: "visible",
                        "white-space": "pre"
                    }), s = t.appendSVG(o), s || t.text(n), t.select("a").size() && t.style("pointer-events", "all"), 
                    e && e.call(i);
                }
                var n = t.text(), o = a.util.convertToSvg(n), i = t, l = !i.attr("data-notex") && o.match(/([^$]*)([$]+[^$]*[$]+)([^$]*)/), s = n, c = d3.select(i.node().parentNode);
                if (!c.empty()) {
                    var d = i.attr("class") ? i.attr("class").split(" ")[0] : "text";
                    d += "-math", c.selectAll("svg." + d).remove(), c.selectAll("g." + d + "-group").remove(), 
                    t.style({
                        visibility: null
                    });
                    for (var u = t.node(); u && u.removeAttribute; u = u.parentNode) u.removeAttribute("data-bb");
                    if (l) {
                        var f = a.Lib.getPlotDiv(i.node());
                        (f && f._promises || []).push(new Promise(function(t) {
                            i.style({
                                visibility: "hidden"
                            });
                            var n = {
                                fontSize: parseInt(i.style("font-size"), 10)
                            };
                            a.util.texToSVG(l[2], n, function(n, o, l) {
                                c.selectAll("svg." + d).remove(), c.selectAll("g." + d + "-group").remove();
                                var s = n && n.select("svg");
                                if (!s || !s.node()) return r(), void t();
                                var u = c.append("g").classed(d + "-group", !0).attr({
                                    "pointer-events": "none"
                                });
                                u.node().appendChild(s.node()), o && o.node() && s.node().insertBefore(o.node().cloneNode(!0), s.node().firstChild), 
                                s.attr({
                                    "class": d,
                                    height: l.height,
                                    preserveAspectRatio: "xMinYMin meet"
                                }).style({
                                    overflow: "visible",
                                    "pointer-events": "none"
                                });
                                var f = i.style("fill") || "black";
                                s.select("g").attr({
                                    fill: f,
                                    stroke: f
                                });
                                var h = a.util.getSize(s, "width"), p = a.util.getSize(s, "height"), g = +i.attr("x") - h * {
                                    start: 0,
                                    middle: .5,
                                    end: 1
                                }[i.attr("text-anchor") || "start"], m = parseInt(i.style("font-size"), 10) || a.util.getSize(i, "height"), y = -m / 4;
                                "y" === d[0] ? (u.attr({
                                    transform: "rotate(" + [ -90, +i.attr("x"), +i.attr("y") ] + ") translate(" + [ -h / 2, y - p / 2 ] + ")"
                                }), s.attr({
                                    x: +i.attr("x"),
                                    y: +i.attr("y")
                                })) : s.attr("l" === d[0] ? {
                                    x: i.attr("x"),
                                    y: y - p / 2
                                } : "a" === d[0] ? {
                                    x: 0,
                                    y: y
                                } : {
                                    x: g,
                                    y: +i.attr("y") + y - p / 2
                                }), e && e.call(i, u), t(u);
                            });
                        }));
                    } else r();
                    return t;
                }
            }, n.texToSVG = function(t, e, n) {
                var o = "math-output-" + a.Lib.randstr([], 64), i = d3.select("body").append("div").attr({
                    id: o
                }).style({
                    visibility: "hidden",
                    position: "absolute"
                }).style({
                    "font-size": e.fontSize + "px"
                }).text(r(t));
                MathJax.Hub.Queue([ "Typeset", MathJax.Hub, i.node() ], function() {
                    var e = d3.select("body").select("#MathJax_SVG_glyphs");
                    if (i.select(".MathJax_SVG").empty() || !i.select("svg").node()) console.log("There was an error in the tex syntax.", t), 
                    n(); else {
                        var r = i.select("svg").node().getBoundingClientRect();
                        n(i.select(".MathJax_SVG"), e, r);
                    }
                    i.remove();
                });
            };
            var o = {
                sup: 'font-size:70%" dy="-0.6em',
                sub: 'font-size:70%" dy="0.3em',
                b: "font-weight:bold",
                i: "font-style:italic",
                a: "",
                span: "",
                br: "",
                em: "font-style:italic;font-weight:bold"
            }, i = new RegExp("</?(" + Object.keys(o).join("|") + ")( [^>]*)?/?>", "g");
            n.plainText = function(t) {
                return (t || "").replace(i, " ");
            }, n.convertToSvg = function(t) {
                for (var e = a.util.html_entity_decode(t), r = e.split(/(<[^<>]*>)/).map(function(t) {
                    var e = t.match(/<(\/?)([^ >]*)\s*(.*)>/i), r = e && e[2].toLowerCase(), n = o[r];
                    if (void 0 !== n) {
                        var i = e[1], l = e[3], s = l.match(/^style\s*=\s*"([^"]+)"\s*/i);
                        if ("a" === r) return i ? "</a>" : "href" !== l.substr(0, 4).toLowerCase() ? "<a>" : '<a xlink:show="new" xlink:href' + l.substr(4) + ">";
                        if ("br" === r) return "<br>";
                        if (i) return "sup" === r ? '</tspan><tspan dy="0.42em">&#x200b;</tspan>' : "sub" === r ? '</tspan><tspan dy="-0.21em">&#x200b;</tspan>' : "</tspan>";
                        var c = "<tspan";
                        return ("sup" === r || "sub" === r) && (c = "&#x200b;" + c), s && (s = s[1].replace(/(^|;)\s*color:/, "$1 fill:"), 
                        n = (n ? n + ";" : "") + s), c + (n ? ' style="' + n + '"' : "") + ">";
                    }
                    return a.util.xml_entity_encode(t).replace(/</g, "&lt;");
                }), n = [], i = r.indexOf("<br>"); i > 0; i = r.indexOf("<br>", i + 1)) n.push(i);
                var l = 0;
                n.forEach(function(t) {
                    for (var e = t + l, n = r.slice(0, e), a = "", o = n.length - 1; o >= 0; o--) {
                        var i = n[o].match(/<(\/?).*>/i);
                        if (i && "<br>" !== n[o]) {
                            i[1] || (a = n[o]);
                            break;
                        }
                    }
                    a && (r.splice(e + 1, 0, a), r.splice(e, 0, "</tspan>"), l += 2);
                });
                var s = r.join(""), c = s.split(/<br>/gi);
                return c.length > 1 && (r = c.map(function(t, e) {
                    return '<tspan class="line" dy="' + 1.3 * e + 'em">' + t + "</tspan>";
                })), r.join("");
            }, n.alignSVGWith = function(t, e) {
                return function() {
                    var r = t.node().getBBox(), n = "50%", a = n, o = "middle", i = 0, l = e.horizontalMargin || 0;
                    return "under" === e.orientation ? i = r.y + r.height : "over" === e.orientation ? i = r.y : "inside" === e.orientation && (i = r.y), 
                    e.verticalMargin && (i += e.verticalMargin), "center" === e.horizontalAlign ? (n = "50%", 
                    o = "middle", l /= 4) : "right" === e.horizontalAlign ? (n = "0%", o = "start") : "left" === e.horizontalAlign ? (n = "100%", 
                    o = "end", l = -l) : "number" == typeof e.horizontalAlign && (n = e.horizontalAlign, 
                    o = "middle"), "inside" === e.orientation && (a = 0), this.attr({
                        x: a,
                        dx: l,
                        y: i
                    }).style({
                        "text-anchor": o
                    }).selectAll("tspan.line").attr({
                        x: n,
                        dx: l,
                        y: i
                    }), this;
                };
            }, n.alignHTMLWith = function(t, e, r) {
                var n, a, o, i = r.horizontalAlign, l = r.verticalAlign || "top", s = t.node().getBoundingClientRect(), c = e.node().getBoundingClientRect();
                return a = "bottom" === l ? function() {
                    return s.bottom - n.height;
                } : "middle" === l ? function() {
                    return s.top + (s.height - n.height) / 2;
                } : function() {
                    return s.top;
                }, o = "right" === i ? function() {
                    return s.right - n.width;
                } : "center" === i ? function() {
                    return s.left + (s.width - n.width) / 2;
                } : function() {
                    return s.left;
                }, function() {
                    return n = this.node().getBoundingClientRect(), this.style({
                        top: a() - c.top + "px",
                        left: o() - c.left + "px",
                        "z-index": 1e3
                    }), this;
                };
            }, n.makeEditable = function(t, e, r) {
                function o() {
                    l(), s.style({
                        opacity: 0
                    });
                    var t, e = u.attr("class");
                    t = e ? "." + e.split(" ")[0] + "-math-group" : "[class*=-math-group]", t && d3.select(s.node().parentNode).select(t).style({
                        opacity: 0
                    });
                }
                function i(t) {
                    var e = t.node(), r = document.createRange();
                    r.selectNodeContents(e);
                    var n = window.getSelection();
                    n.removeAllRanges(), n.addRange(r), e.focus();
                }
                function l() {
                    var t = d3.select(a.Lib.getPlotDiv(s.node())), e = t.select(".svg-container"), o = e.append("div");
                    o.classed("plugin-editable editable", !0).style({
                        position: "absolute",
                        "font-family": s.style("font-family") || "Arial",
                        "font-size": s.style("font-size") || 12,
                        color: r.fill || s.style("fill") || "black",
                        opacity: 1,
                        "background-color": r.background || "transparent",
                        outline: "#ffffff33 1px solid",
                        margin: [ -parseFloat(s.style("font-size")) / 8 + 1, 0, 0, -1 ].join("px ") + "px",
                        padding: "0",
                        "box-sizing": "border-box"
                    }).attr({
                        contenteditable: !0
                    }).text(r.text || s.attr("data-unformatted")).call(n.alignHTMLWith(s, e, r)).on("blur", function() {
                        s.text(this.textContent).style({
                            opacity: 1
                        });
                        var t, e = d3.select(this).attr("class");
                        t = e ? "." + e.split(" ")[0] + "-math-group" : "[class*=-math-group]", t && d3.select(s.node().parentNode).select(t).style({
                            opacity: 0
                        });
                        var r = this.textContent;
                        d3.select(this).transition().duration(0).remove(), d3.select(document).on("mouseup", null), 
                        c.edit.call(s, r);
                    }).on("focus", function() {
                        var t = this;
                        d3.select(document).on("mouseup", function() {
                            return d3.event.target === t ? !1 : void (document.activeElement === o.node() && o.node().blur());
                        });
                    }).on("keyup", function() {
                        27 === d3.event.which ? (s.style({
                            opacity: 1
                        }), d3.select(this).style({
                            opacity: 0
                        }).on("blur", function() {
                            return !1;
                        }).transition().remove(), c.cancel.call(s, this.textContent)) : (c.input.call(s, this.textContent), 
                        d3.select(this).call(n.alignHTMLWith(s, e, r)));
                    }).on("keydown", function() {
                        13 === d3.event.which && this.blur();
                    }).call(i);
                }
                r || (r = {});
                var s = this, c = d3.dispatch("edit", "input", "cancel"), d = d3.select(this.node()).style({
                    "pointer-events": "all"
                }), u = e || d;
                return e && d.style({
                    "pointer-events": "none"
                }), r.immediate ? o() : u.on("click", o), d3.rebind(this, c, "on");
            }, n.deepExtend = function(t, e) {
                for (var r in e) e[r] && e[r].constructor && e[r].constructor === Object ? (t[r] = t[r] || {}, 
                n.deepExtend(t[r], e[r])) : t[r] = e[r];
                return t;
            }, n.UndoManager = function() {
                function t(t, e) {
                    return t ? (a = !0, t[e](), a = !1, this) : this;
                }
                var e, r = [], n = -1, a = !1;
                return {
                    add: function(t) {
                        return a ? this : (r.splice(n + 1, r.length - n), r.push(t), n = r.length - 1, this);
                    },
                    setCallback: function(t) {
                        e = t;
                    },
                    undo: function() {
                        var a = r[n];
                        return a ? (t(a, "undo"), n -= 1, e && e(a.undo), this) : this;
                    },
                    redo: function() {
                        var a = r[n + 1];
                        return a ? (t(a, "redo"), n += 1, e && e(a.redo), this) : this;
                    },
                    clear: function() {
                        r = [], n = -1;
                    },
                    hasUndo: function() {
                        return -1 !== n;
                    },
                    hasRedo: function() {
                        return n < r.length - 1;
                    },
                    getCommands: function() {
                        return r;
                    },
                    getPreviousCommand: function() {
                        return r[n - 1];
                    },
                    getIndex: function() {
                        return n;
                    }
                };
            };
        }, {
            "./plotly": 27
        } ],
        29: [ function(t, e) {
            "use strict";
            function r(t, e, r) {
                var n = r("line.shape");
                "spline" === n && r("line.smoothing");
            }
            function n(t, e) {
                var r, n;
                if ("lines" === t.mode) return r = t.line.color, r && o.Color.opacity(r) ? r : t.fillcolor;
                if ("none" === t.mode) return t.fill ? t.fillcolor : "";
                var a = e.mcc || (t.marker || {}).color, i = e.mlcc || ((t.marker || {}).line || {}).color;
                return n = a && o.Color.opacity(a) ? a : i && o.Color.opacity(i) && (e.mlw || ((t.marker || {}).line || {}).width) ? i : "", 
                n ? o.Color.opacity(n) < .3 ? o.Color.addOpacity(n, .3) : n : (r = (t.line || {}).color, 
                r && o.Color.opacity(r) && o.Scatter.hasLines(t) && t.line.width ? r : t.fillcolor);
            }
            var a = e.exports = {}, o = t("./plotly"), i = t("./isnumeric");
            o.Plots.register(a, "scatter", [ "cartesian", "symbols", "markerColorscale", "errorBarsOK", "showLegend" ]), 
            a.PTS_LINESONLY = 20, a.attributes = {
                x: {
                    type: "data_array"
                },
                x0: {
                    type: "any",
                    dflt: 0
                },
                dx: {
                    type: "number",
                    dflt: 1
                },
                y: {
                    type: "data_array"
                },
                y0: {
                    type: "any",
                    dflt: 0
                },
                dy: {
                    type: "number",
                    dflt: 1
                },
                text: {
                    type: "string",
                    dflt: "",
                    arrayOk: !0
                },
                mode: {
                    type: "flaglist",
                    flags: [ "lines", "markers", "text" ],
                    extras: [ "none" ]
                },
                line: {
                    color: {
                        type: "color"
                    },
                    width: {
                        type: "number",
                        min: 0,
                        dflt: 2
                    },
                    shape: {
                        type: "enumerated",
                        values: [ "linear", "spline", "hv", "vh", "hvh", "vhv" ],
                        dflt: "linear"
                    },
                    smoothing: {
                        type: "number",
                        min: 0,
                        max: 1.3,
                        dflt: 1
                    },
                    dash: {
                        type: "string",
                        values: [ "solid", "dot", "dash", "longdash", "dashdot", "longdashdot" ],
                        dflt: "solid"
                    }
                },
                connectgaps: {
                    type: "boolean",
                    dflt: !1
                },
                fill: {
                    type: "enumerated",
                    values: [ "none", "tozeroy", "tozerox", "tonexty", "tonextx" ],
                    dflt: "none"
                },
                fillcolor: {
                    type: "color"
                },
                marker: {
                    symbol: {
                        type: "enumerated",
                        values: o.Drawing.symbolList,
                        dflt: "circle",
                        arrayOk: !0
                    },
                    opacity: {
                        type: "number",
                        min: 0,
                        max: 1,
                        arrayOk: !0
                    },
                    size: {
                        type: "number",
                        min: 0,
                        dflt: 6,
                        arrayOk: !0
                    },
                    color: {
                        type: "color",
                        arrayOk: !0
                    },
                    maxdisplayed: {
                        type: "number",
                        min: 0,
                        dflt: 0
                    },
                    sizeref: {
                        type: "number",
                        dflt: 1
                    },
                    sizemin: {
                        type: "number",
                        min: 0,
                        dflt: 0
                    },
                    sizemode: {
                        type: "enumerated",
                        values: [ "diameter", "area" ],
                        dflt: "diameter"
                    },
                    colorscale: {
                        type: "colorscale"
                    },
                    cauto: {
                        type: "boolean",
                        dflt: !0
                    },
                    cmax: {
                        type: "number",
                        dflt: null
                    },
                    cmin: {
                        type: "number",
                        dflt: null
                    },
                    autocolorscale: {
                        type: "boolean",
                        dflt: !0
                    },
                    reversescale: {
                        type: "boolean",
                        dflt: !1
                    },
                    showscale: {
                        type: "boolean",
                        dflt: !1
                    },
                    line: {
                        color: {
                            type: "color",
                            arrayOk: !0
                        },
                        width: {
                            type: "number",
                            min: 0,
                            arrayOk: !0
                        },
                        colorscale: {
                            type: "colorscale"
                        },
                        cauto: {
                            type: "boolean",
                            dflt: !0
                        },
                        cmax: {
                            type: "number",
                            dflt: null
                        },
                        cmin: {
                            type: "number",
                            dflt: null
                        },
                        autocolorscale: {
                            type: "boolean",
                            dflt: !0
                        },
                        reversescale: {
                            type: "boolean",
                            dflt: !1
                        }
                    }
                },
                textposition: {
                    type: "enumerated",
                    values: [ "top left", "top center", "top right", "middle left", "middle center", "middle right", "bottom left", "bottom center", "bottom right" ],
                    dflt: "middle center",
                    arrayOk: !0
                },
                textfont: {
                    type: "font",
                    arrayOk: !0
                },
                _nestedModules: {
                    error_y: "ErrorBars",
                    error_x: "ErrorBars",
                    "marker.colorbar": "Colorbar"
                }
            }, a.handleXYDefaults = function(t, e, r) {
                var n, a = r("x"), o = r("y");
                if (a) o ? (n = Math.min(a.length, o.length), n < a.length && (e.x = a.slice(0, n)), 
                n < o.length && (e.y = o.slice(0, n))) : (n = a.length, r("y0"), r("dy")); else {
                    if (!o) return 0;
                    n = e.y.length, r("x0"), r("dx");
                }
                return n;
            }, a.supplyDefaults = function(t, e, n, i) {
                function l(r, n) {
                    return o.Lib.coerce(t, e, a.attributes, r, n);
                }
                var s = a.handleXYDefaults(t, e, l), c = s < a.PTS_LINESONLY ? "lines+markers" : "lines";
                if (!s) return void (e.visible = !1);
                if (l("text"), l("mode", c), a.hasLines(e) && (a.lineDefaults(t, e, n, l), r(t, e, l), 
                l("connectgaps")), a.hasMarkers(e) && a.markerDefaults(t, e, n, i, l), a.hasText(e) && a.textDefaults(t, e, i, l), 
                (a.hasMarkers(e) || a.hasText(e)) && l("marker.maxdisplayed"), l("fill"), "none" !== e.fill) {
                    var d = !1;
                    if (e.marker) {
                        var u = e.marker.color, f = (e.marker.line || {}).color;
                        u && !Array.isArray(u) ? d = u : f && !Array.isArray(f) && (d = f);
                    }
                    l("fillcolor", o.Color.addOpacity((e.line || {}).color || d || n, .5)), a.hasLines(e) || r(t, e, l);
                }
                o.ErrorBars && (o.ErrorBars.supplyDefaults(t, e, n, {
                    axis: "y"
                }), o.ErrorBars.supplyDefaults(t, e, n, {
                    axis: "x",
                    inherit: "y"
                }));
            }, a.lineDefaults = function(t, e, r, n) {
                var a = (t.marker || {}).color;
                n("line.color", (Array.isArray(a) ? !1 : a) || r), n("line.width"), n("line.dash");
            }, a.markerDefaults = function(t, e, r, n, i) {
                var l, s = a.isBubble(t), c = (t.line || {}).color;
                c && (r = c), i("marker.symbol"), i("marker.opacity", s ? .7 : 1), i("marker.size"), 
                i("marker.color", r), o.Colorscale.hasColorscale(t, "marker") && o.Colorscale.handleDefaults(t, e, n, i, {
                    prefix: "marker.",
                    cLetter: "c"
                }), l = c && e.marker.color !== c ? c : s ? o.Color.background : o.Color.defaultLine, 
                i("marker.line.color", l), o.Colorscale.hasColorscale(t, "marker.line") && o.Colorscale.handleDefaults(t, e, n, i, {
                    prefix: "marker.line.",
                    cLetter: "c"
                }), i("marker.line.width", s ? 1 : 0), s && (i("marker.sizeref"), i("marker.sizemin"), 
                i("marker.sizemode"));
            }, a.textDefaults = function(t, e, r, n) {
                n("textposition"), n("textfont", r.font);
            }, a.cleanData = function(t) {
                var e, r, n, a, o;
                for (e = 0; e < t.length; e++) if (r = t[e], n = r.fill, "none" !== n && "scatter" === r.type && (r.opacity = void 0, 
                "tonexty" === n || "tonextx" === n)) for (a = e - 1; a >= 0; a--) if (o = t[a], 
                "scatter" === o.type && o.xaxis === r.xaxis && o.yaxis === r.yaxis) {
                    o.opacity = void 0;
                    break;
                }
            }, a.hasLines = function(t) {
                return t.visible && t.mode && -1 !== t.mode.indexOf("lines");
            }, a.hasMarkers = function(t) {
                return t.visible && t.mode && -1 !== t.mode.indexOf("markers");
            }, a.hasText = function(t) {
                return t.visible && t.mode && -1 !== t.mode.indexOf("text");
            }, a.isBubble = function(t) {
                return "object" == typeof t.marker && Array.isArray(t.marker.size);
            }, a.colorbar = function(t, e) {
                var r = e[0].trace, n = r.marker, a = "cb" + r.uid;
                if (t._fullLayout._infolayer.selectAll("." + a).remove(), void 0 === n || !n.showscale) return void o.Plots.autoMargin(t, a);
                var l = o.Colorscale.getScale(n.colorscale), s = n.color, c = n.cmin, d = n.cmax;
                i(c) || (c = o.Lib.aggNums(Math.min, null, s)), i(d) || (d = o.Lib.aggNums(Math.max, null, s));
                var u = e[0].t.cb = o.Colorbar(t, a);
                u.fillcolor(d3.scale.linear().domain(l.map(function(t) {
                    return c + t[0] * (d - c);
                })).range(l.map(function(t) {
                    return t[1];
                }))).filllevels({
                    start: c,
                    end: d,
                    size: (d - c) / 254
                }).options(n.colorbar)(), o.Lib.markTime("done colorbar");
            }, a.getBubbleSizeFn = function(t) {
                var e = t.marker, r = e.sizeref || 1, n = e.sizemin || 0, a = "area" === e.sizemode ? function(t) {
                    return Math.sqrt(t / r);
                } : function(t) {
                    return t / r;
                };
                return function(t) {
                    var e = a(t / 2);
                    return i(e) && e > 0 ? Math.max(e, n) : 0;
                };
            }, a.calc = function(t, e) {
                var r = o.Axes.getFromId(t, e.xaxis || "x"), n = o.Axes.getFromId(t, e.yaxis || "y");
                o.Lib.markTime("in Scatter.calc");
                var l = r.makeCalcdata(e, "x");
                o.Lib.markTime("finished convert x");
                var s = n.makeCalcdata(e, "y");
                o.Lib.markTime("finished convert y");
                var c, d, u, f = Math.min(l.length, s.length);
                r._minDtick = 0, n._minDtick = 0, l.length > f && l.splice(f, l.length - f), s.length > f && s.splice(f, s.length - f);
                var h = {
                    padded: !0
                }, p = {
                    padded: !0
                };
                if (a.hasMarkers(e)) {
                    if (c = e.marker, d = c.size, Array.isArray(d)) {
                        var g = {
                            type: "linear"
                        };
                        o.Axes.setConvert(g), d = g.makeCalcdata(e.marker, "size"), d.length > f && d.splice(f, d.length - f);
                    }
                    var m, y = 1.6 * (e.marker.sizeref || 1);
                    m = "area" === e.marker.sizemode ? function(t) {
                        return Math.max(Math.sqrt((t || 0) / y), 3);
                    } : function(t) {
                        return Math.max((t || 0) / y, 3);
                    }, h.ppad = p.ppad = Array.isArray(d) ? d.map(m) : m(d);
                }
                a.calcMarkerColorscales(e), !("tozerox" === e.fill || "tonextx" === e.fill && t.firstscatter) || l[0] === l[f - 1] && s[0] === s[f - 1] ? void 0 !== o.ErrorBars && e.error_y.visible || -1 === [ "tonexty", "tozeroy" ].indexOf(e.fill) && (a.hasMarkers(e) || a.hasText(e)) || (h.padded = !1, 
                h.ppad = 0) : h.tozero = !0, !("tozeroy" === e.fill || "tonexty" === e.fill && t.firstscatter) || l[0] === l[f - 1] && s[0] === s[f - 1] ? -1 !== [ "tonextx", "tozerox" ].indexOf(e.fill) && (p.padded = !1) : p.tozero = !0, 
                o.Lib.markTime("ready for Axes.expand"), o.Axes.expand(r, l, h), o.Lib.markTime("done expand x"), 
                o.Axes.expand(n, s, p), o.Lib.markTime("done expand y");
                var v = new Array(f);
                for (u = 0; f > u; u++) v[u] = i(l[u]) && i(s[u]) ? {
                    x: l[u],
                    y: s[u]
                } : {
                    x: !1,
                    y: !1
                };
                return void 0 !== typeof d && o.Lib.mergeArray(d, v, "ms"), t.firstscatter = !1, 
                v;
            }, a.calcMarkerColorscales = function(t) {
                if (a.hasMarkers(t)) {
                    var e = t.marker;
                    o.Colorscale.hasColorscale(t, "marker") && o.Colorscale.calc(t, e.color, "marker", "c"), 
                    o.Colorscale.hasColorscale(t, "marker.line") && o.Colorscale.calc(t, e.line.color, "marker.line", "c");
                }
            }, a.selectMarkers = function(t, e, r) {
                var n = e.x(), o = e.y(), i = d3.extent(n.range.map(n.l2c)), l = d3.extent(o.range.map(o.l2c));
                r.forEach(function(t, e) {
                    var n = t[0].trace;
                    if (a.hasMarkers(n)) {
                        var o = n.marker.maxdisplayed;
                        if (0 !== o) {
                            var s = t.filter(function(t) {
                                return t.x >= i[0] && t.x <= i[1] && t.y >= l[0] && t.y <= l[1];
                            }), c = Math.ceil(s.length / o), d = 0;
                            r.forEach(function(t, r) {
                                var n = t[0].trace;
                                a.hasMarkers(n) && n.marker.maxdisplayed > 0 && e > r && d++;
                            });
                            var u = Math.round(d * c / 3 + Math.floor(d / 3) * c / 7.1);
                            t.forEach(function(t) {
                                delete t.vis;
                            }), s.forEach(function(t, e) {
                                0 === Math.round((e + u) % c) && (t.vis = !0);
                            });
                        }
                    }
                });
            }, a.arraysToCalcdata = function(t) {
                var e = t[0].trace, r = e.marker;
                if (o.Lib.mergeArray(e.text, t, "tx"), o.Lib.mergeArray(e.textposition, t, "tp"), 
                e.textfont && (o.Lib.mergeArray(e.textfont.size, t, "ts"), o.Lib.mergeArray(e.textfont.color, t, "tc"), 
                o.Lib.mergeArray(e.textfont.family, t, "tf")), r && r.line) {
                    var n = r.line;
                    o.Lib.mergeArray(r.opacity, t, "mo"), o.Lib.mergeArray(r.symbol, t, "mx"), o.Lib.mergeArray(r.color, t, "mc"), 
                    o.Lib.mergeArray(n.color, t, "mlc"), o.Lib.mergeArray(n.width, t, "mlw");
                }
            }, a.plot = function(t, e, r) {
                function n(t) {
                    return t.filter(function(t) {
                        return t.vis;
                    });
                }
                a.selectMarkers(t, e, r);
                var i = e.x(), l = e.y(), s = e.plot.select(".scatterlayer").selectAll("g.trace.scatter").data(r);
                s.enter().append("g").attr("class", "trace scatter").style("stroke-miterlimit", 2);
                var c, d, u, f = "";
                s.each(function(t) {
                    var e = t[0].trace, r = e.line;
                    if (e.visible === !0 && (a.arraysToCalcdata(t), a.hasLines(e) || "none" !== e.fill)) {
                        var n, s, h, p, g = d3.select(this), m = "", y = "";
                        c = "tozero" === e.fill.substr(0, 6) || "to" === e.fill.substr(0, 2) && !f ? g.append("path").classed("js-fill", !0) : null, 
                        u && (d = u.datum(t)), u = g.append("path").classed("js-fill", !0), -1 !== [ "hv", "vh", "hvh", "vhv" ].indexOf(r.shape) ? (s = o.Drawing.steps(r.shape), 
                        h = o.Drawing.steps(r.shape.split("").reverse().join(""))) : s = h = "spline" === r.shape ? function(t) {
                            return o.Drawing.smoothopen(t, r.smoothing);
                        } : function(t) {
                            return "M" + t.join("L");
                        }, p = function(t) {
                            return "L" + h(t.reverse()).substr(1);
                        };
                        var v = a.linePoints(t, {
                            xaxis: i,
                            yaxis: l,
                            connectGaps: e.connectgaps,
                            baseTolerance: Math.max(r.width || 1, 3) / 4,
                            linear: "linear" === r.shape
                        });
                        if (v.length) {
                            for (var x = v[0][0], b = v[v.length - 1], _ = b[b.length - 1], w = 0; w < v.length; w++) {
                                var k = v[w];
                                n = s(k), m += m ? "L" + n.substr(1) : n, y = p(k) + y, a.hasLines(e) && k.length > 1 && g.append("path").classed("js-line", !0).attr("d", n);
                            }
                            c ? x && _ && ("y" === e.fill.charAt(e.fill.length - 1) ? x[1] = _[1] = l.c2p(0, !0) : x[0] = _[0] = i.c2p(0, !0), 
                            c.attr("d", m + "L" + _ + "L" + x + "Z")) : "tonext" === e.fill.substr(0, 6) && m && f && d.attr("d", m + f + "Z"), 
                            f = y;
                        }
                    }
                }), s.selectAll("path:not([d])").remove(), s.append("g").attr("class", "points").each(function(t) {
                    var e = t[0].trace, r = d3.select(this), s = a.hasMarkers(e), c = a.hasText(e);
                    !s && !c || e.visible !== !0 ? r.remove() : (s && r.selectAll("path.point").data(e.marker.maxdisplayed ? n : o.Lib.identity).enter().append("path").classed("point", !0).call(o.Drawing.translatePoints, i, l), 
                    c && r.selectAll("g").data(e.marker.maxdisplayed ? n : o.Lib.identity).enter().append("g").append("text").call(o.Drawing.translatePoints, i, l));
                });
            }, a.linePoints = function(t, e) {
                function r(e) {
                    var r = w.c2p(t[e].x), n = k.c2p(t[e].y);
                    return r === C || n === C ? !1 : [ r, n ];
                }
                function n(t) {
                    var e = t[0] / w._length, r = t[1] / k._length;
                    return (1 + 10 * Math.max(0, -e, e - 1, -r, r - 1)) * M;
                }
                function a(t, e) {
                    var r = t[0] - e[0], n = t[1] - e[1];
                    return Math.sqrt(r * r + n * n);
                }
                var i, l, s, c, d, u, f, h, p, g, m, y, v, x, b, _, w = e.xaxis, k = e.yaxis, A = e.connectGaps, M = e.baseTolerance, L = e.linear, z = [], C = o.Axes.BADNUM, D = .2, O = new Array(t.length), S = 0;
                for (i = 0; i < t.length; i++) if (l = r(i)) {
                    for (S = 0, O[S++] = l, i++; i < t.length; i++) {
                        if (c = r(i), !c) {
                            if (A) continue;
                            break;
                        }
                        if (L) {
                            if (f = a(c, l), !(f < n(c) * D)) {
                                for (p = [ (c[0] - l[0]) / f, (c[1] - l[1]) / f ], d = l, m = f, y = x = b = 0, 
                                h = !1, s = c, i++; i < t.length; i++) {
                                    if (u = r(i), !u) {
                                        if (A) continue;
                                        break;
                                    }
                                    if (g = [ u[0] - l[0], u[1] - l[1] ], _ = g[0] * p[1] - g[1] * p[0], x = Math.min(x, _), 
                                    b = Math.max(b, _), b - x > n(u)) break;
                                    s = u, v = g[0] * p[0] + g[1] * p[1], v > m ? (m = v, c = u, h = !1) : y > v && (y = v, 
                                    d = u, h = !0);
                                }
                                if (h ? (O[S++] = c, s !== d && (O[S++] = d)) : (d !== l && (O[S++] = d), s !== c && (O[S++] = c)), 
                                O[S++] = s, i >= t.length || !u) break;
                                O[S++] = u, l = u;
                            }
                        } else O[S++] = c;
                    }
                    z.push(O.slice(0, S));
                }
                return z;
            }, a.style = function(t) {
                var e = d3.select(t).selectAll("g.trace.scatter");
                e.style("opacity", function(t) {
                    return t[0].trace.opacity;
                }), e.selectAll("g.points").each(function(t) {
                    d3.select(this).selectAll("path.point").call(o.Drawing.pointStyle, t.trace || t[0].trace), 
                    d3.select(this).selectAll("text").call(o.Drawing.textPointStyle, t.trace || t[0].trace);
                }), e.selectAll("g.trace path.js-line").call(o.Drawing.lineGroupStyle), e.selectAll("g.trace path.js-fill").call(o.Drawing.fillGroupStyle);
            }, a.hoverPoints = function(t, e, r, a) {
                var i = t.cd, l = i[0].trace, s = t.xa, c = t.ya, d = function(t) {
                    var r = Math.max(3, t.mrc || 0);
                    return Math.max(Math.abs(s.c2p(t.x) - s.c2p(e)) - r, 1 - 3 / r);
                }, u = function(t) {
                    var e = Math.max(3, t.mrc || 0);
                    return Math.max(Math.abs(c.c2p(t.y) - c.c2p(r)) - e, 1 - 3 / e);
                }, f = function(t) {
                    var n = Math.max(3, t.mrc || 0), a = Math.abs(s.c2p(t.x) - s.c2p(e)), o = Math.abs(c.c2p(t.y) - c.c2p(r));
                    return Math.max(Math.sqrt(a * a + o * o) - n, 1 - 3 / n);
                }, h = o.Fx.getDistanceFunction(a, d, u, f);
                if (o.Fx.getClosest(i, h, t), t.index !== !1) {
                    var p = i[t.index], g = s.c2p(p.x, !0), m = c.c2p(p.y, !0), y = p.mrc || 1;
                    return t.color = n(l, p), t.x0 = g - y, t.x1 = g + y, t.xLabelVal = p.x, t.y0 = m - y, 
                    t.y1 = m + y, t.yLabelVal = p.y, p.tx && (t.text = p.tx), o.ErrorBars && o.ErrorBars.hoverInfo(p, l, t), 
                    [ t ];
                }
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27
        } ],
        30: [ function(t, e) {
            "use strict";
            function r(t, e) {
                function r(e, r) {
                    return c.Lib.coerce(t, n, s.layoutAttributes, e, r);
                }
                var n = {};
                r("opacity"), r("fillcolor"), r("line.color"), r("line.width"), r("line.dash");
                for (var o = t.path ? "path" : "rect", i = r("type", o), l = [ "x", "y" ], d = 0; 2 > d; d++) {
                    var u = l[d], f = {
                        _fullLayout: e
                    }, h = c.Axes.coerceRef(t, n, f, u);
                    if ("path" !== i) {
                        var p = .25, g = .75;
                        if ("paper" !== h) {
                            var m = c.Axes.getFromId(f, h), y = a(m);
                            p = y(m.range[0] + p * (m.range[1] - m.range[0])), g = y(m.range[0] + g * (m.range[1] - m.range[0]));
                        }
                        r(u + "0", p), r(u + "1", g);
                    }
                }
                return "path" === i ? r("path") : c.Lib.noneOrAll(t, n, [ "x0", "x1", "y0", "y1" ]), 
                n;
            }
            function n(t) {
                return "category" === t.type ? t.c2l : t.d2l;
            }
            function a(t) {
                return "category" === t.type ? t.l2c : t.l2d;
            }
            function o(t) {
                return function(e) {
                    return t(e.replace("_", " "));
                };
            }
            function i(t, e) {
                var r, a, i, l, d = e.type, u = c.Axes.getFromId(t, e.xref), f = c.Axes.getFromId(t, e.yref), h = t._fullLayout._size;
                if (u ? (r = n(u), a = function(t) {
                    return u._offset + u.l2p(r(t, !0));
                }) : a = function(t) {
                    return h.l + h.w * t;
                }, f ? (i = n(f), l = function(t) {
                    return f._offset + f.l2p(i(t, !0));
                }) : l = function(t) {
                    return h.t + h.h * (1 - t);
                }, "path" === d) return u && "date" === u.type && (a = o(a)), f && "date" === f.type && (l = o(l)), 
                s.convertPath(e.path, a, l);
                var p = a(e.x0), g = a(e.x1), m = l(e.y0), y = l(e.y1);
                if ("line" === d) return "M" + p + "," + m + "L" + g + "," + y;
                if ("rect" === d) return "M" + p + "," + m + "H" + g + "V" + y + "H" + p + "Z";
                var v = (p + g) / 2, x = (m + y) / 2, b = Math.abs(v - p), _ = Math.abs(x - m), w = "A" + b + "," + _, k = v + b + "," + x, A = v + "," + (x - _);
                return "M" + k + w + " 0 1,1 " + A + w + " 0 0,1 " + k + "Z";
            }
            function l(t, e, r, n, a) {
                var i = "category" === t.type ? Number : t.d2c;
                if (void 0 !== e) return [ i(e), i(r) ];
                if (n) {
                    var l, s, c, d, u, p = 1 / 0, g = -1 / 0, m = n.match(f);
                    for ("date" === t.type && (i = o(i)), l = 0; l < m.length; l++) s = m[l], c = a[s.charAt(0)].drawn, 
                    void 0 !== c && (d = m[l].substr(1).match(h), !d || d.length < c || (u = i(d[c]), 
                    p > u && (p = u), u > g && (g = u)));
                    return g >= p ? [ p, g ] : void 0;
                }
            }
            var s = e.exports = {}, c = t("./plotly"), d = t("./isnumeric"), u = c.Scatter.attributes.line;
            s.layoutAttributes = {
                opacity: {
                    type: "number",
                    min: 0,
                    max: 1,
                    dflt: 1
                },
                line: {
                    color: u.color,
                    width: u.width,
                    dash: u.dash
                },
                fillcolor: {
                    type: "color",
                    dflt: "rgba(0,0,0,0)"
                },
                type: {
                    type: "enumerated",
                    values: [ "circle", "rect", "path", "line" ]
                },
                xref: {
                    type: "enumerated"
                },
                x0: {
                    type: "any"
                },
                x1: {
                    type: "any"
                },
                yref: {
                    type: "enumerated"
                },
                y0: {
                    type: "any"
                },
                y1: {
                    type: "any"
                },
                path: {
                    type: "string",
                    dflt: ""
                }
            }, s.supplyLayoutDefaults = function(t, e) {
                for (var n = t.shapes || [], a = e.shapes = [], o = 0; o < n.length; o++) a.push(r(n[o] || {}, e));
            }, s.drawAll = function(t) {
                var e = t._fullLayout;
                e._shapelayer.selectAll("path").remove();
                for (var r = 0; r < e.shapes.length; r++) s.draw(t, r);
            }, s.add = function(t) {
                var e = t._fullLayout.shapes.length;
                c.relayout(t, "shapes[" + e + "]", "add");
            }, s.draw = function(t, e, o, l) {
                var u, f = t.layout, h = t._fullLayout;
                if (!d(e) || -1 === e) {
                    if (!e && Array.isArray(l)) return f.shapes = l, s.supplyLayoutDefaults(f, h), void s.drawAll(t);
                    if ("remove" === l) return delete f.shapes, h.shapes = [], void s.drawAll(t);
                    if (o && "add" !== l) {
                        for (u = 0; u < h.shapes.length; u++) s.draw(t, u, o, l);
                        return;
                    }
                    e = h.shapes.length, h.shapes.push({});
                }
                if (!o && l) {
                    if ("remove" === l) {
                        for (h._shapelayer.selectAll('[data-index="' + e + '"]').remove(), h.shapes.splice(e, 1), 
                        f.shapes.splice(e, 1), u = e; u < h.shapes.length; u++) h._shapelayer.selectAll('[data-index="' + (u + 1) + '"]').attr("data-index", String(u)), 
                        s.draw(t, u);
                        return;
                    }
                    if ("add" === l || $.isPlainObject(l)) {
                        h.shapes.splice(e, 0, {});
                        var p = $.isPlainObject(l) ? $.extend({}, l) : {
                            text: "New text"
                        };
                        for (f.shapes ? f.shapes.splice(e, 0, p) : f.shapes = [ p ], u = h.shapes.length - 1; u > e; u--) h._shapelayer.selectAll('[data-index="' + (u - 1) + '"]').attr("data-index", String(u)), 
                        s.draw(t, u);
                    }
                }
                h._shapelayer.selectAll('[data-index="' + e + '"]').remove();
                var g = f.shapes[e];
                if (g) {
                    var m = {
                        xref: g.xref,
                        yref: g.yref
                    }, y = {};
                    "string" == typeof o && o ? y[o] = l : $.isPlainObject(o) && (y = o);
                    var v = Object.keys(y);
                    for (u = 0; u < y.length; u++) {
                        var x = v[u];
                        c.Lib.nestedProperty(g, x).set(y[x]);
                    }
                    var b = [ "x0", "x1", "y0", "y1" ];
                    for (u = 0; 4 > u; u++) {
                        var _ = b[u];
                        if (void 0 === y[_] && void 0 !== g[_]) {
                            var w, k = _.charAt(0), A = c.Axes.getFromId(t, c.Axes.coerceRef(m, {}, t, k)), M = c.Axes.getFromId(t, c.Axes.coerceRef(g, {}, t, k)), L = g[_];
                            void 0 !== y[k + "ref"] && (A ? (w = n(A)(L), L = (w - A.range[0]) / (A.range[1] - A.range[0])) : L = (L - M.domain[0]) / (M.domain[1] - M.domain[0]), 
                            M ? (w = M.range[0] + L * (M.range[1] - M.range[0]), L = a(M)(w)) : L = A.domain[0] + L * (A.domain[1] - A.domain[0])), 
                            g[_] = L;
                        }
                    }
                    var z = r(g, h);
                    h.shapes[e] = z;
                    var C = {
                        "data-index": String(e),
                        "fill-rule": "evenodd",
                        d: i(t, z)
                    }, D = (z.xref + z.yref).replace(/paper/g, ""), O = z.line.width ? z.line.color : "rgba(0,0,0,0)", S = h._shapelayer.append("path").attr(C).style("opacity", z.opacity).call(c.Color.stroke, O).call(c.Color.fill, z.fillcolor).call(c.Drawing.dashLine, z.line.dash, z.line.width);
                    D && S.call(c.Drawing.setClipUrl, "clip" + h._uid + D);
                }
            };
            var f = /[MLHVQCTSZ][^MLHVQCTSZ]*/g, h = /[^\s,]+/g, p = {
                M: {
                    0: !0,
                    drawn: 0
                },
                L: {
                    0: !0,
                    drawn: 0
                },
                H: {
                    0: !0,
                    drawn: 0
                },
                V: {},
                Q: {
                    0: !0,
                    2: !0,
                    drawn: 2
                },
                C: {
                    0: !0,
                    2: !0,
                    4: !0,
                    drawn: 4
                },
                T: {
                    0: !0,
                    drawn: 0
                },
                S: {
                    0: !0,
                    2: !0,
                    drawn: 2
                },
                Z: {}
            }, g = {
                M: {
                    1: !0,
                    drawn: 1
                },
                L: {
                    1: !0,
                    drawn: 1
                },
                H: {},
                V: {
                    0: !0,
                    drawn: 0
                },
                Q: {
                    1: !0,
                    3: !0,
                    drawn: 3
                },
                C: {
                    1: !0,
                    3: !0,
                    5: !0,
                    drawn: 5
                },
                T: {
                    1: !0,
                    drawn: 1
                },
                S: {
                    1: !0,
                    3: !0,
                    drawn: 5
                },
                Z: {}
            }, m = {
                M: 2,
                L: 2,
                H: 1,
                V: 1,
                Q: 4,
                C: 6,
                T: 2,
                S: 4,
                Z: 0
            };
            s.convertPath = function(t, e, r) {
                return t.replace(f, function(t) {
                    var n = 0, a = t.charAt(0), o = p[a], i = g[a], l = m[a], s = t.substr(1).replace(h, function(t) {
                        return o[n] ? t = e(t) : i[n] && (t = r(t)), n++, n > l && (t = "X"), t;
                    });
                    return n > l && (s = s.replace(/[\s,]*X.*/, ""), console.log("ignoring extra params in segment " + t)), 
                    a + s;
                });
            }, s.calcAutorange = function(t) {
                var e, r, n, a, o, i = t._fullLayout, s = i.shapes;
                if (s.length && t._fullData.length) for (e = 0; e < s.length; e++) r = s[e], n = r.line.width / 2, 
                "paper" !== r.xref && (a = c.Axes.getFromId(t, r.xref), o = l(a, r.x0, r.x1, r.path, p), 
                o && c.Axes.expand(a, o, {
                    ppad: n
                })), "paper" !== r.yref && (a = c.Axes.getFromId(t, r.yref), o = l(a, r.y0, r.y1, r.path, g), 
                o && c.Axes.expand(a, o, {
                    ppad: n
                }));
            };
        }, {
            "./isnumeric": 20,
            "./plotly": 27
        } ],
        31: [ function(t, e) {
            "use strict";
            function r(t) {
                var e;
                switch (t) {
                  case "themes__thumb":
                    e = {
                        autosize: !0,
                        width: 150,
                        height: 150,
                        title: "",
                        showlegend: !1,
                        margin: {
                            l: 5,
                            r: 5,
                            t: 5,
                            b: 5,
                            pad: 0
                        },
                        annotations: []
                    };
                    break;

                  case "thumbnail":
                    e = {
                        title: "",
                        hidesources: !0,
                        showlegend: !1,
                        borderwidth: 0,
                        bordercolor: "",
                        margin: {
                            l: 1,
                            r: 1,
                            t: 1,
                            b: 1,
                            pad: 0
                        },
                        annotations: []
                    };
                    break;

                  default:
                    e = {};
                }
                return e;
            }
            function n(t) {
                var e = [ "xaxis", "yaxis", "zaxis" ];
                return e.indexOf(t.slice(0, 5)) > -1;
            }
            var a = t("extend"), o = t("../plotly");
            e.exports = function(t, e) {
                t.framework && t.framework.isPolar && (t = t.framework.getConfig());
                var i, l = t.data, s = t.layout, c = a(!0, [], l), d = a(!0, {}, s, r(e.tileClass));
                if (e.width && (d.width = e.width), e.height && (d.height = e.height), "thumbnail" === e.tileClass || "themes__thumb" === e.tileClass) {
                    d.annotations = [];
                    var u = Object.keys(d);
                    for (i = 0; i < u.length; i++) n(u[i]) && (d[u[i]].title = "");
                    for (i = 0; i < c.length; i++) {
                        var f = c[i];
                        f.showscale = !1, f.marker && (f.marker.showscale = !1), "pie" === f.type && (f.textposition = "none");
                    }
                }
                if (Array.isArray(e.annotations)) for (i = 0; i < e.annotations.length; i++) d.annotations.push(e.annotations[i]);
                var h = o.Plots.getSubplotIds(d, "gl3d");
                if (h.length) {
                    var p = {};
                    for ("thumbnail" === e.tileClass && (p = {
                        title: "",
                        showaxeslabels: !1,
                        showticklabels: !1,
                        linetickenable: !1
                    }), i = 0; i < h.length; i++) {
                        var g = h[i];
                        d[g].xaxis = a(d[g].xaxis, p), d[g].yaxis = a(d[g].yaxis, p), d[g].zaxis = a(d[g].zaxis, p), 
                        d[g]._scene = null;
                    }
                    d.glopts = {
                        preserveDrawingBuffer: !0
                    };
                }
                var m = document.createElement("div");
                e.tileClass && (m.className = e.tileClass), e.hidden && (m.display = "none");
                var y = {
                    td: m,
                    layout: d,
                    data: c,
                    config: {
                        staticPlot: void 0 === e.staticPlot ? !0 : e.staticPlot,
                        plot3dPixelRatio: void 0 === e.plot3dPixelRatio ? 2 : e.plot3dPixelRatio,
                        displaylogo: e.displaylogo || !1,
                        showLink: e.showLink || !1,
                        showTips: e.showTips || !1
                    }
                };
                return "transparent" !== e.setBackground && (y.config.setBackground = e.setBackground || "opaque"), 
                y.td.defaultLayout = r(e.tileClass), y;
            };
        }, {
            "../plotly": 27,
            extend: 4
        } ],
        32: [ function(t, e) {
            var r = {
                clone: t("./cloneplot"),
                toSVG: t("./tosvg")
            };
            e.exports = r;
        }, {
            "./cloneplot": 31,
            "./tosvg": 33
        } ],
        33: [ function(t, e) {
            "use strict";
            var r = t("../plotly");
            e.exports = function(t, e) {
                var n, a, o = t._fullLayout, i = o._paper, l = o._size;
                i.insert("rect", ":first-child").call(r.Drawing.setRect, 0, 0, o.width, o.height).call(r.Color.fill, o.paper_bgcolor);
                var s, c, d = r.Plots.getSubplotIds(o, "gl3d");
                for (a = 0; a < d.length; a++) s = o[d[a]], c = s._scene.toImage("png"), n = s.domain, 
                o._glimages.append("svg:image").attr({
                    xmlns: "http://www.w3.org/2000/svg",
                    "xlink:xlink:href": c,
                    height: l.h * (n.y[1] - n.y[0]),
                    width: l.w * (n.x[1] - n.x[0]),
                    x: l.l + l.w * n.x[0],
                    y: l.t + l.h * (1 - n.y[1]),
                    preserveAspectRatio: "none"
                }), s._scene.destroy();
                var u, f, h = r.Plots.getSubplotIds(o, "geo");
                for (a = 0; a < h.length; a++) u = o[h[a]], n = u.domain, f = u._geo.framework, 
                f.attr("style", null), f.attr({
                    x: l.l + l.w * n.x[0] + u._marginX,
                    y: l.t + l.h * (1 - n.y[1]) + u._marginY,
                    width: u._width,
                    height: u._height
                }), o._geoimages.node().appendChild(f.node());
                if (o._toppaper) {
                    var p, g = o._toppaper.node().childNodes;
                    for (a = 0; a < g.length; a++) p = g[a], p.childNodes.length && i.node().appendChild(p);
                }
                i.node().style.background = "", i.selectAll("text").attr({
                    "data-unformatted": null
                }).each(function() {
                    var t = window.d3.select(this);
                    if ("hidden" === t.style("visibility")) return void t.remove();
                    var e = t.style("font-family");
                    e && -1 !== e.indexOf('"') && t.style("font-family", e.replace(/"/g, '"'));
                }), ("pdf" === e || "eps" === e) && i.selectAll("#MathJax_SVG_glyphs path").attr("stroke-width", 0), 
                i.node().setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg"), 
                i.node().setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
                var m = new window.XMLSerializer().serializeToString(i.node());
                return m = r.util.html_entity_decode(m), m = r.util.xml_entity_encode(m);
            };
        }, {
            "../plotly": 27
        } ],
        34: [ function(t) {
            (function(t, e) {
                !function() {
                    var r, n, a, o;
                    !function() {
                        var t = {}, e = {};
                        r = function(e, r, n) {
                            t[e] = {
                                deps: r,
                                callback: n
                            };
                        }, o = a = n = function(r) {
                            function a(t) {
                                if ("." !== t.charAt(0)) return t;
                                for (var e = t.split("/"), n = r.split("/").slice(0, -1), a = 0, o = e.length; o > a; a++) {
                                    var i = e[a];
                                    if (".." === i) n.pop(); else {
                                        if ("." === i) continue;
                                        n.push(i);
                                    }
                                }
                                return n.join("/");
                            }
                            if (o._eak_seen = t, e[r]) return e[r];
                            if (e[r] = {}, !t[r]) throw new Error("Could not find module " + r);
                            for (var i, l = t[r], s = l.deps, c = l.callback, d = [], u = 0, f = s.length; f > u; u++) d.push("exports" === s[u] ? i = {} : n(a(s[u])));
                            var h = c.apply(this, d);
                            return e[r] = i || h;
                        };
                    }(), r("promise/all", [ "./utils", "exports" ], function(t, e) {
                        "use strict";
                        function r(t) {
                            var e = this;
                            if (!n(t)) throw new TypeError("You must pass an array to all.");
                            return new e(function(e, r) {
                                function n(t) {
                                    return function(e) {
                                        o(t, e);
                                    };
                                }
                                function o(t, r) {
                                    l[t] = r, 0 === --s && e(l);
                                }
                                var i, l = [], s = t.length;
                                0 === s && e([]);
                                for (var c = 0; c < t.length; c++) i = t[c], i && a(i.then) ? i.then(n(c), r) : o(c, i);
                            });
                        }
                        var n = t.isArray, a = t.isFunction;
                        e.all = r;
                    }), r("promise/asap", [ "exports" ], function(r) {
                        "use strict";
                        function n() {
                            return function() {
                                t.nextTick(i);
                            };
                        }
                        function a() {
                            var t = 0, e = new d(i), r = document.createTextNode("");
                            return e.observe(r, {
                                characterData: !0
                            }), function() {
                                r.data = t = ++t % 2;
                            };
                        }
                        function o() {
                            return function() {
                                u.setTimeout(i, 1);
                            };
                        }
                        function i() {
                            for (var t = 0; t < f.length; t++) {
                                var e = f[t], r = e[0], n = e[1];
                                r(n);
                            }
                            f = [];
                        }
                        function l(t, e) {
                            var r = f.push([ t, e ]);
                            1 === r && s();
                        }
                        var s, c = "undefined" != typeof window ? window : {}, d = c.MutationObserver || c.WebKitMutationObserver, u = "undefined" != typeof e ? e : void 0 === this ? window : this, f = [];
                        s = "undefined" != typeof t && "[object process]" === {}.toString.call(t) ? n() : d ? a() : o(), 
                        r.asap = l;
                    }), r("promise/config", [ "exports" ], function(t) {
                        "use strict";
                        function e(t, e) {
                            return 2 !== arguments.length ? r[t] : void (r[t] = e);
                        }
                        var r = {
                            instrument: !1
                        };
                        t.config = r, t.configure = e;
                    }), r("promise/polyfill", [ "./promise", "./utils", "exports" ], function(t, r, n) {
                        "use strict";
                        function a() {
                            var t;
                            t = "undefined" != typeof e ? e : "undefined" != typeof window && window.document ? window : self;
                            var r = "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function() {
                                var e;
                                return new t.Promise(function(t) {
                                    e = t;
                                }), i(e);
                            }();
                            r || (t.Promise = o);
                        }
                        var o = t.Promise, i = r.isFunction;
                        n.polyfill = a;
                    }), r("promise/promise", [ "./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports" ], function(t, e, r, n, a, o, i, l) {
                        "use strict";
                        function s(t) {
                            if (!_(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                            if (!(this instanceof s)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                            this._subscribers = [], c(t, this);
                        }
                        function c(t, e) {
                            function r(t) {
                                p(e, t);
                            }
                            function n(t) {
                                m(e, t);
                            }
                            try {
                                t(r, n);
                            } catch (t) {
                                n(t);
                            }
                        }
                        function d(t, e, r, n) {
                            var a, o, i, l, s = _(r);
                            if (s) try {
                                a = r(n), i = !0;
                            } catch (t) {
                                l = !0, o = t;
                            } else a = n, i = !0;
                            h(e, a) || (s && i ? p(e, a) : l ? m(e, o) : t === D ? p(e, a) : t === O && m(e, a));
                        }
                        function u(t, e, r, n) {
                            var a = t._subscribers, o = a.length;
                            a[o] = e, a[o + D] = r, a[o + O] = n;
                        }
                        function f(t, e) {
                            for (var r, n, a = t._subscribers, o = t._detail, i = 0; i < a.length; i += 3) r = a[i], 
                            n = a[i + e], d(e, r, n, o);
                            t._subscribers = null;
                        }
                        function h(t, e) {
                            var r, n = null;
                            try {
                                if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                                if (b(e) && (n = e.then, _(n))) return n.call(e, function(n) {
                                    return r ? !0 : (r = !0, void (e !== n ? p(t, n) : g(t, n)));
                                }, function(e) {
                                    return r ? !0 : (r = !0, void m(t, e));
                                }), !0;
                            } catch (e) {
                                return r ? !0 : (m(t, e), !0);
                            }
                            return !1;
                        }
                        function p(t, e) {
                            t === e ? g(t, e) : h(t, e) || g(t, e);
                        }
                        function g(t, e) {
                            t._state === z && (t._state = C, t._detail = e, x.async(y, t));
                        }
                        function m(t, e) {
                            t._state === z && (t._state = C, t._detail = e, x.async(v, t));
                        }
                        function y(t) {
                            f(t, t._state = D);
                        }
                        function v(t) {
                            f(t, t._state = O);
                        }
                        var x = t.config, b = (t.configure, e.objectOrFunction), _ = e.isFunction, w = (e.now, 
                        r.all), k = n.race, A = a.resolve, M = o.reject, L = i.asap;
                        x.async = L;
                        var z = void 0, C = 0, D = 1, O = 2;
                        s.prototype = {
                            constructor: s,
                            _state: void 0,
                            _detail: void 0,
                            _subscribers: void 0,
                            then: function(t, e) {
                                var r = this, n = new this.constructor(function() {});
                                if (this._state) {
                                    var a = arguments;
                                    x.async(function() {
                                        d(r._state, n, a[r._state - 1], r._detail);
                                    });
                                } else u(this, n, t, e);
                                return n;
                            },
                            "catch": function(t) {
                                return this.then(null, t);
                            }
                        }, s.all = w, s.race = k, s.resolve = A, s.reject = M, l.Promise = s;
                    }), r("promise/race", [ "./utils", "exports" ], function(t, e) {
                        "use strict";
                        function r(t) {
                            var e = this;
                            if (!n(t)) throw new TypeError("You must pass an array to race.");
                            return new e(function(e, r) {
                                for (var n, a = 0; a < t.length; a++) n = t[a], n && "function" == typeof n.then ? n.then(e, r) : e(n);
                            });
                        }
                        var n = t.isArray;
                        e.race = r;
                    }), r("promise/reject", [ "exports" ], function(t) {
                        "use strict";
                        function e(t) {
                            var e = this;
                            return new e(function(e, r) {
                                r(t);
                            });
                        }
                        t.reject = e;
                    }), r("promise/resolve", [ "exports" ], function(t) {
                        "use strict";
                        function e(t) {
                            if (t && "object" == typeof t && t.constructor === this) return t;
                            var e = this;
                            return new e(function(e) {
                                e(t);
                            });
                        }
                        t.resolve = e;
                    }), r("promise/utils", [ "exports" ], function(t) {
                        "use strict";
                        function e(t) {
                            return r(t) || "object" == typeof t && null !== t;
                        }
                        function r(t) {
                            return "function" == typeof t;
                        }
                        function n(t) {
                            return "[object Array]" === Object.prototype.toString.call(t);
                        }
                        var a = Date.now || function() {
                            return new Date().getTime();
                        };
                        t.objectOrFunction = e, t.isFunction = r, t.isArray = n, t.now = a;
                    }), n("promise/polyfill").polyfill();
                }();
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {
            _process: 1
        } ],
        35: [ function() {
            Promise.prototype.done || (Promise.prototype.done = function(t, e) {
                this.then(t, e).then(null, function(t) {
                    setTimeout(function() {
                        throw t;
                    }, 0);
                });
            });
        }, {} ]
    }, {}, [ 27 ])(27);
});

Plotly.BUILD = "20150812a_basic";