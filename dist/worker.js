! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "dist", t(t.s = 0)
}([function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = n(1),
        a = r(o),
        i = n(2),
        s = r(i),
        u = {
            wav: a.default,
            mp3: s.default
        };
    self.onmessage = function(e) {
        var t = e.data,
            n = t.type,
            r = t.id,
            o = t.audioData,
            a = void 0;
        try {
            var i = u[n];
            if (!i) throw new Error("Unkown audio encoding");
            a = i(o)
        } catch (e) {
            postMessage({
                id: r,
                error: !0,
                message: e.toString()
            })
        }
        postMessage({
            id: r,
            error: !1,
            blob: a
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.channels,
            n = e.sampleRate,
            r = o(t),
            a = s(r, t.length, n);
        return new Blob([a], {
            type: "audio/wav"
        })
    }

    function o(e) {
        if (1 === e.length) return e[0];
        for (var t = e[0], n = e[1], r = t.length + n.length, o = new Float32Array(r), a = 0, i = 0; a < r;) o[a++] = t[i], o[a++] = n[i], i++;
        return o
    }

    function a(e, t, n) {
        for (var r = 0; r < n.length; r++, t += 2) {
            var o = n[r];
            o < 0 ? (o < -1 && (o = -1), o *= 32768) : (o > 1 && (o = 1), o *= 32767), e.setInt16(t, o, !0)
        }
    }

    function i(e, t, n) {
        for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r))
    }

    function s(e, t, n) {
        var r = new ArrayBuffer(44 + 2 * e.length),
            o = new DataView(r);
        return i(o, 0, "RIFF"), o.setUint32(4, 36 + 2 * e.length, !0), i(o, 8, "WAVE"), i(o, 12, "fmt "), o.setUint32(16, 16, !0), o.setUint16(20, 1, !0), o.setUint16(22, t, !0), o.setUint32(24, n, !0), o.setUint32(28, 4 * n, !0), o.setUint16(32, 2 * t, !0), o.setUint16(34, 16, !0), i(o, 36, "data"), o.setUint32(40, 2 * e.length, !0), a(o, 44, e), o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.channels,
            n = e.sampleRate;
        console.log(t);
        var r = new Mp3LameEncoder(n, 192);
        r.encode(t);
        var o = r.finish();
        return console.log(o), o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, self.Mp3LameEncoderConfig = {
        memoryInitializerPrefixURL: "../vendor/",
        TOTAL_MEMORY: 1073741824
    }, self.importScripts("../vendor/Mp3LameEncoder.min.js")
}]);