! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "dist", e(e.s = 79)
}([function(t, e) {
    var n = t.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var r = n(41)("wks"),
        o = n(29),
        i = n(2).Symbol,
        a = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
    }).store = r
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    var r = n(7);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    var r = n(2),
        o = n(0),
        i = n(21),
        a = n(9),
        u = function(t, e, n) {
            var s, c, l, f = t & u.F,
                h = t & u.G,
                d = t & u.S,
                p = t & u.P,
                v = t & u.B,
                y = t & u.W,
                m = h ? o : o[e] || (o[e] = {}),
                g = m.prototype,
                b = h ? r : d ? r[e] : (r[e] || {}).prototype;
            h && (n = e);
            for (s in n)(c = !f && b && void 0 !== b[s]) && s in m || (l = c ? b[s] : n[s], m[s] = h && "function" != typeof b[s] ? n[s] : v && c ? i(l, r) : y && b[s] == l ? function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(l) : p && "function" == typeof l ? i(Function.call, l) : l, p && ((m.virtual || (m.virtual = {}))[s] = l, t & u.R && g && !g[s] && a(g, s, l)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(3),
        o = n(52),
        i = n(37),
        a = Object.defineProperty;
    e.f = n(8) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    t.exports = !n(22)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var r = n(6),
        o = n(28);
    t.exports = n(8) ? function(t, e, n) {
        return r.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(86),
        o = n(35);
    t.exports = function(t) {
        return r(o(t))
    }
}, function(t, e, n) {
    t.exports = {
        default: n(104),
        __esModule: !0
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(107),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    e.default = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }()
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(64),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0, o.default)(e)) && "function" != typeof e ? t : e
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(121),
        i = r(o),
        a = n(125),
        u = r(a),
        s = n(64),
        c = r(s);
    e.default = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, c.default)(e)));
        t.prototype = (0, u.default)(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (i.default ? (0, i.default)(t, e) : t.__proto__ = e)
    }
}, function(t, e) {
    t.exports = React
}, function(t, e, n) {
    (function(e) {
        ! function(e, n) {
            t.exports = n()
        }(0, function() {
            "use strict";

            function t(t, e) {
                return e = {
                    exports: {}
                }, t(e, e.exports), e.exports
            }
            var n = function(t) {
                var e = t.id,
                    n = t.viewBox,
                    r = t.content;
                this.id = e, this.viewBox = n, this.content = r
            };
            n.prototype.stringify = function() {
                return this.content
            }, n.prototype.toString = function() {
                return this.stringify()
            }, n.prototype.destroy = function() {
                var t = this;
                ["id", "viewBox", "content"].forEach(function(e) {
                    return delete t[e]
                })
            };
            var r = function(t) {
                    var e = !!document.importNode,
                        n = (new DOMParser).parseFromString(t, "image/svg+xml").documentElement;
                    return e ? document.importNode(n, !0) : n
                },
                o = ("undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self, t(function(t, e) {
                    ! function(e, n) {
                        t.exports = n()
                    }(0, function() {
                        function t(t) {
                            return t && "object" == typeof t && "[object RegExp]" !== Object.prototype.toString.call(t) && "[object Date]" !== Object.prototype.toString.call(t)
                        }

                        function e(t) {
                            return Array.isArray(t) ? [] : {}
                        }

                        function n(n, r) {
                            return r && !0 === r.clone && t(n) ? i(e(n), n, r) : n
                        }

                        function r(e, r, o) {
                            var a = e.slice();
                            return r.forEach(function(r, u) {
                                void 0 === a[u] ? a[u] = n(r, o) : t(r) ? a[u] = i(e[u], r, o) : -1 === e.indexOf(r) && a.push(n(r, o))
                            }), a
                        }

                        function o(e, r, o) {
                            var a = {};
                            return t(e) && Object.keys(e).forEach(function(t) {
                                a[t] = n(e[t], o)
                            }), Object.keys(r).forEach(function(u) {
                                t(r[u]) && e[u] ? a[u] = i(e[u], r[u], o) : a[u] = n(r[u], o)
                            }), a
                        }

                        function i(t, e, i) {
                            var a = Array.isArray(e),
                                u = i || {
                                    arrayMerge: r
                                },
                                s = u.arrayMerge || r;
                            return a ? Array.isArray(t) ? s(t, e, i) : n(e, i) : o(t, e, i)
                        }
                        return i.all = function(t, e) {
                            if (!Array.isArray(t) || t.length < 2) throw new Error("first argument should be an array with at least two elements");
                            return t.reduce(function(t, n) {
                                return i(t, n, e)
                            })
                        }, i
                    })
                })),
                i = t(function(t, e) {
                    var n = {
                        svg: {
                            name: "xmlns",
                            uri: "http://www.w3.org/2000/svg"
                        },
                        xlink: {
                            name: "xmlns:xlink",
                            uri: "http://www.w3.org/1999/xlink"
                        }
                    };
                    e.default = n, t.exports = e.default
                }),
                a = function(t) {
                    return Object.keys(t).map(function(e) {
                        return e + '="' + t[e].toString().replace(/"/g, "&quot;") + '"'
                    }).join(" ")
                },
                u = i.svg,
                s = i.xlink,
                c = {};
            c[u.name] = u.uri, c[s.name] = s.uri;
            var l = function(t, e) {
                void 0 === t && (t = "");
                var n = o(c, e || {});
                return "<svg " + a(n) + ">" + t + "</svg>"
            };
            return function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var n = {
                    isMounted: {}
                };
                return n.isMounted.get = function() {
                    return !!this.node
                }, e.createFromExistingNode = function(t) {
                    return new e({
                        id: t.getAttribute("id"),
                        viewBox: t.getAttribute("viewBox"),
                        content: t.outerHTML
                    })
                }, e.prototype.destroy = function() {
                    this.isMounted && this.unmount(), t.prototype.destroy.call(this)
                }, e.prototype.mount = function(t) {
                    if (this.isMounted) return this.node;
                    var e = "string" == typeof t ? document.querySelector(t) : t,
                        n = this.render();
                    return this.node = n, e.appendChild(n), n
                }, e.prototype.render = function() {
                    var t = this.stringify();
                    return r(l(t)).childNodes[0]
                }, e.prototype.unmount = function() {
                    this.node.parentNode.removeChild(this.node)
                }, Object.defineProperties(e.prototype, n), e
            }(n)
        })
    }).call(e, n(5))
}, function(t, e, n) {
    (function(e) {
        ! function(e, n) {
            t.exports = n()
        }(0, function() {
            "use strict";

            function t(t, e) {
                return e = {
                    exports: {}
                }, t(e, e.exports), e.exports
            }

            function n(t) {
                return t = t || Object.create(null), {
                    on: function(e, n) {
                        (t[e] || (t[e] = [])).push(n)
                    },
                    off: function(e, n) {
                        t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1)
                    },
                    emit: function(e, n) {
                        (t[e] || []).map(function(t) {
                            t(n)
                        }), (t["*"] || []).map(function(t) {
                            t(e, n)
                        })
                    }
                }
            }

            function r(t, e) {
                return M(t).reduce(function(t, n) {
                    if (!n.attributes) return t;
                    var r = M(n.attributes),
                        o = e ? r.filter(e) : r;
                    return t.concat(o)
                }, [])
            }

            function o(t) {
                return t.replace(L, function(t) {
                    return "%" + t[0].charCodeAt(0).toString(16).toUpperCase()
                })
            }

            function i(t, e, n) {
                return M(t).forEach(function(t) {
                    var r = t.getAttribute(A);
                    if (r && 0 === r.indexOf(e)) {
                        var o = r.replace(e, n);
                        t.setAttributeNS(j, A, o)
                    }
                }), t
            }
            var a = ("undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self, t(function(t, e) {
                    ! function(e, n) {
                        t.exports = n()
                    }(0, function() {
                        function t(t) {
                            return t && "object" == typeof t && "[object RegExp]" !== Object.prototype.toString.call(t) && "[object Date]" !== Object.prototype.toString.call(t)
                        }

                        function e(t) {
                            return Array.isArray(t) ? [] : {}
                        }

                        function n(n, r) {
                            return r && !0 === r.clone && t(n) ? i(e(n), n, r) : n
                        }

                        function r(e, r, o) {
                            var a = e.slice();
                            return r.forEach(function(r, u) {
                                void 0 === a[u] ? a[u] = n(r, o) : t(r) ? a[u] = i(e[u], r, o) : -1 === e.indexOf(r) && a.push(n(r, o))
                            }), a
                        }

                        function o(e, r, o) {
                            var a = {};
                            return t(e) && Object.keys(e).forEach(function(t) {
                                a[t] = n(e[t], o)
                            }), Object.keys(r).forEach(function(u) {
                                t(r[u]) && e[u] ? a[u] = i(e[u], r[u], o) : a[u] = n(r[u], o)
                            }), a
                        }

                        function i(t, e, i) {
                            var a = Array.isArray(e),
                                u = i || {
                                    arrayMerge: r
                                },
                                s = u.arrayMerge || r;
                            return a ? Array.isArray(t) ? s(t, e, i) : n(e, i) : o(t, e, i)
                        }
                        return i.all = function(t, e) {
                            if (!Array.isArray(t) || t.length < 2) throw new Error("first argument should be an array with at least two elements");
                            return t.reduce(function(t, n) {
                                return i(t, n, e)
                            })
                        }, i
                    })
                })),
                u = t(function(t, e) {
                    var n = {
                        svg: {
                            name: "xmlns",
                            uri: "http://www.w3.org/2000/svg"
                        },
                        xlink: {
                            name: "xmlns:xlink",
                            uri: "http://www.w3.org/1999/xlink"
                        }
                    };
                    e.default = n, t.exports = e.default
                }),
                s = function(t) {
                    return Object.keys(t).map(function(e) {
                        return e + '="' + t[e].toString().replace(/"/g, "&quot;") + '"'
                    }).join(" ")
                },
                c = u.svg,
                l = u.xlink,
                f = {};
            f[c.name] = c.uri, f[l.name] = l.uri;
            var h, d = function(t, e) {
                    void 0 === t && (t = "");
                    var n = a(f, e || {});
                    return "<svg " + s(n) + ">" + t + "</svg>"
                },
                p = u.svg,
                v = u.xlink,
                y = {
                    attrs: (h = {
                        style: ["position: absolute", "width: 0", "height: 0"].join("; ")
                    }, h[p.name] = p.uri, h[v.name] = v.uri, h)
                },
                m = function(t) {
                    this.config = a(y, t || {}), this.symbols = []
                };
            m.prototype.add = function(t) {
                var e = this,
                    n = e.symbols,
                    r = this.find(t.id);
                return r ? (n[n.indexOf(r)] = t, !1) : (n.push(t), !0)
            }, m.prototype.remove = function(t) {
                var e = this,
                    n = e.symbols,
                    r = this.find(t);
                return !!r && (n.splice(n.indexOf(r), 1), r.destroy(), !0)
            }, m.prototype.find = function(t) {
                return this.symbols.filter(function(e) {
                    return e.id === t
                })[0] || null
            }, m.prototype.has = function(t) {
                return null !== this.find(t)
            }, m.prototype.stringify = function() {
                var t = this.config,
                    e = t.attrs,
                    n = this.symbols.map(function(t) {
                        return t.stringify()
                    }).join("");
                return d(n, e)
            }, m.prototype.toString = function() {
                return this.stringify()
            }, m.prototype.destroy = function() {
                this.symbols.forEach(function(t) {
                    return t.destroy()
                })
            };
            var g = function(t) {
                var e = t.id,
                    n = t.viewBox,
                    r = t.content;
                this.id = e, this.viewBox = n, this.content = r
            };
            g.prototype.stringify = function() {
                return this.content
            }, g.prototype.toString = function() {
                return this.stringify()
            }, g.prototype.destroy = function() {
                var t = this;
                ["id", "viewBox", "content"].forEach(function(e) {
                    return delete t[e]
                })
            };
            var b, _ = function(t) {
                    var e = !!document.importNode,
                        n = (new DOMParser).parseFromString(t, "image/svg+xml").documentElement;
                    return e ? document.importNode(n, !0) : n
                },
                w = function(t) {
                    function e() {
                        t.apply(this, arguments)
                    }
                    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                    var n = {
                        isMounted: {}
                    };
                    return n.isMounted.get = function() {
                        return !!this.node
                    }, e.createFromExistingNode = function(t) {
                        return new e({
                            id: t.getAttribute("id"),
                            viewBox: t.getAttribute("viewBox"),
                            content: t.outerHTML
                        })
                    }, e.prototype.destroy = function() {
                        this.isMounted && this.unmount(), t.prototype.destroy.call(this)
                    }, e.prototype.mount = function(t) {
                        if (this.isMounted) return this.node;
                        var e = "string" == typeof t ? document.querySelector(t) : t,
                            n = this.render();
                        return this.node = n, e.appendChild(n), n
                    }, e.prototype.render = function() {
                        var t = this.stringify();
                        return _(d(t)).childNodes[0]
                    }, e.prototype.unmount = function() {
                        this.node.parentNode.removeChild(this.node)
                    }, Object.defineProperties(e.prototype, n), e
                }(g),
                x = {
                    autoConfigure: !0,
                    mountTo: "body",
                    syncUrlsWithBaseTag: !1,
                    listenLocationChangeEvent: !0,
                    locationChangeEvent: "locationChange",
                    locationChangeAngularEmitter: !1,
                    usagesToUpdate: "use[*|href]",
                    moveGradientsOutsideSymbol: !1
                },
                M = function(t) {
                    return Array.prototype.slice.call(t, 0)
                },
                E = navigator.userAgent,
                O = {
                    isChrome: /chrome/i.test(E),
                    isFirefox: /firefox/i.test(E),
                    isIE: /msie/i.test(E) || /trident/i.test(E),
                    isEdge: /edge/i.test(E)
                },
                k = function(t, e) {
                    var n = document.createEvent("CustomEvent");
                    n.initCustomEvent(t, !1, !1, e), window.dispatchEvent(n)
                },
                C = function(t) {
                    var e = [];
                    return M(t.querySelectorAll("style")).forEach(function(t) {
                        t.textContent += "", e.push(t)
                    }), e
                },
                S = function(t) {
                    return (t || window.location.href).split("#")[0]
                },
                P = function(t) {
                    angular.module("ng").run(["$rootScope", function(e) {
                        e.$on("$locationChangeSuccess", function(e, n, r) {
                            k(t, {
                                oldUrl: r,
                                newUrl: n
                            })
                        })
                    }])
                },
                T = function(t, e) {
                    return void 0 === e && (e = "linearGradient, radialGradient, pattern"), M(t.querySelectorAll("symbol")).forEach(function(t) {
                        M(t.querySelectorAll(e)).forEach(function(e) {
                            t.parentNode.insertBefore(e, t)
                        })
                    }), t
                },
                j = u.xlink.uri,
                A = "xlink:href",
                L = /[{}|\\\^\[\]`"<>]/g,
                N = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke", "style"],
                R = N.map(function(t) {
                    return "[" + t + "]"
                }).join(","),
                B = function(t, e, n, a) {
                    var u = o(n),
                        s = o(a);
                    r(t.querySelectorAll(R), function(t) {
                        var e = t.localName,
                            n = t.value;
                        return -1 !== N.indexOf(e) && -1 !== n.indexOf("url(" + u)
                    }).forEach(function(t) {
                        return t.value = t.value.replace(u, s)
                    }), i(e, u, s)
                },
                D = {
                    MOUNT: "mount",
                    SYMBOL_MOUNT: "symbol_mount"
                },
                F = function(t) {
                    function e(e) {
                        var r = this;
                        void 0 === e && (e = {}), t.call(this, a(x, e));
                        var o = n();
                        this._emitter = o, this.node = null;
                        var i = this,
                            u = i.config;
                        if (u.autoConfigure && this._autoConfigure(e), u.syncUrlsWithBaseTag) {
                            var s = document.getElementsByTagName("base")[0].getAttribute("href");
                            o.on(D.MOUNT, function() {
                                return r.updateUrls("#", s)
                            })
                        }
                        var c = this._handleLocationChange.bind(this);
                        this._handleLocationChange = c, u.listenLocationChangeEvent && window.addEventListener(u.locationChangeEvent, c), u.locationChangeAngularEmitter && P(u.locationChangeEvent), o.on(D.MOUNT, function(t) {
                            u.moveGradientsOutsideSymbol && T(t)
                        }), o.on(D.SYMBOL_MOUNT, function(t) {
                            u.moveGradientsOutsideSymbol && T(t.parentNode), (O.isIE || O.isEdge) && C(t)
                        })
                    }
                    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                    var r = {
                        isMounted: {}
                    };
                    return r.isMounted.get = function() {
                        return !!this.node
                    }, e.prototype._autoConfigure = function(t) {
                        var e = this,
                            n = e.config;
                        void 0 === t.syncUrlsWithBaseTag && (n.syncUrlsWithBaseTag = void 0 !== document.getElementsByTagName("base")[0]), void 0 === t.locationChangeAngularEmitter && (n.locationChangeAngularEmitter = "angular" in window), void 0 === t.moveGradientsOutsideSymbol && (n.moveGradientsOutsideSymbol = O.isFirefox)
                    }, e.prototype._handleLocationChange = function(t) {
                        var e = t.detail,
                            n = e.oldUrl,
                            r = e.newUrl;
                        this.updateUrls(n, r)
                    }, e.prototype.add = function(e) {
                        var n = this,
                            r = t.prototype.add.call(this, e);
                        return this.isMounted && r && (e.mount(n.node), this._emitter.emit(D.SYMBOL_MOUNT, e.node)), r
                    }, e.prototype.attach = function(t) {
                        var e = this,
                            n = this;
                        if (n.isMounted) return n.node;
                        var r = "string" == typeof t ? document.querySelector(t) : t;
                        return n.node = r, this.symbols.forEach(function(t) {
                            t.mount(n.node), e._emitter.emit(D.SYMBOL_MOUNT, t.node)
                        }), M(r.querySelectorAll("symbol")).forEach(function(t) {
                            var e = w.createFromExistingNode(t);
                            e.node = t, n.add(e)
                        }), this._emitter.emit(D.MOUNT, r), r
                    }, e.prototype.destroy = function() {
                        var t = this,
                            e = t.config,
                            n = t.symbols,
                            r = t._emitter;
                        n.forEach(function(t) {
                            return t.destroy()
                        }), r.off("*"), window.removeEventListener(e.locationChangeEvent, this._handleLocationChange), this.isMounted && this.unmount()
                    }, e.prototype.mount = function(t, e) {
                        void 0 === t && (t = this.config.mountTo), void 0 === e && (e = !1);
                        var n = this;
                        if (n.isMounted) return n.node;
                        var r = "string" == typeof t ? document.querySelector(t) : t,
                            o = n.render();
                        return this.node = o, e && r.childNodes[0] ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o), this._emitter.emit(D.MOUNT, o), o
                    }, e.prototype.render = function() {
                        return _(this.stringify())
                    }, e.prototype.unmount = function() {
                        this.node.parentNode.removeChild(this.node)
                    }, e.prototype.updateUrls = function(t, e) {
                        if (!this.isMounted) return !1;
                        var n = document.querySelectorAll(this.config.usagesToUpdate);
                        return B(this.node, n, S(t) + "#", S(e) + "#"), !0
                    }, Object.defineProperties(e.prototype, r), e
                }(m),
                U = t(function(t) {
                    /*!
                     * domready (c) Dustin Diaz 2014 - License MIT
                     */
                    ! function(e, n) {
                        t.exports = function() {
                            var t, e = [],
                                n = document,
                                r = n.documentElement.doScroll,
                                o = (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
                            return o || n.addEventListener("DOMContentLoaded", t = function() {
                                    for (n.removeEventListener("DOMContentLoaded", t), o = 1; t = e.shift();) t()
                                }),
                                function(t) {
                                    o ? setTimeout(t, 0) : e.push(t)
                                }
                        }()
                    }()
                }),
                I = !!window.__SVG_SPRITE__;
            I ? b = window.__SVG_SPRITE__ : (b = new F({
                attrs: {
                    id: "__SVG_SPRITE_NODE__"
                }
            }), window.__SVG_SPRITE__ = b);
            var z = function() {
                var t = document.getElementById("__SVG_SPRITE_NODE__");
                t ? b.attach(t) : b.mount(document.body, !0)
            };
            return document.body ? z() : U(z), b
        })
    }).call(e, n(5))
}, function(t, e, n) {
    var r = n(27);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return t.call(e, n, r, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    t.exports = n(139)()
}, function(t, e, n) {
    "use strict";
    var r = n(83)(!0);
    n(51)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e) {
    t.exports = !0
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e, n) {
    var r = n(6).f,
        o = n(10),
        i = n(1)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    n(89);
    for (var r = n(2), o = n(9), i = n(11), a = n(1)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
        var c = u[s],
            l = r[c],
            f = l && l.prototype;
        f && !f[a] && o(f, a, c), i[c] = i.Array
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.leftZero = e.formatSeconds = e.rename = e.download = e.readBlobURL = e.readDataURL = e.readArrayBuffer = e.readFile = e.range = e.isAudio = void 0;
    var r = n(33),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        i = (e.isAudio = function(t) {
            return t.type.indexOf("audio") > -1
        }, e.range = function(t, e) {
            return Array.apply(null, {
                length: e - t + 1
            }).map(function(e, n) {
                return n + t
            })
        }, e.readFile = function(t, e) {
            return new o.default(function(n, r) {
                var o = new FileReader;
                o["readAs" + e](t), o.onload = function() {
                    return n(o.result)
                }, o.onerror = function(t) {
                    return r(t)
                }
            })
        });
    e.readArrayBuffer = function(t) {
        return i(t, "ArrayBuffer")
    }, e.readDataURL = function(t) {
        return i(t, "DataURL")
    }, e.readBlobURL = function(t) {
        return URL.createObjectURL(t)
    }, e.download = function(t, e) {
        var n = document.createElement("a");
        n.href = t, n.download = e, n.click()
    }, e.rename = function(t, e, n) {
        return "" + t.replace(/\.\w+$/, "") + (n || "") + "." + e
    }, e.formatSeconds = function(t) {
        return [Math.floor(t / 60), Math.floor(t % 60), Math.round(t % 1 * 100)]
    }, e.leftZero = function(t, e) {
        return ("000000" + t).slice(-e)
    }
}, function(t, e, n) {
    t.exports = {
        default: n(82),
        __esModule: !0
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(7),
        o = n(2).document,
        i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var r = n(3),
        o = n(85),
        i = n(42),
        a = n(40)("IE_PROTO"),
        u = function() {},
        s = function() {
            var t, e = n(36)("iframe"),
                r = i.length;
            for (e.style.display = "none", n(56).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
            return s()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (u.prototype = r(t), n = new u, u.prototype = null, n[a] = t) : n = s(), void 0 === e ? n : o(n, e)
    }
}, function(t, e, n) {
    var r = n(54),
        o = n(42);
    t.exports = Object.keys || function(t) {
        return r(t, o)
    }
}, function(t, e, n) {
    var r = n(41)("keys"),
        o = n(29);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}, function(t, e, n) {
    var r = n(2),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) {
        return o[t] || (o[t] = {})
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var r = n(23),
        o = n(1)("toStringTag"),
        i = "Arguments" == r(function() {
            return arguments
        }()),
        a = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        };
    t.exports = function(t) {
        var e, n, u;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = a(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        }), this.resolve = o(e), this.reject = o(n)
    }
    var o = n(27);
    t.exports.f = function(t) {
        return new r(t)
    }
}, function(t, e, n) {
    e.f = n(1)
}, function(t, e, n) {
    var r = n(2),
        o = n(0),
        i = n(26),
        a = n(45),
        u = n(6).f;
    t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || u(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    t.exports = n(80)
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(33),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    e.default = function(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new o.default(function(t, n) {
                function r(i, a) {
                    try {
                        var u = e[i](a),
                            s = u.value
                    } catch (t) {
                        return void n(t)
                    }
                    if (!u.done) return o.default.resolve(s).then(function(t) {
                        r("next", t)
                    }, function(t) {
                        r("throw", t)
                    });
                    t(s)
                }
                return r("next")
            })
        }
    }
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var r = n(26),
        o = n(4),
        i = n(53),
        a = n(9),
        u = n(10),
        s = n(11),
        c = n(84),
        l = n(30),
        f = n(57),
        h = n(1)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    t.exports = function(t, e, n, v, y, m, g) {
        c(n, e, v);
        var b, _, w, x = function(t) {
                if (!d && t in k) return k[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            M = e + " Iterator",
            E = "values" == y,
            O = !1,
            k = t.prototype,
            C = k[h] || k["@@iterator"] || y && k[y],
            S = !d && C || x(y),
            P = y ? E ? x("entries") : S : void 0,
            T = "Array" == e ? k.entries || C : C;
        if (T && (w = f(T.call(new t))) !== Object.prototype && w.next && (l(w, M, !0), r || u(w, h) || a(w, h, p)), E && C && "values" !== C.name && (O = !0, S = function() {
                return C.call(this)
            }), r && !g || !d && !O && k[h] || a(k, h, S), s[e] = S, s[M] = p, y)
            if (b = {
                    values: E ? S : x("values"),
                    keys: m ? S : x("keys"),
                    entries: P
                }, g)
                for (_ in b) _ in k || i(k, _, b[_]);
            else o(o.P + o.F * (d || O), e, b);
        return b
    }
}, function(t, e, n) {
    t.exports = !n(8) && !n(22)(function() {
        return 7 != Object.defineProperty(n(36)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    t.exports = n(9)
}, function(t, e, n) {
    var r = n(10),
        o = n(12),
        i = n(87)(!1),
        a = n(40)("IE_PROTO");
    t.exports = function(t, e) {
        var n, u = o(t),
            s = 0,
            c = [];
        for (n in u) n != a && r(u, n) && c.push(n);
        for (; e.length > s;) r(u, n = e[s++]) && (~i(c, n) || c.push(n));
        return c
    }
}, function(t, e, n) {
    var r = n(34),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var r = n(2).document;
    t.exports = r && r.documentElement
}, function(t, e, n) {
    var r = n(10),
        o = n(58),
        i = n(40)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    var r = n(35);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    var r = n(43),
        o = n(1)("iterator"),
        i = n(11);
    t.exports = n(0).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function(t, e, n) {
    var r = n(3),
        o = n(27),
        i = n(1)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? e : o(n)
    }
}, function(t, e, n) {
    var r, o, i, a = n(21),
        u = n(97),
        s = n(56),
        c = n(36),
        l = n(2),
        f = l.process,
        h = l.setImmediate,
        d = l.clearImmediate,
        p = l.MessageChannel,
        v = l.Dispatch,
        y = 0,
        m = {},
        g = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e()
            }
        },
        b = function(t) {
            g.call(t.data)
        };
    h && d || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return m[++y] = function() {
            u("function" == typeof t ? t : Function(t), e)
        }, r(y), y
    }, d = function(t) {
        delete m[t]
    }, "process" == n(23)(f) ? r = function(t) {
        f.nextTick(a(g, t, 1))
    } : v && v.now ? r = function(t) {
        v.now(a(g, t, 1))
    } : p ? (o = new p, i = o.port2, o.port1.onmessage = b, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
        s.appendChild(c("script")).onreadystatechange = function() {
            s.removeChild(this), g.call(t)
        }
    } : function(t) {
        setTimeout(a(g, t, 1), 0)
    }), t.exports = {
        set: h,
        clear: d
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    var r = n(3),
        o = n(7),
        i = n(44);
    t.exports = function(t, e) {
        if (r(t), o(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(110),
        i = r(o),
        a = n(112),
        u = r(a),
        s = "function" == typeof u.default && "symbol" == typeof i.default ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : typeof t
        };
    e.default = "function" == typeof u.default && "symbol" === s(i.default) ? function(t) {
        return void 0 === t ? "undefined" : s(t)
    } : function(t) {
        return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : void 0 === t ? "undefined" : s(t)
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(54),
        o = n(42).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, o)
    }
}, function(t, e, n) {
    var r = n(47),
        o = n(28),
        i = n(12),
        a = n(37),
        u = n(10),
        s = n(52),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(8) ? c : function(t, e) {
        if (t = i(t), e = a(e, !0), s) try {
            return c(t, e)
        } catch (t) {}
        if (u(t, e)) return o(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r, o;
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
        "use strict";

        function n() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                var r = arguments[e];
                if (r) {
                    var o = typeof r;
                    if ("string" === o || "number" === o) t.push(r);
                    else if (Array.isArray(r)) t.push(n.apply(null, r));
                    else if ("object" === o)
                        for (var a in r) i.call(r, a) && r[a] && t.push(a)
                }
            }
            return t.join(" ")
        }
        var i = {}.hasOwnProperty;
        void 0 !== t && t.exports ? t.exports = n : (r = [], void 0 !== (o = function() {
            return n
        }.apply(e, r)) && (t.exports = o))
    }()
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = n(48),
        i = r(o),
        a = n(49),
        u = r(a),
        s = n(13),
        c = r(s),
        l = n(14),
        f = r(l),
        h = n(15),
        d = r(h),
        p = n(16),
        v = r(p),
        y = n(17),
        m = r(y),
        g = n(153),
        b = n(32),
        _ = function(t) {
            function e(t) {
                (0, f.default)(this, e);
                var n = (0, v.default)(this, (e.__proto__ || (0, c.default)(e)).call(this));
                return n.audioContext = new AudioContext, n.startRunetime = null, n.startTime = null, n._playing = !1, n.onended = function() {
                    n.pause(), n.pause(), n.pause(), n.emit("end")
                }, n.onprocess = function() {
                    n.emit("process", n.currentPosition)
                }, n.audioBuffer = t, n._initAudioComponent(), n
            }
            return (0, m.default)(e, t), (0, d.default)(e, [{
                key: "_initAudioComponent",
                value: function() {
                    var t = this.audioContext,
                        e = t.createGain();
                    e.connect(t.destination);
                    var n = t.createScriptProcessor(4096);
                    n.onaudioprocess = this.onprocess, this.gainNode = e, this.scriptNode = n
                }
            }, {
                key: "_beforePlay",
                value: function() {
                    var t = this.audioContext,
                        e = this.audioBuffer,
                        n = this.gainNode,
                        r = this.scriptNode;
                    this.paused || this.pause(), r.connect(t.destination);
                    var o = t.createBufferSource();
                    o.buffer = e, o.connect(n), o.onended = this.onended, this.source = o, this._playing = !0
                }
            }, {
                key: "_afterStop",
                value: function() {
                    this.source.disconnect(), this.scriptNode.disconnect(), this._playing = !1
                }
            }, {
                key: "play",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentPosition;
                    this._beforePlay();
                    var e = this.source;
                    this.startRunetime = this.audioContext.currentTime, this.startTime = t, e.start(0, t)
                }
            }, {
                key: "pause",
                value: function() {
                    this.source.stop(), this._afterStop()
                }
            }, {
                key: "destroy",
                value: function() {
                    this._afterStop(), this.gainNode.disconnect(), this.removeAllListeners()
                }
            }, {
                key: "currentPosition",
                get: function() {
                    return this.audioContext.currentTime - this.startRunetime + this.startTime
                }
            }, {
                key: "paused",
                get: function() {
                    return !this._playing
                }
            }], [{
                key: "decode",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = (0, u.default)(i.default.mark(function t(e) {
                        var n, r;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, b.readArrayBuffer)(e);
                                case 2:
                                    return n = t.sent, t.next = 5, (new AudioContext).decodeAudioData(n);
                                case 5:
                                    return r = t.sent, t.abrupt("return", r);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }]), e
        }(g.EventEmitter);
    e.default = _
}, function(t, e, n) {
    "use strict";
    t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function(t, e, n) {
    function r(t, e) {
        return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2)
    }
    var o = n(70),
        i = {};
    for (var a in o) o.hasOwnProperty(a) && (i[o[a]] = a);
    var u = t.exports = {
        rgb: {
            channels: 3,
            labels: "rgb"
        },
        hsl: {
            channels: 3,
            labels: "hsl"
        },
        hsv: {
            channels: 3,
            labels: "hsv"
        },
        hwb: {
            channels: 3,
            labels: "hwb"
        },
        cmyk: {
            channels: 4,
            labels: "cmyk"
        },
        xyz: {
            channels: 3,
            labels: "xyz"
        },
        lab: {
            channels: 3,
            labels: "lab"
        },
        lch: {
            channels: 3,
            labels: "lch"
        },
        hex: {
            channels: 1,
            labels: ["hex"]
        },
        keyword: {
            channels: 1,
            labels: ["keyword"]
        },
        ansi16: {
            channels: 1,
            labels: ["ansi16"]
        },
        ansi256: {
            channels: 1,
            labels: ["ansi256"]
        },
        hcg: {
            channels: 3,
            labels: ["h", "c", "g"]
        },
        apple: {
            channels: 3,
            labels: ["r16", "g16", "b16"]
        },
        gray: {
            channels: 1,
            labels: ["gray"]
        }
    };
    for (var s in u)
        if (u.hasOwnProperty(s)) {
            if (!("channels" in u[s])) throw new Error("missing channels property: " + s);
            if (!("labels" in u[s])) throw new Error("missing channel labels property: " + s);
            if (u[s].labels.length !== u[s].channels) throw new Error("channel and label counts mismatch: " + s);
            var c = u[s].channels,
                l = u[s].labels;
            delete u[s].channels, delete u[s].labels, Object.defineProperty(u[s], "channels", {
                value: c
            }), Object.defineProperty(u[s], "labels", {
                value: l
            })
        } u.rgb.hsl = function(t) {
        var e, n, r, o = t[0] / 255,
            i = t[1] / 255,
            a = t[2] / 255,
            u = Math.min(o, i, a),
            s = Math.max(o, i, a),
            c = s - u;
        return s === u ? e = 0 : o === s ? e = (i - a) / c : i === s ? e = 2 + (a - o) / c : a === s && (e = 4 + (o - i) / c), e = Math.min(60 * e, 360), e < 0 && (e += 360), r = (u + s) / 2, n = s === u ? 0 : r <= .5 ? c / (s + u) : c / (2 - s - u), [e, 100 * n, 100 * r]
    }, u.rgb.hsv = function(t) {
        var e, n, r, o = t[0],
            i = t[1],
            a = t[2],
            u = Math.min(o, i, a),
            s = Math.max(o, i, a),
            c = s - u;
        return n = 0 === s ? 0 : c / s * 1e3 / 10, s === u ? e = 0 : o === s ? e = (i - a) / c : i === s ? e = 2 + (a - o) / c : a === s && (e = 4 + (o - i) / c), e = Math.min(60 * e, 360), e < 0 && (e += 360), r = s / 255 * 1e3 / 10, [e, n, r]
    }, u.rgb.hwb = function(t) {
        var e = t[0],
            n = t[1],
            r = t[2],
            o = u.rgb.hsl(t)[0],
            i = 1 / 255 * Math.min(e, Math.min(n, r));
        return r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)), [o, 100 * i, 100 * r]
    }, u.rgb.cmyk = function(t) {
        var e, n, r, o, i = t[0] / 255,
            a = t[1] / 255,
            u = t[2] / 255;
        return o = Math.min(1 - i, 1 - a, 1 - u), e = (1 - i - o) / (1 - o) || 0, n = (1 - a - o) / (1 - o) || 0, r = (1 - u - o) / (1 - o) || 0, [100 * e, 100 * n, 100 * r, 100 * o]
    }, u.rgb.keyword = function(t) {
        var e = i[t];
        if (e) return e;
        var n, a = 1 / 0;
        for (var u in o)
            if (o.hasOwnProperty(u)) {
                var s = o[u],
                    c = r(t, s);
                c < a && (a = c, n = u)
            } return n
    }, u.keyword.rgb = function(t) {
        return o[t]
    }, u.rgb.xyz = function(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            r = t[2] / 255;
        return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, [100 * (.4124 * e + .3576 * n + .1805 * r), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
    }, u.rgb.lab = function(t) {
        var e, n, r, o = u.rgb.xyz(t),
            i = o[0],
            a = o[1],
            s = o[2];
        return i /= 95.047, a /= 100, s /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * a - 16, n = 500 * (i - a), r = 200 * (a - s), [e, n, r]
    }, u.hsl.rgb = function(t) {
        var e, n, r, o, i, a = t[0] / 360,
            u = t[1] / 100,
            s = t[2] / 100;
        if (0 === u) return i = 255 * s, [i, i, i];
        n = s < .5 ? s * (1 + u) : s + u - s * u, e = 2 * s - n, o = [0, 0, 0];
        for (var c = 0; c < 3; c++) r = a + 1 / 3 * -(c - 1), r < 0 && r++, r > 1 && r--, i = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e, o[c] = 255 * i;
        return o
    }, u.hsl.hsv = function(t) {
        var e, n, r = t[0],
            o = t[1] / 100,
            i = t[2] / 100,
            a = o,
            u = Math.max(i, .01);
        return i *= 2, o *= i <= 1 ? i : 2 - i, a *= u <= 1 ? u : 2 - u, n = (i + o) / 2, e = 0 === i ? 2 * a / (u + a) : 2 * o / (i + o), [r, 100 * e, 100 * n]
    }, u.hsv.rgb = function(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            r = t[2] / 100,
            o = Math.floor(e) % 6,
            i = e - Math.floor(e),
            a = 255 * r * (1 - n),
            u = 255 * r * (1 - n * i),
            s = 255 * r * (1 - n * (1 - i));
        switch (r *= 255, o) {
            case 0:
                return [r, s, a];
            case 1:
                return [u, r, a];
            case 2:
                return [a, r, s];
            case 3:
                return [a, u, r];
            case 4:
                return [s, a, r];
            case 5:
                return [r, a, u]
        }
    }, u.hsv.hsl = function(t) {
        var e, n, r, o = t[0],
            i = t[1] / 100,
            a = t[2] / 100,
            u = Math.max(a, .01);
        return r = (2 - i) * a, e = (2 - i) * u, n = i * u, n /= e <= 1 ? e : 2 - e, n = n || 0, r /= 2, [o, 100 * n, 100 * r]
    }, u.hwb.rgb = function(t) {
        var e, n, r, o, i = t[0] / 360,
            a = t[1] / 100,
            u = t[2] / 100,
            s = a + u;
        s > 1 && (a /= s, u /= s), e = Math.floor(6 * i), n = 1 - u, r = 6 * i - e, 0 != (1 & e) && (r = 1 - r), o = a + r * (n - a);
        var c, l, f;
        switch (e) {
            default:
            case 6:
            case 0:
                c = n, l = o, f = a;
                break;
            case 1:
                c = o, l = n, f = a;
                break;
            case 2:
                c = a, l = n, f = o;
                break;
            case 3:
                c = a, l = o, f = n;
                break;
            case 4:
                c = o, l = a, f = n;
                break;
            case 5:
                c = n, l = a, f = o
        }
        return [255 * c, 255 * l, 255 * f]
    }, u.cmyk.rgb = function(t) {
        var e, n, r, o = t[0] / 100,
            i = t[1] / 100,
            a = t[2] / 100,
            u = t[3] / 100;
        return e = 1 - Math.min(1, o * (1 - u) + u), n = 1 - Math.min(1, i * (1 - u) + u), r = 1 - Math.min(1, a * (1 - u) + u), [255 * e, 255 * n, 255 * r]
    }, u.xyz.rgb = function(t) {
        var e, n, r, o = t[0] / 100,
            i = t[1] / 100,
            a = t[2] / 100;
        return e = 3.2406 * o + -1.5372 * i + -.4986 * a, n = -.9689 * o + 1.8758 * i + .0415 * a, r = .0557 * o + -.204 * i + 1.057 * a, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), r = Math.min(Math.max(0, r), 1), [255 * e, 255 * n, 255 * r]
    }, u.xyz.lab = function(t) {
        var e, n, r, o = t[0],
            i = t[1],
            a = t[2];
        return o /= 95.047, i /= 100, a /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, e = 116 * i - 16, n = 500 * (o - i), r = 200 * (i - a), [e, n, r]
    }, u.lab.xyz = function(t) {
        var e, n, r, o = t[0],
            i = t[1],
            a = t[2];
        n = (o + 16) / 116, e = i / 500 + n, r = n - a / 200;
        var u = Math.pow(n, 3),
            s = Math.pow(e, 3),
            c = Math.pow(r, 3);
        return n = u > .008856 ? u : (n - 16 / 116) / 7.787, e = s > .008856 ? s : (e - 16 / 116) / 7.787, r = c > .008856 ? c : (r - 16 / 116) / 7.787, e *= 95.047, n *= 100, r *= 108.883, [e, n, r]
    }, u.lab.lch = function(t) {
        var e, n, r, o = t[0],
            i = t[1],
            a = t[2];
        return e = Math.atan2(a, i), n = 360 * e / 2 / Math.PI, n < 0 && (n += 360), r = Math.sqrt(i * i + a * a), [o, r, n]
    }, u.lch.lab = function(t) {
        var e, n, r, o = t[0],
            i = t[1],
            a = t[2];
        return r = a / 360 * 2 * Math.PI, e = i * Math.cos(r), n = i * Math.sin(r), [o, e, n]
    }, u.rgb.ansi16 = function(t) {
        var e = t[0],
            n = t[1],
            r = t[2],
            o = 1 in arguments ? arguments[1] : u.rgb.hsv(t)[2];
        if (0 === (o = Math.round(o / 50))) return 30;
        var i = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
        return 2 === o && (i += 60), i
    }, u.hsv.ansi16 = function(t) {
        return u.rgb.ansi16(u.hsv.rgb(t), t[2])
    }, u.rgb.ansi256 = function(t) {
        var e = t[0],
            n = t[1],
            r = t[2];
        return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
    }, u.ansi16.rgb = function(t) {
        var e = t % 10;
        if (0 === e || 7 === e) return t > 50 && (e += 3.5), e = e / 10.5 * 255, [e, e, e];
        var n = .5 * (1 + ~~(t > 50));
        return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
    }, u.ansi256.rgb = function(t) {
        if (t >= 232) {
            var e = 10 * (t - 232) + 8;
            return [e, e, e]
        }
        t -= 16;
        var n;
        return [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
    }, u.rgb.hex = function(t) {
        var e = ((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2])),
            n = e.toString(16).toUpperCase();
        return "000000".substring(n.length) + n
    }, u.hex.rgb = function(t) {
        var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e) return [0, 0, 0];
        var n = e[0];
        3 === e[0].length && (n = n.split("").map(function(t) {
            return t + t
        }).join(""));
        var r = parseInt(n, 16);
        return [r >> 16 & 255, r >> 8 & 255, 255 & r]
    }, u.rgb.hcg = function(t) {
        var e, n, r = t[0] / 255,
            o = t[1] / 255,
            i = t[2] / 255,
            a = Math.max(Math.max(r, o), i),
            u = Math.min(Math.min(r, o), i),
            s = a - u;
        return e = s < 1 ? u / (1 - s) : 0, n = s <= 0 ? 0 : a === r ? (o - i) / s % 6 : a === o ? 2 + (i - r) / s : 4 + (r - o) / s + 4, n /= 6, n %= 1, [360 * n, 100 * s, 100 * e]
    }, u.hsl.hcg = function(t) {
        var e = t[1] / 100,
            n = t[2] / 100,
            r = 1,
            o = 0;
        return r = n < .5 ? 2 * e * n : 2 * e * (1 - n), r < 1 && (o = (n - .5 * r) / (1 - r)), [t[0], 100 * r, 100 * o]
    }, u.hsv.hcg = function(t) {
        var e = t[1] / 100,
            n = t[2] / 100,
            r = e * n,
            o = 0;
        return r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o]
    }, u.hcg.rgb = function(t) {
        var e = t[0] / 360,
            n = t[1] / 100,
            r = t[2] / 100;
        if (0 === n) return [255 * r, 255 * r, 255 * r];
        var o = [0, 0, 0],
            i = e % 1 * 6,
            a = i % 1,
            u = 1 - a,
            s = 0;
        switch (Math.floor(i)) {
            case 0:
                o[0] = 1, o[1] = a, o[2] = 0;
                break;
            case 1:
                o[0] = u, o[1] = 1, o[2] = 0;
                break;
            case 2:
                o[0] = 0, o[1] = 1, o[2] = a;
                break;
            case 3:
                o[0] = 0, o[1] = u, o[2] = 1;
                break;
            case 4:
                o[0] = a, o[1] = 0, o[2] = 1;
                break;
            default:
                o[0] = 1, o[1] = 0, o[2] = u
        }
        return s = (1 - n) * r, [255 * (n * o[0] + s), 255 * (n * o[1] + s), 255 * (n * o[2] + s)]
    }, u.hcg.hsv = function(t) {
        var e = t[1] / 100,
            n = t[2] / 100,
            r = e + n * (1 - e),
            o = 0;
        return r > 0 && (o = e / r), [t[0], 100 * o, 100 * r]
    }, u.hcg.hsl = function(t) {
        var e = t[1] / 100,
            n = t[2] / 100,
            r = n * (1 - e) + .5 * e,
            o = 0;
        return r > 0 && r < .5 ? o = e / (2 * r) : r >= .5 && r < 1 && (o = e / (2 * (1 - r))), [t[0], 100 * o, 100 * r]
    }, u.hcg.hwb = function(t) {
        var e = t[1] / 100,
            n = t[2] / 100,
            r = e + n * (1 - e);
        return [t[0], 100 * (r - e), 100 * (1 - r)]
    }, u.hwb.hcg = function(t) {
        var e = t[1] / 100,
            n = t[2] / 100,
            r = 1 - n,
            o = r - e,
            i = 0;
        return o < 1 && (i = (r - o) / (1 - o)), [t[0], 100 * o, 100 * i]
    }, u.apple.rgb = function(t) {
        return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
    }, u.rgb.apple = function(t) {
        return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
    }, u.gray.rgb = function(t) {
        return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
    }, u.gray.hsl = u.gray.hsv = function(t) {
        return [0, 0, t[0]]
    }, u.gray.hwb = function(t) {
        return [0, 100, t[0]]
    }, u.gray.cmyk = function(t) {
        return [0, 0, 0, t[0]]
    }, u.gray.lab = function(t) {
        return [t[0], 0, 0]
    }, u.gray.hex = function(t) {
        var e = 255 & Math.round(t[0] / 100 * 255),
            n = (e << 16) + (e << 8) + e,
            r = n.toString(16).toUpperCase();
        return "000000".substring(r.length) + r
    }, u.rgb.gray = function(t) {
        return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(19),
        o = n.n(r),
        i = n(20),
        a = n.n(i),
        u = new o.a({
            id: "icon-download",
            use: "icon-download-usage",
            viewBox: "0 0 24 24",
            content: '<symbol viewBox="0 0 24 24" id="icon-download">\n  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />\n  <path d="M0 0h24v24H0z" fill="none" />\n</symbol>'
        });
    a.a.add(u);
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(19),
        o = n.n(r),
        i = n(20),
        a = n.n(i),
        u = new o.a({
            id: "icon-music",
            use: "icon-music-usage",
            viewBox: "0 0 24 24",
            content: '<symbol viewBox="0 0 24 24" id="icon-music">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" />\n</symbol>'
        });
    a.a.add(u);
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(19),
        o = n.n(r),
        i = n(20),
        a = n.n(i),
        u = new o.a({
            id: "icon-pause",
            use: "icon-pause-usage",
            viewBox: "0 0 24 24",
            content: '<symbol viewBox="0 0 24 24" id="icon-pause">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z" />\n</symbol>'
        });
    a.a.add(u);
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(19),
        o = n.n(r),
        i = n(20),
        a = n.n(i),
        u = new o.a({
            id: "icon-play",
            use: "icon-play-usage",
            viewBox: "0 0 24 24",
            content: '<symbol fill="#000000" viewBox="0 0 24 24" id="icon-play">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />\n</symbol>'
        });
    a.a.add(u);
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(19),
        o = n.n(r),
        i = n(20),
        a = n.n(i),
        u = new o.a({
            id: "icon-replay",
            use: "icon-replay-usage",
            viewBox: "0 0 24 24",
            content: '<symbol viewBox="0 0 24 24" id="icon-replay">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />\n</symbol>'
        });
    a.a.add(u);
    e.default = u
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(19),
        o = n.n(r),
        i = n(20),
        a = n.n(i),
        u = new o.a({
            id: "icon-spin",
            use: "icon-spin-usage",
            viewBox: "0 0 42 42",
            content: '<symbol viewBox="0 0 42 42" id="icon-spin"><path d="M21 37c-4.3 0-8.3-1.7-11.3-4.7S5 25.3 5 21c0-3 .8-6 2.5-8.5C9 10 11.2 8 13.8 6.7l1.3 2.7c-2.1 1.1-3.9 2.7-5.2 4.7-1.3 2.1-2 4.5-2 6.9 0 7.2 5.8 13 13 13s13-5.8 13-13c0-2.5-.7-4.9-2-6.9s-3.1-3.6-5.2-4.7L28 6.7c2.8 1.3 5 3.3 6.5 5.8C36.2 15 37 18 37 21c0 4.3-1.7 8.3-4.7 11.3S25.3 37 21 37z" /></symbol>'
        });
    a.a.add(u);
    e.default = u
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (new AudioContext).decodeAudioData(t)
    }

    function o(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length, r = (new AudioContext).createBuffer(t.numberOfChannels, n - e, t.sampleRate), o = 0; o < t.numberOfChannels; o++) r.copyToChannel(t.getChannelData(o).slice(e, n), o);
        return r
    }

    function i(t) {
        return {
            channels: (0, a.range)(0, t.numberOfChannels - 1).map(function(e) {
                return t.getChannelData(e)
            }),
            sampleRate: t.sampleRate,
            length: t.length
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.decodeAudioArrayBuffer = r, e.sliceAudioBuffer = o, e.serializeAudioBuffer = i;
    var a = n(32)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(48),
        i = r(o),
        a = n(49),
        u = r(a),
        s = n(13),
        c = r(s),
        l = n(14),
        f = r(l),
        h = n(15),
        d = r(h),
        p = n(16),
        v = r(p),
        y = n(17),
        m = r(y);
    n(128);
    var g = n(18),
        b = r(g),
        _ = n(137),
        w = r(_),
        x = n(138),
        M = r(x),
        E = n(160),
        O = r(E),
        k = n(161),
        C = r(k),
        S = n(32),
        P = n(78),
        T = n(164),
        j = n(69),
        A = r(j);
    n(165);
    var L = function(t) {
        function e() {
            var t = this;
            (0, f.default)(this, e);
            var n = (0, v.default)(this, (e.__proto__ || (0, c.default)(e)).call(this));
            return n.handleFileChange = function() {
                var e = (0, u.default)(i.default.mark(function e(r) {
                    var o;
                    return i.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ((0, S.isAudio)(r)) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", alert("请选择合法的音频文件"));
                            case 2:
                                return n.setState({
                                    file: r,
                                    paused: !0,
                                    decoding: !0,
                                    audioBuffer: null
                                }), t.next = 5, A.default.decode(r);
                            case 5:
                                o = t.sent, window.audioBuffer = o, n.setState({
                                    paused: !1,
                                    decoding: !1,
                                    audioBuffer: o,
                                    startTime: 0,
                                    currentTime: 0,
                                    endTime: o.duration / 2
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, e, t)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), n.handleStartTimeChange = function(t) {
                console.log("handleStartTimeChange", t)
                n.setState({
                    startTime: t
                })
            }, n.handleEndTimeChange = function(t) {
                console.log("handleEndTimeChange", t)
                n.setState({
                    endTime: t
                })
            }
            , n.changeHandles = function(t) {
                var start = parseFloat($("input[name=startpointer]").val())
                var end = parseFloat($("input[name=endpointer]").val())
                console.log("changeHandles", t, start, end)
                
                n.setState({
                    endTime: end,
                    startTime: start
                })
            },
            n.handleCurrentTimeChange = function(t) {
                //console.log("handleCurrentTimeChange", t)
                n.setState({
                    currentTime: t
                })
            }, n.handlePlayPauseClick = function() {
                console.log("handlePlayPauseClick", n.state.paused)
                n.setState({
                    paused: !n.state.paused
                })
            }, n.handleReplayClick = function() {
                 console.log("handleReplayClick", n, n.state.startTime)
                n.setState({
                    currentTime: n.state.startTime
                })
            }, n.handleEncode = function(t) {
                var e = t.currentTarget.dataset.type,
                    r = n.state,
                    o = r.startTime,
                    i = r.endTime,
                    a = r.audioBuffer,
                    u = a.length,
                    s = a.duration,
                    c = (0, P.sliceAudioBuffer)(a, ~~(u * o / s), ~~(u * i / s));
                    
                    console.log("e", e)
                n.setState({
                    processing: !0
                }), (0, T.encode)(c, e).then(S.readBlobURL).then(function(t) {
                    (0, S.download)(t, (0, S.rename)(n.state.file.name, e))
                }).catch(function(t) {
                    return console.error(t)
                }).then(function() {
                    n.setState({
                        processing: !1
                    })
                })
            }, n.state = {
                file: null,
                decoding: !1,
                audioBuffer: null,
                paused: !0,
                startTime: 0,
                endTime: 1 / 0,
                currentTime: 0,
                processing: !1
            }, n
        }
        return (0, m.default)(e, t), (0, d.default)(e, [{
            key: "displaySeconds",
            value: function(t) {
                return t.toFixed(2) + "s"
            }
        }, {//<p></p>
            key: "render",
            value: function() {
                var t = this.state;
                return b.default.createElement("div", {
                    className: "container"
                }, this.state.audioBuffer || this.state.decoding ? b.default.createElement("div", null, b.default.createElement("h2", {
                    className: "app-title"
                }, "Audio Cutter"), this.state.decoding ? b.default.createElement("div", {
                    className: "player player-landing"
                }, "DECODING...") : b.default.createElement(M.default, {
                    audioBuffer: this.state.audioBuffer,
                    paused: this.state.paused,
                    startTime: this.state.startTime,
                    endTime: this.state.endTime,
                    currentTime: this.state.currentTime,
                    onStartTimeChange: this.handleStartTimeChange,
                    onEndTimeChange: this.handleEndTimeChange,
                    onCurrentTimeChange: this.handleCurrentTimeChange,
                    ref: "player"
                }), b.default.createElement("div", {
                    className: "controllers"
                }, b.default.createElement(O.default, {
                    onChange: this.handleFileChange
                }, b.default.createElement("div", {
                    className: "ctrl-item",
                    title: "Upload file"
                }, b.default.createElement(C.default, {
                    name: "music"
                }))), b.default.createElement("a", {
                    className: "ctrl-item",
                    title: "Play/Pause",
                    onClick: this.handlePlayPauseClick
                }, b.default.createElement(C.default, {
                    name: this.state.paused ? "play" : "pause"
                })),

                b.default.createElement("a", {
                    className: "ctrl-item",
                    title: "Play/Pause",
                    onClick: this.handleReplayClick
                }, b.default.createElement(C.default, {
                    name: "replay"
                })), b.default.createElement("div", {
                    className: "dropdown list-wrap"
                }, b.default.createElement("a", {
                    className: "ctrl-item"
                }, b.default.createElement(C.default, {
                    name: this.state.processing ? "spin" : "download"
                })), !this.state.processing && b.default.createElement("ul", {
                    className: "list"
                }, b.default.createElement("li", null, b.default.createElement("a", {
                    onClick: this.handleEncode,
                    "data-type": "m4r"
                }, "M4R"))
                , b.default.createElement("li", null, b.default.createElement("a", {
                    onClick: this.handleEncode,
                    "data-type": "wav"
                }, "Wav")), b.default.createElement("li", null, b.default.createElement("a", {
                    onClick: this.handleEncode,
                    "data-type": "mp3"
                }, "MP3"))))
                , b.default.createElement("input", {
                    className: "ctrl-item",
                    name: "startpointer",
                    placeholder:"Start",
                    type:"number",
                    onInput: this.changeHandles
                })
                , b.default.createElement("input", {
                    className: "ctrl-item",
                    name: "endpointer",
                    placeholder:"End",
                    type:"number",
                    onInput: this.changeHandles
                }),
                isFinite(this.state.endTime) && b.default.createElement("span", {
                    className: "seconds"
                }, "Select ", b.default.createElement("span", {
                    className: "seconds-range"
                }, this.displaySeconds(t.endTime - t.startTime)), " of ", b.default.createElement("span", {
                    className: "seconds-total"
                }, this.displaySeconds(t.audioBuffer.duration)), " (from ", b.default.createElement("span", {
                    className: "seconds-start"
                }, this.displaySeconds(t.startTime)), " to ", b.default.createElement("span", {
                    className: "seconds-end"
                }, this.displaySeconds(t.endTime)), ")"))) : b.default.createElement("div", {
                    className: "landing"
                }, b.default.createElement("h2", null, "Audio Cutter"), b.default.createElement(O.default, {
                    onChange: this.handleFileChange
                }, b.default.createElement("div", {
                    className: "file-main"
                }, b.default.createElement(C.default, {
                    name: "music"
                }),
                "Upload Audio File"))))
            }
            
        }, {
            key: "startByte",
            get: function() {
                return parseInt(this.audioBuffer.length * this.state.start / this.widthDurationRatio / this.duration, 10)
            }
        }, {
            key: "endByte",
            get: function() {
                return parseInt(this.audioBuffer.length * this.state.end / this.widthDurationRatio / this.duration, 10)
            }
        }]), e
    }(g.Component);
    w.default.render(b.default.createElement(L, null), document.getElementById("main"))
}, function(t, e, n) {
    var r = function() {
            return this
        }() || Function("return this")(),
        o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, t.exports = n(81), o) r.regeneratorRuntime = i;
    else try {
        delete r.regeneratorRuntime
    } catch (t) {
        r.regeneratorRuntime = void 0
    }
}, function(t, e) {
    ! function(e) {
        "use strict";

        function n(t, e, n, r) {
            var i = e && e.prototype instanceof o ? e : o,
                a = Object.create(i.prototype),
                u = new d(r || []);
            return a._invoke = c(t, n, u), a
        }

        function r(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }

        function o() {}

        function i() {}

        function a() {}

        function u(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }

        function s(t) {
            function e(n, o, i, a) {
                var u = r(t[n], t, o);
                if ("throw" !== u.type) {
                    var s = u.arg,
                        c = s.value;
                    return c && "object" == typeof c && g.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                        e("next", t, i, a)
                    }, function(t) {
                        e("throw", t, i, a)
                    }) : Promise.resolve(c).then(function(t) {
                        s.value = t, i(s)
                    }, a)
                }
                a(u.arg)
            }

            function n(t, n) {
                function r() {
                    return new Promise(function(r, o) {
                        e(t, n, r, o)
                    })
                }
                return o = o ? o.then(r, r) : r()
            }
            var o;
            this._invoke = n
        }

        function c(t, e, n) {
            var o = O;
            return function(i, a) {
                if (o === C) throw new Error("Generator is already running");
                if (o === S) {
                    if ("throw" === i) throw a;
                    return v()
                }
                for (n.method = i, n.arg = a;;) {
                    var u = n.delegate;
                    if (u) {
                        var s = l(u, n);
                        if (s) {
                            if (s === P) continue;
                            return s
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (o === O) throw o = S, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = C;
                    var c = r(t, e, n);
                    if ("normal" === c.type) {
                        if (o = n.done ? S : k, c.arg === P) continue;
                        return {
                            value: c.arg,
                            done: n.done
                        }
                    }
                    "throw" === c.type && (o = S, n.method = "throw", n.arg = c.arg)
                }
            }
        }

        function l(t, e) {
            var n = t.iterator[e.method];
            if (n === y) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = y, l(t, e), "throw" === e.method)) return P;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return P
            }
            var o = r(n, t.iterator, e.arg);
            if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, P;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = y), e.delegate = null, P) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, P)
        }

        function f(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function h(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function d(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(f, this), this.reset(!0)
        }

        function p(t) {
            if (t) {
                var e = t[_];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        r = function e() {
                            for (; ++n < t.length;)
                                if (g.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = y, e.done = !0, e
                        };
                    return r.next = r
                }
            }
            return {
                next: v
            }
        }

        function v() {
            return {
                value: y,
                done: !0
            }
        }
        var y, m = Object.prototype,
            g = m.hasOwnProperty,
            b = "function" == typeof Symbol ? Symbol : {},
            _ = b.iterator || "@@iterator",
            w = b.asyncIterator || "@@asyncIterator",
            x = b.toStringTag || "@@toStringTag",
            M = "object" == typeof t,
            E = e.regeneratorRuntime;
        if (E) return void(M && (t.exports = E));
        E = e.regeneratorRuntime = M ? t.exports : {}, E.wrap = n;
        var O = "suspendedStart",
            k = "suspendedYield",
            C = "executing",
            S = "completed",
            P = {},
            T = {};
        T[_] = function() {
            return this
        };
        var j = Object.getPrototypeOf,
            A = j && j(j(p([])));
        A && A !== m && g.call(A, _) && (T = A);
        var L = a.prototype = o.prototype = Object.create(T);
        i.prototype = L.constructor = a, a.constructor = i, a[x] = i.displayName = "GeneratorFunction", E.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name))
        }, E.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, x in t || (t[x] = "GeneratorFunction")), t.prototype = Object.create(L), t
        }, E.awrap = function(t) {
            return {
                __await: t
            }
        }, u(s.prototype), s.prototype[w] = function() {
            return this
        }, E.AsyncIterator = s, E.async = function(t, e, r, o) {
            var i = new s(n(t, e, r, o));
            return E.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                return t.done ? t.value : i.next()
            })
        }, u(L), L[x] = "Generator", L[_] = function() {
            return this
        }, L.toString = function() {
            return "[object Generator]"
        }, E.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, E.values = p, d.prototype = {
            constructor: d,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(h), !t)
                    for (var e in this) "t" === e.charAt(0) && g.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = y)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0],
                    e = t.completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                function e(e, r) {
                    return i.type = "throw", i.arg = t, n.next = e, r && (n.method = "next", n.arg = y), !!r
                }
                if (this.done) throw t;
                for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r],
                        i = o.completion;
                    if ("root" === o.tryLoc) return e("end");
                    if (o.tryLoc <= this.prev) {
                        var a = g.call(o, "catchLoc"),
                            u = g.call(o, "finallyLoc");
                        if (a && u) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        } else if (a) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && g.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, P) : this.complete(i)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), P
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), h(n), P
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            h(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: p(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = y), P
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}, function(t, e, n) {
    n(50), n(25), n(31), n(92), n(102), n(103), t.exports = n(0).Promise
}, function(t, e, n) {
    var r = n(34),
        o = n(35);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, u = String(o(e)),
                s = r(n),
                c = u.length;
            return s < 0 || s >= c ? t ? "" : void 0 : (i = u.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(38),
        o = n(28),
        i = n(30),
        a = {};
    n(9)(a, n(1)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: o(1, n)
        }), i(t, e + " Iterator")
    }
}, function(t, e, n) {
    var r = n(6),
        o = n(3),
        i = n(39);
    t.exports = n(8) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, a = i(e), u = a.length, s = 0; u > s;) r.f(t, n = a[s++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var r = n(12),
        o = n(55),
        i = n(88);
    t.exports = function(t) {
        return function(e, n, a) {
            var u, s = r(e),
                c = o(s.length),
                l = i(a, c);
            if (t && n != n) {
                for (; c > l;)
                    if ((u = s[l++]) != u) return !0
            } else
                for (; c > l; l++)
                    if ((t || l in s) && s[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var r = n(34),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(90),
        o = n(91),
        i = n(11),
        a = n(12);
    t.exports = n(51)(Array, "Array", function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r, o, i, a, u = n(26),
        s = n(2),
        c = n(21),
        l = n(43),
        f = n(4),
        h = n(7),
        d = n(27),
        p = n(93),
        v = n(94),
        y = n(60),
        m = n(61).set,
        g = n(98)(),
        b = n(44),
        _ = n(62),
        w = n(63),
        x = s.TypeError,
        M = s.process,
        E = s.Promise,
        O = "process" == l(M),
        k = function() {},
        C = o = b.f,
        S = !! function() {
            try {
                var t = E.resolve(1),
                    e = (t.constructor = {})[n(1)("species")] = function(t) {
                        t(k, k)
                    };
                return (O || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e
            } catch (t) {}
        }(),
        P = function(t) {
            var e;
            return !(!h(t) || "function" != typeof(e = t.then)) && e
        },
        T = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                g(function() {
                    for (var r = t._v, o = 1 == t._s, i = 0; n.length > i;) ! function(e) {
                        var n, i, a = o ? e.ok : e.fail,
                            u = e.resolve,
                            s = e.reject,
                            c = e.domain;
                        try {
                            a ? (o || (2 == t._h && L(t), t._h = 1), !0 === a ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === e.promise ? s(x("Promise-chain cycle")) : (i = P(n)) ? i.call(n, u, s) : u(n)) : s(r)
                        } catch (t) {
                            s(t)
                        }
                    }(n[i++]);
                    t._c = [], t._n = !1, e && !t._h && j(t)
                })
            }
        },
        j = function(t) {
            m.call(s, function() {
                var e, n, r, o = t._v,
                    i = A(t);
                if (i && (e = _(function() {
                        O ? M.emit("unhandledRejection", o, t) : (n = s.onunhandledrejection) ? n({
                            promise: t,
                            reason: o
                        }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), t._h = O || A(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
            })
        },
        A = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        L = function(t) {
            m.call(s, function() {
                var e;
                O ? M.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        N = function(t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), T(e, !0))
        },
        R = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw x("Promise can't be resolved itself");
                    (e = P(t)) ? g(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(R, r, 1), c(N, r, 1))
                        } catch (t) {
                            N.call(r, t)
                        }
                    }): (n._v = t, n._s = 1, T(n, !1))
                } catch (t) {
                    N.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    S || (E = function(t) {
        p(this, E, "Promise", "_h"), d(t), r.call(this);
        try {
            t(c(R, this, 1), c(N, this, 1))
        } catch (t) {
            N.call(this, t)
        }
    }, r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(99)(E.prototype, {
        then: function(t, e) {
            var n = C(y(this, E));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = O ? M.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && T(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), i = function() {
        var t = new r;
        this.promise = t, this.resolve = c(R, t, 1), this.reject = c(N, t, 1)
    }, b.f = C = function(t) {
        return t === E || t === a ? new i(t) : o(t)
    }), f(f.G + f.W + f.F * !S, {
        Promise: E
    }), n(30)(E, "Promise"), n(100)("Promise"), a = n(0).Promise, f(f.S + f.F * !S, "Promise", {
        reject: function(t) {
            var e = C(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (u || !S), "Promise", {
        resolve: function(t) {
            return w(u && this === a ? E : this, t)
        }
    }), f(f.S + f.F * !(S && n(101)(function(t) {
        E.all(t).catch(k)
    })), "Promise", {
        all: function(t) {
            var e = this,
                n = C(e),
                r = n.resolve,
                o = n.reject,
                i = _(function() {
                    var n = [],
                        i = 0,
                        a = 1;
                    v(t, !1, function(t) {
                        var u = i++,
                            s = !1;
                        n.push(void 0), a++, e.resolve(t).then(function(t) {
                            s || (s = !0, n[u] = t, --a || r(n))
                        }, o)
                    }), --a || r(n)
                });
            return i.e && o(i.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = C(e),
                r = n.reject,
                o = _(function() {
                    v(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
            return o.e && r(o.v), n.promise
        }
    })
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var r = n(21),
        o = n(95),
        i = n(96),
        a = n(3),
        u = n(55),
        s = n(59),
        c = {},
        l = {},
        e = t.exports = function(t, e, n, f, h) {
            var d, p, v, y, m = h ? function() {
                    return t
                } : s(t),
                g = r(n, f, e ? 2 : 1),
                b = 0;
            if ("function" != typeof m) throw TypeError(t + " is not iterable!");
            if (i(m)) {
                for (d = u(t.length); d > b; b++)
                    if ((y = e ? g(a(p = t[b])[0], p[1]) : g(t[b])) === c || y === l) return y
            } else
                for (v = m.call(t); !(p = v.next()).done;)
                    if ((y = o(v, g, p.value, e)) === c || y === l) return y
        };
    e.BREAK = c, e.RETURN = l
}, function(t, e, n) {
    var r = n(3);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), e
        }
    }
}, function(t, e, n) {
    var r = n(11),
        o = n(1)("iterator"),
        i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var r = n(2),
        o = n(61).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        u = r.Promise,
        s = "process" == n(23)(a);
    t.exports = function() {
        var t, e, n, c = function() {
            var r, o;
            for (s && (r = a.domain) && r.exit(); t;) {
                o = t.fn, t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (s) n = function() {
            a.nextTick(c)
        };
        else if (!i || r.navigator && r.navigator.standalone)
            if (u && u.resolve) {
                var l = u.resolve();
                n = function() {
                    l.then(c)
                }
            } else n = function() {
                o.call(r, c)
            };
        else {
            var f = !0,
                h = document.createTextNode("");
            new i(c).observe(h, {
                characterData: !0
            }), n = function() {
                h.data = f = !f
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o), t || (t = o, n()), e = o
        }
    }
}, function(t, e, n) {
    var r = n(9);
    t.exports = function(t, e, n) {
        for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        o = n(0),
        i = n(6),
        a = n(8),
        u = n(1)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        a && e && !e[u] && i.f(e, u, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var r = n(1)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
            var i = [7],
                a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, i[r] = function() {
                return a
            }, t(i)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        o = n(0),
        i = n(2),
        a = n(60),
        u = n(63);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, o.Promise || i.Promise),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return u(e, t()).then(function() {
                    return n
                })
            } : t, n ? function(n) {
                return u(e, t()).then(function() {
                    throw n
                })
            } : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        o = n(44),
        i = n(62);
    r(r.S, "Promise", {
        try: function(t) {
            var e = o.f(this),
                n = i(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function(t, e, n) {
    n(105), t.exports = n(0).Object.getPrototypeOf
}, function(t, e, n) {
    var r = n(58),
        o = n(57);
    n(106)("getPrototypeOf", function() {
        return function(t) {
            return o(r(t))
        }
    })
}, function(t, e, n) {
    var r = n(4),
        o = n(0),
        i = n(22);
    t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * i(function() {
            n(1)
        }), "Object", a)
    }
}, function(t, e, n) {
    t.exports = {
        default: n(108),
        __esModule: !0
    }
}, function(t, e, n) {
    n(109);
    var r = n(0).Object;
    t.exports = function(t, e, n) {
        return r.defineProperty(t, e, n)
    }
}, function(t, e, n) {
    var r = n(4);
    r(r.S + r.F * !n(8), "Object", {
        defineProperty: n(6).f
    })
}, function(t, e, n) {
    t.exports = {
        default: n(111),
        __esModule: !0
    }
}, function(t, e, n) {
    n(25), n(31), t.exports = n(45).f("iterator")
}, function(t, e, n) {
    t.exports = {
        default: n(113),
        __esModule: !0
    }
}, function(t, e, n) {
    n(114), n(50), n(119), n(120), t.exports = n(0).Symbol
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        o = n(10),
        i = n(8),
        a = n(4),
        u = n(53),
        s = n(115).KEY,
        c = n(22),
        l = n(41),
        f = n(30),
        h = n(29),
        d = n(1),
        p = n(45),
        v = n(46),
        y = n(116),
        m = n(117),
        g = n(3),
        b = n(7),
        _ = n(12),
        w = n(37),
        x = n(28),
        M = n(38),
        E = n(118),
        O = n(67),
        k = n(6),
        C = n(39),
        S = O.f,
        P = k.f,
        T = E.f,
        j = r.Symbol,
        A = r.JSON,
        L = A && A.stringify,
        N = d("_hidden"),
        R = d("toPrimitive"),
        B = {}.propertyIsEnumerable,
        D = l("symbol-registry"),
        F = l("symbols"),
        U = l("op-symbols"),
        I = Object.prototype,
        z = "function" == typeof j,
        G = r.QObject,
        q = !G || !G.prototype || !G.prototype.findChild,
        W = i && c(function() {
            return 7 != M(P({}, "a", {
                get: function() {
                    return P(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var r = S(I, e);
            r && delete I[e], P(t, e, n), r && t !== I && P(I, e, r)
        } : P,
        $ = function(t) {
            var e = F[t] = M(j.prototype);
            return e._k = t, e
        },
        H = z && "symbol" == typeof j.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof j
        },
        V = function(t, e, n) {
            return t === I && V(U, e, n), g(t), e = w(e, !0), g(n), o(F, e) ? (n.enumerable ? (o(t, N) && t[N][e] && (t[N][e] = !1), n = M(n, {
                enumerable: x(0, !1)
            })) : (o(t, N) || P(t, N, x(1, {})), t[N][e] = !0), W(t, e, n)) : P(t, e, n)
        },
        Y = function(t, e) {
            g(t);
            for (var n, r = y(e = _(e)), o = 0, i = r.length; i > o;) V(t, n = r[o++], e[n]);
            return t
        },
        J = function(t, e) {
            return void 0 === e ? M(t) : Y(M(t), e)
        },
        K = function(t) {
            var e = B.call(this, t = w(t, !0));
            return !(this === I && o(F, t) && !o(U, t)) && (!(e || !o(this, t) || !o(F, t) || o(this, N) && this[N][t]) || e)
        },
        X = function(t, e) {
            if (t = _(t), e = w(e, !0), t !== I || !o(F, e) || o(U, e)) {
                var n = S(t, e);
                return !n || !o(F, e) || o(t, N) && t[N][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = T(_(t)), r = [], i = 0; n.length > i;) o(F, e = n[i++]) || e == N || e == s || r.push(e);
            return r
        },
        Q = function(t) {
            for (var e, n = t === I, r = T(n ? U : _(t)), i = [], a = 0; r.length > a;) !o(F, e = r[a++]) || n && !o(I, e) || i.push(F[e]);
            return i
        };
    z || (j = function() {
        if (this instanceof j) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === I && e.call(U, n), o(this, N) && o(this[N], t) && (this[N][t] = !1), W(this, t, x(1, n))
            };
        return i && q && W(I, t, {
            configurable: !0,
            set: e
        }), $(t)
    }, u(j.prototype, "toString", function() {
        return this._k
    }), O.f = X, k.f = V, n(66).f = E.f = Z, n(47).f = K, n(65).f = Q, i && !n(26) && u(I, "propertyIsEnumerable", K, !0), p.f = function(t) {
        return $(d(t))
    }), a(a.G + a.W + a.F * !z, {
        Symbol: j
    });
    for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) d(tt[et++]);
    for (var nt = C(d.store), rt = 0; nt.length > rt;) v(nt[rt++]);
    a(a.S + a.F * !z, "Symbol", {
        for: function(t) {
            return o(D, t += "") ? D[t] : D[t] = j(t)
        },
        keyFor: function(t) {
            if (!H(t)) throw TypeError(t + " is not a symbol!");
            for (var e in D)
                if (D[e] === t) return e
        },
        useSetter: function() {
            q = !0
        },
        useSimple: function() {
            q = !1
        }
    }), a(a.S + a.F * !z, "Object", {
        create: J,
        defineProperty: V,
        defineProperties: Y,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: Q
    }), A && a(a.S + a.F * (!z || c(function() {
        var t = j();
        return "[null]" != L([t]) || "{}" != L({
            a: t
        }) || "{}" != L(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = e = r[1], (b(e) || void 0 !== t) && !H(t)) return m(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !H(e)) return e
            }), r[1] = e, L.apply(A, r)
        }
    }), j.prototype[R] || n(9)(j.prototype, R, j.prototype.valueOf), f(j, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e, n) {
    var r = n(29)("meta"),
        o = n(7),
        i = n(10),
        a = n(6).f,
        u = 0,
        s = Object.isExtensible || function() {
            return !0
        },
        c = !n(22)(function() {
            return s(Object.preventExtensions({}))
        }),
        l = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        },
        f = function(t, e) {
            if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, r)) {
                if (!s(t)) return "F";
                if (!e) return "E";
                l(t)
            }
            return t[r].i
        },
        h = function(t, e) {
            if (!i(t, r)) {
                if (!s(t)) return !0;
                if (!e) return !1;
                l(t)
            }
            return t[r].w
        },
        d = function(t) {
            return c && p.NEED && s(t) && !i(t, r) && l(t), t
        },
        p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: f,
            getWeak: h,
            onFreeze: d
        }
}, function(t, e, n) {
    var r = n(39),
        o = n(65),
        i = n(47);
    t.exports = function(t) {
        var e = r(t),
            n = o.f;
        if (n)
            for (var a, u = n(t), s = i.f, c = 0; u.length > c;) s.call(t, a = u[c++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(12),
        o = n(66).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function(t) {
            try {
                return o(t)
            } catch (t) {
                return a.slice()
            }
        };
    t.exports.f = function(t) {
        return a && "[object Window]" == i.call(t) ? u(t) : o(r(t))
    }
}, function(t, e, n) {
    n(46)("asyncIterator")
}, function(t, e, n) {
    n(46)("observable")
}, function(t, e, n) {
    t.exports = {
        default: n(122),
        __esModule: !0
    }
}, function(t, e, n) {
    n(123), t.exports = n(0).Object.setPrototypeOf
}, function(t, e, n) {
    var r = n(4);
    r(r.S, "Object", {
        setPrototypeOf: n(124).set
    })
}, function(t, e, n) {
    var r = n(7),
        o = n(3),
        i = function(t, e) {
            if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                r = n(21)(Function.call, n(67).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: i
    }
}, function(t, e, n) {
    t.exports = {
        default: n(126),
        __esModule: !0
    }
}, function(t, e, n) {
    n(127);
    var r = n(0).Object;
    t.exports = function(t, e) {
        return r.create(t, e)
    }
}, function(t, e, n) {
    var r = n(4);
    r(r.S, "Object", {
        create: n(38)
    })
}, function(t, e, n) {
    t.exports = n(129)(1 / 0)
}, function(t, e, n) {
    "use strict";
    (function(r) {
        function o() {
            var t = void 0 === arguments[0] ? 1 / 0 : arguments[0];
            !r.hasOwnProperty("AudioContext") && r.hasOwnProperty("webkitAudioContext") && (r.AudioContext = r.webkitAudioContext), !r.hasOwnProperty("OfflineAudioContext") && r.hasOwnProperty("webkitOfflineAudioContext") && (r.OfflineAudioContext = r.webkitOfflineAudioContext), r.AudioContext && (n(130).install(t), n(131).install(t), n(132).install(t), n(133).install(t))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = o, t.exports = e.default
    }).call(e, n(5))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function n() {
            if (!o.prototype.hasOwnProperty("getFloatTimeDomainData")) {
                var t = new Uint8Array(2048);
                o.prototype.getFloatTimeDomainData = function(e) {
                    this.getByteTimeDomainData(t);
                    for (var n = 0, r = e.length; n < r; n++) e[n] = .0078125 * (t[n] - 128)
                }
            }
        }

        function r() {
            n()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.install = r;
        var o = t.AnalyserNode
    }).call(e, n(5))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function n() {
            i.prototype.hasOwnProperty("copyFromChannel") || (i.prototype.copyFromChannel = function(t, e, n) {
                var r = this.getChannelData(0 | e).subarray(0 | n);
                t.set(r.subarray(0, Math.min(r.length, t.length)))
            })
        }

        function r() {
            i.prototype.hasOwnProperty("copyToChannel") || (i.prototype.copyToChannel = function(t, e, n) {
                var r = t.subarray(0, Math.min(t.length, this.length - (0 | n)));
                this.getChannelData(0 | e).set(r, 0 | n)
            })
        }

        function o() {
            n(), r()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.install = o;
        var i = t.AudioBuffer
    }).call(e, n(5))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function n(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] !== e[n]) return !1;
            return !0
        }

        function r(t) {
            for (var e = 0, n = t.numberOfOutputs; e < n; e++) f.call(t, e);
            t._shim$connections = []
        }

        function o(t, e) {
            f.call(t, e), t._shim$connections = t._shim$connections.filter(function(t) {
                return t[1] !== e
            })
        }

        function i(t, e) {
            var o = [],
                i = !1;
            if (t._shim$connections.forEach(function(t) {
                    i = i || e[0] === t[0], n(e, t) || o.push(t)
                }), !i) throw new Error("Failed to execute 'disconnect' on 'AudioNode': the given destination is not connected.");
            r(t), o.forEach(function(e) {
                l.call(t, e[0], e[1], e[2])
            }), t._shim$connections = o
        }

        function a() {
            var t = new s(1, 1, 44100),
                e = !1;
            try {
                t.createGain().disconnect(t.destination)
            } catch (t) {
                e = !0
            }
            e || (c.prototype.disconnect = function() {
                this._shim$connections = this._shim$connections || [];
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                0 === e.length ? r(this) : 1 === e.length && "number" == typeof e[0] ? o(this, e[0]) : i(this, e)
            }, c.prototype.disconnect.original = f, c.prototype.connect = function(t) {
                var e = void 0 === arguments[1] ? 0 : arguments[1],
                    n = void 0 === arguments[2] ? 0 : arguments[2],
                    r = void 0;
                this._shim$connections = this._shim$connections || [], t instanceof c ? (l.call(this, t, e, n), r = n) : (l.call(this, t, e), r = 0), this._shim$connections.push([t, e, r])
            }, c.prototype.connect.original = l)
        }

        function u(t) {
            0 !== t && a()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.install = u;
        var s = t.OfflineAudioContext,
            c = t.AudioNode,
            l = c.prototype.connect,
            f = c.prototype.disconnect
    }).call(e, n(5))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (t.__proto__ = e)
        }

        function i() {}

        function a(t, e) {
            t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }

        function u() {
            function e(t) {
                this._ = {}, this._.audioContext = t, this._.destination = t.destination, this._.state = "", this._.currentTime = 0, this._.sampleRate = t.sampleRate, this._.onstatechange = null
            }
            if (t.AudioContext === g) {
                a(e, w), Object.defineProperties(e.prototype, {
                    destination: {
                        get: function() {
                            return this._.destination
                        }
                    },
                    sampleRate: {
                        get: function() {
                            return this._.sampleRate
                        }
                    },
                    currentTime: {
                        get: function() {
                            return this._.currentTime || this._.audioContext.currentTime
                        }
                    },
                    listener: {
                        get: function() {
                            return this._.audioContext.listener
                        }
                    },
                    state: {
                        get: function() {
                            return this._.state
                        }
                    },
                    onstatechange: {
                        set: function(t) {
                            "function" == typeof t && (this._.onstatechange = t)
                        },
                        get: function() {
                            return this._.onstatechange
                        }
                    }
                });
                var n = function(t) {
                    function e() {
                        r(this, e), m(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, new g), this._.state = "running", g.prototype.hasOwnProperty("suspend") || (this._.destination = this._.audioContext.createGain(), this._.destination.connect(this._.audioContext.destination), this._.destination.connect = function() {
                            this._.audioContext.destination.connect.apply(this._.audioContext.destination, arguments)
                        }, this._.destination.disconnect = function() {
                            this._.audioContext.destination.connect.apply(this._.audioContext.destination, arguments)
                        }, this._.destination.channelCountMode = "explicit")
                    }
                    return o(e, t), e
                }(e);
                n.prototype.suspend = function() {
                    function e() {
                        this._.state = "suspended", this._.currentTime = this._.audioContext.currentTime
                    }
                    var n = this;
                    if ("closed" === this._.state) return Promise.reject(new Error("cannot suspend a closed AudioContext"));
                    var r = void 0;
                    return "function" == typeof this._.audioContext ? (r = this._.audioContext.suspend(), r.then(function() {
                        e.call(n)
                    })) : (_.prototype.disconnect.call(this._.destination), r = Promise.resolve(), r.then(function() {
                        e.call(n);
                        var r = new t.Event("statechange");
                        "function" == typeof n._.onstatechange && n._.onstatechange(r), n.dispatchEvent(r)
                    })), r
                }, n.prototype.resume = function() {
                    function e() {
                        this._.state = "running", this._.currentTime = 0
                    }
                    var n = this;
                    if ("closed" === this._.state) return Promise.reject(new Error("cannot resume a closed AudioContext"));
                    var r = void 0;
                    return "function" == typeof this._.audioContext.resume ? (r = this._.audioContext.resume(), r.then(function() {
                        e.call(n)
                    })) : (_.prototype.connect.call(this._.destination, this._.audioContext.destination), r = Promise.resolve(), r.then(function() {
                        e.call(n);
                        var r = new t.Event("statechange");
                        "function" == typeof n._.onstatechange && n._.onstatechange(r), n.dispatchEvent(r)
                    })), r
                }, n.prototype.close = function() {
                    function e() {
                        this._.state = "closed", this._.currentTime = 1 / 0, this._.sampleRate = 0
                    }
                    var n = this;
                    if ("closed" === this._.state) return Promise.reject(new Error("Cannot close a context that is being closed or has already been closed."));
                    var r = void 0;
                    return "function" == typeof this._.audioContext.close ? (r = this._.audioContext.close(), r.then(function() {
                        e.call(n)
                    })) : ("function" == typeof this._.audioContext.suspend ? this._.audioContext.suspend() : _.prototype.disconnect.call(this._.destination), r = Promise.resolve(), r.then(function() {
                        e.call(n);
                        var r = new t.Event("statechange");
                        "function" == typeof n._.onstatechange && n._.onstatechange(r), n.dispatchEvent(r)
                    })), r
                }, ["addEventListener", "removeEventListener", "dispatchEvent", "createBuffer"].forEach(function(t) {
                    n.prototype[t] = function() {
                        return this._.audioContext[t].apply(this._.audioContext, arguments)
                    }
                }), ["decodeAudioData", "createBufferSource", "createMediaElementSource", "createMediaStreamSource", "createMediaStreamDestination", "createAudioWorker", "createScriptProcessor", "createAnalyser", "createGain", "createDelay", "createBiquadFilter", "createWaveShaper", "createPanner", "createStereoPanner", "createConvolver", "createChannelSplitter", "createChannelMerger", "createDynamicsCompressor", "createOscillator", "createPeriodicWave"].forEach(function(t) {
                    n.prototype[t] = function() {
                        if ("closed" === this._.state) throw new Error("Failed to execute '" + t + "' on 'AudioContext': AudioContext has been closed");
                        return this._.audioContext[t].apply(this._.audioContext, arguments)
                    }
                });
                var i = function(t) {
                    function e(t, n, o) {
                        r(this, e), m(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, new b(t, n, o)), this._.state = "suspended"
                    }
                    return o(e, t), y(e, [{
                        key: "oncomplete",
                        set: function(t) {
                            this._.audioContext.oncomplete = t
                        },
                        get: function() {
                            return this._.audioContext.oncomplete
                        }
                    }]), e
                }(e);
                ["addEventListener", "removeEventListener", "dispatchEvent", "createBuffer", "decodeAudioData", "createBufferSource", "createMediaElementSource", "createMediaStreamSource", "createMediaStreamDestination", "createAudioWorker", "createScriptProcessor", "createAnalyser", "createGain", "createDelay", "createBiquadFilter", "createWaveShaper", "createPanner", "createStereoPanner", "createConvolver", "createChannelSplitter", "createChannelMerger", "createDynamicsCompressor", "createOscillator", "createPeriodicWave"].forEach(function(t) {
                    i.prototype[t] = function() {
                        return this._.audioContext[t].apply(this._.audioContext, arguments)
                    }
                }), i.prototype.startRendering = function() {
                    var e = this;
                    if ("suspended" !== this._.state) return Promise.reject(new Error("cannot call startRendering more than once"));
                    this._.state = "running";
                    var n = this._.audioContext.startRendering();
                    return n.then(function() {
                        e._.state = "closed";
                        var n = new t.Event("statechange");
                        "function" == typeof e._.onstatechange && e._.onstatechange(n), e.dispatchEvent(n)
                    }), n
                }, i.prototype.suspend = function() {
                    return "function" == typeof this._.audioContext.suspend ? this._.audioContext.suspend() : Promise.reject(new Error("cannot suspend an OfflineAudioContext"))
                }, i.prototype.resume = function() {
                    return "function" == typeof this._.audioContext.resume ? this._.audioContext.resume() : Promise.reject(new Error("cannot resume an OfflineAudioContext"))
                }, i.prototype.close = function() {
                    return "function" == typeof this._.audioContext.close ? this._.audioContext.close() : Promise.reject(new Error("cannot close an OfflineAudioContext"))
                }, t.AudioContext = n, t.OfflineAudioContext = i
            }
        }

        function s() {}

        function c() {
            if (!g.prototype.hasOwnProperty("createStereoPanner")) {
                var t = n(134);
                g.prototype.createStereoPanner = function() {
                    return new t(this)
                }
            }
        }

        function l() {
            var t = new b(1, 1, 44100),
                e = !1;
            try {
                var n = new Uint32Array([1179011410, 48, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 8, 0, 0, 0, 0]).buffer;
                e = !!t.decodeAudioData(n, i)
            } catch (t) {
                i(t)
            }
            if (!e) {
                var r = g.prototype.decodeAudioData;
                g.prototype.decodeAudioData = function(t, e, n) {
                    var o = this,
                        i = new Promise(function(e, n) {
                            return r.call(o, t, e, n)
                        });
                    return i.then(e, n), i
                }, g.prototype.decodeAudioData.original = r
            }
        }

        function f() {
            g.prototype.hasOwnProperty("close") || u()
        }

        function h() {
            g.prototype.hasOwnProperty("resume") || u()
        }

        function d() {
            g.prototype.hasOwnProperty("suspend") || u()
        }

        function p() {
            var t = new b(1, 1, 44100),
                e = !1;
            try {
                e = !!t.startRendering()
            } catch (t) {
                i(t)
            }
            if (!e) {
                var n = b.prototype.startRendering;
                b.prototype.startRendering = function() {
                    var t = this;
                    return new Promise(function(e) {
                        var r = t.oncomplete;
                        t.oncomplete = function(n) {
                            e(n.renderedBuffer), "function" == typeof r && r.call(t, n)
                        }, n.call(t)
                    })
                }, b.prototype.startRendering.original = n
            }
        }

        function v(t) {
            s(), c(), l(), p(), 0 !== t && (f(), h(), d())
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var y = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            m = function(t, e, n) {
                for (var r = !0; r;) {
                    var o = t,
                        i = e,
                        a = n;
                    u = c = s = void 0, r = !1, null === o && (o = Function.prototype);
                    var u = Object.getOwnPropertyDescriptor(o, i);
                    if (void 0 !== u) {
                        if ("value" in u) return u.value;
                        var s = u.get;
                        if (void 0 === s) return;
                        return s.call(a)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return;
                    t = c, e = i, n = a, r = !0
                }
            };
        e.install = v;
        var g = t.AudioContext,
            b = t.OfflineAudioContext,
            _ = t.AudioNode,
            w = t.EventTarget || t.Object.constructor
    }).call(e, n(5))
}, function(t, e, n) {
    (function(e) {
        function r(t) {
            var e = new o(t);
            return Object.defineProperties(e.inlet, {
                pan: {
                    value: e.pan,
                    enumerable: !0
                },
                connect: {
                    value: function(t) {
                        return e.connect(t)
                    }
                },
                disconnect: {
                    value: function() {
                        return e.disconnect()
                    }
                }
            }), e.inlet
        }
        var o = n(135),
            i = e.AudioContext || e.webkitAudioContext;
        r.polyfill = function() {
            i && !i.prototype.hasOwnProperty("createStereoPanner") && (i.prototype.createStereoPanner = function() {
                return new r(this)
            })
        }, t.exports = r
    }).call(e, n(5))
}, function(t, e, n) {
    (function(e) {
        function r(t) {
            this.audioContext = t, this.inlet = t.createChannelSplitter(2), this._pan = t.createGain(), this.pan = this._pan.gain, this._wsL = t.createWaveShaper(), this._wsR = t.createWaveShaper(), this._L = t.createGain(), this._R = t.createGain(), this.outlet = t.createChannelMerger(2), this.inlet.channelCount = 2, this.inlet.channelCountMode = "explicit", this._pan.gain.value = 0, this._wsL.curve = o.L, this._wsR.curve = o.R, this._L.gain.value = 0, this._R.gain.value = 0, this.inlet.connect(this._L, 0), this.inlet.connect(this._R, 1), this._L.connect(this.outlet, 0, 0), this._R.connect(this.outlet, 0, 1), this._pan.connect(this._wsL), this._pan.connect(this._wsR), this._wsL.connect(this._L.gain), this._wsR.connect(this._R.gain), this._isConnected = !1, this._dc1buffer = null, this._dc1 = null
        }
        var o = n(136);
        r.prototype.connect = function(t) {
            var n = this.audioContext;
            this._isConnected || (this._isConnected = !0, this._dc1buffer = n.createBuffer(1, 2, n.sampleRate), this._dc1buffer.getChannelData(0).set([1, 1]), this._dc1 = n.createBufferSource(), this._dc1.buffer = this._dc1buffer, this._dc1.loop = !0, this._dc1.start(n.currentTime), this._dc1.connect(this._pan)), e.AudioNode.prototype.connect.call(this.outlet, t)
        }, r.prototype.disconnect = function() {
            var t = this.audioContext;
            this._isConnected && (this._isConnected = !1, this._dc1.stop(t.currentTime), this._dc1.disconnect(), this._dc1 = null, this._dc1buffer = null), e.AudioNode.prototype.disconnect.call(this.outlet)
        }, t.exports = r
    }).call(e, n(5))
}, function(t, e) {
    var n = new Float32Array(4096),
        r = new Float32Array(4096);
    ! function() {
        var t;
        for (t = 0; t < 4096; t++) n[t] = Math.cos(t / 4096 * Math.PI * .5), r[t] = Math.sin(t / 4096 * Math.PI * .5)
    }(), t.exports = {
        L: n,
        R: r
    }
}, function(t, e) {
    t.exports = ReactDOM
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        return "rect(0, " + e + "px, " + T + "px, " + t + "px)"
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var i, a, u = n(13),
        s = r(u),
        c = n(14),
        l = r(c),
        f = n(15),
        h = r(f),
        d = n(16),
        p = r(d),
        v = n(17),
        y = r(v),
        m = n(18),
        g = r(m),
        b = n(24),
        _ = r(b),
        w = n(143),
        x = r(w),
        M = n(152),
        E = r(M),
        O = n(69),
        k = r(O),
        C = n(32),
        S = n(154),
        P = r(S),
        T = 160,
        j = (0, P.default)("#0cf").lighten(.1).toString(),
        A = (a = i = function(t) {
            function e() {
                var t, n, r, o;
                (0, l.default)(this, e);
                for (var i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
                return n = r = (0, p.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(a))), r.currentTime = 0, r.audioBuffer = null, r.onAudioProcess = function(t) {
                    r.props.currentTime < r.props.endTime && t >= r.props.endTime ? r.props.onCurrentTimeChange(r.props.startTime || 0) : (r.currentTime = t, r.props.onCurrentTimeChange(t))
                }, r.onAudioProcessEnd = function() {
                    r.props.onCurrentTimeChange(r.props.startTime || 0)
                }, r.dragEnd = function(t) {
                    r.props.onEndTimeChange(r.pos2Time(r.keepInRange(t.x)))
                }, r.dragCurrent = function(t) {
                    r.props.onCurrentTimeChange(r.pos2Time(r.keepInRange(t.x)))
                }, r.dragStart = function(t) {
                    r.props.onStartTimeChange(r.pos2Time(r.keepInRange(t.x)))
                }, o = n, (0, p.default)(r, o)
            }
            return (0, y.default)(e, t), (0, h.default)(e, [{
                key: "clean",
                value: function() {
                    var t = this.audio;
                    t && t.destroy()
                }
            }, {
                key: "initWebAudio",
                value: function() {
                    this.clean();
                    var t = this.props.audioBuffer,
                        e = new k.default(t);
                    e.on("process", this.onAudioProcess), e.on("end", this.onAudioProcessEnd), this.props.paused || e.play(this.props.currentTime), this.audio = e
                }
            }, {
                key: "keepInRange",
                value: function(t) {
                    return t < 0 ? 0 : t > 1e3 ? 1e3 : t
                }
            }, {
                key: "pos2Time",
                value: function(t) {
                    return t / this.widthDurationRatio
                }
            }, {
                key: "time2pos",
                value: function(t) {
                    return t * this.widthDurationRatio
                }
            }, {
                key: "componentDidUpdate",
                value: function(t, e) {
                    t.paused !== this.props.paused && (this.props.paused ? this.audio.pause() : this.audio.play(this.props.currentTime)), this.props.paused || this.currentTime === this.props.currentTime || this.audio.play(this.props.currentTime), this.props.audioBuffer !== t.audioBuffer && this.initWebAudio()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.initWebAudio()
                }
            }, {
                key: "renderTimestamp",
                value: function() {
                    var t = (0, C.formatSeconds)(this.props.currentTime);
                    return g.default.createElement("div", {
                        className: "cursor-current"
                    }, g.default.createElement("span", {
                        className: "num"
                    }, t[0]), "'", g.default.createElement("span", {
                        className: "num"
                    }, t[1]), ".", g.default.createElement("span", {
                        className: "num"
                    }, (0, C.leftZero)(t[2], 2)))
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.time2pos(this.props.startTime),
                        e = this.time2pos(this.props.endTime),
                        n = this.time2pos(this.props.currentTime);
                    return g.default.createElement("div", {
                        className: "player"
                    }, g.default.createElement("div", {
                        className: "clipper"
                    }, g.default.createElement(x.default, {
                        audioBuffer: this.props.audioBuffer,
                        width: 1e3,
                        height: T,
                        color1: "#ddd",
                        color2: "#e3e3e3"
                    })), g.default.createElement("div", {
                        className: "clipper",
                        style: {
                            clip: o(t, e)
                        }
                    }, g.default.createElement(x.default, {
                        audioBuffer: this.props.audioBuffer,
                        width: 1e3,
                        height: T,
                        color1: "#0cf",
                        color2: j
                    })), g.default.createElement(E.default, {
                        x: t,
                        onDrag: this.dragStart
                    }), g.default.createElement(E.default, {
                        className: "drag-current",
                        x: n,
                        onDrag: this.dragCurrent
                    }, this.renderTimestamp()), g.default.createElement(E.default, {
                        x: e,
                        onDrag: this.dragEnd
                    }))
                }
            }, {
                key: "widthDurationRatio",
                get: function() {
                    return 1e3 / this.props.audioBuffer.duration
                }
            }]), e
        }(m.PureComponent), i.propTypes = {
            encoding: _.default.bool,
            audioBuffer: _.default.instanceOf(AudioBuffer),
            paused: _.default.bool,
            startTime: _.default.number,
            endTime: _.default.number,
            currentTime: _.default.number,
            onStartTimeChange: _.default.func,
            onEndTimeChange: _.default.func,
            onCurrentTimeChange: _.default.func
        }, a);
    e.default = A
}, function(t, e, n) {
    "use strict";
    var r = n(140),
        o = n(141),
        i = n(142);
    t.exports = function() {
        function t(t, e, n, r, a, u) {
            u !== i && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
        }

        function e() {
            return t
        }
        t.isRequired = t;
        var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return function() {
            return t
        }
    }
    var o = function() {};
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
        return this
    }, o.thatReturnsArgument = function(t) {
        return t
    }, t.exports = o
}, function(t, e, n) {
    "use strict";

    function r(t, e, n, r, i, a, u, s) {
        if (o(e), !t) {
            var c;
            if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [n, r, i, a, u, s],
                    f = 0;
                c = new Error(e.replace(/%s/g, function() {
                    return l[f++]
                })), c.name = "Invariant Violation"
            }
            throw c.framesToPop = 1, c
        }
    }
    var o = function(t) {};
    t.exports = r
}, function(t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o, i, a = n(144),
        u = r(a),
        s = n(13),
        c = r(s),
        l = n(14),
        f = r(l),
        h = n(15),
        d = r(h),
        p = n(16),
        v = r(p),
        y = n(17),
        m = r(y),
        g = n(18),
        b = r(g),
        _ = n(24),
        w = r(_),
        x = n(151),
        M = r(x),
        E = n(68),
        O = r(E),
        k = window.devicePixelRatio || 1,
        C = (i = o = function(t) {
            function e(t) {
                (0, f.default)(this, e);
                var n = (0, v.default)(this, (e.__proto__ || (0, c.default)(e)).call(this, t));
                return n.ctx = null, n.state = {
                    peaks: null
                }, n
            }
            return (0, m.default)(e, t), (0, d.default)(e, [{
                key: "componentWillMount",
                value: function() {
                    this.setPeaks(this.props.audioBuffer.getChannelData(0))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var t = this.refs.canvas,
                        e = t.getContext("2d");
                    this.ctx = e, this.repaint()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(t) {
                    this.props.audioBuffer !== t.audioBuffer && this.setPeaks(t.audioBuffer)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.repaint()
                }
            }, {
                key: "setPeaks",
                value: function(t) {
                    //$($(".ctrl-item")[1]).hide();$($(".ctrl-item")[2]).hide()
                    console.time("peaks");
                    var e = (0, M.default)(this.props.width * k, t);
                    console.timeEnd("peaks"), this.setState({
                        peaks: e
                    })
                }
            }, {
                key: "repaint",
                value: function() {
                    var t = this.ctx,
                        e = this.state.peaks,
                        n = e.length,
                        r = this.props.height,
                        o = this.props.height / 2 * k;
                    t.lineWidth = 1, t.clearRect(0, 0, this.props.width * k, this.props.height * k);
                    for (var i = 0; i < n; i++) {
                        var a = (0, u.default)(e[i], 2),
                            s = a[0],
                            c = a[1],
                            l = i - .5;
                        t.beginPath(), t.strokeStyle = this.props.color1, t.moveTo(l, (s + 1) * r + .5), t.lineTo(l, o), t.stroke(), t.beginPath(), t.strokeStyle = this.props.color2, t.moveTo(l, o), t.lineTo(l, (c + 1) * r + .5), t.stroke()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return b.default.createElement("canvas", {
                        ref: "canvas",
                        className: (0, O.default)("wave-canvas", this.props.className),
                        style: {
                            width: this.props.width + "px",
                            height: this.props.height + "px"
                        },
                        width: this.props.width * k,
                        height: this.props.height * k
                    })
                }
            }]), e
        }(g.PureComponent), o.defaultProps = {
            color1: "#ccc",
            color2: "#ddd"
        }, o.propTypes = {
            className: w.default.string,
            autioBuffer: w.default.instanceOf(AudioBuffer),
            width: w.default.number.isRequired,
            height: w.default.number.isRequired,
            color1: w.default.string,
            color2: w.default.string
        }, i);
    e.default = C
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(145),
        i = r(o),
        a = n(148),
        u = r(a);
    e.default = function() {
        function t(t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, s = (0, u.default)(t); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e)) return e;
            if ((0, i.default)(Object(e))) return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}, function(t, e, n) {
    t.exports = {
        default: n(146),
        __esModule: !0
    }
}, function(t, e, n) {
    n(31), n(25), t.exports = n(147)
}, function(t, e, n) {
    var r = n(43),
        o = n(1)("iterator"),
        i = n(11);
    t.exports = n(0).isIterable = function(t) {
        var e = Object(t);
        return void 0 !== e[o] || "@@iterator" in e || i.hasOwnProperty(r(e))
    }
}, function(t, e, n) {
    t.exports = {
        default: n(149),
        __esModule: !0
    }
}, function(t, e, n) {
    n(31), n(25), t.exports = n(150)
}, function(t, e, n) {
    var r = n(3),
        o = n(59);
    t.exports = n(0).getIterator = function(t) {
        var e = o(t);
        if ("function" != typeof e) throw TypeError(t + " is not iterable!");
        return r(e.call(t))
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        for (var r = 0, o = 0, i = 0, a = 0, u = void 0, s = parseInt((n - e) / 15), c = e; c < n; c += s) u = t[c], u < r ? (o = r, r = u) : u > i && (a = i, i = u);
        return [(r + o) / 2, (i + a) / 2]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        for (var n = e.length, o = n / t, i = 0, a = new Array(t), u = 0; u < t; u++) {
            var s = ~~i;
            i += o;
            var c = ~~i;
            a[u] = r(e, s, c)
        }
        return a
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o, i, a = n(13),
        u = r(a),
        s = n(14),
        c = r(s),
        l = n(15),
        f = r(l),
        h = n(16),
        d = r(h),
        p = n(17),
        v = r(p),
        y = n(18),
        m = r(y),
        g = n(24),
        b = r(g),
        _ = n(68),
        w = r(_),
        x = (i = o = function(t) {
            function e() {
                var t, n, r, o;
                (0, c.default)(this, e);
                for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                return n = r = (0, d.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(a))), r._screenX = null, r._screenY = null, r._ox = null, r._oy = null, r.handleMouseDown = function(t) {
                    r._screenX = t.screenX, r._screenY = t.screenY, r._ox = r.props.x, r._oy = r.props.y, window.addEventListener("mousemove", r.handleMouseMove, !1), window.addEventListener("mouseup", r.handleMouseUp, !1)
                }, r.handleMouseMove = function(t) {
                    r.props.onDrag({
                        x: t.screenX - r._screenX + r._ox,
                        y: t.screenY - r._screenY + r._oy
                    })
                }, r.handleMouseUp = function() {
                    window.removeEventListener("mousemove", r.handleMouseMove), window.removeEventListener("mouseup", r.handleMouseUp)
                }, o = n, (0, d.default)(r, o)
            }
            return (0, v.default)(e, t), (0, f.default)(e, [{
                key: "render",
                value: function() {
                    return m.default.createElement("div", {
                        className: (0, w.default)("dragger", this.props.className),
                        onMouseDown: this.handleMouseDown,
                        style: {
                            left: this.props.x + "px",
                            top: this.props.y + "px"
                        }
                    }, this.props.children)
                }
            }]), e
        }(y.PureComponent), o.defaultProps = {
            onDrag: function() {},
            x: 0,
            y: 0
        }, o.propTypes = {
            x: b.default.number,
            y: b.default.number,
            onDrag: b.default.func,
            className: b.default.string,
            children: b.default.element
        }, i);
    e.default = x
}, function(t, e) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(t) {
        return "function" == typeof t
    }

    function o(t) {
        return "number" == typeof t
    }

    function i(t) {
        return "object" == typeof t && null !== t
    }

    function a(t) {
        return void 0 === t
    }
    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) {
        if (!o(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
        return this._maxListeners = t, this
    }, n.prototype.emit = function(t) {
        var e, n, o, u, s, c;
        if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1]) instanceof Error) throw e;
            var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw l.context = e, l
        }
        if (n = this._events[t], a(n)) return !1;
        if (r(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                u = Array.prototype.slice.call(arguments, 1), n.apply(this, u)
        } else if (i(n))
            for (u = Array.prototype.slice.call(arguments, 1), c = n.slice(), o = c.length, s = 0; s < o; s++) c[s].apply(this, u);
        return !0
    }, n.prototype.addListener = function(t, e) {
        var o;
        if (!r(e)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i(this._events[t]) && !this._events[t].warned && (o = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[t].length > o && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
        function n() {
            this.removeListener(t, n), o || (o = !0, e.apply(this, arguments))
        }
        if (!r(e)) throw TypeError("listener must be a function");
        var o = !1;
        return n.listener = e, this.on(t, n), this
    }, n.prototype.removeListener = function(t, e) {
        var n, o, a, u;
        if (!r(e)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[t]) return this;
        if (n = this._events[t], a = n.length, o = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
        else if (i(n)) {
            for (u = a; u-- > 0;)
                if (n[u] === e || n[u].listener && n[u].listener === e) {
                    o = u;
                    break
                } if (o < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }, n.prototype.removeAllListeners = function(t) {
        var e, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
        if (0 === arguments.length) {
            for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[t], r(n)) this.removeListener(t, n);
        else if (n)
            for (; n.length;) this.removeListener(t, n[n.length - 1]);
        return delete this._events[t], this
    }, n.prototype.listeners = function(t) {
        return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, n.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (r(e)) return 1;
            if (e) return e.length
        }
        return 0
    }, n.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(this instanceof r)) return new r(t, e);
        if (e && e in d && (e = null), e && !(e in f)) throw new Error("Unknown model: " + e);
        var n, o;
        if (t)
            if (t instanceof r) this.model = t.model, this.color = t.color.slice(), this.valpha = t.valpha;
            else if ("string" == typeof t) {
            var i = l.get(t);
            if (null === i) throw new Error("Unable to parse color from string: " + t);
            this.model = i.model, o = f[this.model].channels, this.color = i.value.slice(0, o), this.valpha = "number" == typeof i.value[o] ? i.value[o] : 1
        } else if (t.length) {
            this.model = e || "rgb", o = f[this.model].channels;
            var a = h.call(t, 0, o);
            this.color = c(a, o), this.valpha = "number" == typeof t[o] ? t[o] : 1
        } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [t >> 16 & 255, t >> 8 & 255, 255 & t], this.valpha = 1;
        else {
            this.valpha = 1;
            var u = Object.keys(t);
            "alpha" in t && (u.splice(u.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
            var s = u.sort().join("");
            if (!(s in p)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
            this.model = p[s];
            var y = f[this.model].labels,
                m = [];
            for (n = 0; n < y.length; n++) m.push(t[y[n]]);
            this.color = c(m)
        } else this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
        if (v[this.model])
            for (o = f[this.model].channels, n = 0; n < o; n++) {
                var g = v[this.model][n];
                g && (this.color[n] = g(this.color[n]))
            }
        this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
    }

    function o(t, e) {
        return Number(t.toFixed(e))
    }

    function i(t) {
        return function(e) {
            return o(e, t)
        }
    }

    function a(t, e, n) {
        return t = Array.isArray(t) ? t : [t], t.forEach(function(t) {
                (v[t] || (v[t] = []))[e] = n
            }), t = t[0],
            function(r) {
                var o;
                return arguments.length ? (n && (r = n(r)), o = this[t](), o.color[e] = r, o) : (o = this[t]().color[e], n && (o = n(o)), o)
            }
    }

    function u(t) {
        return function(e) {
            return Math.max(0, Math.min(t, e))
        }
    }

    function s(t) {
        return Array.isArray(t) ? t : [t]
    }

    function c(t, e) {
        for (var n = 0; n < e; n++) "number" != typeof t[n] && (t[n] = 0);
        return t
    }
    var l = n(155),
        f = n(158),
        h = [].slice,
        d = ["keyword", "gray", "hex"],
        p = {};
    Object.keys(f).forEach(function(t) {
        p[h.call(f[t].labels).sort().join("")] = t
    });
    var v = {};
    r.prototype = {
        toString: function() {
            return this.string()
        },
        toJSON: function() {
            return this[this.model]()
        },
        string: function(t) {
            var e = this.model in l.to ? this : this.rgb();
            e = e.round("number" == typeof t ? t : 1);
            var n = 1 === e.valpha ? e.color : e.color.concat(this.valpha);
            return l.to[e.model](n)
        },
        percentString: function(t) {
            var e = this.rgb().round("number" == typeof t ? t : 1),
                n = 1 === e.valpha ? e.color : e.color.concat(this.valpha);
            return l.to.rgb.percent(n)
        },
        array: function() {
            return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
        },
        object: function() {
            for (var t = {}, e = f[this.model].channels, n = f[this.model].labels, r = 0; r < e; r++) t[n[r]] = this.color[r];
            return 1 !== this.valpha && (t.alpha = this.valpha), t
        },
        unitArray: function() {
            var t = this.rgb().color;
            return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), t
        },
        unitObject: function() {
            var t = this.rgb().object();
            return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), t
        },
        round: function(t) {
            return t = Math.max(t || 0, 0), new r(this.color.map(i(t)).concat(this.valpha), this.model)
        },
        alpha: function(t) {
            return arguments.length ? new r(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha
        },
        red: a("rgb", 0, u(255)),
        green: a("rgb", 1, u(255)),
        blue: a("rgb", 2, u(255)),
        hue: a(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(t) {
            return (t % 360 + 360) % 360
        }),
        saturationl: a("hsl", 1, u(100)),
        lightness: a("hsl", 2, u(100)),
        saturationv: a("hsv", 1, u(100)),
        value: a("hsv", 2, u(100)),
        chroma: a("hcg", 1, u(100)),
        gray: a("hcg", 2, u(100)),
        white: a("hwb", 1, u(100)),
        wblack: a("hwb", 2, u(100)),
        cyan: a("cmyk", 0, u(100)),
        magenta: a("cmyk", 1, u(100)),
        yellow: a("cmyk", 2, u(100)),
        black: a("cmyk", 3, u(100)),
        x: a("xyz", 0, u(100)),
        y: a("xyz", 1, u(100)),
        z: a("xyz", 2, u(100)),
        l: a("lab", 0, u(100)),
        a: a("lab", 1),
        b: a("lab", 2),
        keyword: function(t) {
            return arguments.length ? new r(t) : f[this.model].keyword(this.color)
        },
        hex: function(t) {
            return arguments.length ? new r(t) : l.to.hex(this.rgb().round().color)
        },
        rgbNumber: function() {
            var t = this.rgb().color;
            return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2]
        },
        luminosity: function() {
            for (var t = this.rgb().color, e = [], n = 0; n < t.length; n++) {
                var r = t[n] / 255;
                e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function() {
            var t = this.rgb().color;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = this.rgb(), e = 0; e < 3; e++) t.color[e] = 255 - t.color[e];
            return t
        },
        lighten: function(t) {
            var e = this.hsl();
            return e.color[2] += e.color[2] * t, e
        },
        darken: function(t) {
            var e = this.hsl();
            return e.color[2] -= e.color[2] * t, e
        },
        saturate: function(t) {
            var e = this.hsl();
            return e.color[1] += e.color[1] * t, e
        },
        desaturate: function(t) {
            var e = this.hsl();
            return e.color[1] -= e.color[1] * t, e
        },
        whiten: function(t) {
            var e = this.hwb();
            return e.color[1] += e.color[1] * t, e
        },
        blacken: function(t) {
            var e = this.hwb();
            return e.color[2] += e.color[2] * t, e
        },
        grayscale: function() {
            var t = this.rgb().color,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return r.rgb(e, e, e)
        },
        fade: function(t) {
            return this.alpha(this.valpha - this.valpha * t)
        },
        opaquer: function(t) {
            return this.alpha(this.valpha + this.valpha * t)
        },
        rotate: function(t) {
            var e = this.hsl(),
                n = e.color[0];
            return n = (n + t) % 360, n = n < 0 ? 360 + n : n, e.color[0] = n, e
        },
        mix: function(t, e) {
            var n = t.rgb(),
                o = this.rgb(),
                i = void 0 === e ? .5 : e,
                a = 2 * i - 1,
                u = n.alpha() - o.alpha(),
                s = ((a * u == -1 ? a : (a + u) / (1 + a * u)) + 1) / 2,
                c = 1 - s;
            return r.rgb(s * n.red() + c * o.red(), s * n.green() + c * o.green(), s * n.blue() + c * o.blue(), n.alpha() * i + o.alpha() * (1 - i))
        }
    }, Object.keys(f).forEach(function(t) {
        if (-1 === d.indexOf(t)) {
            var e = f[t].channels;
            r.prototype[t] = function() {
                if (this.model === t) return new r(this);
                if (arguments.length) return new r(arguments, t);
                var n = "number" == typeof arguments[e] ? e : this.valpha;
                return new r(s(f[this.model][t].raw(this.color)).concat(n), t)
            }, r[t] = function(n) {
                return "number" == typeof n && (n = c(h.call(arguments), e)), new r(n, t)
            }
        }
    }), t.exports = r
}, function(t, e, n) {
    function r(t, e, n) {
        return Math.min(Math.max(e, t), n)
    }

    function o(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var i = n(70),
        a = n(156),
        u = {};
    for (var s in i) i.hasOwnProperty(s) && (u[i[s]] = s);
    var c = t.exports = {
        to: {}
    };
    c.get = function(t) {
        var e, n, r = t.substring(0, 3).toLowerCase();
        switch (r) {
            case "hsl":
                e = c.get.hsl(t), n = "hsl";
                break;
            case "hwb":
                e = c.get.hwb(t), n = "hwb";
                break;
            default:
                e = c.get.rgb(t), n = "rgb"
        }
        return e ? {
            model: n,
            value: e
        } : null
    }, c.get.rgb = function(t) {
        if (!t) return null;
        var e, n, o, a = /^#([a-f0-9]{3,4})$/i,
            u = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
            s = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            c = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            l = /(\D+)/,
            f = [0, 0, 0, 1];
        if (e = t.match(u)) {
            for (o = e[2], e = e[1], n = 0; n < 3; n++) {
                var h = 2 * n;
                f[n] = parseInt(e.slice(h, h + 2), 16)
            }
            o && (f[3] = Math.round(parseInt(o, 16) / 255 * 100) / 100)
        } else if (e = t.match(a)) {
            for (e = e[1], o = e[3], n = 0; n < 3; n++) f[n] = parseInt(e[n] + e[n], 16);
            o && (f[3] = Math.round(parseInt(o + o, 16) / 255 * 100) / 100)
        } else if (e = t.match(s)) {
            for (n = 0; n < 3; n++) f[n] = parseInt(e[n + 1], 0);
            e[4] && (f[3] = parseFloat(e[4]))
        } else {
            if (!(e = t.match(c))) return (e = t.match(l)) ? "transparent" === e[1] ? [0, 0, 0, 0] : (f = i[e[1]]) ? (f[3] = 1, f) : null : null;
            for (n = 0; n < 3; n++) f[n] = Math.round(2.55 * parseFloat(e[n + 1]));
            e[4] && (f[3] = parseFloat(e[4]))
        }
        for (n = 0; n < 3; n++) f[n] = r(f[n], 0, 255);
        return f[3] = r(f[3], 0, 1), f
    }, c.get.hsl = function(t) {
        if (!t) return null;
        var e = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            n = t.match(e);
        if (n) {
            var o = parseFloat(n[4]);
            return [(parseFloat(n[1]) % 360 + 360) % 360, r(parseFloat(n[2]), 0, 100), r(parseFloat(n[3]), 0, 100), r(isNaN(o) ? 1 : o, 0, 1)]
        }
        return null
    }, c.get.hwb = function(t) {
        if (!t) return null;
        var e = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            n = t.match(e);
        if (n) {
            var o = parseFloat(n[4]);
            return [(parseFloat(n[1]) % 360 + 360) % 360, r(parseFloat(n[2]), 0, 100), r(parseFloat(n[3]), 0, 100), r(isNaN(o) ? 1 : o, 0, 1)]
        }
        return null
    }, c.to.hex = function() {
        var t = a(arguments);
        return "#" + o(t[0]) + o(t[1]) + o(t[2]) + (t[3] < 1 ? o(Math.round(255 * t[3])) : "")
    }, c.to.rgb = function() {
        var t = a(arguments);
        return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")"
    }, c.to.rgb.percent = function() {
        var t = a(arguments),
            e = Math.round(t[0] / 255 * 100),
            n = Math.round(t[1] / 255 * 100),
            r = Math.round(t[2] / 255 * 100);
        return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + n + "%, " + r + "%)" : "rgba(" + e + "%, " + n + "%, " + r + "%, " + t[3] + ")"
    }, c.to.hsl = function() {
        var t = a(arguments);
        return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")"
    }, c.to.hwb = function() {
        var t = a(arguments),
            e = "";
        return t.length >= 4 && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")"
    }, c.to.keyword = function(t) {
        return u[t.slice(0, 3)]
    }
}, function(t, e, n) {
    "use strict";
    var r = n(157),
        o = Array.prototype.concat,
        i = Array.prototype.slice,
        a = t.exports = function(t) {
            for (var e = [], n = 0, a = t.length; n < a; n++) {
                var u = t[n];
                r(u) ? e = o.call(e, i.call(u)) : e.push(u)
            }
            return e
        };
    a.wrap = function(t) {
        return function() {
            return t(a(arguments))
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name))
    }
}, function(t, e, n) {
    function r(t) {
        var e = function(e) {
            return void 0 === e || null === e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
        };
        return "conversion" in t && (e.conversion = t.conversion), e
    }

    function o(t) {
        var e = function(e) {
            if (void 0 === e || null === e) return e;
            arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
            var n = t(e);
            if ("object" == typeof n)
                for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]);
            return n
        };
        return "conversion" in t && (e.conversion = t.conversion), e
    }
    var i = n(71),
        a = n(159),
        u = {};
    Object.keys(i).forEach(function(t) {
        u[t] = {}, Object.defineProperty(u[t], "channels", {
            value: i[t].channels
        }), Object.defineProperty(u[t], "labels", {
            value: i[t].labels
        });
        var e = a(t);
        Object.keys(e).forEach(function(n) {
            var i = e[n];
            u[t][n] = o(i), u[t][n].raw = r(i)
        })
    }), t.exports = u
}, function(t, e, n) {
    function r() {
        for (var t = {}, e = Object.keys(u), n = e.length, r = 0; r < n; r++) t[e[r]] = {
            distance: -1,
            parent: null
        };
        return t
    }

    function o(t) {
        var e = r(),
            n = [t];
        for (e[t].distance = 0; n.length;)
            for (var o = n.pop(), i = Object.keys(u[o]), a = i.length, s = 0; s < a; s++) {
                var c = i[s],
                    l = e[c]; - 1 === l.distance && (l.distance = e[o].distance + 1, l.parent = o, n.unshift(c))
            }
        return e
    }

    function i(t, e) {
        return function(n) {
            return e(t(n))
        }
    }

    function a(t, e) {
        for (var n = [e[t].parent, t], r = u[e[t].parent][t], o = e[t].parent; e[o].parent;) n.unshift(e[o].parent), r = i(u[e[o].parent][o], r), o = e[o].parent;
        return r.conversion = n, r
    }
    var u = n(71);
    t.exports = function(t) {
        for (var e = o(t), n = {}, r = Object.keys(e), i = r.length, u = 0; u < i; u++) {
            var s = r[u];
            null !== e[s].parent && (n[s] = a(s, e))
        }
        return n
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o, i, a = n(13),
        u = r(a),
        s = n(14),
        c = r(s),
        l = n(15),
        f = r(l),
        h = n(16),
        d = r(h),
        p = n(17),
        v = r(p),
        y = n(18),
        m = r(y),
        g = n(24),
        b = r(g),
        _ = (i = o = function(t) {
            function e() {
                (0, c.default)(this, e);
                var t = (0, d.default)(this, (e.__proto__ || (0, u.default)(e)).call(this));
                return t.handleChange = function() {
                    t.props.onChange(t.refs.file.files[0]), t.setState({
                        key: t.state.key + 1
                    })
                }, t.state = {
                    key: 0
                }, t
            }
            return (0, v.default)(e, t), (0, f.default)(e, [{
                key: "render",
                value: function() {
                    return m.default.createElement("label", {
                        className: "file"
                    }, this.props.children, m.default.createElement("input", {
                        type: "file",
                        key: this.state.key,
                        ref: "file",
                        accept:".mp3,audio/*",
                        onChange: this.handleChange
                    }))
                }
            }]), e
        }(y.PureComponent), o.defaultProps = {
            onChange: function() {}
        }, o.propTypes = {
            onChange: b.default.func,
            children: b.default.element
        }, i);
    e.default = _
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(18),
        i = r(o),
        a = n(24),
        u = r(a);
    n(162).keys().forEach(function(t) {
        n(163)("./" + t.slice(2))
    });
    var s = function(t) {
        return i.default.createElement("svg", {
            className: "icon icon-" + t.name
        }, i.default.createElement("use", {
            xlinkHref: "#icon-" + t.name
        }))
    };
    s.propTypes = {
        name: u.default.string
    }, e.default = s
}, function(t, e, n) {
    function r(t) {
        return n(o(t))
    }

    function o(t) {
        var e = i[t];
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
        return e
    }
    var i = {
        "./download.svg": 72,
        "./music.svg": 73,
        "./pause.svg": 74,
        "./play.svg": 75,
        "./replay.svg": 76,
        "./spin.svg": 77
    };
    r.keys = function() {
        return Object.keys(i)
    }, r.resolve = o, t.exports = r, r.id = 162
}, function(t, e, n) {
    function r(t) {
        return n(o(t))
    }

    function o(t) {
        var e = i[t];
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
        return e
    }
    var i = {
        "./download.svg": 72,
        "./music.svg": 73,
        "./pause.svg": 74,
        "./play.svg": 75,
        "./replay.svg": 76,
        "./spin.svg": 77
    };
    r.keys = function() {
        return Object.keys(i)
    }, r.resolve = o, t.exports = r, r.id = 163
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.encode = e.worker = void 0;
    var r = n(33),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        i = n(78),
        a = document.querySelector("[x-audio-encode]");
    a || console.error("Missing worker script tag.");
    var u = e.worker = new Worker(a && a.src);
    e.encode = function(t, e) {
        var n = Math.random();
        return new o.default(function(r, o) {
            var a = (0, i.serializeAudioBuffer)(t);
            u.postMessage({
                type: e,
                audioData: a,
                id: n
            });
            var s = function t(e) {
                var i = e.data;
                i && i.id === n && (i.error ? o(new Error(i.message)) : r(i.blob), u.removeEventListener("message", t))
            };
            u.addEventListener("message", s)
        })
    }
}, function(t, e, n) {
    var r = n(166);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]);
    var o = {};
    o.transform = void 0;
    n(168)(r, o);
    r.locals && (t.exports = r.locals)
}, function(t, e, n) {
    e = t.exports = n(167)(!1), e.push([t.i, '', ""])
}, function(t, e) {
    function n(t, e) {
        var n = t[1] || "",
            o = t[3];
        if (!o) return n;
        if (e && "function" == typeof btoa) {
            var i = r(o);
            return [n].concat(o.sources.map(function(t) {
                return "/*# sourceURL=" + o.sourceRoot + t + " */"
            })).concat([i]).join("\n")
        }
        return [n].join("\n")
    }

    function r(t) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
    }
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var r = n(e, t);
                return e[2] ? "@media " + e[2] + "{" + r + "}" : r
            }).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(t, e, n) {
    function r(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n],
                o = p[r.id];
            if (o) {
                o.refs++;
                for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) o.parts.push(l(r.parts[i], e))
            } else {
                for (var a = [], i = 0; i < r.parts.length; i++) a.push(l(r.parts[i], e));
                p[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function o(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o],
                a = e.base ? i[0] + e.base : i[0],
                u = i[1],
                s = i[2],
                c = i[3],
                l = {
                    css: u,
                    media: s,
                    sourceMap: c
                };
            r[a] ? r[a].parts.push(l) : n.push(r[a] = {
                id: a,
                parts: [l]
            })
        }
        return n
    }

    function i(t, e) {
        var n = y(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = b[b.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), b.push(e);
        else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(e)
        }
    }

    function a(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = b.indexOf(t);
        e >= 0 && b.splice(e, 1)
    }

    function u(t) {
        var e = document.createElement("style");
        return t.attrs.type = "text/css", c(e, t.attrs), i(t, e), e
    }

    function s(t) {
        var e = document.createElement("link");
        return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", c(e, t.attrs), i(t, e), e
    }

    function c(t, e) {
        Object.keys(e).forEach(function(n) {
            t.setAttribute(n, e[n])
        })
    }

    function l(t, e) {
        var n, r, o, i;
        if (e.transform && t.css) {
            if (!(i = e.transform(t.css))) return function() {};
            t.css = i
        }
        if (e.singleton) {
            var c = g++;
            n = m || (m = u(e)), r = f.bind(null, n, c, !1), o = f.bind(null, n, c, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(e), r = d.bind(null, n, e), o = function() {
            a(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = u(e), r = h.bind(null, n), o = function() {
            a(n)
        });
        return r(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else o()
            }
    }

    function f(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = w(e, o);
        else {
            var i = document.createTextNode(o),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
        }
    }

    function h(t, e) {
        var n = e.css,
            r = e.media;
        if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }

    function d(t, e, n) {
        var r = n.css,
            o = n.sourceMap,
            i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = _(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
                type: "text/css"
            }),
            u = t.href;
        t.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u)
    }
    var p = {},
        v = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        y = function(t) {
            var e = {};
            return function(n) {
                return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
            }
        }(function(t) {
            return document.querySelector(t)
        }),
        m = null,
        g = 0,
        b = [],
        _ = n(169);
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = v()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = o(t, e);
        return r(n, e),
            function(t) {
                for (var i = [], a = 0; a < n.length; a++) {
                    var u = n[a],
                        s = p[u.id];
                    s.refs--, i.push(s)
                }
                if (t) {
                    r(o(t, e), e)
                }
                for (var a = 0; a < i.length; a++) {
                    var s = i[a];
                    if (0 === s.refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete p[s.id]
                    }
                }
            }
    };
    var w = function() {
        var t = [];
        return function(e, n) {
            return t[e] = n, t.filter(Boolean).join("\n")
        }
    }()
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return t;
            var i;
            return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
        })
    }
}]);$($(".ctrl-item")[1]).hide();$($(".ctrl-item")[2]).hide()