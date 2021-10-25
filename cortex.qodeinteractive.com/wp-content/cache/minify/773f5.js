! function(e, n) {
    e.wp = e.wp || {}, e.wp.mediaelement = new function() {
        var e = {};
        return {
            initialize: function() {
                "undefined" != typeof _wpmejsSettings && (e = n.extend(!0, {}, _wpmejsSettings)), e.classPrefix = "mejs-", e.success = e.success || function(e) {
                    var n, t;
                    e.rendererName && -1 !== e.rendererName.indexOf("flash") && (n = e.attributes.autoplay && "false" !== e.attributes.autoplay, t = e.attributes.loop && "false" !== e.attributes.loop, n && e.addEventListener("canplay", function() {
                        e.play()
                    }, !1), t && e.addEventListener("ended", function() {
                        e.play()
                    }, !1))
                }, e.customError = function(e, n) {
                    if (-1 !== e.rendererName.indexOf("flash") || -1 !== e.rendererName.indexOf("flv")) return '<a href="' + n.src + '">' + mejsL10n.strings["mejs.download-file"] + "</a>"
                }, n(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function() {
                    return !n(this).parent().hasClass("mejs-mediaelement")
                }).mediaelementplayer(e)
            }
        }
    }, n(e.wp.mediaelement.initialize)
}(window, jQuery);;
! function(a) {
    a.fn.appear = function(b, c) {
        var d = a.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, c);
        return this.each(function() {
            var c = a(this);
            if (c.appeared = !1, !b) return void c.trigger("appear", d.data);
            var e = a(window),
                f = function() {
                    if (!c.is(":visible")) return void(c.appeared = !1);
                    var a = e.scrollLeft(),
                        b = e.scrollTop(),
                        f = c.offset(),
                        g = f.left,
                        h = f.top,
                        i = d.accX,
                        j = d.accY,
                        k = c.height(),
                        l = e.height(),
                        m = c.width(),
                        n = e.width();
                    h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1
                },
                g = function() {
                    if (c.appeared = !0, d.one) {
                        e.unbind("scroll", f);
                        var g = a.inArray(f, a.fn.appear.checks);
                        g >= 0 && a.fn.appear.checks.splice(g, 1)
                    }
                    b.apply(this, arguments)
                };
            d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g), e.scroll(f), a.fn.appear.checks.push(f), f()
        })
    }, a.extend(a.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var b = a.fn.appear.checks.length;
            if (b > 0)
                for (; b--;) a.fn.appear.checks[b]()
        },
        run: function() {
            a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout), a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
        }
    }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(b, c) {
        var d = a.fn[c];
        d && (a.fn[c] = function() {
            var b = d.apply(this, arguments);
            return a.fn.appear.run(), b
        })
    })
}(jQuery), window.Modernizr = function(a, b, c) {
        function d(a) {
            t.cssText = a
        }

        function e(a, b) {
            return d(x.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && t[e] !== c) return "pfx" != b || e
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return !1 === d ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + z.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
        }

        function k() {
            o.input = function(c) {
                for (var d = 0, e = c.length; d < e; d++) E[c[d]] = c[d] in u;
                return E.list && (E.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
                for (var d, e, f, g = 0, h = a.length; g < h; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && !1 === u.checkValidity() : u.value != v)), D[a[g]] = !!d;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l, m, n = "2.8.3",
            o = {},
            p = !0,
            q = b.documentElement,
            r = "modernizr",
            s = b.createElement(r),
            t = s.style,
            u = b.createElement("input"),
            v = ":)",
            w = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            z = y.split(" "),
            A = y.toLowerCase().split(" "),
            B = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            D = {},
            E = {},
            F = [],
            G = F.slice,
            H = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
            },
            I = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            J = {}.hasOwnProperty;
        m = f(J, "undefined") || f(J.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return J.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = G.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(G.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(G.call(arguments)))
                };
            return d
        }), C.flexbox = function() {
            return j("flexWrap")
        }, C.flexboxlegacy = function() {
            return j("boxDirection")
        }, C.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, C.canvastext = function() {
            return !!o.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
        }, C.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, C.hashchange = function() {
            return I("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, C.history = function() {
            return !!a.history && !!history.pushState
        }, C.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, C.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
        }, C.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
        }, C.backgroundsize = function() {
            return j("backgroundSize")
        }, C.borderimage = function() {
            return j("borderImage")
        }, C.borderradius = function() {
            return j("borderRadius")
        }, C.boxshadow = function() {
            return j("boxShadow")
        }, C.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, C.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(t.opacity)
        }, C.cssanimations = function() {
            return j("animationName")
        }, C.csscolumns = function() {
            return j("columnCount")
        }, C.cssgradients = function() {
            var a = "background-image:";
            return d((a + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + a) + x.join("linear-gradient(left top,#9f9, white);" + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return j("boxReflect")
        }, C.csstransforms = function() {
            return !!j("transform")
        }, C.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, C.csstransitions = function() {
            return j("transition")
        }, C.fontface = function() {
            var a;
            return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, C.generatedcontent = function() {
            var a;
            return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, C.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (n) {}
            return c
        }, C.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (n) {}
            return c
        }, C.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
        }, C.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
        };
        for (var K in C) m(C, K) && (l = K.toLowerCase(), o[l] = C[K](), F.push((o[l] ? "" : "no-") + l));
        return o.input || k(), o.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) m(a, d) && o.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), o[a] !== c) return o;
                    b = "function" == typeof b ? b() : b, void 0 !== p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
                }
                return o
            }, d(""), s = u = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = s.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = r[a[p]];
                    return b || (b = {}, q++, a[p] = q, r[q] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; g < i; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return s.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
                }
                var j, k, l = "3.7.0",
                    m = a.html5 || {},
                    n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    q = 0,
                    r = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return void 0 === a.cloneNode || void 0 === a.createDocumentFragment || void 0 === a.createElement
                        }()
                    } catch (l) {
                        j = !0, k = !0
                    }
                }();
                var s = {
                    elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: l,
                    shivCSS: !1 !== m.shivCSS,
                    supportsUnknownElements: k,
                    shivMethods: !1 !== m.shivMethods,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = s, i(b)
            }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.hasEvent = I, o.testProp = function(a) {
                return h([a])
            }, o.testAllProps = j, o.testStyles = H, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function() {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function() {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function(a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function(a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        url: f,
                        origUrl: f,
                        prefixes: a
                    };
                for (c = 0; c < g; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; c < e; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function() {
                                    var b, c = 0;
                                    for (b in a) a.hasOwnProperty(b) && c++;
                                    return c
                                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function(a, b) {
            B[a] = b
        }, m.addFilter = function(a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function() {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(a) {
        a.fn.hoverIntent = function(b, c, d) {
            var e = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            };
            e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
                over: b,
                out: c,
                selector: d
            }) : a.extend(e, {
                over: b,
                out: b,
                selector: c
            });
            var f, g, h, i, j = function(a) {
                    f = a.pageX, g = a.pageY
                },
                k = function(b, c) {
                    if (c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity) return a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b]);
                    h = f, i = g, c.hoverIntent_t = setTimeout(function() {
                        k(b, c)
                    }, e.interval)
                },
                l = function(a, b) {
                    return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
                },
                m = function(b) {
                    var c = a.extend({}, b),
                        d = this;
                    d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function() {
                        k(c, d)
                    }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                        l(c, d)
                    }, e.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": m,
                "mouseleave.hoverIntent": m
            }, e.selector)
        }
    }(jQuery),
    function() {
        var a = !1;
        window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function b(c) {
            function d() {
                !a && this._init && this._init.apply(this, arguments)
            }
            var e = this.prototype;
            a = !0;
            var f = new this;
            a = !1;
            for (var g in c) f[g] = "function" == typeof c[g] && "function" == typeof e[g] ? function(a, b) {
                return function() {
                    var c = this._super;
                    this._super = function(b) {
                        return e[a].apply(this, b || [])
                    };
                    var d = b.apply(this, arguments);
                    return this._super = c, d
                }
            }(g, c[g]) : c[g];
            return d.prototype = f, d.prototype.constructor = d, d.extend = b, d
        }
    }(),
    function($) {
        function camelCase(a) {
            return a.replace(/-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })
        }
        JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            _getters: [],
            _getMarker: function() {
                return "is-" + this.name
            },
            _init: function() {
                $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
                var a = camelCase(this.name);
                $[a] = this, $.fn[a] = function(b) {
                    var c = Array.prototype.slice.call(arguments, 1);
                    return $[a]._isNotChained(b, c) ? $[a][b].apply($[a], [this[0]].concat(c)) : this.each(function() {
                        if ("string" == typeof b) {
                            if ("_" === b[0] || !$[a][b]) throw "Unknown method: " + b;
                            $[a][b].apply($[a], [this].concat(c))
                        } else $[a]._attach(this, b)
                    })
                }
            },
            setDefaults: function(a) {
                $.extend(this.defaultOptions, a || {})
            },
            _isNotChained: function(a, b) {
                return "option" === a && (0 === b.length || 1 === b.length && "string" == typeof b[0]) || $.inArray(a, this._getters) > -1
            },
            _attach: function(a, b) {
                if (a = $(a), !a.hasClass(this._getMarker())) {
                    a.addClass(this._getMarker()), b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
                    var c = $.extend({
                        name: this.name,
                        elem: a,
                        options: b
                    }, this._instSettings(a, b));
                    a.data(this.name, c), this._postAttach(a, c), this.option(a, b)
                }
            },
            _instSettings: function(a, b) {
                return {}
            },
            _postAttach: function(a, b) {},
            _getMetadata: function(elem) {
                try {
                    var data = elem.data(this.name.toLowerCase()) || "";
                    data = data.replace(/'/g, '"'), data = data.replace(/([a-zA-Z0-9]+):/g, function(a, b, c) {
                        var d = data.substring(0, c).match(/"/g);
                        return d && d.length % 2 != 0 ? b + ":" : '"' + b + '":'
                    }), data = $.parseJSON("{" + data + "}");
                    for (var name in data) {
                        var value = data[name];
                        "string" == typeof value && value.match(/^new Date\((.*)\)$/) && (data[name] = eval(value))
                    }
                    return data
                } catch (e) {
                    return {}
                }
            },
            _getInst: function(a) {
                return $(a).data(this.name) || {}
            },
            option: function(a, b, c) {
                a = $(a);
                var d = a.data(this.name);
                if (!b || "string" == typeof b && null == c) {
                    var e = (d || {}).options;
                    return e && b ? e[b] : e
                }
                if (a.hasClass(this._getMarker())) {
                    var e = b || {};
                    "string" == typeof b && (e = {}, e[b] = c), this._optionsChanged(a, d, e), $.extend(d.options, e)
                }
            },
            _optionsChanged: function(a, b, c) {},
            destroy: function(a) {
                a = $(a), a.hasClass(this._getMarker()) && (this._preDestroy(a, this._getInst(a)), a.removeData(this.name).removeClass(this._getMarker()))
            },
            _preDestroy: function(a, b) {}
        }), $.JQPlugin = {
            createPlugin: function(a, b) {
                "object" == typeof a && (b = a, a = "JQPlugin"), a = camelCase(a);
                var c = camelCase(b.name);
                JQClass.classes[c] = JQClass.classes[a].extend(b), new JQClass.classes[c]
            }
        }
    }(jQuery),
    function(a) {
        var b = "countdown",
            c = 0,
            d = 1,
            e = 2,
            f = 3,
            g = 4,
            h = 5,
            i = 6;
        a.JQPlugin.createPlugin({
            name: b,
            defaultOptions: {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                padZeroes: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            },
            regionalOptions: {
                "": {
                    labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                    labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                    compactLabels: ["y", "m", "w", "d"],
                    whichLabels: null,
                    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    timeSeparator: ":",
                    isRTL: !1
                }
            },
            _getters: ["getTimes"],
            _rtlClass: b + "-rtl",
            _sectionClass: b + "-section",
            _amountClass: b + "-amount",
            _periodClass: b + "-period",
            _rowClass: b + "-row",
            _holdingClass: b + "-holding",
            _showClass: b + "-show",
            _descrClass: b + "-descr",
            _timerElems: [],
            _init: function() {
                function b(a) {
                    var h = a < 1e12 ? e ? performance.now() + performance.timing.navigationStart : d() : a || d();
                    h - g >= 1e3 && (c._updateElems(), g = h), f(b)
                }
                var c = this;
                this._super(), this._serverSyncs = [];
                var d = "function" == typeof Date.now ? Date.now : function() {
                        return (new Date).getTime()
                    },
                    e = window.performance && "function" == typeof window.performance.now,
                    f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                    g = 0;
                !f || a.noRequestAnimationFrame ? (a.noRequestAnimationFrame = null, setInterval(function() {
                    c._updateElems()
                }, 980)) : (g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d(), f(b))
            },
            UTCDate: function(a, b, c, d, e, f, g, h) {
                "object" == typeof b && b.constructor == Date && (h = b.getMilliseconds(), g = b.getSeconds(), f = b.getMinutes(), e = b.getHours(), d = b.getDate(), c = b.getMonth(), b = b.getFullYear());
                var i = new Date;
                return i.setUTCFullYear(b), i.setUTCDate(1), i.setUTCMonth(c || 0), i.setUTCDate(d || 1), i.setUTCHours(e || 0), i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)), i.setUTCSeconds(g || 0), i.setUTCMilliseconds(h || 0), i
            },
            periodsToSeconds: function(a) {
                return 31557600 * a[0] + 2629800 * a[1] + 604800 * a[2] + 86400 * a[3] + 3600 * a[4] + 60 * a[5] + a[6]
            },
            resync: function() {
                var b = this;
                a("." + this._getMarker()).each(function() {
                    var c = a.data(this, b.name);
                    if (c.options.serverSync) {
                        for (var d = null, e = 0; e < b._serverSyncs.length; e++)
                            if (b._serverSyncs[e][0] == c.options.serverSync) {
                                d = b._serverSyncs[e];
                                break
                            }
                        if (null == d[2]) {
                            var f = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(this, []) : null;
                            d[2] = (f ? (new Date).getTime() - f.getTime() : 0) - d[1]
                        }
                        c._since && c._since.setMilliseconds(c._since.getMilliseconds() + d[2]), c._until.setMilliseconds(c._until.getMilliseconds() + d[2])
                    }
                });
                for (var c = 0; c < b._serverSyncs.length; c++) null != b._serverSyncs[c][2] && (b._serverSyncs[c][1] += b._serverSyncs[c][2], delete b._serverSyncs[c][2])
            },
            _instSettings: function(a, b) {
                return {
                    _periods: [0, 0, 0, 0, 0, 0, 0]
                }
            },
            _addElem: function(a) {
                this._hasElem(a) || this._timerElems.push(a)
            },
            _hasElem: function(b) {
                return a.inArray(b, this._timerElems) > -1
            },
            _removeElem: function(b) {
                this._timerElems = a.map(this._timerElems, function(a) {
                    return a == b ? null : a
                })
            },
            _updateElems: function() {
                for (var a = this._timerElems.length - 1; a >= 0; a--) this._updateCountdown(this._timerElems[a])
            },
            _optionsChanged: function(b, c, d) {
                d.layout && (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(c.options, d);
                var e = c.options.timezone != d.timezone;
                a.extend(c.options, d), this._adjustSettings(b, c, null != d.until || null != d.since || e);
                var f = new Date;
                (c._since && c._since < f || c._until && c._until > f) && this._addElem(b[0]), this._updateCountdown(b, c)
            },
            _updateCountdown: function(b, c) {
                if (b = b.jquery ? b : a(b), c = c || this._getInst(b)) {
                    if (b.html(this._generateHTML(c)).toggleClass(this._rtlClass, c.options.isRTL), a.isFunction(c.options.onTick)) {
                        var d = "lap" != c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date);
                        1 != c.options.tickInterval && this.periodsToSeconds(d) % c.options.tickInterval != 0 || c.options.onTick.apply(b[0], [d])
                    }
                    if ("pause" != c._hold && (c._since ? c._now.getTime() < c._since.getTime() : c._now.getTime() >= c._until.getTime()) && !c._expiring) {
                        if (c._expiring = !0, this._hasElem(b[0]) || c.options.alwaysExpire) {
                            if (this._removeElem(b[0]), a.isFunction(c.options.onExpiry) && c.options.onExpiry.apply(b[0], []), c.options.expiryText) {
                                var e = c.options.layout;
                                c.options.layout = c.options.expiryText, this._updateCountdown(b[0], c), c.options.layout = e
                            }
                            c.options.expiryUrl && (window.location = c.options.expiryUrl)
                        }
                        c._expiring = !1
                    } else "pause" == c._hold && this._removeElem(b[0])
                }
            },
            _resetExtraLabels: function(a, b) {
                for (var c in b) c.match(/[Ll]abels[02-9]|compactLabels1/) && (a[c] = b[c]);
                for (var c in a) c.match(/[Ll]abels[02-9]|compactLabels1/) && void 0 === b[c] && (a[c] = null)
            },
            _adjustSettings: function(b, c, d) {
                for (var e = null, f = 0; f < this._serverSyncs.length; f++)
                    if (this._serverSyncs[f][0] == c.options.serverSync) {
                        e = this._serverSyncs[f][1];
                        break
                    }
                if (null != e) var g = c.options.serverSync ? e : 0,
                    h = new Date;
                else {
                    var i = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(b[0], []) : null,
                        h = new Date,
                        g = i ? h.getTime() - i.getTime() : 0;
                    this._serverSyncs.push([c.options.serverSync, g])
                }
                var j = c.options.timezone;
                j = null == j ? -h.getTimezoneOffset() : j, (d || !d && null == c._until && null == c._since) && (c._since = c.options.since, null != c._since && (c._since = this.UTCDate(j, this._determineTime(c._since, null)), c._since && g && c._since.setMilliseconds(c._since.getMilliseconds() + g)), c._until = this.UTCDate(j, this._determineTime(c.options.until, h)), g && c._until.setMilliseconds(c._until.getMilliseconds() + g)), c._show = this._determineShow(c)
            },
            _preDestroy: function(a, b) {
                this._removeElem(a[0]), a.empty()
            },
            pause: function(a) {
                this._hold(a, "pause")
            },
            lap: function(a) {
                this._hold(a, "lap")
            },
            resume: function(a) {
                this._hold(a, null)
            },
            toggle: function(b) {
                this[(a.data(b, this.name) || {})._hold ? "resume" : "pause"](b)
            },
            toggleLap: function(b) {
                this[(a.data(b, this.name) || {})._hold ? "resume" : "lap"](b)
            },
            _hold: function(b, c) {
                var d = a.data(b, this.name);
                if (d) {
                    if ("pause" == d._hold && !c) {
                        d._periods = d._savePeriods;
                        var e = d._since ? "-" : "+";
                        d[d._since ? "_since" : "_until"] = this._determineTime(e + d._periods[0] + "y" + e + d._periods[1] + "o" + e + d._periods[2] + "w" + e + d._periods[3] + "d" + e + d._periods[4] + "h" + e + d._periods[5] + "m" + e + d._periods[6] + "s"), this._addElem(b)
                    }
                    d._hold = c, d._savePeriods = "pause" == c ? d._periods : null, a.data(b, this.name, d), this._updateCountdown(b, d)
                }
            },
            getTimes: function(b) {
                var c = a.data(b, this.name);
                return c ? "pause" == c._hold ? c._savePeriods : c._hold ? this._calculatePeriods(c, c._show, c.options.significant, new Date) : c._periods : null
            },
            _determineTime: function(a, b) {
                var c = this,
                    d = function(a) {
                        var b = new Date;
                        return b.setTime(b.getTime() + 1e3 * a), b
                    },
                    e = function(a) {
                        a = a.toLowerCase();
                        for (var b = new Date, d = b.getFullYear(), e = b.getMonth(), f = b.getDate(), g = b.getHours(), h = b.getMinutes(), i = b.getSeconds(), j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, k = j.exec(a); k;) {
                            switch (k[2] || "s") {
                                case "s":
                                    i += parseInt(k[1], 10);
                                    break;
                                case "m":
                                    h += parseInt(k[1], 10);
                                    break;
                                case "h":
                                    g += parseInt(k[1], 10);
                                    break;
                                case "d":
                                    f += parseInt(k[1], 10);
                                    break;
                                case "w":
                                    f += 7 * parseInt(k[1], 10);
                                    break;
                                case "o":
                                    e += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e));
                                    break;
                                case "y":
                                    d += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e))
                            }
                            k = j.exec(a)
                        }
                        return new Date(d, e, f, g, h, i, 0)
                    },
                    f = null == a ? b : "string" == typeof a ? e(a) : "number" == typeof a ? d(a) : a;
                return f && f.setMilliseconds(0), f
            },
            _getDaysInMonth: function(a, b) {
                return 32 - new Date(a, b, 32).getDate()
            },
            _normalLabels: function(a) {
                return a
            },
            _generateHTML: function(b) {
                var j = this;
                b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date);
                for (var k = !1, l = 0, m = b.options.significant, n = a.extend({}, b._show), o = c; o <= i; o++) k |= "?" == b._show[o] && b._periods[o] > 0, n[o] = "?" != b._show[o] || k ? b._show[o] : null, l += n[o] ? 1 : 0, m -= b._periods[o] > 0 ? 1 : 0;
                for (var p = [!1, !1, !1, !1, !1, !1, !1], o = i; o >= c; o--) b._show[o] && (b._periods[o] ? p[o] = !0 : (p[o] = m > 0, m--));
                var q = b.options.compact ? b.options.compactLabels : b.options.labels,
                    r = b.options.whichLabels || this._normalLabels,
                    s = function(a) {
                        var c = b.options["compactLabels" + r(b._periods[a])];
                        return n[a] ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " " : ""
                    },
                    t = b.options.padZeroes ? 2 : 1,
                    u = function(a) {
                        var c = b.options["labels" + r(b._periods[a])];
                        return !b.options.significant && n[a] || b.options.significant && p[a] ? '<span class="' + j._sectionClass + '"><span class="' + j._amountClass + '">' + j._minDigits(b, b._periods[a], t) + '</span><span class="' + j._periodClass + '">' + (c ? c[a] : q[a]) + "</span></span>" : ""
                    };
                return b.options.layout ? this._buildLayout(b, n, b.options.layout, b.options.compact, b.options.significant, p) : (b.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (b._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(d) + s(e) + s(f) + (n[g] ? this._minDigits(b, b._periods[g], 2) : "") + (n[h] ? (n[g] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[h], 2) : "") + (n[i] ? (n[g] || n[h] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (b.options.significant || l) + (b._hold ? " " + this._holdingClass : "") + '">' + u(c) + u(d) + u(e) + u(f) + u(g) + u(h) + u(i)) + "</span>" + (b.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + b.options.description + "</span>" : "")
            },
            _buildLayout: function(b, j, k, l, m, n) {
                for (var o = b.options[l ? "compactLabels" : "labels"], p = b.options.whichLabels || this._normalLabels, q = function(a) {
                        return (b.options[(l ? "compactLabels" : "labels") + p(b._periods[a])] || o)[a]
                    }, r = function(a, c) {
                        return b.options.digits[Math.floor(a / c) % 10]
                    }, s = {
                        desc: b.options.description,
                        sep: b.options.timeSeparator,
                        yl: q(c),
                        yn: this._minDigits(b, b._periods[c], 1),
                        ynn: this._minDigits(b, b._periods[c], 2),
                        ynnn: this._minDigits(b, b._periods[c], 3),
                        y1: r(b._periods[c], 1),
                        y10: r(b._periods[c], 10),
                        y100: r(b._periods[c], 100),
                        y1000: r(b._periods[c], 1e3),
                        ol: q(d),
                        on: this._minDigits(b, b._periods[d], 1),
                        onn: this._minDigits(b, b._periods[d], 2),
                        onnn: this._minDigits(b, b._periods[d], 3),
                        o1: r(b._periods[d], 1),
                        o10: r(b._periods[d], 10),
                        o100: r(b._periods[d], 100),
                        o1000: r(b._periods[d], 1e3),
                        wl: q(e),
                        wn: this._minDigits(b, b._periods[e], 1),
                        wnn: this._minDigits(b, b._periods[e], 2),
                        wnnn: this._minDigits(b, b._periods[e], 3),
                        w1: r(b._periods[e], 1),
                        w10: r(b._periods[e], 10),
                        w100: r(b._periods[e], 100),
                        w1000: r(b._periods[e], 1e3),
                        dl: q(f),
                        dn: this._minDigits(b, b._periods[f], 1),
                        dnn: this._minDigits(b, b._periods[f], 2),
                        dnnn: this._minDigits(b, b._periods[f], 3),
                        d1: r(b._periods[f], 1),
                        d10: r(b._periods[f], 10),
                        d100: r(b._periods[f], 100),
                        d1000: r(b._periods[f], 1e3),
                        hl: q(g),
                        hn: this._minDigits(b, b._periods[g], 1),
                        hnn: this._minDigits(b, b._periods[g], 2),
                        hnnn: this._minDigits(b, b._periods[g], 3),
                        h1: r(b._periods[g], 1),
                        h10: r(b._periods[g], 10),
                        h100: r(b._periods[g], 100),
                        h1000: r(b._periods[g], 1e3),
                        ml: q(h),
                        mn: this._minDigits(b, b._periods[h], 1),
                        mnn: this._minDigits(b, b._periods[h], 2),
                        mnnn: this._minDigits(b, b._periods[h], 3),
                        m1: r(b._periods[h], 1),
                        m10: r(b._periods[h], 10),
                        m100: r(b._periods[h], 100),
                        m1000: r(b._periods[h], 1e3),
                        sl: q(i),
                        sn: this._minDigits(b, b._periods[i], 1),
                        snn: this._minDigits(b, b._periods[i], 2),
                        snnn: this._minDigits(b, b._periods[i], 3),
                        s1: r(b._periods[i], 1),
                        s10: r(b._periods[i], 10),
                        s100: r(b._periods[i], 100),
                        s1000: r(b._periods[i], 1e3)
                    }, t = k, u = c; u <= i; u++) {
                    var v = "yowdhms".charAt(u),
                        w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}", "g");
                    t = t.replace(w, !m && j[u] || m && n[u] ? "$1" : "")
                }
                return a.each(s, function(a, b) {
                    var c = new RegExp("\\{" + a + "\\}", "g");
                    t = t.replace(c, b)
                }), t
            },
            _minDigits: function(a, b, c) {
                return b = "" + b, b.length >= c ? this._translateDigits(a, b) : (b = "0000000000" + b, this._translateDigits(a, b.substr(b.length - c)))
            },
            _translateDigits: function(a, b) {
                return ("" + b).replace(/[0-9]/g, function(b) {
                    return a.options.digits[b]
                })
            },
            _determineShow: function(a) {
                var b = a.options.format,
                    j = [];
                return j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null, j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null, j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null, j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null, j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null, j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null, j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null, j
            },
            _calculatePeriods: function(a, b, j, k) {
                a._now = k, a._now.setMilliseconds(0);
                var l = new Date(a._now.getTime());
                a._since ? k.getTime() < a._since.getTime() ? a._now = k = l : k = a._since : (l.setTime(a._until.getTime()), k.getTime() > a._until.getTime() && (a._now = k = l));
                var m = [0, 0, 0, 0, 0, 0, 0];
                if (b[c] || b[d]) {
                    var n = this._getDaysInMonth(k.getFullYear(), k.getMonth()),
                        o = this._getDaysInMonth(l.getFullYear(), l.getMonth()),
                        p = l.getDate() == k.getDate() || l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o),
                        q = function(a) {
                            return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds()
                        },
                        r = Math.max(0, 12 * (l.getFullYear() - k.getFullYear()) + l.getMonth() - k.getMonth() + (l.getDate() < k.getDate() && !p || p && q(l) < q(k) ? -1 : 0));
                    m[c] = b[c] ? Math.floor(r / 12) : 0, m[d] = b[d] ? r - 12 * m[c] : 0, k = new Date(k.getTime());
                    var s = k.getDate() == n,
                        t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
                    k.getDate() > t && k.setDate(t), k.setFullYear(k.getFullYear() + m[c]), k.setMonth(k.getMonth() + m[d]), s && k.setDate(t)
                }
                var u = Math.floor((l.getTime() - k.getTime()) / 1e3),
                    v = function(a, c) {
                        m[a] = b[a] ? Math.floor(u / c) : 0, u -= m[a] * c
                    };
                if (v(e, 604800), v(f, 86400), v(g, 3600), v(h, 60), v(i, 1), u > 0 && !a._since)
                    for (var w = [1, 12, 4.3482, 7, 24, 60, 60], x = i, y = 1, z = i; z >= c; z--) b[z] && (m[x] >= y && (m[x] = 0, u = 1), u > 0 && (m[z]++, u = 0, x = z, y = 1)), y *= w[z];
                if (j)
                    for (var z = c; z <= i; z++) j && m[z] ? j-- : j || (m[z] = 0);
                return m
            }
        })
    }(jQuery),
    function(a) {
        "use strict";
        var b = a(window),
            c = b.height();
        b.resize(function() {
            c = b.height()
        }), a.fn.parallax = function(d, e, f) {
            function g() {
                var f = b.scrollTop();
                j.each(function() {
                    var b = a(this),
                        g = b.offset().top;
                    g + h(b) < f || g > f + c || j.css("backgroundPosition", d + " " + Math.round((i - f) * e) + "px")
                })
            }
            var h, i, j = a(this);
            j.each(function() {
                i = j.offset().top
            }), h = f ? function(a) {
                return a.outerHeight(!0)
            } : function(a) {
                return a.height()
            }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === f) && (f = !0), b.bind("scroll", g).resize(g), g()
        }
    }(jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a) {
        var b = function() {
                if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
                var b;
                return function() {
                        if (!b || !b.requirejs) {
                            b ? c = b : b = {};
                            var a, c, d;
                            ! function(b) {
                                function e(a, b) {
                                    return u.call(a, b)
                                }

                                function f(a, b) {
                                    var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                                        o = s.map,
                                        p = o && o["*"] || {};
                                    if (a && "." === a.charAt(0))
                                        if (b) {
                                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                                                if ("." === (m = a[k])) a.splice(k, 1), k -= 1;
                                                else if (".." === m) {
                                                if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                                k > 0 && (a.splice(k - 1, 2), k -= 2)
                                            }
                                            a = a.join("/")
                                        } else 0 === a.indexOf("./") && (a = a.substring(2));
                                    if ((n || p) && o) {
                                        for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                            if (d = c.slice(0, k).join("/"), n)
                                                for (l = n.length; l > 0; l -= 1)
                                                    if ((e = o[n.slice(0, l).join("/")]) && (e = e[d])) {
                                                        f = e, h = k;
                                                        break
                                                    }
                                            if (f) break;
                                            !i && p && p[d] && (i = p[d], j = k)
                                        }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                                    }
                                    return a
                                }

                                function g(a, c) {
                                    return function() {
                                        var d = v.call(arguments, 0);
                                        return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                                    }
                                }

                                function h(a) {
                                    return function(b) {
                                        return f(b, a)
                                    }
                                }

                                function i(a) {
                                    return function(b) {
                                        q[a] = b
                                    }
                                }

                                function j(a) {
                                    if (e(r, a)) {
                                        var c = r[a];
                                        delete r[a], t[a] = !0, m.apply(b, c)
                                    }
                                    if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                                    return q[a]
                                }

                                function k(a) {
                                    var b, c = a ? a.indexOf("!") : -1;
                                    return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                                }

                                function l(a) {
                                    return function() {
                                        return s && s.config && s.config[a] || {}
                                    }
                                }
                                var m, n, o, p, q = {},
                                    r = {},
                                    s = {},
                                    t = {},
                                    u = Object.prototype.hasOwnProperty,
                                    v = [].slice,
                                    w = /\.js$/;
                                o = function(a, b) {
                                    var c, d = k(a),
                                        e = d[0];
                                    return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                                        f: e ? e + "!" + a : a,
                                        n: a,
                                        pr: e,
                                        p: c
                                    }
                                }, p = {
                                    require: function(a) {
                                        return g(a)
                                    },
                                    exports: function(a) {
                                        var b = q[a];
                                        return void 0 !== b ? b : q[a] = {}
                                    },
                                    module: function(a) {
                                        return {
                                            id: a,
                                            uri: "",
                                            exports: q[a],
                                            config: l(a)
                                        }
                                    }
                                }, m = function(a, c, d, f) {
                                    var h, k, l, m, n, s, u = [],
                                        v = typeof d;
                                    if (f = f || a, "undefined" === v || "function" === v) {
                                        for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                                            if (m = o(c[n], f), "require" === (k = m.f)) u[n] = p.require(a);
                                            else if ("exports" === k) u[n] = p.exports(a), s = !0;
                                        else if ("module" === k) h = u[n] = p.module(a);
                                        else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                                        else {
                                            if (!m.p) throw new Error(a + " missing " + k);
                                            m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                                        }
                                        l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                                    } else a && (q[a] = d)
                                }, a = c = n = function(a, c, d, e, f) {
                                    if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                                    if (!a.splice) {
                                        if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                                        c.splice ? (a = c, c = d, d = null) : a = b
                                    }
                                    return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() {
                                        m(b, a, c, d)
                                    }, 4), n
                                }, n.config = function(a) {
                                    return n(a)
                                }, a._defined = q, d = function(a, b, c) {
                                    if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                                    b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                                }, d.amd = {
                                    jQuery: !0
                                }
                            }(), b.requirejs = a, b.require = c, b.define = d
                        }
                    }(), b.define("almond", function() {}), b.define("jquery", [], function() {
                        var b = a || $;
                        return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
                    }), b.define("select2/utils", ["jquery"], function(a) {
                        function b(a) {
                            var b = a.prototype,
                                c = [];
                            for (var d in b) {
                                "function" == typeof b[d] && "constructor" !== d && c.push(d)
                            }
                            return c
                        }
                        var c = {};
                        c.Extend = function(a, b) {
                            function c() {
                                this.constructor = a
                            }
                            var d = {}.hasOwnProperty;
                            for (var e in b) d.call(b, e) && (a[e] = b[e]);
                            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                        }, c.Decorate = function(a, c) {
                            function d() {
                                var b = Array.prototype.unshift,
                                    d = c.prototype.constructor.length,
                                    e = a.prototype.constructor;
                                d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                            }

                            function e() {
                                this.constructor = d
                            }
                            var f = b(c),
                                g = b(a);
                            c.displayName = a.displayName, d.prototype = new e;
                            for (var h = 0; h < g.length; h++) {
                                var i = g[h];
                                d.prototype[i] = a.prototype[i]
                            }
                            for (var j = (function(a) {
                                    var b = function() {};
                                    a in d.prototype && (b = d.prototype[a]);
                                    var e = c.prototype[a];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments)
                                    }
                                }), k = 0; k < f.length; k++) {
                                var l = f[k];
                                d.prototype[l] = j(l)
                            }
                            return d
                        };
                        var d = function() {
                            this.listeners = {}
                        };
                        return d.prototype.on = function(a, b) {
                            this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
                        }, d.prototype.trigger = function(a) {
                            var b = Array.prototype.slice,
                                c = b.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, d.prototype.invoke = function(a, b) {
                            for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b)
                        }, c.Observable = d, c.generateChars = function(a) {
                            for (var b = "", c = 0; a > c; c++) {
                                b += Math.floor(36 * Math.random()).toString(36)
                            }
                            return b
                        }, c.bind = function(a, b) {
                            return function() {
                                a.apply(b, arguments)
                            }
                        }, c._convertData = function(a) {
                            for (var b in a) {
                                var c = b.split("-"),
                                    d = a;
                                if (1 !== c.length) {
                                    for (var e = 0; e < c.length; e++) {
                                        var f = c[e];
                                        f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                                    }
                                    delete a[b]
                                }
                            }
                            return a
                        }, c.hasScroll = function(b, c) {
                            var d = a(c),
                                e = c.style.overflowX,
                                f = c.style.overflowY;
                            return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth))
                        }, c.escapeMarkup = function(a) {
                            var b = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                                return b[a]
                            })
                        }, c.appendMany = function(b, c) {
                            if ("1.7" === a.fn.jquery.substr(0, 3)) {
                                var d = a();
                                a.map(c, function(a) {
                                    d = d.add(a)
                                }), c = d
                            }
                            b.append(c)
                        }, c
                    }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                        function c(a, b, d) {
                            this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
                        }
                        return b.Extend(c, b.Observable), c.prototype.render = function() {
                            var b = a('<ul class="select2-results__options" role="tree"></ul>');
                            return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
                        }, c.prototype.clear = function() {
                            this.$results.empty()
                        }, c.prototype.displayMessage = function(b) {
                            var c = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                e = this.options.get("translations").get(b.message);
                            d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
                        }, c.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }, c.prototype.append = function(a) {
                            this.hideLoading();
                            var b = [];
                            if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            }));
                            a.results = this.sort(a.results);
                            for (var c = 0; c < a.results.length; c++) {
                                var d = a.results[c],
                                    e = this.option(d);
                                b.push(e)
                            }
                            this.$results.append(b)
                        }, c.prototype.position = function(a, b) {
                            b.find(".select2-results").append(a)
                        }, c.prototype.sort = function(a) {
                            return this.options.get("sorter")(a)
                        }, c.prototype.highlightFirstItem = function() {
                            var a = this.$results.find(".select2-results__option[aria-selected]"),
                                b = a.filter("[aria-selected=true]");
                            b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
                        }, c.prototype.setClasses = function() {
                            var b = this;
                            this.data.current(function(c) {
                                var d = a.map(c, function(a) {
                                    return a.id.toString()
                                });
                                b.$results.find(".select2-results__option[aria-selected]").each(function() {
                                    var b = a(this),
                                        c = a.data(this, "data"),
                                        e = "" + c.id;
                                    null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                                })
                            })
                        }, c.prototype.showLoading = function(a) {
                            this.hideLoading();
                            var b = this.options.get("translations").get("searching"),
                                c = {
                                    disabled: !0,
                                    loading: !0,
                                    text: b(a)
                                },
                                d = this.option(c);
                            d.className += " loading-results", this.$results.prepend(d)
                        }, c.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }, c.prototype.option = function(b) {
                            var c = document.createElement("li");
                            c.className = "select2-results__option";
                            var d = {
                                role: "treeitem",
                                "aria-selected": "false"
                            };
                            b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                            for (var e in d) {
                                var f = d[e];
                                c.setAttribute(e, f)
                            }
                            if (b.children) {
                                var g = a(c),
                                    h = document.createElement("strong");
                                h.className = "select2-results__group", a(h), this.template(b, h);
                                for (var i = [], j = 0; j < b.children.length; j++) {
                                    var k = b.children[j],
                                        l = this.option(k);
                                    i.push(l)
                                }
                                var m = a("<ul></ul>", {
                                    class: "select2-results__options select2-results__options--nested"
                                });
                                m.append(i), g.append(h), g.append(m)
                            } else this.template(b, c);
                            return a.data(c, "data", b), c
                        }, c.prototype.bind = function(b, c) {
                            var d = this,
                                e = b.id + "-results";
                            this.$results.attr("id", e), b.on("results:all", function(a) {
                                d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                            }), b.on("results:append", function(a) {
                                d.append(a.data), b.isOpen() && d.setClasses()
                            }), b.on("query", function(a) {
                                d.hideMessages(), d.showLoading(a)
                            }), b.on("select", function() {
                                b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                            }), b.on("unselect", function() {
                                b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                            }), b.on("open", function() {
                                d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                            }), b.on("close", function() {
                                d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                            }), b.on("results:toggle", function() {
                                var a = d.getHighlightedResults();
                                0 !== a.length && a.trigger("mouseup")
                            }), b.on("results:select", function() {
                                var a = d.getHighlightedResults();
                                if (0 !== a.length) {
                                    var b = a.data("data");
                                    "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                                        data: b
                                    })
                                }
                            }), b.on("results:previous", function() {
                                var a = d.getHighlightedResults(),
                                    b = d.$results.find("[aria-selected]"),
                                    c = b.index(a);
                                if (0 !== c) {
                                    var e = c - 1;
                                    0 === a.length && (e = 0);
                                    var f = b.eq(e);
                                    f.trigger("mouseenter");
                                    var g = d.$results.offset().top,
                                        h = f.offset().top,
                                        i = d.$results.scrollTop() + (h - g);
                                    0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                                }
                            }), b.on("results:next", function() {
                                var a = d.getHighlightedResults(),
                                    b = d.$results.find("[aria-selected]"),
                                    c = b.index(a),
                                    e = c + 1;
                                if (!(e >= b.length)) {
                                    var f = b.eq(e);
                                    f.trigger("mouseenter");
                                    var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                        h = f.offset().top + f.outerHeight(!1),
                                        i = d.$results.scrollTop() + h - g;
                                    0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                                }
                            }), b.on("results:focus", function(a) {
                                a.element.addClass("select2-results__option--highlighted")
                            }), b.on("results:message", function(a) {
                                d.displayMessage(a)
                            }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                                var b = d.$results.scrollTop(),
                                    c = d.$results.get(0).scrollHeight - b + a.deltaY,
                                    e = a.deltaY > 0 && b - a.deltaY <= 0,
                                    f = a.deltaY < 0 && c <= d.$results.height();
                                e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                                var c = a(this),
                                    e = c.data("data");
                                return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {
                                    originalEvent: b,
                                    data: e
                                }) : d.trigger("close", {})) : void d.trigger("select", {
                                    originalEvent: b,
                                    data: e
                                })
                            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                                var c = a(this).data("data");
                                d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                                    data: c,
                                    element: a(this)
                                })
                            })
                        }, c.prototype.getHighlightedResults = function() {
                            return this.$results.find(".select2-results__option--highlighted")
                        }, c.prototype.destroy = function() {
                            this.$results.remove()
                        }, c.prototype.ensureHighlightVisible = function() {
                            var a = this.getHighlightedResults();
                            if (0 !== a.length) {
                                var b = this.$results.find("[aria-selected]"),
                                    c = b.index(a),
                                    d = this.$results.offset().top,
                                    e = a.offset().top,
                                    f = this.$results.scrollTop() + (e - d),
                                    g = e - d;
                                f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                            }
                        }, c.prototype.template = function(b, c) {
                            var d = this.options.get("templateResult"),
                                e = this.options.get("escapeMarkup"),
                                f = d(b, c);
                            null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                        }, c
                    }), b.define("select2/keys", [], function() {
                        return {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        }
                    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                        function d(a, b) {
                            this.$element = a, this.options = b, d.__super__.constructor.call(this)
                        }
                        return b.Extend(d, b.Observable), d.prototype.render = function() {
                            var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                        }, d.prototype.bind = function(a, b) {
                            var d = this,
                                e = (a.id, a.id + "-results");
                            this.container = a, this.$selection.on("focus", function(a) {
                                d.trigger("focus", a)
                            }), this.$selection.on("blur", function(a) {
                                d._handleBlur(a)
                            }), this.$selection.on("keydown", function(a) {
                                d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                            }), a.on("results:focus", function(a) {
                                d.$selection.attr("aria-activedescendant", a.data._resultId)
                            }), a.on("selection:update", function(a) {
                                d.update(a.data)
                            }), a.on("open", function() {
                                d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                            }), a.on("close", function() {
                                d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                            }), a.on("enable", function() {
                                d.$selection.attr("tabindex", d._tabindex)
                            }), a.on("disable", function() {
                                d.$selection.attr("tabindex", "-1")
                            })
                        }, d.prototype._handleBlur = function(b) {
                            var c = this;
                            window.setTimeout(function() {
                                document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                            }, 1)
                        }, d.prototype._attachCloseHandler = function(b) {
                            a(document.body).on("mousedown.select2." + b.id, function(b) {
                                var c = a(b.target),
                                    d = c.closest(".select2");
                                a(".select2.select2-container--open").each(function() {
                                    var b = a(this);
                                    this != d[0] && b.data("element").select2("close")
                                })
                            })
                        }, d.prototype._detachCloseHandler = function(b) {
                            a(document.body).off("mousedown.select2." + b.id)
                        }, d.prototype.position = function(a, b) {
                            b.find(".selection").append(a)
                        }, d.prototype.destroy = function() {
                            this._detachCloseHandler(this.container)
                        }, d.prototype.update = function(a) {
                            throw new Error("The `update` method must be defined in child classes.")
                        }, d
                    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                        function e() {
                            e.__super__.constructor.apply(this, arguments)
                        }
                        return c.Extend(e, b), e.prototype.render = function() {
                            var a = e.__super__.render.call(this);
                            return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                        }, e.prototype.bind = function(a, b) {
                            var c = this;
                            e.__super__.bind.apply(this, arguments);
                            var d = a.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                                1 === a.which && c.trigger("toggle", {
                                    originalEvent: a
                                })
                            }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) {
                                a.isOpen() || c.$selection.focus()
                            }), a.on("selection:update", function(a) {
                                c.update(a.data)
                            })
                        }, e.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, e.prototype.display = function(a, b) {
                            var c = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(c(a, b))
                        }, e.prototype.selectionContainer = function() {
                            return a("<span></span>")
                        }, e.prototype.update = function(a) {
                            if (0 === a.length) return void this.clear();
                            var b = a[0],
                                c = this.$selection.find(".select2-selection__rendered"),
                                d = this.display(b, c);
                            c.empty().append(d), c.prop("title", b.title || b.text)
                        }, e
                    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                        function d(a, b) {
                            d.__super__.constructor.apply(this, arguments)
                        }
                        return c.Extend(d, b), d.prototype.render = function() {
                            var a = d.__super__.render.call(this);
                            return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                        }, d.prototype.bind = function(b, c) {
                            var e = this;
                            d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                                e.trigger("toggle", {
                                    originalEvent: a
                                })
                            }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                                if (!e.options.get("disabled")) {
                                    var c = a(this),
                                        d = c.parent(),
                                        f = d.data("data");
                                    e.trigger("unselect", {
                                        originalEvent: b,
                                        data: f
                                    })
                                }
                            })
                        }, d.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, d.prototype.display = function(a, b) {
                            var c = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(c(a, b))
                        }, d.prototype.selectionContainer = function() {
                            return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                        }, d.prototype.update = function(a) {
                            if (this.clear(), 0 !== a.length) {
                                for (var b = [], d = 0; d < a.length; d++) {
                                    var e = a[d],
                                        f = this.selectionContainer(),
                                        g = this.display(e, f);
                                    f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                                }
                                var h = this.$selection.find(".select2-selection__rendered");
                                c.appendMany(h, b)
                            }
                        }, d
                    }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                        function b(a, b, c) {
                            this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
                        }
                        return b.prototype.normalizePlaceholder = function(a, b) {
                            return "string" == typeof b && (b = {
                                id: "",
                                text: b
                            }), b
                        }, b.prototype.createPlaceholder = function(a, b) {
                            var c = this.selectionContainer();
                            return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                        }, b.prototype.update = function(a, b) {
                            var c = 1 == b.length && b[0].id != this.placeholder.id;
                            if (b.length > 1 || c) return a.call(this, b);
                            this.clear();
                            var d = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(d)
                        }, b
                    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                        function c() {}
                        return c.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                                d._handleClear(a)
                            }), b.on("keypress", function(a) {
                                d._handleKeyboardClear(a, b)
                            })
                        }, c.prototype._handleClear = function(a, b) {
                            if (!this.options.get("disabled")) {
                                var c = this.$selection.find(".select2-selection__clear");
                                if (0 !== c.length) {
                                    b.stopPropagation();
                                    for (var d = c.data("data"), e = 0; e < d.length; e++) {
                                        var f = {
                                            data: d[e]
                                        };
                                        if (this.trigger("unselect", f), f.prevented) return
                                    }
                                    this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                                }
                            }
                        }, c.prototype._handleKeyboardClear = function(a, c, d) {
                            d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
                        }, c.prototype.update = function(b, c) {
                            if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                                var d = a('<span class="select2-selection__clear">&times;</span>');
                                d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                            }
                        }, c
                    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                        function d(a, b, c) {
                            a.call(this, b, c)
                        }
                        return d.prototype.render = function(b) {
                            var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = c, this.$search = c.find("input");
                            var d = b.call(this);
                            return this._transferTabIndex(), d
                        }, d.prototype.bind = function(a, b, d) {
                            var e = this;
                            a.call(this, b, d), b.on("open", function() {
                                e.$search.trigger("focus")
                            }), b.on("close", function() {
                                e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                            }), b.on("enable", function() {
                                e.$search.prop("disabled", !1), e._transferTabIndex()
                            }), b.on("disable", function() {
                                e.$search.prop("disabled", !0)
                            }), b.on("focus", function(a) {
                                e.$search.trigger("focus")
                            }), b.on("results:focus", function(a) {
                                e.$search.attr("aria-activedescendant", a.id)
                            }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                                e.trigger("focus", a)
                            }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                                e._handleBlur(a)
                            }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                                if (a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === e.$search.val()) {
                                    var b = e.$searchContainer.prev(".select2-selection__choice");
                                    if (b.length > 0) {
                                        var d = b.data("data");
                                        e.searchRemoveChoice(d), a.preventDefault()
                                    }
                                }
                            });
                            var f = document.documentMode,
                                g = f && 11 >= f;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                                return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                            }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                                if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                                var b = a.which;
                                b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                            })
                        }, d.prototype._transferTabIndex = function(a) {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                        }, d.prototype.createPlaceholder = function(a, b) {
                            this.$search.attr("placeholder", b.text)
                        }, d.prototype.update = function(a, b) {
                            var c = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
                        }, d.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var a = this.$search.val();
                                this.trigger("query", {
                                    term: a
                                })
                            }
                            this._keyUpPrevented = !1
                        }, d.prototype.searchRemoveChoice = function(a, b) {
                            this.trigger("unselect", {
                                data: b
                            }), this.$search.val(b.text), this.handleSearch()
                        }, d.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var a = "";
                            if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                            else {
                                a = .75 * (this.$search.val().length + 1) + "em"
                            }
                            this.$search.css("width", a)
                        }, d
                    }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                        function b() {}
                        return b.prototype.bind = function(b, c, d) {
                            var e = this,
                                f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                g = ["opening", "closing", "selecting", "unselecting"];
                            b.call(this, c, d), c.on("*", function(b, c) {
                                if (-1 !== a.inArray(b, f)) {
                                    c = c || {};
                                    var d = a.Event("select2:" + b, {
                                        params: c
                                    });
                                    e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                                }
                            })
                        }, b
                    }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                        function c(a) {
                            this.dict = a || {}
                        }
                        return c.prototype.all = function() {
                            return this.dict
                        }, c.prototype.get = function(a) {
                            return this.dict[a]
                        }, c.prototype.extend = function(b) {
                            this.dict = a.extend({}, b.all(), this.dict)
                        }, c._cache = {}, c.loadPath = function(a) {
                            if (!(a in c._cache)) {
                                var d = b(a);
                                c._cache[a] = d
                            }
                            return new c(c._cache[a])
                        }, c
                    }), b.define("select2/diacritics", [], function() {
                        return {
                            "Ⓐ": "A",
                            "Ａ": "A",
                            "À": "A",
                            "Á": "A",
                            "Â": "A",
                            "Ầ": "A",
                            "Ấ": "A",
                            "Ẫ": "A",
                            "Ẩ": "A",
                            "Ã": "A",
                            "Ā": "A",
                            "Ă": "A",
                            "Ằ": "A",
                            "Ắ": "A",
                            "Ẵ": "A",
                            "Ẳ": "A",
                            "Ȧ": "A",
                            "Ǡ": "A",
                            "Ä": "A",
                            "Ǟ": "A",
                            "Ả": "A",
                            "Å": "A",
                            "Ǻ": "A",
                            "Ǎ": "A",
                            "Ȁ": "A",
                            "Ȃ": "A",
                            "Ạ": "A",
                            "Ậ": "A",
                            "Ặ": "A",
                            "Ḁ": "A",
                            "Ą": "A",
                            "Ⱥ": "A",
                            "Ɐ": "A",
                            "Ꜳ": "AA",
                            "Æ": "AE",
                            "Ǽ": "AE",
                            "Ǣ": "AE",
                            "Ꜵ": "AO",
                            "Ꜷ": "AU",
                            "Ꜹ": "AV",
                            "Ꜻ": "AV",
                            "Ꜽ": "AY",
                            "Ⓑ": "B",
                            "Ｂ": "B",
                            "Ḃ": "B",
                            "Ḅ": "B",
                            "Ḇ": "B",
                            "Ƀ": "B",
                            "Ƃ": "B",
                            "Ɓ": "B",
                            "Ⓒ": "C",
                            "Ｃ": "C",
                            "Ć": "C",
                            "Ĉ": "C",
                            "Ċ": "C",
                            "Č": "C",
                            "Ç": "C",
                            "Ḉ": "C",
                            "Ƈ": "C",
                            "Ȼ": "C",
                            "Ꜿ": "C",
                            "Ⓓ": "D",
                            "Ｄ": "D",
                            "Ḋ": "D",
                            "Ď": "D",
                            "Ḍ": "D",
                            "Ḑ": "D",
                            "Ḓ": "D",
                            "Ḏ": "D",
                            "Đ": "D",
                            "Ƌ": "D",
                            "Ɗ": "D",
                            "Ɖ": "D",
                            "Ꝺ": "D",
                            "Ǳ": "DZ",
                            "Ǆ": "DZ",
                            "ǲ": "Dz",
                            "ǅ": "Dz",
                            "Ⓔ": "E",
                            "Ｅ": "E",
                            "È": "E",
                            "É": "E",
                            "Ê": "E",
                            "Ề": "E",
                            "Ế": "E",
                            "Ễ": "E",
                            "Ể": "E",
                            "Ẽ": "E",
                            "Ē": "E",
                            "Ḕ": "E",
                            "Ḗ": "E",
                            "Ĕ": "E",
                            "Ė": "E",
                            "Ë": "E",
                            "Ẻ": "E",
                            "Ě": "E",
                            "Ȅ": "E",
                            "Ȇ": "E",
                            "Ẹ": "E",
                            "Ệ": "E",
                            "Ȩ": "E",
                            "Ḝ": "E",
                            "Ę": "E",
                            "Ḙ": "E",
                            "Ḛ": "E",
                            "Ɛ": "E",
                            "Ǝ": "E",
                            "Ⓕ": "F",
                            "Ｆ": "F",
                            "Ḟ": "F",
                            "Ƒ": "F",
                            "Ꝼ": "F",
                            "Ⓖ": "G",
                            "Ｇ": "G",
                            "Ǵ": "G",
                            "Ĝ": "G",
                            "Ḡ": "G",
                            "Ğ": "G",
                            "Ġ": "G",
                            "Ǧ": "G",
                            "Ģ": "G",
                            "Ǥ": "G",
                            "Ɠ": "G",
                            "Ꞡ": "G",
                            "Ᵹ": "G",
                            "Ꝿ": "G",
                            "Ⓗ": "H",
                            "Ｈ": "H",
                            "Ĥ": "H",
                            "Ḣ": "H",
                            "Ḧ": "H",
                            "Ȟ": "H",
                            "Ḥ": "H",
                            "Ḩ": "H",
                            "Ḫ": "H",
                            "Ħ": "H",
                            "Ⱨ": "H",
                            "Ⱶ": "H",
                            "Ɥ": "H",
                            "Ⓘ": "I",
                            "Ｉ": "I",
                            "Ì": "I",
                            "Í": "I",
                            "Î": "I",
                            "Ĩ": "I",
                            "Ī": "I",
                            "Ĭ": "I",
                            "İ": "I",
                            "Ï": "I",
                            "Ḯ": "I",
                            "Ỉ": "I",
                            "Ǐ": "I",
                            "Ȉ": "I",
                            "Ȋ": "I",
                            "Ị": "I",
                            "Į": "I",
                            "Ḭ": "I",
                            "Ɨ": "I",
                            "Ⓙ": "J",
                            "Ｊ": "J",
                            "Ĵ": "J",
                            "Ɉ": "J",
                            "Ⓚ": "K",
                            "Ｋ": "K",
                            "Ḱ": "K",
                            "Ǩ": "K",
                            "Ḳ": "K",
                            "Ķ": "K",
                            "Ḵ": "K",
                            "Ƙ": "K",
                            "Ⱪ": "K",
                            "Ꝁ": "K",
                            "Ꝃ": "K",
                            "Ꝅ": "K",
                            "Ꞣ": "K",
                            "Ⓛ": "L",
                            "Ｌ": "L",
                            "Ŀ": "L",
                            "Ĺ": "L",
                            "Ľ": "L",
                            "Ḷ": "L",
                            "Ḹ": "L",
                            "Ļ": "L",
                            "Ḽ": "L",
                            "Ḻ": "L",
                            "Ł": "L",
                            "Ƚ": "L",
                            "Ɫ": "L",
                            "Ⱡ": "L",
                            "Ꝉ": "L",
                            "Ꝇ": "L",
                            "Ꞁ": "L",
                            "Ǉ": "LJ",
                            "ǈ": "Lj",
                            "Ⓜ": "M",
                            "Ｍ": "M",
                            "Ḿ": "M",
                            "Ṁ": "M",
                            "Ṃ": "M",
                            "Ɱ": "M",
                            "Ɯ": "M",
                            "Ⓝ": "N",
                            "Ｎ": "N",
                            "Ǹ": "N",
                            "Ń": "N",
                            "Ñ": "N",
                            "Ṅ": "N",
                            "Ň": "N",
                            "Ṇ": "N",
                            "Ņ": "N",
                            "Ṋ": "N",
                            "Ṉ": "N",
                            "Ƞ": "N",
                            "Ɲ": "N",
                            "Ꞑ": "N",
                            "Ꞥ": "N",
                            "Ǌ": "NJ",
                            "ǋ": "Nj",
                            "Ⓞ": "O",
                            "Ｏ": "O",
                            "Ò": "O",
                            "Ó": "O",
                            "Ô": "O",
                            "Ồ": "O",
                            "Ố": "O",
                            "Ỗ": "O",
                            "Ổ": "O",
                            "Õ": "O",
                            "Ṍ": "O",
                            "Ȭ": "O",
                            "Ṏ": "O",
                            "Ō": "O",
                            "Ṑ": "O",
                            "Ṓ": "O",
                            "Ŏ": "O",
                            "Ȯ": "O",
                            "Ȱ": "O",
                            "Ö": "O",
                            "Ȫ": "O",
                            "Ỏ": "O",
                            "Ő": "O",
                            "Ǒ": "O",
                            "Ȍ": "O",
                            "Ȏ": "O",
                            "Ơ": "O",
                            "Ờ": "O",
                            "Ớ": "O",
                            "Ỡ": "O",
                            "Ở": "O",
                            "Ợ": "O",
                            "Ọ": "O",
                            "Ộ": "O",
                            "Ǫ": "O",
                            "Ǭ": "O",
                            "Ø": "O",
                            "Ǿ": "O",
                            "Ɔ": "O",
                            "Ɵ": "O",
                            "Ꝋ": "O",
                            "Ꝍ": "O",
                            "Ƣ": "OI",
                            "Ꝏ": "OO",
                            "Ȣ": "OU",
                            "Ⓟ": "P",
                            "Ｐ": "P",
                            "Ṕ": "P",
                            "Ṗ": "P",
                            "Ƥ": "P",
                            "Ᵽ": "P",
                            "Ꝑ": "P",
                            "Ꝓ": "P",
                            "Ꝕ": "P",
                            "Ⓠ": "Q",
                            "Ｑ": "Q",
                            "Ꝗ": "Q",
                            "Ꝙ": "Q",
                            "Ɋ": "Q",
                            "Ⓡ": "R",
                            "Ｒ": "R",
                            "Ŕ": "R",
                            "Ṙ": "R",
                            "Ř": "R",
                            "Ȑ": "R",
                            "Ȓ": "R",
                            "Ṛ": "R",
                            "Ṝ": "R",
                            "Ŗ": "R",
                            "Ṟ": "R",
                            "Ɍ": "R",
                            "Ɽ": "R",
                            "Ꝛ": "R",
                            "Ꞧ": "R",
                            "Ꞃ": "R",
                            "Ⓢ": "S",
                            "Ｓ": "S",
                            "ẞ": "S",
                            "Ś": "S",
                            "Ṥ": "S",
                            "Ŝ": "S",
                            "Ṡ": "S",
                            "Š": "S",
                            "Ṧ": "S",
                            "Ṣ": "S",
                            "Ṩ": "S",
                            "Ș": "S",
                            "Ş": "S",
                            "Ȿ": "S",
                            "Ꞩ": "S",
                            "Ꞅ": "S",
                            "Ⓣ": "T",
                            "Ｔ": "T",
                            "Ṫ": "T",
                            "Ť": "T",
                            "Ṭ": "T",
                            "Ț": "T",
                            "Ţ": "T",
                            "Ṱ": "T",
                            "Ṯ": "T",
                            "Ŧ": "T",
                            "Ƭ": "T",
                            "Ʈ": "T",
                            "Ⱦ": "T",
                            "Ꞇ": "T",
                            "Ꜩ": "TZ",
                            "Ⓤ": "U",
                            "Ｕ": "U",
                            "Ù": "U",
                            "Ú": "U",
                            "Û": "U",
                            "Ũ": "U",
                            "Ṹ": "U",
                            "Ū": "U",
                            "Ṻ": "U",
                            "Ŭ": "U",
                            "Ü": "U",
                            "Ǜ": "U",
                            "Ǘ": "U",
                            "Ǖ": "U",
                            "Ǚ": "U",
                            "Ủ": "U",
                            "Ů": "U",
                            "Ű": "U",
                            "Ǔ": "U",
                            "Ȕ": "U",
                            "Ȗ": "U",
                            "Ư": "U",
                            "Ừ": "U",
                            "Ứ": "U",
                            "Ữ": "U",
                            "Ử": "U",
                            "Ự": "U",
                            "Ụ": "U",
                            "Ṳ": "U",
                            "Ų": "U",
                            "Ṷ": "U",
                            "Ṵ": "U",
                            "Ʉ": "U",
                            "Ⓥ": "V",
                            "Ｖ": "V",
                            "Ṽ": "V",
                            "Ṿ": "V",
                            "Ʋ": "V",
                            "Ꝟ": "V",
                            "Ʌ": "V",
                            "Ꝡ": "VY",
                            "Ⓦ": "W",
                            "Ｗ": "W",
                            "Ẁ": "W",
                            "Ẃ": "W",
                            "Ŵ": "W",
                            "Ẇ": "W",
                            "Ẅ": "W",
                            "Ẉ": "W",
                            "Ⱳ": "W",
                            "Ⓧ": "X",
                            "Ｘ": "X",
                            "Ẋ": "X",
                            "Ẍ": "X",
                            "Ⓨ": "Y",
                            "Ｙ": "Y",
                            "Ỳ": "Y",
                            "Ý": "Y",
                            "Ŷ": "Y",
                            "Ỹ": "Y",
                            "Ȳ": "Y",
                            "Ẏ": "Y",
                            "Ÿ": "Y",
                            "Ỷ": "Y",
                            "Ỵ": "Y",
                            "Ƴ": "Y",
                            "Ɏ": "Y",
                            "Ỿ": "Y",
                            "Ⓩ": "Z",
                            "Ｚ": "Z",
                            "Ź": "Z",
                            "Ẑ": "Z",
                            "Ż": "Z",
                            "Ž": "Z",
                            "Ẓ": "Z",
                            "Ẕ": "Z",
                            "Ƶ": "Z",
                            "Ȥ": "Z",
                            "Ɀ": "Z",
                            "Ⱬ": "Z",
                            "Ꝣ": "Z",
                            "ⓐ": "a",
                            "ａ": "a",
                            "ẚ": "a",
                            "à": "a",
                            "á": "a",
                            "â": "a",
                            "ầ": "a",
                            "ấ": "a",
                            "ẫ": "a",
                            "ẩ": "a",
                            "ã": "a",
                            "ā": "a",
                            "ă": "a",
                            "ằ": "a",
                            "ắ": "a",
                            "ẵ": "a",
                            "ẳ": "a",
                            "ȧ": "a",
                            "ǡ": "a",
                            "ä": "a",
                            "ǟ": "a",
                            "ả": "a",
                            "å": "a",
                            "ǻ": "a",
                            "ǎ": "a",
                            "ȁ": "a",
                            "ȃ": "a",
                            "ạ": "a",
                            "ậ": "a",
                            "ặ": "a",
                            "ḁ": "a",
                            "ą": "a",
                            "ⱥ": "a",
                            "ɐ": "a",
                            "ꜳ": "aa",
                            "æ": "ae",
                            "ǽ": "ae",
                            "ǣ": "ae",
                            "ꜵ": "ao",
                            "ꜷ": "au",
                            "ꜹ": "av",
                            "ꜻ": "av",
                            "ꜽ": "ay",
                            "ⓑ": "b",
                            "ｂ": "b",
                            "ḃ": "b",
                            "ḅ": "b",
                            "ḇ": "b",
                            "ƀ": "b",
                            "ƃ": "b",
                            "ɓ": "b",
                            "ⓒ": "c",
                            "ｃ": "c",
                            "ć": "c",
                            "ĉ": "c",
                            "ċ": "c",
                            "č": "c",
                            "ç": "c",
                            "ḉ": "c",
                            "ƈ": "c",
                            "ȼ": "c",
                            "ꜿ": "c",
                            "ↄ": "c",
                            "ⓓ": "d",
                            "ｄ": "d",
                            "ḋ": "d",
                            "ď": "d",
                            "ḍ": "d",
                            "ḑ": "d",
                            "ḓ": "d",
                            "ḏ": "d",
                            "đ": "d",
                            "ƌ": "d",
                            "ɖ": "d",
                            "ɗ": "d",
                            "ꝺ": "d",
                            "ǳ": "dz",
                            "ǆ": "dz",
                            "ⓔ": "e",
                            "ｅ": "e",
                            "è": "e",
                            "é": "e",
                            "ê": "e",
                            "ề": "e",
                            "ế": "e",
                            "ễ": "e",
                            "ể": "e",
                            "ẽ": "e",
                            "ē": "e",
                            "ḕ": "e",
                            "ḗ": "e",
                            "ĕ": "e",
                            "ė": "e",
                            "ë": "e",
                            "ẻ": "e",
                            "ě": "e",
                            "ȅ": "e",
                            "ȇ": "e",
                            "ẹ": "e",
                            "ệ": "e",
                            "ȩ": "e",
                            "ḝ": "e",
                            "ę": "e",
                            "ḙ": "e",
                            "ḛ": "e",
                            "ɇ": "e",
                            "ɛ": "e",
                            "ǝ": "e",
                            "ⓕ": "f",
                            "ｆ": "f",
                            "ḟ": "f",
                            "ƒ": "f",
                            "ꝼ": "f",
                            "ⓖ": "g",
                            "ｇ": "g",
                            "ǵ": "g",
                            "ĝ": "g",
                            "ḡ": "g",
                            "ğ": "g",
                            "ġ": "g",
                            "ǧ": "g",
                            "ģ": "g",
                            "ǥ": "g",
                            "ɠ": "g",
                            "ꞡ": "g",
                            "ᵹ": "g",
                            "ꝿ": "g",
                            "ⓗ": "h",
                            "ｈ": "h",
                            "ĥ": "h",
                            "ḣ": "h",
                            "ḧ": "h",
                            "ȟ": "h",
                            "ḥ": "h",
                            "ḩ": "h",
                            "ḫ": "h",
                            "ẖ": "h",
                            "ħ": "h",
                            "ⱨ": "h",
                            "ⱶ": "h",
                            "ɥ": "h",
                            "ƕ": "hv",
                            "ⓘ": "i",
                            "ｉ": "i",
                            "ì": "i",
                            "í": "i",
                            "î": "i",
                            "ĩ": "i",
                            "ī": "i",
                            "ĭ": "i",
                            "ï": "i",
                            "ḯ": "i",
                            "ỉ": "i",
                            "ǐ": "i",
                            "ȉ": "i",
                            "ȋ": "i",
                            "ị": "i",
                            "į": "i",
                            "ḭ": "i",
                            "ɨ": "i",
                            "ı": "i",
                            "ⓙ": "j",
                            "ｊ": "j",
                            "ĵ": "j",
                            "ǰ": "j",
                            "ɉ": "j",
                            "ⓚ": "k",
                            "ｋ": "k",
                            "ḱ": "k",
                            "ǩ": "k",
                            "ḳ": "k",
                            "ķ": "k",
                            "ḵ": "k",
                            "ƙ": "k",
                            "ⱪ": "k",
                            "ꝁ": "k",
                            "ꝃ": "k",
                            "ꝅ": "k",
                            "ꞣ": "k",
                            "ⓛ": "l",
                            "ｌ": "l",
                            "ŀ": "l",
                            "ĺ": "l",
                            "ľ": "l",
                            "ḷ": "l",
                            "ḹ": "l",
                            "ļ": "l",
                            "ḽ": "l",
                            "ḻ": "l",
                            "ſ": "l",
                            "ł": "l",
                            "ƚ": "l",
                            "ɫ": "l",
                            "ⱡ": "l",
                            "ꝉ": "l",
                            "ꞁ": "l",
                            "ꝇ": "l",
                            "ǉ": "lj",
                            "ⓜ": "m",
                            "ｍ": "m",
                            "ḿ": "m",
                            "ṁ": "m",
                            "ṃ": "m",
                            "ɱ": "m",
                            "ɯ": "m",
                            "ⓝ": "n",
                            "ｎ": "n",
                            "ǹ": "n",
                            "ń": "n",
                            "ñ": "n",
                            "ṅ": "n",
                            "ň": "n",
                            "ṇ": "n",
                            "ņ": "n",
                            "ṋ": "n",
                            "ṉ": "n",
                            "ƞ": "n",
                            "ɲ": "n",
                            "ŉ": "n",
                            "ꞑ": "n",
                            "ꞥ": "n",
                            "ǌ": "nj",
                            "ⓞ": "o",
                            "ｏ": "o",
                            "ò": "o",
                            "ó": "o",
                            "ô": "o",
                            "ồ": "o",
                            "ố": "o",
                            "ỗ": "o",
                            "ổ": "o",
                            "õ": "o",
                            "ṍ": "o",
                            "ȭ": "o",
                            "ṏ": "o",
                            "ō": "o",
                            "ṑ": "o",
                            "ṓ": "o",
                            "ŏ": "o",
                            "ȯ": "o",
                            "ȱ": "o",
                            "ö": "o",
                            "ȫ": "o",
                            "ỏ": "o",
                            "ő": "o",
                            "ǒ": "o",
                            "ȍ": "o",
                            "ȏ": "o",
                            "ơ": "o",
                            "ờ": "o",
                            "ớ": "o",
                            "ỡ": "o",
                            "ở": "o",
                            "ợ": "o",
                            "ọ": "o",
                            "ộ": "o",
                            "ǫ": "o",
                            "ǭ": "o",
                            "ø": "o",
                            "ǿ": "o",
                            "ɔ": "o",
                            "ꝋ": "o",
                            "ꝍ": "o",
                            "ɵ": "o",
                            "ƣ": "oi",
                            "ȣ": "ou",
                            "ꝏ": "oo",
                            "ⓟ": "p",
                            "ｐ": "p",
                            "ṕ": "p",
                            "ṗ": "p",
                            "ƥ": "p",
                            "ᵽ": "p",
                            "ꝑ": "p",
                            "ꝓ": "p",
                            "ꝕ": "p",
                            "ⓠ": "q",
                            "ｑ": "q",
                            "ɋ": "q",
                            "ꝗ": "q",
                            "ꝙ": "q",
                            "ⓡ": "r",
                            "ｒ": "r",
                            "ŕ": "r",
                            "ṙ": "r",
                            "ř": "r",
                            "ȑ": "r",
                            "ȓ": "r",
                            "ṛ": "r",
                            "ṝ": "r",
                            "ŗ": "r",
                            "ṟ": "r",
                            "ɍ": "r",
                            "ɽ": "r",
                            "ꝛ": "r",
                            "ꞧ": "r",
                            "ꞃ": "r",
                            "ⓢ": "s",
                            "ｓ": "s",
                            "ß": "s",
                            "ś": "s",
                            "ṥ": "s",
                            "ŝ": "s",
                            "ṡ": "s",
                            "š": "s",
                            "ṧ": "s",
                            "ṣ": "s",
                            "ṩ": "s",
                            "ș": "s",
                            "ş": "s",
                            "ȿ": "s",
                            "ꞩ": "s",
                            "ꞅ": "s",
                            "ẛ": "s",
                            "ⓣ": "t",
                            "ｔ": "t",
                            "ṫ": "t",
                            "ẗ": "t",
                            "ť": "t",
                            "ṭ": "t",
                            "ț": "t",
                            "ţ": "t",
                            "ṱ": "t",
                            "ṯ": "t",
                            "ŧ": "t",
                            "ƭ": "t",
                            "ʈ": "t",
                            "ⱦ": "t",
                            "ꞇ": "t",
                            "ꜩ": "tz",
                            "ⓤ": "u",
                            "ｕ": "u",
                            "ù": "u",
                            "ú": "u",
                            "û": "u",
                            "ũ": "u",
                            "ṹ": "u",
                            "ū": "u",
                            "ṻ": "u",
                            "ŭ": "u",
                            "ü": "u",
                            "ǜ": "u",
                            "ǘ": "u",
                            "ǖ": "u",
                            "ǚ": "u",
                            "ủ": "u",
                            "ů": "u",
                            "ű": "u",
                            "ǔ": "u",
                            "ȕ": "u",
                            "ȗ": "u",
                            "ư": "u",
                            "ừ": "u",
                            "ứ": "u",
                            "ữ": "u",
                            "ử": "u",
                            "ự": "u",
                            "ụ": "u",
                            "ṳ": "u",
                            "ų": "u",
                            "ṷ": "u",
                            "ṵ": "u",
                            "ʉ": "u",
                            "ⓥ": "v",
                            "ｖ": "v",
                            "ṽ": "v",
                            "ṿ": "v",
                            "ʋ": "v",
                            "ꝟ": "v",
                            "ʌ": "v",
                            "ꝡ": "vy",
                            "ⓦ": "w",
                            "ｗ": "w",
                            "ẁ": "w",
                            "ẃ": "w",
                            "ŵ": "w",
                            "ẇ": "w",
                            "ẅ": "w",
                            "ẘ": "w",
                            "ẉ": "w",
                            "ⱳ": "w",
                            "ⓧ": "x",
                            "ｘ": "x",
                            "ẋ": "x",
                            "ẍ": "x",
                            "ⓨ": "y",
                            "ｙ": "y",
                            "ỳ": "y",
                            "ý": "y",
                            "ŷ": "y",
                            "ỹ": "y",
                            "ȳ": "y",
                            "ẏ": "y",
                            "ÿ": "y",
                            "ỷ": "y",
                            "ẙ": "y",
                            "ỵ": "y",
                            "ƴ": "y",
                            "ɏ": "y",
                            "ỿ": "y",
                            "ⓩ": "z",
                            "ｚ": "z",
                            "ź": "z",
                            "ẑ": "z",
                            "ż": "z",
                            "ž": "z",
                            "ẓ": "z",
                            "ẕ": "z",
                            "ƶ": "z",
                            "ȥ": "z",
                            "ɀ": "z",
                            "ⱬ": "z",
                            "ꝣ": "z",
                            "Ά": "Α",
                            "Έ": "Ε",
                            "Ή": "Η",
                            "Ί": "Ι",
                            "Ϊ": "Ι",
                            "Ό": "Ο",
                            "Ύ": "Υ",
                            "Ϋ": "Υ",
                            "Ώ": "Ω",
                            "ά": "α",
                            "έ": "ε",
                            "ή": "η",
                            "ί": "ι",
                            "ϊ": "ι",
                            "ΐ": "ι",
                            "ό": "ο",
                            "ύ": "υ",
                            "ϋ": "υ",
                            "ΰ": "υ",
                            "ω": "ω",
                            "ς": "σ"
                        }
                    }), b.define("select2/data/base", ["../utils"], function(a) {
                        function b(a, c) {
                            b.__super__.constructor.call(this)
                        }
                        return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                            throw new Error("The `current` method must be defined in child classes.")
                        }, b.prototype.query = function(a, b) {
                            throw new Error("The `query` method must be defined in child classes.")
                        }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                            var d = b.id + "-result-";
                            return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
                        }, b
                    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) {
                            this.$element = a, this.options = b, d.__super__.constructor.call(this)
                        }
                        return b.Extend(d, a), d.prototype.current = function(a) {
                            var b = [],
                                d = this;
                            this.$element.find(":selected").each(function() {
                                var a = c(this),
                                    e = d.item(a);
                                b.push(e)
                            }), a(b)
                        }, d.prototype.select = function(a) {
                            var b = this;
                            if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                            if (this.$element.prop("multiple")) this.current(function(d) {
                                var e = [];
                                a = [a], a.push.apply(a, d);
                                for (var f = 0; f < a.length; f++) {
                                    var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                                }
                                b.$element.val(e), b.$element.trigger("change")
                            });
                            else {
                                var d = a.id;
                                this.$element.val(d), this.$element.trigger("change")
                            }
                        }, d.prototype.unselect = function(a) {
                            var b = this;
                            if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) {
                                for (var e = [], f = 0; f < d.length; f++) {
                                    var g = d[f].id;
                                    g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                                }
                                b.$element.val(e), b.$element.trigger("change")
                            })
                        }, d.prototype.bind = function(a, b) {
                            var c = this;
                            this.container = a, a.on("select", function(a) {
                                c.select(a.data)
                            }), a.on("unselect", function(a) {
                                c.unselect(a.data)
                            })
                        }, d.prototype.destroy = function() {
                            this.$element.find("*").each(function() {
                                c.removeData(this, "data")
                            })
                        }, d.prototype.query = function(a, b) {
                            var d = [],
                                e = this;
                            this.$element.children().each(function() {
                                var b = c(this);
                                if (b.is("option") || b.is("optgroup")) {
                                    var f = e.item(b),
                                        g = e.matches(a, f);
                                    null !== g && d.push(g)
                                }
                            }), b({
                                results: d
                            })
                        }, d.prototype.addOptions = function(a) {
                            b.appendMany(this.$element, a)
                        }, d.prototype.option = function(a) {
                            var b;
                            a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                            var d = c(b),
                                e = this._normalizeItem(a);
                            return e.element = b, c.data(b, "data", e), d
                        }, d.prototype.item = function(a) {
                            var b = {};
                            if (null != (b = c.data(a[0], "data"))) return b;
                            if (a.is("option")) b = {
                                id: a.val(),
                                text: a.text(),
                                disabled: a.prop("disabled"),
                                selected: a.prop("selected"),
                                title: a.prop("title")
                            };
                            else if (a.is("optgroup")) {
                                b = {
                                    text: a.prop("label"),
                                    children: [],
                                    title: a.prop("title")
                                };
                                for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                                    var g = c(d[f]),
                                        h = this.item(g);
                                    e.push(h)
                                }
                                b.children = e
                            }
                            return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                        }, d.prototype._normalizeItem = function(a) {
                            c.isPlainObject(a) || (a = {
                                id: a,
                                text: a
                            }), a = c.extend({}, {
                                text: ""
                            }, a);
                            var b = {
                                selected: !1,
                                disabled: !1
                            };
                            return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
                        }, d.prototype.matches = function(a, b) {
                            return this.options.get("matcher")(a, b)
                        }, d
                    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) {
                            var c = b.get("data") || [];
                            d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                        }
                        return b.Extend(d, a), d.prototype.select = function(a) {
                            var b = this.$element.find("option").filter(function(b, c) {
                                return c.value == a.id.toString()
                            });
                            0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                        }, d.prototype.convertToOptions = function(a) {
                            function d(a) {
                                return function() {
                                    return c(this).val() == a.id
                                }
                            }
                            for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                                    return e.item(c(this)).id
                                }).get(), h = [], i = 0; i < a.length; i++) {
                                var j = this._normalizeItem(a[i]);
                                if (c.inArray(j.id, g) >= 0) {
                                    var k = f.filter(d(j)),
                                        l = this.item(k),
                                        m = c.extend(!0, {}, j, l),
                                        n = this.option(m);
                                    k.replaceWith(n)
                                } else {
                                    var o = this.option(j);
                                    if (j.children) {
                                        var p = this.convertToOptions(j.children);
                                        b.appendMany(o, p)
                                    }
                                    h.push(o)
                                }
                            }
                            return h
                        }, d
                    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) {
                            this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
                        }
                        return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                            var b = {
                                data: function(a) {
                                    return c.extend({}, a, {
                                        q: a.term
                                    })
                                },
                                transport: function(a, b, d) {
                                    var e = c.ajax(a);
                                    return e.then(b), e.fail(d), e
                                }
                            };
                            return c.extend({}, b, a, !0)
                        }, d.prototype.processResults = function(a) {
                            return a
                        }, d.prototype.query = function(a, b) {
                            function d() {
                                var d = f.transport(f, function(d) {
                                    var f = e.processResults(d, a);
                                    e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                                }, function() {
                                    d.status && "0" === d.status || e.trigger("results:message", {
                                        message: "errorLoading"
                                    })
                                });
                                e._request = d
                            }
                            var e = this;
                            null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var f = c.extend({
                                type: "GET"
                            }, this.ajaxOptions);
                            "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                        }, d
                    }), b.define("select2/data/tags", ["jquery"], function(a) {
                        function b(b, c, d) {
                            var e = d.get("tags"),
                                f = d.get("createTag");
                            void 0 !== f && (this.createTag = f);
                            var g = d.get("insertTag");
                            if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                                for (var h = 0; h < e.length; h++) {
                                    var i = e[h],
                                        j = this._normalizeItem(i),
                                        k = this.option(j);
                                    this.$element.append(k)
                                }
                        }
                        return b.prototype.query = function(a, b, c) {
                            function d(a, f) {
                                for (var g = a.results, h = 0; h < g.length; h++) {
                                    var i = g[h],
                                        j = null != i.children && !d({
                                            results: i.children
                                        }, !0);
                                    if (i.text === b.term || j) return !f && (a.data = g, void c(a))
                                }
                                if (f) return !0;
                                var k = e.createTag(b);
                                if (null != k) {
                                    var l = e.option(k);
                                    l.attr("data-select2-tag", !0), e.addOptions([l]), e.insertTag(g, k)
                                }
                                a.results = g, c(a)
                            }
                            var e = this;
                            return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
                        }, b.prototype.createTag = function(b, c) {
                            var d = a.trim(c.term);
                            return "" === d ? null : {
                                id: d,
                                text: d
                            }
                        }, b.prototype.insertTag = function(a, b, c) {
                            b.unshift(c)
                        }, b.prototype._removeOldTags = function(b) {
                            (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function() {
                                this.selected || a(this).remove()
                            })
                        }, b
                    }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                        function b(a, b, c) {
                            var d = c.get("tokenizer");
                            void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                        }
                        return b.prototype.bind = function(a, b, c) {
                            a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                        }, b.prototype.query = function(b, c, d) {
                            function e(b) {
                                var c = g._normalizeItem(b);
                                if (!g.$element.find("option").filter(function() {
                                        return a(this).val() === c.id
                                    }).length) {
                                    var d = g.option(c);
                                    d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([d])
                                }
                                f(c)
                            }

                            function f(a) {
                                g.trigger("select", {
                                    data: a
                                })
                            }
                            var g = this;
                            c.term = c.term || "";
                            var h = this.tokenizer(c, this.options, e);
                            h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
                        }, b.prototype.tokenizer = function(b, c, d, e) {
                            for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                                    return {
                                        id: a.term,
                                        text: a.term
                                    }
                                }; h < g.length;) {
                                var j = g[h];
                                if (-1 !== a.inArray(j, f)) {
                                    var k = g.substr(0, h),
                                        l = a.extend({}, c, {
                                            term: k
                                        }),
                                        m = i(l);
                                    null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                                } else h++
                            }
                            return {
                                term: g
                            }
                        }, b
                    }), b.define("select2/data/minimumInputLength", [], function() {
                        function a(a, b, c) {
                            this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: b.term,
                                    params: b
                                }
                            }) : void a.call(this, b, c)
                        }, a
                    }), b.define("select2/data/maximumInputLength", [], function() {
                        function a(a, b, c) {
                            this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: b.term,
                                    params: b
                                }
                            }) : void a.call(this, b, c)
                        }, a
                    }), b.define("select2/data/maximumSelectionLength", [], function() {
                        function a(a, b, c) {
                            this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            var d = this;
                            this.current(function(e) {
                                var f = null != e ? e.length : 0;
                                return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: d.maximumSelectionLength
                                    }
                                }) : void a.call(d, b, c)
                            })
                        }, a
                    }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                        function c(a, b) {
                            this.$element = a, this.options = b, c.__super__.constructor.call(this)
                        }
                        return b.Extend(c, b.Observable), c.prototype.render = function() {
                            var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                        }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                            this.$dropdown.remove()
                        }, c
                    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                        function c() {}
                        return c.prototype.render = function(b) {
                            var c = b.call(this),
                                d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                            return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                        }, c.prototype.bind = function(b, c, d) {
                            var e = this;
                            b.call(this, c, d), this.$search.on("keydown", function(a) {
                                e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                            }), this.$search.on("input", function(b) {
                                a(this).off("keyup")
                            }), this.$search.on("keyup input", function(a) {
                                e.handleSearch(a)
                            }), c.on("open", function() {
                                e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                                    e.$search.focus()
                                }, 0)
                            }), c.on("close", function() {
                                e.$search.attr("tabindex", -1), e.$search.val("")
                            }), c.on("focus", function() {
                                c.isOpen() && e.$search.focus()
                            }), c.on("results:all", function(a) {
                                if (null == a.query.term || "" === a.query.term) {
                                    e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                                }
                            })
                        }, c.prototype.handleSearch = function(a) {
                            if (!this._keyUpPrevented) {
                                var b = this.$search.val();
                                this.trigger("query", {
                                    term: b
                                })
                            }
                            this._keyUpPrevented = !1
                        }, c.prototype.showSearch = function(a, b) {
                            return !0
                        }, c
                    }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                        function a(a, b, c, d) {
                            this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
                        }
                        return a.prototype.append = function(a, b) {
                            b.results = this.removePlaceholder(b.results), a.call(this, b)
                        }, a.prototype.normalizePlaceholder = function(a, b) {
                            return "string" == typeof b && (b = {
                                id: "",
                                text: b
                            }), b
                        }, a.prototype.removePlaceholder = function(a, b) {
                            for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                                var e = b[d];
                                this.placeholder.id === e.id && c.splice(d, 1)
                            }
                            return c
                        }, a
                    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                        function b(a, b, c, d) {
                            this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                        }
                        return b.prototype.append = function(a, b) {
                            this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                        }, b.prototype.bind = function(b, c, d) {
                            var e = this;
                            b.call(this, c, d), c.on("query", function(a) {
                                e.lastParams = a, e.loading = !0
                            }), c.on("query:append", function(a) {
                                e.lastParams = a, e.loading = !0
                            }), this.$results.on("scroll", function() {
                                var b = a.contains(document.documentElement, e.$loadingMore[0]);
                                if (!e.loading && b) {
                                    e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore()
                                }
                            })
                        }, b.prototype.loadMore = function() {
                            this.loading = !0;
                            var b = a.extend({}, {
                                page: 1
                            }, this.lastParams);
                            b.page++, this.trigger("query:append", b)
                        }, b.prototype.showLoadingMore = function(a, b) {
                            return b.pagination && b.pagination.more
                        }, b.prototype.createLoadingMore = function() {
                            var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                c = this.options.get("translations").get("loadingMore");
                            return b.html(c(this.lastParams)), b
                        }, b
                    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                        function c(b, c, d) {
                            this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
                        }
                        return c.prototype.bind = function(a, b, c) {
                            var d = this,
                                e = !1;
                            a.call(this, b, c), b.on("open", function() {
                                d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                                    d._positionDropdown(), d._resizeDropdown()
                                }), b.on("results:append", function() {
                                    d._positionDropdown(), d._resizeDropdown()
                                }))
                            }), b.on("close", function() {
                                d._hideDropdown(), d._detachPositioningHandler(b)
                            }), this.$dropdownContainer.on("mousedown", function(a) {
                                a.stopPropagation()
                            })
                        }, c.prototype.destroy = function(a) {
                            a.call(this), this.$dropdownContainer.remove()
                        }, c.prototype.position = function(a, b, c) {
                            b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                                position: "absolute",
                                top: -999999
                            }), this.$container = c
                        }, c.prototype.render = function(b) {
                            var c = a("<span></span>"),
                                d = b.call(this);
                            return c.append(d), this.$dropdownContainer = c, c
                        }, c.prototype._hideDropdown = function(a) {
                            this.$dropdownContainer.detach()
                        }, c.prototype._attachPositioningHandler = function(c, d) {
                            var e = this,
                                f = "scroll.select2." + d.id,
                                g = "resize.select2." + d.id,
                                h = "orientationchange.select2." + d.id,
                                i = this.$container.parents().filter(b.hasScroll);
                            i.each(function() {
                                a(this).data("select2-scroll-position", {
                                    x: a(this).scrollLeft(),
                                    y: a(this).scrollTop()
                                })
                            }), i.on(f, function(b) {
                                var c = a(this).data("select2-scroll-position");
                                a(this).scrollTop(c.y)
                            }), a(window).on(f + " " + g + " " + h, function(a) {
                                e._positionDropdown(), e._resizeDropdown()
                            })
                        }, c.prototype._detachPositioningHandler = function(c, d) {
                            var e = "scroll.select2." + d.id,
                                f = "resize.select2." + d.id,
                                g = "orientationchange.select2." + d.id;
                            this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g)
                        }, c.prototype._positionDropdown = function() {
                            var b = a(window),
                                c = this.$dropdown.hasClass("select2-dropdown--above"),
                                d = this.$dropdown.hasClass("select2-dropdown--below"),
                                e = null,
                                f = this.$container.offset();
                            f.bottom = f.top + this.$container.outerHeight(!1);
                            var g = {
                                height: this.$container.outerHeight(!1)
                            };
                            g.top = f.top, g.bottom = f.top + g.height;
                            var h = {
                                    height: this.$dropdown.outerHeight(!1)
                                },
                                i = {
                                    top: b.scrollTop(),
                                    bottom: b.scrollTop() + b.height()
                                },
                                j = i.top < f.top - h.height,
                                k = i.bottom > f.bottom + h.height,
                                l = {
                                    left: f.left,
                                    top: g.bottom
                                },
                                m = this.$dropdownParent;
                            "static" === m.css("position") && (m = m.offsetParent());
                            var n = m.offset();
                            l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                        }, c.prototype._resizeDropdown = function() {
                            var a = {
                                width: this.$container.outerWidth(!1) + "px"
                            };
                            this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a)
                        }, c.prototype._showDropdown = function(a) {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                        }, c
                    }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function a(b) {
                            for (var c = 0, d = 0; d < b.length; d++) {
                                var e = b[d];
                                e.children ? c += a(e.children) : c++
                            }
                            return c
                        }

                        function b(a, b, c, d) {
                            this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
                        }
                        return b.prototype.showSearch = function(b, c) {
                            return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c)
                        }, b
                    }), b.define("select2/dropdown/selectOnClose", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), b.on("close", function(a) {
                                d._handleSelectOnClose(a)
                            })
                        }, a.prototype._handleSelectOnClose = function(a, b) {
                            if (b && null != b.originalSelect2Event) {
                                var c = b.originalSelect2Event;
                                if ("select" === c._type || "unselect" === c._type) return
                            }
                            var d = this.getHighlightedResults();
                            if (!(d.length < 1)) {
                                var e = d.data("data");
                                null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
                                    data: e
                                })
                            }
                        }, a
                    }), b.define("select2/dropdown/closeOnSelect", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), b.on("select", function(a) {
                                d._selectTriggered(a)
                            }), b.on("unselect", function(a) {
                                d._selectTriggered(a)
                            })
                        }, a.prototype._selectTriggered = function(a, b) {
                            var c = b.originalEvent;
                            c && c.ctrlKey || this.trigger("close", {
                                originalEvent: c,
                                originalSelect2Event: b
                            })
                        }, a
                    }), b.define("select2/i18n/en", [], function() {
                        return {
                            errorLoading: function() {
                                return "The results could not be loaded."
                            },
                            inputTooLong: function(a) {
                                var b = a.input.length - a.maximum,
                                    c = "Please delete " + b + " character";
                                return 1 != b && (c += "s"), c
                            },
                            inputTooShort: function(a) {
                                return "Please enter " + (a.minimum - a.input.length) + " or more characters"
                            },
                            loadingMore: function() {
                                return "Loading more results…"
                            },
                            maximumSelected: function(a) {
                                var b = "You can only select " + a.maximum + " item";
                                return 1 != a.maximum && (b += "s"), b
                            },
                            noResults: function() {
                                return "No results found"
                            },
                            searching: function() {
                                return "Searching…"
                            }
                        }
                    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                        function D() {
                            this.reset()
                        }
                        return D.prototype.apply = function(l) {
                            if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                                if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                                    var C = b(l.amdBase + "compat/query");
                                    l.dataAdapter = j.Decorate(l.dataAdapter, C)
                                }
                                if (null != l.initSelection) {
                                    var D = b(l.amdBase + "compat/initSelection");
                                    l.dataAdapter = j.Decorate(l.dataAdapter, D)
                                }
                            }
                            if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                                if (l.multiple) l.dropdownAdapter = u;
                                else {
                                    var E = j.Decorate(u, v);
                                    l.dropdownAdapter = E
                                }
                                if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                                    var F = b(l.amdBase + "compat/dropdownCss");
                                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                                }
                                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                            }
                            if (null == l.selectionAdapter) {
                                if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                                    var G = b(l.amdBase + "compat/containerCss");
                                    l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                                }
                                l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                            }
                            if ("string" == typeof l.language)
                                if (l.language.indexOf("-") > 0) {
                                    var H = l.language.split("-"),
                                        I = H[0];
                                    l.language = [l.language, I]
                                } else l.language = [l.language];
                            if (a.isArray(l.language)) {
                                var J = new k;
                                l.language.push("en");
                                for (var K = l.language, L = 0; L < K.length; L++) {
                                    var M = K[L],
                                        N = {};
                                    try {
                                        N = k.loadPath(M)
                                    } catch (Q) {
                                        try {
                                            M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                                        } catch (R) {
                                            l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                            continue
                                        }
                                    }
                                    J.extend(N)
                                }
                                l.translations = J
                            } else {
                                var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
                                    P = new k(l.language);
                                P.extend(O), l.translations = P
                            }
                            return l
                        }, D.prototype.reset = function() {
                            function b(a) {
                                function b(a) {
                                    return l[a] || a
                                }
                                return a.replace(/[^\u0000-\u007E]/g, b)
                            }

                            function c(d, e) {
                                if ("" === a.trim(d.term)) return e;
                                if (e.children && e.children.length > 0) {
                                    for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                        null == c(d, e.children[g]) && f.children.splice(g, 1)
                                    }
                                    return f.children.length > 0 ? f : c(d, f)
                                }
                                var h = b(e.text).toUpperCase(),
                                    i = b(d.term).toUpperCase();
                                return h.indexOf(i) > -1 ? e : null
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: j.escapeMarkup,
                                language: C,
                                matcher: c,
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function(a) {
                                    return a
                                },
                                templateResult: function(a) {
                                    return a.text
                                },
                                templateSelection: function(a) {
                                    return a.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, D.prototype.set = function(b, c) {
                            var d = a.camelCase(b),
                                e = {};
                            e[d] = c;
                            var f = j._convertData(e);
                            a.extend(this.defaults, f)
                        }, new D
                    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                        function e(b, e) {
                            if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                                var f = a(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                            }
                        }
                        return e.prototype.fromElement = function(a) {
                            var c = ["select2"];
                            null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                            var e = {};
                            e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                            var f = b.extend(!0, {}, e);
                            f = d._convertData(f);
                            for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                            return this
                        }, e.prototype.get = function(a) {
                            return this.options[a]
                        }, e.prototype.set = function(a, b) {
                            this.options[a] = b
                        }, e
                    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                        var e = function(a, c) {
                            null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                            var d = a.attr("tabindex") || 0;
                            a.data("old-tabindex", d), a.attr("tabindex", "-1");
                            var f = this.options.get("dataAdapter");
                            this.dataAdapter = new f(a, this.options);
                            var g = this.render();
                            this._placeContainer(g);
                            var h = this.options.get("selectionAdapter");
                            this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                            var i = this.options.get("dropdownAdapter");
                            this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                            var j = this.options.get("resultsAdapter");
                            this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var k = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                                k.trigger("selection:update", {
                                    data: a
                                })
                            }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                        };
                        return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                            var b = "";
                            return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
                        }, e.prototype._placeContainer = function(a) {
                            a.insertAfter(this.$element);
                            var b = this._resolveWidth(this.$element, this.options.get("width"));
                            null != b && a.css("width", b)
                        }, e.prototype._resolveWidth = function(a, b) {
                            var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == b) {
                                var d = this._resolveWidth(a, "style");
                                return null != d ? d : this._resolveWidth(a, "element")
                            }
                            if ("element" == b) {
                                var e = a.outerWidth(!1);
                                return 0 >= e ? "auto" : e + "px"
                            }
                            if ("style" == b) {
                                var f = a.attr("style");
                                if ("string" != typeof f) return null;
                                for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                                    var j = g[h].replace(/\s/g, ""),
                                        k = j.match(c);
                                    if (null !== k && k.length >= 1) return k[1]
                                }
                                return null
                            }
                            return b
                        }, e.prototype._bindAdapters = function() {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                        }, e.prototype._registerDomEvents = function() {
                            var b = this;
                            this.$element.on("change.select2", function() {
                                b.dataAdapter.current(function(a) {
                                    b.trigger("selection:update", {
                                        data: a
                                    })
                                })
                            }), this.$element.on("focus.select2", function(a) {
                                b.trigger("focus", a)
                            }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                            var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != d ? (this._observer = new d(function(c) {
                                a.each(c, b._syncA), a.each(c, b._syncS)
                            }), this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                        }, e.prototype._registerDataEvents = function() {
                            var a = this;
                            this.dataAdapter.on("*", function(b, c) {
                                a.trigger(b, c)
                            })
                        }, e.prototype._registerSelectionEvents = function() {
                            var b = this,
                                c = ["toggle", "focus"];
                            this.selection.on("toggle", function() {
                                b.toggleDropdown()
                            }), this.selection.on("focus", function(a) {
                                b.focus(a)
                            }), this.selection.on("*", function(d, e) {
                                -1 === a.inArray(d, c) && b.trigger(d, e)
                            })
                        }, e.prototype._registerDropdownEvents = function() {
                            var a = this;
                            this.dropdown.on("*", function(b, c) {
                                a.trigger(b, c)
                            })
                        }, e.prototype._registerResultsEvents = function() {
                            var a = this;
                            this.results.on("*", function(b, c) {
                                a.trigger(b, c)
                            })
                        }, e.prototype._registerEvents = function() {
                            var a = this;
                            this.on("open", function() {
                                a.$container.addClass("select2-container--open")
                            }), this.on("close", function() {
                                a.$container.removeClass("select2-container--open")
                            }), this.on("enable", function() {
                                a.$container.removeClass("select2-container--disabled")
                            }), this.on("disable", function() {
                                a.$container.addClass("select2-container--disabled")
                            }), this.on("blur", function() {
                                a.$container.removeClass("select2-container--focus")
                            }), this.on("query", function(b) {
                                a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                                    a.trigger("results:all", {
                                        data: c,
                                        query: b
                                    })
                                })
                            }), this.on("query:append", function(b) {
                                this.dataAdapter.query(b, function(c) {
                                    a.trigger("results:append", {
                                        data: c,
                                        query: b
                                    })
                                })
                            }), this.on("keypress", function(b) {
                                var c = b.which;
                                a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                            })
                        }, e.prototype._syncAttributes = function() {
                            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                        }, e.prototype._syncSubtree = function(a, b) {
                            var c = !1,
                                d = this;
                            if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                                if (b)
                                    if (b.addedNodes && b.addedNodes.length > 0)
                                        for (var e = 0; e < b.addedNodes.length; e++) {
                                            var f = b.addedNodes[e];
                                            f.selected && (c = !0)
                                        } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                                    else c = !0;
                                c && this.dataAdapter.current(function(a) {
                                    d.trigger("selection:update", {
                                        data: a
                                    })
                                })
                            }
                        }, e.prototype.trigger = function(a, b) {
                            var c = e.__super__.trigger,
                                d = {
                                    open: "opening",
                                    close: "closing",
                                    select: "selecting",
                                    unselect: "unselecting"
                                };
                            if (void 0 === b && (b = {}), a in d) {
                                var f = d[a],
                                    g = {
                                        prevented: !1,
                                        name: a,
                                        args: b
                                    };
                                if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                            }
                            c.call(this, a, b)
                        }, e.prototype.toggleDropdown = function() {
                            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                        }, e.prototype.open = function() {
                            this.isOpen() || this.trigger("query", {})
                        }, e.prototype.close = function() {
                            this.isOpen() && this.trigger("close", {})
                        }, e.prototype.isOpen = function() {
                            return this.$container.hasClass("select2-container--open")
                        }, e.prototype.hasFocus = function() {
                            return this.$container.hasClass("select2-container--focus")
                        }, e.prototype.focus = function(a) {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                        }, e.prototype.enable = function(a) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                            var b = !a[0];
                            this.$element.prop("disabled", b)
                        }, e.prototype.data = function() {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var a = [];
                            return this.dataAdapter.current(function(b) {
                                a = b
                            }), a
                        }, e.prototype.val = function(b) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                            var c = b[0];
                            a.isArray(c) && (c = a.map(c, function(a) {
                                return a.toString()
                            })), this.$element.val(c).trigger("change")
                        }, e.prototype.destroy = function() {
                            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                        }, e.prototype.render = function() {
                            var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                        }, e
                    }), b.define("select2/compat/utils", ["jquery"], function(a) {
                        function b(b, c, d) {
                            var e, f, g = [];
                            e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                                0 === this.indexOf("select2-") && g.push(this)
                            })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                                0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f)
                            })), b.attr("class", g.join(" "))
                        }
                        return {
                            syncCssClasses: b
                        }
                    }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, b) {
                        function c(a) {
                            return null
                        }

                        function d() {}
                        return d.prototype.render = function(d) {
                            var e = d.call(this),
                                f = this.options.get("containerCssClass") || "";
                            a.isFunction(f) && (f = f(this.$element));
                            var g = this.options.get("adaptContainerCssClass");
                            if (g = g || c, -1 !== f.indexOf(":all:")) {
                                f = f.replace(":all:", "");
                                var h = g;
                                g = function(a) {
                                    var b = h(a);
                                    return null != b ? b + " " + a : a
                                }
                            }
                            var i = this.options.get("containerCss") || {};
                            return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                        }, d
                    }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, b) {
                        function c(a) {
                            return null
                        }

                        function d() {}
                        return d.prototype.render = function(d) {
                            var e = d.call(this),
                                f = this.options.get("dropdownCssClass") || "";
                            a.isFunction(f) && (f = f(this.$element));
                            var g = this.options.get("adaptDropdownCssClass");
                            if (g = g || c, -1 !== f.indexOf(":all:")) {
                                f = f.replace(":all:", "");
                                var h = g;
                                g = function(a) {
                                    var b = h(a);
                                    return null != b ? b + " " + a : a
                                }
                            }
                            var i = this.options.get("dropdownCss") || {};
                            return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                        }, d
                    }), b.define("select2/compat/initSelection", ["jquery"], function(a) {
                        function b(a, b, c) {
                            c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
                        }
                        return b.prototype.current = function(b, c) {
                            var d = this;
                            return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function(b) {
                                d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                            })
                        }, b
                    }), b.define("select2/compat/inputData", ["jquery"], function(a) {
                        function b(a, b, c) {
                            this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
                        }
                        return b.prototype.current = function(b, c) {
                            function d(b, c) {
                                var e = [];
                                return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                            }
                            for (var e = [], f = 0; f < this._currentData.length; f++) {
                                var g = this._currentData[f];
                                e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                            }
                            c(e)
                        }, b.prototype.select = function(b, c) {
                            if (this.options.get("multiple")) {
                                var d = this.$element.val();
                                d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                            } else this.current(function(b) {
                                a.map(b, function(a) {
                                    a.selected = !1
                                })
                            }), this.$element.val(c.id), this.$element.trigger("change")
                        }, b.prototype.unselect = function(a, b) {
                            var c = this;
                            b.selected = !1, this.current(function(a) {
                                for (var d = [], e = 0; e < a.length; e++) {
                                    var f = a[e];
                                    b.id != f.id && d.push(f.id)
                                }
                                c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                            })
                        }, b.prototype.query = function(a, b, c) {
                            for (var d = [], e = 0; e < this._currentData.length; e++) {
                                var f = this._currentData[e],
                                    g = this.matches(b, f);
                                null !== g && d.push(g)
                            }
                            c({
                                results: d
                            })
                        }, b.prototype.addOptions = function(b, c) {
                            var d = a.map(c, function(b) {
                                return a.data(b[0], "data")
                            });
                            this._currentData.push.apply(this._currentData, d)
                        }, b
                    }), b.define("select2/compat/matcher", ["jquery"], function(a) {
                        function b(b) {
                            function c(c, d) {
                                var e = a.extend(!0, {}, d);
                                if (null == c.term || "" === a.trim(c.term)) return e;
                                if (d.children) {
                                    for (var f = d.children.length - 1; f >= 0; f--) {
                                        var g = d.children[f];
                                        b(c.term, g.text, g) || e.children.splice(f, 1)
                                    }
                                    if (e.children.length > 0) return e
                                }
                                return b(c.term, d.text, d) ? e : null
                            }
                            return c
                        }
                        return b
                    }), b.define("select2/compat/query", [], function() {
                        function a(a, b, c) {
                            c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            b.callback = c, this.options.get("query").call(null, b)
                        }, a
                    }), b.define("select2/dropdown/attachContainer", [], function() {
                        function a(a, b, c) {
                            a.call(this, b, c)
                        }
                        return a.prototype.position = function(a, b, c) {
                            c.find(".dropdown-wrapper").append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
                        }, a
                    }), b.define("select2/dropdown/stopPropagation", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            a.call(this, b, c);
                            var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$dropdown.on(d.join(" "), function(a) {
                                a.stopPropagation()
                            })
                        }, a
                    }), b.define("select2/selection/stopPropagation", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            a.call(this, b, c);
                            var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$selection.on(d.join(" "), function(a) {
                                a.stopPropagation()
                            })
                        }, a
                    }),
                    function(c) {
                        "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
                    }(function(a) {
                        function b(b) {
                            var g = b || window.event,
                                h = i.call(arguments, 1),
                                j = 0,
                                l = 0,
                                m = 0,
                                n = 0,
                                o = 0,
                                p = 0;
                            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                                if (1 === g.deltaMode) {
                                    var q = a.data(this, "mousewheel-line-height");
                                    j *= q, m *= q, l *= q
                                } else if (2 === g.deltaMode) {
                                    var r = a.data(this, "mousewheel-page-height");
                                    j *= r, m *= r, l *= r
                                }
                                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var s = this.getBoundingClientRect();
                                    o = b.clientX - s.left, p = b.clientY - s.top
                                }
                                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                            }
                        }

                        function c() {
                            f = null
                        }

                        function d(a, b) {
                            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0
                        }
                        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            i = Array.prototype.slice;
                        if (a.event.fixHooks)
                            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
                        var k = a.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function() {
                                if (this.addEventListener)
                                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                                else this.onmousewheel = b;
                                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                            },
                            teardown: function() {
                                if (this.removeEventListener)
                                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                                else this.onmousewheel = null;
                                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                            },
                            getLineHeight: function(b) {
                                var c = a(b),
                                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                            },
                            getPageHeight: function(b) {
                                return a(b).height()
                            },
                            settings: {
                                adjustOldDeltas: !0,
                                normalizeOffset: !0
                            }
                        };
                        a.fn.extend({
                            mousewheel: function(a) {
                                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                            },
                            unmousewheel: function(a) {
                                return this.unbind("mousewheel", a)
                            }
                        })
                    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                        if (null == a.fn.select2) {
                            var e = ["open", "close", "destroy"];
                            a.fn.select2 = function(b) {
                                if ("object" == typeof(b = b || {})) return this.each(function() {
                                    var d = a.extend(!0, {}, b);
                                    new c(a(this), d)
                                }), this;
                                if ("string" == typeof b) {
                                    var d, f = Array.prototype.slice.call(arguments, 1);
                                    return this.each(function() {
                                        var c = a(this).data("select2");
                                        null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                                    }), a.inArray(b, e) > -1 ? this : d
                                }
                                throw new Error("Invalid arguments for Select2: " + b)
                            }
                        }
                        return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
                    }), {
                        define: b.define,
                        require: b.require
                    }
            }(),
            c = b.require("jquery.select2");
        return a.fn.select2.amd = b, c
    }),
    function() {
        ! function(a) {
            a.easyPieChart = function(b, c) {
                var d, e, f, g, h, i, j, k = this;
                return this.el = b, this.$el = a(b), this.$el.data("easyPieChart", this), this.init = function() {
                    var b;
                    return k.options = a.extend({}, a.easyPieChart.defaultOptions, c), b = parseInt(k.$el.data("percent"), 10), k.percentage = 0, k.canvas = a("<canvas width='" + k.options.size + "' height='" + k.options.size + "'></canvas>").get(0), k.$el.append(k.canvas), "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(k.canvas), k.ctx = k.canvas.getContext("2d"), window.devicePixelRatio > 1.5 && (a(k.canvas).css({
                        width: k.options.size,
                        height: k.options.size
                    }), k.canvas.width *= 2, k.canvas.height *= 2, k.ctx.scale(2, 2)), k.ctx.translate(k.options.size / 2, k.options.size / 2), k.$el.addClass("easyPieChart"), k.$el.css({
                        width: k.options.size,
                        height: k.options.size,
                        lineHeight: k.options.size + "px"
                    }), k.update(b), k
                }, this.update = function(a) {
                    return !1 === k.options.animate ? f(a) : e(k.percentage, a)
                }, i = function() {
                    var a, b, c;
                    for (k.ctx.fillStyle = k.options.scaleColor, k.ctx.lineWidth = 1, c = [], a = b = 0; b <= 24; a = ++b) c.push(d(a));
                    return c
                }, d = function(a) {
                    var b;
                    return b = a % 6 == 0 ? 0 : .017 * k.options.size, k.ctx.save(), k.ctx.rotate(a * Math.PI / 12), k.ctx.fillRect(k.options.size / 2 - b, 0, .05 * -k.options.size + b, 1), k.ctx.restore()
                }, j = function() {
                    var a;
                    return a = k.options.size / 2 - k.options.lineWidth / 2, !1 !== k.options.scaleColor && (a -= .08 * k.options.size), k.ctx.beginPath(), k.ctx.arc(0, 0, a, 0, 2 * Math.PI, !0), k.ctx.closePath(), k.ctx.strokeStyle = k.options.trackColor, k.ctx.lineWidth = k.options.lineWidth, k.ctx.stroke()
                }, h = function() {
                    if (!1 !== k.options.scaleColor && i(), !1 !== k.options.trackColor) return j()
                }, f = function(b) {
                    var c;
                    return h(), k.ctx.strokeStyle = a.isFunction(k.options.barColor) ? k.options.barColor(b) : k.options.barColor, k.ctx.lineCap = k.options.lineCap, k.ctx.lineWidth = k.options.lineWidth, c = k.options.size / 2 - k.options.lineWidth / 2, !1 !== k.options.scaleColor && (c -= .08 * k.options.size), k.ctx.save(), k.ctx.rotate(-Math.PI / 2), k.ctx.beginPath(), k.ctx.arc(0, 0, c, 0, 2 * Math.PI * b / 100, !1), k.ctx.stroke(), k.ctx.restore()
                }, e = function(a, b) {
                    var c, d, e;
                    return d = 30, e = d * k.options.animate / 1e3, c = 0, k.options.onStart.call(k), k.percentage = b, k.animation && (clearInterval(k.animation), k.animation = !1), k.animation = setInterval(function() {
                        if (k.ctx.clearRect(-k.options.size / 2, -k.options.size / 2, k.options.size, k.options.size), h.call(k), f.call(k, [g(c, a, b - a, e)]), ++c / e > 1) return clearInterval(k.animation), k.animation = !1, k.options.onStop.call(k)
                    }, 1e3 / d)
                }, g = function(a, b, c, d) {
                    var e, f;
                    return e = function(a) {
                        return Math.pow(a, 2)
                    }, f = function(a) {
                        return a < 1 ? e(a) : 2 - e(a / 2 * -2 + 2)
                    }, a /= d / 2, c / 2 * f(a) + b
                }, this.init()
            }, a.easyPieChart.defaultOptions = {
                barColor: "#ef1e25",
                trackColor: "#f2f2f2",
                scaleColor: "#dfe0e0",
                lineCap: "round",
                size: 110,
                lineWidth: 3,
                animate: !1,
                onStart: a.noop,
                onStop: a.noop
            }, a.fn.easyPieChart = function(b) {
                return a.each(this, function(c, d) {
                    var e;
                    if (e = a(d), !e.data("easyPieChart")) return e.data("easyPieChart", new a.easyPieChart(d, b))
                })
            }
        }(jQuery)
    }.call(this),
    function() {
        "use strict";

        function a(d) {
            if (!d) throw new Error("No options passed to Waypoint constructor");
            if (!d.element) throw new Error("No element option passed to Waypoint constructor");
            if (!d.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + b, this.options = a.Adapter.extend({}, a.defaults, d), this.element = this.options.element, this.adapter = new a.Adapter(this.element), this.callback = d.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = a.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = a.Context.findOrCreateByElement(this.options.context), a.offsetAliases[this.options.offset] && (this.options.offset = a.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), c[this.key] = this, b += 1
        }
        var b = 0,
            c = {};
        a.prototype.queueTrigger = function(a) {
            this.group.queueTrigger(this, a)
        }, a.prototype.trigger = function(a) {
            this.enabled && this.callback && this.callback.apply(this, a)
        }, a.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete c[this.key]
        }, a.prototype.disable = function() {
            return this.enabled = !1, this
        }, a.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, a.prototype.next = function() {
            return this.group.next(this)
        }, a.prototype.previous = function() {
            return this.group.previous(this)
        }, a.invokeAll = function(a) {
            var b = [];
            for (var d in c) b.push(c[d]);
            for (var e = 0, f = b.length; f > e; e++) b[e][a]()
        }, a.destroyAll = function() {
            a.invokeAll("destroy")
        }, a.disableAll = function() {
            a.invokeAll("disable")
        }, a.enableAll = function() {
            a.invokeAll("enable")
        }, a.refreshAll = function() {
            a.Context.refreshAll()
        }, a.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, a.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, a.adapters = [], a.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, a.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = a
    }(),
    function() {
        "use strict";

        function a(a) {
            window.setTimeout(a, 1e3 / 60)
        }

        function b(a) {
            this.element = a, this.Adapter = e.Adapter, this.adapter = new this.Adapter(a), this.key = "waypoint-context-" + c, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, a.waypointContextKey = this.key, d[a.waypointContextKey] = this, c += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var c = 0,
            d = {},
            e = window.Waypoint,
            f = window.onload;
        b.prototype.add = function(a) {
            var b = a.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[b][a.key] = a, this.refresh()
        }, b.prototype.checkEmpty = function() {
            var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                b = this.Adapter.isEmptyObject(this.waypoints.vertical);
            a && b && (this.adapter.off(".waypoints"), delete d[this.key])
        }, b.prototype.createThrottledResizeHandler = function() {
            function a() {
                b.handleResize(), b.didResize = !1
            }
            var b = this;
            this.adapter.on("resize.waypoints", function() {
                b.didResize || (b.didResize = !0, e.requestAnimationFrame(a))
            })
        }, b.prototype.createThrottledScrollHandler = function() {
            function a() {
                b.handleScroll(), b.didScroll = !1
            }
            var b = this;
            this.adapter.on("scroll.waypoints", function() {
                (!b.didScroll || e.isTouch) && (b.didScroll = !0, e.requestAnimationFrame(a))
            })
        }, b.prototype.handleResize = function() {
            e.Context.refreshAll()
        }, b.prototype.handleScroll = function() {
            var a = {},
                b = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var c in b) {
                var d = b[c],
                    e = d.newScroll > d.oldScroll,
                    f = e ? d.forward : d.backward;
                for (var g in this.waypoints[c]) {
                    var h = this.waypoints[c][g],
                        i = d.oldScroll < h.triggerPoint,
                        j = d.newScroll >= h.triggerPoint,
                        k = i && j,
                        l = !i && !j;
                    (k || l) && (h.queueTrigger(f), a[h.group.id] = h.group)
                }
            }
            for (var m in a) a[m].flushTriggers();
            this.oldScroll = {
                x: b.horizontal.newScroll,
                y: b.vertical.newScroll
            }
        }, b.prototype.innerHeight = function() {
            return this.element == this.element.window ? e.viewportHeight() : this.adapter.innerHeight()
        }, b.prototype.remove = function(a) {
            delete this.waypoints[a.axis][a.key], this.checkEmpty()
        }, b.prototype.innerWidth = function() {
            return this.element == this.element.window ? e.viewportWidth() : this.adapter.innerWidth()
        }, b.prototype.destroy = function() {
            var a = [];
            for (var b in this.waypoints)
                for (var c in this.waypoints[b]) a.push(this.waypoints[b][c]);
            for (var d = 0, e = a.length; e > d; d++) a[d].destroy()
        }, b.prototype.refresh = function() {
            var a, b = this.element == this.element.window,
                c = b ? void 0 : this.adapter.offset(),
                d = {};
            this.handleScroll(), a = {
                horizontal: {
                    contextOffset: b ? 0 : c.left,
                    contextScroll: b ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: b ? 0 : c.top,
                    contextScroll: b ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var f in a) {
                var g = a[f];
                for (var h in this.waypoints[f]) {
                    var i, j, k, l, m, n = this.waypoints[f][h],
                        o = n.options.offset,
                        p = n.triggerPoint,
                        q = 0,
                        r = null == p;
                    n.element !== n.element.window && (q = n.adapter.offset()[g.offsetProp]), "function" == typeof o ? o = o.apply(n) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(g.contextDimension * o / 100))), i = g.contextScroll - g.contextOffset, n.triggerPoint = q + i - o, j = p < g.oldScroll, k = n.triggerPoint >= g.oldScroll, l = j && k, m = !j && !k, !r && l ? (n.queueTrigger(g.backward), d[n.group.id] = n.group) : !r && m ? (n.queueTrigger(g.forward), d[n.group.id] = n.group) : r && g.oldScroll >= n.triggerPoint && (n.queueTrigger(g.forward), d[n.group.id] = n.group)
                }
            }
            return e.requestAnimationFrame(function() {
                for (var a in d) d[a].flushTriggers()
            }), this
        }, b.findOrCreateByElement = function(a) {
            return b.findByElement(a) || new b(a)
        }, b.refreshAll = function() {
            for (var a in d) d[a].refresh()
        }, b.findByElement = function(a) {
            return d[a.waypointContextKey]
        }, window.onload = function() {
            f && f(), b.refreshAll()
        }, e.requestAnimationFrame = function(b) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || a).call(window, b)
        }, e.Context = b
    }(),
    function() {
        "use strict";

        function a(a, b) {
            return a.triggerPoint - b.triggerPoint
        }

        function b(a, b) {
            return b.triggerPoint - a.triggerPoint
        }

        function c(a) {
            this.name = a.name, this.axis = a.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), d[this.axis][this.name] = this
        }
        var d = {
                vertical: {},
                horizontal: {}
            },
            e = window.Waypoint;
        c.prototype.add = function(a) {
            this.waypoints.push(a)
        }, c.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, c.prototype.flushTriggers = function() {
            for (var c in this.triggerQueues) {
                var d = this.triggerQueues[c],
                    e = "up" === c || "left" === c;
                d.sort(e ? b : a);
                for (var f = 0, g = d.length; g > f; f += 1) {
                    var h = d[f];
                    (h.options.continuous || f === d.length - 1) && h.trigger([c])
                }
            }
            this.clearTriggerQueues()
        }, c.prototype.next = function(b) {
            this.waypoints.sort(a);
            var c = e.Adapter.inArray(b, this.waypoints);
            return c === this.waypoints.length - 1 ? null : this.waypoints[c + 1]
        }, c.prototype.previous = function(b) {
            this.waypoints.sort(a);
            var c = e.Adapter.inArray(b, this.waypoints);
            return c ? this.waypoints[c - 1] : null
        }, c.prototype.queueTrigger = function(a, b) {
            this.triggerQueues[b].push(a)
        }, c.prototype.remove = function(a) {
            var b = e.Adapter.inArray(a, this.waypoints);
            b > -1 && this.waypoints.splice(b, 1)
        }, c.prototype.first = function() {
            return this.waypoints[0]
        }, c.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, c.findOrCreate = function(a) {
            return d[a.axis][a.name] || new c(a)
        }, e.Group = c
    }(),
    function() {
        "use strict";

        function a(a) {
            this.$element = b(a)
        }
        var b = window.jQuery,
            c = window.Waypoint;
        b.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(b, c) {
            a.prototype[c] = function() {
                var a = Array.prototype.slice.call(arguments);
                return this.$element[c].apply(this.$element, a)
            }
        }), b.each(["extend", "inArray", "isEmptyObject"], function(c, d) {
            a[d] = b[d]
        }), c.adapters.push({
            name: "jquery",
            Adapter: a
        }), c.Adapter = a
    }(),
    function() {
        "use strict";

        function a(a) {
            return function() {
                var c = [],
                    d = arguments[0];
                return a.isFunction(arguments[0]) && (d = a.extend({}, arguments[1]), d.handler = arguments[0]), this.each(function() {
                    var e = a.extend({}, d, {
                        element: this
                    });
                    "string" == typeof e.context && (e.context = a(this).closest(e.context)[0]), c.push(new b(e))
                }), c
            }
        }
        var b = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto))
    }(),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = function(a) {
                this.canvas = a.canvas, this.ctx = a;
                var b = function(a, b) {
                        return a["offset" + b] ? a["offset" + b] : document.defaultView.getComputedStyle(a).getPropertyValue(b)
                    },
                    c = this.width = b(a.canvas, "Width"),
                    e = this.height = b(a.canvas, "Height");
                a.canvas.width = c, a.canvas.height = e;
                var c = this.width = a.canvas.width,
                    e = this.height = a.canvas.height;
                return this.aspectRatio = this.width / this.height, d.retinaScale(this), this
            };
        c.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, c.types = {};
        var d = c.helpers = {},
            e = d.each = function(a, b, c) {
                var d = Array.prototype.slice.call(arguments, 3);
                if (a)
                    if (a.length === +a.length) {
                        var e;
                        for (e = 0; e < a.length; e++) b.apply(c, [a[e], e].concat(d))
                    } else
                        for (var f in a) b.apply(c, [a[f], f].concat(d))
            },
            f = d.clone = function(a) {
                var b = {};
                return e(a, function(c, d) {
                    a.hasOwnProperty(d) && (b[d] = c)
                }), b
            },
            g = d.extend = function(a) {
                return e(Array.prototype.slice.call(arguments, 1), function(b) {
                    e(b, function(c, d) {
                        b.hasOwnProperty(d) && (a[d] = c)
                    })
                }), a
            },
            h = d.merge = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return a.unshift({}), g.apply(null, a)
            },
            i = d.indexOf = function(a, b) {
                if (Array.prototype.indexOf) return a.indexOf(b);
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) return c;
                return -1
            },
            j = (d.where = function(a, b) {
                var c = [];
                return d.each(a, function(a) {
                    b(a) && c.push(a)
                }), c
            }, d.findNextWhere = function(a, b, c) {
                c || (c = -1);
                for (var d = c + 1; d < a.length; d++) {
                    var e = a[d];
                    if (b(e)) return e
                }
            }, d.findPreviousWhere = function(a, b, c) {
                c || (c = a.length);
                for (var d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    if (b(e)) return e
                }
            }, d.inherits = function(a) {
                var b = this,
                    c = a && a.hasOwnProperty("constructor") ? a.constructor : function() {
                        return b.apply(this, arguments)
                    },
                    d = function() {
                        this.constructor = c
                    };
                return d.prototype = b.prototype, c.prototype = new d, c.extend = j, a && g(c.prototype, a), c.__super__ = b.prototype, c
            }),
            k = d.noop = function() {},
            l = d.uid = function() {
                var a = 0;
                return function() {
                    return "chart-" + a++
                }
            }(),
            m = d.warn = function(a) {
                window.console && "function" == typeof window.console.warn && console.warn(a)
            },
            n = d.amd = "function" == typeof define && define.amd,
            o = d.isNumber = function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            p = d.max = function(a) {
                return Math.max.apply(Math, a)
            },
            q = d.min = function(a) {
                return Math.min.apply(Math, a)
            },
            r = (d.cap = function(a, b, c) {
                if (o(b)) {
                    if (a > b) return b
                } else if (o(c) && c > a) return c;
                return a
            }, d.getDecimalPlaces = function(a) {
                return a % 1 != 0 && o(a) ? a.toString().split(".")[1].length : 0
            }),
            s = d.radians = function(a) {
                return a * (Math.PI / 180)
            },
            t = (d.getAngleFromPoint = function(a, b) {
                var c = b.x - a.x,
                    d = b.y - a.y,
                    e = Math.sqrt(c * c + d * d),
                    f = 2 * Math.PI + Math.atan2(d, c);
                return 0 > c && 0 > d && (f += 2 * Math.PI), {
                    angle: f,
                    distance: e
                }
            }, d.aliasPixel = function(a) {
                return a % 2 == 0 ? 0 : .5
            }),
            u = (d.splineCurve = function(a, b, c, d) {
                var e = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)),
                    f = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2)),
                    g = d * e / (e + f),
                    h = d * f / (e + f);
                return {
                    inner: {
                        x: b.x - g * (c.x - a.x),
                        y: b.y - g * (c.y - a.y)
                    },
                    outer: {
                        x: b.x + h * (c.x - a.x),
                        y: b.y + h * (c.y - a.y)
                    }
                }
            }, d.calculateOrderOfMagnitude = function(a) {
                return Math.floor(Math.log(a) / Math.LN10)
            }),
            v = (d.calculateScaleRange = function(a, b, c, d, e) {
                var f = 2,
                    g = Math.floor(b / (1.5 * c)),
                    h = f >= g,
                    i = p(a),
                    j = q(a);
                i === j && (i += .5, j >= .5 && !d ? j -= .5 : i += .5);
                for (var k = Math.abs(i - j), l = u(k), m = Math.ceil(i / (1 * Math.pow(10, l))) * Math.pow(10, l), n = d ? 0 : Math.floor(j / (1 * Math.pow(10, l))) * Math.pow(10, l), o = m - n, r = Math.pow(10, l), s = Math.round(o / r);
                    (s > g || g > 2 * s) && !h;)
                    if (s > g) r *= 2, (s = Math.round(o / r)) % 1 != 0 && (h = !0);
                    else if (e && l >= 0) {
                    if (r / 2 % 1 != 0) break;
                    r /= 2, s = Math.round(o / r)
                } else r /= 2, s = Math.round(o / r);
                return h && (s = f, r = o / s), {
                    steps: s,
                    stepValue: r,
                    min: n,
                    max: n + s * r
                }
            }, d.template = function(a, b) {
                function c(a, b) {
                    var c = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : d[a] = d[a];
                    return b ? c(b) : c
                }
                if (a instanceof Function) return a(b);
                var d = {};
                return c(a, b)
            }),
            w = (d.generateLabels = function(a, b, c, d) {
                var f = new Array(b);
                return labelTemplateString && e(f, function(b, e) {
                    f[e] = v(a, {
                        value: c + d * (e + 1)
                    })
                }), f
            }, d.easingEffects = {
                linear: function(a) {
                    return a
                },
                easeInQuad: function(a) {
                    return a * a
                },
                easeOutQuad: function(a) {
                    return -1 * a * (a - 2)
                },
                easeInOutQuad: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
                },
                easeInCubic: function(a) {
                    return a * a * a
                },
                easeOutCubic: function(a) {
                    return 1 * ((a = a / 1 - 1) * a * a + 1)
                },
                easeInOutCubic: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
                },
                easeInQuart: function(a) {
                    return a * a * a * a
                },
                easeOutQuart: function(a) {
                    return -1 * ((a = a / 1 - 1) * a * a * a - 1)
                },
                easeInOutQuart: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
                },
                easeInQuint: function(a) {
                    return 1 * (a /= 1) * a * a * a * a
                },
                easeOutQuint: function(a) {
                    return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
                },
                easeInOutQuint: function(a) {
                    return (a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
                },
                easeInSine: function(a) {
                    return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(a) {
                    return 1 * Math.sin(a / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(a) {
                    return -.5 * (Math.cos(Math.PI * a / 1) - 1)
                },
                easeInExpo: function(a) {
                    return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
                },
                easeOutExpo: function(a) {
                    return 1 === a ? 1 : 1 * (1 - Math.pow(2, -10 * a / 1))
                },
                easeInOutExpo: function(a) {
                    return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * --a))
                },
                easeInCirc: function(a) {
                    return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
                },
                easeOutCirc: function(a) {
                    return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
                },
                easeInOutCirc: function(a) {
                    return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                },
                easeInElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), -d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c))
                },
                easeOutElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), d * Math.pow(2, -10 * a) * Math.sin(2 * (1 * a - b) * Math.PI / c) + 1)
                },
                easeInOutElastic: function(a) {
                    var b = 1.70158,
                        c = 0,
                        d = 1;
                    return 0 === a ? 0 : 2 == (a /= .5) ? 1 : (c || (c = .3 * 1.5), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), 1 > a ? -.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) : d * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) * .5 + 1)
                },
                easeInBack: function(a) {
                    var b = 1.70158;
                    return 1 * (a /= 1) * a * ((b + 1) * a - b)
                },
                easeOutBack: function(a) {
                    var b = 1.70158;
                    return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1)
                },
                easeInOutBack: function(a) {
                    var b = 1.70158;
                    return (a /= .5) < 1 ? .5 * a * a * ((1 + (b *= 1.525)) * a - b) : .5 * ((a -= 2) * a * ((1 + (b *= 1.525)) * a + b) + 2)
                },
                easeInBounce: function(a) {
                    return 1 - w.easeOutBounce(1 - a)
                },
                easeOutBounce: function(a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                },
                easeInOutBounce: function(a) {
                    return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5
                }
            }),
            x = d.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                    return window.setTimeout(a, 1e3 / 60)
                }
            }(),
            y = d.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(a) {
                    return window.clearTimeout(a, 1e3 / 60)
                }
            }(),
            z = (d.animationLoop = function(a, b, c, d, e, f) {
                var g = 0,
                    h = w[c] || w.linear,
                    i = function() {
                        g++;
                        var c = g / b,
                            j = h(c);
                        a.call(f, j, c, g), d.call(f, j, c), b > g ? f.animationFrame = x(i) : e.apply(f)
                    };
                x(i)
            }, d.getRelativePosition = function(a) {
                var b, c, d = a.originalEvent || a,
                    e = a.currentTarget || a.srcElement,
                    f = e.getBoundingClientRect();
                return d.touches ? (b = d.touches[0].clientX - f.left, c = d.touches[0].clientY - f.top) : (b = d.clientX - f.left, c = d.clientY - f.top), {
                    x: b,
                    y: c
                }
            }, d.addEvent = function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
            }),
            A = d.removeEvent = function(a, b, c) {
                a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = k
            },
            B = (d.bindEvents = function(a, b, c) {
                a.events || (a.events = {}), e(b, function(b) {
                    a.events[b] = function() {
                        c.apply(a, arguments)
                    }, z(a.chart.canvas, b, a.events[b])
                })
            }, d.unbindEvents = function(a, b) {
                e(b, function(b, c) {
                    A(a.chart.canvas, c, b)
                })
            }),
            C = d.getMaximumWidth = function(a) {
                return a.parentNode.clientWidth
            },
            D = d.getMaximumHeight = function(a) {
                return a.parentNode.clientHeight
            },
            E = (d.getMaximumSize = d.getMaximumWidth, d.retinaScale = function(a) {
                var b = a.ctx,
                    c = a.canvas.width,
                    d = a.canvas.height;
                window.devicePixelRatio && (b.canvas.style.width = c + "px", b.canvas.style.height = d + "px", b.canvas.height = d * window.devicePixelRatio, b.canvas.width = c * window.devicePixelRatio, b.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            F = d.clear = function(a) {
                a.ctx.clearRect(0, 0, a.width, a.height)
            },
            G = d.fontString = function(a, b, c) {
                return b + " " + a + "px " + c
            },
            H = d.longestText = function(a, b, c) {
                a.font = b;
                var d = 0;
                return e(c, function(b) {
                    var c = a.measureText(b).width;
                    d = c > d ? c : d
                }), d
            },
            I = d.drawRoundedRectangle = function(a, b, c, d, e, f) {
                a.beginPath(), a.moveTo(b + f, c), a.lineTo(b + d - f, c), a.quadraticCurveTo(b + d, c, b + d, c + f), a.lineTo(b + d, c + e - f), a.quadraticCurveTo(b + d, c + e, b + d - f, c + e), a.lineTo(b + f, c + e), a.quadraticCurveTo(b, c + e, b, c + e - f), a.lineTo(b, c + f), a.quadraticCurveTo(b, c, b + f, c), a.closePath()
            };
        c.instances = {}, c.Type = function(a, b, d) {
            this.options = b, this.chart = d, this.id = l(), c.instances[this.id] = this, b.responsive && this.resize(), this.initialize.call(this, a)
        }, g(c.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return F(this.chart), this
            },
            stop: function() {
                return y(this.animationFrame), this
            },
            resize: function(a) {
                this.stop();
                var b = this.chart.canvas,
                    c = C(this.chart.canvas),
                    d = this.options.maintainAspectRatio ? c / this.chart.aspectRatio : D(this.chart.canvas);
                return b.width = this.chart.width = c, b.height = this.chart.height = d, E(this.chart), "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: k,
            render: function(a) {
                return a && this.reflow(), this.options.animation && !a ? d.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
            },
            generateLegend: function() {
                return v(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), B(this, this.events);
                var a = this.chart.canvas;
                a.width = this.chart.width, a.height = this.chart.height, a.style.removeProperty ? (a.style.removeProperty("width"), a.style.removeProperty("height")) : (a.style.removeAttribute("width"), a.style.removeAttribute("height")), delete c.instances[this.id]
            },
            showTooltip: function(a, b) {
                if (void 0 === this.activeElements && (this.activeElements = []), function(a) {
                        var b = !1;
                        return a.length !== this.activeElements.length ? b = !0 : (e(a, function(a, c) {
                            a !== this.activeElements[c] && (b = !0)
                        }, this), b)
                    }.call(this, a) || b) {
                    if (this.activeElements = a, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), a.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var f, g, h = this.datasets.length - 1; h >= 0 && (f = this.datasets[h].points || this.datasets[h].bars || this.datasets[h].segments, -1 === (g = i(f, a[0]))); h--);
                            var j = [],
                                k = [],
                                l = function() {
                                    var a, b, c, e, f, h = [],
                                        i = [],
                                        l = [];
                                    return d.each(this.datasets, function(b) {
                                        a = b.points || b.bars || b.segments, a[g] && a[g].hasValue() && h.push(a[g])
                                    }), d.each(h, function(a) {
                                        i.push(a.x), l.push(a.y), j.push(d.template(this.options.multiTooltipTemplate, a)), k.push({
                                            fill: a._saved.fillColor || a.fillColor,
                                            stroke: a._saved.strokeColor || a.strokeColor
                                        })
                                    }, this), f = q(l), c = p(l), e = q(i), b = p(i), {
                                        x: e > this.chart.width / 2 ? e : b,
                                        y: (f + c) / 2
                                    }
                                }.call(this, g);
                            new c.MultiTooltip({
                                x: l.x,
                                y: l.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: j,
                                legendColors: k,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: a[0].label,
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else e(a, function(a) {
                            var b = a.tooltipPosition();
                            new c.Tooltip({
                                x: Math.round(b.x),
                                y: Math.round(b.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: v(this.options.tooltipTemplate, a),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), c.Type.extend = function(a) {
            var b = this,
                d = function() {
                    return b.apply(this, arguments)
                };
            if (d.prototype = f(b.prototype), g(d.prototype, a), d.extend = c.Type.extend, a.name || b.prototype.name) {
                var e = a.name || b.prototype.name,
                    i = c.defaults[b.prototype.name] ? f(c.defaults[b.prototype.name]) : {};
                c.defaults[e] = g(i, a.defaults), c.types[e] = d, c.prototype[e] = function(a, b) {
                    var f = h(c.defaults.global, c.defaults[e], b || {});
                    return new d(a, f, this)
                }
            } else m("Name not provided for this chart, so it hasn't been registered");
            return b
        }, c.Element = function(a) {
            g(this, a), this.initialize.apply(this, arguments), this.save()
        }, g(c.Element.prototype, {
            initialize: function() {},
            restore: function(a) {
                return a ? e(a, function(a) {
                    this[a] = this._saved[a]
                }, this) : g(this, this._saved), this
            },
            save: function() {
                return this._saved = f(this), delete this._saved._saved, this
            },
            update: function(a) {
                return e(a, function(a, b) {
                    this._saved[b] = this[b], this[b] = a
                }, this), this
            },
            transition: function(a, b) {
                return e(a, function(a, c) {
                    this[c] = (a - this._saved[c]) * b + this._saved[c]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return o(this.value)
            }
        }), c.Element.extend = j, c.Point = c.Element.extend({
            display: !0,
            inRange: function(a, b) {
                var c = this.hitDetectionRadius + this.radius;
                return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(c, 2)
            },
            draw: function() {
                if (this.display) {
                    var a = this.ctx;
                    a.beginPath(), a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.stroke()
                }
            }
        }), c.Arc = c.Element.extend({
            inRange: function(a, b) {
                var c = d.getAngleFromPoint(this, {
                        x: a,
                        y: b
                    }),
                    e = c.angle >= this.startAngle && c.angle <= this.endAngle,
                    f = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
                return e && f
            },
            tooltipPosition: function() {
                var a = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    b = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(a) * b,
                    y: this.y + Math.sin(a) * b
                }
            },
            draw: function(a) {
                var b = this.ctx;
                b.beginPath(), b.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), b.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), b.closePath(), b.strokeStyle = this.strokeColor, b.lineWidth = this.strokeWidth, b.fillStyle = this.fillColor, b.fill(), b.lineJoin = "bevel", this.showStroke && b.stroke()
            }
        }), c.Rectangle = c.Element.extend({
            draw: function() {
                var a = this.ctx,
                    b = this.width / 2,
                    c = this.x - b,
                    d = this.x + b,
                    e = this.base - (this.base - this.y),
                    f = this.strokeWidth / 2;
                this.showStroke && (c += f, d -= f, e += f), a.beginPath(), a.fillStyle = this.fillColor, a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.moveTo(c, this.base), a.lineTo(c, e), a.lineTo(d, e), a.lineTo(d, this.base), a.fill(), this.showStroke && a.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(a, b) {
                return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base
            }
        }), c.Tooltip = c.Element.extend({
            draw: function() {
                var a = this.chart.ctx;
                a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var b = this.caretPadding = 2,
                    c = a.measureText(this.text).width + 2 * this.xPadding,
                    d = this.fontSize + 2 * this.yPadding,
                    e = d + this.caretHeight + b;
                this.x + c / 2 > this.chart.width ? this.xAlign = "left" : this.x - c / 2 < 0 && (this.xAlign = "right"), this.y - e < 0 && (this.yAlign = "below");
                var f = this.x - c / 2,
                    g = this.y - e;
                if (a.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            a.beginPath(), a.moveTo(this.x, this.y - b), a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight)), a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight)), a.closePath(), a.fill();
                            break;
                        case "below":
                            g = this.y + b + this.caretHeight, a.beginPath(), a.moveTo(this.x, this.y + b), a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight), a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight), a.closePath(), a.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            f = this.x - c + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            f = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    I(a, f, g, c, d, this.cornerRadius), a.fill(), a.fillStyle = this.textColor, a.textAlign = "center", a.textBaseline = "middle", a.fillText(this.text, f + c / 2, g + d / 2)
                }
            }
        }), c.MultiTooltip = c.Element.extend({
            initialize: function() {
                this.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = G(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                var a = this.ctx.measureText(this.title).width,
                    b = H(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    c = p([b, a]);
                this.width = c + 2 * this.xPadding;
                var d = this.height / 2;
                this.y - d < 0 ? this.y = d : this.y + d > this.chart.height && (this.y = this.chart.height - d), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(a) {
                var b = this.y - this.height / 2 + this.yPadding,
                    c = a - 1;
                return 0 === a ? b + this.titleFontSize / 2 : b + (1.5 * this.fontSize * c + this.fontSize / 2) + 1.5 * this.titleFontSize
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    I(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var a = this.ctx;
                    a.fillStyle = this.fillColor, a.fill(), a.closePath(), a.textAlign = "left", a.textBaseline = "middle", a.fillStyle = this.titleTextColor, a.font = this.titleFont, a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), a.font = this.font, d.each(this.labels, function(b, c) {
                        a.fillStyle = this.textColor, a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)), a.fillStyle = this.legendColorBackground, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize), a.fillStyle = this.legendColors[c].fill, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), c.Scale = c.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }));
                this.yLabelWidth = this.display && this.showLabels ? H(this.ctx, this.font, this.yLabels) : 0
            },
            addXLabel: function(a) {
                this.xLabels.push(a), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var a, b = this.endPoint - this.startPoint;
                for (this.calculateYRange(b), this.buildYLabels(), this.calculateXLabelRotation(); b > this.endPoint - this.startPoint;) b = this.endPoint - this.startPoint, a = this.yLabelWidth, this.calculateYRange(b), this.buildYLabels(), a < this.yLabelWidth && this.calculateXLabelRotation()
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var a, b = this.ctx.measureText(this.xLabels[0]).width,
                    c = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = c / 2 + 3, this.xScalePaddingLeft = b / 2 > this.yLabelWidth + 10 ? b / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                    var d, e = H(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = e;
                    for (var f = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > f && 0 === this.xLabelRotation || this.xLabelWidth > f && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) d = Math.cos(s(this.xLabelRotation)), a = d * b, d * c, a + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = a + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = d * e;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(s(this.xLabelRotation)) * e + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: k,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(a) {
                var b = this.drawingArea() / (this.min - this.max);
                return this.endPoint - b * (a - this.min)
            },
            calculateX: function(a) {
                var b = (this.xLabelRotation, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    c = b / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    d = c * a + this.xScalePaddingLeft;
                return this.offsetGridLines && (d += c / 2), Math.round(d)
            },
            update: function(a) {
                d.extend(this, a), this.fit()
            },
            draw: function() {
                var a = this.ctx,
                    b = (this.endPoint - this.startPoint) / this.steps,
                    c = Math.round(this.xScalePaddingLeft);
                this.display && (a.fillStyle = this.textColor, a.font = this.font, e(this.yLabels, function(e, f) {
                    var g = this.endPoint - b * f,
                        h = Math.round(g),
                        i = this.showHorizontalLines;
                    a.textAlign = "right", a.textBaseline = "middle", this.showLabels && a.fillText(e, c - 10, g), 0 !== f || i || (i = !0), i && a.beginPath(), f > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), h += d.aliasPixel(a.lineWidth), i && (a.moveTo(c, h), a.lineTo(this.width, h), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(c - 5, h), a.lineTo(c, h), a.stroke(), a.closePath()
                }, this), e(this.xLabels, function(b, c) {
                    var d = this.calculateX(c) + t(this.lineWidth),
                        e = this.calculateX(c - (this.offsetGridLines ? .5 : 0)) + t(this.lineWidth),
                        f = this.xLabelRotation > 0,
                        g = this.showVerticalLines;
                    0 !== c || g || (g = !0), g && a.beginPath(), c > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), g && (a.moveTo(e, this.endPoint), a.lineTo(e, this.startPoint - 3), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(e, this.endPoint), a.lineTo(e, this.endPoint + 5), a.stroke(), a.closePath(), a.save(), a.translate(d, f ? this.endPoint + 12 : this.endPoint + 8), a.rotate(-1 * s(this.xLabelRotation)), a.font = this.font, a.textAlign = f ? "right" : "center", a.textBaseline = f ? "middle" : "top", a.fillText(b, 0, 0), a.restore()
                }, this))
            }
        }), c.RadialScale = c.Element.extend({
            initialize: function() {
                this.size = q([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(a) {
                var b = this.drawingArea / (this.max - this.min);
                return (a - this.min) * b
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                    value: (this.min + b * this.stepValue).toFixed(a)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var a, b, c, d, e, f, g, h, i, j, k, l, m = q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    n = this.width,
                    p = 0;
                for (this.ctx.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), b = 0; b < this.valuesCount; b++) a = this.getPointPosition(b, m), c = this.ctx.measureText(v(this.templateString, {
                    value: this.labels[b]
                })).width + 5, 0 === b || b === this.valuesCount / 2 ? (d = c / 2, a.x + d > n && (n = a.x + d, e = b), a.x - d < p && (p = a.x - d, g = b)) : b < this.valuesCount / 2 ? a.x + c > n && (n = a.x + c, e = b) : b > this.valuesCount / 2 && a.x - c < p && (p = a.x - c, g = b);
                i = p, j = Math.ceil(n - this.width), f = this.getIndexAngle(e), h = this.getIndexAngle(g), k = j / Math.sin(f + Math.PI / 2), l = i / Math.sin(h + Math.PI / 2), k = o(k) ? k : 0, l = o(l) ? l : 0, this.drawingArea = m - (l + k) / 2, this.setCenterPoint(l, k)
            },
            setCenterPoint: function(a, b) {
                var c = this.width - b - this.drawingArea,
                    d = a + this.drawingArea;
                this.xCenter = (d + c) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(a) {
                return a * (2 * Math.PI / this.valuesCount) - Math.PI / 2
            },
            getPointPosition: function(a, b) {
                var c = this.getIndexAngle(a);
                return {
                    x: Math.cos(c) * b + this.xCenter,
                    y: Math.sin(c) * b + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var a = this.ctx;
                    if (e(this.yLabels, function(b, c) {
                            if (c > 0) {
                                var d, e = c * (this.drawingArea / this.steps),
                                    f = this.yCenter - e;
                                if (this.lineWidth > 0)
                                    if (a.strokeStyle = this.lineColor, a.lineWidth = this.lineWidth, this.lineArc) a.beginPath(), a.arc(this.xCenter, this.yCenter, e, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                    else {
                                        a.beginPath();
                                        for (var g = 0; g < this.valuesCount; g++) d = this.getPointPosition(g, this.calculateCenterOffset(this.min + c * this.stepValue)), 0 === g ? a.moveTo(d.x, d.y) : a.lineTo(d.x, d.y);
                                        a.closePath(), a.stroke()
                                    }
                                if (this.showLabels) {
                                    if (a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var h = a.measureText(b).width;
                                        a.fillStyle = this.backdropColor, a.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, f - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = this.fontColor, a.fillText(b, this.xCenter, f)
                                }
                            }
                        }, this), !this.lineArc) {
                        a.lineWidth = this.angleLineWidth, a.strokeStyle = this.angleLineColor;
                        for (var b = this.valuesCount - 1; b >= 0; b--) {
                            if (this.angleLineWidth > 0) {
                                var c = this.getPointPosition(b, this.calculateCenterOffset(this.max));
                                a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(c.x, c.y), a.stroke(), a.closePath()
                            }
                            var d = this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5);
                            a.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), a.fillStyle = this.pointLabelFontColor;
                            var f = this.labels.length,
                                g = this.labels.length / 2,
                                h = g / 2,
                                i = h > b || b > f - h,
                                j = b === h || b === f - h;
                            a.textAlign = 0 === b ? "center" : b === g ? "center" : g > b ? "left" : "right", a.textBaseline = j ? "middle" : i ? "bottom" : "top", a.fillText(this.labels[b], d.x, d.y)
                        }
                    }
                }
            }
        }), d.addEvent(window, "resize", function() {
            var a;
            return function() {
                clearTimeout(a), a = setTimeout(function() {
                    e(c.instances, function(a) {
                        a.options.responsive && a.resize(a.render, !0)
                    })
                }, 50)
            }
        }()), n ? define(function() {
            return c
        }) : "object" == typeof module && module.exports && (module.exports = c), a.Chart = c, c.noConflict = function() {
            return a.Chart = b, c
        }
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Bar",
            defaults: d,
            initialize: function(a) {
                var d = this.options;
                this.ScaleClass = b.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(a, b, c) {
                        var e = this.calculateBaseWidth(),
                            f = this.calculateX(c) - e / 2,
                            g = this.calculateBarWidth(a);
                        return f + g * b + b * d.barDatasetSpacing + g / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * d.barValueSpacing
                    },
                    calculateBarWidth: function(a) {
                        return (this.calculateBaseWidth() - (a - 1) * d.barDatasetSpacing) / a
                    }
                }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getBarsAtEvent(a) : [];
                    this.eachBars(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), this.BarClass = b.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        bars: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        d.bars.push(new this.BarClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            strokeColor: b.strokeColor,
                            fillColor: b.fillColor,
                            highlightFill: b.highlightFill || b.fillColor,
                            highlightStroke: b.highlightStroke || b.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(a.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(a, b, d) {
                    c.extend(a, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, d, b),
                        y: this.scale.endPoint
                    }), a.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(a) {
                    a.save()
                }), this.render()
            },
            eachBars: function(a) {
                c.each(this.datasets, function(b, d) {
                    c.each(b.bars, a, this, d)
                }, this)
            },
            getBarsAtEvent: function(a) {
                for (var b, d = [], e = c.getRelativePosition(a), f = function(a) {
                        d.push(a.bars[b])
                    }, g = 0; g < this.datasets.length; g++)
                    for (b = 0; b < this.datasets[g].bars.length; b++)
                        if (this.datasets[g].bars[b].inRange(e.x, e.y)) return c.each(this.datasets, f), d;
                return d
            },
            buildScale: function(a) {
                var b = this,
                    d = function() {
                        var a = [];
                        return b.eachBars(function(b) {
                            a.push(b.value)
                        }), a
                    },
                    e = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: a.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(a) {
                            var b = c.calculateScaleRange(d(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b)
                        },
                        xLabels: a,
                        font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && c.extend(e, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(e)
            },
            addData: function(a, b) {
                c.each(a, function(a, c) {
                    this.datasets[c].bars.push(new this.BarClass({
                        value: a,
                        label: b,
                        x: this.scale.calculateBarX(this.datasets.length, c, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[c].strokeColor,
                        fillColor: this.datasets[c].fillColor
                    }))
                }, this), this.scale.addXLabel(b), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), c.each(this.datasets, function(a) {
                    a.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                c.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var a = c.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(a)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear(), this.chart.ctx, this.scale.draw(b), c.each(this.datasets, function(a, d) {
                    c.each(a.bars, function(a, c) {
                        a.hasValue() && (a.base = this.scale.endPoint, a.transition({
                            x: this.scale.calculateBarX(this.datasets.length, d, c),
                            y: this.scale.calculateY(a.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, b).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Doughnut",
            defaults: d,
            initialize: function(a) {
                this.segments = [], this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = b.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) {
                        a.restore(["fillColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightColor
                    }), this.showTooltip(b)
                }), this.calculateTotal(a), c.each(a, function(a, b) {
                    this.addData(a, b, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) {
                    a.inRange(d.x, d.y) && b.push(a)
                }, this), b
            },
            addData: function(a, b, c) {
                var d = b || this.segments.length;
                this.segments.splice(d, 0, new this.SegmentArc({
                    value: a.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: a.color,
                    highlightColor: a.highlight || a.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(a.value),
                    label: a.label
                })), c || (this.reflow(), this.update())
            },
            calculateCircumference: function(a) {
                return 2 * Math.PI * (Math.abs(a) / this.total)
            },
            calculateTotal: function(a) {
                this.total = 0, c.each(a, function(a) {
                    this.total += Math.abs(a.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor"])
                }), c.each(this.segments, function(a) {
                    a.save()
                }), this.render()
            },
            removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update()
            },
            reflow: function() {
                c.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, c.each(this.segments, function(a) {
                    a.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear(), c.each(this.segments, function(a, c) {
                    a.transition({
                        circumference: this.calculateCircumference(a.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, b), a.endAngle = a.startAngle + a.circumference, a.draw(), 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle)
                }, this)
            }
        }), b.types.Doughnut.extend({
            name: "Pie",
            defaults: c.merge(d, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "Line",
            defaults: d,
            initialize: function(a) {
                this.PointClass = b.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(a) {
                        return Math.pow(a - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        pointColor: b.pointColor,
                        pointStrokeColor: b.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        d.points.push(new this.PointClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            strokeColor: b.pointStrokeColor,
                            fillColor: b.pointColor,
                            highlightFill: b.pointHighlightFill || b.pointColor,
                            highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                        }))
                    }, this), this.buildScale(a.labels), this.eachPoints(function(a, b) {
                        c.extend(a, {
                            x: this.scale.calculateX(b),
                            y: this.scale.endPoint
                        }), a.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), c.each(this.activeElements, function(a) {
                    a.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(a) {
                    a.save()
                }), this.render()
            },
            eachPoints: function(a) {
                c.each(this.datasets, function(b) {
                    c.each(b.points, a, this)
                }, this)
            },
            getPointsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.datasets, function(a) {
                    c.each(a.points, function(a) {
                        a.inRange(d.x, d.y) && b.push(a)
                    })
                }, this), b
            },
            buildScale: function(a) {
                var d = this,
                    e = function() {
                        var a = [];
                        return d.eachPoints(function(b) {
                            a.push(b.value)
                        }), a
                    },
                    f = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: a.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(a) {
                            var b = c.calculateScaleRange(e(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b)
                        },
                        xLabels: a,
                        font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && c.extend(f, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new b.Scale(f)
            },
            addData: function(a, b) {
                c.each(a, function(a, c) {
                    this.datasets[c].points.push(new this.PointClass({
                        value: a,
                        label: b,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[c].pointStrokeColor,
                        fillColor: this.datasets[c].pointColor
                    }))
                }, this), this.scale.addXLabel(b), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), c.each(this.datasets, function(a) {
                    a.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var a = c.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(a)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear();
                var d = this.chart.ctx,
                    e = function(a) {
                        return null !== a.value
                    },
                    f = function(a, b, d) {
                        return c.findNextWhere(b, e, d) || a
                    },
                    g = function(a, b, d) {
                        return c.findPreviousWhere(b, e, d) || a
                    };
                this.scale.draw(b), c.each(this.datasets, function(a) {
                    var h = c.where(a.points, e);
                    c.each(a.points, function(a, c) {
                        a.hasValue() && a.transition({
                            y: this.scale.calculateY(a.value),
                            x: this.scale.calculateX(c)
                        }, b)
                    }, this), this.options.bezierCurve && c.each(h, function(a, b) {
                        var d = b > 0 && b < h.length - 1 ? this.options.bezierCurveTension : 0;
                        a.controlPoints = c.splineCurve(g(a, h, b), a, f(a, h, b), d), a.controlPoints.outer.y > this.scale.endPoint ? a.controlPoints.outer.y = this.scale.endPoint : a.controlPoints.outer.y < this.scale.startPoint && (a.controlPoints.outer.y = this.scale.startPoint), a.controlPoints.inner.y > this.scale.endPoint ? a.controlPoints.inner.y = this.scale.endPoint : a.controlPoints.inner.y < this.scale.startPoint && (a.controlPoints.inner.y = this.scale.startPoint)
                    }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(h, function(a, b) {
                        if (0 === b) d.moveTo(a.x, a.y);
                        else if (this.options.bezierCurve) {
                            var c = g(a, h, b);
                            d.bezierCurveTo(c.controlPoints.outer.x, c.controlPoints.outer.y, a.controlPoints.inner.x, a.controlPoints.inner.y, a.x, a.y)
                        } else d.lineTo(a.x, a.y)
                    }, this), d.stroke(), this.options.datasetFill && h.length > 0 && (d.lineTo(h[h.length - 1].x, this.scale.endPoint), d.lineTo(h[0].x, this.scale.endPoint), d.fillStyle = a.fillColor, d.closePath(), d.fill()), c.each(h, function(a) {
                        a.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        b.Type.extend({
            name: "PolarArea",
            defaults: d,
            initialize: function(a) {
                this.segments = [], this.SegmentArc = b.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new b.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: a.length
                }), this.updateScaleRange(a), this.scale.update(), c.each(a, function(a, b) {
                    this.addData(a, b, !0)
                }, this), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) {
                        a.restore(["fillColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightColor
                    }), this.showTooltip(b)
                }), this.render()
            },
            getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) {
                    a.inRange(d.x, d.y) && b.push(a)
                }, this), b
            },
            addData: function(a, b, c) {
                var d = b || this.segments.length;
                this.segments.splice(d, 0, new this.SegmentArc({
                    fillColor: a.color,
                    highlightColor: a.highlight || a.color,
                    label: a.label,
                    value: a.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(a.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), c || (this.reflow(), this.update())
            },
            removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update()
            },
            calculateTotal: function(a) {
                this.total = 0, c.each(a, function(a) {
                    this.total += a.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(a) {
                var b = [];
                c.each(a, function(a) {
                    b.push(a.value)
                });
                var d = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d, {
                    size: c.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), c.each(this.segments, function(a) {
                    a.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                c.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), c.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), c.each(this.segments, function(a) {
                    a.update({
                        outerRadius: this.scale.calculateCenterOffset(a.value)
                    })
                }, this)
            },
            draw: function(a) {
                var b = a || 1;
                this.clear(), c.each(this.segments, function(a, c) {
                    a.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(a.value)
                    }, b), a.endAngle = a.startAngle + a.circumference, 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle), a.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers;
        b.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(a) {
                this.PointClass = b.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(a), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) {
                        a.restore(["fillColor", "strokeColor"])
                    }), c.each(b, function(a) {
                        a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                    }), this.showTooltip(b)
                }), c.each(a.datasets, function(b) {
                    var d = {
                        label: b.label || null,
                        fillColor: b.fillColor,
                        strokeColor: b.strokeColor,
                        pointColor: b.pointColor,
                        pointStrokeColor: b.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        var f;
                        this.scale.animation || (f = this.scale.getPointPosition(e, this.scale.calculateCenterOffset(c))), d.points.push(new this.PointClass({
                            value: c,
                            label: a.labels[e],
                            datasetLabel: b.label,
                            x: this.options.animation ? this.scale.xCenter : f.x,
                            y: this.options.animation ? this.scale.yCenter : f.y,
                            strokeColor: b.pointStrokeColor,
                            fillColor: b.pointColor,
                            highlightFill: b.pointHighlightFill || b.pointColor,
                            highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(a) {
                c.each(this.datasets, function(b) {
                    c.each(b.points, a, this)
                }, this)
            },
            getPointsAtEvent: function(a) {
                var b = c.getRelativePosition(a),
                    d = c.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, b),
                    e = 2 * Math.PI / this.scale.valuesCount,
                    f = Math.round((d.angle - 1.5 * Math.PI) / e),
                    g = [];
                return (f >= this.scale.valuesCount || 0 > f) && (f = 0), d.distance <= this.scale.drawingArea && c.each(this.datasets, function(a) {
                    g.push(a.points[f])
                }), g
            },
            buildScale: function(a) {
                this.scale = new b.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: a.labels,
                    valuesCount: a.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(a.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(a) {
                var b = function() {
                        var b = [];
                        return c.each(a, function(a) {
                            a.data ? b = b.concat(a.data) : c.each(a.points, function(a) {
                                b.push(a.value)
                            })
                        }), b
                    }(),
                    d = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d)
            },
            addData: function(a, b) {
                this.scale.valuesCount++, c.each(a, function(a, c) {
                    var d = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(a));
                    this.datasets[c].points.push(new this.PointClass({
                        value: a,
                        label: b,
                        x: d.x,
                        y: d.y,
                        strokeColor: this.datasets[c].pointStrokeColor,
                        fillColor: this.datasets[c].pointColor
                    }))
                }, this), this.scale.labels.push(b), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), c.each(this.datasets, function(a) {
                    a.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(a) {
                    a.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                c.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: c.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(a) {
                var b = a || 1,
                    d = this.chart.ctx;
                this.clear(), this.scale.draw(), c.each(this.datasets, function(a) {
                    c.each(a.points, function(a, c) {
                        a.hasValue() && a.transition(this.scale.getPointPosition(c, this.scale.calculateCenterOffset(a.value)), b)
                    }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(a.points, function(a, b) {
                        0 === b ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y)
                    }, this), d.closePath(), d.stroke(), d.fillStyle = a.fillColor, d.fill(), c.each(a.points, function(a) {
                        a.hasValue() && a.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function(a) {
        "use strict";
        a.fn.countTo = function(b) {
            b = a.extend({}, a.fn.countTo.defaults, b || {});
            var c = Math.ceil(b.speed / b.refreshInterval),
                d = (b.to - b.from) / c;
            return a(this).each(function() {
                function e() {
                    h += d, g++, a(f).html(h.toFixed(b.decimals)), "function" == typeof b.onUpdate && b.onUpdate.call(f, h), g >= c && (clearInterval(i), h = b.to, "function" == typeof b.onComplete && b.onComplete.call(f, h))
                }
                var f = this,
                    g = 0,
                    h = b.from,
                    i = setInterval(e, b.refreshInterval)
            })
        }, a.fn.countTo.defaults = {
            from: 0,
            to: 100,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null
        }, a.fn.absoluteCounter = function(b) {
            return b = a.extend({}, a.fn.absoluteCounter.defaults, b || {}), a(this).each(function() {
                var c = this,
                    d = b.speed,
                    e = b.setStyles,
                    f = b.delayedStart,
                    g = b.fadeInDelay;
                e && a(c).css({
                    display: "block",
                    position: "relative",
                    overflow: "hidden"
                }).addClass("animated"), a(c).css("opacity", "0"), a(c).animate({
                    opacity: 0
                }, f, function() {
                    var f = a(c).text();
                    a(c).text("");
                    for (var h = 0; h < f.length; h++) {
                        var i = f.charAt(h),
                            j = "";
                        if (parseInt(i, 10) >= 0) {
                            j = '<span class="onedigit p' + (f.length - h) + " d" + i + '">';
                            for (var k = 0; k <= parseInt(i, 10); k++) j += '<span class="n' + k % 10 + '">' + k % 10 + "</span>";
                            j += "</span>"
                        } else j = '<span class="onedigit p' + (f.length - h) + ' char"><span class="c">' + i + "</span></span>";
                        a(c).append(j)
                    }
                    a(c).animate({
                        opacity: 1
                    }, g), a("span.onedigit", c).each(function(f, g) {
                        e && (a(g).css({
                            float: "left",
                            position: "relative"
                        }), a("span", a(g)).css({
                            display: "block"
                        }));
                        var h = a("span", a(g)).length,
                            i = a(c).height();
                        a(g).css({
                            height: h * i + "px",
                            top: "0"
                        }), a("span", a(g)).css({
                            height: i + "px"
                        }), a(g).animate({
                            top: (h - 1) * i * -1 + "px"
                        }, d, function() {
                            "function" == typeof b.onComplete && b.onComplete.call(c)
                        })
                    })
                })
            })
        }, a.fn.absoluteCounter.defaults = {
            speed: 2e3,
            setStyles: !0,
            onComplete: null,
            delayedStart: 0,
            fadeInDelay: 0
        }
    }(jQuery),
    function(a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b : a.fluidvids = b()
    }(this, function() {
        "use strict";

        function a(a) {
            return new RegExp("^(https?:)?//(?:" + e.players.join("|") + ").*$", "i").test(a)
        }

        function b(a, b) {
            return parseInt(a, 10) / parseInt(b, 10) * 100 + "%"
        }

        function c(c) {
            if ((a(c.src) || a(c.data)) && !c.getAttribute("data-fluidvids")) {
                var d = document.createElement("div");
                c.parentNode.insertBefore(d, c), c.className += (c.className ? " " : "") + "fluidvids-item", c.setAttribute("data-fluidvids", "loaded"), d.className += "fluidvids", d.style.paddingTop = b(c.height, c.width), d.appendChild(c)
            }
        }

        function d() {
            var a = document.createElement("div");
            a.innerHTML = "<p>x</p><style>" + f + "</style>", g.appendChild(a.childNodes[1])
        }
        var e = {
                selector: ["iframe", "object"],
                players: ["www.youtube.com", "player.vimeo.com"]
            },
            f = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join(""),
            g = document.head || document.getElementsByTagName("head")[0];
        return e.render = function() {
            for (var a = document.querySelectorAll(e.selector.join()), b = a.length; b--;) c(a[b])
        }, e.init = function(a) {
            for (var b in a) e[b] = a[b];
            e.render(), d()
        }, e
    }),
    function(a) {
        function b() {
            var a = location.href;
            return hashtag = -1 !== a.indexOf("#prettyPhoto") && decodeURI(a.substring(a.indexOf("#prettyPhoto") + 1, a.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
        }

        function c() {
            "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
        }

        function d() {
            -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
        }

        function e(a, b) {
            a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var c = "[\\?&]" + a + "=([^&#]*)",
                d = new RegExp(c),
                e = d.exec(b);
            return null == e ? "" : e[1]
        }
        a.prettyPhoto = {
            version: "3.1.6"
        }, a.fn.prettyPhoto = function(f) {
            function g() {
                a(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (A / 2 - r.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                    height: r.contentHeight,
                    width: r.contentWidth
                }, settings.animation_speed), $pp_pic_holder.animate({
                    top: projectedTop,
                    left: B / 2 - r.containerWidth / 2 < 0 ? 0 : B / 2 - r.containerWidth / 2,
                    width: r.containerWidth
                }, settings.animation_speed, function() {
                    $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(r.height).width(r.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == l(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (r.resized ? a("a.pp_expand,a.pp_contract").show() : a("a.pp_expand").hide()), !settings.autoplay_slideshow || x || s || a.prettyPhoto.startSlideshow(), settings.changepicturecallback(), s = !0
                }), p(), f.ajaxcallback()
            }

            function h(b) {
                $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                    a(".pp_loaderIcon").show(), b()
                })
            }

            function i(b) {
                b > 1 ? a(".pp_nav").show() : a(".pp_nav").hide()
            }

            function j(a, b) {
                if (resized = !1, k(a, b), imageWidth = a, imageHeight = b, (w > B || v > A) && doresize && settings.allow_resize && !z) {
                    for (resized = !0, fitting = !1; !fitting;) w > B ? (imageWidth = B - 200, imageHeight = b / a * imageWidth) : v > A ? (imageHeight = A - 200, imageWidth = a / b * imageHeight) : fitting = !0, v = imageHeight, w = imageWidth;
                    (w > B || v > A) && j(w, v), k(imageWidth, imageHeight)
                }
                return {
                    width: Math.floor(imageWidth),
                    height: Math.floor(imageHeight),
                    containerHeight: Math.floor(v),
                    containerWidth: Math.floor(w) + 2 * settings.horizontal_padding,
                    contentHeight: Math.floor(t),
                    contentWidth: Math.floor(u),
                    resized: resized
                }
            }

            function k(b, c) {
                b = parseFloat(b), c = parseFloat(c), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(b), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(b).appendTo(a("body")).css({
                    position: "absolute",
                    top: -1e4
                }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(b), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(a("body")).css({
                    position: "absolute",
                    top: -1e4
                }), titleHeight += $pp_title.height(), $pp_title.remove(), t = c + detailsHeight, u = b, v = t + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), w = b
            }

            function l(a) {
                return a.match(/youtube\.com\/watch/i) || a.match(/youtu\.be/i) ? "youtube" : a.match(/vimeo\.com/i) ? "vimeo" : a.match(/\b.mov\b/i) ? "quicktime" : a.match(/\b.swf\b/i) ? "flash" : a.match(/\biframe=true\b/i) ? "iframe" : a.match(/\bajax=true\b/i) ? "ajax" : a.match(/\bcustom=true\b/i) ? "custom" : "#" == a.substr(0, 1) ? "inline" : "image"
            }

            function m() {
                if (doresize && "undefined" != typeof $pp_pic_holder) {
                    if (scroll_pos = n(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = A / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > A) return;
                    $pp_pic_holder.css({
                        top: projectedTop,
                        left: B / 2 + scroll_pos.scrollLeft - contentwidth / 2
                    })
                }
            }

            function n() {
                return self.pageYOffset ? {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                } : document.documentElement && document.documentElement.scrollTop ? {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                } : document.body ? {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                } : void 0
            }

            function o() {
                A = a(window).height(), B = a(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(a(document).height()).width(B)
            }

            function p() {
                isSet && settings.overlay_gallery && "image" == l(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((r.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, a.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }

            function q() {
                if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), a("body").append(settings.markup), $pp_pic_holder = a(".pp_pic_holder"), $ppt = a(".ppt"), $pp_overlay = a("div.pp_overlay"), isSet && settings.overlay_gallery) {
                    currentGalleryPage = 0, toInject = "";
                    for (var b = 0; b < pp_images.length; b++) pp_images[b].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[b]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                    toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = a(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                        return a.prettyPhoto.changeGalleryPage("next"), a.prettyPhoto.stopSlideshow(), !1
                    }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                        return a.prettyPhoto.changeGalleryPage("previous"), a.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_content").hover(function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                    }, function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                    }), itemWidth = 57, $pp_gallery_li.each(function(b) {
                        a(this).find("a").click(function() {
                            return a.prettyPhoto.changePage(b), a.prettyPhoto.stopSlideshow(), !1
                        })
                    })
                }
                settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    return a.prettyPhoto.startSlideshow(), !1
                })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                    opacity: 0,
                    height: a(document).height(),
                    width: a(window).width()
                }).bind("click", function() {
                    settings.modal || a.prettyPhoto.close()
                }), a("a.pp_close").bind("click", function() {
                    return a.prettyPhoto.close(), !1
                }), settings.allow_expand && a("a.pp_expand").bind("click", function() {
                    return a(this).hasClass("pp_expand") ? (a(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (a(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), h(function() {
                        a.prettyPhoto.open()
                    }), !1
                }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                    return a.prettyPhoto.changePage("previous"), a.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                    return a.prettyPhoto.changePage("next"), a.prettyPhoto.stopSlideshow(), !1
                }), m()
            }
            f = jQuery.extend({
                hook: "rel",
                animation_speed: "fast",
                ajaxcallback: function() {},
                slideshow: 5e3,
                autoplay_slideshow: !1,
                opacity: .8,
                show_title: !0,
                allow_resize: !0,
                allow_expand: !0,
                default_width: 500,
                default_height: 344,
                counter_separator_label: "/",
                theme: "pp_default",
                horizontal_padding: 20,
                hideflash: !1,
                wmode: "opaque",
                autoplay: !0,
                modal: !1,
                deeplinking: !0,
                overlay_gallery: !0,
                overlay_gallery_max: 30,
                keyboard_shortcuts: !0,
                changepicturecallback: function() {},
                callback: function() {},
                ie6_fallback: !0,
                markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: "",
                social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
            }, f);
            var r, s, t, u, v, w, x, y = this,
                z = !1,
                A = a(window).height(),
                B = a(window).width();
            return doresize = !0, scroll_pos = n(), a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
                m(), o()
            }), f.keyboard_shortcuts && a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(b) {
                if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (b.keyCode) {
                    case 37:
                        a.prettyPhoto.changePage("previous"), b.preventDefault();
                        break;
                    case 39:
                        a.prettyPhoto.changePage("next"), b.preventDefault();
                        break;
                    case 27:
                        settings.modal || a.prettyPhoto.close(), b.preventDefault()
                }
            }), a.prettyPhoto.initialize = function() {
                return settings = f, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = a(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(y, function(b) {
                    return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("href") : void 0
                }) : a.makeArray(a(this).attr("href")), pp_titles = isSet ? jQuery.map(y, function(b) {
                    return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).find("img").attr("alt") ? a(b).find("img").attr("alt") : "" : void 0
                }) : a.makeArray(a(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(y, function(b) {
                    return -1 != a(b).attr(settings.hook).indexOf(theRel) ? a(b).attr("title") ? a(b).attr("title") : "" : void 0
                }) : a.makeArray(a(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(a(this).attr("href"), pp_images), rel_index = isSet ? set_position : a("a[" + settings.hook + "^='" + theRel + "']").index(a(this)), q(this), settings.allow_resize && a(window).bind("scroll.prettyphoto", function() {
                    m()
                }), a.prettyPhoto.open(), !1
            }, a.prettyPhoto.open = function(b) {
                return "undefined" == typeof settings && (settings = f, pp_images = a.makeArray(arguments[0]), pp_titles = a.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = a.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, q(b.target)), settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), i(a(pp_images).size()), a(".pp_loaderIcon").show(), settings.deeplinking && c(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + a(pp_images).size()), void 0 !== pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(e("width", pp_images[set_position])) ? e("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(e("height", pp_images[set_position])) ? e("height", pp_images[set_position]) : settings.default_height.toString(), z = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(a(window).height() * parseFloat(movie_height) / 100 - 150), z = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(a(window).width() * parseFloat(movie_width) / 100 - 150), z = !0), $pp_pic_holder.fadeIn(function() {
                    switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && void 0 !== pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, l(pp_images[set_position])) {
                        case "image":
                            imgPreloader = new Image, nextImage = new Image, isSet && set_position < a(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                                r = j(imgPreloader.width, imgPreloader.height), g()
                            }, imgPreloader.onerror = function() {
                                alert("Image cannot be loaded. Make sure the path is correct and image exist."), a.prettyPhoto.close()
                            }, imgPreloader.src = pp_images[set_position];
                            break;
                        case "youtube":
                            r = j(movie_width, movie_height), movie_id = e("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "https://www.youtube.com/embed/" + movie_id, movie += e("rel", pp_images[set_position]) ? "?rel=" + e("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                            break;
                        case "vimeo":
                            r = j(movie_width, movie_height), movie_id = pp_images[set_position];
                            var b = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                                c = movie_id.match(b);
                            movie = "https://player.vimeo.com/video/" + c[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = r.width + "/embed/?moog_width=" + r.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, r.height).replace(/{path}/g, movie);
                            break;
                        case "quicktime":
                            r = j(movie_width, movie_height), r.height += 15, r.contentHeight += 15, r.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                            break;
                        case "flash":
                            r = j(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                            break;
                        case "iframe":
                            r = j(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, r.width).replace(/{height}/g, r.height).replace(/{path}/g, frame_url);
                            break;
                        case "ajax":
                            doresize = !1, r = j(movie_width, movie_height), doresize = !0, skipInjection = !0, a.get(pp_images[set_position], function(a) {
                                toInject = settings.inline_markup.replace(/{content}/g, a), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, g()
                            });
                            break;
                        case "custom":
                            r = j(movie_width, movie_height), toInject = settings.custom_markup;
                            break;
                        case "inline":
                            myClone = a(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                width: settings.default_width
                            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show(), doresize = !1, r = j(a(myClone).width(), a(myClone).height()), doresize = !0, a(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, a(pp_images[set_position]).html())
                    }
                    imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, g())
                }), !1
            }, a.prettyPhoto.changePage = function(b) {
                currentGalleryPage = 0, "previous" == b ? --set_position < 0 && (set_position = a(pp_images).size() - 1) : "next" == b ? ++set_position > a(pp_images).size() - 1 && (set_position = 0) : set_position = b, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && a(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), h(function() {
                    a.prettyPhoto.open()
                })
            }, a.prettyPhoto.changeGalleryPage = function(a) {
                "next" == a ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0) : "previous" == a ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage) : currentGalleryPage = a, slide_speed = "next" == a || "previous" == a ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                    left: -slide_to
                }, slide_speed)
            }, a.prettyPhoto.startSlideshow = function() {
                void 0 === x ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    return a.prettyPhoto.stopSlideshow(), !1
                }), x = setInterval(a.prettyPhoto.startSlideshow, settings.slideshow)) : a.prettyPhoto.changePage("next")
            }, a.prettyPhoto.stopSlideshow = function() {
                $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                    return a.prettyPhoto.startSlideshow(), !1
                }), clearInterval(x), x = void 0
            }, a.prettyPhoto.close = function() {
                $pp_overlay.is(":animated") || (a.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                    a(this).remove()
                }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                    settings.hideflash && a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), a(this).remove(), a(window).unbind("scroll.prettyphoto"), d(), settings.callback(), doresize = !0, s = !1, delete settings
                }))
            }, !pp_alreadyInitialized && b() && (pp_alreadyInitialized = !0, hashIndex = b(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
                a("a[" + f.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", a.prettyPhoto.initialize)
        }
    }(jQuery);
var pp_alreadyInitialized = !1;
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = !1,
        c = !1,
        d = 0,
        e = 2e3,
        f = 0,
        g = ["webkit", "ms", "moz", "o"],
        h = window.requestAnimationFrame || !1,
        i = window.cancelAnimationFrame || !1;
    if (!h)
        for (var j in g) {
            var k = g[j];
            h || (h = window[k + "RequestAnimationFrame"]), i || (i = window[k + "CancelAnimationFrame"] || window[k + "CancelRequestAnimationFrame"])
        }
    var l = window.MutationObserver || window.WebKitMutationObserver || !1,
        m = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: function() {
                var a = document.getElementsByTagName("script"),
                    a = a[a.length - 1].src.split("?")[0];
                return 0 < a.split("/").length ? a.split("/").slice(0, -1).join("/") + "/" : ""
            }(),
            preventmultitouchscrolling: !0
        },
        n = !1,
        o = function() {
            if (n) return n;
            var a = document.createElement("DIV"),
                b = a.style,
                c = navigator.userAgent,
                d = navigator.platform,
                e = {
                    haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document
                };
            e.isopera = "opera" in window, e.isopera12 = e.isopera && "getUserMedia" in navigator, e.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), e.isie = "all" in document && "attachEvent" in a && !e.isopera, e.isieold = e.isie && !("msInterpolationMode" in b), e.isie7 = e.isie && !e.isieold && (!("documentMode" in document) || 7 == document.documentMode), e.isie8 = e.isie && "documentMode" in document && 8 == document.documentMode, e.isie9 = e.isie && "performance" in window && 9 <= document.documentMode, e.isie10 = e.isie && "performance" in window && 10 == document.documentMode, e.isie11 = "msRequestFullscreen" in a && 11 <= document.documentMode, e.isie9mobile = /iemobile.9/i.test(c), e.isie9mobile && (e.isie9 = !1), e.isie7mobile = !e.isie9mobile && e.isie7 && /iemobile/i.test(c), e.ismozilla = "MozAppearance" in b, e.iswebkit = "WebkitAppearance" in b, e.ischrome = "chrome" in window, e.ischrome22 = e.ischrome && e.haspointerlock, e.ischrome26 = e.ischrome && "transition" in b, e.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, e.hasmstouch = window.MSPointerEvent || !1, e.hasw3ctouch = window.PointerEvent || !1, e.ismac = /^mac$/i.test(d), e.isios = e.cantouch && /iphone|ipad|ipod/i.test(d), e.isios4 = e.isios && !("seal" in Object), e.isios7 = e.isios && "webkitHidden" in document, e.isandroid = /android/i.test(c), e.haseventlistener = "addEventListener" in a, e.trstyle = !1, e.hastransform = !1, e.hastranslate3d = !1, e.transitionstyle = !1, e.hastransition = !1, e.transitionend = !1, d = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
            for (c = 0; c < d.length; c++)
                if (void 0 !== b[d[c]]) {
                    e.trstyle = d[c];
                    break
                }
            e.hastransform = !!e.trstyle, e.hastransform && (b[e.trstyle] = "translate3d(1px,2px,3px)", e.hastranslate3d = /translate3d/.test(b[e.trstyle])), e.transitionstyle = !1, e.prefixstyle = "", e.transitionend = !1;
            for (var d = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), f = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), g = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), c = 0; c < d.length; c++)
                if (d[c] in b) {
                    e.transitionstyle = d[c], e.prefixstyle = f[c], e.transitionend = g[c];
                    break
                }
            e.ischrome26 && (e.prefixstyle = f[1]), e.hastransition = e.transitionstyle;
            a: {
                for (c = ["-webkit-grab", "-moz-grab", "grab"], (e.ischrome && !e.ischrome22 || e.isie) && (c = []), d = 0; d < c.length; d++)
                    if (f = c[d], b.cursor = f, b.cursor == f) {
                        b = f;
                        break a
                    }
                b = "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
            }
            return e.cursorgrabvalue = b, e.hasmousecapture = "setCapture" in a, e.hasMutationObserver = !1 !== l, n = e
        },
        p = function(g, j) {
            function k() {
                var a = t.doc.css(v.trstyle);
                return !(!a || "matrix" != a.substr(0, 6)) && a.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
            }

            function n() {
                var a = t.win;
                if ("zIndex" in a) return a.zIndex();
                for (; 0 < a.length && 9 != a[0].nodeType;) {
                    var b = a.css("zIndex");
                    if (!isNaN(b) && 0 != b) return parseInt(b);
                    a = a.parent()
                }
                return !1
            }

            function p(a, b, c) {
                return b = a.css(b), a = parseFloat(b), isNaN(a) ? (a = z[b] || 0, c = 3 == a ? c ? t.win.outerHeight() - t.win.innerHeight() : t.win.outerWidth() - t.win.innerWidth() : 1, t.isie8 && a && (a += 1), c ? a : 0) : a
            }

            function r(a, b, c, d) {
                t._bind(a, b, function(d) {
                    d = d || window.event;
                    var e = {
                        original: d,
                        target: d.target || d.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == d.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function() {
                            return d.preventDefault ? d.preventDefault() : d.returnValue = !1, !1
                        },
                        stopImmediatePropagation: function() {
                            d.stopImmediatePropagation ? d.stopImmediatePropagation() : d.cancelBubble = !0
                        }
                    };
                    return "mousewheel" == b ? (e.deltaY = -.025 * d.wheelDelta, d.wheelDeltaX && (e.deltaX = -.025 * d.wheelDeltaX)) : e.deltaY = d.detail, c.call(a, e)
                }, d)
            }

            function s(a, b, c) {
                var d, e;
                if (0 == a.deltaMode ? (d = -Math.floor(t.opt.mousescrollstep / 54 * a.deltaX), e = -Math.floor(t.opt.mousescrollstep / 54 * a.deltaY)) : 1 == a.deltaMode && (d = -Math.floor(a.deltaX * t.opt.mousescrollstep), e = -Math.floor(a.deltaY * t.opt.mousescrollstep)), b && t.opt.oneaxismousemode && 0 == d && e && (d = e, e = 0, c && (0 > d ? t.getScrollLeft() >= t.page.maxw : 0 >= t.getScrollLeft()) && (e = d, d = 0)), d && (t.scrollmom && t.scrollmom.stop(), t.lastdeltax += d, t.debounced("mousewheelx", function() {
                        var a = t.lastdeltax;
                        t.lastdeltax = 0, t.rail.drag || t.doScrollLeftBy(a)
                    }, 15)), e) {
                    if (t.opt.nativeparentscrolling && c && !t.ispage && !t.zoomactive)
                        if (0 > e) {
                            if (t.getScrollTop() >= t.page.maxh) return !0
                        } else if (0 >= t.getScrollTop()) return !0;
                    t.scrollmom && t.scrollmom.stop(), t.lastdeltay += e, t.debounced("mousewheely", function() {
                        var a = t.lastdeltay;
                        t.lastdeltay = 0, t.rail.drag || t.doScrollBy(a)
                    }, 15)
                }
                return a.stopImmediatePropagation(), a.preventDefault()
            }
            var t = this;
            if (this.version = "3.6.0", this.name = "nicescroll", this.me = j, this.opt = {
                    doc: a("body"),
                    win: !1
                }, a.extend(this.opt, m), this.opt.snapbackspeed = 80, g)
                for (var u in t.opt) void 0 !== g[u] && (t.opt[u] = g[u]);
            this.iddoc = (this.doc = t.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(t.opt.win ? t.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== t.opt.win, this.win = t.opt.win || (this.ispage ? a(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? a(window) : this.win, this.body = a("body"), this.iframe = this.isfixed = this.viewport = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != t.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1, this.scroll = {
                x: 0,
                y: 0
            }, this.scrollratio = {
                x: 0,
                y: 0
            }, this.cursorheight = 20, this.scrollvaluemax = 0, this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : !0 === this.opt.rtlmode, this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
            do {
                this.id = "ascrail" + e++
            } while (document.getElementById(this.id));
            this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1, this.visibility = !0, this.hidden = this.locked = this.railslocked = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = t.opt.overflowx, this.overflowy = t.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltay = this.lastdeltax = 0, this.detected = o();
            var v = a.extend({}, this.detected);
            this.ishwscroll = (this.canhwscroll = v.hastransform && t.opt.hwacceleration) && t.haswrapper, this.hasreversehr = this.isrtlmode && !v.iswebkit, this.istouchcapable = !1, !v.cantouch || v.isios || v.isandroid || !v.iswebkit && !v.ismozilla || (this.istouchcapable = !0, v.cantouch = !1), t.opt.enablemouselockapi || (v.hasmousecapture = !1, v.haspointerlock = !1), this.debounced = function(a, b, c) {
                var d = t.delaylist[a];
                t.delaylist[a] = b, d || setTimeout(function() {
                    var b = t.delaylist[a];
                    t.delaylist[a] = !1, b.call(t)
                }, c)
            };
            var w = !1;
            this.synched = function(a, b) {
                return t.synclist[a] = b,
                    function() {
                        w || (h(function() {
                            w = !1;
                            for (var a in t.synclist) {
                                var b = t.synclist[a];
                                b && b.call(t), t.synclist[a] = !1
                            }
                        }), w = !0)
                    }(), a
            }, this.unsynched = function(a) {
                t.synclist[a] && (t.synclist[a] = !1)
            }, this.css = function(a, b) {
                for (var c in b) t.saved.css.push([a, c, a.css(c)]), a.css(c, b[c])
            }, this.scrollTop = function(a) {
                return void 0 === a ? t.getScrollTop() : t.setScrollTop(a)
            }, this.scrollLeft = function(a) {
                return void 0 === a ? t.getScrollLeft() : t.setScrollLeft(a)
            };
            var x = function(a, b, c, d, e, f, g) {
                this.st = a, this.ed = b, this.spd = c, this.p1 = d || 0, this.p2 = e || 1, this.p3 = f || 0, this.p4 = g || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
            };
            if (x.prototype = {
                    B2: function(a) {
                        return 3 * a * a * (1 - a)
                    },
                    B3: function(a) {
                        return 3 * a * (1 - a) * (1 - a)
                    },
                    B4: function(a) {
                        return (1 - a) * (1 - a) * (1 - a)
                    },
                    getNow: function() {
                        var a = 1 - ((new Date).getTime() - this.ts) / this.spd,
                            b = this.B2(a) + this.B3(a) + this.B4(a);
                        return 0 > a ? this.ed : this.st + Math.round(this.df * b)
                    },
                    update: function(a, b) {
                        return this.st = this.getNow(), this.ed = a, this.spd = b, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                    }
                }, this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                }, v.hastranslate3d && v.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(a) {
                    if (!a) {
                        if (a = k()) return 16 == a.length ? -a[13] : -a[5];
                        if (t.timerscroll && t.timerscroll.bz) return t.timerscroll.bz.getNow()
                    }
                    return t.doc.translate.y
                }, this.getScrollLeft = function(a) {
                    if (!a) {
                        if (a = k()) return 16 == a.length ? -a[12] : -a[4];
                        if (t.timerscroll && t.timerscroll.bh) return t.timerscroll.bh.getNow()
                    }
                    return t.doc.translate.x
                }, this.notifyScrollEvent = function(a) {
                    var b = document.createEvent("UIEvents");
                    b.initUIEvent("scroll", !1, !0, window, 1), b.niceevent = !0, a.dispatchEvent(b)
                };
                var y = this.isrtlmode ? 1 : -1;
                v.hastranslate3d && t.opt.enabletranslate3d ? (this.setScrollTop = function(a, b) {
                    t.doc.translate.y = a, t.doc.translate.ty = -1 * a + "px", t.doc.css(v.trstyle, "translate3d(" + t.doc.translate.tx + "," + t.doc.translate.ty + ",0px)"), b || t.notifyScrollEvent(t.win[0])
                }, this.setScrollLeft = function(a, b) {
                    t.doc.translate.x = a, t.doc.translate.tx = a * y + "px", t.doc.css(v.trstyle, "translate3d(" + t.doc.translate.tx + "," + t.doc.translate.ty + ",0px)"), b || t.notifyScrollEvent(t.win[0])
                }) : (this.setScrollTop = function(a, b) {
                    t.doc.translate.y = a, t.doc.translate.ty = -1 * a + "px", t.doc.css(v.trstyle, "translate(" + t.doc.translate.tx + "," + t.doc.translate.ty + ")"), b || t.notifyScrollEvent(t.win[0])
                }, this.setScrollLeft = function(a, b) {
                    t.doc.translate.x = a, t.doc.translate.tx = a * y + "px", t.doc.css(v.trstyle, "translate(" + t.doc.translate.tx + "," + t.doc.translate.ty + ")"), b || t.notifyScrollEvent(t.win[0])
                })
            } else this.getScrollTop = function() {
                return t.docscroll.scrollTop()
            }, this.setScrollTop = function(a) {
                return t.docscroll.scrollTop(a)
            }, this.getScrollLeft = function() {
                return t.detected.ismozilla && t.isrtlmode ? Math.abs(t.docscroll.scrollLeft()) : t.docscroll.scrollLeft()
            }, this.setScrollLeft = function(a) {
                return t.docscroll.scrollLeft(t.detected.ismozilla && t.isrtlmode ? -a : a)
            };
            this.getTarget = function(a) {
                return !!a && (a.target ? a.target : !!a.srcElement && a.srcElement)
            }, this.hasParent = function(a, b) {
                if (!a) return !1;
                for (var c = a.target || a.srcElement || a || !1; c && c.id != b;) c = c.parentNode || !1;
                return !1 !== c
            };
            var z = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getDocumentScrollOffset = function() {
                return {
                    top: window.pageYOffset || document.documentElement.scrollTop,
                    left: window.pageXOffset || document.documentElement.scrollLeft
                }
            }, this.getOffset = function() {
                if (t.isfixed) {
                    var a = t.win.offset(),
                        b = t.getDocumentScrollOffset();
                    return a.top -= b.top, a.left -= b.left, a
                }
                return a = t.win.offset(), t.viewport ? (b = t.viewport.offset(), {
                    top: a.top - b.top,
                    left: a.left - b.left
                }) : a
            }, this.updateScrollBar = function(a) {
                if (t.ishwscroll) t.rail.css({
                    height: t.win.innerHeight() - (t.opt.railpadding.top + t.opt.railpadding.bottom)
                }), t.railh && t.railh.css({
                    width: t.win.innerWidth() - (t.opt.railpadding.left + t.opt.railpadding.right)
                });
                else {
                    var b = t.getOffset(),
                        c = b.top,
                        d = b.left - (t.opt.railpadding.left + t.opt.railpadding.right),
                        c = c + p(t.win, "border-top-width", !0),
                        d = d + (t.rail.align ? t.win.outerWidth() - p(t.win, "border-right-width") - t.rail.width : p(t.win, "border-left-width")),
                        e = t.opt.railoffset;
                    e && (e.top && (c += e.top), t.rail.align && e.left && (d += e.left)), t.railslocked || t.rail.css({
                        top: c,
                        left: d,
                        height: (a ? a.h : t.win.innerHeight()) - (t.opt.railpadding.top + t.opt.railpadding.bottom)
                    }), t.zoom && t.zoom.css({
                        top: c + 1,
                        left: 1 == t.rail.align ? d - 20 : d + t.rail.width + 4
                    }), t.railh && !t.railslocked && (c = b.top, d = b.left, (e = t.opt.railhoffset) && (e.top && (c += e.top), e.left && (d += e.left)), a = t.railh.align ? c + p(t.win, "border-top-width", !0) + t.win.innerHeight() - t.railh.height : c + p(t.win, "border-top-width", !0), d += p(t.win, "border-left-width"), t.railh.css({
                        top: a - (t.opt.railpadding.top + t.opt.railpadding.bottom),
                        left: d,
                        width: t.railh.width
                    }))
                }
            }, this.doRailClick = function(a, b, c) {
                var d;
                t.railslocked || (t.cancelEvent(a), b ? (b = c ? t.doScrollLeft : t.doScrollTop, d = c ? (a.pageX - t.railh.offset().left - t.cursorwidth / 2) * t.scrollratio.x : (a.pageY - t.rail.offset().top - t.cursorheight / 2) * t.scrollratio.y, b(d)) : (b = c ? t.doScrollLeftBy : t.doScrollBy, d = c ? t.scroll.x : t.scroll.y, a = c ? a.pageX - t.railh.offset().left : a.pageY - t.rail.offset().top, c = c ? t.view.w : t.view.h, b(d >= a ? c : -c)))
            }, t.hasanimationframe = h, t.hascancelanimationframe = i, t.hasanimationframe ? t.hascancelanimationframe || (i = function() {
                t.cancelAnimationFrame = !0
            }) : (h = function(a) {
                return setTimeout(a, 15 - Math.floor(+new Date / 1e3) % 16)
            }, i = clearInterval), this.init = function() {
                if (t.saved.css = [], v.isie7mobile || v.isoperamini) return !0;
                if (v.hasmstouch && t.css(t.ispage ? a("html") : t.win, {
                        "-ms-touch-action": "none"
                    }), t.zindex = "auto", t.zindex = t.ispage || "auto" != t.opt.zindex ? t.opt.zindex : n() || "auto", !t.ispage && "auto" != t.zindex && t.zindex > f && (f = t.zindex), t.isie && 0 == t.zindex && "auto" == t.opt.zindex && (t.zindex = "auto"), !t.ispage || !v.cantouch && !v.isieold && !v.isie9mobile) {
                    var e = t.docscroll;
                    t.ispage && (e = t.haswrapper ? t.win : t.doc), v.isie9mobile || t.css(e, {
                        "overflow-y": "hidden"
                    }), t.ispage && v.isie7 && ("BODY" == t.doc[0].nodeName ? t.css(a("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == t.doc[0].nodeName && t.css(a("body"), {
                        "overflow-y": "hidden"
                    })), !v.isios || t.ispage || t.haswrapper || t.css(a("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var g = a(document.createElement("div"));
                    g.css({
                        position: "relative",
                        top: 0,
                        float: "right",
                        width: t.opt.cursorwidth,
                        height: "0px",
                        "background-color": t.opt.cursorcolor,
                        border: t.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": t.opt.cursorborderradius,
                        "-moz-border-radius": t.opt.cursorborderradius,
                        "border-radius": t.opt.cursorborderradius
                    }), g.hborder = parseFloat(g.outerHeight() - g.innerHeight()), g.addClass("nicescroll-cursors"), t.cursor = g;
                    var h = a(document.createElement("div"));
                    h.attr("id", t.id), h.addClass("nicescroll-rails nicescroll-rails-vr");
                    var i, j, k, m = ["left", "right", "top", "bottom"];
                    for (k in m) j = m[k], (i = t.opt.railpadding[j]) ? h.css("padding-" + j, i + "px") : t.opt.railpadding[j] = 0;
                    h.append(g), h.width = Math.max(parseFloat(t.opt.cursorwidth), g.outerWidth()), h.css({
                        width: h.width + "px",
                        zIndex: t.zindex,
                        background: t.opt.background,
                        cursor: "default"
                    }), h.visibility = !0, h.scrollable = !0, h.align = "left" == t.opt.railalign ? 0 : 1, t.rail = h, g = t.rail.drag = !1, !t.opt.boxzoom || t.ispage || v.isieold || (g = document.createElement("div"), t.bind(g, "click", t.doZoom), t.bind(g, "mouseenter", function() {
                        t.zoom.css("opacity", t.opt.cursoropacitymax)
                    }), t.bind(g, "mouseleave", function() {
                        t.zoom.css("opacity", t.opt.cursoropacitymin)
                    }), t.zoom = a(g), t.zoom.css({
                        cursor: "pointer",
                        "z-index": t.zindex,
                        backgroundImage: "url(" + t.opt.scriptpath + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), t.opt.dblclickzoom && t.bind(t.win, "dblclick", t.doZoom), v.cantouch && t.opt.gesturezoom && (t.ongesturezoom = function(a) {
                        return 1.5 < a.scale && t.doZoomIn(a), .8 > a.scale && t.doZoomOut(a), t.cancelEvent(a)
                    }, t.bind(t.win, "gestureend", t.ongesturezoom))), t.railh = !1;
                    var o;
                    if (t.opt.horizrailenabled && (t.css(e, {
                            "overflow-x": "hidden"
                        }), g = a(document.createElement("div")), g.css({
                            position: "absolute",
                            top: 0,
                            height: t.opt.cursorwidth,
                            width: "0px",
                            "background-color": t.opt.cursorcolor,
                            border: t.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": t.opt.cursorborderradius,
                            "-moz-border-radius": t.opt.cursorborderradius,
                            "border-radius": t.opt.cursorborderradius
                        }), v.isieold && g.css({
                            overflow: "hidden"
                        }), g.wborder = parseFloat(g.outerWidth() - g.innerWidth()), g.addClass("nicescroll-cursors"), t.cursorh = g, o = a(document.createElement("div")), o.attr("id", t.id + "-hr"), o.addClass("nicescroll-rails nicescroll-rails-hr"), o.height = Math.max(parseFloat(t.opt.cursorwidth), g.outerHeight()), o.css({
                            height: o.height + "px",
                            zIndex: t.zindex,
                            background: t.opt.background
                        }), o.append(g), o.visibility = !0, o.scrollable = !0, o.align = "top" == t.opt.railvalign ? 0 : 1, t.railh = o, t.railh.drag = !1), t.ispage ? (h.css({
                            position: "fixed",
                            top: "0px",
                            height: "100%"
                        }), h.align ? h.css({
                            right: "0px"
                        }) : h.css({
                            left: "0px"
                        }), t.body.append(h), t.railh && (o.css({
                            position: "fixed",
                            left: "0px",
                            width: "100%"
                        }), o.align ? o.css({
                            bottom: "0px"
                        }) : o.css({
                            top: "0px"
                        }), t.body.append(o))) : (t.ishwscroll ? ("static" == t.win.css("position") && t.css(t.win, {
                            position: "relative"
                        }), e = "HTML" == t.win[0].nodeName ? t.body : t.win, a(e).scrollTop(0).scrollLeft(0), t.zoom && (t.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": h.width + 4
                        }), e.append(t.zoom)), h.css({
                            position: "absolute",
                            top: 0
                        }), h.align ? h.css({
                            right: 0
                        }) : h.css({
                            left: 0
                        }), e.append(h), o && (o.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }), o.align ? o.css({
                            bottom: 0
                        }) : o.css({
                            top: 0
                        }), e.append(o))) : (t.isfixed = "fixed" == t.win.css("position"), e = t.isfixed ? "fixed" : "absolute", t.isfixed || (t.viewport = t.getViewport(t.win[0])), t.viewport && (t.body = t.viewport, 0 == /fixed|absolute/.test(t.viewport.css("position")) && t.css(t.viewport, {
                            position: "relative"
                        })), h.css({
                            position: e
                        }), t.zoom && t.zoom.css({
                            position: e
                        }), t.updateScrollBar(), t.body.append(h), t.zoom && t.body.append(t.zoom), t.railh && (o.css({
                            position: e
                        }), t.body.append(o))), v.isios && t.css(t.win, {
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            "-webkit-touch-callout": "none"
                        }), v.isie && t.opt.disableoutline && t.win.attr("hideFocus", "true"), v.iswebkit && t.opt.disableoutline && t.win.css({
                            outline: "none"
                        })), !1 === t.opt.autohidemode ? (t.autohidedom = !1, t.rail.css({
                            opacity: t.opt.cursoropacitymax
                        }), t.railh && t.railh.css({
                            opacity: t.opt.cursoropacitymax
                        })) : !0 === t.opt.autohidemode || "leave" === t.opt.autohidemode ? (t.autohidedom = a().add(t.rail), v.isie8 && (t.autohidedom = t.autohidedom.add(t.cursor)), t.railh && (t.autohidedom = t.autohidedom.add(t.railh)), t.railh && v.isie8 && (t.autohidedom = t.autohidedom.add(t.cursorh))) : "scroll" == t.opt.autohidemode ? (t.autohidedom = a().add(t.rail), t.railh && (t.autohidedom = t.autohidedom.add(t.railh))) : "cursor" == t.opt.autohidemode ? (t.autohidedom = a().add(t.cursor), t.railh && (t.autohidedom = t.autohidedom.add(t.cursorh))) : "hidden" == t.opt.autohidemode && (t.autohidedom = !1, t.hide(), t.railslocked = !1), v.isie9mobile) t.scrollmom = new q(t), t.onmangotouch = function() {
                        var a = t.getScrollTop(),
                            b = t.getScrollLeft();
                        if (a == t.scrollmom.lastscrolly && b == t.scrollmom.lastscrollx) return !0;
                        var c = a - t.mangotouch.sy,
                            d = b - t.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)))) {
                            var e = 0 > c ? -1 : 1,
                                f = 0 > d ? -1 : 1,
                                g = +new Date;
                            t.mangotouch.lazy && clearTimeout(t.mangotouch.lazy), 80 < g - t.mangotouch.tm || t.mangotouch.dry != e || t.mangotouch.drx != f ? (t.scrollmom.stop(), t.scrollmom.reset(b, a), t.mangotouch.sy = a, t.mangotouch.ly = a, t.mangotouch.sx = b, t.mangotouch.lx = b, t.mangotouch.dry = e, t.mangotouch.drx = f, t.mangotouch.tm = g) : (t.scrollmom.stop(), t.scrollmom.update(t.mangotouch.sx - d, t.mangotouch.sy - c), t.mangotouch.tm = g, c = Math.max(Math.abs(t.mangotouch.ly - a), Math.abs(t.mangotouch.lx - b)), t.mangotouch.ly = a, t.mangotouch.lx = b, 2 < c && (t.mangotouch.lazy = setTimeout(function() {
                                t.mangotouch.lazy = !1, t.mangotouch.dry = 0, t.mangotouch.drx = 0, t.mangotouch.tm = 0, t.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }, h = t.getScrollTop(), o = t.getScrollLeft(), t.mangotouch = {
                        sy: h,
                        ly: h,
                        dry: 0,
                        sx: o,
                        lx: o,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, t.bind(t.docscroll, "scroll", t.onmangotouch);
                    else {
                        if (v.cantouch || t.istouchcapable || t.opt.touchbehavior || v.hasmstouch) {
                            t.scrollmom = new q(t), t.ontouchstart = function(b) {
                                if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                                if (t.hasmoving = !1, !t.railslocked) {
                                    var c;
                                    if (v.hasmstouch)
                                        for (c = !!b.target && b.target; c;) {
                                            var d = a(c).getNiceScroll();
                                            if (0 < d.length && d[0].me == t.me) break;
                                            if (0 < d.length) return !1;
                                            if ("DIV" == c.nodeName && c.id == t.id) break;
                                            c = !!c.parentNode && c.parentNode
                                        }
                                    if (t.cancelScroll(), (c = t.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return t.stopPropagation(b);
                                    if (!("clientX" in b) && "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY), t.forcescreen && (d = b, b = {
                                            original: b.original ? b.original : b
                                        }, b.clientX = d.screenX, b.clientY = d.screenY), t.rail.drag = {
                                            x: b.clientX,
                                            y: b.clientY,
                                            sx: t.scroll.x,
                                            sy: t.scroll.y,
                                            st: t.getScrollTop(),
                                            sl: t.getScrollLeft(),
                                            pt: 2,
                                            dl: !1
                                        }, t.ispage || !t.opt.directionlockdeadzone) t.rail.drag.dl = "f";
                                    else {
                                        var d = a(window).width(),
                                            e = a(window).height(),
                                            f = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                            g = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                                            e = Math.max(0, g - e),
                                            d = Math.max(0, f - d);
                                        t.rail.drag.ck = !t.rail.scrollable && t.railh.scrollable ? 0 < e && "v" : !(!t.rail.scrollable || t.railh.scrollable) && (0 < d && "h"), t.rail.drag.ck || (t.rail.drag.dl = "f")
                                    }
                                    if (t.opt.touchbehavior && t.isiframe && v.isie && (d = t.win.position(), t.rail.drag.x += d.left, t.rail.drag.y += d.top), t.hasmoving = !1, t.lastmouseup = !1, t.scrollmom.reset(b.clientX, b.clientY), !v.cantouch && !this.istouchcapable && !b.pointerType) {
                                        if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !t.ispage && v.hasmousecapture && c.setCapture(), t.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick = function(a) {
                                            if (t.hasmoving) return !1;
                                            c._onclick.call(this, a)
                                        }), t.cancelEvent(b)) : t.stopPropagation(b);
                                        /SUBMIT|CANCEL|BUTTON/i.test(a(c).attr("type")) && (pc = {
                                            tg: c,
                                            click: !1
                                        }, t.preventclick = pc)
                                    }
                                }
                            }, t.ontouchend = function(a) {
                                if (!t.rail.drag) return !0;
                                if (2 == t.rail.drag.pt) {
                                    if (a.pointerType && 2 != a.pointerType && "touch" != a.pointerType) return !1;
                                    if (t.scrollmom.doMomentum(), t.rail.drag = !1, t.hasmoving && (t.lastmouseup = !0, t.hideCursor(), v.hasmousecapture && document.releaseCapture(), !v.cantouch)) return t.cancelEvent(a)
                                } else if (1 == t.rail.drag.pt) return t.onmouseup(a)
                            };
                            var p = t.opt.touchbehavior && t.isiframe && !v.hasmousecapture;
                            t.ontouchmove = function(b, c) {
                                if (!t.rail.drag || b.targetTouches && t.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                                if (2 == t.rail.drag.pt) {
                                    if (v.cantouch && v.isios && void 0 === b.original) return !0;
                                    if (t.hasmoving = !0, t.preventclick && !t.preventclick.click && (t.preventclick.click = t.preventclick.tg.onclick || !1, t.preventclick.tg.onclick = t.onpreventclick), b = a.extend({
                                            original: b
                                        }, b), "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY), t.forcescreen) {
                                        var d = b;
                                        b = {
                                            original: b.original ? b.original : b
                                        }, b.clientX = d.screenX, b.clientY = d.screenY
                                    }
                                    var e, d = e = 0;
                                    p && !c && (e = t.win.position(), d = -e.left, e = -e.top);
                                    var f = b.clientY + e;
                                    e = f - t.rail.drag.y;
                                    var g = b.clientX + d,
                                        h = g - t.rail.drag.x,
                                        i = t.rail.drag.st - e;
                                    t.ishwscroll && t.opt.bouncescroll ? 0 > i ? i = Math.round(i / 2) : i > t.page.maxh && (i = t.page.maxh + Math.round((i - t.page.maxh) / 2)) : (0 > i && (f = i = 0), i > t.page.maxh && (i = t.page.maxh, f = 0));
                                    var j;
                                    if (t.railh && t.railh.scrollable && (j = t.isrtlmode ? h - t.rail.drag.sl : t.rail.drag.sl - h, t.ishwscroll && t.opt.bouncescroll ? 0 > j ? j = Math.round(j / 2) : j > t.page.maxw && (j = t.page.maxw + Math.round((j - t.page.maxw) / 2)) : (0 > j && (g = j = 0), j > t.page.maxw && (j = t.page.maxw, g = 0))), d = !1, t.rail.drag.dl) d = !0, "v" == t.rail.drag.dl ? j = t.rail.drag.sl : "h" == t.rail.drag.dl && (i = t.rail.drag.st);
                                    else {
                                        e = Math.abs(e);
                                        var h = Math.abs(h),
                                            k = t.opt.directionlockdeadzone;
                                        if ("v" == t.rail.drag.ck) {
                                            if (e > k && h <= .3 * e) return t.rail.drag = !1, !0;
                                            h > k && (t.rail.drag.dl = "f", a("body").scrollTop(a("body").scrollTop()))
                                        } else if ("h" == t.rail.drag.ck) {
                                            if (h > k && e <= .3 * h) return t.rail.drag = !1, !0;
                                            e > k && (t.rail.drag.dl = "f", a("body").scrollLeft(a("body").scrollLeft()))
                                        }
                                    }
                                    if (t.synched("touchmove", function() {
                                            t.rail.drag && 2 == t.rail.drag.pt && (t.prepareTransition && t.prepareTransition(0), t.rail.scrollable && t.setScrollTop(i), t.scrollmom.update(g, f), t.railh && t.railh.scrollable ? (t.setScrollLeft(j), t.showCursor(i, j)) : t.showCursor(i), v.isie10 && document.selection.clear())
                                        }), v.ischrome && t.istouchcapable && (d = !1), d) return t.cancelEvent(b)
                                } else if (1 == t.rail.drag.pt) return t.onmousemove(b)
                            }
                        }
                        if (t.onmousedown = function(a, b) {
                                if (!t.rail.drag || 1 == t.rail.drag.pt) {
                                    if (t.railslocked) return t.cancelEvent(a);
                                    t.cancelScroll(), t.rail.drag = {
                                        x: a.clientX,
                                        y: a.clientY,
                                        sx: t.scroll.x,
                                        sy: t.scroll.y,
                                        pt: 1,
                                        hr: !!b
                                    };
                                    var c = t.getTarget(a);
                                    return !t.ispage && v.hasmousecapture && c.setCapture(), t.isiframe && !v.hasmousecapture && (t.saved.csspointerevents = t.doc.css("pointer-events"), t.css(t.doc, {
                                        "pointer-events": "none"
                                    })), t.hasmoving = !1, t.cancelEvent(a)
                                }
                            }, t.onmouseup = function(a) {
                                if (t.rail.drag) return 1 != t.rail.drag.pt || (v.hasmousecapture && document.releaseCapture(), t.isiframe && !v.hasmousecapture && t.doc.css("pointer-events", t.saved.csspointerevents), t.rail.drag = !1, t.hasmoving && t.triggerScrollEnd(), t.cancelEvent(a))
                            }, t.onmousemove = function(a) {
                                if (t.rail.drag && 1 == t.rail.drag.pt) {
                                    if (v.ischrome && 0 == a.which) return t.onmouseup(a);
                                    if (t.cursorfreezed = !0, t.hasmoving = !0, t.rail.drag.hr) {
                                        t.scroll.x = t.rail.drag.sx + (a.clientX - t.rail.drag.x), 0 > t.scroll.x && (t.scroll.x = 0);
                                        var b = t.scrollvaluemaxw;
                                        t.scroll.x > b && (t.scroll.x = b)
                                    } else t.scroll.y = t.rail.drag.sy + (a.clientY - t.rail.drag.y), 0 > t.scroll.y && (t.scroll.y = 0), b = t.scrollvaluemax, t.scroll.y > b && (t.scroll.y = b);
                                    return t.synched("mousemove", function() {
                                        t.rail.drag && 1 == t.rail.drag.pt && (t.showCursor(), t.rail.drag.hr ? t.hasreversehr ? t.doScrollLeft(t.scrollvaluemaxw - Math.round(t.scroll.x * t.scrollratio.x), t.opt.cursordragspeed) : t.doScrollLeft(Math.round(t.scroll.x * t.scrollratio.x), t.opt.cursordragspeed) : t.doScrollTop(Math.round(t.scroll.y * t.scrollratio.y), t.opt.cursordragspeed))
                                    }), t.cancelEvent(a)
                                }
                            }, v.cantouch || t.opt.touchbehavior) t.onpreventclick = function(a) {
                            if (t.preventclick) return t.preventclick.tg.onclick = t.preventclick.click, t.preventclick = !1, t.cancelEvent(a)
                        }, t.bind(t.win, "mousedown", t.ontouchstart), t.onclick = !v.isios && function(a) {
                            return !t.lastmouseup || (t.lastmouseup = !1, t.cancelEvent(a))
                        }, t.opt.grabcursorenabled && v.cursorgrabvalue && (t.css(t.ispage ? t.doc : t.win, {
                            cursor: v.cursorgrabvalue
                        }), t.css(t.rail, {
                            cursor: v.cursorgrabvalue
                        }));
                        else {
                            var r = function(a) {
                                if (t.selectiondrag) {
                                    if (a) {
                                        var b = t.win.outerHeight();
                                        a = a.pageY - t.selectiondrag.top, 0 < a && a < b && (a = 0), a >= b && (a -= b), t.selectiondrag.df = a
                                    }
                                    0 != t.selectiondrag.df && (t.doScrollBy(2 * -Math.floor(t.selectiondrag.df / 6)), t.debounced("doselectionscroll", function() {
                                        r()
                                    }, 50))
                                }
                            };
                            t.hasTextSelected = "getSelection" in document ? function() {
                                return 0 < document.getSelection().rangeCount
                            } : "selection" in document ? function() {
                                return "None" != document.selection.type
                            } : function() {
                                return !1
                            }, t.onselectionstart = function(a) {
                                t.ispage || (t.selectiondrag = t.win.offset())
                            }, t.onselectionend = function(a) {
                                t.selectiondrag = !1
                            }, t.onselectiondrag = function(a) {
                                t.selectiondrag && t.hasTextSelected() && t.debounced("selectionscroll", function() {
                                    r(a)
                                }, 250)
                            }
                        }
                        v.hasw3ctouch ? (t.css(t.rail, {
                            "touch-action": "none"
                        }), t.css(t.cursor, {
                            "touch-action": "none"
                        }), t.bind(t.win, "pointerdown", t.ontouchstart), t.bind(document, "pointerup", t.ontouchend), t.bind(document, "pointermove", t.ontouchmove)) : v.hasmstouch ? (t.css(t.rail, {
                            "-ms-touch-action": "none"
                        }), t.css(t.cursor, {
                            "-ms-touch-action": "none"
                        }), t.bind(t.win, "MSPointerDown", t.ontouchstart), t.bind(document, "MSPointerUp", t.ontouchend), t.bind(document, "MSPointerMove", t.ontouchmove), t.bind(t.cursor, "MSGestureHold", function(a) {
                            a.preventDefault()
                        }), t.bind(t.cursor, "contextmenu", function(a) {
                            a.preventDefault()
                        })) : this.istouchcapable && (t.bind(t.win, "touchstart", t.ontouchstart), t.bind(document, "touchend", t.ontouchend), t.bind(document, "touchcancel", t.ontouchend), t.bind(document, "touchmove", t.ontouchmove)), (t.opt.cursordragontouch || !v.cantouch && !t.opt.touchbehavior) && (t.rail.css({
                            cursor: "default"
                        }), t.railh && t.railh.css({
                            cursor: "default"
                        }), t.jqbind(t.rail, "mouseenter", function() {
                            if (!t.ispage && !t.win.is(":visible")) return !1;
                            t.canshowonmouseevent && t.showCursor(), t.rail.active = !0
                        }), t.jqbind(t.rail, "mouseleave", function() {
                            t.rail.active = !1, t.rail.drag || t.hideCursor()
                        }), t.opt.sensitiverail && (t.bind(t.rail, "click", function(a) {
                            t.doRailClick(a, !1, !1)
                        }), t.bind(t.rail, "dblclick", function(a) {
                            t.doRailClick(a, !0, !1)
                        }), t.bind(t.cursor, "click", function(a) {
                            t.cancelEvent(a)
                        }), t.bind(t.cursor, "dblclick", function(a) {
                            t.cancelEvent(a)
                        })), t.railh && (t.jqbind(t.railh, "mouseenter", function() {
                            if (!t.ispage && !t.win.is(":visible")) return !1;
                            t.canshowonmouseevent && t.showCursor(), t.rail.active = !0
                        }), t.jqbind(t.railh, "mouseleave", function() {
                            t.rail.active = !1, t.rail.drag || t.hideCursor()
                        }), t.opt.sensitiverail && (t.bind(t.railh, "click", function(a) {
                            t.doRailClick(a, !1, !0)
                        }), t.bind(t.railh, "dblclick", function(a) {
                            t.doRailClick(a, !0, !0)
                        }), t.bind(t.cursorh, "click", function(a) {
                            t.cancelEvent(a)
                        }), t.bind(t.cursorh, "dblclick", function(a) {
                            t.cancelEvent(a)
                        })))), v.cantouch || t.opt.touchbehavior ? (t.bind(v.hasmousecapture ? t.win : document, "mouseup", t.ontouchend), t.bind(document, "mousemove", t.ontouchmove), t.onclick && t.bind(document, "click", t.onclick), t.opt.cursordragontouch && (t.bind(t.cursor, "mousedown", t.onmousedown), t.bind(t.cursor, "mouseup", t.onmouseup), t.cursorh && t.bind(t.cursorh, "mousedown", function(a) {
                            t.onmousedown(a, !0)
                        }), t.cursorh && t.bind(t.cursorh, "mouseup", t.onmouseup))) : (t.bind(v.hasmousecapture ? t.win : document, "mouseup", t.onmouseup), t.bind(document, "mousemove", t.onmousemove), t.onclick && t.bind(document, "click", t.onclick), t.bind(t.cursor, "mousedown", t.onmousedown), t.bind(t.cursor, "mouseup", t.onmouseup), t.railh && (t.bind(t.cursorh, "mousedown", function(a) {
                            t.onmousedown(a, !0)
                        }), t.bind(t.cursorh, "mouseup", t.onmouseup)), !t.ispage && t.opt.enablescrollonselection && (t.bind(t.win[0], "mousedown", t.onselectionstart), t.bind(document, "mouseup", t.onselectionend), t.bind(t.cursor, "mouseup", t.onselectionend), t.cursorh && t.bind(t.cursorh, "mouseup", t.onselectionend), t.bind(document, "mousemove", t.onselectiondrag)), t.zoom && (t.jqbind(t.zoom, "mouseenter", function() {
                            t.canshowonmouseevent && t.showCursor(), t.rail.active = !0
                        }), t.jqbind(t.zoom, "mouseleave", function() {
                            t.rail.active = !1, t.rail.drag || t.hideCursor()
                        }))), t.opt.enablemousewheel && (t.isiframe || t.bind(v.isie && t.ispage ? document : t.win, "mousewheel", t.onmousewheel), t.bind(t.rail, "mousewheel", t.onmousewheel), t.railh && t.bind(t.railh, "mousewheel", t.onmousewheelhr)), t.ispage || v.cantouch || /HTML|^BODY/.test(t.win[0].nodeName) || (t.win.attr("tabindex") || t.win.attr({
                            tabindex: d++
                        }), t.jqbind(t.win, "focus", function(a) {
                            b = t.getTarget(a).id || !0, t.hasfocus = !0, t.canshowonmouseevent && t.noticeCursor()
                        }), t.jqbind(t.win, "blur", function(a) {
                            b = !1, t.hasfocus = !1
                        }), t.jqbind(t.win, "mouseenter", function(a) {
                            c = t.getTarget(a).id || !0, t.hasmousefocus = !0, t.canshowonmouseevent && t.noticeCursor()
                        }), t.jqbind(t.win, "mouseleave", function() {
                            c = !1, t.hasmousefocus = !1, t.rail.drag || t.hideCursor()
                        }))
                    }
                    if (t.onkeypress = function(d) {
                            if (t.railslocked && 0 == t.page.maxh) return !0;
                            d = d || window.e;
                            var e = t.getTarget(d);
                            if (e && /INPUT|TEXTAREA|SELECT|OPTION/.test(e.nodeName) && (!e.getAttribute("type") && !e.type || !/submit|button|cancel/i.tp) || a(e).attr("contenteditable")) return !0;
                            if (t.hasfocus || t.hasmousefocus && !b || t.ispage && !b && !c) {
                                if (e = d.keyCode, t.railslocked && 27 != e) return t.cancelEvent(d);
                                var f = d.ctrlKey || !1,
                                    g = d.shiftKey || !1,
                                    h = !1;
                                switch (e) {
                                    case 38:
                                    case 63233:
                                        t.doScrollBy(72), h = !0;
                                        break;
                                    case 40:
                                    case 63235:
                                        t.doScrollBy(-72), h = !0;
                                        break;
                                    case 37:
                                    case 63232:
                                        t.railh && (f ? t.doScrollLeft(0) : t.doScrollLeftBy(72), h = !0);
                                        break;
                                    case 39:
                                    case 63234:
                                        t.railh && (f ? t.doScrollLeft(t.page.maxw) : t.doScrollLeftBy(-72), h = !0);
                                        break;
                                    case 33:
                                    case 63276:
                                        t.doScrollBy(t.view.h), h = !0;
                                        break;
                                    case 34:
                                    case 63277:
                                        t.doScrollBy(-t.view.h), h = !0;
                                        break;
                                    case 36:
                                    case 63273:
                                        t.railh && f ? t.doScrollPos(0, 0) : t.doScrollTo(0), h = !0;
                                        break;
                                    case 35:
                                    case 63275:
                                        t.railh && f ? t.doScrollPos(t.page.maxw, t.page.maxh) : t.doScrollTo(t.page.maxh), h = !0;
                                        break;
                                    case 32:
                                        t.opt.spacebarenabled && (g ? t.doScrollBy(t.view.h) : t.doScrollBy(-t.view.h), h = !0);
                                        break;
                                    case 27:
                                        t.zoomactive && (t.doZoom(), h = !0)
                                }
                                if (h) return t.cancelEvent(d)
                            }
                        }, t.opt.enablekeyboard && t.bind(document, v.isopera && !v.isopera12 ? "keypress" : "keydown", t.onkeypress), t.bind(document, "keydown", function(a) {
                            a.ctrlKey && (t.wheelprevented = !0)
                        }), t.bind(document, "keyup", function(a) {
                            a.ctrlKey || (t.wheelprevented = !1)
                        }), t.bind(window, "blur", function(a) {
                            t.wheelprevented = !1
                        }), t.bind(window, "resize", t.lazyResize), t.bind(window, "orientationchange", t.lazyResize), t.bind(window, "load", t.lazyResize), v.ischrome && !t.ispage && !t.haswrapper) {
                        var s = t.win.attr("style"),
                            h = parseFloat(t.win.css("width")) + 1;
                        t.win.css("width", h), t.synched("chromefix", function() {
                            t.win.attr("style", s)
                        })
                    }
                    t.onAttributeChange = function(a) {
                        t.lazyResize(t.isieold ? 250 : 30)
                    }, !1 !== l && (t.observerbody = new l(function(b) {
                        if (b.forEach(function(b) {
                                if ("attributes" == b.type) return a("body").hasClass("modal-open") ? t.hide() : t.show()
                            }), document.body.scrollHeight != t.page.maxh) return t.lazyResize(30)
                    }), t.observerbody.observe(document.body, {
                        childList: !0,
                        subtree: !0,
                        characterData: !1,
                        attributes: !0,
                        attributeFilter: ["class"]
                    })), t.ispage || t.haswrapper || (!1 !== l ? (t.observer = new l(function(a) {
                        a.forEach(t.onAttributeChange)
                    }), t.observer.observe(t.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), t.observerremover = new l(function(a) {
                        a.forEach(function(a) {
                            if (0 < a.removedNodes.length)
                                for (var b in a.removedNodes)
                                    if (t && a.removedNodes[b] == t.win[0]) return t.remove()
                        })
                    }), t.observerremover.observe(t.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (t.bind(t.win, v.isie && !v.isie9 ? "propertychange" : "DOMAttrModified", t.onAttributeChange), v.isie9 && t.win[0].attachEvent("onpropertychange", t.onAttributeChange), t.bind(t.win, "DOMNodeRemoved", function(a) {
                        a.target == t.win[0] && t.remove()
                    }))), !t.ispage && t.opt.boxzoom && t.bind(window, "resize", t.resizeZoom), t.istextarea && t.bind(t.win, "mouseup", t.lazyResize), t.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var u = function() {
                        t.iframexd = !1;
                        var b;
                        try {
                            b = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                        } catch (h) {
                            t.iframexd = !0, b = !1
                        }
                        if (t.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        if (t.forcescreen = !0, t.isiframe && (t.iframe = {
                                doc: a(b),
                                html: t.doc.contents().find("html")[0],
                                body: t.doc.contents().find("body")[0]
                            }, t.getContentSize = function() {
                                return {
                                    w: Math.max(t.iframe.html.scrollWidth, t.iframe.body.scrollWidth),
                                    h: Math.max(t.iframe.html.scrollHeight, t.iframe.body.scrollHeight)
                                }
                            }, t.docscroll = a(t.iframe.body)), !v.isios && t.opt.iframeautoresize && !t.isiframe) {
                            t.win.scrollTop(0), t.doc.height("");
                            var c = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight);
                            t.doc.height(c)
                        }
                        t.lazyResize(30), v.isie7 && t.css(a(t.iframe.html), {
                            "overflow-y": "hidden"
                        }), t.css(a(t.iframe.body), {
                            "overflow-y": "hidden"
                        }), v.isios && t.haswrapper && t.css(a(b.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        }), "contentWindow" in this ? t.bind(this.contentWindow, "scroll", t.onscroll) : t.bind(b, "scroll", t.onscroll), t.opt.enablemousewheel && t.bind(b, "mousewheel", t.onmousewheel), t.opt.enablekeyboard && t.bind(b, v.isopera ? "keypress" : "keydown", t.onkeypress), (v.cantouch || t.opt.touchbehavior) && (t.bind(b, "mousedown", t.ontouchstart), t.bind(b, "mousemove", function(a) {
                            return t.ontouchmove(a, !0)
                        }), t.opt.grabcursorenabled && v.cursorgrabvalue && t.css(a(b.body), {
                            cursor: v.cursorgrabvalue
                        })), t.bind(b, "mouseup", t.ontouchend), t.zoom && (t.opt.dblclickzoom && t.bind(b, "dblclick", t.doZoom), t.ongesturezoom && t.bind(b, "gestureend", t.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                        u.call(t.doc[0], !1)
                    }, 500), t.bind(this.doc, "load", u)
                }
            }, this.showCursor = function(a, b) {
                if (t.cursortimeout && (clearTimeout(t.cursortimeout), t.cursortimeout = 0), t.rail) {
                    if (t.autohidedom && (t.autohidedom.stop().css({
                            opacity: t.opt.cursoropacitymax
                        }), t.cursoractive = !0), t.rail.drag && 1 == t.rail.drag.pt || (void 0 !== a && !1 !== a && (t.scroll.y = Math.round(1 * a / t.scrollratio.y)), void 0 !== b && (t.scroll.x = Math.round(1 * b / t.scrollratio.x))), t.cursor.css({
                            height: t.cursorheight,
                            top: t.scroll.y
                        }), t.cursorh) {
                        var c = t.hasreversehr ? t.scrollvaluemaxw - t.scroll.x : t.scroll.x;
                        !t.rail.align && t.rail.visibility ? t.cursorh.css({
                            width: t.cursorwidth,
                            left: c + t.rail.width
                        }) : t.cursorh.css({
                            width: t.cursorwidth,
                            left: c
                        }), t.cursoractive = !0
                    }
                    t.zoom && t.zoom.stop().css({
                        opacity: t.opt.cursoropacitymax
                    })
                }
            }, this.hideCursor = function(a) {
                t.cursortimeout || !t.rail || !t.autohidedom || t.hasmousefocus && "leave" == t.opt.autohidemode || (t.cursortimeout = setTimeout(function() {
                    t.rail.active && t.showonmouseevent || (t.autohidedom.stop().animate({
                        opacity: t.opt.cursoropacitymin
                    }), t.zoom && t.zoom.stop().animate({
                        opacity: t.opt.cursoropacitymin
                    }), t.cursoractive = !1), t.cursortimeout = 0
                }, a || t.opt.hidecursordelay))
            }, this.noticeCursor = function(a, b, c) {
                t.showCursor(b, c), t.rail.active || t.hideCursor(a)
            }, this.getContentSize = t.ispage ? function() {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : t.haswrapper ? function() {
                return {
                    w: t.doc.outerWidth() + parseInt(t.win.css("paddingLeft")) + parseInt(t.win.css("paddingRight")),
                    h: t.doc.outerHeight() + parseInt(t.win.css("paddingTop")) + parseInt(t.win.css("paddingBottom"))
                }
            } : function() {
                return {
                    w: t.docscroll[0].scrollWidth,
                    h: t.docscroll[0].scrollHeight
                }
            }, this.onResize = function(a, b) {
                if (!t || !t.win) return !1;
                if (!t.haswrapper && !t.ispage) {
                    if ("none" == t.win.css("display")) return t.visibility && t.hideRail().hideRailHr(), !1;
                    t.hidden || t.visibility || t.showRail().showRailHr()
                }
                var c = t.page.maxh,
                    d = t.page.maxw,
                    e = t.view.h,
                    f = t.view.w;
                if (t.view = {
                        w: t.ispage ? t.win.width() : parseInt(t.win[0].clientWidth),
                        h: t.ispage ? t.win.height() : parseInt(t.win[0].clientHeight)
                    }, t.page = b || t.getContentSize(), t.page.maxh = Math.max(0, t.page.h - t.view.h), t.page.maxw = Math.max(0, t.page.w - t.view.w), t.page.maxh == c && t.page.maxw == d && t.view.w == f && t.view.h == e) {
                    if (t.ispage) return t;
                    if (c = t.win.offset(), t.lastposition && (d = t.lastposition, d.top == c.top && d.left == c.left)) return t;
                    t.lastposition = c
                }
                return 0 == t.page.maxh ? (t.hideRail(), t.scrollvaluemax = 0, t.scroll.y = 0, t.scrollratio.y = 0, t.cursorheight = 0, t.setScrollTop(0), t.rail.scrollable = !1) : (t.page.maxh -= t.opt.railpadding.top + t.opt.railpadding.bottom, t.rail.scrollable = !0), 0 == t.page.maxw ? (t.hideRailHr(), t.scrollvaluemaxw = 0, t.scroll.x = 0, t.scrollratio.x = 0, t.cursorwidth = 0, t.setScrollLeft(0), t.railh.scrollable = !1) : (t.page.maxw -= t.opt.railpadding.left + t.opt.railpadding.right, t.railh.scrollable = !0), t.railslocked = t.locked || 0 == t.page.maxh && 0 == t.page.maxw, t.railslocked ? (t.ispage || t.updateScrollBar(t.view), !1) : (t.hidden || t.visibility ? t.hidden || t.railh.visibility || t.showRailHr() : t.showRail().showRailHr(), t.istextarea && t.win.css("resize") && "none" != t.win.css("resize") && (t.view.h -= 20), t.cursorheight = Math.min(t.view.h, Math.round(t.view.h / t.page.h * t.view.h)), t.cursorheight = t.opt.cursorfixedheight ? t.opt.cursorfixedheight : Math.max(t.opt.cursorminheight, t.cursorheight), t.cursorwidth = Math.min(t.view.w, Math.round(t.view.w / t.page.w * t.view.w)), t.cursorwidth = t.opt.cursorfixedheight ? t.opt.cursorfixedheight : Math.max(t.opt.cursorminheight, t.cursorwidth), t.scrollvaluemax = t.view.h - t.cursorheight - t.cursor.hborder - (t.opt.railpadding.top + t.opt.railpadding.bottom), t.railh && (t.railh.width = 0 < t.page.maxh ? t.view.w - t.rail.width : t.view.w, t.scrollvaluemaxw = t.railh.width - t.cursorwidth - t.cursorh.wborder - (t.opt.railpadding.left + t.opt.railpadding.right)), t.ispage || t.updateScrollBar(t.view), t.scrollratio = {
                    x: t.page.maxw / t.scrollvaluemaxw,
                    y: t.page.maxh / t.scrollvaluemax
                }, t.getScrollTop() > t.page.maxh ? t.doScrollTop(t.page.maxh) : (t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)), t.scroll.x = Math.round(t.getScrollLeft() * (1 / t.scrollratio.x)), t.cursoractive && t.noticeCursor()), t.scroll.y && 0 == t.getScrollTop() && t.doScrollTo(Math.floor(t.scroll.y * t.scrollratio.y)), t)
            }, this.resize = t.onResize, this.lazyResize = function(a) {
                return a = isNaN(a) ? 30 : a, t.debounced("resize", t.resize, a), t
            }, this.jqbind = function(b, c, d) {
                t.events.push({
                    e: b,
                    n: c,
                    f: d,
                    q: !0
                }), a(b).bind(c, d)
            }, this.bind = function(a, b, c, d) {
                var e = "jquery" in a ? a[0] : a;
                "mousewheel" == b ? window.addEventListener || "onwheel" in document ? t._bind(e, "wheel", c, d || !1) : (a = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", r(e, a, c, d || !1), "DOMMouseScroll" == a && r(e, "MozMousePixelScroll", c, d || !1)) : e.addEventListener ? (v.cantouch && /mouseup|mousedown|mousemove/.test(b) && t._bind(e, "mousedown" == b ? "touchstart" : "mouseup" == b ? "touchend" : "touchmove", function(a) {
                    if (a.touches) {
                        if (2 > a.touches.length) {
                            var b = a.touches.length ? a.touches[0] : a;
                            b.original = a, c.call(this, b)
                        }
                    } else a.changedTouches && (b = a.changedTouches[0], b.original = a, c.call(this, b))
                }, d || !1), t._bind(e, b, c, d || !1), v.cantouch && "mouseup" == b && t._bind(e, "touchcancel", c, d || !1)) : t._bind(e, b, function(a) {
                    return (a = a || window.event || !1) && a.srcElement && (a.target = a.srcElement), "pageY" in a || (a.pageX = a.clientX + document.documentElement.scrollLeft, a.pageY = a.clientY + document.documentElement.scrollTop), !1 !== c.call(e, a) && !1 !== d || t.cancelEvent(a)
                })
            }, v.haseventlistener ? (this._bind = function(a, b, c, d) {
                t.events.push({
                    e: a,
                    n: b,
                    f: c,
                    b: d,
                    q: !1
                }), a.addEventListener(b, c, d || !1)
            }, this.cancelEvent = function(a) {
                return !!a && (a = a.original ? a.original : a, a.preventDefault(), a.stopPropagation(), a.preventManipulation && a.preventManipulation(), !1)
            }, this.stopPropagation = function(a) {
                return !!a && (a = a.original ? a.original : a, a.stopPropagation(), !1)
            }, this._unbind = function(a, b, c, d) {
                a.removeEventListener(b, c, d)
            }) : (this._bind = function(a, b, c, d) {
                t.events.push({
                    e: a,
                    n: b,
                    f: c,
                    b: d,
                    q: !1
                }), a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
            }, this.cancelEvent = function(a) {
                return !!(a = window.event || !1) && (a.cancelBubble = !0, a.cancel = !0, a.returnValue = !1)
            }, this.stopPropagation = function(a) {
                return !!(a = window.event || !1) && (a.cancelBubble = !0, !1)
            }, this._unbind = function(a, b, c, d) {
                a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = !1
            }), this.unbindAll = function() {
                for (var a = 0; a < t.events.length; a++) {
                    var b = t.events[a];
                    b.q ? b.e.unbind(b.n, b.f) : t._unbind(b.e, b.n, b.f, b.b)
                }
            }, this.showRail = function() {
                return 0 == t.page.maxh || !t.ispage && "none" == t.win.css("display") || (t.visibility = !0, t.rail.visibility = !0, t.rail.css("display", "block")), t
            }, this.showRailHr = function() {
                return t.railh ? (0 == t.page.maxw || !t.ispage && "none" == t.win.css("display") || (t.railh.visibility = !0, t.railh.css("display", "block")), t) : t
            }, this.hideRail = function() {
                return t.visibility = !1, t.rail.visibility = !1, t.rail.css("display", "none"), t
            }, this.hideRailHr = function() {
                return t.railh ? (t.railh.visibility = !1, t.railh.css("display", "none"), t) : t
            }, this.show = function() {
                return t.hidden = !1, t.railslocked = !1, t.showRail().showRailHr()
            }, this.hide = function() {
                return t.hidden = !0, t.railslocked = !0, t.hideRail().hideRailHr()
            }, this.toggle = function() {
                return t.hidden ? t.show() : t.hide()
            }, this.remove = function() {
                t.stop(), t.cursortimeout && clearTimeout(t.cursortimeout), t.doZoomOut(), t.unbindAll(), v.isie9 && t.win[0].detachEvent("onpropertychange", t.onAttributeChange), !1 !== t.observer && t.observer.disconnect(), !1 !== t.observerremover && t.observerremover.disconnect(), !1 !== t.observerbody && t.observerbody.disconnect(), t.events = null, t.cursor && t.cursor.remove(), t.cursorh && t.cursorh.remove(), t.rail && t.rail.remove(), t.railh && t.railh.remove(), t.zoom && t.zoom.remove();
                for (var b = 0; b < t.saved.css.length; b++) {
                    var c = t.saved.css[b];
                    c[0].css(c[1], void 0 === c[2] ? "" : c[2])
                }
                t.saved = !1, t.me.data("__nicescroll", "");
                var d = a.nicescroll;
                d.each(function(a) {
                    if (this && this.id === t.id) {
                        delete d[a];
                        for (var b = ++a; b < d.length; b++, a++) d[a] = d[b];
                        d.length--, d.length && delete d[d.length]
                    }
                });
                for (var e in t) t[e] = null, delete t[e];
                t = null
            }, this.scrollstart = function(a) {
                return this.onscrollstart = a, t
            }, this.scrollend = function(a) {
                return this.onscrollend = a, t
            }, this.scrollcancel = function(a) {
                return this.onscrollcancel = a, t
            }, this.zoomin = function(a) {
                return this.onzoomin = a, t
            }, this.zoomout = function(a) {
                return this.onzoomout = a, t
            }, this.isScrollable = function(b) {
                if (b = b.target ? b.target : b, "OPTION" == b.nodeName) return !0;
                for (; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName);) {
                    var c = a(b),
                        c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                    if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight;
                    b = !!b.parentNode && b.parentNode
                }
                return !1
            }, this.getViewport = function(b) {
                for (b = !(!b || !b.parentNode) && b.parentNode; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName);) {
                    var c = a(b);
                    if (/fixed|absolute/.test(c.css("position"))) return c;
                    if (/scroll|auto/.test(c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "") && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length) return c;
                    b = !!b.parentNode && b.parentNode
                }
                return !1
            }, this.triggerScrollEnd = function() {
                if (t.onscrollend) {
                    var a = t.getScrollLeft(),
                        b = t.getScrollTop();
                    t.onscrollend.call(t, {
                        type: "scrollend",
                        current: {
                            x: a,
                            y: b
                        },
                        end: {
                            x: a,
                            y: b
                        }
                    })
                }
            }, this.onmousewheel = function(a) {
                if (!t.wheelprevented) {
                    if (t.railslocked) return t.debounced("checkunlock", t.resize, 250), !0;
                    if (t.rail.drag) return t.cancelEvent(a);
                    if ("auto" == t.opt.oneaxismousemode && 0 != a.deltaX && (t.opt.oneaxismousemode = !1), t.opt.oneaxismousemode && 0 == a.deltaX && !t.rail.scrollable) return !t.railh || !t.railh.scrollable || t.onmousewheelhr(a);
                    var b = +new Date,
                        c = !1;
                    return t.opt.preservenativescrolling && t.checkarea + 600 < b && (t.nativescrollingarea = t.isScrollable(a), c = !0), (t.checkarea = b, t.nativescrollingarea) ? !0 : ((a = s(a, !1, c)) && (t.checkarea = 0), a)
                }
            }, this.onmousewheelhr = function(a) {
                if (!t.wheelprevented) {
                    if (t.railslocked || !t.railh.scrollable) return !0;
                    if (t.rail.drag) return t.cancelEvent(a);
                    var b = +new Date,
                        c = !1;
                    return t.opt.preservenativescrolling && t.checkarea + 600 < b && (t.nativescrollingarea = t.isScrollable(a), c = !0), t.checkarea = b, !!t.nativescrollingarea || (t.railslocked ? t.cancelEvent(a) : s(a, !0, c))
                }
            }, this.stop = function() {
                return t.cancelScroll(), t.scrollmon && t.scrollmon.stop(), t.cursorfreezed = !1, t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)), t.noticeCursor(), t
            }, this.getTransitionSpeed = function(a) {
                var b = Math.round(10 * t.opt.scrollspeed);
                return a = Math.min(b, Math.round(a / 20 * t.opt.scrollspeed)), 20 < a ? a : 0
            }, t.opt.smoothscroll ? t.ishwscroll && v.hastransition && t.opt.usetransition && t.opt.smoothscroll ? (this.prepareTransition = function(a, b) {
                var c = b ? 20 < a ? a : 0 : t.getTransitionSpeed(a),
                    d = c ? v.prefixstyle + "transform " + c + "ms ease-out" : "";
                return t.lasttransitionstyle && t.lasttransitionstyle == d || (t.lasttransitionstyle = d, t.doc.css(v.transitionstyle, d)), c
            }, this.doScrollLeft = function(a, b) {
                var c = t.scrollrunning ? t.newscrolly : t.getScrollTop();
                t.doScrollPos(a, c, b)
            }, this.doScrollTop = function(a, b) {
                var c = t.scrollrunning ? t.newscrollx : t.getScrollLeft();
                t.doScrollPos(c, a, b)
            }, this.doScrollPos = function(a, b, c) {
                var d = t.getScrollTop(),
                    e = t.getScrollLeft();
                return (0 > (t.newscrolly - d) * (b - d) || 0 > (t.newscrollx - e) * (a - e)) && t.cancelScroll(), 0 == t.opt.bouncescroll && (0 > b ? b = 0 : b > t.page.maxh && (b = t.page.maxh), 0 > a ? a = 0 : a > t.page.maxw && (a = t.page.maxw)), (!t.scrollrunning || a != t.newscrollx || b != t.newscrolly) && (t.newscrolly = b, t.newscrollx = a, t.newscrollspeed = c || !1, !t.timer && void(t.timer = setTimeout(function() {
                    var c, d, e = t.getScrollTop(),
                        f = t.getScrollLeft();
                    c = a - f, d = b - e, c = Math.round(Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2))), c = t.newscrollspeed && 1 < t.newscrollspeed ? t.newscrollspeed : t.getTransitionSpeed(c), t.newscrollspeed && 1 >= t.newscrollspeed && (c *= t.newscrollspeed), t.prepareTransition(c, !0), t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm), 0 < c && (!t.scrollrunning && t.onscrollstart && t.onscrollstart.call(t, {
                        type: "scrollstart",
                        current: {
                            x: f,
                            y: e
                        },
                        request: {
                            x: a,
                            y: b
                        },
                        end: {
                            x: t.newscrollx,
                            y: t.newscrolly
                        },
                        speed: c
                    }), v.transitionend ? t.scrollendtrapped || (t.scrollendtrapped = !0, t.bind(t.doc, v.transitionend, t.onScrollTransitionEnd, !1)) : (t.scrollendtrapped && clearTimeout(t.scrollendtrapped), t.scrollendtrapped = setTimeout(t.onScrollTransitionEnd, c)), t.timerscroll = {
                        bz: new x(e, t.newscrolly, c, 0, 0, .58, 1),
                        bh: new x(f, t.newscrollx, c, 0, 0, .58, 1)
                    }, t.cursorfreezed || (t.timerscroll.tm = setInterval(function() {
                        t.showCursor(t.getScrollTop(), t.getScrollLeft())
                    }, 60))), t.synched("doScroll-set", function() {
                        t.timer = 0, t.scrollendtrapped && (t.scrollrunning = !0), t.setScrollTop(t.newscrolly), t.setScrollLeft(t.newscrollx), t.scrollendtrapped || t.onScrollTransitionEnd()
                    })
                }, 50)))
            }, this.cancelScroll = function() {
                if (!t.scrollendtrapped) return !0;
                var a = t.getScrollTop(),
                    b = t.getScrollLeft();
                return t.scrollrunning = !1, v.transitionend || clearTimeout(v.transitionend), t.scrollendtrapped = !1, t._unbind(t.doc[0], v.transitionend, t.onScrollTransitionEnd), t.prepareTransition(0), t.setScrollTop(a), t.railh && t.setScrollLeft(b), t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm), t.timerscroll = !1, t.cursorfreezed = !1, t.showCursor(a, b), t
            }, this.onScrollTransitionEnd = function() {
                t.scrollendtrapped && t._unbind(t.doc[0], v.transitionend, t.onScrollTransitionEnd), t.scrollendtrapped = !1, t.prepareTransition(0), t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm), t.timerscroll = !1;
                var a = t.getScrollTop(),
                    b = t.getScrollLeft();
                if (t.setScrollTop(a), t.railh && t.setScrollLeft(b), t.noticeCursor(!1, a, b), t.cursorfreezed = !1, 0 > a ? a = 0 : a > t.page.maxh && (a = t.page.maxh), 0 > b ? b = 0 : b > t.page.maxw && (b = t.page.maxw), a != t.newscrolly || b != t.newscrollx) return t.doScrollPos(b, a, t.opt.snapbackspeed);
                t.onscrollend && t.scrollrunning && t.triggerScrollEnd(), t.scrollrunning = !1
            }) : (this.doScrollLeft = function(a, b) {
                var c = t.scrollrunning ? t.newscrolly : t.getScrollTop();
                t.doScrollPos(a, c, b)
            }, this.doScrollTop = function(a, b) {
                var c = t.scrollrunning ? t.newscrollx : t.getScrollLeft();
                t.doScrollPos(c, a, b)
            }, this.doScrollPos = function(a, b, c) {
                function d() {
                    if (t.cancelAnimationFrame) return !0;
                    if (t.scrollrunning = !0, l = 1 - l) return t.timer = h(d) || 1;
                    var a, b, c = 0,
                        e = b = t.getScrollTop();
                    t.dst.ay ? (e = t.bzscroll ? t.dst.py + t.bzscroll.getNow() * t.dst.ay : t.newscrolly, a = e - b, (0 > a && e < t.newscrolly || 0 < a && e > t.newscrolly) && (e = t.newscrolly), t.setScrollTop(e), e == t.newscrolly && (c = 1)) : c = 1, b = a = t.getScrollLeft(), t.dst.ax ? (b = t.bzscroll ? t.dst.px + t.bzscroll.getNow() * t.dst.ax : t.newscrollx, a = b - a, (0 > a && b < t.newscrollx || 0 < a && b > t.newscrollx) && (b = t.newscrollx), t.setScrollLeft(b), b == t.newscrollx && (c += 1)) : c += 1, 2 == c ? (t.timer = 0, t.cursorfreezed = !1, t.bzscroll = !1, t.scrollrunning = !1, 0 > e ? e = 0 : e > t.page.maxh && (e = t.page.maxh), 0 > b ? b = 0 : b > t.page.maxw && (b = t.page.maxw), b != t.newscrollx || e != t.newscrolly ? t.doScrollPos(b, e) : t.onscrollend && t.triggerScrollEnd()) : t.timer = h(d) || 1
                }
                if (b = void 0 === b || !1 === b ? t.getScrollTop(!0) : b, t.timer && t.newscrolly == b && t.newscrollx == a) return !0;
                t.timer && i(t.timer), t.timer = 0;
                var e = t.getScrollTop(),
                    f = t.getScrollLeft();
                (0 > (t.newscrolly - e) * (b - e) || 0 > (t.newscrollx - f) * (a - f)) && t.cancelScroll(), t.newscrolly = b, t.newscrollx = a, t.bouncescroll && t.rail.visibility || (0 > t.newscrolly ? t.newscrolly = 0 : t.newscrolly > t.page.maxh && (t.newscrolly = t.page.maxh)), t.bouncescroll && t.railh.visibility || (0 > t.newscrollx ? t.newscrollx = 0 : t.newscrollx > t.page.maxw && (t.newscrollx = t.page.maxw)), t.dst = {}, t.dst.x = a - f, t.dst.y = b - e, t.dst.px = f, t.dst.py = e;
                var g = Math.round(Math.sqrt(Math.pow(t.dst.x, 2) + Math.pow(t.dst.y, 2)));
                t.dst.ax = t.dst.x / g, t.dst.ay = t.dst.y / g;
                var j = 0,
                    k = g;
                if (0 == t.dst.x ? (j = e, k = b, t.dst.ay = 1, t.dst.py = 0) : 0 == t.dst.y && (j = f, k = a, t.dst.ax = 1, t.dst.px = 0), g = t.getTransitionSpeed(g), c && 1 >= c && (g *= c), t.bzscroll = 0 < g && (t.bzscroll ? t.bzscroll.update(k, g) : new x(j, k, g, 0, 1, 0, 1)), !t.timer) {
                    (e == t.page.maxh && b >= t.page.maxh || f == t.page.maxw && a >= t.page.maxw) && t.checkContentSize();
                    var l = 1;
                    t.cancelAnimationFrame = !1, t.timer = 1, t.onscrollstart && !t.scrollrunning && t.onscrollstart.call(t, {
                        type: "scrollstart",
                        current: {
                            x: f,
                            y: e
                        },
                        request: {
                            x: a,
                            y: b
                        },
                        end: {
                            x: t.newscrollx,
                            y: t.newscrolly
                        },
                        speed: g
                    }), d(), (e == t.page.maxh && b >= e || f == t.page.maxw && a >= f) && t.checkContentSize(), t.noticeCursor()
                }
            }, this.cancelScroll = function() {
                return t.timer && i(t.timer), t.timer = 0, t.bzscroll = !1, t.scrollrunning = !1, t
            }) : (this.doScrollLeft = function(a, b) {
                var c = t.getScrollTop();
                t.doScrollPos(a, c, b)
            }, this.doScrollTop = function(a, b) {
                var c = t.getScrollLeft();
                t.doScrollPos(c, a, b)
            }, this.doScrollPos = function(a, b, c) {
                var d = a > t.page.maxw ? t.page.maxw : a;
                0 > d && (d = 0);
                var e = b > t.page.maxh ? t.page.maxh : b;
                0 > e && (e = 0), t.synched("scroll", function() {
                    t.setScrollTop(e), t.setScrollLeft(d)
                })
            }, this.cancelScroll = function() {}), this.doScrollBy = function(a, b) {
                var c = 0,
                    c = b ? Math.floor((t.scroll.y - a) * t.scrollratio.y) : (t.timer ? t.newscrolly : t.getScrollTop(!0)) - a;
                if (t.bouncescroll) {
                    var d = Math.round(t.view.h / 2);
                    c < -d ? c = -d : c > t.page.maxh + d && (c = t.page.maxh + d)
                }
                return t.cursorfreezed = !1, d = t.getScrollTop(!0), 0 > c && 0 >= d ? t.noticeCursor() : c > t.page.maxh && d >= t.page.maxh ? (t.checkContentSize(), t.noticeCursor()) : void t.doScrollTop(c)
            }, this.doScrollLeftBy = function(a, b) {
                var c = 0,
                    c = b ? Math.floor((t.scroll.x - a) * t.scrollratio.x) : (t.timer ? t.newscrollx : t.getScrollLeft(!0)) - a;
                if (t.bouncescroll) {
                    var d = Math.round(t.view.w / 2);
                    c < -d ? c = -d : c > t.page.maxw + d && (c = t.page.maxw + d)
                }
                if (t.cursorfreezed = !1, d = t.getScrollLeft(!0), 0 > c && 0 >= d || c > t.page.maxw && d >= t.page.maxw) return t.noticeCursor();
                t.doScrollLeft(c)
            }, this.doScrollTo = function(a, b) {
                b && Math.round(a * t.scrollratio.y), t.cursorfreezed = !1, t.doScrollTop(a)
            }, this.checkContentSize = function() {
                var a = t.getContentSize();
                a.h == t.page.h && a.w == t.page.w || t.resize(!1, a)
            }, t.onscroll = function(a) {
                t.rail.drag || t.cursorfreezed || t.synched("scroll", function() {
                    t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)), t.railh && (t.scroll.x = Math.round(t.getScrollLeft() * (1 / t.scrollratio.x))), t.noticeCursor()
                })
            }, t.bind(t.docscroll, "scroll", t.onscroll), this.doZoomIn = function(b) {
                if (!t.zoomactive) {
                    t.zoomactive = !0, t.zoomrestore = {
                        style: {}
                    };
                    var c, d = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                        e = t.win[0].style;
                    for (c in d) {
                        var g = d[c];
                        t.zoomrestore.style[g] = void 0 !== e[g] ? e[g] : ""
                    }
                    return t.zoomrestore.style.width = t.win.css("width"), t.zoomrestore.style.height = t.win.css("height"), t.zoomrestore.padding = {
                        w: t.win.outerWidth() - t.win.width(),
                        h: t.win.outerHeight() - t.win.height()
                    }, v.isios4 && (t.zoomrestore.scrollTop = a(window).scrollTop(), a(window).scrollTop(0)), t.win.css({
                        position: v.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": f + 100,
                        margin: "0px"
                    }), d = t.win.css("backgroundColor"), ("" == d || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(d)) && t.win.css("backgroundColor", "#fff"), t.rail.css({
                        "z-index": f + 101
                    }), t.zoom.css({
                        "z-index": f + 102
                    }), t.zoom.css("backgroundPosition", "0px -18px"), t.resizeZoom(), t.onzoomin && t.onzoomin.call(t), t.cancelEvent(b)
                }
            }, this.doZoomOut = function(b) {
                if (t.zoomactive) return t.zoomactive = !1, t.win.css("margin", ""), t.win.css(t.zoomrestore.style), v.isios4 && a(window).scrollTop(t.zoomrestore.scrollTop), t.rail.css({
                    "z-index": t.zindex
                }), t.zoom.css({
                    "z-index": t.zindex
                }), t.zoomrestore = !1, t.zoom.css("backgroundPosition", "0px 0px"), t.onResize(), t.onzoomout && t.onzoomout.call(t), t.cancelEvent(b)
            }, this.doZoom = function(a) {
                return t.zoomactive ? t.doZoomOut(a) : t.doZoomIn(a)
            }, this.resizeZoom = function() {
                if (t.zoomactive) {
                    var b = t.getScrollTop();
                    t.win.css({
                        width: a(window).width() - t.zoomrestore.padding.w + "px",
                        height: a(window).height() - t.zoomrestore.padding.h + "px"
                    }), t.onResize(), t.setScrollTop(Math.min(t.page.maxh, b))
                }
            }, this.init(), a.nicescroll.push(this)
        },
        q = function(a) {
            var b = this;
            this.nc = a, this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0, this.snapy = this.snapx = !1, this.demuly = this.demulx = 0, this.lastscrolly = this.lastscrollx = -1, this.timer = this.chky = this.chkx = 0, this.time = function() {
                return +new Date
            }, this.reset = function(a, c) {
                b.stop();
                var d = b.time();
                b.steptime = 0, b.lasttime = d, b.speedx = 0, b.speedy = 0, b.lastx = a, b.lasty = c, b.lastscrollx = -1, b.lastscrolly = -1
            }, this.update = function(a, c) {
                var d = b.time();
                b.steptime = d - b.lasttime, b.lasttime = d;
                var d = c - b.lasty,
                    e = a - b.lastx,
                    f = b.nc.getScrollTop(),
                    g = b.nc.getScrollLeft(),
                    f = f + d,
                    g = g + e;
                b.snapx = 0 > g || g > b.nc.page.maxw, b.snapy = 0 > f || f > b.nc.page.maxh, b.speedx = e, b.speedy = d, b.lastx = a, b.lasty = c
            }, this.stop = function() {
                b.nc.unsynched("domomentum2d"), b.timer && clearTimeout(b.timer), b.timer = 0, b.lastscrollx = -1, b.lastscrolly = -1
            }, this.doSnapy = function(a, c) {
                var d = !1;
                0 > c ? (c = 0, d = !0) : c > b.nc.page.maxh && (c = b.nc.page.maxh, d = !0), 0 > a ? (a = 0, d = !0) : a > b.nc.page.maxw && (a = b.nc.page.maxw, d = !0), d ? b.nc.doScrollPos(a, c, b.nc.opt.snapbackspeed) : b.nc.triggerScrollEnd()
            }, this.doMomentum = function(a) {
                var c = b.time(),
                    d = a ? c + a : b.lasttime;
                a = b.nc.getScrollLeft();
                var e = b.nc.getScrollTop(),
                    f = b.nc.page.maxh,
                    g = b.nc.page.maxw;
                if (b.speedx = 0 < g ? Math.min(60, b.speedx) : 0, b.speedy = 0 < f ? Math.min(60, b.speedy) : 0, d = d && 60 >= c - d, (0 > e || e > f || 0 > a || a > g) && (d = !1), a = !(!b.speedx || !d) && b.speedx, b.speedy && d && b.speedy || a) {
                    var h = Math.max(16, b.steptime);
                    50 < h && (a = h / 50, b.speedx *= a, b.speedy *= a, h = 50), b.demulxy = 0, b.lastscrollx = b.nc.getScrollLeft(), b.chkx = b.lastscrollx, b.lastscrolly = b.nc.getScrollTop(), b.chky = b.lastscrolly;
                    var i = b.lastscrollx,
                        j = b.lastscrolly,
                        k = function() {
                            var a = 600 < b.time() - c ? .04 : .02;
                            b.speedx && (i = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy)), b.lastscrollx = i, 0 > i || i > g) && (a = .1), b.speedy && (j = Math.floor(b.lastscrolly - b.speedy * (1 - b.demulxy)), b.lastscrolly = j, 0 > j || j > f) && (a = .1), b.demulxy = Math.min(1, b.demulxy + a), b.nc.synched("domomentum2d", function() {
                                b.speedx && (b.nc.getScrollLeft() != b.chkx && b.stop(), b.chkx = i, b.nc.setScrollLeft(i)), b.speedy && (b.nc.getScrollTop() != b.chky && b.stop(), b.chky = j, b.nc.setScrollTop(j)), b.timer || (b.nc.hideCursor(), b.doSnapy(i, j))
                            }), 1 > b.demulxy ? b.timer = setTimeout(k, h) : (b.stop(), b.nc.hideCursor(), b.doSnapy(i, j))
                        };
                    k()
                } else b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop())
            }
        },
        r = a.fn.scrollTop;
    a.cssHooks.pageYOffset = {
        get: function(b, c, d) {
            return (c = a.data(b, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : r.call(b)
        },
        set: function(b, c) {
            var d = a.data(b, "__nicescroll") || !1;
            return d && d.ishwscroll ? d.setScrollTop(parseInt(c)) : r.call(b, c), this
        }
    }, a.fn.scrollTop = function(b) {
        if (void 0 === b) {
            var c = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
            return c && c.ishwscroll ? c.getScrollTop() : r.call(this)
        }
        return this.each(function() {
            var c = a.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollTop(parseInt(b)) : r.call(a(this), b)
        })
    };
    var s = a.fn.scrollLeft;
    a.cssHooks.pageXOffset = {
        get: function(b, c, d) {
            return (c = a.data(b, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : s.call(b)
        },
        set: function(b, c) {
            var d = a.data(b, "__nicescroll") || !1;
            return d && d.ishwscroll ? d.setScrollLeft(parseInt(c)) : s.call(b, c), this
        }
    }, a.fn.scrollLeft = function(b) {
        if (void 0 === b) {
            var c = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
            return c && c.ishwscroll ? c.getScrollLeft() : s.call(this)
        }
        return this.each(function() {
            var c = a.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollLeft(parseInt(b)) : s.call(a(this), b)
        })
    };
    var t = function(b) {
        var c = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function(a) {
                for (var b = 0, d = 0; b < c.length; b++) a.call(c[b], d++);
                return c
            }, this.push = function(a) {
                c[c.length] = a, c.length++
            }, this.eq = function(a) {
                return c[a]
            }, b)
            for (var d = 0; d < b.length; d++) {
                var e = a.data(b[d], "__nicescroll") || !1;
                e && (this[this.length] = e, this.length++)
            }
        return this
    };
    ! function(a, b, c) {
        for (var d = 0; d < b.length; d++) c(a, b[d])
    }(t.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(a, b) {
        a[b] = function() {
            var a = arguments;
            return this.each(function() {
                this[b].apply(this, a)
            })
        }
    }), a.fn.getNiceScroll = function(b) {
        return void 0 === b ? new t(this) : this[b] && a.data(this[b], "__nicescroll") || !1
    }, a.extend(a.expr[":"], {
        nicescroll: function(b) {
            return !!a.data(b, "__nicescroll")
        }
    }), a.fn.niceScroll = function(b, c) {
        void 0 !== c || "object" != typeof b || "jquery" in b || (c = b, b = !1), c = a.extend({}, c);
        var d = new t;
        void 0 === c && (c = {}), b && (c.doc = a(b), c.win = a(this));
        var e = !("doc" in c);
        return e || "win" in c || (c.win = a(this)), this.each(function() {
            var b = a(this).data("__nicescroll") || !1;
            b || (c.doc = e ? a(this) : c.doc, b = new p(c, a(this)), a(this).data("__nicescroll", b)), d.push(b)
        }), 1 == d.length ? d[0] : d
    }, window.NiceScroll = {
        getjQuery: function() {
            return a
        }
    }, a.nicescroll || (a.nicescroll = new t, a.nicescroll.options = m)
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var a = document.documentElement,
            b = window,
            c = function(c, d) {
                var e = "x" === d ? "Width" : "Height",
                    f = "scroll" + e,
                    g = "client" + e,
                    h = document.body;
                return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || Math.max(a[g], h[g])) : c[f] - c["offset" + e]
            },
            d = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.4",
                init: function(a, d, e) {
                    return this._wdw = a === b, this._target = a, this._tween = e, "object" != typeof d && (d = {
                        y: d
                    }), this.vars = d, this._autoKill = !1 !== d.autoKill, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != d.x ? (this._addTween(this, "x", this.x, "max" === d.x ? c(a, "x") : d.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != d.y ? (this._addTween(this, "y", this.y, "max" === d.y ? c(a, "y") : d.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(a) {
                    this._super.setRatio.call(this, a);
                    var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        f = e - this.yPrev,
                        g = d - this.xPrev;
                    this._autoKill && (!this.skipX && (g > 7 || -7 > g) && c(this._target, "x") > d && (this.skipX = !0), !this.skipY && (f > 7 || -7 > f) && c(this._target, "y") > e && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            e = d.prototype;
        d.max = c, e.getX = function() {
            return this._wdw ? null != b.pageXOffset ? b.pageXOffset : null != a.scrollLeft ? a.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
        }, e.getY = function() {
            return this._wdw ? null != b.pageYOffset ? b.pageYOffset : null != a.scrollTop ? a.scrollTop : document.body.scrollTop : this._target.scrollTop
        }, e._kill = function(a) {
            return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a, b) {
        "use strict";
        var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
        if (!c.TweenLite) {
            var d, e, f, g, h, i = function(a) {
                    var b, d = a.split("."),
                        e = c;
                    for (b = 0; d.length > b; b++) e[d[b]] = e = e[d[b]] || {};
                    return e
                },
                j = i("com.greensock"),
                k = 1e-10,
                l = function(a) {
                    var b, c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c
                },
                m = function() {},
                n = function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                o = {},
                p = function(d, e, f, g) {
                    this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
                    var h = [];
                    this.check = function(j) {
                        for (var k, l, m, n, q = e.length, r = q; --q > -1;)(k = o[e[q]] || new p(e[q], [])).gsClass ? (h[q] = k.gsClass, r--) : j && k.sc.push(this);
                        if (0 === r && f)
                            for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                                    return n
                                }) : d === b && "undefined" != typeof module && module.exports && (module.exports = n)), q = 0; this.sc.length > q; q++) this.sc[q].check()
                    }, this.check(!0)
                },
                q = a._gsDefine = function(a, b, c, d) {
                    return new p(a, b, c, d)
                },
                r = j._class = function(a, b, c) {
                    return b = b || function() {}, q(a, [], function() {
                        return b
                    }, c), b
                };
            q.globals = c;
            var s = [0, 0, 1, 1],
                t = [],
                u = r("easing.Ease", function(a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
                }, !0),
                v = u.map = {},
                w = u.register = function(a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                        for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (f = u.prototype, f._calcEnd = !1, f.getRatio = function(a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
            v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
            var x = r("events.EventDispatcher", function(a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            f = x.prototype, f.addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f, i, j = this._listeners[a],
                    k = 0;
                for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
                j.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                }), this !== g || h || g.wake()
            }, f.removeEventListener = function(a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, f.dispatchEvent = function(a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c)
            };
            var y = a.requestAnimationFrame,
                z = a.cancelAnimationFrame,
                A = Date.now || function() {
                    return (new Date).getTime()
                },
                B = A();
            for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
            r("Ticker", function(a, b) {
                var c, d, e, f, i, j = this,
                    l = A(),
                    n = !1 !== b && y,
                    o = 500,
                    p = 33,
                    q = function(a) {
                        var b, g, h = A() - B;
                        h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || !0 === a) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), !0 !== a && (e = d(q)), g && j.dispatchEvent("tick")
                    };
                x.call(j), j.time = j.frame = 0, j.tick = function() {
                    q(!0)
                }, j.lagSmoothing = function(a, b) {
                    o = a || 1 / k, p = Math.min(b, o, 0)
                }, j.sleep = function() {
                    null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
                }, j.wake = function() {
                    null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function(a) {
                        return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                    }, j === g && (h = !0), q(2)
                }, j.fps = function(a) {
                    return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
                }, j.useRAF = function(a) {
                    return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
                }, j.fps(a), setTimeout(function() {
                    n && (!e || 5 > j.frame) && j.useRAF(!1)
                }, 1500)
            }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
            var C = r("core.Animation", function(a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, R) {
                    h || g.wake();
                    var c = this.vars.useFrames ? Q : R;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
            var D = function() {
                h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
            };
            D(), f.play = function(a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, f.pause = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, f.resume = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, f.seek = function(a, b) {
                return this.totalTime(Number(a), !1 !== b)
            }, f.restart = function(a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
            }, f.reverse = function(a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, f.render = function() {}, f.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, f.isActive = function() {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
            }, f._enabled = function(a, b) {
                return h || g.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, f._kill = function() {
                return this._enabled(!1, !1)
            }, f.kill = function(a, b) {
                return this._kill(a, b), this
            }, f._uncache = function(a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, f._swapSelfInParams = function(a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, f.eventCallback = function(a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, f.delay = function(a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, f.duration = function(a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, f.totalDuration = function(a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, f.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, f.totalTime = function(a, b, c) {
                if (h || g.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1), I.length && S())
                }
                return this
            }, f.progress = f.totalProgress = function(a, b) {
                return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
            }, f.startTime = function(a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, f.timeScale = function(a) {
                if (!arguments.length) return this._timeScale;
                if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            }, f.reversed = function(a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, f.paused = function(a) {
                if (!arguments.length) return this._paused;
                if (a != this._paused && this._timeline) {
                    h || a || g.wake();
                    var b = this._timeline,
                        c = b.rawTime(),
                        d = c - this._pauseTime;
                    !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !a && this._enabled(!0, !1), this
            };
            var E = r("core.SimpleTimeline", function(a) {
                C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = null, f._sortChildren = !1, f.add = f.insert = function(a, b) {
                var c, d;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                    for (d = a._startTime; c && c._startTime > d;) c = c._prev;
                return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
            }, f._remove = function(a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, this._timeline && this._uncache(!0)), this
            }, f.render = function(a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, f.rawTime = function() {
                return h || g.wake(), this._totalTime
            };
            var F = r("TweenLite", function(b, c, d) {
                    if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : F.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? P[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : P[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                        for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = T(f, this, !1), 1 === i && this._siblings[e].length > 1 && U(f, this, null, 1, this._siblings[e])) : "string" == typeof(f = g[e--] = F.selector(f)) && g.splice(e + 1, 1) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = T(b, this, !1), 1 === i && this._siblings.length > 1 && U(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -k, this.render(-this._delay))
                }, !0),
                G = function(b) {
                    return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                H = function(a, b) {
                    var c, d = {};
                    for (c in a) O[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!L[c] || L[c] && L[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.13.2", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = !0, F.lagSmoothing = function(a, b) {
                g.lagSmoothing(a, b)
            }, F.selector = a.$ || a.jQuery || function(b) {
                var c = a.$ || a.jQuery;
                return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
            };
            var I = [],
                J = {},
                K = F._internals = {
                    isArray: n,
                    isSelector: G,
                    lazyTweens: I
                },
                L = F._plugins = {},
                M = K.tweenLookup = {},
                N = 0,
                O = K.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                P = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                Q = C._rootFramesTimeline = new E,
                R = C._rootTimeline = new E,
                S = K.lazyRender = function() {
                    var a = I.length;
                    for (J = {}; --a > -1;)(d = I[a]) && !1 !== d._lazy && (d.render(d._lazy[0], d._lazy[1], !0), d._lazy = !1);
                    I.length = 0
                };
            R._startTime = g.time, Q._startTime = g.frame, R._active = Q._active = !0, setTimeout(S, 1), C._updateRoot = F.render = function() {
                var a, b, c;
                if (I.length && S(), R.render((g.time - R._startTime) * R._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && S(), !(g.frame % 120)) {
                    for (c in M) {
                        for (b = M[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete M[c]
                    }
                    if ((!(c = R._first) || c._paused) && F.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || g.sleep()
                    }
                }
            }, g.addEventListener("tick", C._updateRoot);
            var T = function(a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (M[f || (a._gsTweenID = f = "t" + N++)] || (M[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = M[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return M[f].tweens
                },
                U = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var j, l = b._startTime + k,
                        m = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || V(b, 0, o), 0 === V(h, j, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                    for (f = n; --f > -1;) h = m[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                    return g
                },
                V = function(a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
                };
            f._init = function() {
                var a, b, c, d, e, f = this.vars,
                    g = this._overwrittenProps,
                    h = this._duration,
                    i = !!f.immediateRender,
                    j = f.ease;
                if (f.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in f.startAt) e[d] = f.startAt[d];
                    if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && !1 !== f.lazy, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== h) return
                } else if (f.runBackwards && 0 !== h)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (i = !1), c = {};
                        for (d in f) O[d] && "autoCSS" !== d || (c[d] = f[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && !1 !== f.lazy, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, g);
                if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = f.onUpdate, this._initted = !0
            }, f._initProps = function(b, c, d, e) {
                var f, g, h, i, j, k;
                if (null == b) return !1;
                J[b._gsTweenID] && S(), this.vars.css || b.style && b !== a && b.nodeType && L.css && !1 !== this.vars.autoCSS && H(this.vars, b);
                for (f in this.vars) {
                    if (k = this.vars[f], O[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                    else if (L[f] && (i = new L[f])._onInitTween(b, this.vars[f], this)) {
                        for (this._firstPT = j = {
                                _next: this._firstPT,
                                t: i,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: f,
                                pg: !0,
                                pr: i._priority
                            }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                        (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = c[f] = j = {
                        _next: this._firstPT,
                        t: b,
                        p: f,
                        f: "function" == typeof b[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                    j && j._next && (j._next._prev = j)
                }
                return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && U(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
            }, f.render = function(a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > j || j === k) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0 && j !== k) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var l = a / i,
                        m = this._easeType,
                        n = this._easePower;
                    (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || t))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || t)), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || t), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
                }
            }, f._kill = function(a, b) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
                var c, d, e, f, g, h, i, j;
                if ((n(b) || G(b)) && "number" != typeof b[0])
                    for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
                else {
                    if (this._targets) {
                        for (c = this._targets.length; --c > -1;)
                            if (b === this._targets[c]) {
                                g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (g) {
                        i = a || g, j = a !== d && "all" !== d && a !== g && ("object" != typeof a || !a._tempKill);
                        for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, f.invalidate = function() {
                return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(-this._delay)), this
            }, f._enabled = function(a, b) {
                if (h || g.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = T(d[c], this, !0);
                    else this._siblings = T(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
            }, F.to = function(a, b, c) {
                return new F(a, b, c)
            }, F.from = function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
            }, F.fromTo = function(a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
            }, F.delayedCall = function(a, b, c, d, e) {
                return new F(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    onCompleteScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    onReverseCompleteScope: d,
                    immediateRender: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, F.set = function(a, b) {
                return new F(a, 0, b)
            }, F.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : F.selector(a) || a;
                var c, d, e, f;
                if ((n(a) || G(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else
                    for (d = T(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d
            }, F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var W = r("plugins.TweenPlugin", function(a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = W.prototype
            }, !0);
            if (f = W.prototype, W.version = "1.10.1", W.API = 2, f._firstPT = null, f._addTween = function(a, b, c, d, e, f) {
                    var g, h;
                    return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                        _next: this._firstPT,
                        t: a,
                        p: b,
                        s: c,
                        c: g,
                        f: "function" == typeof a[b],
                        n: e || b,
                        r: f
                    }, h._next && (h._next._prev = h), h) : void 0
                }, f.setRatio = function(a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
                }, f._kill = function(a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, f._roundProps = function(a, b) {
                    for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
                }, F._onPluginEvent = function(a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, W.activate = function(a) {
                    for (var b = a.length; --b > -1;) a[b].API === W.API && (L[(new a[b])._propName] = a[b]);
                    return !0
                }, q.plugin = function(a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                            W.call(this, c, d), this._overwriteProps = e || []
                        }, !0 === a.global),
                        h = g.prototype = new W(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, W.activate([g]), g
                }, d = a._gsQueue) {
                for (e = 0; d.length > e; e++) d[e]();
                for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"),
    function(a, b) {
        "use strict";
        a.MixItUp = function() {
            var b = this;
            b._execAction("_constructor", 0), a.extend(b, {
                selectors: {
                    target: ".mix",
                    filter: ".filter",
                    sort: ".sort"
                },
                animation: {
                    enable: !0,
                    effects: "fade scale",
                    duration: 600,
                    easing: "ease",
                    perspectiveDistance: "3000",
                    perspectiveOrigin: "50% 50%",
                    queue: !0,
                    queueLimit: 1,
                    animateChangeLayout: !1,
                    animateResizeContainer: !0,
                    animateResizeTargets: !1,
                    staggerSequence: !1,
                    reverseOut: !1
                },
                callbacks: {
                    onMixLoad: !1,
                    onMixStart: !1,
                    onMixBusy: !1,
                    onMixEnd: !1,
                    onMixFail: !1,
                    _user: !1
                },
                controls: {
                    enable: !0,
                    live: !1,
                    toggleFilterButtons: !1,
                    toggleLogic: "or",
                    activeClass: "active"
                },
                layout: {
                    display: "inline-block",
                    containerClass: "",
                    containerClassFail: "fail"
                },
                load: {
                    filter: "all",
                    sort: !1
                },
                _$body: null,
                _$container: null,
                _$targets: null,
                _$parent: null,
                _$sortButtons: null,
                _$filterButtons: null,
                _suckMode: !1,
                _mixing: !1,
                _sorting: !1,
                _clicking: !1,
                _loading: !0,
                _changingLayout: !1,
                _changingClass: !1,
                _changingDisplay: !1,
                _origOrder: [],
                _startOrder: [],
                _newOrder: [],
                _activeFilter: null,
                _toggleArray: [],
                _toggleString: "",
                _activeSort: "default:asc",
                _newSort: null,
                _startHeight: null,
                _newHeight: null,
                _incPadding: !0,
                _newDisplay: null,
                _newClass: null,
                _targetsBound: 0,
                _targetsDone: 0,
                _queue: [],
                _$show: a(),
                _$hide: a()
            }), b._execAction("_constructor", 1)
        }, a.MixItUp.prototype = {
            constructor: a.MixItUp,
            _instances: {},
            _handled: {
                _filter: {},
                _sort: {}
            },
            _bound: {
                _filter: {},
                _sort: {}
            },
            _actions: {},
            _filters: {},
            extend: function(b) {
                for (var c in b) a.MixItUp.prototype[c] = b[c]
            },
            addAction: function(b, c, d, e) {
                a.MixItUp.prototype._addHook("_actions", b, c, d, e)
            },
            addFilter: function(b, c, d, e) {
                a.MixItUp.prototype._addHook("_filters", b, c, d, e)
            },
            _addHook: function(b, c, d, e, f) {
                var g = a.MixItUp.prototype[b],
                    h = {};
                f = 1 === f || "post" === f ? "post" : "pre", h[c] = {}, h[c][f] = {}, h[c][f][d] = e, a.extend(!0, g, h)
            },
            _init: function(b, c) {
                var d = this;
                if (d._execAction("_init", 0, arguments), c && a.extend(!0, d, c), d._$body = a("body"), d._domNode = b, d._$container = a(b), d._$container.addClass(d.layout.containerClass), d._id = b.id, d._platformDetect(), d._brake = d._getPrefixedCSS("transition", "none"), d._refresh(!0), d._$parent = d._$targets.parent().length ? d._$targets.parent() : d._$container, d.load.sort && (d._newSort = d._parseSort(d.load.sort), d._newSortString = d.load.sort, d._activeSort = d.load.sort, d._sort(), d._printSort()), d._activeFilter = "all" === d.load.filter ? d.selectors.target : "none" === d.load.filter ? "" : d.load.filter, d.controls.enable && d._bindHandlers(), d.controls.toggleFilterButtons) {
                    d._buildToggleArray();
                    for (var e = 0; e < d._toggleArray.length; e++) d._updateControls({
                        filter: d._toggleArray[e],
                        sort: d._activeSort
                    }, !0)
                } else d.controls.enable && d._updateControls({
                    filter: d._activeFilter,
                    sort: d._activeSort
                });
                d._filter(), d._init = !0, d._$container.data("mixItUp", d), d._execAction("_init", 1, arguments), d._buildState(), d._$targets.css(d._brake), d._goMix(d.animation.enable)
            },
            _platformDetect: function() {
                var a = this,
                    c = ["Webkit", "Moz", "O", "ms"],
                    d = ["webkit", "moz"],
                    e = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
                    f = "undefined" != typeof InstallTrigger,
                    g = function(a) {
                        for (var b = 0; b < c.length; b++)
                            if (c[b] + "Transition" in a.style) return {
                                prefix: "-" + c[b].toLowerCase() + "-",
                                vendor: c[b]
                            };
                        return "transition" in a.style && ""
                    },
                    h = g(a._domNode);
                a._execAction("_platformDetect", 0), a._chrome = !!e && parseInt(e[1], 10), a._ff = !!f && parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]), a._prefix = h.prefix, a._vendor = h.vendor, a._suckMode = !window.atob || !a._prefix, a._suckMode && (a.animation.enable = !1), a._ff && a._ff <= 4 && (a.animation.enable = !1);
                for (var i = 0; i < d.length && !window.requestAnimationFrame; i++) window.requestAnimationFrame = window[d[i] + "RequestAnimationFrame"];
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(a) {
                    return a.__proto__
                } : function(a) {
                    return a.constructor.prototype
                }), a._domNode.nextElementSibling === b && Object.defineProperty(Element.prototype, "nextElementSibling", {
                    get: function() {
                        for (var a = this.nextSibling; a;) {
                            if (1 === a.nodeType) return a;
                            a = a.nextSibling
                        }
                        return null
                    }
                }), a._execAction("_platformDetect", 1)
            },
            _refresh: function(a, c) {
                var d = this;
                d._execAction("_refresh", 0, arguments), d._$targets = d._$container.find(d.selectors.target);
                for (var e = 0; e < d._$targets.length; e++) {
                    var f = d._$targets[e];
                    if (f.dataset === b || c) {
                        f.dataset = {};
                        for (var g = 0; g < f.attributes.length; g++) {
                            var h = f.attributes[g],
                                i = h.name,
                                j = h.value;
                            if (i.indexOf("data-") > -1) {
                                var k = d._helpers._camelCase(i.substring(5, i.length));
                                f.dataset[k] = j
                            }
                        }
                    }
                    f.mixParent === b && (f.mixParent = d._id)
                }
                if (d._$targets.length && a || !d._origOrder.length && d._$targets.length) {
                    d._origOrder = [];
                    for (var e = 0; e < d._$targets.length; e++) {
                        var f = d._$targets[e];
                        d._origOrder.push(f)
                    }
                }
                d._execAction("_refresh", 1, arguments)
            },
            _bindHandlers: function() {
                var c = this,
                    d = a.MixItUp.prototype._bound._filter,
                    e = a.MixItUp.prototype._bound._sort;
                c._execAction("_bindHandlers", 0), c.controls.live ? c._$body.on("click.mixItUp." + c._id, c.selectors.sort, function() {
                    c._processClick(a(this), "sort")
                }).on("click.mixItUp." + c._id, c.selectors.filter, function() {
                    c._processClick(a(this), "filter")
                }) : (c._$sortButtons = a(c.selectors.sort), c._$filterButtons = a(c.selectors.filter), c._$sortButtons.on("click.mixItUp." + c._id, function() {
                    c._processClick(a(this), "sort")
                }), c._$filterButtons.on("click.mixItUp." + c._id, function() {
                    c._processClick(a(this), "filter")
                })), d[c.selectors.filter] = d[c.selectors.filter] === b ? 1 : d[c.selectors.filter] + 1, e[c.selectors.sort] = e[c.selectors.sort] === b ? 1 : e[c.selectors.sort] + 1, c._execAction("_bindHandlers", 1)
            },
            _processClick: function(c, d) {
                var e = this,
                    f = function(c, d, f) {
                        var g = a.MixItUp.prototype;
                        g._handled["_" + d][e.selectors[d]] = g._handled["_" + d][e.selectors[d]] === b ? 1 : g._handled["_" + d][e.selectors[d]] + 1, g._handled["_" + d][e.selectors[d]] === g._bound["_" + d][e.selectors[d]] && (c[(f ? "remove" : "add") + "Class"](e.controls.activeClass), delete g._handled["_" + d][e.selectors[d]])
                    };
                if (e._execAction("_processClick", 0, arguments), !e._mixing || e.animation.queue && e._queue.length < e.animation.queueLimit) {
                    if (e._clicking = !0, "sort" === d) {
                        var g = c.attr("data-sort");
                        (!c.hasClass(e.controls.activeClass) || g.indexOf("random") > -1) && (a(e.selectors.sort).removeClass(e.controls.activeClass), f(c, d), e.sort(g))
                    }
                    if ("filter" === d) {
                        var h, i = c.attr("data-filter"),
                            j = "or" === e.controls.toggleLogic ? "," : "";
                        e.controls.toggleFilterButtons ? (e._buildToggleArray(), c.hasClass(e.controls.activeClass) ? (f(c, d, !0), h = e._toggleArray.indexOf(i), e._toggleArray.splice(h, 1)) : (f(c, d), e._toggleArray.push(i)), e._toggleArray = a.grep(e._toggleArray, function(a) {
                            return a
                        }), e._toggleString = e._toggleArray.join(j), e.filter(e._toggleString)) : c.hasClass(e.controls.activeClass) || (a(e.selectors.filter).removeClass(e.controls.activeClass), f(c, d), e.filter(i))
                    }
                    e._execAction("_processClick", 1, arguments)
                } else "function" == typeof e.callbacks.onMixBusy && e.callbacks.onMixBusy.call(e._domNode, e._state, e), e._execAction("_processClickBusy", 1, arguments)
            },
            _buildToggleArray: function() {
                var a = this,
                    b = a._activeFilter.replace(/\s/g, "");
                if (a._execAction("_buildToggleArray", 0, arguments), "or" === a.controls.toggleLogic) a._toggleArray = b.split(",");
                else {
                    a._toggleArray = b.split("."), !a._toggleArray[0] && a._toggleArray.shift();
                    for (var c, d = 0; c = a._toggleArray[d]; d++) a._toggleArray[d] = "." + c
                }
                a._execAction("_buildToggleArray", 1, arguments)
            },
            _updateControls: function(c, d) {
                var e = this,
                    f = {
                        filter: c.filter,
                        sort: c.sort
                    },
                    g = function(a, b) {
                        try {
                            d && "filter" === h && "none" !== f.filter && "" !== f.filter ? a.filter(b).addClass(e.controls.activeClass) : a.removeClass(e.controls.activeClass).filter(b).addClass(e.controls.activeClass)
                        } catch (c) {}
                    },
                    h = "filter",
                    i = null;
                e._execAction("_updateControls", 0, arguments), c.filter === b && (f.filter = e._activeFilter), c.sort === b && (f.sort = e._activeSort), f.filter === e.selectors.target && (f.filter = "all");
                for (var j = 0; 2 > j; j++) i = e.controls.live ? a(e.selectors[h]) : e["_$" + h + "Buttons"], i && g(i, "[data-" + h + '="' + f[h] + '"]'), h = "sort";
                e._execAction("_updateControls", 1, arguments)
            },
            _filter: function() {
                var b = this;
                b._execAction("_filter", 0);
                for (var c = 0; c < b._$targets.length; c++) {
                    var d = a(b._$targets[c]);
                    d.is(b._activeFilter) ? b._$show = b._$show.add(d) : b._$hide = b._$hide.add(d)
                }
                b._execAction("_filter", 1)
            },
            _sort: function() {
                var a = this,
                    b = function(a) {
                        for (var b = a.slice(), c = b.length, d = c; d--;) {
                            var e = parseInt(Math.random() * c),
                                f = b[d];
                            b[d] = b[e], b[e] = f
                        }
                        return b
                    };
                a._execAction("_sort", 0), a._startOrder = [];
                for (var c = 0; c < a._$targets.length; c++) {
                    var d = a._$targets[c];
                    a._startOrder.push(d)
                }
                switch (a._newSort[0].sortBy) {
                    case "default":
                        a._newOrder = a._origOrder;
                        break;
                    case "random":
                        a._newOrder = b(a._startOrder);
                        break;
                    case "custom":
                        a._newOrder = a._newSort[0].order;
                        break;
                    default:
                        a._newOrder = a._startOrder.concat().sort(function(b, c) {
                            return a._compare(b, c)
                        })
                }
                a._execAction("_sort", 1)
            },
            _compare: function(a, b, c) {
                c = c || 0;
                var d = this,
                    e = d._newSort[c].order,
                    f = function(a) {
                        return a.dataset[d._newSort[c].sortBy] || 0
                    },
                    g = isNaN(1 * f(a)) ? f(a).toLowerCase() : 1 * f(a),
                    h = isNaN(1 * f(b)) ? f(b).toLowerCase() : 1 * f(b);
                return h > g ? "asc" === e ? -1 : 1 : g > h ? "asc" === e ? 1 : -1 : g === h && d._newSort.length > c + 1 ? d._compare(a, b, c + 1) : 0
            },
            _printSort: function(a) {
                var b = this,
                    c = a ? b._startOrder : b._newOrder,
                    d = b._$parent[0].querySelectorAll(b.selectors.target),
                    e = d.length ? d[d.length - 1].nextElementSibling : null,
                    f = document.createDocumentFragment();
                b._execAction("_printSort", 0, arguments);
                for (var g = 0; g < d.length; g++) {
                    var h = d[g],
                        i = h.nextSibling;
                    "absolute" !== h.style.position && (i && "#text" === i.nodeName && b._$parent[0].removeChild(i), b._$parent[0].removeChild(h))
                }
                for (var g = 0; g < c.length; g++) {
                    var j = c[g];
                    if ("default" !== b._newSort[0].sortBy || "desc" !== b._newSort[0].order || a) f.appendChild(j), f.appendChild(document.createTextNode(" "));
                    else {
                        var k = f.firstChild;
                        f.insertBefore(j, k), f.insertBefore(document.createTextNode(" "), j)
                    }
                }
                e ? b._$parent[0].insertBefore(f, e) : b._$parent[0].appendChild(f), b._execAction("_printSort", 1, arguments)
            },
            _parseSort: function(a) {
                for (var b = this, c = "string" == typeof a ? a.split(" ") : [a], d = [], e = 0; e < c.length; e++) {
                    var f = "string" == typeof a ? c[e].split(":") : ["custom", c[e]],
                        g = {
                            sortBy: b._helpers._camelCase(f[0]),
                            order: f[1] || "asc"
                        };
                    if (d.push(g), "default" === g.sortBy || "random" === g.sortBy) break
                }
                return b._execFilter("_parseSort", d, arguments)
            },
            _parseEffects: function() {
                var a = this,
                    b = {
                        opacity: "",
                        transformIn: "",
                        transformOut: "",
                        filter: ""
                    },
                    c = function(b, c, d) {
                        if (a.animation.effects.indexOf(b) > -1) {
                            if (c) {
                                var e = a.animation.effects.indexOf(b + "(");
                                if (e > -1) {
                                    return {
                                        val: /\(([^)]+)\)/.exec(a.animation.effects.substring(e))[1]
                                    }
                                }
                            }
                            return !0
                        }
                        return !1
                    },
                    d = function(a, b) {
                        return b ? "-" === a.charAt(0) ? a.substr(1, a.length) : "-" + a : a
                    },
                    e = function(a, e) {
                        for (var f = [
                                ["scale", ".01"],
                                ["translateX", "20px"],
                                ["translateY", "20px"],
                                ["translateZ", "20px"],
                                ["rotateX", "90deg"],
                                ["rotateY", "90deg"],
                                ["rotateZ", "180deg"]
                            ], g = 0; g < f.length; g++) {
                            var h = f[g][0],
                                i = f[g][1],
                                j = e && "scale" !== h;
                            b[a] += c(h) ? h + "(" + d(c(h, !0).val || i, j) + ") " : ""
                        }
                    };
                return b.opacity = c("fade") ? c("fade", !0).val || "0" : "1", e("transformIn"), a.animation.reverseOut ? e("transformOut", !0) : b.transformOut = b.transformIn, b.transition = {}, b.transition = a._getPrefixedCSS("transition", "all " + a.animation.duration + "ms " + a.animation.easing + ", opacity " + a.animation.duration + "ms linear"), a.animation.stagger = !!c("stagger"), a.animation.staggerDuration = parseInt(c("stagger") && c("stagger", !0).val ? c("stagger", !0).val : 100), a._execFilter("_parseEffects", b)
            },
            _buildState: function(a) {
                var b = this,
                    c = {};
                return b._execAction("_buildState", 0), c = {
                    activeFilter: "" === b._activeFilter ? "none" : b._activeFilter,
                    activeSort: a && b._newSortString ? b._newSortString : b._activeSort,
                    fail: !b._$show.length && "" !== b._activeFilter,
                    $targets: b._$targets,
                    $show: b._$show,
                    $hide: b._$hide,
                    totalTargets: b._$targets.length,
                    totalShow: b._$show.length,
                    totalHide: b._$hide.length,
                    display: a && b._newDisplay ? b._newDisplay : b.layout.display
                }, a ? b._execFilter("_buildState", c) : (b._state = c, void b._execAction("_buildState", 1))
            },
            _goMix: function(a) {
                var b = this,
                    c = function() {
                        b._chrome && 31 === b._chrome && f(b._$parent[0]), b._setInter(), d()
                    },
                    d = function() {
                        var a = window.pageYOffset,
                            c = window.pageXOffset;
                        document.documentElement.scrollHeight, b._getInterMixData(), b._setFinal(), b._getFinalMixData(), window.pageYOffset !== a && window.scrollTo(c, a), b._prepTargets(), window.requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(function() {
                            e()
                        }, 20)
                    },
                    e = function() {
                        b._animateTargets(), 0 === b._targetsBound && b._cleanUp()
                    },
                    f = function(a) {
                        var b = a.parentElement,
                            c = document.createElement("div"),
                            d = document.createDocumentFragment();
                        b.insertBefore(c, a), d.appendChild(a), b.replaceChild(a, c)
                    },
                    g = b._buildState(!0);
                b._execAction("_goMix", 0, arguments), !b.animation.duration && (a = !1), b._mixing = !0, b._$container.removeClass(b.layout.containerClassFail), "function" == typeof b.callbacks.onMixStart && b.callbacks.onMixStart.call(b._domNode, b._state, g, b), b._$container.trigger("mixStart", [b._state, g, b]), b._getOrigMixData(), a && !b._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(c) : c() : b._cleanUp(), b._execAction("_goMix", 1, arguments)
            },
            _getTargetData: function(a, b) {
                var c, d = this;
                a.dataset[b + "PosX"] = a.offsetLeft, a.dataset[b + "PosY"] = a.offsetTop, d.animation.animateResizeTargets && (c = d._suckMode ? {
                    marginBottom: "",
                    marginRight: ""
                } : window.getComputedStyle(a), a.dataset[b + "MarginBottom"] = parseInt(c.marginBottom), a.dataset[b + "MarginRight"] = parseInt(c.marginRight), a.dataset[b + "Width"] = a.offsetWidth, a.dataset[b + "Height"] = a.offsetHeight)
            },
            _getOrigMixData: function() {
                var a = this,
                    b = a._suckMode ? {
                        boxSizing: ""
                    } : window.getComputedStyle(a._$parent[0]),
                    c = b.boxSizing || b[a._vendor + "BoxSizing"];
                a._incPadding = "border-box" === c, a._execAction("_getOrigMixData", 0), !a._suckMode && (a.effects = a._parseEffects()), a._$toHide = a._$hide.filter(":visible"), a._$toShow = a._$show.filter(":hidden"), a._$pre = a._$targets.filter(":visible"), a._startHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height();
                for (var d = 0; d < a._$pre.length; d++) {
                    var e = a._$pre[d];
                    a._getTargetData(e, "orig")
                }
                a._execAction("_getOrigMixData", 1)
            },
            _setInter: function() {
                var a = this;
                a._execAction("_setInter", 0), a._changingLayout && a.animation.animateChangeLayout ? (a._$toShow.css("display", a._newDisplay), a._changingClass && a._$container.removeClass(a.layout.containerClass).addClass(a._newClass)) : a._$toShow.css("display", a.layout.display), a._execAction("_setInter", 1)
            },
            _getInterMixData: function() {
                var a = this;
                a._execAction("_getInterMixData", 0);
                for (var b = 0; b < a._$toShow.length; b++) {
                    var c = a._$toShow[b];
                    a._getTargetData(c, "inter")
                }
                for (var b = 0; b < a._$pre.length; b++) {
                    var c = a._$pre[b];
                    a._getTargetData(c, "inter")
                }
                a._execAction("_getInterMixData", 1)
            },
            _setFinal: function() {
                var a = this;
                a._execAction("_setFinal", 0), a._sorting && a._printSort(), a._$toHide.removeStyle("display"), a._changingLayout && a.animation.animateChangeLayout && a._$pre.css("display", a._newDisplay), a._execAction("_setFinal", 1)
            },
            _getFinalMixData: function() {
                var a = this;
                a._execAction("_getFinalMixData", 0);
                for (var b = 0; b < a._$toShow.length; b++) {
                    var c = a._$toShow[b];
                    a._getTargetData(c, "final")
                }
                for (var b = 0; b < a._$pre.length; b++) {
                    var c = a._$pre[b];
                    a._getTargetData(c, "final")
                }
                a._newHeight = a._incPadding ? a._$parent.outerHeight() : a._$parent.height(), a._sorting && a._printSort(!0), a._$toShow.removeStyle("display"), a._$pre.css("display", a.layout.display), a._changingClass && a.animation.animateChangeLayout && a._$container.removeClass(a._newClass).addClass(a.layout.containerClass), a._execAction("_getFinalMixData", 1)
            },
            _prepTargets: function() {
                var b = this,
                    c = {
                        _in: b._getPrefixedCSS("transform", b.effects.transformIn),
                        _out: b._getPrefixedCSS("transform", b.effects.transformOut)
                    };
                b._execAction("_prepTargets", 0), b.animation.animateResizeContainer && b._$parent.css("height", b._startHeight + "px");
                for (var d = 0; d < b._$toShow.length; d++) {
                    var e = b._$toShow[d],
                        f = a(e);
                    e.style.opacity = b.effects.opacity, e.style.display = b._changingLayout && b.animation.animateChangeLayout ? b._newDisplay : b.layout.display, f.css(c._in), b.animation.animateResizeTargets && (e.style.width = e.dataset.finalWidth + "px", e.style.height = e.dataset.finalHeight + "px", e.style.marginRight = -(e.dataset.finalWidth - e.dataset.interWidth) + 1 * e.dataset.finalMarginRight + "px", e.style.marginBottom = -(e.dataset.finalHeight - e.dataset.interHeight) + 1 * e.dataset.finalMarginBottom + "px")
                }
                for (var d = 0; d < b._$pre.length; d++) {
                    var e = b._$pre[d],
                        f = a(e),
                        g = {
                            x: e.dataset.origPosX - e.dataset.interPosX,
                            y: e.dataset.origPosY - e.dataset.interPosY
                        },
                        c = b._getPrefixedCSS("transform", "translate(" + g.x + "px," + g.y + "px)");
                    f.css(c), b.animation.animateResizeTargets && (e.style.width = e.dataset.origWidth + "px", e.style.height = e.dataset.origHeight + "px", e.dataset.origWidth - e.dataset.finalWidth && (e.style.marginRight = -(e.dataset.origWidth - e.dataset.interWidth) + 1 * e.dataset.origMarginRight + "px"), e.dataset.origHeight - e.dataset.finalHeight && (e.style.marginBottom = -(e.dataset.origHeight - e.dataset.interHeight) + 1 * e.dataset.origMarginBottom + "px"))
                }
                b._execAction("_prepTargets", 1)
            },
            _animateTargets: function() {
                var b = this;
                b._execAction("_animateTargets", 0), b._targetsDone = 0, b._targetsBound = 0, b._$parent.css(b._getPrefixedCSS("perspective", b.animation.perspectiveDistance + "px")).css(b._getPrefixedCSS("perspective-origin", b.animation.perspectiveOrigin)), b.animation.animateResizeContainer && b._$parent.css(b._getPrefixedCSS("transition", "height " + b.animation.duration + "ms ease")).css("height", b._newHeight + "px");
                for (var c = 0; c < b._$toShow.length; c++) {
                    var d = b._$toShow[c],
                        e = a(d),
                        f = {
                            x: d.dataset.finalPosX - d.dataset.interPosX,
                            y: d.dataset.finalPosY - d.dataset.interPosY
                        },
                        g = b._getDelay(c),
                        h = {};
                    d.style.opacity = "";
                    for (var i = 0; 2 > i; i++) {
                        var j = 0 === i ? j = b._prefix : "";
                        b._ff && b._ff <= 20 && (h[j + "transition-property"] = "all", h[j + "transition-timing-function"] = b.animation.easing + "ms", h[j + "transition-duration"] = b.animation.duration + "ms"), h[j + "transition-delay"] = g + "ms", h[j + "transform"] = "translate(" + f.x + "px," + f.y + "px)"
                    }(b.effects.transform || b.effects.opacity) && b._bindTargetDone(e), b._ff && b._ff <= 20 ? e.css(h) : e.css(b.effects.transition).css(h)
                }
                for (var c = 0; c < b._$pre.length; c++) {
                    var d = b._$pre[c],
                        e = a(d),
                        f = {
                            x: d.dataset.finalPosX - d.dataset.interPosX,
                            y: d.dataset.finalPosY - d.dataset.interPosY
                        },
                        g = b._getDelay(c);
                    (d.dataset.finalPosX !== d.dataset.origPosX || d.dataset.finalPosY !== d.dataset.origPosY) && b._bindTargetDone(e), e.css(b._getPrefixedCSS("transition", "all " + b.animation.duration + "ms " + b.animation.easing + " " + g + "ms")), e.css(b._getPrefixedCSS("transform", "translate(" + f.x + "px," + f.y + "px)")), b.animation.animateResizeTargets && (d.dataset.origWidth - d.dataset.finalWidth && 1 * d.dataset.finalWidth && (d.style.width = d.dataset.finalWidth + "px", d.style.marginRight = -(d.dataset.finalWidth - d.dataset.interWidth) + 1 * d.dataset.finalMarginRight + "px"), d.dataset.origHeight - d.dataset.finalHeight && 1 * d.dataset.finalHeight && (d.style.height = d.dataset.finalHeight + "px", d.style.marginBottom = -(d.dataset.finalHeight - d.dataset.interHeight) + 1 * d.dataset.finalMarginBottom + "px"))
                }
                b._changingClass && b._$container.removeClass(b.layout.containerClass).addClass(b._newClass);
                for (var c = 0; c < b._$toHide.length; c++) {
                    for (var d = b._$toHide[c], e = a(d), g = b._getDelay(c), k = {}, i = 0; 2 > i; i++) {
                        var j = 0 === i ? j = b._prefix : "";
                        k[j + "transition-delay"] = g + "ms", k[j + "transform"] = b.effects.transformOut, k.opacity = b.effects.opacity
                    }
                    e.css(b.effects.transition).css(k), (b.effects.transform || b.effects.opacity) && b._bindTargetDone(e)
                }
                b._execAction("_animateTargets", 1)
            },
            _bindTargetDone: function(b) {
                var c = this,
                    d = b[0];
                c._execAction("_bindTargetDone", 0, arguments), d.dataset.bound || (d.dataset.bound = !0, c._targetsBound++, b.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(e) {
                    (e.originalEvent.propertyName.indexOf("transform") > -1 || e.originalEvent.propertyName.indexOf("opacity") > -1) && a(e.originalEvent.target).is(c.selectors.target) && (b.off(".mixItUp"), delete d.dataset.bound, c._targetDone())
                })), c._execAction("_bindTargetDone", 1, arguments)
            },
            _targetDone: function() {
                var a = this;
                a._execAction("_targetDone", 0), a._targetsDone++, a._targetsDone === a._targetsBound && a._cleanUp(), a._execAction("_targetDone", 1)
            },
            _cleanUp: function() {
                var b = this,
                    c = b.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity",
                    d = function() {
                        b._$targets.removeStyle("transition", b._prefix)
                    };
                b._execAction("_cleanUp", 0), b._changingLayout ? b._$show.css("display", b._newDisplay) : b._$show.css("display", b.layout.display), b._$targets.css(b._brake), b._$targets.removeStyle(c, b._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"), b._$hide.removeStyle("display"), b._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", b._prefix), b._sorting && (b._printSort(), b._activeSort = b._newSortString, b._sorting = !1), b._changingLayout && (b._changingDisplay && (b.layout.display = b._newDisplay, b._changingDisplay = !1), b._changingClass && (b._$parent.removeClass(b.layout.containerClass).addClass(b._newClass), b.layout.containerClass = b._newClass, b._changingClass = !1), b._changingLayout = !1), b._refresh(), b._buildState(), b._state.fail && b._$container.addClass(b.layout.containerClassFail), b._$show = a(), b._$hide = a(), window.requestAnimationFrame && requestAnimationFrame(d), b._mixing = !1, "function" == typeof b.callbacks._user && b.callbacks._user.call(b._domNode, b._state, b), "function" == typeof b.callbacks.onMixEnd && b.callbacks.onMixEnd.call(b._domNode, b._state, b), b._$container.trigger("mixEnd", [b._state, b]), b._state.fail && ("function" == typeof b.callbacks.onMixFail && b.callbacks.onMixFail.call(b._domNode, b._state, b), b._$container.trigger("mixFail", [b._state, b])), b._loading && ("function" == typeof b.callbacks.onMixLoad && b.callbacks.onMixLoad.call(b._domNode, b._state, b), b._$container.trigger("mixLoad", [b._state, b])), b._queue.length && (b._execAction("_queue", 0), b.multiMix(b._queue[0][0], b._queue[0][1], b._queue[0][2]), b._queue.splice(0, 1)), b._execAction("_cleanUp", 1), b._loading = !1
            },
            _getPrefixedCSS: function(a, b, c) {
                var d = this,
                    e = {},
                    f = "",
                    g = -1;
                for (g = 0; 2 > g; g++) f = 0 === g ? d._prefix : "", e[f + a] = c ? f + b : b;
                return d._execFilter("_getPrefixedCSS", e, arguments)
            },
            _getDelay: function(a) {
                var b = this,
                    c = "function" == typeof b.animation.staggerSequence ? b.animation.staggerSequence.call(b._domNode, a, b._state) : a,
                    d = b.animation.stagger ? c * b.animation.staggerDuration : 0;
                return b._execFilter("_getDelay", d, arguments)
            },
            _parseMultiMixArgs: function(a) {
                for (var b = this, c = {
                        command: null,
                        animate: b.animation.enable,
                        callback: null
                    }, d = 0; d < a.length; d++) {
                    var e = a[d];
                    null !== e && ("object" == typeof e || "string" == typeof e ? c.command = e : "boolean" == typeof e ? c.animate = e : "function" == typeof e && (c.callback = e))
                }
                return b._execFilter("_parseMultiMixArgs", c, arguments)
            },
            _parseInsertArgs: function(b) {
                for (var c = this, d = {
                        index: 0,
                        $object: a(),
                        multiMix: {
                            filter: c._state.activeFilter
                        },
                        callback: null
                    }, e = 0; e < b.length; e++) {
                    var f = b[e];
                    "number" == typeof f ? d.index = f : "object" == typeof f && f instanceof a ? d.$object = f : "object" == typeof f && c._helpers._isElement(f) ? d.$object = a(f) : "object" == typeof f && null !== f ? d.multiMix = f : "boolean" != typeof f || f ? "function" == typeof f && (d.callback = f) : d.multiMix = !1
                }
                return c._execFilter("_parseInsertArgs", d, arguments)
            },
            _execAction: function(a, b, c) {
                var d = this,
                    e = b ? "post" : "pre";
                if (!d._actions.isEmptyObject && d._actions.hasOwnProperty(a))
                    for (var f in d._actions[a][e]) d._actions[a][e][f].call(d, c)
            },
            _execFilter: function(a, b, c) {
                var d = this;
                if (d._filters.isEmptyObject || !d._filters.hasOwnProperty(a)) return b;
                for (var e in d._filters[a]) return d._filters[a][e].call(d, c)
            },
            _helpers: {
                _camelCase: function(a) {
                    return a.replace(/-([a-z])/g, function(a) {
                        return a[1].toUpperCase()
                    })
                },
                _isElement: function(a) {
                    return window.HTMLElement ? a instanceof HTMLElement : null !== a && 1 === a.nodeType && "string" === a.nodeName
                }
            },
            isMixing: function() {
                var a = this;
                return a._execFilter("isMixing", a._mixing)
            },
            filter: function() {
                var a = this,
                    b = a._parseMultiMixArgs(arguments);
                a._clicking && (a._toggleString = ""), a.multiMix({
                    filter: b.command
                }, b.animate, b.callback)
            },
            sort: function() {
                var a = this,
                    b = a._parseMultiMixArgs(arguments);
                a.multiMix({
                    sort: b.command
                }, b.animate, b.callback)
            },
            changeLayout: function() {
                var a = this,
                    b = a._parseMultiMixArgs(arguments);
                a.multiMix({
                    changeLayout: b.command
                }, b.animate, b.callback)
            },
            multiMix: function() {
                var a = this,
                    c = a._parseMultiMixArgs(arguments);
                if (a._execAction("multiMix", 0, arguments), a._mixing) a.animation.queue && a._queue.length < a.animation.queueLimit ? (a._queue.push(arguments), a.controls.enable && !a._clicking && a._updateControls(c.command), a._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof a.callbacks.onMixBusy && a.callbacks.onMixBusy.call(a._domNode, a._state, a), a._$container.trigger("mixBusy", [a._state, a]), a._execAction("multiMixBusy", 1, arguments));
                else {
                    a.controls.enable && !a._clicking && (a.controls.toggleFilterButtons && a._buildToggleArray(), a._updateControls(c.command, a.controls.toggleFilterButtons)), a._queue.length < 2 && (a._clicking = !1), delete a.callbacks._user, c.callback && (a.callbacks._user = c.callback);
                    var d = c.command.sort,
                        e = c.command.filter,
                        f = c.command.changeLayout;
                    a._refresh(), d && (a._newSort = a._parseSort(d), a._newSortString = d, a._sorting = !0, a._sort()), e !== b && (e = "all" === e ? a.selectors.target : e, a._activeFilter = e), a._filter(), f && (a._newDisplay = "string" == typeof f ? f : f.display || a.layout.display, a._newClass = f.containerClass || "", (a._newDisplay !== a.layout.display || a._newClass !== a.layout.containerClass) && (a._changingLayout = !0, a._changingClass = a._newClass !== a.layout.containerClass, a._changingDisplay = a._newDisplay !== a.layout.display)), a._$targets.css(a._brake), a._goMix(c.animate ^ a.animation.enable ? c.animate : a.animation.enable), a._execAction("multiMix", 1, arguments)
                }
            },
            insert: function() {
                var a = this,
                    b = a._parseInsertArgs(arguments),
                    c = "function" == typeof b.callback ? b.callback : null,
                    d = document.createDocumentFragment(),
                    e = function() {
                        return a._refresh(), a._$targets.length ? b.index < a._$targets.length || !a._$targets.length ? a._$targets[b.index] : a._$targets[a._$targets.length - 1].nextElementSibling : a._$parent[0].children[0]
                    }();
                if (a._execAction("insert", 0, arguments), b.$object) {
                    for (var f = 0; f < b.$object.length; f++) {
                        var g = b.$object[f];
                        d.appendChild(g), d.appendChild(document.createTextNode(" "))
                    }
                    a._$parent[0].insertBefore(d, e)
                }
                a._execAction("insert", 1, arguments), "object" == typeof b.multiMix && a.multiMix(b.multiMix, c)
            },
            prepend: function() {
                var a = this,
                    b = a._parseInsertArgs(arguments);
                a.insert(0, b.$object, b.multiMix, b.callback)
            },
            append: function() {
                var a = this,
                    b = a._parseInsertArgs(arguments);
                a.insert(a._state.totalTargets, b.$object, b.multiMix, b.callback)
            },
            getOption: function(a) {
                var c = this,
                    d = function(a, c) {
                        for (var d = c.split("."), e = d.pop(), f = d.length, g = 1, h = d[0] || c;
                            (a = a[h]) && f > g;) h = d[g], g++;
                        return a !== b ? a[e] !== b ? a[e] : a : void 0
                    };
                return a ? c._execFilter("getOption", d(c, a), arguments) : c
            },
            setOptions: function(b) {
                var c = this;
                c._execAction("setOptions", 0, arguments), "object" == typeof b && a.extend(!0, c, b), c._execAction("setOptions", 1, arguments)
            },
            getState: function() {
                var a = this;
                return a._execFilter("getState", a._state, a)
            },
            forceRefresh: function() {
                this._refresh(!1, !0)
            },
            destroy: function(b) {
                var c = this,
                    d = a.MixItUp.prototype._bound._filter,
                    e = a.MixItUp.prototype._bound._sort;
                c._execAction("destroy", 0, arguments), c._$body.add(a(c.selectors.sort)).add(a(c.selectors.filter)).off(".mixItUp");
                for (var f = 0; f < c._$targets.length; f++) {
                    var g = c._$targets[f];
                    b && (g.style.display = ""), delete g.mixParent
                }
                c._execAction("destroy", 1, arguments), d[c.selectors.filter] && d[c.selectors.filter] > 1 ? d[c.selectors.filter]-- : 1 === d[c.selectors.filter] && delete d[c.selectors.filter], e[c.selectors.sort] && e[c.selectors.sort] > 1 ? e[c.selectors.sort]-- : 1 === e[c.selectors.sort] && delete e[c.selectors.sort], delete a.MixItUp.prototype._instances[c._id]
            }
        }, a.fn.mixItUp = function() {
            var c, d = arguments,
                e = [],
                f = function(b, c) {
                    var d = new a.MixItUp,
                        e = function() {
                            return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
                        };
                    d._execAction("_instantiate", 0, arguments), b.id = b.id ? b.id : "MixItUp" + e(), d._instances[b.id] || (d._instances[b.id] = d, d._init(b, c)), d._execAction("_instantiate", 1, arguments)
                };
            return c = this.each(function() {
                if (d && "string" == typeof d[0]) {
                    var c = a.MixItUp.prototype._instances[this.id];
                    if ("isLoaded" === d[0]) e.push(!!c);
                    else {
                        var g = c[d[0]](d[1], d[2], d[3]);
                        g !== b && e.push(g)
                    }
                } else f(this, d[0])
            }), e.length ? e.length > 1 ? e : e[0] : c
        }, a.fn.removeStyle = function(c, d) {
            return d = d || "", this.each(function() {
                for (var e = this, f = c.split(" "), g = 0; g < f.length; g++)
                    for (var h = 0; 4 > h; h++) {
                        switch (h) {
                            case 0:
                                var i = f[g];
                                break;
                            case 1:
                                var i = a.MixItUp.prototype._helpers._camelCase(i);
                                break;
                            case 2:
                                var i = d + f[g];
                                break;
                            case 3:
                                var i = a.MixItUp.prototype._helpers._camelCase(d + f[g])
                        }
                        if (e.style[i] !== b && "unknown" != typeof e.style[i] && e.style[i].length > 0 && (e.style[i] = ""), !d && 1 === h) break
                    }
                e.attributes && e.attributes.style && e.attributes.style !== b && "" === e.attributes.style.value && e.attributes.removeNamedItem("style")
            })
        }
    }(jQuery),
    function(a) {
        var b = "waitForImages";
        a.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        }, a.expr[":"].uncached = function(b) {
            if (!a(b).is('img[src!=""]')) return !1;
            var c = new Image;
            return c.src = b.src, !c.complete
        }, a.fn.waitForImages = function(c, d, e) {
            var f = 0,
                g = 0;
            if (a.isPlainObject(arguments[0]) && (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var h = a(this),
                    i = [],
                    j = a.waitForImages.hasImageProperties || [],
                    k = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                e ? h.find("*").andSelf().each(function() {
                    var b = a(this);
                    b.is("img:uncached") && i.push({
                        src: b.attr("src"),
                        element: b[0]
                    }), a.each(j, function(a, c) {
                        var d, e = b.css(c);
                        if (!e) return !0;
                        for (; d = k.exec(e);) i.push({
                            src: d[2],
                            element: b[0]
                        })
                    })
                }) : h.find("img:uncached").each(function() {
                    i.push({
                        src: this.src,
                        element: this
                    })
                }), f = i.length, g = 0, 0 === f && c.call(h[0]), a.each(i, function(e, i) {
                    var j = new Image;
                    a(j).bind("load." + b + " error." + b, function(a) {
                        if (g++, d.call(i.element, g, f, "load" == a.type), g == f) return c.call(h[0]), !1
                    }), j.src = i.src
                })
            })
        }
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (1 - Math.pow(2, -10 * b / e)) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (2 - Math.pow(2, -10 * --b)) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return b < 1 ? h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * -.5 + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * ((1 + (f *= 1.525)) * b - f)) + c : d / 2 * ((b -= 2) * b * ((1 + (f *= 1.525)) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function(a, b, c) {
        "use strict";

        function d(c) {
            if (e = b.documentElement, f = b.body, Q(), da = this, c = c || {}, ia = c.constants || {}, c.easing)
                for (var d in c.easing) S[d] = c.easing[d];
            oa = c.edgeStrategy || "set", ga = {
                beforerender: c.beforerender,
                render: c.render
            }, ha = !1 !== c.forceHeight, ha && (Aa = c.scale || 1), ka = !1 !== c.smoothScrolling, la = c.smoothScrollingDuration || z, ma = {
                targetTop: da.getScrollTop()
            }, Ia = (c.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || a.opera)
            })(), Ia ? (fa = b.getElementById("skrollr-body"), fa && ca(), T(), ua(e, [s, v], [t])) : ua(e, [s, u], [t]), da.refresh(), qa(a, "resize orientationchange", function() {
                var a = e.clientWidth,
                    b = e.clientHeight;
                b === Fa && a === Ea || (Fa = b, Ea = a, Ga = !0)
            });
            var g = R();
            return function a() {
                W(), g(a)
            }(), da
        }
        var e, f, g = a.skrollr = {
                get: function() {
                    return da
                },
                init: function(a) {
                    return da || new d(a)
                },
                VERSION: "0.6.10"
            },
            h = Object.prototype.hasOwnProperty,
            i = a.Math,
            j = a.getComputedStyle,
            k = "touchstart",
            l = "touchmove",
            m = "touchcancel",
            n = "touchend",
            o = "skrollable",
            p = o + "-before",
            q = o + "-between",
            r = o + "-after",
            s = "skrollr",
            t = "no-" + s,
            u = s + "-desktop",
            v = s + "-mobile",
            w = "linear",
            x = 1e3,
            y = 6e-4,
            z = 200,
            A = "end",
            B = "center",
            C = "bottom",
            D = "___skrollable_id",
            E = /^\s+|\s+$/g,
            F = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            G = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            H = /^([a-z\-]+)\[(\w+)\]$/,
            I = /-([a-z])/g,
            J = function(a, b) {
                return b.toUpperCase()
            },
            K = /[\-+]?[\d]*\.?[\d]+/g,
            L = /\{\?\}/g,
            M = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            N = /[a-z\-]+-gradient/g,
            O = "",
            P = "",
            Q = function() {
                var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (j) {
                    var b = j(f, null);
                    for (var c in b)
                        if (O = c.match(a) || +c == c && b[c].match(a)) break;
                    if (!O) return void(O = P = "");
                    O = O[0], "-" === O.slice(0, 1) ? (P = O, O = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[O]) : P = "-" + O.toLowerCase() + "-"
                }
            },
            R = function() {
                var b = a.requestAnimationFrame || a[O.toLowerCase() + "RequestAnimationFrame"],
                    c = xa();
                return !Ia && b || (b = function(b) {
                    var d = xa() - c,
                        e = i.max(0, 1e3 / 60 - d);
                    a.setTimeout(function() {
                        c = xa(), b()
                    }, e)
                }), b
            },
            S = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(a) {
                    return a
                },
                quadratic: function(a) {
                    return a * a
                },
                cubic: function(a) {
                    return a * a * a
                },
                swing: function(a) {
                    return -i.cos(a * i.PI) / 2 + .5
                },
                sqrt: function(a) {
                    return i.sqrt(a)
                },
                outCubic: function(a) {
                    return i.pow(a - 1, 3) + 1
                },
                bounce: function(a) {
                    var b;
                    if (a <= .5083) b = 3;
                    else if (a <= .8489) b = 9;
                    else if (a <= .96208) b = 27;
                    else {
                        if (!(a <= .99981)) return 1;
                        b = 91
                    }
                    return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
                }
            };
        d.prototype.refresh = function(a) {
            var d, e, f = !1;
            for (a === c ? (f = !0, ea = [], Ha = 0, a = b.getElementsByTagName("*")) : a = [].concat(a), d = 0, e = a.length; d < e; d++) {
                var g = a[d],
                    h = g,
                    i = [],
                    j = ka,
                    k = oa;
                if (g.attributes) {
                    for (var l = 0, m = g.attributes.length; l < m; l++) {
                        var n = g.attributes[l];
                        if ("data-anchor-target" !== n.name)
                            if ("data-smooth-scrolling" !== n.name)
                                if ("data-edge-strategy" !== n.name) {
                                    var p = n.name.match(F);
                                    if (null !== p) {
                                        var q = p[1];
                                        q = q && ia[q.substr(1)] || 0;
                                        var r = (0 | p[2]) + q,
                                            s = p[3],
                                            t = p[4] || s,
                                            u = {
                                                offset: r,
                                                props: n.value,
                                                element: g
                                            };
                                        i.push(u), s && "start" !== s && s !== A ? (u.mode = "relative", u.anchors = [s, t]) : (u.mode = "absolute", s === A ? u.isEnd = !0 : (u.frame = r * Aa, delete u.offset))
                                    }
                                } else k = n.value;
                        else j = "off" !== n.value;
                        else if (null === (h = b.querySelector(n.value))) throw 'Unable to find anchor target "' + n.value + '"'
                    }
                    if (i.length) {
                        var v, w, x;
                        !f && D in g ? (x = g[D], v = ea[x].styleAttr, w = ea[x].classAttr) : (x = g[D] = Ha++, v = g.style.cssText, w = ta(g)), ea[x] = {
                            element: g,
                            styleAttr: v,
                            classAttr: w,
                            anchorTarget: h,
                            keyFrames: i,
                            smoothScrolling: j,
                            edgeStrategy: k
                        }, ua(g, [o], [])
                    }
                }
            }
            for (ra(), d = 0, e = a.length; d < e; d++) {
                var y = ea[a[d][D]];
                y !== c && (X(y), Z(y))
            }
            return da
        }, d.prototype.relativeToAbsolute = function(a, b, c) {
            var d = e.clientHeight,
                f = a.getBoundingClientRect(),
                g = f.top,
                h = f.bottom - f.top;
            return b === C ? g -= d : b === B && (g -= d / 2), c === C ? g += h : c === B && (g += h / 2), (g += da.getScrollTop()) + .5 | 0
        }, d.prototype.animateTo = function(a, b) {
            b = b || {};
            var d = xa(),
                e = da.getScrollTop();
            return ja = {
                startTop: e,
                topDiff: a - e,
                targetTop: a,
                duration: b.duration || x,
                startTime: d,
                endTime: d + (b.duration || x),
                easing: S[b.easing || w],
                done: b.done
            }, ja.topDiff || (ja.done && ja.done.call(da, !1), ja = c), da
        }, d.prototype.stopAnimateTo = function() {
            ja && ja.done && ja.done.call(da, !0), ja = c
        }, d.prototype.isAnimatingTo = function() {
            return !!ja
        }, d.prototype.setScrollTop = function(b, c) {
            return !0 === c && (Ca = b, na = !0), Ia ? Ja = i.min(i.max(b, 0), za) : a.scrollTo(0, b), da
        }, d.prototype.getScrollTop = function() {
            return Ia ? Ja : a.pageYOffset || e.scrollTop || f.scrollTop || 0
        }, d.prototype.on = function(a, b) {
            return ga[a] = b, da
        }, d.prototype.off = function(a) {
            return delete ga[a], da
        };
        var T = function() {
                var b, d, g, h, j, o, p, q, r, s, t;
                qa(e, [k, l, m, n].join(" "), function(a) {
                    a.preventDefault();
                    var e = a.changedTouches[0];
                    switch (h = e.clientY, j = e.clientX, r = a.timeStamp, a.type) {
                        case k:
                            b && b.blur(), da.stopAnimateTo(), b = a.target, d = o = h, g = j, q = r;
                            break;
                        case l:
                            p = h - o, t = r - s, da.setScrollTop(Ja - p, !0), o = h, s = r;
                            break;
                        default:
                        case m:
                        case n:
                            var f = d - h,
                                u = g - j;
                            if (u * u + f * f < 49) return b.focus(), void b.click();
                            b = c;
                            var v = p / t;
                            v = i.max(i.min(v, 3), -3);
                            var w = i.abs(v / y),
                                x = v * w + .5 * y * w * w,
                                z = da.getScrollTop() - x,
                                A = 0;
                            z > za ? (A = (za - z) / x, z = za) : z < 0 && (A = -z / x, z = 0), w *= 1 - A, da.animateTo(z, {
                                easing: "outCubic",
                                duration: w
                            })
                    }
                }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
            },
            U = function() {
                var a, b, c, d, e, f, g, h, j;
                for (h = 0, j = ea.length; h < j; h++)
                    for (a = ea[h], b = a.element, c = a.anchorTarget, d = a.keyFrames, e = 0, f = d.length; e < f; e++) g = d[e], "relative" === g.mode && (ba(b), g.frame = da.relativeToAbsolute(c, g.anchors[0], g.anchors[1]) - g.offset, ba(b, !0)), ha && !g.isEnd && g.frame > za && (za = g.frame);
                for (za = i.max(za, sa()), h = 0, j = ea.length; h < j; h++) {
                    for (a = ea[h], d = a.keyFrames, e = 0, f = d.length; e < f; e++) g = d[e], g.isEnd && (g.frame = za - g.offset);
                    a.keyFrames.sort(ya)
                }
            },
            V = function(a, b) {
                for (var c = 0, d = ea.length; c < d; c++) {
                    var e, f, i = ea[c],
                        j = i.element,
                        k = i.smoothScrolling ? a : b,
                        l = i.keyFrames,
                        m = l[0].frame,
                        n = l[l.length - 1].frame,
                        s = k < m,
                        t = k > n,
                        u = l[s ? 0 : l.length - 1];
                    if (s || t) {
                        if (s && -1 === i.edge || t && 1 === i.edge) continue;
                        switch (ua(j, [s ? p : r], [p, q, r]), i.edge = s ? -1 : 1, i.edgeStrategy) {
                            case "reset":
                                ba(j);
                                continue;
                            case "ease":
                                k = u.frame;
                                break;
                            default:
                            case "set":
                                var v = u.props;
                                for (e in v) h.call(v, e) && (f = aa(v[e].value), g.setStyle(j, e, f));
                                continue
                        }
                    } else 0 !== i.edge && (ua(j, [o, q], [p, r]), i.edge = 0);
                    for (var w = 0, x = l.length - 1; w < x; w++)
                        if (k >= l[w].frame && k <= l[w + 1].frame) {
                            var y = l[w],
                                z = l[w + 1];
                            for (e in y.props)
                                if (h.call(y.props, e)) {
                                    var A = (k - y.frame) / (z.frame - y.frame);
                                    A = y.props[e].easing(A), f = _(y.props[e].value, z.props[e].value, A), f = aa(f), g.setStyle(j, e, f)
                                }
                            break
                        }
                }
            },
            W = function() {
                Ga && (Ga = !1, ra());
                var a, b, d = da.getScrollTop(),
                    e = xa();
                if (ja) e >= ja.endTime ? (d = ja.targetTop, a = ja.done, ja = c) : (b = ja.easing((e - ja.startTime) / ja.duration), d = ja.startTop + b * ja.topDiff | 0), da.setScrollTop(d, !0);
                else if (!Ia) {
                    var f = ma.targetTop - d;
                    f && (ma = {
                        startTop: Ca,
                        topDiff: d - Ca,
                        targetTop: d,
                        startTime: Da,
                        endTime: Da + la
                    }), e <= ma.endTime && (b = S.sqrt((e - ma.startTime) / la), d = ma.startTop + b * ma.topDiff | 0)
                }
                if (Ia && fa && g.setStyle(fa, "transform", "translate(0, " + -Ja + "px) " + pa), na || Ca !== d) {
                    Ba = d >= Ca ? "down" : "up", na = !1;
                    var h = {
                        curTop: d,
                        lastTop: Ca,
                        maxTop: za,
                        direction: Ba
                    };
                    !1 !== (ga.beforerender && ga.beforerender.call(da, h)) && (V(d, da.getScrollTop()), Ca = d, ga.render && ga.render.call(da, h)), a && a.call(da, !1)
                }
                Da = e
            },
            X = function(a) {
                for (var b = 0, c = a.keyFrames.length; b < c; b++) {
                    for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = G.exec(h.props));) f = g[1], e = g[2], d = f.match(H), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? Y(e) : [e.slice(1)], i[f] = {
                        value: e,
                        easing: S[d]
                    };
                    h.props = i
                }
            },
            Y = function(a) {
                var b = [];
                return M.lastIndex = 0, a = a.replace(M, function(a) {
                    return a.replace(K, function(a) {
                        return a / 255 * 100 + "%"
                    })
                }), P && (N.lastIndex = 0, a = a.replace(N, function(a) {
                    return P + a
                })), a = a.replace(K, function(a) {
                    return b.push(+a), "{?}"
                }), b.unshift(a), b
            },
            Z = function(a) {
                var b, c, d = {};
                for (b = 0, c = a.keyFrames.length; b < c; b++) $(a.keyFrames[b], d);
                for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) $(a.keyFrames[b], d)
            },
            $ = function(a, b) {
                var c;
                for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
                for (c in a.props) b[c] = a.props[c]
            },
            _ = function(a, b, c) {
                var d, e = a.length;
                if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
                var f = [a[0]];
                for (d = 1; d < e; d++) f[d] = a[d] + (b[d] - a[d]) * c;
                return f
            },
            aa = function(a) {
                var b = 1;
                return L.lastIndex = 0, a[0].replace(L, function() {
                    return a[b++]
                })
            },
            ba = function(a, b) {
                a = [].concat(a);
                for (var c, d, e = 0, f = a.length; e < f; e++) d = a[e], (c = ea[d[D]]) && (b ? (d.style.cssText = c.dirtyStyleAttr, ua(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = ta(d), d.style.cssText = c.styleAttr, ua(d, c.classAttr)))
            },
            ca = function() {
                pa = "translateZ(0)", g.setStyle(fa, "transform", pa);
                var a = j(fa),
                    b = a.getPropertyValue("transform"),
                    c = a.getPropertyValue(P + "transform");
                b && "none" !== b || c && "none" !== c || (pa = "")
            };
        g.setStyle = function(a, b, c) {
            var d = a.style;
            if ("zIndex" === (b = b.replace(I, J).replace("-", ""))) d[b] = "" + (0 | c);
            else if ("float" === b) d.styleFloat = d.cssFloat = c;
            else try {
                O && (d[O + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
            } catch (e) {}
        };
        var da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa = g.addEvent = function(b, c, d) {
                var e = function(b) {
                    return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                        b.returnValue = !1
                    }), d.call(this, b)
                };
                c = c.split(" ");
                for (var f = 0, g = c.length; f < g; f++) b.addEventListener ? b.addEventListener(c[f], d, !1) : b.attachEvent("on" + c[f], e)
            },
            ra = function() {
                var a = da.getScrollTop();
                za = 0, ha && !Ia && (f.style.height = "auto"), U(), ha && !Ia && (f.style.height = za + e.clientHeight + "px"), Ia ? da.setScrollTop(i.min(da.getScrollTop(), za)) : da.setScrollTop(a, !0), na = !0
            },
            sa = function() {
                var a = fa && fa.offsetHeight || 0;
                return i.max(a, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight) - e.clientHeight
            },
            ta = function(b) {
                var c = "className";
                return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
            },
            ua = function(b, d, e) {
                var f = "className";
                if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
                for (var g = b[f], h = 0, i = e.length; h < i; h++) g = wa(g).replace(wa(e[h]), " ");
                g = va(g);
                for (var j = 0, k = d.length; j < k; j++) - 1 === wa(g).indexOf(wa(d[j])) && (g += " " + d[j]);
                b[f] = va(g)
            },
            va = function(a) {
                return a.replace(E, "")
            },
            wa = function(a) {
                return " " + a + " "
            },
            xa = Date.now || function() {
                return +new Date
            },
            ya = function(a, b) {
                return a.frame - b.frame
            },
            za = 0,
            Aa = 1,
            Ba = "down",
            Ca = -1,
            Da = xa(),
            Ea = 0,
            Fa = 0,
            Ga = !1,
            Ha = 0,
            Ia = !1,
            Ja = 0
    }(window, document),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function b(b, d) {
                var e, f = this;
                f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(a, b) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !1,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, f.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.hidden = "hidden", f.paused = !1, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, e, d), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, void 0 !== document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0), f.checkResponsive(!0)
            }
            var c = 0;
            return b
        }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : !0 === d ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed)
            }
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.animateHeight(), !0 === e.options.rtl && !1 === e.options.vertical && (b = -b), !1 === e.transformsEnabled ? !1 === e.options.vertical ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : !1 === e.cssTransitions ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), !1 === e.options.vertical ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), !1 === e.options.vertical ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.asNavFor = function(b) {
            var c = this,
                d = c.options.asNavFor;
            d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            !1 === b.options.fade ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && !0 !== a.paused && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this;
            !1 === a.options.infinite ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 == 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
        }, b.prototype.buildArrows = function() {
            var b = this;
            !0 === b.options.arrows && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), !0 !== b.options.infinite && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function() {
            var b, c, d = this;
            if (!0 === d.options.dots && d.slideCount > d.options.slidesToShow) {
                for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
                c += "</ul>", d.$dots = a(c).appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (!0 === b.options.centerMode || !0 === b.options.swipeToSlide) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), !0 === b.options.draggable && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function() {
            var a, b, c, d, e, f, g, h = this;
            if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
                for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                    var i = document.createElement("div");
                    for (b = 0; b < h.options.rows; b++) {
                        var j = document.createElement("div");
                        for (c = 0; c < h.options.slidesPerRow; c++) {
                            var k = a * g + (b * h.options.slidesPerRow + c);
                            f.get(k) && j.appendChild(f.get(k))
                        }
                        i.appendChild(j)
                    }
                    d.appendChild(i)
                }
                h.$slider.html(d), h.$slider.children().children().children().css({
                    width: 100 / h.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, b.prototype.checkResponsive = function(b, c) {
            var d, e, f, g = this,
                h = !1,
                i = g.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
                e = null;
                for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (!1 === g.originalSettings.mobileFirst ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || !1 === h || g.$slider.trigger("breakpoint", [g, h])
            }
        }, b.prototype.changeSlide = function(b, c) {
            var d, e, f, g = this,
                h = a(b.target);
            switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll != 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                case "previous":
                    e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                    break;
                case "next":
                    e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                    g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function(a) {
            var b, c;
            if (b = this.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
            else
                for (var d in b) {
                    if (a < b[d]) {
                        a = c;
                        break
                    }
                    c = b[d]
                }
            return a
        }, b.prototype.cleanUpEvents = function() {
            var b = this;
            b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), !0 === b.options.pauseOnDotsHover && !0 === b.options.autoplay && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), !0 === b.options.arrows && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), !0 === b.options.accessibility && b.$list.off("keydown.slick", b.keyHandler), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpRows = function() {
            var a, b = this;
            b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.html(a))
        }, b.prototype.clickHandler = function(a) {
            !1 === this.shouldClick && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function(b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            !1 === c.cssTransitions ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function(a) {
            var b = this;
            !1 === b.cssTransitions ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, b.prototype.getDotCount = function() {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (!0 === a.options.infinite)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (!0 === a.options.centerMode) d = a.slideCount;
            else
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d - 1
        }, b.prototype.getLeft = function(a) {
            var b, c, d, e = this,
                f = 0;
            return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), !0 === e.options.infinite ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll != 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), !0 === e.options.centerMode && !0 === e.options.infinite ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : !0 === e.options.centerMode && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = !1 === e.options.vertical ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, !0 === e.options.variableWidth && (d = e.slideCount <= e.options.slidesToShow || !1 === e.options.infinite ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = !0 === e.options.rtl ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, !0 === e.options.centerMode && (d = e.slideCount <= e.options.slidesToShow || !1 === e.options.infinite ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = !0 === e.options.rtl ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            return this.options[a]
        }, b.prototype.getNavigableIndexes = function() {
            var a, b = this,
                c = 0,
                d = 0,
                e = [];
            for (!1 === b.options.infinite ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
            return e
        }, b.prototype.getSlick = function() {
            return this
        }, b.prototype.getSlideCount = function() {
            var b, c, d = this;
            return c = !0 === d.options.centerMode ? d.slideWidth * Math.floor(d.options.slidesToShow / 2) : 0, !0 === d.options.swipeToSlide ? (d.$slideTrack.find(".slick-slide").each(function(e, f) {
                return f.offsetLeft - c + a(f).outerWidth() / 2 > -1 * d.swipeLeft ? (b = f, !1) : void 0
            }), Math.abs(a(b).attr("data-slick-index") - d.currentSlide) || 1) : d.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function(b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), !0 === c.options.accessibility && c.initADA()
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            !0 === b.options.dots && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), !0 === b.options.dots && !0 === b.options.pauseOnDotsHover && !0 === b.options.autoplay && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), !0 === b.options.accessibility && b.$list.on("keydown.slick", b.keyHandler), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.show(), !0 === a.options.autoplay && a.autoPlay()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && !0 === b.options.accessibility ? b.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === a.keyCode && !0 === b.options.accessibility && b.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, b.prototype.lazyLoad = function() {
            function b(b) {
                a("img[data-lazy]", b).each(function() {
                    var b = a(this),
                        c = a(this).attr("data-lazy"),
                        d = document.createElement("img");
                    d.onload = function() {
                        b.animate({
                            opacity: 0
                        }, 100, function() {
                            b.attr("src", c).animate({
                                opacity: 1
                            }, 200, function() {
                                b.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, d.src = c
                })
            }
            var c, d, e, f, g = this;
            !0 === g.options.centerMode ? !0 === g.options.infinite ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = g.options.slidesToShow / 2 + 1 + 2 + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, !0 === g.options.fade && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function() {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.paused = !1, a.autoPlay()
        }, b.prototype.postSlide = function(a) {
            var b = this;
            b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, !0 === b.options.autoplay && !1 === b.paused && b.autoPlay(), !0 === b.options.accessibility && b.initADA()
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function(a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function() {
            var b, c = this;
            a("img[data-lazy]", c.$slider).length > 0 && (b = a("img[data-lazy]", c.$slider).first(), b.attr("src", null), b.attr("src", b.attr("data-lazy")).removeClass("slick-loading").load(function() {
                b.removeAttr("data-lazy"), c.progressiveLazyLoad(), !0 === c.options.adaptiveHeight && c.setPosition()
            }).error(function() {
                b.removeAttr("data-lazy"), c.progressiveLazyLoad()
            }))
        }, b.prototype.refresh = function(b) {
            var c, d, e = this;
            d = e.slideCount - e.options.slidesToShow, e.options.infinite || (e.slideCount <= e.options.slidesToShow ? e.currentSlide = 0 : e.currentSlide > d && (e.currentSlide = d)), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
                currentSlide: c
            }), e.init(), b || e.changeSlide({
                data: {
                    message: "index",
                    index: c
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function() {
            var b, c, d, e = this,
                f = e.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                e.respondTo = e.options.respondTo || "window";
                for (b in f)
                    if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                        for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                        e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                    }
                e.breakpoints.sort(function(a, b) {
                    return e.options.mobileFirst ? a - b : b - a
                })
            }
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), !0 === b.options.autoplay && b.focusHandler()
        }, b.prototype.resize = function() {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = !0 === b ? 0 : d.slideCount - 1) : a = !0 === b ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), !0 === c ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function(a) {
            var b, c, d = this,
                e = {};
            !0 === d.options.rtl && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, !1 === d.transformsEnabled ? d.$slideTrack.css(e) : (e = {}, !1 === d.cssTransitions ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
        }, b.prototype.setDimensions = function() {
            var a = this;
            !1 === a.options.vertical ? !0 === a.options.centerMode && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), !0 === a.options.centerMode && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), !1 === a.options.vertical && !1 === a.options.variableWidth ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : !0 === a.options.variableWidth ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            !1 === a.options.variableWidth && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function() {
            var b, c = this;
            c.$slides.each(function(d, e) {
                b = c.slideWidth * d * -1, !0 === c.options.rtl ? a(e).css({
                    position: "relative",
                    right: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                })
            }), c.$slides.eq(c.currentSlide).css({
                zIndex: c.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
            var e, f, g = this;
            if ("responsive" === b && "array" === a.type(c))
                for (f in c)
                    if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[f]];
                    else {
                        for (e = g.options.responsive.length - 1; e >= 0;) g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1), e--;
                        g.options.responsive.push(c[f])
                    }
            else g.options[b] = c;
            !0 === d && (g.unload(), g.reinit())
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), !1 === a.options.fade ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function() {
            var a = this,
                b = document.body.style;
            a.positionProp = !0 === a.options.vertical ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && !0 === a.options.useCSS && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && !1 !== a.animType && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && !1 !== a.animType
        }, b.prototype.setSlideClasses = function(a) {
            var b, c, d, e, f = this;
            c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), !0 === f.options.centerMode ? (b = Math.floor(f.options.slidesToShow / 2), !0 === f.options.infinite && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = !0 === f.options.infinite ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var b, c, d, e = this;
            if (!0 === e.options.fade && (e.options.centerMode = !1), !0 === e.options.infinite && !1 === e.options.fade && (c = null, e.slideCount > e.options.slidesToShow)) {
                for (d = !0 === e.options.centerMode ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.setPaused = function(a) {
            var b = this;
            !0 === b.options.autoplay && !0 === b.options.pauseOnHover && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
        }, b.prototype.selectHandler = function(b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, h = null,
                i = this;
            return b = b || !1, !0 === i.animating && !0 === i.options.waitForAnimate || !0 === i.options.fade && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (!1 === b && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, !1 === i.options.infinite && !1 === i.options.centerMode && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(!1 === i.options.fade && (d = i.currentSlide, !0 !== c ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : !1 === i.options.infinite && !0 === i.options.centerMode && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(!1 === i.options.fade && (d = i.currentSlide, !0 !== c ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : (!0 === i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll != 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll != 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), !0 === i.options.fade ? (!0 !== c ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
                i.postSlide(e)
            })) : i.postSlide(e), void i.animateHeight()) : void(!0 !== c ? i.animateSlide(h, function() {
                i.postSlide(e)
            }) : i.postSlide(e))))
        }, b.prototype.startLoad = function() {
            var a = this;
            !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? !1 === e.options.rtl ? "left" : "right" : 360 >= d && d >= 315 ? !1 === e.options.rtl ? "left" : "right" : d >= 135 && 225 >= d ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
        }, b.prototype.swipeEnd = function(a) {
            var b, c = this;
            if (c.dragging = !1, c.shouldClick = !(c.touchObject.swipeLength > 10), void 0 === c.touchObject.curX) return !1;
            if (!0 === c.touchObject.edgeHit && c.$slider.trigger("edge", [c, c.swipeDirection()]), c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (c.swipeDirection()) {
                case "left":
                    b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount(), c.slideHandler(b), c.currentDirection = 0, c.touchObject = {}, c.$slider.trigger("swipe", [c, "left"]);
                    break;
                case "right":
                    b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount(), c.slideHandler(b), c.currentDirection = 1, c.touchObject = {}, c.$slider.trigger("swipe", [c, "right"])
            } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(!1 === b.options.swipe || "ontouchend" in document && !1 === b.options.swipe || !1 === b.options.draggable && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, !0 === b.options.verticalSwiping && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var b, c, d, e, f, g = this;
            return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), !0 === g.options.verticalSwiping && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (!1 === g.options.rtl ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), !0 === g.options.verticalSwiping && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, !1 === g.options.infinite && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), !1 === g.options.vertical ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, !0 === g.options.verticalSwiping && (g.swipeLeft = b + d * e), !0 !== g.options.fade && !1 !== g.options.touchMove && (!0 === g.animating ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft))) : void 0)
        }, b.prototype.swipeStart = function(a) {
            var b, c = this;
            return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function(a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function() {
            var a = this;
            Math.floor(a.options.slidesToShow / 2), !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && !1 === a.options.centerMode ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && !0 === a.options.centerMode && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function() {
            var a = this;
            document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : !0 === a.options.autoplay && (a.paused = !1, a.autoPlay())
        }, b.prototype.initADA = function() {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                })
            }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
        }, b.prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, b.prototype.focusHandler = function() {
            var b = this;
            b.$slider.on("focus.slick blur.slick", "*", function(c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function() {
                    b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
                }, 0)
            })
        }, a.fn.slick = function() {
            var a, c, d = this,
                e = arguments[0],
                f = Array.prototype.slice.call(arguments, 1),
                g = d.length;
            for (a = 0; g > a; a++)
                if ("object" == typeof e || void 0 === e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), void 0 !== c) return c;
            return d
        }
    }),
    function(a) {
        "use strict";

        function b() {
            var a = document.createElement("bootstrap"),
                b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c]) return {
                    end: b[c]
                };
            return !1
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var e = function() {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b), this
        }, a(function() {
            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function(b) {
                    if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }
        var c = function(b, c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
        };
        c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, c.prototype.keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName)) {
                switch (a.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                a.preventDefault()
            }
        }, c.prototype.cycle = function(b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        }, c.prototype.getItemIndex = function(a) {
            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
        }, c.prototype.getItemForDirection = function(a, b) {
            var c = this.getItemIndex(b);
            if (("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap) return b;
            var d = "prev" == a ? -1 : 1,
                e = (c + d) % this.$items.length;
            return this.$items.eq(e)
        }, c.prototype.to = function(a) {
            var b = this,
                c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
        }, c.prototype.pause = function(b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, c.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, c.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, c.prototype.slide = function(b, c) {
            var d = this.$element.find(".item.active"),
                e = c || this.getItemForDirection(b, d),
                f = this.interval,
                g = "next" == b ? "left" : "right",
                h = this;
            if (e.hasClass("active")) return this.sliding = !1;
            var i = e[0],
                j = a.Event("slide.bs.carousel", {
                    relatedTarget: i,
                    direction: g
                });
            if (this.$element.trigger(j), !j.isDefaultPrevented()) {
                if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var k = a(this.$indicators.children()[this.getItemIndex(e)]);
                    k && k.addClass("active")
                }
                var l = a.Event("slid.bs.carousel", {
                        relatedTarget: i,
                        direction: g
                    }),
                    m = this.$element.hasClass("mkdf-header-effect");
                if (a.support.transition && this.$element.hasClass("slide")) {
                    var n;
                    n = setTimeout(function() {
                        mkdf.modules.shortcodes.mkdfCheckSliderForHeaderStyle(e, m), e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
                            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), h.sliding = !1, setTimeout(function() {
                                h.$element.trigger(l)
                            }, 0)
                        }).emulateTransitionEnd(600), clearTimeout(n)
                    }, 300)
                } else d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(l);
                return f && this.cycle(), this
            }
        };
        var d = a.fn.carousel;
        a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
            return a.fn.carousel = d, this
        };
        var e = function(c) {
            var d, e = a(this),
                f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()),
                    h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
            a('[data-ride="carousel"]').each(function() {
                var c = a(this);
                b.call(c, c.data())
            })
        })
    }(jQuery),
    function(a) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(b) {
            return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = j), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
                var d = a(this),
                    e = d.data(B);
                e || (e = new c(this, b), d.data(B, e))
            })
        }

        function c(b, c) {
            function C(b) {
                if (!(ja() || a(b.target).closest(c.excludedElements, Sa).length > 0)) {
                    var d, e = b.originalEvent ? b.originalEvent : b,
                        f = y ? e.touches[0] : e;
                    return Ta = u, (y ? Ua = e.touches.length : b.preventDefault(), Ja = 0, Ka = null, Qa = null, La = 0, Ma = 0, Na = 0, Oa = 1, Pa = 0, Va = oa(), Ra = ra(), ha(), !y || Ua === c.fingers || c.fingers === s || R() ? (la(0, f), Wa = Aa(), 2 == Ua && (la(1, e.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)), (c.swipeStatus || c.pinchStatus) && (d = J(e, Ta))) : d = !1, !1 === d) ? (Ta = x, J(e, Ta), d) : (c.hold && (ab = setTimeout(a.proxy(function() {
                        Sa.trigger("hold", [e.target]), c.hold && (d = c.hold.call(Sa, e, e.target))
                    }, this), c.longTapThreshold)), ka(!0), null)
                }
            }

            function D(a) {
                var b = a.originalEvent ? a.originalEvent : a;
                if (Ta !== w && Ta !== x && !ia()) {
                    var d, e = y ? b.touches[0] : b,
                        f = ma(e);
                    if (Xa = Aa(), y && (Ua = b.touches.length), c.hold && clearTimeout(ab), Ta = v, 2 == Ua && (0 == Ma ? (la(1, b.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)) : (ma(b.touches[1]), Na = ua(Va[0].end, Va[1].end), Qa = wa(Va[0].end, Va[1].end)), Oa = va(Ma, Na), Pa = Math.abs(Ma - Na)), Ua === c.fingers || c.fingers === s || !y || R()) {
                        if (Ka = za(f.start, f.end), P(a, Ka), Ja = xa(f.start, f.end), La = ta(), pa(Ka, Ja), (c.swipeStatus || c.pinchStatus) && (d = J(b, Ta)), !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
                            var g = !0;
                            if (c.triggerOnTouchLeave) {
                                var h = Ba(this);
                                g = Ca(f.end, h)
                            }!c.triggerOnTouchEnd && g ? Ta = I(v) : c.triggerOnTouchLeave && !g && (Ta = I(w)), Ta != x && Ta != w || J(b, Ta)
                        }
                    } else Ta = x, J(b, Ta);
                    !1 === d && (Ta = x, J(b, Ta))
                }
            }

            function E(a) {
                var b = a.originalEvent;
                return y && b.touches.length > 0 ? (ga(), !0) : (ia() && (Ua = Za), Xa = Aa(), La = ta(), M() || !L() ? (Ta = x, J(b, Ta)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ta === v ? (a.preventDefault(), Ta = w, J(b, Ta)) : !c.triggerOnTouchEnd && Y() ? (Ta = w, K(b, Ta, n)) : Ta === v && (Ta = x, J(b, Ta)), ka(!1), null)
            }

            function F() {
                Ua = 0, Xa = 0, Wa = 0, Ma = 0, Na = 0, Oa = 1, ha(), ka(!1)
            }

            function G(a) {
                var b = a.originalEvent;
                c.triggerOnTouchLeave && (Ta = I(w), J(b, Ta))
            }

            function H() {
                Sa.unbind(Ea, C), Sa.unbind(Ia, F), Sa.unbind(Fa, D), Sa.unbind(Ga, E), Ha && Sa.unbind(Ha, G), ka(!1)
            }

            function I(a) {
                var b = a,
                    d = O(),
                    e = L(),
                    f = M();
                return !d || f ? b = x : !e || a != v || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == w && c.triggerOnTouchLeave && (b = x) : b = w, b
            }

            function J(a, b) {
                var c = void 0;
                return V() || U() ? c = K(a, b, l) : (S() || R()) && !1 !== c && (c = K(a, b, m)), ea() && !1 !== c ? c = K(a, b, o) : fa() && !1 !== c ? c = K(a, b, p) : da() && !1 !== c && (c = K(a, b, n)), b === x && F(a), b === w && (y ? 0 == a.touches.length && F(a) : F(a)), c
            }

            function K(b, j, k) {
                var q = void 0;
                if (k == l) {
                    if (Sa.trigger("swipeStatus", [j, Ka || null, Ja || 0, La || 0, Ua, Va]), c.swipeStatus && !1 === (q = c.swipeStatus.call(Sa, b, j, Ka || null, Ja || 0, La || 0, Ua, Va))) return !1;
                    if (j == w && T()) {
                        if (Sa.trigger("swipe", [Ka, Ja, La, Ua, Va]), c.swipe && !1 === (q = c.swipe.call(Sa, b, Ka, Ja, La, Ua, Va))) return !1;
                        switch (Ka) {
                            case d:
                                Sa.trigger("swipeLeft", [Ka, Ja, La, Ua, Va]), c.swipeLeft && (q = c.swipeLeft.call(Sa, b, Ka, Ja, La, Ua, Va));
                                break;
                            case e:
                                Sa.trigger("swipeRight", [Ka, Ja, La, Ua, Va]), c.swipeRight && (q = c.swipeRight.call(Sa, b, Ka, Ja, La, Ua, Va));
                                break;
                            case f:
                                Sa.trigger("swipeUp", [Ka, Ja, La, Ua, Va]), c.swipeUp && (q = c.swipeUp.call(Sa, b, Ka, Ja, La, Ua, Va));
                                break;
                            case g:
                                Sa.trigger("swipeDown", [Ka, Ja, La, Ua, Va]), c.swipeDown && (q = c.swipeDown.call(Sa, b, Ka, Ja, La, Ua, Va))
                        }
                    }
                }
                if (k == m) {
                    if (Sa.trigger("pinchStatus", [j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchStatus && !1 === (q = c.pinchStatus.call(Sa, b, j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))) return !1;
                    if (j == w && Q()) switch (Qa) {
                        case h:
                            Sa.trigger("pinchIn", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchIn && (q = c.pinchIn.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va));
                            break;
                        case i:
                            Sa.trigger("pinchOut", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchOut && (q = c.pinchOut.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))
                    }
                }
                return k == n ? j !== x && j !== w || (clearTimeout(_a), clearTimeout(ab), Z() && !aa() ? ($a = Aa(), _a = setTimeout(a.proxy(function() {
                    $a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target))
                }, this), c.doubleTapThreshold)) : ($a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target)))) : k == o ? j !== x && j !== w || (clearTimeout(_a), $a = null, Sa.trigger("doubletap", [b.target]), c.doubleTap && (q = c.doubleTap.call(Sa, b, b.target))) : k == p && (j !== x && j !== w || (clearTimeout(_a), $a = null, Sa.trigger("longtap", [b.target]), c.longTap && (q = c.longTap.call(Sa, b, b.target)))), q
            }

            function L() {
                var a = !0;
                return null !== c.threshold && (a = Ja >= c.threshold), a
            }

            function M() {
                var a = !1;
                return null !== c.cancelThreshold && null !== Ka && (a = qa(Ka) - Ja >= c.cancelThreshold), a
            }

            function N() {
                return null === c.pinchThreshold || Pa >= c.pinchThreshold
            }

            function O() {
                return !c.maxTimeThreshold || !(La >= c.maxTimeThreshold)
            }

            function P(a, b) {
                if (c.allowPageScroll === j || R()) a.preventDefault();
                else {
                    var h = c.allowPageScroll === k;
                    switch (b) {
                        case d:
                            (c.swipeLeft && h || !h && c.allowPageScroll != q) && a.preventDefault();
                            break;
                        case e:
                            (c.swipeRight && h || !h && c.allowPageScroll != q) && a.preventDefault();
                            break;
                        case f:
                            (c.swipeUp && h || !h && c.allowPageScroll != r) && a.preventDefault();
                            break;
                        case g:
                            (c.swipeDown && h || !h && c.allowPageScroll != r) && a.preventDefault()
                    }
                }
            }

            function Q() {
                var a = W(),
                    b = X(),
                    c = N();
                return a && b && c
            }

            function R() {
                return !!(c.pinchStatus || c.pinchIn || c.pinchOut)
            }

            function S() {
                return !(!Q() || !R())
            }

            function T() {
                var a = O(),
                    b = L(),
                    c = W(),
                    d = X();
                return !M() && d && c && b && a
            }

            function U() {
                return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown)
            }

            function V() {
                return !(!T() || !U())
            }

            function W() {
                return Ua === c.fingers || c.fingers === s || !y
            }

            function X() {
                return 0 !== Va[0].end.x
            }

            function Y() {
                return !!c.tap
            }

            function Z() {
                return !!c.doubleTap
            }

            function $() {
                return !!c.longTap
            }

            function _() {
                if (null == $a) return !1;
                var a = Aa();
                return Z() && a - $a <= c.doubleTapThreshold
            }

            function aa() {
                return _()
            }

            function ba() {
                return (1 === Ua || !y) && (isNaN(Ja) || Ja < c.threshold)
            }

            function ca() {
                return La > c.longTapThreshold && Ja < t
            }

            function da() {
                return !(!ba() || !Y())
            }

            function ea() {
                return !(!_() || !Z())
            }

            function fa() {
                return !(!ca() || !$())
            }

            function ga() {
                Ya = Aa(), Za = event.touches.length + 1
            }

            function ha() {
                Ya = 0, Za = 0
            }

            function ia() {
                var a = !1;
                if (Ya) {
                    Aa() - Ya <= c.fingerReleaseThreshold && (a = !0)
                }
                return a
            }

            function ja() {
                return !(!0 !== Sa.data(B + "_intouch"))
            }

            function ka(a) {
                !0 === a ? (Sa.bind(Fa, D), Sa.bind(Ga, E), Ha && Sa.bind(Ha, G)) : (Sa.unbind(Fa, D, !1), Sa.unbind(Ga, E, !1), Ha && Sa.unbind(Ha, G, !1)), Sa.data(B + "_intouch", !0 === a)
            }

            function la(a, b) {
                var c = void 0 !== b.identifier ? b.identifier : 0;
                return Va[a].identifier = c, Va[a].start.x = Va[a].end.x = b.pageX || b.clientX, Va[a].start.y = Va[a].end.y = b.pageY || b.clientY, Va[a]
            }

            function ma(a) {
                var b = void 0 !== a.identifier ? a.identifier : 0,
                    c = na(b);
                return c.end.x = a.pageX || a.clientX, c.end.y = a.pageY || a.clientY, c
            }

            function na(a) {
                for (var b = 0; b < Va.length; b++)
                    if (Va[b].identifier == a) return Va[b]
            }

            function oa() {
                for (var a = [], b = 0; b <= 5; b++) a.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return a
            }

            function pa(a, b) {
                b = Math.max(b, qa(a)), Ra[a].distance = b
            }

            function qa(a) {
                if (Ra[a]) return Ra[a].distance
            }

            function ra() {
                var a = {};
                return a[d] = sa(d), a[e] = sa(e), a[f] = sa(f), a[g] = sa(g), a
            }

            function sa(a) {
                return {
                    direction: a,
                    distance: 0
                }
            }

            function ta() {
                return Xa - Wa
            }

            function ua(a, b) {
                var c = Math.abs(a.x - b.x),
                    d = Math.abs(a.y - b.y);
                return Math.round(Math.sqrt(c * c + d * d))
            }

            function va(a, b) {
                return (b / a * 1).toFixed(2)
            }

            function wa() {
                return Oa < 1 ? i : h
            }

            function xa(a, b) {
                return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
            }

            function ya(a, b) {
                var c = a.x - b.x,
                    d = b.y - a.y,
                    e = Math.atan2(d, c),
                    f = Math.round(180 * e / Math.PI);
                return f < 0 && (f = 360 - Math.abs(f)), f
            }

            function za(a, b) {
                var c = ya(a, b);
                return c <= 45 && c >= 0 ? d : c <= 360 && c >= 315 ? d : c >= 135 && c <= 225 ? e : c > 45 && c < 135 ? g : f
            }

            function Aa() {
                return (new Date).getTime()
            }

            function Ba(b) {
                b = a(b);
                var c = b.offset();
                return {
                    left: c.left,
                    right: c.left + b.outerWidth(),
                    top: c.top,
                    bottom: c.top + b.outerHeight()
                }
            }

            function Ca(a, b) {
                return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
            }
            var Da = y || A || !c.fallbackToMouseEvents,
                Ea = Da ? A ? z ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Fa = Da ? A ? z ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Ga = Da ? A ? z ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Ha = Da ? null : "mouseleave",
                Ia = A ? z ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Ja = 0,
                Ka = null,
                La = 0,
                Ma = 0,
                Na = 0,
                Oa = 1,
                Pa = 0,
                Qa = 0,
                Ra = null,
                Sa = a(b),
                Ta = "start",
                Ua = 0,
                Va = null,
                Wa = 0,
                Xa = 0,
                Ya = 0,
                Za = 0,
                $a = 0,
                _a = null,
                ab = null;
            try {
                Sa.bind(Ea, C), Sa.bind(Ia, F)
            } catch (bb) {
                a.error("events not supported " + Ea + "," + Ia + " on jQuery.swipe")
            }
            this.enable = function() {
                return Sa.bind(Ea, C), Sa.bind(Ia, F), Sa
            }, this.disable = function() {
                return H(), Sa
            }, this.destroy = function() {
                return H(), Sa.data(B, null), Sa
            }, this.option = function(b, d) {
                if (void 0 !== c[b]) {
                    if (void 0 === d) return c[b];
                    c[b] = d
                } else a.error("Option " + b + " does not exist on jQuery.swipe.options");
                return null
            }
        }
        var d = "left",
            e = "right",
            f = "up",
            g = "down",
            h = "in",
            i = "out",
            j = "none",
            k = "auto",
            l = "swipe",
            m = "pinch",
            n = "tap",
            o = "doubletap",
            p = "longtap",
            q = "horizontal",
            r = "vertical",
            s = "all",
            t = 10,
            u = "start",
            v = "move",
            w = "end",
            x = "cancel",
            y = "ontouchstart" in window,
            z = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            A = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            B = "TouchSwipe",
            C = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe"
            };
        a.fn.swipe = function(c) {
            var d = a(this),
                e = d.data(B);
            if (e && "string" == typeof c) {
                if (e[c]) return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
                a.error("Method " + c + " does not exist on jQuery.swipe")
            } else if (!(e || "object" != typeof c && c)) return b.apply(this, arguments);
            return d
        }, a.fn.swipe.defaults = C, a.fn.swipe.phases = {
            PHASE_START: u,
            PHASE_MOVE: v,
            PHASE_END: w,
            PHASE_CANCEL: x
        }, a.fn.swipe.directions = {
            LEFT: d,
            RIGHT: e,
            UP: f,
            DOWN: g,
            IN: h,
            OUT: i
        }, a.fn.swipe.pageScroll = {
            NONE: j,
            HORIZONTAL: q,
            VERTICAL: r,
            AUTO: k
        }, a.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: s
        }
    }),
    function(a) {
        a.fn.multiscroll = function(b) {
            function c() {
                var b = window.location.hash.replace("#", ""),
                    c = b;
                if (c.length) {
                    var d = a(".ms-left").find('[data-anchor="' + c + '"]');
                    ("undefined" == typeof lastScrolledDestiny || c !== lastScrolledDestiny) && f(d)
                }
            }

            function d() {
                D = a(window).height(), a(".ms-tableCell").each(function() {
                    a(this).css({
                        height: r(a(this).parent())
                    })
                }), e(), a.isFunction(b.afterResize) && b.afterResize.call(this)
            }

            function e() {
                b.css3 ? (j(a(".ms-left"), "translate3d(0px, -" + a(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), j(a(".ms-right"), "translate3d(0px, -" + a(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)) : (a(".ms-left").css("top", -a(".ms-left").find(".ms-section.active").position().top), a(".ms-right").css("top", -a(".ms-right").find(".ms-section.active").position().top))
            }

            function f(c) {
                var d = c.index(),
                    e = a(".ms-right").find(".ms-section").eq(B - 1 - d),
                    f = c.data("anchor"),
                    g = a(".ms-left .ms-section.active"),
                    h = g.index() + 1,
                    i = n(c);
                C = !0, o(f);
                var k = {
                    left: c.position().top,
                    right: e.position().top
                };
                if (e.addClass("active").siblings().removeClass("active"), c.addClass("active").siblings().removeClass("active"), b.css3) {
                    a.isFunction(b.onLeave) && b.onLeave.call(this, h, d + 1, i);
                    var p = "translate3d(0px, -" + k.left + "px, 0px)",
                        q = "translate3d(0px, -" + k.right + "px, 0px)";
                    j(a(".ms-left"), p, !0), j(a(".ms-right"), q, !0), setTimeout(function() {
                        a.isFunction(b.afterLoad) && b.afterLoad.call(this, f, d + 1), setTimeout(function() {
                            C = !1
                        }, y)
                    }, b.scrollingSpeed)
                } else a.isFunction(b.onLeave) && b.onLeave.call(this, h, d + 1, i), a(".ms-left").animate({
                    top: -k.left
                }, b.scrollingSpeed, b.easing, function() {
                    a.isFunction(b.afterLoad) && b.afterLoad.call(this, f, d + 1), setTimeout(function() {
                        C = !1
                    }, y)
                }), a(".ms-right").animate({
                    top: -k.right
                }, b.scrollingSpeed, b.easing);
                lastScrolledDestiny = f, m(f), l(f, d)
            }

            function g() {
                document.addEventListener ? (document.removeEventListener("mousewheel", i, !1), document.removeEventListener("wheel", i, !1)) : document.detachEvent("onmousewheel", i)
            }

            function h() {
                document.addEventListener ? (document.addEventListener("mousewheel", i, !1), document.addEventListener("wheel", i, !1)) : document.attachEvent("onmousewheel", i)
            }

            function i(b) {
                b = window.event || b;
                var c = Math.max(-1, Math.min(1, b.wheelDelta || -b.deltaY || -b.detail));
                return C || (c < 0 ? a.fn.multiscroll.moveSectionDown() : a.fn.multiscroll.moveSectionUp()), !1
            }

            function j(a, b, c) {
                a.toggleClass("ms-easing", c), a.css(k(b))
            }

            function k(a) {
                return {
                    "-webkit-transform": a,
                    "-moz-transform": a,
                    "-ms-transform": a,
                    transform: a
                }
            }

            function l(c, d) {
                b.navigation && (a("#multiscroll-nav").find(".active").removeClass("active"), c ? a("#multiscroll-nav").find('a[href="#' + c + '"]').addClass("active") : a("#multiscroll-nav").find("li").eq(d).find("a").addClass("active"))
            }

            function m(c) {
                b.menu && (a(b.menu).find(".active").removeClass("active"), a(b.menu).find('[data-menuanchor="' + c + '"]').addClass("active"))
            }

            function n(b) {
                return a(".ms-left .ms-section.active").index() > b.index() ? "up" : "down"
            }

            function o(a) {
                b.anchors.length && (location.hash = a)
            }

            function p() {
                var a, b = document.createElement("p"),
                    c = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.insertBefore(b, null);
                for (var d in c) void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(c[d]));
                return document.body.removeChild(b), void 0 !== a && a.length > 0 && "none" !== a
            }

            function q(a) {
                a.addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: ' + r(a) + 'px" />')
            }

            function r(a) {
                var c = D;
                if (b.paddingTop || b.paddingBottom) {
                    var d = parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom"));
                    c = D - d
                }
                return c
            }

            function s() {
                var b = window.location.hash.replace("#", ""),
                    c = a('.ms-left .ms-section[data-anchor="' + b + '"]');
                b.length && f(c)
            }

            function t(c) {
                var d = c.originalEvent;
                c.preventDefault();
                a(".ms-left .ms-section.active");
                if (!C) {
                    var e = x(d);
                    G = e.y, H = e.x, Math.abs(E - G) > a(window).height() / 100 * b.touchSensitivity && (E > G ? a.fn.multiscroll.moveSectionDown() : G > E && a.fn.multiscroll.moveSectionUp())
                }
            }

            function u(a) {
                var b = a.originalEvent,
                    c = x(b);
                E = c.y, F = c.x
            }

            function v() {
                z && (MSPointer = w(), a(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, u), a(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, t))
            }

            function w() {
                return window.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function x(a) {
                var b = new Array;
                return window.navigator.msPointerEnabled ? (b.y = a.pageY, b.x = a.pageX) : (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX), b
            }
            b = a.extend({
                verticalCentered: !0,
                scrollingSpeed: 700,
                easing: "easeInQuart",
                menu: !1,
                sectionsColor: [],
                anchors: [],
                navigation: !1,
                navigationPosition: "right",
                navigationColor: "#000",
                navigationTooltips: [],
                loopBottom: !1,
                loopTop: !1,
                css3: !1,
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                normalScrollElements: null,
                keyboardScrolling: !0,
                touchSensitivity: 5,
                sectionSelector: ".ms-section",
                leftSelector: ".ms-left",
                rightSelector: ".ms-right",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null
            }, b);
            var y = 600,
                z = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
            ".ms-right" !== b.rightSelector && a(b.rightSelector).addClass("ms-right"), ".ms-left" !== b.leftSelector && a(b.leftSelector).addClass("ms-left");
            var A, B = a(".ms-left").find(".ms-section").length,
                C = !1,
                D = a(window).height();
            h(), v(), b.css3 && (b.css3 = p()), a("html, body").css({
                overflow: "hidden",
                height: "100%"
            }), ".ms-section" !== b.sectionSelector && a(b.sectionSelector).each(function() {
                a(this).addClass("ms-section")
            }), b.navigation && (a("body").append('<div id="multiscroll-nav"><ul></ul></div>'), A = a("#multiscroll-nav"), A.css("color", b.navigationColor), A.addClass(b.navigationPosition)), a(".ms-right, .ms-left").css({
                width: "50%",
                position: "absolute",
                height: "100%",
                "-ms-touch-action": "none"
            }), a(".ms-right").css({
                right: "1px",
                top: "0",
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), a(".ms-left").css({
                left: "0",
                top: "0",
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), a(".ms-left .ms-section, .ms-right .ms-section").each(function() {
                var c = a(this).index();
                if ((b.paddingTop || b.paddingBottom) && a(this).css("padding", b.paddingTop + " 0 " + b.paddingBottom + " 0"), void 0 !== b.sectionsColor[c] && a(this).css("background-color", b.sectionsColor[c]), void 0 !== b.anchors[c] && a(this).attr("data-anchor", b.anchors[c]), b.verticalCentered && q(a(this)), a(this).closest(".ms-left").length && b.navigation) {
                    var d = "";
                    b.anchors.length && (d = b.anchors[c]);
                    var e = b.navigationTooltips[c];
                    void 0 === e && (e = ""), b.navigation && A.find("ul").append('<li data-tooltip="' + e + '"><a href="#' + d + '"><span></span></a></li>')
                }
            }), a(".ms-right").html(a(".ms-right").find(".ms-section").get().reverse()), a(".ms-left .ms-section, .ms-right .ms-section").each(function() {
                var c = a(this).index();
                a(this).css({
                    height: "100%"
                }), !c && b.navigation && A.find("li").eq(c).find("a").addClass("active")
            }).promise().done(function() {
                a(".ms-left .ms-section.active").length || (a(".ms-right").find(".ms-section").last().addClass("active"), a(".ms-left").find(".ms-section").first().addClass("active")), a.isFunction(b.afterRender) && b.afterRender.call(this), e(), a(window).on("load", function() {
                    s()
                })
            }), a(window).on("hashchange", c), a(document).keydown(function(c) {
                if (40 != c.which && 38 != c.which || c.preventDefault(), b.keyboardScrolling && !C) switch (c.which) {
                    case 38:
                    case 33:
                        a.fn.multiscroll.moveSectionUp();
                        break;
                    case 40:
                    case 34:
                        a.fn.multiscroll.moveSectionDown();
                        break;
                    case 36:
                        a.fn.multiscroll.moveTo(1);
                        break;
                    case 35:
                        a.fn.multiscroll.moveTo(a(".ms-left .ms-section").length);
                        break;
                    default:
                        return
                }
            }), a(document).mousedown(function(a) {
                if (1 == a.button) return a.preventDefault(), !1
            }), a(document).on("click", "#multiscroll-nav a", function(b) {
                b.preventDefault();
                var c = a(this).parent().index();
                f(a(".ms-left .ms-section").eq(c))
            }), a(document).on({
                mouseenter: function() {
                    var c = a(this).data("tooltip");
                    a('<div class="multiscroll-tooltip ' + b.navigationPosition + '">' + c + "</div>").hide().appendTo(a(this)).fadeIn(200)
                },
                mouseleave: function() {
                    a(this).find(".multiscroll-tooltip").fadeOut(200, function() {
                        a(this).remove()
                    })
                }
            }, "#multiscroll-nav li"), b.normalScrollElements && (a(document).on("mouseenter", b.normalScrollElements, function() {
                a.fn.multiscroll.setMouseWheelScrolling(!1)
            }), a(document).on("mouseleave", b.normalScrollElements, function() {
                a.fn.multiscroll.setMouseWheelScrolling(!0)
            })), a(window).on("resize", d), a.fn.multiscroll.moveSectionUp = function() {
                var c = a(".ms-left .ms-section.active").prev(".ms-section");
                !c.length && b.loopTop && (c = a(".ms-left .ms-section").last()), c.length && f(c)
            }, a.fn.multiscroll.moveSectionDown = function() {
                var c = a(".ms-left .ms-section.active").next(".ms-section");
                !c.length && b.loopBottom && (c = a(".ms-left .ms-section").first()), c.length && f(c)
            }, a.fn.multiscroll.moveTo = function(b) {
                var c = "";
                c = isNaN(b) ? a('.ms-left [data-anchor="' + b + '"]') : a(".ms-left .ms-section").eq(b - 1), f(c)
            }, a.fn.multiscroll.setKeyboardScrolling = function(a) {
                b.keyboardScrolling = a
            }, a.fn.multiscroll.setMouseWheelScrolling = function(a) {
                a ? h() : g()
            }, a.fn.multiscroll.setScrollingSpeed = function(a) {
                b.scrollingSpeed = a
            };
            var E = 0,
                F = 0,
                G = 0,
                H = 0;
            a.fn.multiscroll.destroy = function() {
                a.fn.multiscroll.setKeyboardScrolling(!1), a.fn.multiscroll.setMouseWheelScrolling(!1), a(window).off("hashchange", c).off("resize", d), a(document).off("touchstart").off("touchmove")
            }, a.fn.multiscroll.build = function() {
                a.fn.multiscroll.setKeyboardScrolling(!0), a.fn.multiscroll.setMouseWheelScrolling(!0), a(window).on("hashchange", c).on("resize", d), a(document).on("touchstart", u).on("touchmove", t)
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        var b = function(b, c) {
            this.el = a(b), this.options = a.extend({}, a.fn.typed.defaults, c), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
        };
        b.prototype = {
            constructor: b,
            init: function() {
                var a = this;
                a.timeout = setTimeout(function() {
                    for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b;
                    a.shuffle && (a.sequence = a.shuffleArray(a.sequence)), a.typewrite(a.strings[a.sequence[a.arrayPos]], a.strPos)
                }, a.startDelay)
            },
            build: function() {
                var b = this;
                if (!0 === this.showCursor && (this.cursor = a('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                    b.strings = [], this.stringsElement.hide();
                    var c = this.stringsElement.find("p");
                    a.each(c, function(c, d) {
                        b.strings.push(a(d).html())
                    })
                }
                this.init()
            },
            typewrite: function(a, b) {
                if (!0 !== this.stop) {
                    var c = Math.round(70 * Math.random()) + this.typeSpeed,
                        d = this;
                    d.timeout = setTimeout(function() {
                        var c = 0,
                            e = a.substr(b);
                        if ("^" === e.charAt(0)) {
                            var f = 1;
                            /^\^\d+/.test(e) && (e = /\d+/.exec(e)[0], f += e.length, c = parseInt(e)), a = a.substring(0, b) + a.substring(b + f)
                        }
                        if ("html" === d.contentType) {
                            var g = a.substr(b).charAt(0);
                            if ("<" === g || "&" === g) {
                                var h = "",
                                    i = "";
                                for (i = "<" === g ? ">" : ";"; a.substr(b).charAt(0) !== i;) h += a.substr(b).charAt(0), b++;
                                b++, h += i
                            }
                        }
                        d.timeout = setTimeout(function() {
                            if (b === a.length) {
                                if (d.options.onStringTyped(d.arrayPos), d.arrayPos === d.strings.length - 1 && (d.options.callback(), d.curLoop++, !1 === d.loop || d.curLoop === d.loopCount)) return;
                                d.timeout = setTimeout(function() {
                                    d.backspace(a, b)
                                }, d.backDelay)
                            } else {
                                0 === b && d.options.preStringTyped(d.arrayPos);
                                var c = a.substr(0, b + 1);
                                d.attr ? d.el.attr(d.attr, c) : d.isInput ? d.el.val(c) : "html" === d.contentType ? d.el.html(c) : d.el.text(c), b++, d.typewrite(a, b)
                            }
                        }, c)
                    }, c)
                }
            },
            backspace: function(a, b) {
                if (!0 !== this.stop) {
                    var c = Math.round(70 * Math.random()) + this.backSpeed,
                        d = this;
                    d.timeout = setTimeout(function() {
                        if ("html" === d.contentType && ">" === a.substr(b).charAt(0)) {
                            for (var c = "";
                                "<" !== a.substr(b).charAt(0);) c -= a.substr(b).charAt(0), b--;
                            b--, c += "<"
                        }
                        var e = a.substr(0, b);
                        d.attr ? d.el.attr(d.attr, e) : d.isInput ? d.el.val(e) : "html" === d.contentType ? d.el.html(e) : d.el.text(e), b > d.stopNum ? (b--, d.backspace(a, b)) : b <= d.stopNum && (d.arrayPos++, d.arrayPos === d.strings.length ? (d.arrayPos = 0, d.shuffle && (d.sequence = d.shuffleArray(d.sequence)), d.init()) : d.typewrite(d.strings[d.sequence[d.arrayPos]], b))
                    }, c)
                }
            },
            shuffleArray: function(a) {
                var b, c, d = a.length;
                if (d)
                    for (; --d;) c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
                return a
            },
            reset: function() {
                var a = this;
                clearInterval(a.timeout);
                var b = this.el.attr("id");
                this.el.after('<span id="' + b + '"/>'), this.el.remove(), void 0 !== this.cursor && this.cursor.remove(), a.options.resetCallback()
            }
        }, a.fn.typed = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("typed"),
                    f = "object" == typeof c && c;
                e || d.data("typed", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.typed.defaults = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            shuffle: !1,
            backDelay: 500,
            loop: !1,
            loopCount: !1,
            showCursor: !0,
            cursorChar: "|",
            attr: null,
            contentType: "html",
            callback: function() {},
            preStringTyped: function() {},
            onStringTyped: function() {},
            resetCallback: function() {}
        }
    }(window.jQuery);
var ParallaxScroll = {
    showLogs: !1,
    round: 1e3,
    init: function() {
        if (this._log("init"), this._inited) return this._log("Already Inited"), void(this._inited = !0);
        this._requestAnimationFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
                window.setTimeout(a, 1e3 / 60)
            }
        }(), this._onScroll(!0)
    },
    _inited: !1,
    _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
    _requestAnimationFrame: null,
    _log: function(a) {
        this.showLogs && console.log("Parallax Scroll / " + a)
    },
    _onScroll: function(a) {
        var b = jQuery(document).scrollTop(),
            c = jQuery(window).height();
        this._log("onScroll " + b), jQuery("[data-parallax]").each(jQuery.proxy(function(d, e) {
            var f = jQuery(e),
                g = [],
                h = !1,
                i = f.data("style");
            void 0 == i && (i = f.attr("style") || "", f.data("style", i));
            var j, k = [f.data("parallax")];
            for (j = 2; f.data("parallax" + j); j++) k.push(f.data("parallax-" + j));
            var l = k.length;
            for (j = 0; j < l; j++) {
                var m = k[j],
                    n = m["from-scroll"];
                void 0 == n && (n = Math.max(0, jQuery(e).offset().top - c)), n |= 0;
                var o = m.distance,
                    p = m["to-scroll"];
                void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);
                var q = m.easing,
                    r = m["easing-return"];
                if (void 0 != q && jQuery.easing && jQuery.easing[q] || (q = null), void 0 != r && jQuery.easing && jQuery.easing[r] || (r = q), q) {
                    var s = m.duration;
                    void 0 == s && (s = o), s = Math.max(0 | s, 1);
                    var t = m["duration-return"];
                    void 0 == t && (t = s), o = 1;
                    var u = f.data("current-time");
                    void 0 == u && (u = 0)
                }
                void 0 == p && (p = n + o), p |= 0;
                var v = m.smoothness;
                void 0 == v && (v = 30), v |= 0, (a || 0 == v) && (v = 1), v |= 0;
                var w = b;
                w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map(jQuery.proxy(function(a) {
                    var b = 0,
                        c = m[a];
                    if (void 0 != c) {
                        "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c |= 0;
                        var d = f.data("_" + a);
                        void 0 == d && (d = b);
                        var e = (w - n) / (p - n) * (c - b) + b,
                            i = d + (e - d) / v;
                        if (q && u > 0 && u <= s) {
                            var j = b;
                            "back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = jQuery.easing[q](null, u, j, c, s)
                        }
                        i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0)
                    }
                }, this))
            }
            if (h) {
                if (void 0 != g.z) {
                    var x = m.perspective;
                    void 0 == x && (x = 800);
                    var y = f.parent();
                    y.data("style") || y.data("style", y.attr("style") || ""), y.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + y.data("style"))
                }
                void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);
                var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)",
                    A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)",
                    B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")",
                    C = z + " " + A + " " + B + ";";
                this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i)
            }
        }, this)), window.requestAnimationFrame ? window.requestAnimationFrame(jQuery.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame(jQuery.proxy(this._onScroll, this, !1))
    }
};;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) {
            s.error(t)
        };
    return o(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function(t, e, i) {
        var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e), delete s[n]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var s = i.toDashed(n),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, n, u)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - o,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) {
        o.extend(this.options, t)
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize()
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function() {
        this.resizeContainer()
    }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }
        var n = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function() {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n, s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function(t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                x: this.columnWidth * s.col,
                y: s.y
            }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, o._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, o._manageStamp = function(t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            o = !0, t()
        })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
});