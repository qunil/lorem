! function(e) {
    "use strict";

    function t() {
        mkdf.scroll = e(window).scrollTop(), mkdf.body.hasClass("mkdf-dark-header") && (mkdf.defaultHeaderStyle = "mkdf-dark-header"), mkdf.body.hasClass("mkdf-light-header") && (mkdf.defaultHeaderStyle = "mkdf-light-header")
    }

    function i() {}

    function o() {
        mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height()
    }

    function a() {
        mkdf.scroll = e(window).scrollTop()
    }
    switch (window.mkdf = {}, mkdf.modules = {}, mkdf.scroll = 0, mkdf.window = e(window), mkdf.document = e(document), mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height(), mkdf.body = e("body"), mkdf.html = e("html, body"), mkdf.htmlEl = e("html"), mkdf.menuDropdownHeightSet = !1, mkdf.defaultHeaderStyle = "", mkdf.minVideoWidth = 1500, mkdf.videoWidthOriginal = 1280, mkdf.videoHeightOriginal = 720, mkdf.videoRatio = 1280 / 720, mkdf.mkdfOnDocumentReady = t, mkdf.mkdfOnWindowLoad = i, mkdf.mkdfOnWindowResize = o, mkdf.mkdfOnWindowScroll = a, e(document).ready(t), e(window).load(i), e(window).resize(o), e(window).scroll(a), !0) {
        case mkdf.body.hasClass("mkdf-grid-1300"):
            mkdf.boxedLayoutWidth = 1350;
            break;
        case mkdf.body.hasClass("mkdf-grid-1200"):
            mkdf.boxedLayoutWidth = 1250;
            break;
        case mkdf.body.hasClass("mkdf-grid-1000"):
            mkdf.boxedLayoutWidth = 1050;
            break;
        case mkdf.body.hasClass("mkdf-grid-800"):
            mkdf.boxedLayoutWidth = 850;
            break;
        default:
            mkdf.boxedLayoutWidth = 1150
    }
}(jQuery),
function(n) {
    "use strict";
    var e = {};

    function t() {
        d(), s(), r(), f(), m(),
            function() {
                var e, t, i = n(".mkdf-no-animations-on-touch"),
                    o = !0,
                    a = n(".mkdf-grow-in, .mkdf-fade-in-down, .mkdf-element-from-fade, .mkdf-element-from-left, .mkdf-element-from-right, .mkdf-element-from-top, .mkdf-element-from-bottom, .mkdf-flip-in, .mkdf-x-rotate, .mkdf-z-rotate, .mkdf-y-translate, .mkdf-fade-in, .mkdf-fade-in-left-x-rotate");
                i.length && (o = !1);
                0 < a.length && o && a.each(function() {
                    n(this).appear(function() {
                        void 0 !== (t = n(this).data("animation")) && "" !== t && (e = t, n(this).addClass(e + "-on"))
                    }, {
                        accX: 0,
                        accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                    })
                })
            }(), u().init(), n(".mkdf-section .mkdf-video-wrap .mkdf-video").mediaelementplayer({
                enableKeyboard: !1,
                iPadUseNativeControls: !1,
                pauseOtherPlayers: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1
            }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (k(), n(".mkdf-section .mkdf-mobile-video-image").show(), n(".mkdf-section .mkdf-video-wrap").remove()), k(), n(".mkdf-footer-uncover").length && n(".mkdf-content").css("margin-bottom", n(".mkdf-footer-inner").height()), l(), w(), y(), x(), C()
    }

    function i() {
        c(), h(), T()
    }

    function o() {
        k(), y()
    }

    function a() {}

    function d() {
        Modernizr.touch && !mkdf.body.hasClass("mkdf-no-animations-on-touch") && mkdf.body.addClass("mkdf-no-animations-on-touch")
    }

    function s() {
        -1 < navigator.appVersion.toLowerCase().indexOf("mac") && mkdf.body.hasClass("mkdf-smooth-scroll") && mkdf.body.removeClass("mkdf-smooth-scroll")
    }

    function r() {
        fluidvids.init({
            selector: ["iframe"],
            players: ["www.youtube.com", "player.vimeo.com"]
        })
    }

    function l() {
        var e = n(".mkdf-slick-slider:not(.slick-initialized)");
        e.length && e.each(function() {
            var t = n(this);
            t.on("init", function(e) {
                t.find(".slick-slide").each(function() {
                    var t = n(this),
                        i = 0,
                        o = 0,
                        e = !1;
                    t.on("mousedown", function() {
                        i = 0, e = !(o = 1)
                    }), t.on("mousemove", function() {
                        1 == o && (e && (i = 1), e = !0)
                    }), t.on("mouseleave", function() {
                        i = 0
                    }), t.on("mouseup", function(e) {
                        1 === i ? t.find('a[data-rel^="prettyPhoto"]').unbind("click") : mkdf.modules.common.mkdfPrettyPhoto(), o = i = 0
                    })
                })
            }), t.slick({
                infinite: !0,
                autoplay: !0,
                slidesToShow: 1,
                arrows: !0,
                dots: !1,
                adaptiveHeight: !0,
                prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_left"></span></span>',
                nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="arrow_right"></span></span>'
            })
        })
    }

    function f() {
        n(".mkdf-preload-background").each(function() {
            var e = n(this);
            if ("" !== e.css("background-image") && "none" != e.css("background-image")) {
                var t = e.attr("style");
                if (t = (t = t.match(/url\(["']?([^'")]+)['"]?\)/)) ? t[1] : "") {
                    var i = new Image;
                    i.src = t, n(i).load(function() {
                        e.removeClass("mkdf-preload-background")
                    })
                }
            } else n(window).load(function() {
                e.removeClass("mkdf-preload-background")
            })
        })
    }

    function m() {
        n("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: "data-rel",
            animation_speed: "normal",
            slideshow: !1,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: "/",
            theme: "pp_default",
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            overlay_gallery: !1,
            keyboard_shortcuts: !0,
            deeplinking: !1,
            custom_markup: "",
            social_tools: !1,
            markup: '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="icon-arrows-right"></span></a>                                             <a class="pp_previous" href="#"><span class="icon-arrows-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>'
        })
    }

    function c() {
        if (0 < n("[data-mkdf_header_style]").length && mkdf.body.hasClass("mkdf-header-style-on-scroll")) {
            var e = n(".wpb_row.mkdf-section"),
                t = function(e) {
                    void 0 !== e.data("mkdf_header_style") ? mkdf.body.removeClass("mkdf-dark-header mkdf-light-header").addClass(e.data("mkdf_header_style")) : mkdf.body.removeClass("mkdf-dark-header mkdf-light-header").addClass("" + mkdf.defaultHeaderStyle)
                };
            e.waypoint(function(e) {
                "down" === e && t(n(this.element))
            }, {
                offset: 0
            }), e.waypoint(function(e) {
                "up" === e && t(n(this.element))
            }, {
                offset: function() {
                    return -n(this.element).outerHeight()
                }
            })
        }
    }

    function h() {
        n(".mkdf-parallax-section-holder").length && n(".mkdf-parallax-section-holder").each(function() {
            var e = n(this);
            e.hasClass("mkdf-full-screen-height-parallax") && (e.height(mkdf.windowHeight), e.find(".mkdf-parallax-content-outer").css("padding", 0));
            var t = .4 * e.data("mkdf-parallax-speed");
            e.parallax("50%", t)
        })
    }(mkdf.modules.common = e).mkdfIsTouchDevice = d, e.mkdfDisableSmoothScrollForMac = s, e.mkdfFluidVideo = r, e.mkdfPreloadBackgrounds = f, e.mkdfPrettyPhoto = m, e.mkdfCheckHeaderStyleOnScroll = c, e.mkdfInitParallax = h, e.mkdfEnableScroll = function() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", p, !1);
        window.onmousewheel = document.onmousewheel = document.onkeydown = null, mkdf.body.hasClass("mkdf-smooth-scroll") && (window.addEventListener("mousewheel", smoothScrollListener, !1), window.addEventListener("DOMMouseScroll", smoothScrollListener, !1))
    }, e.mkdfDisableScroll = function() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", p, !1);
        window.onmousewheel = document.onmousewheel = p, document.onkeydown = v, mkdf.body.hasClass("mkdf-smooth-scroll") && (window.removeEventListener("mousewheel", smoothScrollListener, !1), window.removeEventListener("DOMMouseScroll", smoothScrollListener, !1))
    }, e.mkdfWheel = p, e.mkdfKeydown = v, e.mkdfPreventDefaultValue = g, e.mkdfSlickSlider = l, e.mkdfInitSelfHostedVideoPlayer = w, e.mkdfSelfHostedVideoSize = y, e.mkdfInitBackToTop = x, e.mkdfBackButtonShowHide = C, e.mkdfSmoothTransition = T, e.mkdfOnDocumentReady = t, e.mkdfOnWindowLoad = i, e.mkdfOnWindowResize = o, e.mkdfOnWindowScroll = a, n(document).ready(t), n(window).load(i), n(window).resize(o), n(window).scroll(a);
    var u = mkdf.modules.common.mkdfInitAnchor = function() {
        var d = function(e) {
                n(".mkdf-main-menu .mkdf-active-item, .mkdf-mobile-nav .mkdf-active-item, .mkdf-vertical-menu .mkdf-active-item, .mkdf-fullscreen-menu .mkdf-active-item").removeClass("mkdf-active-item"), e.parent().addClass("mkdf-active-item"), n(".mkdf-main-menu a, .mkdf-mobile-nav a, .mkdf-vertical-menu a, .mkdf-fullscreen-menu a").removeClass("current"), e.addClass("current")
            },
            e = function() {
                mkdf.document.on("click", ".mkdf-main-menu a, .mkdf-vertical-menu a, .mkdf-fullscreen-menu a, .mkdf-btn, .mkdf-anchor, .mkdf-mobile-nav a", function() {
                    var e, t, i = n(this),
                        o = i.prop("hash").split("#")[1];
                    if ("" !== o && 0 < n('[data-mkdf-anchor="' + o + '"]').length) {
                        var a = n('[data-mkdf-anchor="' + o + '"]').offset().top;
                        return e = n('[data-mkdf-anchor="' + o + '"]').offset().top - (t = a, "mkdf-sticky-header-on-scroll-down-up" == mkdf.modules.header.behaviour && (t > mkdf.modules.header.stickyAppearAmount ? mkdf.modules.header.isStickyVisible = !0 : mkdf.modules.header.isStickyVisible = !1), "mkdf-sticky-header-on-scroll-up" == mkdf.modules.header.behaviour && t > mkdf.scroll && (mkdf.modules.header.isStickyVisible = !1), mkdf.modules.header.isStickyVisible ? mkdfGlobalVars.vars.mkdfStickyHeaderTransparencyHeight : mkdfPerPageVars.vars.mkdfHeaderTransparencyHeight), d(i), mkdf.html.stop().animate({
                            scrollTop: Math.round(e)
                        }, 1e3, "easeInOutQuint", function() {
                            history.pushState && history.pushState(null, null, "#" + o)
                        }), !1
                    }
                })
            };
        return {
            init: function() {
                n("[data-mkdf-anchor]").length && (e(), n("[data-mkdf-anchor]").waypoint(function(e) {
                    "down" === e && d(n("a[href='" + window.location.href.split("#")[0] + "#" + n(this.element).data("mkdf-anchor") + "']"))
                }, {
                    offset: "50%"
                }), n("[data-mkdf-anchor]").waypoint(function(e) {
                    "up" === e && d(n("a[href='" + window.location.href.split("#")[0] + "#" + n(this.element).data("mkdf-anchor") + "']"))
                }, {
                    offset: function() {
                        return -(n(this.element).outerHeight() - 150)
                    }
                }), n(window).load(function() {
                    ! function() {
                        var e = window.location.hash.split("#")[1];
                        if ("" !== e && 0 < n('[data-mkdf-anchor="' + e + '"]').length) {
                            var t = window.location.href.split("#")[0] + "#" + e;
                            n("a[href='" + t + "']").length ? n("a[href='" + t + "']").trigger("click") : n("<a/>").attr({
                                href: t,
                                class: "mkdf-anchor"
                            }).appendTo("body").trigger("click")
                        }
                    }()
                }))
            }
        }
    };

    function k() {
        n(".mkdf-section .mkdf-video-wrap").each(function() {
            var e = n(this),
                t = e.closest(".mkdf-section").outerWidth();
            e.width(t);
            var i = e.closest(".mkdf-section").outerHeight();
            mkdf.minVideoWidth = mkdf.videoRatio * (i + 20), e.height(i);
            var o = t / mkdf.videoWidthOriginal,
                a = i / mkdf.videoHeightOriginal,
                d = a;
            a < o && (d = o), d * mkdf.videoWidthOriginal < mkdf.minVideoWidth && (d = mkdf.minVideoWidth / mkdf.videoWidthOriginal), e.find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(d * mkdf.videoWidthOriginal + 2)), e.find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(d * mkdf.videoHeightOriginal + 2)), e.scrollLeft((e.find("video").width() - t) / 2), e.find(".mejs-overlay, .mejs-poster").scrollTop((e.find("video").height() - i) / 2), e.scrollTop((e.find("video").height() - i) / 2)
        })
    }

    function p(e) {
        g(e)
    }

    function v(e) {
        for (var t = [37, 38, 39, 40], i = t.length; i--;)
            if (e.keyCode === t[i]) return void g(e)
    }

    function g(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
    }

    function w() {
        n(".mkdf-self-hosted-video").mediaelementplayer({
            audioWidth: "100%"
        })
    }

    function y() {
        n(".mkdf-self-hosted-video-holder .mkdf-video-wrap").each(function() {
            var e = n(this),
                t = e.closest(".mkdf-self-hosted-video-holder").outerWidth(),
                i = t / mkdf.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (e.parent().width(t), e.parent().height(i)), e.width(t), e.height(i), e.find("video, .mejs-overlay, .mejs-poster").width(t), e.find("video, .mejs-overlay, .mejs-poster").height(i)
        })
    }

    function b(e) {
        var t = n("#mkdf-back-to-top");
        t.removeClass("off on"), "on" === e ? t.addClass("on") : t.addClass("off")
    }

    function C() {
        mkdf.window.scroll(function() {
            var e = n(this).scrollTop(),
                t = n(this).height();
            b((0 < e ? e + t / 2 : 1) < 1e3 ? "off" : "on")
        })
    }

    function x() {
        n("#mkdf-back-to-top").on("click", function(e) {
            e.preventDefault(), mkdf.html.animate({
                scrollTop: 0
            }, mkdf.window.scrollTop() / 3, "easeInOutCirc")
        })
    }

    function T() {
        var i = n("body > .mkdf-smooth-transition-loader.mkdf-mimic-ajax");
        i.length && (i.fadeOut(500, "easeInOutQuint"), n(window).bind("pageshow", function(e) {
            e.originalEvent.persisted && i.fadeOut(500, "easeInOutQuint")
        }), n("a").click(function(e) {
            var t = n(this);
            !(1 == e.which && 0 <= t.attr("href").indexOf(window.location.host) && void 0 === t.data("rel") && void 0 === t.attr("rel")) || t.hasClass("mkdf-like") || t.parent().hasClass("mkdf-blog-load-more-button") || void 0 !== t.attr("target") && "_self" !== t.attr("target") || t.attr("href").split("#")[0] === window.location.href.split("#")[0] || (e.preventDefault(), i.addClass("mkdf-hide-spinner"), i.fadeIn(500, function() {
                window.location = t.attr("href")
            }))
        }))
    }
}(jQuery),
function(f) {
    "use strict";
    var e = {};

    function t() {
        ! function() {
            var t, e = f(".mkdf-page-header"),
                i = f(".mkdf-sticky-header"),
                o = f(".mkdf-fixed-wrapper"),
                a = f(".mkdf-page-header").find(".mkdf-fixed-wrapper").length ? f(".mkdf-page-header").find(".mkdf-fixed-wrapper").offset().top : null;
            switch (!0) {
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-up"):
                    mkdf.modules.header.behaviour = "mkdf-sticky-header-on-scroll-up";
                    var d = f(document).scrollTop();
                    t = mkdfGlobalVars.vars.mkdfTopBarHeight + mkdfGlobalVars.vars.mkdfLogoAreaHeight + mkdfGlobalVars.vars.mkdfMenuAreaHeight + mkdfGlobalVars.vars.mkdfStickyHeaderHeight;
                    var n = function() {
                        var e = f(document).scrollTop();
                        d < e && t < e || e < t ? (mkdf.modules.header.isStickyVisible = !1, i.removeClass("header-appear").find(".mkdf-main-menu .mkdf-menu-second").removeClass("mkdf-drop-down-start")) : (mkdf.modules.header.isStickyVisible = !0, i.addClass("header-appear")), d = f(document).scrollTop()
                    };
                    n(), f(window).scroll(function() {
                        n()
                    });
                    break;
                case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-down-up"):
                    mkdf.modules.header.behaviour = "mkdf-sticky-header-on-scroll-down-up", 0 !== mkdfPerPageVars.vars.mkdfStickyScrollAmount ? mkdf.modules.header.stickyAppearAmount = mkdfPerPageVars.vars.mkdfStickyScrollAmount : mkdf.modules.header.stickyAppearAmount = 0 !== mkdfGlobalVars.vars.mkdfStickyScrollAmount ? mkdfGlobalVars.vars.mkdfStickyScrollAmount : mkdfGlobalVars.vars.mkdfTopBarHeight + mkdfGlobalVars.vars.mkdfLogoAreaHeight + mkdfGlobalVars.vars.mkdfMenuAreaHeight;
                    var n = function() {
                        mkdf.scroll < mkdf.modules.header.stickyAppearAmount ? (mkdf.modules.header.isStickyVisible = !1, i.removeClass("header-appear").find(".mkdf-main-menu .mkdf-menu-second").removeClass("mkdf-drop-down-start")) : (mkdf.modules.header.isStickyVisible = !0, i.addClass("header-appear"))
                    };
                    n(), f(window).scroll(function() {
                        n()
                    });
                    break;
                case mkdf.body.hasClass("mkdf-fixed-on-scroll"):
                    mkdf.modules.header.behaviour = "mkdf-fixed-on-scroll";
                    var s = function() {
                        mkdf.scroll <= a ? (o.removeClass("fixed"), e.css("margin-bottom", 0)) : (o.addClass("fixed"), e.css("margin-bottom", o.height()))
                    };
                    s(), f(window).scroll(function() {
                        s()
                    })
            }
        }(), d(), n(), s(), r(), l(), m(), c(), h(), u(), k().init()
    }

    function i() {
        m(), c()
    }

    function o() {
        c()
    }

    function a() {}

    function d() {
        var o, a = f(".mkdf-wrapper"),
            d = f(".mkdf-side-menu"),
            n = f("a.mkdf-side-menu-button-opener"),
            s = !1,
            r = !1,
            l = !1;
        mkdf.body.hasClass("mkdf-side-menu-slide-from-right") ? (f(".mkdf-cover").remove(), o = "mkdf-right-side-menu-opened", a.prepend('<div class="mkdf-cover"/>'), s = !0) : mkdf.body.hasClass("mkdf-side-menu-slide-with-content") ? (o = "mkdf-side-menu-open", r = !0) : mkdf.body.hasClass("mkdf-side-area-uncovered-from-content") && (o = "mkdf-right-side-menu-opened", l = !0), f("a.mkdf-side-menu-button-opener, a.mkdf-close-side-menu").click(function(e) {
            if (e.preventDefault(), n.hasClass("opened")) {
                if (n.removeClass("opened"), mkdf.body.removeClass(o), l) var t = setTimeout(function() {
                    d.css({
                        visibility: "hidden"
                    }), clearTimeout(t)
                }, 400)
            } else {
                n.addClass("opened"), mkdf.body.addClass(o), s && f(".mkdf-wrapper .mkdf-cover").click(function() {
                    mkdf.body.removeClass("mkdf-right-side-menu-opened"), n.removeClass("opened")
                }), l && d.css({
                    visibility: "visible"
                });
                var i = f(window).scrollTop();
                f(window).scroll(function() {
                    if (400 < Math.abs(mkdf.scroll - i) && (mkdf.body.removeClass(o), n.removeClass("opened"), l)) var e = setTimeout(function() {
                        d.css({
                            visibility: "hidden"
                        }), clearTimeout(e)
                    }, 400)
                })
            }
            r && (e.stopPropagation(), a.click(function() {
                e.preventDefault(), n.removeClass("opened"), mkdf.body.removeClass("mkdf-side-menu-open")
            }))
        })
    }

    function n() {
        var e = f(".mkdf-side-menu");
        e.length && e.niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1
        })
    }

    function s() {
        if (f("a.mkdf-fullscreen-menu-opener").length) {
            var t, i = f("a.mkdf-fullscreen-menu-opener"),
                o = f(".mkdf-fullscreen-menu-holder-outer"),
                e = !1,
                a = !1,
                d = f(".mkdf-fullscreen-above-menu-widget-holder"),
                n = f(".mkdf-fullscreen-below-menu-widget-holder"),
                s = f(".mkdf-fullscreen-menu-holder-outer nav > ul > li > a"),
                r = f(".mkdf-fullscreen-menu > ul li.mkdf-has-sub > a"),
                l = f(".mkdf-fullscreen-menu ul li:not(.mkdf-has-sub) a");
            o.height(mkdf.windowHeight).niceScroll({
                scrollspeed: 30,
                mousescrollstep: 20,
                cursorwidth: 0,
                cursorborder: 0,
                cursorborderradius: 0,
                cursorcolor: "transparent",
                autohidemode: !1,
                horizrailenabled: !1
            }), f(window).resize(function() {
                o.height(mkdf.windowHeight)
            }), mkdf.body.hasClass("mkdf-fade-push-text-right") ? (t = "mkdf-push-nav-right", e = !0) : mkdf.body.hasClass("mkdf-fade-push-text-top") && (t = "mkdf-push-text-top", a = !0), (e || a) && (d.length && d.children().css({
                "-webkit-animation-delay": "0ms",
                "-moz-animation-delay": "0ms",
                "animation-delay": "0ms"
            }), s.each(function(e) {
                f(this).css({
                    "-webkit-animation-delay": 70 * (e + 1) + "ms",
                    "-moz-animation-delay": 70 * (e + 1) + "ms",
                    "animation-delay": 70 * (e + 1) + "ms"
                })
            }), n.length && n.children().css({
                "-webkit-animation-delay": 70 * (s.length + 1) + "ms",
                "-moz-animation-delay": 70 * (s.length + 1) + "ms",
                "animation-delay": 70 * (s.length + 1) + "ms"
            })), i.on("click", function(e) {
                e.preventDefault(), i.hasClass("opened") ? (i.removeClass("opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfEnableScroll(), f("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200, function() {
                    f("nav.popup_menu").getNiceScroll().resize()
                })) : (i.addClass("opened"), mkdf.body.addClass("mkdf-fullscreen-menu-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-out").addClass("mkdf-fullscreen-fade-in"), mkdf.body.removeClass(t), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfDisableScroll(), f(document).keyup(function(e) {
                    27 == e.keyCode && (i.removeClass("opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfEnableScroll(), f("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200, function() {
                        f("nav.popup_menu").getNiceScroll().resize()
                    }))
                }))
            }), r.on("tap click", function(e) {
                if (e.preventDefault(), f(this).parent().hasClass("mkdf-has-sub")) {
                    var t = f(this).parent().find("> ul.sub_menu");
                    t.is(":visible") ? (t.slideUp(200, function() {
                        o.getNiceScroll().resize()
                    }), f(this).parent().removeClass("open_sub")) : (f(this).parent().siblings().hasClass("open_sub") && f(this).parent().siblings().each(function() {
                        var e = f(this);
                        e.hasClass("open_sub") && (e.find("> ul.sub_menu").slideUp(200, function() {
                            o.getNiceScroll().resize()
                        }), e.removeClass("open_sub"));
                        e.find(".open_sub") && (e.find(".open_sub").find("> ul.sub_menu").slideUp(200, function() {
                            o.getNiceScroll().resize()
                        }), e.find(".open_sub").removeClass("open_sub"))
                    }), f(this).parent().addClass("open_sub"), t.slideDown(200, function() {
                        o.getNiceScroll().resize()
                    }))
                }
                return !1
            }), l.click(function(e) {
                if ("http://#" === f(this).attr("href") || "#" === f(this).attr("href")) return !1;
                1 == e.which && (i.removeClass("opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), f("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200, function() {
                    f("nav.popup_menu").getNiceScroll().resize()
                }), mkdf.modules.common.mkdfEnableScroll())
            })
        }
    }

    function r() {
        var e = f(".mkdf-mobile-header .mkdf-mobile-menu-opener"),
            t = f(".mkdf-mobile-header .mkdf-mobile-nav"),
            i = f('.mkdf-mobile-nav .mobile_arrow, .mkdf-mobile-nav h4, .mkdf-mobile-nav a[href*="#"]');
        e.length && t.length && e.on("tap click", function(e) {
            e.stopPropagation(), e.preventDefault(), t.is(":visible") ? t.slideUp(200) : t.slideDown(200)
        }), i.length && i.each(function() {
            f(this).on("tap click", function(e) {
                var t = f(this).nextAll("ul").first();
                if (t.length) {
                    e.preventDefault(), e.stopPropagation();
                    var i = f(this).parent("li");
                    t.is(":visible") ? (t.slideUp(200), i.removeClass("mkdf-opened")) : (t.slideDown(200), i.addClass("mkdf-opened"))
                }
            })
        }), f(".mkdf-mobile-nav a, .mkdf-mobile-logo-wrapper a").on("click tap", function(e) {
            "http://#" !== f(this).attr("href") && "#" !== f(this).attr("href") && t.slideUp(200)
        })
    }

    function l() {
        if (mkdf.body.hasClass("mkdf-sticky-up-mobile-header")) {
            var t, e = f(".mkdf-top-bar"),
                i = f(".mkdf-mobile-header"),
                o = f("#wpadminbar"),
                a = i.length ? i.height() : 0,
                d = e.is(":visible") ? e.height() : 0,
                n = o.length ? o.height() : 0,
                s = f(document).scrollTop();
            t = d + a + n, f(window).scroll(function() {
                var e = f(document).scrollTop();
                t < e ? (i.addClass("mkdf-animate-mobile-header"), i.css("margin-bottom", a)) : (i.removeClass("mkdf-animate-mobile-header"), i.css("margin-bottom", 0)), s < e && t < e || e < t ? (i.removeClass("mobile-header-appear"), o.length && i.find(".mkdf-mobile-header-inner").css("top", 0)) : i.addClass("mobile-header-appear"), s = f(document).scrollTop()
            })
        }
    }

    function m() {
        f(".mkdf-drop-down > ul > li.mkdf-menu-narrow").each(function(e) {
            var t, i = mkdf.windowWidth - 16,
                o = f(this).offset().left,
                a = f(this).find(".mkdf-menu-second .mkdf-menu-inner ul").width(),
                d = 0;
            d = mkdf.body.hasClass("boxed") ? mkdf.boxedLayoutWidth - (o - (i - mkdf.boxedLayoutWidth) / 2) : i - o, 0 < f(this).find("li.mkdf-sub").length && (t = d - a), (d < a || t < a) && (f(this).find(".mkdf-menu-second").addClass("right"), f(this).find(".mkdf-menu-second .mkdf-menu-inner ul").addClass("right"))
        })
    }

    function c() {
        var r = f(".mkdf-drop-down > ul > li");
        r.each(function(e) {
            if (0 < f(r[e]).find(".mkdf-menu-second").length) {
                var t = f(r[e]).find(".mkdf-menu-second");
                if (f(r[e]).hasClass("mkdf-menu-wide")) {
                    var i = f(this).find(".mkdf-menu-inner > ul"),
                        o = parseInt(i.css("padding-left").slice(0, -2)) + parseInt(i.css("padding-right").slice(0, -2)),
                        a = i.outerWidth();
                    f(this).hasClass("mkdf-menu-left-position") || f(this).hasClass("mkdf-menu-right-position") || t.css("left", 0);
                    var d = 0;
                    if (f(this).find(".mkdf-menu-second > .mkdf-menu-inner > ul > li").each(function() {
                            var e = f(this).height();
                            d < e && (d = e)
                        }), f(this).find(".mkdf-menu-second > .mkdf-menu-inner > ul > li").css("height", ""), f(this).find(".mkdf-menu-second > .mkdf-menu-inner > ul > li").height(d), f(this).hasClass("mkdf-wide-background")) {
                        if (!f(this).hasClass("mkdf-menu-left-position") && !f(this).hasClass("mkdf-menu-right-position")) {
                            n = f(this).offset().left;
                            t.css("left", -n), t.css("width", mkdf.windowWidth)
                        }
                    } else if (!f(this).hasClass("mkdf-menu-left-position") && !f(this).hasClass("mkdf-menu-right-position")) {
                        var n = (mkdf.windowWidth - 2 * (mkdf.windowWidth - i.offset().left)) / 2 + (a + o) / 2;
                        t.css("left", -n)
                    }
                }
                if (mkdf.menuDropdownHeightSet || (f(r[e]).data("original_height", t.height() + "px"), t.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) f(r[e]).on("touchstart mouseenter", function() {
                    t.css({
                        height: f(r[e]).data("original_height"),
                        overflow: "visible",
                        visibility: "visible",
                        opacity: "1"
                    })
                }).on("mouseleave", function() {
                    t.css({
                        height: "0px",
                        overflow: "hidden",
                        visibility: "hidden",
                        opacity: "0"
                    })
                });
                else if (mkdf.body.hasClass("mkdf-dropdown-animate-height")) {
                    var s = {
                        interval: 0,
                        over: function() {
                            setTimeout(function() {
                                t.addClass("edge-drop-down-start"), t.css({
                                    visibility: "visible",
                                    height: "0px"
                                }), t.css("opacity", "1"), t.stop().animate({
                                    height: f(r[e]).data("original_height")
                                }, 500, "easeInOutQuint", function() {
                                    t.css("overflow", "visible")
                                })
                            }, 150)
                        },
                        timeout: 150,
                        out: function() {
                            t.stop().animate({
                                height: "0px",
                                opacity: 0
                            }, 0, function() {
                                t.css({
                                    overflow: "hidden",
                                    visibility: "hidden"
                                })
                            }), t.removeClass("edge-drop-down-start")
                        }
                    };
                    f(r[e]).hoverIntent(s)
                } else {
                    s = {
                        interval: 0,
                        over: function() {
                            setTimeout(function() {
                                t.addClass("mkdf-drop-down-start"), t.stop().css({
                                    height: f(r[e]).data("original_height")
                                })
                            }, 150)
                        },
                        timeout: 150,
                        out: function() {
                            t.stop().css({
                                height: "0px"
                            }), t.removeClass("mkdf-drop-down-start")
                        }
                    };
                    f(r[e]).hoverIntent(s)
                }
            }
        }), f(".mkdf-drop-down ul li.mkdf-menu-wide ul li a").on("click", function(e) {
            if (1 == e.which) {
                var t = f(this);
                setTimeout(function() {
                    t.mouseleave()
                }, 500)
            }
        }), mkdf.menuDropdownHeightSet = !0
    }

    function h() {
        var a, d, n, s, r, l = f("a.mkdf-search-opener");
        if (f("html").hasClass("touch") && !0, 0 < l.length) {
            if (mkdf.body.hasClass("mkdf-fullscreen-search")) {
                var e = !1,
                    t = !1;
                a = f(".mkdf-fullscreen-search-close"), mkdf.body.hasClass("mkdf-search-fade") ? e = !0 : mkdf.body.hasClass("mkdf-search-from-circle") && (t = !0), d = e, n = t, s = f(".mkdf-fullscreen-search-holder"), r = f(".mkdf-fullscreen-search-overlay"), l.click(function(e) {
                    e.preventDefault();
                    var t = !1;
                    if ("yes" === f(this).data("icon-close-same-position")) {
                        var i = f(this).offset().top,
                            o = f(this).offset().left;
                        t = !0
                    }
                    d && (s.hasClass("mkdf-animate") ? (mkdf.body.removeClass("mkdf-fullscreen-search-opened"), mkdf.body.addClass("mkdf-search-fade-out"), mkdf.body.removeClass("mkdf-search-fade-in"), s.removeClass("mkdf-animate"), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfEnableScroll()) : (mkdf.body.addClass("mkdf-fullscreen-search-opened"), mkdf.body.removeClass("mkdf-search-fade-out"), mkdf.body.addClass("mkdf-search-fade-in"), s.addClass("mkdf-animate"), t && a.css({
                        top: i - mkdf.scroll,
                        left: o
                    }), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfDisableScroll()), a.click(function(e) {
                        e.preventDefault(), mkdf.body.removeClass("mkdf-fullscreen-search-opened"), s.removeClass("mkdf-animate"), mkdf.body.removeClass("mkdf-search-fade-in"), mkdf.body.addClass("mkdf-search-fade-out"), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfEnableScroll()
                    }), f(document).keyup(function(e) {
                        27 == e.keyCode && (mkdf.body.removeClass("mkdf-fullscreen-search-opened"), s.removeClass("mkdf-animate"), mkdf.body.removeClass("mkdf-search-fade-in"), mkdf.body.addClass("mkdf-search-fade-out"), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfEnableScroll())
                    })), n && (r.hasClass("mkdf-animate") ? (r.removeClass("mkdf-animate"), s.css({
                        opacity: 0,
                        display: "none"
                    }), a.css({
                        opacity: 0,
                        visibility: "hidden"
                    }), l.css({
                        opacity: 1
                    })) : (r.addClass("mkdf-animate"), s.css({
                        display: "block"
                    }), setTimeout(function() {
                        s.css("opacity", "1"), a.css({
                            opacity: 1,
                            visibility: "visible",
                            top: i - mkdf.scroll,
                            left: o
                        }), t && a.css({
                            top: i - mkdf.scroll,
                            left: o
                        }), l.css({
                            opacity: 0
                        })
                    }, 200), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfDisableScroll()), a.click(function(e) {
                        e.preventDefault(), r.removeClass("mkdf-animate"), s.css({
                            opacity: 0,
                            display: "none"
                        }), a.css({
                            opacity: 0,
                            visibility: "hidden"
                        }), l.css({
                            opacity: 1
                        }), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfEnableScroll()
                    }), f(document).keyup(function(e) {
                        27 == e.keyCode && (r.removeClass("mkdf-animate"), s.css({
                            opacity: 0,
                            display: "none"
                        }), a.css({
                            opacity: 0,
                            visibility: "hidden"
                        }), l.css({
                            opacity: 1
                        }), mkdf.body.hasClass("page-template-full_screen-php") || mkdf.modules.common.mkdfEnableScroll())
                    }))
                }), f(".mkdf-fullscreen-search-holder .mkdf-search-field").focus(function() {
                    f(".mkdf-fullscreen-search-holder .mkdf-field-holder .mkdf-line").css("width", "100%")
                }), f(".mkdf-fullscreen-search-holder .mkdf-search-field").blur(function() {
                    f(".mkdf-fullscreen-search-holder .mkdf-field-holder .mkdf-line").css("width", "0")
                })
            } else mkdf.body.hasClass("mkdf-search-covers-header") && l.click(function(e) {
                e.preventDefault();
                var t, i, o, a, d, n, s = f(this),
                    r = f(".mkdf-search-cover .mkdf-form-holder-outer");
                o = f(this).closest(".mkdf-grid").length ? (i = f(this).closest(".mkdf-grid").children().first()).parent() : i = f(this).closest(".mkdf-menu-area").children().first(), 0 < f(this).closest(".mkdf-sticky-header").length && (i = f(this).closest(".mkdf-sticky-header").children().first(), o = i.parent()), 0 < f(this).closest(".mkdf-mobile-header").length && (i = f(this).closest(".mkdf-mobile-header").children().children().first()), o.parent().hasClass("mkdf-logo-area") ? t = mkdfGlobalVars.vars.mkdfLogoAreaHeight : o.parent().hasClass("mkdf-top-bar") ? t = mkdfGlobalVars.vars.mkdfTopBarHeight : o.parent().hasClass("mkdf-menu-area") ? t = mkdfGlobalVars.vars.mkdfMenuAreaHeight - mkdfGlobalVars.vars.mkdfTopBarHeight : o.hasClass("mkdf-sticky-header") ? t = mkdfGlobalVars.vars.mkdfStickyHeaderHeight : o.parents("header").hasClass("mkdf-mobile-header") && (t = f(".mkdf-mobile-header-inner").height()), a = i.find(".mkdf-search-close"), n = a.closest(".mkdf-form-holder-outer").parent(), r.height(t), i.stop(!0).slideDown(400, "easeOutExpo"), "yes" == s.data("icon-close-same-position") && (d = s.offset().left, n.hasClass("mkdf-container-inner") && (d -= n.offset().left), a.css({
                    left: d,
                    right: "auto"
                })), f('.mkdf-search-cover input[type="text"]').focus(), f(".mkdf-search-close, .content, footer").click(function(e) {
                    e.preventDefault(), i.stop(!0).fadeOut(200, "easeOutExpo")
                }), i.blur(function() {
                    i.stop(!0).fadeOut(200, "easeOutExpo")
                })
            });
            l.each(function() {
                var e = f(this);
                if (void 0 !== e.data("hover-color")) {
                    var t, i = function(e) {
                        e.data.thisSearchOpener.css("color", e.data.color)
                    };
                    t = void 0 !== e.data("color") ? e.data("color") : e.css("color");
                    var o = e.data("hover-color");
                    e.on("mouseenter", {
                        thisSearchOpener: e,
                        color: o
                    }, i), e.on("mouseleave", {
                        thisSearchOpener: e,
                        color: t
                    }, i)
                }
            })
        }
    }

    function u() {
        function e(e) {
            var t, i = 0;
            e || (e = window.event), e.wheelDelta ? i = e.wheelDelta / 120 : e.detail && (i = -e.detail / 3), i && ((t = i) < 0 ? Math.abs(d) <= n && (d += 20 * t, f(o).css("margin-top", d)) : d <= -20 && (d += 20 * t, f(o).css("margin-top", d))), e.preventDefault && e.preventDefault(), e.returnValue = !1
        }
        if (f(".mkdf-vertical-menu-area").length && mkdf.windowWidth < 1500) {
            var t = mkdf.windowHeight,
                i = f(".mkdf-vertical-menu-area"),
                o = f(".mkdf-vertical-menu-area .mkdf-vertical-menu-area-inner"),
                a = o.find(".mkdf-vertical-menu").outerHeight() + parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom")),
                d = 0,
                n = (t - a) / 2;
            f(i).hover(function() {
                mkdf.modules.common.mkdfDisableScroll(), window.addEventListener && (window.addEventListener("mousewheel", e, !1), window.addEventListener("DOMMouseScroll", e, !1)), window.onmousewheel = document.onmousewheel = e
            }, function() {
                mkdf.modules.common.mkdfEnableScroll(), window.removeEventListener("mousewheel", e, !1), window.removeEventListener("DOMMouseScroll", e, !1)
            })
        }
    }(mkdf.modules.header = e).isStickyVisible = !1, e.stickyAppearAmount = 0, e.behaviour, e.mkdfSideArea = d, e.mkdfSideAreaScroll = n, e.mkdfFullscreenMenu = s, e.mkdfInitMobileNavigation = r, e.mkdfMobileHeaderBehavior = l, e.mkdfSetDropDownMenuPosition = m, e.mkdfDropDownMenu = c, e.mkdfSearch = h, e.mkdfVerticalMenuScroll = u, e.mkdfOnDocumentReady = t, e.mkdfOnWindowLoad = i, e.mkdfOnWindowResize = o, e.mkdfOnWindowScroll = a, f(document).ready(t), f(window).load(i), f(window).resize(o), f(window).scroll(a);
    var k = function() {
        var t = f(".mkdf-vertical-menu-area");
        return {
            init: function() {
                t.length && function() {
                    var o, a, e = t.find(".mkdf-vertical-menu");
                    void 0 !== e.data("navigation-type") && e.data("navigation-type");
                    o = e.find("ul li.menu-item-has-children"), a = o.find(" > .mkdf-menu-second, > ul"), o.each(function() {
                        var t = f(this).find(" > .mkdf-menu-second, > ul"),
                            i = this;
                        if (Modernizr.touch) {
                            var e = f(this).find("> a");
                            e.on("click tap", function(e) {
                                e.preventDefault(), e.stopPropagation(), t.hasClass("mkdf-float-open") ? (t.removeClass("mkdf-float-open"), f(i).removeClass("open")) : (f(this).parents("li").hasClass("open") || (o.removeClass("open"), a.removeClass("mkdf-float-open")), t.addClass("mkdf-float-open"), f(i).addClass("open"))
                            })
                        } else f(this).hoverIntent({
                            over: function() {
                                t.addClass("mkdf-float-open"), f(i).addClass("open")
                            },
                            out: function() {
                                t.removeClass("mkdf-float-open"), f(i).removeClass("open")
                            },
                            timeout: 300
                        })
                    })
                }()
            }
        }
    }
}(jQuery),
function(d) {
    "use strict";
    var e = {};

    function t() {
        n()
    }

    function i() {}

    function o() {}

    function a() {}

    function n() {
        if (0 < d(".mkdf-title.mkdf-has-parallax-background").length && 0 === d(".touch").length) {
            var e = d(".mkdf-title.mkdf-has-parallax-background"),
                t = d(".mkdf-title.mkdf-has-parallax-background.mkdf-zoom-out"),
                i = parseInt(e.data("background-width").match(/\d+/)),
                o = e.data("height") / 1e4 * 7,
                a = -mkdf.scroll * o;
            e.css({
                "background-position": "center " + (a + mkdfGlobalVars.vars.mkdfAddForAdminBar) + "px"
            }), t.css({
                "background-size": i - mkdf.scroll + "px auto"
            }), d(window).scroll(function() {
                a = -mkdf.scroll * o, e.css({
                    "background-position": "center " + (a + mkdfGlobalVars.vars.mkdfAddForAdminBar) + "px"
                }), t.css({
                    "background-size": i - mkdf.scroll + "px auto"
                })
            })
        }
    }(mkdf.modules.title = e).mkdfParallaxTitle = n, e.mkdfOnDocumentReady = t, e.mkdfOnWindowLoad = i, e.mkdfOnWindowResize = o, e.mkdfOnWindowScroll = a, d(document).ready(t), d(window).load(i), d(window).resize(o), d(window).scroll(a)
}(jQuery),
function(y) {
    "use strict";
    var e = {};

    function t() {
        var e;
        d(), n(), l(), f().init(), s(), r(), c(), h(), u(), k(), p(), v(), g().init(), w(), b(), (e = y(".mkdf-blog-slider")).length && e.each(function() {
                var e, t = y(this),
                    i = 1;
                void 0 !== t.data("type") && !1 !== t.data("type") && "carousel" == t.data("type") && (e = [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: !0,
                        dots: !0
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }], i = 3), t.slick({
                    infinite: !0,
                    autoplay: !1,
                    slidesToShow: i,
                    arrows: !1,
                    dots: !0,
                    dotsClass: "mkdf-slick-dots",
                    adaptiveHeight: !0,
                    prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_left"></span></span>',
                    nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="arrow_right"></span></span>',
                    easing: "easeInOutQuint",
                    speed: 1e3,
                    customPaging: function(e, t) {
                        return '<span class="mkdf-slick-dot-inner"></span>'
                    },
                    responsive: e
                })
            }), C(), I(), _(), x(), O(), E(), P(), V(), L(), G(), R().init(), m().init(), Q().init(),
            function() {
                var a = y("body");
                a.hasClass("mkdf-vertical-split-screen-initialized") && (a.removeClass("mkdf-vertical-split-screen-initialized"), y.fn.multiscroll.destroy());
                if (y(".mkdf-vertical-split-slider").length) {
                    var d = y(".mkdf-vertical-split-slider");
                    d.height(mkdf.windowHeight).animate({
                        opacity: 1
                    }, 300), d.multiscroll({
                        scrollingSpeed: 500,
                        navigation: !0,
                        useAnchorsOnLoad: !1,
                        sectionSelector: ".mkdf-vss-ms-section",
                        leftSelector: ".mkdf-vss-ms-left",
                        rightSelector: ".mkdf-vss-ms-right",
                        afterRender: function() {
                            a.addClass("mkdf-vertical-split-screen-initialized");
                            var e = y("<div class='mkdf-vertical-split-slider-responsive' />");
                            d.after(e);
                            for (var t = y(".mkdf-vertical-split-slider .mkdf-vss-ms-left > div"), i = y(".mkdf-vertical-split-slider .mkdf-vss-ms-right > div"), o = 0; o < t.length; o++) e.append(y(t[o]).clone(!0)), e.append(y(i[t.length - 1 - o]).clone(!0));
                            y(".mkdf-vertical-split-slider-responsive .mkdf-google-map").length && y(".mkdf-vertical-split-slider-responsive .mkdf-google-map").each(function() {
                                var e = y(this);
                                e.empty();
                                var t = Math.floor(1e5 * Math.random() + 1);
                                e.attr("id", "mkdf-map-" + t), e.data("unique-id", t)
                            }), O(), E(), P(), x()
                        }
                    }), mkdf.windowWidth <= 1024 ? y.fn.multiscroll.destroy() : y.fn.multiscroll.build(), y(window).resize(function() {
                        mkdf.windowWidth <= 1024 ? y.fn.multiscroll.destroy() : y.fn.multiscroll.build()
                    })
                }
            }(), U(), X(), q(), A(), K(), Z(), J(), $()
    }

    function i() {
        Y()
    }

    function o() {
        y(".mkdf-google-map").length && y(".mkdf-google-map").each(function() {
            var e, t, i = y(this);
            void 0 !== i.data("unique-id") && !1 !== i.data("unique-id") && (e = i.data("unique-id")), void 0 !== i.data("height") && !1 !== i.data("height") && (t = i.data("height"));
            var o = "mkdf-map-" + e,
                a = T(o, t),
                d = document.getElementById(o);
            d.style.height = a + "px"
        }), w(), C(), O(), E()
    }

    function a() {}

    function d() {
        var e = y(".mkdf-counter");
        e.length && e.each(function() {
            var t = y(this);
            t.appear(function() {
                if (t.parent().addClass("mkdf-counter-holder-show"), t.hasClass("zero")) {
                    var e = parseFloat(t.text());
                    t.countTo({
                        from: 0,
                        to: e,
                        speed: 1500,
                        refreshInterval: 100
                    })
                } else t.absoluteCounter({
                    speed: 2e3,
                    fadeInDelay: 1e3
                })
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }

    function n() {
        var e = y(".mkdf-progress-bar");
        e.length && e.each(function() {
            var s = y(this);
            s.appear(function() {
                var e, t, i;
                if (e = s, t = parseFloat(e.find(".mkdf-progress-content").data("percentage")), (i = e.find(".mkdf-progress-number .mkdf-percent")).length && i.each(function() {
                        var e = y(this);
                        e.parents(".mkdf-progress-number-wrapper").css("opacity", "1"), e.countTo({
                            from: 0,
                            to: t,
                            speed: 1500,
                            refreshInterval: 50
                        })
                    }), 0 !== s.find(".mkdf-floating.mkdf-floating-inside")) {
                    var o = s.find(".mkdf-progress-content").height();
                    o += parseFloat(s.find(".mkdf-progress-title-holder").css("padding-bottom")), o += parseFloat(s.find(".mkdf-progress-title-holder").css("margin-bottom")), s.find(".mkdf-floating-inside").css("margin-bottom", -o + "px")
                }
                var a = s.find(".mkdf-progress-content").data("percentage"),
                    d = s.find(".mkdf-progress-content"),
                    n = s.find(".mkdf-progress-number");
                d.css("width", "0%"), d.animate({
                    width: a + "%"
                }, 1500), n.css("left", "0%"), n.animate({
                    left: a + "%"
                }, 1500)
            })
        })
    }

    function s() {
        var e = y(".mkdf-message");
        e.length && e.each(function() {
            y(this).find(".mkdf-close").click(function(e) {
                e.preventDefault(), y(this).parent().parent().fadeOut(500)
            })
        })
    }

    function r() {
        var e = y(".mkdf-message.mkdf-with-icon");
        e.length && e.each(function() {
            var e = y(this),
                t = e.find(".mkdf-message-text-holder").height(),
                i = e.find(".mkdf-message-icon-holder").height();
            i < t ? e.find(".mkdf-message-icon-holder").height(t) : e.find(".mkdf-message-text-holder").height(i)
        })
    }

    function l() {
        var n, s, r, l, f, m, c, h, u, k, p, e = y(".mkdf-countdown");
        e.length && e.each(function() {
            var e, t, i, o, a = y(this).attr("id"),
                d = y("#" + a);
            n = d.data("year"), s = d.data("month"), r = d.data("day"), l = d.data("hour"), f = d.data("minute"), m = d.data("timezone"), c = d.data("month-label"), h = d.data("day-label"), u = d.data("hour-label"), k = d.data("minute-label"), p = d.data("second-label"), e = d.data("digit-size"), t = d.data("label-size"), i = d.data("digit-color"), o = d.data("label-color"), d.countdown({
                until: new Date(n, s - 1, r, l, f, 44),
                labels: ["Years", c, "Weeks", h, u, k, p],
                format: "ODHMS",
                timezone: m,
                padZeroes: !0,
                onTick: function() {
                    d.find(".countdown-amount").css({
                        "font-size": e + "px",
                        color: i,
                        "line-height": e + "px"
                    }), d.find(".countdown-period").css({
                        "font-size": t + "px",
                        color: o
                    })
                }
            })
        })
    }(mkdf.modules.shortcodes = e).mkdfInitCounter = d, e.mkdfInitProgressBars = n, e.mkdfInitCountdown = l, e.mkdfInitMessages = s, e.mkdfInitMessageHeight = r, e.mkdfInitTestimonials = c, e.mkdfInitCarousels = h, e.mkdfInitPieChart = u, e.mkdfInitPieChartDoughnut = k, e.mkdfInitTabs = p, e.mkdfInitTabIcons = v, e.mkdfInitBlogListMasonry = w, e.mkdfInitBlogListBoxes = b, e.mkdfCustomFontResize = C, e.mkdfInitImageGallery = I, e.mkdfInitAccordions = _, e.mkdfShowGoogleMap = x, e.mkdfInitPortfolioListMasonry = O, e.mkdfInitPortfolioListPinterest = E, e.mkdfInitPortfolio = P, e.mkdfInitPortfolioMasonryFilter = V, e.mkdfInitPortfolioSlider = L, e.mkdfInitPortfolioLoadMore = G, e.mkdfCheckSliderForHeaderStyle = N, e.mkdfCustomFontTypeOut = U, e.mkdfItemShowcase = X, e.mkdfSectionTitleTypeOut = q, e.mkdfInitSectionHolder = Y, e.mkdfInitImageGalleryMasonry = A, e.mkdfInitTextSlider = K, e.mkdfInitInteractiveItems = Z, e.mkdfParallaxCTA = J, e.mkdfScrollToContent = $, e.mkdfOnDocumentReady = t, e.mkdfOnWindowLoad = i, e.mkdfOnWindowResize = o, e.mkdfOnWindowScroll = a, y(document).ready(t), y(window).load(i), y(window).resize(o), y(window).scroll(a);
    var f = mkdf.modules.shortcodes.mkdfIcon = function() {
            var e = y(".mkdf-icon-shortcode");
            return {
                init: function() {
                    e.length && e.each(function() {
                        var e;
                        (e = y(this)).hasClass("mkdf-icon-animation") && e.appear(function() {
                                e.parent(".mkdf-icon-animation-holder").addClass("mkdf-icon-animation-show")
                            }, {
                                accX: 0,
                                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                            }),
                            function(e) {
                                if (void 0 !== e.data("hover-color")) {
                                    var t = function(e) {
                                            e.data.icon.css("color", e.data.color)
                                        },
                                        i = e.find(".mkdf-icon-element"),
                                        o = e.data("hover-color"),
                                        a = i.css("color");
                                    "" !== o && (e.on("mouseenter", {
                                        icon: i,
                                        color: o
                                    }, t), e.on("mouseleave", {
                                        icon: i,
                                        color: a
                                    }, t))
                                }
                            }(y(this)),
                            function(e) {
                                if (void 0 !== e.data("hover-background-color")) {
                                    var t = function(e) {
                                            e.data.icon.css("background-color", e.data.color)
                                        },
                                        i = e.data("hover-background-color"),
                                        o = e.css("background-color");
                                    "" !== i && (e.on("mouseenter", {
                                        icon: e,
                                        color: i
                                    }, t), e.on("mouseleave", {
                                        icon: e,
                                        color: o
                                    }, t))
                                }
                            }(y(this)),
                            function(e) {
                                if (void 0 !== e.data("hover-border-color")) {
                                    var t = function(e) {
                                            e.data.icon.css("border-color", e.data.color)
                                        },
                                        i = e.data("hover-border-color"),
                                        o = e.css("border-color");
                                    "" !== i && (e.on("mouseenter", {
                                        icon: e,
                                        color: i
                                    }, t), e.on("mouseleave", {
                                        icon: e,
                                        color: o
                                    }, t))
                                }
                            }(y(this))
                    })
                }
            }
        },
        m = mkdf.modules.shortcodes.mkdfSocialIconWidget = function() {
            var e = y(".mkdf-social-icon-widget-holder");
            return {
                init: function() {
                    e.length && e.each(function() {
                        ! function(e) {
                            if (void 0 !== e.data("hover-color")) {
                                var t = function(e) {
                                        e.data.icon.css("color", e.data.color)
                                    },
                                    i = e,
                                    o = e.data("hover-color"),
                                    a = i.css("color");
                                "" !== o && (e.on("mouseenter", {
                                    icon: i,
                                    color: o
                                }, t), e.on("mouseleave", {
                                    icon: i,
                                    color: a
                                }, t))
                            }
                        }(y(this))
                    })
                }
            }
        };

    function c() {
        var e = y(".mkdf-testimonials");
        e.length && e.each(function() {
            var d = y(this);
            d.appear(function() {
                d.css("visibility", "visible")
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            });
            var e = !0,
                t = !0;
            void 0 !== d.data("animation-speed") && !1 !== d.data("animation-speed") && d.data("animation-speed"), void 0 !== d.data("dots-navigation") && (e = d.data("dots-navigation")), void 0 !== d.data("arrows-navigation") && (t = d.data("arrows-navigation"));
            d.on("beforeChange", function() {
                var e;
                (e = d.find(".slick-slide")).removeClass("mkdf-fade-in mkdf-fade-out"), e.each(function() {
                    var e = y(this),
                        t = d.find(".slick-list").offset().left,
                        i = d.find(".slick-list").outerWidth(),
                        o = e.offset().left,
                        a = e.outerWidth();
                    t <= o && o + a <= t + i ? e.addClass("mkdf-fade-out") : e.addClass("mkdf-fade-in")
                })
            }), d.on("init", function() {
                d.find(".mkdf-testimonial-content.slick-active").addClass("mkdf-fade-in")
            }), d.slick({
                infinite: !0,
                autoplay: !1,
                slidesToShow: 1,
                arrows: t,
                dots: e,
                dotsClass: "mkdf-slick-dots",
                adaptiveHeight: !0,
                easing: "easeInOutQuint",
                speed: 1200,
                prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_left"></span></span>',
                nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="arrow_right"></span></span>',
                customPaging: function(e, t) {
                    return '<span class="mkdf-slick-dot-inner"></span>'
                },
                responsive: void 0
            })
        })
    }

    function h() {
        var t, i, o, a, e = y(".mkdf-carousel-holder");
        e.length && e.each(function() {
            var e;
            t = y(this).children(".mkdf-carousel"), i = t.data("items"), o = "yes" == t.data("arrows-navigation"), a = "yes" == t.data("dots-navigation"), e = 8 == i || 7 == i ? 6 : i, t.on("init", function(e) {
                t.css("visibility", "visible")
            }), t.slick({
                infinite: !0,
                autoplay: !0,
                slidesToShow: i,
                arrows: o,
                dots: a,
                dotsClass: "mkdf-slick-dots",
                adaptiveHeight: !0,
                prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_left"></span></span>',
                nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="arrow_right"></span></span>',
                easing: "easeInOutQuint",
                speed: 1e3,
                customPaging: function(e, t) {
                    return '<span class="mkdf-slick-dot-inner"></span>'
                },
                responsive: [{
                    breakpoint: 1281,
                    settings: {
                        slidesToShow: e,
                        slidesToScroll: 1,
                        infinite: !0
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: !0
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }

    function u() {
        var e = y(".mkdf-pie-chart-holder, .mkdf-pie-chart-with-icon-holder");
        e.length && e.each(function() {
            var e = y(this),
                t = e.children(".mkdf-percentage, .mkdf-percentage-with-icon"),
                i = mkdfGlobalVars.vars.mkdfFirstColor,
                o = "#f6f6f6",
                a = 200;
            void 0 !== t.data("bar-color") && "" !== t.data("bar-color") && (i = t.data("bar-color")), void 0 !== t.data("track-color") && "" !== t.data("track-color") && (o = t.data("track-color")), void 0 !== t.data("size") && "" !== t.data("size") && (a = parseInt(t.data("size"))), t.appear(function() {
                ! function(e) {
                    e.css("opacity", "1");
                    var t = e.find(".mkdf-to-counter"),
                        i = parseFloat(t.text());
                    t.countTo({
                        from: 0,
                        to: i,
                        speed: 1500,
                        refreshInterval: 50
                    })
                }(e), t.css("opacity", "1"), t.easyPieChart({
                    barColor: i,
                    trackColor: o,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: "15",
                    animate: 1500,
                    size: a
                })
            }, {
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }

    function k() {
        y(".mkdf-pie-chart-doughnut-holder, .mkdf-pie-chart-pie-holder").each(function() {
            for (var e = y(this).find("canvas"), t = e.attr("id"), i = document.getElementById(t).getContext("2d"), o = [], a = y(i.canvas), d = 1; d <= 10; d++) {
                var n, s = a.data("value-" + d),
                    r = a.data("color-" + d);
                void 0 !== s && void 0 !== r && (n = {
                    value: s,
                    color: r
                }, o.push(n))
            }
            e.hasClass("mkdf-pie") ? new Chart(i).Pie(o, {
                segmentStrokeColor: "transparent"
            }) : new Chart(i).Doughnut(o, {
                segmentStrokeColor: "transparent"
            })
        })
    }

    function p() {
        var e = y(".mkdf-tabs");
        e.length && e.each(function() {
            var e = y(this);
            e.children(".mkdf-tab-container").each(function(e) {
                e += 1;
                var t = y(this),
                    i = t.attr("id"),
                    o = t.parent().find(".mkdf-tabs-nav li:nth-child(" + e + ") a"),
                    a = o.attr("href"); - 1 < (i = "#" + i).indexOf(a) && o.attr("href", i)
            }), e.hasClass("mkdf-horizontal-tab") ? e.tabs() : e.hasClass("mkdf-vertical-tab") && (e.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"), e.find(".mkdf-tabs-nav > ul >li").removeClass("ui-corner-top").addClass("ui-corner-left"))
        })
    }

    function v() {
        var e = y(".mkdf-tab-container");
        e.length && e.each(function() {
            var e = y(this),
                t = e.attr("id"),
                i = "";
            void 0 === e.data("icon-html") && "false" === e.data("icon-html") || (i = e.data("icon-html"));
            var o = e.parents(".mkdf-tabs").find('.mkdf-tabs-nav > li > a[href="#' + t + '"]');
            void 0 !== o && o.children(".mkdf-icon-frame").append(i)
        })
    }
    var g = mkdf.modules.shortcodes.mkdfButton = function() {
        var e = y(".mkdf-btn");
        return {
            init: function() {
                e.length && e.each(function() {
                    ! function(e) {
                        if (void 0 !== e.data("hover-color")) {
                            var t = function(e) {
                                    e.data.button.css("color", e.data.color)
                                },
                                i = e.css("color"),
                                o = e.data("hover-color");
                            e.on("mouseenter", {
                                button: e,
                                color: o
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: i
                            }, t)
                        }
                    }(y(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-bg-color")) {
                            var t = function(e) {
                                    e.data.button.css("background-color", e.data.color)
                                },
                                i = e.css("background-color"),
                                o = e.data("hover-bg-color");
                            e.on("mouseenter", {
                                button: e,
                                color: o
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: i
                            }, t)
                        }
                    }(y(this)),
                    function(e) {
                        if (void 0 !== e.data("hover-border-color")) {
                            var t = function(e) {
                                    e.data.button.css("border-color", e.data.color)
                                },
                                i = e.css("borderTopColor"),
                                o = e.data("hover-border-color");
                            e.on("mouseenter", {
                                button: e,
                                color: o
                            }, t), e.on("mouseleave", {
                                button: e,
                                color: i
                            }, t)
                        }
                    }(y(this))
                })
            }
        }
    };

    function w() {
        var t = y(".mkdf-blog-list-holder.mkdf-masonry .mkdf-blog-list");
        t.length && t.each(function() {
            var e = y(this);
            t.waitForImages(function() {
                e.isotope({
                    itemSelector: ".mkdf-blog-list-masonry-item",
                    masonry: {
                        columnWidth: ".mkdf-blog-list-masonry-grid-sizer",
                        gutter: ".mkdf-blog-list-masonry-grid-gutter"
                    }
                }), e.addClass("mkdf-appeared")
            })
        })
    }

    function b() {
        var e = y(".mkdf-blog-list-holder.mkdf-boxes .mkdf-blog-list");
        e.length && e.each(function() {
            var e = y(this),
                t = e.find(".mkdf-blog-list-item"),
                i = t.first().outerHeight();
            t.each(function() {
                var e = y(this);
                i < e.outerHeight() && (i = e.outerHeight())
            }), t.each(function() {
                y(this).css("height", i)
            }), e.addClass("mkdf-appeared")
        })
    }

    function C() {
        var e = y(".mkdf-custom-font-holder");
        e.length && e.each(function() {
            var e, t, i = y(this),
                o = 1,
                a = 1;
            mkdf.windowWidth < 1200 && (o = .8), mkdf.windowWidth < 1e3 && (o = .7), mkdf.windowWidth < 768 && (o = .6, a = .7), mkdf.windowWidth < 600 && (o = .5, a = .6), mkdf.windowWidth < 480 && (o = .4, a = .5), void 0 !== i.data("font-size") && !1 !== i.data("font-size") && (70 < (e = parseInt(i.data("font-size"))) ? e = Math.round(e * o) : 35 < e && (e = Math.round(e * a)), i.css("font-size", e + "px")), void 0 !== i.data("line-height") && !1 !== i.data("line-height") && (70 < (t = parseInt(i.data("line-height"))) && mkdf.windowWidth < 1200 ? t = "1.2em" : 35 < t && mkdf.windowWidth < 768 ? t = "1.2em" : t += "px", i.css("line-height", t))
        })
    }

    function x() {
        y(".mkdf-google-map").length && y(".mkdf-google-map").each(function() {
            var e, t, i, o, a, d, n, s, r, l, f = y(this),
                m = !1;
            void 0 !== f.data("predefined-style") && "yes" === f.data("predefined-style") && (m = !0), void 0 !== f.data("custom-map-style") && (e = f.data("custom-map-style")), void 0 !== f.data("color-overlay") && !1 !== f.data("color-overlay") && (t = f.data("color-overlay")), void 0 !== f.data("saturation") && !1 !== f.data("saturation") && (i = f.data("saturation")), void 0 !== f.data("lightness") && !1 !== f.data("lightness") && (o = f.data("lightness")), void 0 !== f.data("zoom") && !1 !== f.data("zoom") && (a = f.data("zoom")), void 0 !== f.data("pin") && !1 !== f.data("pin") && (d = f.data("pin")), void 0 !== f.data("height") && !1 !== f.data("height") && (n = f.data("height")), void 0 !== f.data("unique-id") && !1 !== f.data("unique-id") && (s = f.data("unique-id")), void 0 !== f.data("scroll-wheel") && (r = f.data("scroll-wheel")), void 0 !== f.data("addresses") && !1 !== f.data("addresses") && (l = f.data("addresses")),
                function(e, t, i, o, a, d, n, s, r, l, f, m, c) {
                    var h, u = [];
                    u = e ? [{
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#444444"
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [{
                            color: "#f2f2f2"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 45
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{
                            visibility: "simplified"
                        }, {
                            color: "#ff6a6a"
                        }, {
                            lightness: "0"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ee3123"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ee3123"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "labels.text",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ee3123"
                        }, {
                            lightness: "62"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry.fill",
                        stylers: [{
                            lightness: "75"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit.line",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "transit.station.bus",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "transit.station.rail",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "transit.station.rail",
                        elementType: "labels.icon",
                        stylers: [{
                            weight: "0.01"
                        }, {
                            hue: "#ff0028"
                        }, {
                            lightness: "0"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "all",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#80e4d8"
                        }, {
                            lightness: "25"
                        }, {
                            saturation: "-23"
                        }]
                    }] : [{
                        stylers: [{
                            hue: i
                        }, {
                            saturation: o
                        }, {
                            lightness: a
                        }, {
                            gamma: 1
                        }]
                    }];
                    h = t || e ? "mkdf-style" : google.maps.MapTypeId.ROADMAP;
                    var k = new google.maps.StyledMapType(u, {
                        name: "Mikado Google Map"
                    });
                    m = new google.maps.Geocoder;
                    var p = new google.maps.LatLng(-34.397, 150.644);
                    isNaN(r) || (r += "px");
                    var v, g = {
                        zoom: n,
                        scrollwheel: d,
                        center: p,
                        zoomControl: !0,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.SMALL,
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        },
                        scaleControl: !1,
                        scaleControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        streetViewControl: !1,
                        streetViewControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        panControl: !1,
                        panControlOptions: {
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeControl: !1,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkdf-style"],
                            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeId: h
                    };
                    for ((f = new google.maps.Map(document.getElementById(s), g)).mapTypes.set("mkdf-style", k), v = 0; v < c.length; ++v) S(c[v], l, f, m);
                    r = T(s, r), r = parseInt(r) + "px", document.getElementById(s).style.height = r
                }(m, e, t, i, o, r, a, "mkdf-map-" + s, n, d, "map_" + s, "geocoder_" + s, l)
        })
    }

    function T(e, t) {
        var i, o = y("#" + e);
        o.parent().hasClass("mkdf-circle-map") && ((i = o.width()) > parseInt(t) ? t = i : i < parseInt(t) && (t = i));
        return t
    }

    function S(o, a, d, e) {
        if ("" !== o) {
            var t = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + o + "</p></div></div>",
                n = new google.maps.InfoWindow({
                    content: t
                });
            e.geocode({
                address: o
            }, function(e, t) {
                if (t === google.maps.GeocoderStatus.OK) {
                    d.setCenter(e[0].geometry.location);
                    var i = new google.maps.Marker({
                        map: d,
                        position: e[0].geometry.location,
                        icon: a,
                        title: o.store_title
                    });
                    google.maps.event.addListener(i, "click", function() {
                        n.open(d, i)
                    }), google.maps.event.addDomListener(window, "resize", function() {
                        d.setCenter(e[0].geometry.location)
                    })
                }
            })
        }
    }

    function _() {
        var e = y(".mkdf-accordion-holder");
        e.length && e.each(function() {
            var e = y(this);
            if (e.hasClass("mkdf-accordion") && e.accordion({
                    animate: "swing",
                    collapsible: !0,
                    active: 0,
                    icons: "",
                    heightStyle: "content"
                }), e.hasClass("mkdf-toggle")) {
                var t = y(this),
                    i = t.find(".mkdf-title-holder"),
                    o = i.next();
                t.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), i.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), o.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), i.each(function() {
                    var e = y(this);
                    e.hover(function() {
                        e.toggleClass("ui-state-hover")
                    }), e.on("click", function() {
                        e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), e.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                    })
                })
            }
        })
    }

    function I() {
        var e = y(".mkdf-image-gallery");
        e.length && e.each(function() {
            var e, t = y(this).children(".mkdf-image-gallery-sliding"),
                i = t.data("autoplay"),
                o = "fade" == t.data("animation"),
                a = "yes" == t.data("navigation"),
                d = "yes" == t.data("pagination"),
                n = !1,
                s = !1;
            i = "disable" != i && (e = 1e3 * i, !0), t.hasClass("mkdf-gallery-image-carousel") && (s = n = !0), t.on("init", function(e) {
                t.find(".slick-slide").each(function() {
                    var t = y(this),
                        i = 0,
                        o = 0,
                        e = !1;
                    t.on("mousedown", function() {
                        i = 0, e = !(o = 1)
                    }), t.on("mousemove", function() {
                        1 == o && (e && (i = 1), e = !0)
                    }), t.on("mouseleave", function() {
                        i = 0
                    }), t.on("mouseup", function(e) {
                        1 === i ? t.find('a[data-rel^="prettyPhoto"]').unbind("click") : mkdf.modules.common.mkdfPrettyPhoto(), o = i = 0
                    })
                })
            }), t.slick({
                infinite: !0,
                autoplay: i,
                autoplaySpeed: e,
                easing: "easeInOutQuint",
                speed: 1e3,
                slidesToShow: 1,
                fade: o,
                arrows: a,
                dots: d,
                dotsClass: "mkdf-slick-dots",
                adaptiveHeight: !1,
                variableWidth: n,
                centerMode: s,
                prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_left"></span></span>',
                nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="arrow_right"></span></span>',
                customPaging: function(e, t) {
                    return '<span class="mkdf-slick-dot-inner"></span>'
                }
            })
        })
    }

    function A() {
        var e = y(".mkdf-image-gallery-masonry");
        e.length && e.each(function() {
            var e = y(this);
            e.waitForImages(function() {
                W(e.find(".mkdf-image-masonry-grid-sizer").width(), e), z(e)
            }), y(window).resize(function() {
                W(e.find(".mkdf-image-masonry-grid-sizer").width(), e), z(e)
            })
        })
    }

    function z(e) {
        e.animate({
            opacity: 1
        }), e.isotope({
            itemSelector: ".mkdf-gallery-image",
            masonry: {
                columnWidth: ".mkdf-image-masonry-grid-sizer"
            }
        })
    }

    function W(e, t) {
        var i = t.find(".mkdf-size-square"),
            o = t.find(".mkdf-size-landscape"),
            a = t.find(".mkdf-size-portrait"),
            d = t.find(".mkdf-size-big-square");
        i.css("height", e), a.css("height", Math.round(2 * e)), 600 < mkdf.windowWidth ? (d.css("height", Math.round(2 * e)), o.css("height", e)) : (d.css("height", e), o.css("height", Math.round(e / 2)))
    }

    function P() {
        var e = y(".mkdf-portfolio-list-holder-outer.mkdf-ptf-standard, .mkdf-portfolio-list-holder-outer.mkdf-ptf-gallery, .mkdf-portfolio-list-holder-outer.mkdf-ptf-gallery-with-space");
        e.length && e.each(function() {
            var e = y(this);
            e.appear(function() {
                ! function(e) {
                    var t = "";
                    e.hasClass("mkdf-ptf-has-filter") && (t = "." + (t = e.find(".mkdf-portfolio-filter-holder-inner ul li").data("class")));
                    var i = e.find(".mkdf-portfolio-list-holder");
                    i.mixItUp({
                        callbacks: {
                            onMixLoad: function() {
                                setTimeout(function() {
                                    i.addClass("mkdf-appeared"), mkdf.modules.common.mkdfInitParallax()
                                }, 100), i.find("article").css("visibility", "visible"), i.find("article").css("dislay", "inline-block")
                            },
                            onMixStart: function() {
                                i.find("article").css("visibility", "visible"), i.find("article").css("dislay", "inline-block")
                            },
                            onMixBusy: function() {
                                i.find("article").css("visibility", "visible")
                            }
                        },
                        selectors: {
                            filter: t
                        },
                        animation: {
                            effects: "fade",
                            duration: 600
                        }
                    })
                }(e)
            })
        })
    }

    function O() {
        var e = y(".mkdf-portfolio-list-holder-outer.mkdf-ptf-masonry");
        e.length && e.each(function() {
            var e = y(this).children(".mkdf-portfolio-list-holder"),
                t = e.find(".mkdf-portfolio-list-masonry-grid-sizer").width();
            H(t, e), M(e), y(window).resize(function() {
                H(t, e), M(e)
            })
        })
    }

    function M(e) {
        e.waitForImages(function() {
            e.isotope({
                itemSelector: ".mkdf-portfolio-item",
                masonry: {
                    columnWidth: ".mkdf-portfolio-list-masonry-grid-sizer"
                }
            }), e.addClass("mkdf-appeared")
        })
    }

    function H(e, t) {
        var i = t.find(".mkdf-default-masonry-item"),
            o = t.find(".mkdf-large-width-masonry-item"),
            a = t.find(".mkdf-large-height-masonry-item"),
            d = t.find(".mkdf-large-width-height-masonry-item");
        i.css("height", e), a.css("height", Math.round(2 * e)), 600 < mkdf.windowWidth ? (d.css("height", Math.round(2 * e)), o.css("height", e)) : (d.css("height", e), o.css("height", Math.round(e / 2)))
    }

    function E() {
        var e = y(".mkdf-portfolio-list-holder-outer.mkdf-ptf-pinterest");
        e.length && e.each(function() {
            var e = y(this).children(".mkdf-portfolio-list-holder");
            D(e), y(window).resize(function() {
                D(e)
            })
        })
    }

    function D(e) {
        e.waitForImages(function() {
            e.isotope({
                itemSelector: ".mkdf-portfolio-item",
                masonry: {
                    columnWidth: ".mkdf-portfolio-list-masonry-grid-sizer"
                }
            })
        }), e.addClass("mkdf-appeared")
    }

    function V() {
        var e = y(".mkdf-portfolio-filter-holder.mkdf-masonry-filter");
        e.length && e.each(function() {
            var i = y(this),
                o = null;
            i.find("ul li").data("class");
            i.find(".filter:first").addClass("current"), i.find(".filter").click(function() {
                var e = y(this);
                clearTimeout(o), y(".isotope, .isotope .isotope-item").css("transition-duration", "0.8s"), o = setTimeout(function() {
                    y(".isotope, .isotope .isotope-item").css("transition-duration", "0s")
                }, 700);
                var t = y(this).attr("data-filter");
                return i.siblings(".mkdf-portfolio-list-holder-outer").find(".mkdf-portfolio-list-holder").isotope({
                    filter: t
                }), i.find(".filter").removeClass("current"), e.addClass("current"), !1
            })
        })
    }

    function L() {
        var e = y(".mkdf-portfolio-list-holder-outer.mkdf-portfolio-slider-holder");
        e.length && e.each(function() {
            var e = y(this),
                t = e.children(".mkdf-portfolio-list-holder"),
                i = e.data("items"),
                o = !1,
                a = !0;
            e.hasClass("mkdf-portfolio-related-holder") && (o = !(a = !1));
            var d = [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: o
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: o
                }
            }];
            t.on("init", function(e) {
                t.find(".slick-slide").each(function() {
                    var t = y(this),
                        i = 0,
                        o = 0,
                        e = !1;
                    t.on("mousedown", function() {
                        i = 0, e = !(o = 1)
                    }), t.on("mousemove", function() {
                        1 == o && (e && (i = 1), e = !0)
                    }), t.on("mouseleave", function() {
                        i = 0
                    }), t.on("mouseup", function(e) {
                        1 === i ? t.find('a[data-rel^="prettyPhoto"]').unbind("click") : mkdf.modules.common.mkdfPrettyPhoto(), o = i = 0
                    })
                })
            }), t.slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 5e3,
                speed: 600,
                slidesToShow: i,
                arrows: !0,
                dots: a,
                easing: "easeOutQuart",
                dotsClass: "mkdf-slick-dots",
                adaptiveHeight: !0,
                prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_left"></span></span>',
                nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="arrow_right"></span></span>',
                customPaging: function(e, t) {
                    return '<span class="mkdf-slick-dot-inner"></span>'
                },
                responsive: d
            })
        })
    }

    function G() {
        var e = y(".mkdf-portfolio-list-holder-outer.mkdf-ptf-show-more");
        e.length && e.each(function() {
            var o, a, d = y(this),
                n = d.find(".mkdf-portfolio-list-holder"),
                s = d.find(".mkdf-portfolio-list-masonry-grid-sizer").width(),
                r = d.find(".mkdf-ptf-list-load-more a"),
                l = r.children(".mkdf-btn-text");
            void 0 !== d.data("max-num-pages") && !1 !== d.data("max-num-pages") && (a = d.data("max-num-pages")), d.hasClass("mkdf-ptf-load-more") ? r.on("click", function(e) {
                var t = j(d);
                if (o = t.nextPage, e.preventDefault(), e.stopPropagation(), o <= a) {
                    var i = B(t);
                    l.text(mkdfGlobalVars.vars.mkdfLoadingMoreText), y.ajax({
                        type: "POST",
                        data: i,
                        url: mkdCoreAjaxUrl,
                        success: function(e) {
                            o++, d.data("next-page", o);
                            var t = F(y.parseJSON(e).html);
                            d.waitForImages(function() {
                                setTimeout(function() {
                                    d.hasClass("mkdf-ptf-masonry") || d.hasClass("mkdf-ptf-pinterest") ? (n.isotope().append(t).isotope("appended", t).isotope("reloadItems"), H(s, d), M(d)) : n.mixItUp("append", t), l.text(mkdfGlobalVars.vars.mkdfLoadMoreText), mkdf.modules.common.mkdfPrettyPhoto(), a < o && r.hide()
                                }, 400)
                            })
                        }
                    })
                }
            }) : d.hasClass("mkdf-ptf-infinite-scroll") && r.appear(function(e) {
                var t = j(d);
                if (o = t.nextPage, e.preventDefault(), e.stopPropagation(), r.css("visibility", "visible"), o <= a) {
                    var i = B(t);
                    y.ajax({
                        type: "POST",
                        data: i,
                        url: mkdCoreAjaxUrl,
                        success: function(e) {
                            o++, d.data("next-page", o);
                            var t = F(y.parseJSON(e).html);
                            d.waitForImages(function() {
                                setTimeout(function() {
                                    d.hasClass("mkdf-ptf-masonry") || d.hasClass("mkdf-ptf-pinterest") ? n.isotope().append(t).isotope("appended", t).isotope("reloadItems") : n.mixItUp("append", t), r.css("visibility", "hidden"), mkdf.modules.common.mkdfPrettyPhoto()
                                }, 400)
                            })
                        }
                    })
                }
                o === a && setTimeout(function() {
                    r.fadeOut(400)
                }, 400)
            }, {
                one: !1,
                accX: 0,
                accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
            })
        })
    }

    function F(e) {
        var t = y.trim(e),
            i = y(t),
            o = y();
        return i.each(function(e, t) {
            1 === t.nodeType && (o = o.add(this))
        }), o
    }

    function j(e) {
        var t = {
            type: "",
            columns: "",
            gridSize: "",
            orderBy: "",
            order: "",
            number: "",
            imageSize: "",
            hoverType: "",
            filter: "",
            filterOrderBy: "",
            category: "",
            selectedProjectes: "",
            showMore: "",
            titleTag: "",
            nextPage: "",
            maxNumPages: ""
        };
        return void 0 !== e.data("type") && !1 !== e.data("type") && (t.type = e.data("type")), void 0 !== e.data("grid-size") && !1 !== e.data("grid-size") && (t.gridSize = e.data("grid-size")), void 0 !== e.data("columns") && !1 !== e.data("columns") && (t.columns = e.data("columns")), void 0 !== e.data("order-by") && !1 !== e.data("order-by") && (t.orderBy = e.data("order-by")), void 0 !== e.data("order") && !1 !== e.data("order") && (t.order = e.data("order")), void 0 !== e.data("number") && !1 !== e.data("number") && (t.number = e.data("number")), void 0 !== e.data("image-size") && !1 !== e.data("image-size") && (t.imageSize = e.data("image-size")), void 0 !== e.data("hover-type") && !1 !== e.data("hover-type") && (t.hoverType = e.data("hover-type")), void 0 !== e.data("filter") && !1 !== e.data("filter") && (t.filter = e.data("filter")), void 0 !== e.data("filter-order-by") && !1 !== e.data("filter-order-by") && (t.filterOrderBy = e.data("filter-order-by")), void 0 !== e.data("category") && !1 !== e.data("category") && (t.category = e.data("category")), void 0 !== e.data("selected-projects") && !1 !== e.data("selected-projects") && (t.selectedProjectes = e.data("selected-projects")), void 0 !== e.data("show-more") && !1 !== e.data("show-more") && (t.showMore = e.data("show-more")), void 0 !== e.data("title-tag") && !1 !== e.data("title-tag") && (t.titleTag = e.data("title-tag")), void 0 !== e.data("next-page") && !1 !== e.data("next-page") && (t.nextPage = e.data("next-page")), void 0 !== e.data("max-num-pages") && !1 !== e.data("max-num-pages") && (t.maxNumPages = e.data("max-num-pages")), t
    }

    function B(e) {
        return {
            action: "mkd_core_portfolio_ajax_load_more",
            type: e.type,
            columns: e.columns,
            gridSize: e.gridSize,
            orderBy: e.orderBy,
            order: e.order,
            number: e.number,
            imageSize: e.imageSize,
            hoverType: e.hoverType,
            filter: e.filter,
            filterOrderBy: e.filterOrderBy,
            category: e.category,
            selectedProjectes: e.selectedProjectes,
            showMore: e.showMore,
            titleTag: e.titleTag,
            nextPage: e.nextPage
        }
    }
    var R = mkdf.modules.shortcodes.mkdfSlider = function() {
        var e = y(".mkdf-slider .carousel"),
            n = /url\(["']?([^'")]+)['"]?\)/,
            d = {
                zoom_center: "1.2, 0, 0, 1.2, 0, 0",
                zoom_top_left: "1.2, 0, 0, 1.2, -150, -150",
                zoom_top_right: "1.2, 0, 0, 1.2, 150, -150",
                zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150",
                zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150"
            },
            t = /\([0-9epx\.\, \t\-]+/gi,
            a = function(e) {
                return e.match(t)[0].substr(1).split(",").map(function(e) {
                    return parseFloat(e)
                })
            },
            s = ["transform", "-webkit-transform"];
        y.fn.transformAnimate = function(o) {
            var e = {
                transform: "matrix(1,0,0,1,0,0)"
            };
            y.extend(e, o), this.css("percentAnim", 0);
            var t, i, d = (t = this, i = null, s.some(function(e) {
                    return null !== (i = t.css(e)) && "" !== i
                }), a(i = i && "none" !== i ? i : "matrix(1,0,0,1,0,0)")),
                n = a(e.transform);
            return e.step = function(a, e) {
                var t = y(this),
                    i = d.map(function(e, t) {
                        return i = e, o = n[t], i + a / 100 * (o - i);
                        var i, o
                    });
                ! function(e, t) {
                    for (var i = "matrix(" + t.join(",") + ")", o = s.length - 1; 0 <= o; --o) e.css(s[o], i + " rotate(0.01deg)")
                }(t, i), o.step && o.step.apply(this, [i, e])
            }, this.stop().animate({
                percentAnim: 100
            }, e)
        };
        var r = function(e, t, i, o) {
                var a = t;
                o || (mkdf.windowWidth > i[0] ? a = t : mkdf.windowWidth > i[1] ? a = .75 * t : mkdf.windowWidth > i[2] ? a = .6 * t : mkdf.windowWidth > i[3] ? a = .55 * t : mkdf.windowWidth <= i[3] && (a = .45 * t)), e.css({
                    height: a + "px"
                }), e.find(".mkdf-slider-preloader").css({
                    height: a + "px"
                }), e.find(".mkdf-slider-preloader .mkdf-ajax-loader").css({
                    display: "block"
                }), e.find(".item").css({
                    height: a + "px"
                }), 0 === mkdfPerPageVars.vars.mkdfStickyScrollAmount && (mkdf.modules.header.stickyAppearAmount = a)
            },
            l = function(e) {
                var t = mkdf.windowWidth < 1e3 ? mkdfGlobalVars.vars.mkdfMobileHeaderHeight + y(".mkdf-top-bar").height() : 0;
                e.css({
                    height: mkdf.windowHeight - t + "px"
                }), e.find(".mkdf-slider-preloader").css({
                    height: mkdf.windowHeight - t + "px"
                }), e.find(".mkd-slider-preloader .mkdf-ajax-loader").css({
                    display: "block"
                }), e.find(".item").css({
                    height: mkdf.windowHeight - t + "px"
                }), 0 === mkdfPerPageVars.vars.mkdfStickyScrollAmount && (mkdf.modules.header.stickyAppearAmount = mkdf.windowHeight)
            },
            f = function(e) {
                var p = 600,
                    v = 800,
                    g = 1024,
                    w = 1440;
                e.find(".mkdf-slider-elements-container").each(function() {
                    var e = y(this),
                        t = e.filter(".mkdf-custom-elements").add(e.not(".mkdf-custom-elements").find(".mkdf-slider-elements-holder-frame")).not(".mkdf-grid");
                    t.length && (p >= mkdf.windowWidth && e.attr("data-width-mobile").length ? t.css("width", e.data("width-mobile") + "%") : v >= mkdf.windowWidth && e.attr("data-width-tablet-p").length ? t.css("width", e.data("width-tablet-p") + "%") : g >= mkdf.windowWidth && e.attr("data-width-tablet-l").length ? t.css("width", e.data("width-tablet-l") + "%") : w >= mkdf.windowWidth && e.attr("data-width-laptop").length ? t.css("width", e.data("width-laptop") + "%") : e.attr("data-width-desktop").length && t.css("width", e.data("width-desktop") + "%"))
                }), e.find(".item").each(function() {
                    var e = y(this),
                        k = e.find(".mkdf-slider-elements-holder-frame").data("default-width"),
                        t = e.find(".mkdf-slide-element");
                    t.each(function() {
                        var e, t = y(this),
                            i = t.data("default-margin-top"),
                            o = t.data("default-margin-bottom"),
                            a = t.data("default-margin-left"),
                            d = t.data("default-margin-right"),
                            n = void 0 !== t.data("resp-scale") ? t.data("resp-scale") : void 0;
                        e = p >= mkdf.windowWidth ? void 0 === n ? mkdf.windowWidth / k : parseFloat(n.mobile) : v >= mkdf.windowWidth ? void 0 === n ? mkdf.windowWidth / k : parseFloat(n.tabletp) : g >= mkdf.windowWidth ? void 0 === n ? mkdf.windowWidth / k : parseFloat(n.tabletl) : w >= mkdf.windowWidth ? void 0 === n ? mkdf.windowWidth / k : parseFloat(n.laptop) : void 0 === n ? mkdf.windowWidth / k : parseFloat(n.desktop), t.css({
                            "margin-top": Math.round(e * i) + "px",
                            "margin-bottom": Math.round(e * o) + "px",
                            "margin-left": Math.round(e * a) + "px",
                            "margin-right": Math.round(e * d) + "px"
                        })
                    }), t.filter(".mkdf-slide-element-responsive-text, .mkdf-slide-element-responsive-button, .mkdf-slide-element-responsive-image").add(t.find("a.mkdf-slide-element-responsive-text, span.mkdf-slide-element-responsive-text")).each(function() {
                        var e, t, i, o, a, d, n, s, r = y(this),
                            l = void 0 !== r.data("resp-scale") ? r.data("resp-scale") : void 0,
                            f = void 0 !== r.data("resp-left") ? r.data("resp-left") : void 0,
                            m = void 0 !== r.data("resp-top") ? r.data("resp-top") : void 0;
                        if (i = p >= mkdf.windowWidth ? (e = void 0 === l ? mkdf.windowWidth / k : parseFloat(l.mobile), t = void 0 === f ? void 0 !== r.data("left") ? r.data("left") + "%" : "" : "" != f.mobile ? f.mobile + "%" : r.data("left") + "%", void 0 === m ? void 0 !== r.data("top") ? r.data("top") + "%" : "" : "" != m.mobile ? m.mobile + "%" : r.data("top") + "%") : v >= mkdf.windowWidth ? (e = void 0 === l ? mkdf.windowWidth / k : parseFloat(l.tabletp), t = void 0 === f ? void 0 !== r.data("left") ? r.data("left") + "%" : "" : "" != f.tabletp ? f.tabletp + "%" : r.data("left") + "%", void 0 === m ? void 0 !== r.data("top") ? r.data("top") + "%" : "" : "" != m.tabletp ? m.tabletp + "%" : r.data("top") + "%") : g >= mkdf.windowWidth ? (e = void 0 === l ? mkdf.windowWidth / k : parseFloat(l.tabletl), t = void 0 === f ? void 0 !== r.data("left") ? r.data("left") + "%" : "" : "" != f.tabletl ? f.tabletl + "%" : r.data("left") + "%", void 0 === m ? void 0 !== r.data("top") ? r.data("top") + "%" : "" : "" != m.tabletl ? m.tabletl + "%" : r.data("top") + "%") : w >= mkdf.windowWidth ? (e = void 0 === l ? mkdf.windowWidth / k : parseFloat(l.laptop), t = void 0 === f ? void 0 !== r.data("left") ? r.data("left") + "%" : "" : "" != f.laptop ? f.laptop + "%" : r.data("left") + "%", void 0 === m ? void 0 !== r.data("top") ? r.data("top") + "%" : "" : "" != m.laptop ? m.laptop + "%" : r.data("top") + "%") : (e = void 0 === l ? mkdf.windowWidth / k : parseFloat(l.desktop), t = void 0 === f ? void 0 !== r.data("left") ? r.data("left") + "%" : "" : "" != f.desktop ? f.desktop + "%" : r.data("left") + "%", void 0 === m ? void 0 !== r.data("top") ? r.data("top") + "%" : "" : "" != m.desktop ? m.desktop + "%" : r.data("top") + "%"), e)
                            if (r.show(), r.is(".mkdf-slide-element-responsive-button")) o = r.data("default-font-size"), a = r.data("default-line-height"), d = r.data("default-letter-spacing"), n = r.data("default-ver-padding"), s = r.data("default-hor-padding"), r.css({
                                left: t,
                                top: i
                            }).find(".mkdf-btn").css({
                                "font-size": Math.round(e * o) + "px",
                                "line-height": Math.round(e * a) + "px",
                                "letter-spacing": Math.round(e * d) + "px",
                                "padding-left": Math.round(e * s) + "px",
                                "padding-right": Math.round(e * s) + "px",
                                "padding-top": Math.round(e * n) + "px",
                                "padding-bottom": Math.round(e * n) + "px"
                            });
                            else if (r.is(".mkdf-slide-element-responsive-image"))
                            if (e != mkdf.windowWidth / k) {
                                var c = r.data("upload-width"),
                                    h = r.data("upload-height");
                                r.filter(".custom-image").css({
                                    left: t,
                                    top: i
                                }).add(r.not(".custom-image").find("img")).css({
                                    width: Math.round(e * c) + "px",
                                    height: Math.round(e * h) + "px"
                                })
                            } else {
                                var u = r.data("width");
                                r.filter(".custom-image").css({
                                    left: t,
                                    top: i
                                }).add(r.not(".custom-image").find("img")).css({
                                    width: u + "%",
                                    height: ""
                                })
                            }
                        else o = r.data("default-font-size"), a = r.data("default-line-height"), d = r.data("default-letter-spacing"), r.css({
                            left: t,
                            top: i,
                            "font-size": Math.round(e * o) + "px",
                            "line-height": Math.round(e * a) + "px",
                            "letter-spacing": Math.round(e * d) + "px"
                        });
                        else r.hide()
                    })
                });
                var t = e.find(".carousel-indicators");
                e.find(".mkdf-slide-element-section-link").css("bottom", t.length ? parseInt(t.css("bottom"), 10) + t.outerHeight() + 10 + "px" : "20px")
            },
            m = function(e) {
                var t, i = [1600, 1200, 900, 650, 500, 320];
                if ((t = e).find(".mkdf-slide-element-text-small, .mkdf-slide-element-text-normal, .mkdf-slide-element-text-large, .mkdf-slide-element-text-extra-large").each(function() {
                        var e = y(this);
                        void 0 === e.data("default-font-size") && e.data("default-font-size", parseInt(e.css("font-size"), 10)), void 0 === e.data("default-line-height") && e.data("default-line-height", parseInt(e.css("line-height"), 10)), void 0 === e.data("default-letter-spacing") && e.data("default-letter-spacing", parseInt(e.css("letter-spacing"), 10))
                    }), t.find(".mkdf-slide-element-responsive-text").each(function() {
                        void 0 === y(this).data("default-font-size") && y(this).data("default-font-size", parseInt(y(this).css("font-size"), 10)), void 0 === y(this).data("default-line-height") && y(this).data("default-line-height", parseInt(y(this).css("line-height"), 10)), void 0 === y(this).data("default-letter-spacing") && y(this).data("default-letter-spacing", parseInt(y(this).css("letter-spacing"), 10))
                    }), t.find(".mkdf-slide-element-responsive-button").each(function() {
                        void 0 === y(this).data("default-font-size") && y(this).data("default-font-size", parseInt(y(this).find("a").css("font-size"), 10)), void 0 === y(this).data("default-line-height") && y(this).data("default-line-height", parseInt(y(this).find("a").css("line-height"), 10)), void 0 === y(this).data("default-letter-spacing") && y(this).data("default-letter-spacing", parseInt(y(this).find("a").css("letter-spacing"), 10)), void 0 === y(this).data("default-ver-padding") && y(this).data("default-ver-padding", parseInt(y(this).find("a").css("padding-top"), 10)), void 0 === y(this).data("default-hor-padding") && y(this).data("default-hor-padding", parseInt(y(this).find("a").css("padding-left"), 10))
                    }), t.find(".mkdf-slide-element").each(function() {
                        var e = y(this);
                        void 0 === e.data("default-margin-top") && e.data("default-margin-top", parseInt(e.css("margin-top"), 10)), void 0 === e.data("default-margin-bottom") && e.data("default-margin-bottom", parseInt(e.css("margin-bottom"), 10)), void 0 === e.data("default-margin-left") && e.data("default-margin-left", parseInt(e.css("margin-left"), 10)), void 0 === e.data("default-margin-right") && e.data("default-margin-right", parseInt(e.css("margin-right"), 10))
                    }), f(t), e.hasClass("mkdf-full-screen")) l(e), y(window).resize(function() {
                    l(e), f(e)
                });
                else if (e.hasClass("mkdf-responsive-height")) {
                    var o = e.data("height");
                    r(e, o, i, !1), y(window).resize(function() {
                        r(e, o, i, !1), f(e)
                    })
                } else {
                    o = e.data("height");
                    e.find(".mkdf-slider-preloader").css({
                        height: e.height() + "px"
                    }), e.find(".mkdf-slider-preloader .mkdf-ajax-loader").css({
                        display: "block"
                    }), mkdf.windowWidth < 1e3 ? r(e, o, i, !1) : r(e, o, i, !0), y(window).resize(function() {
                        mkdf.windowWidth < 1e3 ? r(e, o, i, !1) : r(e, o, i, !0), f(e)
                    })
                }
            },
            c = function(e, t, i) {
                1 == t ? (e.find(".left.carousel-control .prev").html(i), e.find(".right.carousel-control .next").html(t + 1)) : t == i ? (e.find(".left.carousel-control .prev").html(t - 1), e.find(".right.carousel-control .next").html(1)) : (e.find(".left.carousel-control .prev").html(t - 1), e.find(".right.carousel-control .next").html(t + 1))
            },
            h = function(e) {
                var d = 1500;
                e.find(".item .mkdf-video .mkdf-video-wrap").each(function() {
                    var e = mkdf.windowWidth,
                        t = y(this).closest(".carousel").height();
                    y(this).width(e), d = 1920 / 1080 * (t + 20), y(this).height(t);
                    var i = e / 1920,
                        o = (t - mkdfGlobalVars.vars.mkdfMenuAreaHeight) / 1080,
                        a = o;
                    o < i && (a = i), 1920 * a < d && (a = d / 1920), y(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(1920 * a + 2)), y(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(1080 * a + 2)), y(this).scrollLeft((y(this).find("video").width() - e) / 2), y(this).find(".mejs-overlay, .mejs-poster").scrollTop((y(this).find("video").height() - t) / 2), y(this).scrollTop((y(this).find("video").height() - t) / 2)
                })
            },
            u = function(e) {
                if (e.hasClass("mkdf-slider-thumbs")) {
                    var t, i, o, a = e.find(".item").length,
                        d = e.find(".item").index(y(".item.active")[0]) + 1;
                    c(e, d, a), e.find(".item.active").prev(".item").length ? e.find(".item.active").prev("div").find(".mkdf-image").length ? (t = n.exec(e.find(".active").prev("div").find(".mkdf-image").attr("style")), (i = new Image).src = t[1]) : ((i = e.find(".active").prev("div").find("> .mkdf-video").clone()).find(".mkdf-video-overlay, .mejs-offscreen").remove(), i.find(".mkdf-video-wrap").width(150).height(84), i.find(".mejs-container").width(150).height(84), i.find("video").width(150).height(84)) : e.find(".carousel-inner .item:last-child .mkdf-image").length ? (t = n.exec(e.find(".carousel-inner .item:last-child .mkdf-image").attr("style")), (i = new Image).src = t[1]) : ((i = e.find(".carousel-inner .item:last-child > .mkdf-video").clone()).find(".mkdf-video-overlay, .mejs-offscreen").remove(), i.find(".mkdf-video-wrap").width(150).height(84), i.find(".mejs-container").width(150).height(84), i.find("video").width(150).height(84)), e.find(".left.carousel-control .img .old").fadeOut(300, function() {
                        y(this).remove()
                    }), e.find(".left.carousel-control .img").append(i).find("div.thumb-image, > img, div.mkdf-video").fadeIn(300).addClass("old"), e.find(".active").next("div.item").length ? e.find(".active").next("div").find(".mkdf-image").length ? (t = n.exec(e.find(".active").next("div").find(".mkdf-image").attr("style")), (o = new Image).src = t[1]) : ((o = e.find(".active").next("div").find("> .mkdf-video").clone()).find(".mkdf-video-overlay, .mejs-offscreen").remove(), o.find(".mkdf-video-wrap").width(150).height(84), o.find(".mejs-container").width(150).height(84), o.find("video").width(150).height(84)) : e.find(".carousel-inner .item:first-child .mkdf-image").length ? (t = n.exec(e.find(".carousel-inner .item:first-child .mkdf-image").attr("style")), (o = new Image).src = t[1]) : ((o = e.find(".carousel-inner .item:first-child > .mkdf-video").clone()).find(".mkdf-video-overlay, .mejs-offscreen").remove(), o.find(".mkdf-video-wrap").width(150).height(84), o.find(".mejs-container").width(150).height(84), o.find("video").width(150).height(84)), e.find(".right.carousel-control .img .old").fadeOut(300, function() {
                        y(this).remove()
                    }), e.find(".right.carousel-control .img").append(o).find("div.thumb-image, > img, div.mkdf-video").fadeIn(300).addClass("old")
                }
            },
            k = function(e, t, i) {
                var o;
                e.find(".carousel-inner .item:first-child").addClass("active"), N(y(".carousel .active"), e.hasClass("mkdf-header-effect")), e.hasClass("mkdf-slider-numbers") && c(e, 1, t), e.find(".item video").length && (o = e, y(".item .mkdf-video-wrap .mkdf-video-element").mediaelementplayer({
                        enableKeyboard: !1,
                        iPadUseNativeControls: !1,
                        pauseOtherPlayers: !1,
                        iPhoneUseNativeControls: !1,
                        AndroidUseNativeControls: !1
                    }), h(o), y(window).resize(function() {
                        h(o)
                    }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (y(".mkdf-slider .mkdf-mobile-video-image").show(), y(".mkdf-slider .mkdf-video-wrap").remove())), u(e),
                    function(e) {
                        if (e.hasClass("mkdf-slide-peek")) {
                            var n, t = function(e, t) {
                                    var i = e.is(".left") ? "left" : "right",
                                        o = r.filter("." + i);
                                    if (t) {
                                        e.addClass("hovered");
                                        var a = (s.index(s.filter(".active")) + ("left" == i ? -1 : 1) + s.length) % s.length;
                                        o.find(".mkdf-slider-peeker-inner").css({
                                            "background-image": s.eq(a).find(".mkdf-image, .mkdf-mobile-video-image").css("background-image"),
                                            width: n + "px"
                                        }), o.addClass("shown")
                                    } else e.removeClass("hovered"), r.removeClass("shown")
                                },
                                i = function(e, t) {
                                    if (t) {
                                        e.addClass("hovered");
                                        var i = e.data("slide-to"),
                                            o = s.index(s.filter(".active"));
                                        if (o != i) {
                                            var a = i < o ? "left" : "right",
                                                d = r.filter("." + a);
                                            d.find(".mkdf-slider-peeker-inner").css({
                                                "background-image": s.eq(i).find(".mkdf-image, .mkdf-mobile-video-image").css("background-image"),
                                                width: n + "px"
                                            }), d.addClass("shown")
                                        }
                                    } else e.removeClass("hovered"), r.removeClass("shown")
                                },
                                o = function() {
                                    n = s.filter(".active").width(), n += n % 2 ? 1 : 0, s.children(".mkdf-image, .mkdf-video").css({
                                        position: "absolute",
                                        width: n + "px",
                                        height: "110%",
                                        left: "50%",
                                        transform: "translateX(-50%)"
                                    })
                                },
                                s = e.find(".item");
                            o(), y(window).resize(o), e.find(".carousel-inner").append('<div class="mkdf-slider-peeker left"><div class="mkdf-slider-peeker-inner"></div></div><div class="mkdf-slider-peeker right"><div class="mkdf-slider-peeker-inner"></div></div>');
                            var r = e.find(".mkdf-slider-peeker"),
                                a = e.find(".carousel-control"),
                                d = e.find(".carousel-indicators > li");
                            a.hover(function() {
                                t(y(this), !0)
                            }, function() {
                                t(y(this), !1)
                            }), d.hover(function() {
                                i(y(this), !0)
                            }, function() {
                                i(y(this), !1)
                            }), e.on("slide.bs.carousel", function() {
                                setTimeout(function() {
                                    r.addClass("mkdf-slide-peek-in-progress").removeClass("shown")
                                }, 500)
                            }), e.on("slid.bs.carousel", function() {
                                a.filter(".hovered").each(function() {
                                    t(y(this), !0)
                                }), setTimeout(function() {
                                    d.filter(".hovered").each(function() {
                                        i(y(this), !0)
                                    })
                                }, 200), r.removeClass("mkdf-slide-peek-in-progress")
                            })
                        }
                    }(e), e.find(".mkdf-slide-element-wrapper-link").mouseenter(function() {
                        y(this).removeClass("inheriting")
                    }).mouseleave(function() {
                        y(this).addClass("inheriting")
                    }), e.hasClass("mkdf-auto-start") ? (e.carousel({
                        interval: i,
                        pause: !1
                    }), e.find(".slide_buttons_holder .qbutton").mouseenter(function() {
                        e.carousel("pause")
                    }).mouseleave(function() {
                        e.carousel("cycle")
                    })) : e.carousel({
                        interval: 0,
                        pause: !1
                    }), y(window).scroll(function() {
                        e.hasClass("mkdf-full-screen") && mkdf.scroll > mkdf.windowHeight && 1e3 < mkdf.windowWidth ? e.carousel("pause") : !e.hasClass("mkdf-full-screen") && mkdf.scroll > e.height() && 1e3 < mkdf.windowWidth ? e.carousel("pause") : e.carousel("cycle")
                    }), y(".carousel-inner .item:first-child").hasClass("mkdf-animate-image") && 1e3 < mkdf.windowWidth && e.find(".carousel-inner .item.mkdf-animate-image:first-child .mkdf-image").transformAnimate({
                        transform: "matrix(" + d[y(".carousel-inner .item:first-child").data("mkdf_animate_image")] + ")",
                        duration: 3e4
                    })
            };
        return {
            init: function() {
                if (e.length) {
                    if (e.each(function() {
                            var t = y(this),
                                e = t.data("slide_animation_timeout"),
                                i = t.find(".item").length;
                            if (t.find(".item").each(function() {
                                    var e = y(this).find(".mkdf-slide-element-button-inline");
                                    e.css("display", "inline-block").wrapAll('<div class="mkdf-slide-elements-buttons-wrapper" style="text-align: ' + e.eq(0).css("text-align") + ';"/>')
                                }), m(t), mkdf.htmlEl.hasClass("touch")) {
                                if (0 < t.find(".item:first-child .mkdf-mobile-video-image").length) var o = n.exec(t.find(".item:first-child .mkdf-mobile-video-image").attr("style"));
                                else o = n.exec(t.find(".item:first-child .mkdf-image").attr("style"));
                                if (o)(a = new Image).src = o[1], y(a).load(function() {
                                    y(".mkdf-slider-preloader").fadeOut(500), k(t, i, e)
                                })
                            } else {
                                var a;
                                if (0 < t.find(".item:first-child video").length) t.find(".item:first-child video").eq(0).one("loadeddata", function() {
                                    y(".mkdf-slider-preloader").fadeOut(500), k(t, i, e)
                                });
                                else if (o = n.exec(t.find(".item:first-child .mkdf-image").attr("style")))(a = new Image).src = o[1], y(a).load(function() {
                                    y(".mkdf-slider-preloader").fadeOut(500), k(t, i, e)
                                })
                            }
                            t.on("slide.bs.carousel", function() {
                                t.addClass("mkdf-in-progress"), t.find(".active .mkdf-slider-elements-holder-frame, .active .mkdf-slide-element-section-link").fadeTo(250, 0)
                            }), t.on("slid.bs.carousel", function() {
                                if (t.removeClass("mkdf-in-progress"), t.find(".active .mkdf-slider-elements-holder-frame, .active .mkdf-slide-element-section-link").fadeTo(0, 1), t.hasClass("mkdf-slider-numbers")) {
                                    var e = y(".item").index(y(".item.active")[0]) + 1;
                                    c(t, e, i)
                                }
                                y(".item.mkdf-animate-image .mkdf-image").stop().css({
                                    transform: "",
                                    "-webkit-transform": ""
                                }), y(".item.active").hasClass("mkdf-animate-image") && 1e3 < mkdf.windowWidth && y(".item.mkdf-animate-image.active .mkdf-image").transformAnimate({
                                    transform: "matrix(" + d[y(".item.mkdf-animate-image.active").data("mkdf_animate_image")] + ")",
                                    duration: 3e4
                                }), t.hasClass("mkdf-slider-thumbs") && u(t)
                            }), t.swipe({
                                swipeLeft: function() {
                                    t.carousel("next")
                                },
                                swipeRight: function() {
                                    t.carousel("prev")
                                },
                                threshold: 20
                            })
                        }), y(".no-touch .carousel").length) skrollr.init({
                        smoothScrolling: !1,
                        forceHeight: !1
                    }).refresh();
                    y(window).scroll(function() {
                        y(".mkdf-slider .carousel").height() < mkdf.scroll ? y(".mkdf-slider .carousel").addClass("mkdf-disable-slider-header-style-changing") : (y(".mkdf-slider .carousel").removeClass("mkdf-disable-slider-header-style-changing"), N(y(".mkdf-slider .carousel .active"), y(".mkdf-slider .carousel").hasClass("mkdf-header-effect"))), y(".mkdf-slider .carousel").hasClass("mkdf-full-screen") && mkdf.scroll > mkdf.windowHeight && 1e3 < mkdf.windowWidth ? y(".mkdf-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : !y(".mkdf-slider .carousel").hasClass("mkdf-full-screen") && mkdf.scroll > y(".mkdf-slider .carousel").height() && 1e3 < mkdf.windowWidth ? y(".mkdf-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : y(".mkdf-slider .carousel").find(".carousel-inner, .carousel-indicators").show()
                    })
                }
            }
        }
    };

    function N(e, t) {
        if (0 < y(".mkdf-slider .carousel").not(".mkdf-disable-slider-header-style-changing").length) {
            var i = "";
            e.hasClass("light") && (i = "mkdf-light-header"), e.hasClass("dark") && (i = "mkdf-dark-header"), "" !== i ? t && mkdf.body.removeClass("mkdf-dark-header mkdf-light-header").addClass(i) : t && mkdf.body.removeClass("mkdf-dark-header mkdf-light-header").addClass(mkdf.defaultHeaderStyle)
        }
    }
    var Q = mkdf.modules.shortcodes.mkdfInitIconList = function() {
        var e = y(".mkdf-animate-list");
        return {
            init: function() {
                e.length && e.each(function() {
                    var e;
                    e = y(this), setTimeout(function() {
                        e.appear(function() {
                            e.addClass("mkdf-appeared")
                        }, {
                            accX: 0,
                            accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                        })
                    }, 30)
                })
            }
        }
    };

    function U() {
        var e = y(".mkdf-typed");
        e.length && e.each(function() {
            var e, t = y(this),
                i = t.parents(".mkdf-typed-wrap").parents(".mkdf-custom-font-holder"),
                o = i.find(".mkdf-custom-font-original"),
                a = t.find(".mkdf-typed-1").text(),
                d = t.find(".mkdf-typed-2").text(),
                n = t.find(".mkdf-typed-3").text();
            d.trim() && n.trim() || (e = [a]), !n.trim() && d.length && (e = [a, d]), a.length && d.length && n.length && (e = [a, d, n]), -1 != o.text().indexOf("&") && o.html(o.text().replace("&", '<span class="mkdf-amp">&</span>')), setTimeout(function() {
                i.appear(function() {
                    t.typed({
                        strings: e,
                        typeSpeed: 90,
                        backDelay: 700,
                        loop: !0,
                        contentType: "text",
                        loopCount: !1,
                        cursorChar: "_"
                    })
                }, {
                    accX: 0,
                    accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                })
            }, 100)
        })
    }

    function q() {
        var e = y(".mkdf-section-type-out");
        e.length && e.each(function() {
            var e = y(this),
                t = e.find(".mkdf-section-highlighted"),
                i = t.text();
            setTimeout(function() {
                e.appear(function() {
                    t.typed({
                        strings: [i],
                        typeSpeed: 90,
                        backDelay: 700,
                        loop: !0,
                        contentType: "text",
                        loopCount: !1,
                        cursorChar: "_"
                    })
                }, {
                    accX: 0,
                    accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                })
            }, 100)
        })
    }

    function X() {
        var e = y(".mkdf-item-showcase");
        e.length && e.each(function() {
            var t = y(this),
                e = t.find(".mkdf-item-left"),
                i = t.find(".mkdf-item-right"),
                o = t.find(".mkdf-item-image");

            function a(e) {
                t.find(e).each(function(e) {
                    var t = y(this);
                    setTimeout(function() {
                        t.addClass("mkdf-appeared")
                    }, 150 * e)
                })
            }
            e.wrapAll("<div class='mkdf-item-showcase-holder mkdf-holder-left' />"), i.wrapAll("<div class='mkdf-item-showcase-holder mkdf-holder-right' />"), t.animate({
                opacity: 1
            }, 200), setTimeout(function() {
                t.appear(function() {
                    o.addClass("mkdf-appeared"), t.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                        1200 < mkdf.windowWidth ? (a(".mkdf-holder-left .mkdf-item"), a(".mkdf-holder-right .mkdf-item")) : a(".mkdf-item")
                    })
                }, {
                    accX: 0,
                    accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                })
            }, 100)
        })
    }

    function Y() {
        var e = y(".mkdf-section-holder");
        e.length && e.each(function() {
            var e = y(this),
                t = e.find(".mkdf-section-item"),
                i = t.first().outerHeight();
            t.each(function() {
                var e = y(this);
                i < e.outerHeight() && (i = e.outerHeight())
            }), t.each(function() {
                y(this).css("height", i)
            }), e.addClass("mkdf-appeared")
        })
    }

    function K() {
        var e = y(".mkdf-text-slider");
        e.length && e.each(function() {
            var e = y(this),
                t = !0;
            void 0 !== e.data("bullets") && (t = "yes" == e.data("bullets")), e.on("init", function() {
                e.css("visibility", "visible")
            }), e.slick({
                infinite: !0,
                autoplay: !0,
                slidesToShow: 1,
                arrows: !1,
                dots: t,
                dotsClass: "mkdf-slick-numbers",
                adaptiveHeight: !0,
                prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_left"></span></span>',
                nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="arrow_right"></span></span>',
                customPaging: function(e, t) {
                    return '<span class="mkdf-slick-numbers-inner">' + (t + 1) + "</span>"
                },
                easing: "easeInOutQuint",
                speed: 1e3,
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            })
        })
    }

    function Z() {
        var e = y(".mkdf-interactive-items-holder");
        e.length && e.each(function() {
            var e = y(this),
                t = e.find(".mkdf-int-item"),
                i = t.first().outerHeight();
            if (t.each(function() {
                    var e = y(this).outerHeight();
                    i < e && (i = e)
                }), t.each(function() {
                    y(this).css("height", i)
                }), e.hasClass("mkdf-tile-hover-effect") && !mkdf.html.hasClass("touch") && t.each(function() {
                    var e, t, i = y(this),
                        o = !1;
                    i.on("mouseenter", function() {
                        o || (i.addClass("mkdf-hovered"), clearTimeout(t), e = setTimeout(function() {
                            o = !0
                        }, 400))
                    }), i.on("mouseleave", function() {
                        o ? (i.removeClass("mkdf-hovered"), o = !1) : (clearTimeout(e), t = setTimeout(function() {
                            i.removeClass("mkdf-hovered"), o = !1
                        }, 400))
                    })
                }), e.hasClass("mkdf-appear-effect") && !mkdf.html.hasClass("touch"))
                if (e.hasClass("mkdf-one-by-one")) {
                    var o = 0,
                        a = 0;
                    t.each(function() {
                        y(this).parent().offset().top == e.offset().top && o++
                    }), t.appear(function() {
                        var e = y(this);
                        a == o && (a = 0), setTimeout(function() {
                            e.addClass("mkdf-appeared")
                        }, 200 * a), a++
                    }, {
                        accX: 0,
                        accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                    })
                } else e.hasClass("mkdf-randomize") && e.appear(function() {
                    var a = t.length,
                        i = function(e) {
                            for (var t = new Array, i = 0; i < a; i++) {
                                var o = Math.floor(Math.random() * a);
                                0 < jQuery.inArray(o, t) ? --i : t.push(o)
                            }
                            return t
                        }();
                    t.each(function(e) {
                        var t = y(this);
                        setTimeout(function() {
                            t.addClass("mkdf-appeared")
                        }, 70 * i[e])
                    })
                }, {
                    accX: 0,
                    accY: mkdfGlobalVars.vars.mkdfElementAppearAmount
                })
        })
    }

    function J() {
        var e = y(".mkdf-parallax-call-to-action");
        e.length && e.each(function() {
            var e = y(this),
                t = e.find(".mkdf-pcta-content-holder"),
                i = e.find(".mkdf-pcta-images-holder"),
                o = i.find(".mkdf-main-image"),
                a = i.find(".mkdf-additional-image"),
                d = function(e, t) {
                    e.attr("data-parallax", '{"y":' + t + ', "smoothness":20}')
                };
            e.waitForImages({
                finished: function() {
                    mkdf.htmlEl.hasClass("touch") || (d(t, -120), d(o, 100), d(a, -40), setTimeout(function() {
                        ParallaxScroll.init()
                    }, 100))
                },
                waitForAll: !0
            })
        })
    }

    function $() {
        if (mkdf.body.hasClass("mkdf-scroll-to-content") && !mkdf.htmlEl.hasClass("touch")) {
            var e = y(".mkdf-slider"),
                a = e.height(),
                d = e.offset().top,
                n = a - d,
                t = e.find(".rev_slider"),
                s = !1,
                r = !0,
                i = !1,
                o = function() {
                    function o() {
                        s = !0, y("html, body").animate({
                            scrollTop: n
                        }, 1e3, "easeInOutQuint", function() {
                            r = !(s = !1)
                        })
                    }
                    y(window).scrollTop() < n && (r = !1), window.addEventListener("wheel", function(e) {
                        var t = !1,
                            i = !1;
                        t = 0 < e.deltaY, y(window).scrollTop() - d <= Math.round(.5 * a) && (i = !0), s || r ? (r || e.preventDefault(), r && !t && i && (r = s = !1, e.preventDefault())) : t && y(window).scrollTop() < n && (e.preventDefault(), o())
                    }, {
                        passive: !1
                    }), y(document).on("mousedown", function(e) {
                        y(window).outerWidth() <= e.pageX && y(window).scrollTop() == d && (e.preventDefault(), o())
                    })
                };
            window.addEventListener("wheel", function(e) {
                i || e.preventDefault()
            }, {
                passive: !1
            }), window.addEventListener("scroll", function() {
                i || y(window).scrollTop(d)
            }), t.length ? t.bind("revolution.slide.onchange", function(e, t) {
                i = !0, o()
            }) : y(window).load(function() {
                i = !0, o()
            })
        }
    }
}(jQuery),
function(r) {
    "use strict";
    var e = {};

    function t() {
        d(), r(".add_to_cart_button").click(function() {
                r(this).children(".mkdf-btn-text").text(mkdfGlobalVars.vars.mkdfAddingToCart)
            }), n(),
            function() {
                var e = r(".mkdf-single-product-wrapper-top .images .thumbnails a"),
                    i = r(".mkdf-single-product-wrapper-top .images .woocommerce-main-image");
                i.length && i.on("click", function(e) {
                    e.preventDefault(), i.children(".mkdf-fake-featured-image").length && (r(".mkdf-fake-featured-image").stop().animate({
                        opacity: "0"
                    }, 100, function() {
                        r(this).remove()
                    }), i.find("a img").css("opacity", "1"))
                });
                e.length && e.each(function() {
                    var e = r(this),
                        t = e.attr("href");
                    e.on("click", function(e) {
                        e.preventDefault(), "" !== t && "" !== i && (i.append('<img itemprop="image" class="mkdf-fake-featured-image" src="' + t + '" />'), 1 < i.children(".mkdf-fake-featured-image").length && r(".mkdf-fake-featured-image").first().remove(), i.find("a img").css("opacity", "0"))
                    })
                })
            }(),
            function() {
                var e = r(".related.products");
                if (e.length) {
                    var t, i, o = e.find("ul.products"),
                        a = e.find(".mkdf-related-prev"),
                        d = e.find(".mkdf-related-next");
                    o.slick({
                        infinite: !0,
                        slidesToShow: 3,
                        arrows: !0,
                        dots: !1,
                        dotsClass: "mkdf-slick-dots",
                        adaptiveHeight: !0,
                        prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"></span>',
                        nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"></span>',
                        responsive: [{
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: !0
                            }
                        }, {
                            breakpoint: 601,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), t = e.find(".mkdf-slick-prev"), i = e.find(".mkdf-slick-next"), a.click(function() {
                        t.trigger("click")
                    }), d.click(function() {
                        i.trigger("click")
                    })
                }
            }()
    }

    function i() {}

    function o() {}

    function a() {}

    function d() {
        r(document).on("click", ".mkdf-quantity-minus, .mkdf-quantity-plus", function(e) {
            e.stopPropagation();
            var t, i = r(this),
                o = i.parent().siblings(".mkdf-quantity-input"),
                a = parseFloat(o.data("step")),
                d = parseFloat(o.data("max")),
                n = !1,
                s = parseFloat(o.val());
            i.hasClass("mkdf-quantity-minus") && (n = !0), n ? 1 <= (t = s - a) ? o.val(t) : o.val(0) : (t = s + a, void 0 === d ? o.val(t) : d <= t ? o.val(d) : o.val(t)), o.trigger("change")
        })
    }

    function n() {
        (r(".woocommerce-ordering .orderby").length || r("#calc_shipping_country").length) && (r(".woocommerce-ordering .orderby").select2({
            minimumResultsForSearch: 1 / 0
        }), r("#calc_shipping_country, .dropdown_product_cat, .dropdown_layered_nav_color").select2())
    }(mkdf.modules.woocommerce = e).mkdfInitQuantityButtons = d, e.mkdfInitSelect2 = n, e.mkdfOnDocumentReady = t, e.mkdfOnWindowLoad = i, e.mkdfOnWindowResize = o, e.mkdfOnWindowScroll = a, r(document).ready(t), r(window).load(i), r(window).resize(o), r(window).scroll(a)
}(jQuery),
function(h) {
    "use strict";
    var e = {};

    function t() {
        n(), f(), c().init(), l()
    }

    function i() {
        d().init(), m().init()
    }

    function o() {}

    function a() {}(mkdf.modules.portfolio = e).mkdfOnDocumentReady = t, e.mkdfOnWindowLoad = i, e.mkdfOnWindowResize = o, e.mkdfOnWindowScroll = a, e.mkdfPortfolioSingleMasonry = n, e.mkdfPortfolioWideSlider = f, e.mkdfPortfolioRelatedProducts = l, h(document).ready(t), h(window).load(i), h(window).resize(o), h(window).scroll(a);
    var d = function() {
        var t = h(".mkdf-follow-portfolio-info .small-images.mkdf-portfolio-single-holder .mkdf-portfolio-info-holder, .mkdf-follow-portfolio-info .small-slider.mkdf-portfolio-single-holder .mkdf-portfolio-info-holder, .mkdf-follow-portfolio-info .small-masonry.mkdf-portfolio-single-holder .mkdf-portfolio-info-holder, .mkdf-follow-portfolio-info .wide-images.mkdf-portfolio-single-holder .mkdf-portfolio-info-holder, .mkdf-follow-portfolio-info .gallery.mkdf-portfolio-single-holder .mkdf-portfolio-info-holder");
        if (t.length) var e = t.parent(),
            i = e.offset().top,
            o = e.height(),
            a = h(".mkdf-portfolio-media").height(),
            d = h(".header-appear, .mkdf-fixed-wrapper"),
            n = d.length ? d.height() : 0;
        return {
            init: function() {
                ! function() {
                    if (t.length && 1024 < mkdf.windowWidth && o < a && mkdf.scroll > i) {
                        var e = mkdf.scroll - i + mkdfGlobalVars.vars.mkdfAddForAdminBar + n + 20;
                        a < e + o && (e = a - o), t.animate({
                            marginTop: e
                        })
                    }
                }(), h(window).scroll(function() {
                    t.length && 1024 < mkdf.windowWidth && o < a && (mkdf.scroll > i ? mkdf.scroll + n + mkdfGlobalVars.vars.mkdfAddForAdminBar + o + 100 < i + a ? (h(".header-appear, .mkdf-fixed-wrapper").length && (n = h(".header-appear, .mkdf-fixed-wrapper").height()), t.stop().animate({
                        marginTop: mkdf.scroll - i + mkdfGlobalVars.vars.mkdfAddForAdminBar + n + 20
                    }), n = 0) : t.stop().animate({
                        marginTop: a - o
                    }) : t.stop().animate({
                        marginTop: 0
                    }))
                })
            }
        }
    };

    function n() {
        var e = h(".mkdf-portfolio-single-holder.small-masonry .mkdf-portfolio-media, .mkdf-portfolio-single-holder.big-masonry .mkdf-portfolio-media");
        e.length && e.each(function() {
            var e = h(this);
            e.waitForImages(function() {
                r(e.find(".mkdf-single-masonry-grid-sizer").width(), e), s(e)
            }), h(window).resize(function() {
                r(e.find(".mkdf-single-masonry-grid-sizer").width(), e), s(e)
            })
        })
    }

    function s(e) {
        e.animate({
            opacity: 1
        }), e.isotope({
            itemSelector: ".mkdf-portfolio-single-media",
            masonry: {
                columnWidth: ".mkdf-single-masonry-grid-sizer"
            }
        })
    }

    function r(e, t) {
        var i = t.find(".mkdf-default-masonry-item"),
            o = t.find(".mkdf-large-width-masonry-item"),
            a = t.find(".mkdf-large-height-masonry-item"),
            d = t.find(".mkdf-large-width-height-masonry-item");
        i.css("height", e), a.css("height", Math.round(2 * e)), 600 < mkdf.windowWidth ? (d.css("height", Math.round(2 * e)), o.css("height", e)) : (d.css("height", e), o.css("height", Math.round(e / 2)))
    }

    function l() {
        var e = h(".mkdf-portfolio-related-holder");
        if (e.length) {
            var t = e.find(".mkdf-related-prev"),
                i = e.find(".mkdf-related-next"),
                o = e.find(".mkdf-slick-prev"),
                a = e.find(".mkdf-slick-next");
            t.click(function() {
                o.trigger("click")
            }), i.click(function() {
                a.trigger("click")
            })
        }
    }

    function f() {
        var e = h(".mkdf-ptf-wide-slider");
        e.length && e.slick({
            infinite: !0,
            autoplay: !0,
            slidesToShow: 3,
            centerMode: !0,
            arrows: !0,
            dots: !1,
            adaptiveHeight: !0,
            prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="lnr lnr-chevron-left"></span></span>',
            nextArrow: '<span class="mkdf-slick-next mkdf-next-icon"><span class="lnr lnr-chevron-right"></span></span>'
        })
    }
    var m = function() {
            var e = h(".mkdf-portfolio-single-holder.split-screen"),
                i = h(".mkdf-follow-portfolio-info .split-screen.mkdf-portfolio-single-holder .mkdf-portfolio-info-holder");
            if (i.length && mkdf.htmlEl.hasClass("no-touch")) var t = i.parent().offset().top,
                o = i.outerHeight() + 100,
                a = h(".mkdf-portfolio-media"),
                d = a.height(),
                n = h(".mkdf-page-header"),
                s = n.find(".mkdf-fixed-wrapper"),
                r = n.length ? n.height() : 0,
                l = s.length ? s.height() : 0,
                f = r + 15;
            var m = function() {
                    if (i.length && mkdf.htmlEl.hasClass("no-touch")) {
                        var e = n.find(".mkdf-sticky-header");
                        if (e.length)
                            if (e.hasClass("header-appear")) f = mkdfGlobalVars.vars.mkdfStickyHeaderTransparencyHeight + mkdfGlobalVars.vars.mkdfAddForAdminBar + 15;
                            else {
                                var t = 0 < r - mkdf.scroll;
                                f = t ? mkdfGlobalVars.vars.mkdfAddForAdminBar + r - 5 : 24
                            }
                        else s.length && (f = mkdfGlobalVars.vars.mkdfAddForAdminBar + l + 15);
                        i.length && o < d && mkdf.htmlEl.hasClass("no-touch") && i.css("top", f + "px")
                    }
                },
                c = function() {
                    i.length && mkdf.htmlEl.hasClass("no-touch") ? (o = i.outerHeight() + 30, d = a.height(), o < d && mkdf.htmlEl.hasClass("no-touch") && (s.length && (r = l), mkdf.scroll >= t - r - mkdfGlobalVars.vars.mkdfAddForAdminBar ? "fixed" !== i.css("position") && (i.css("position", "fixed"), 0 < mkdf.scroll && (i.addClass("mkdf-animating"), i.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                        i.removeClass("mkdf-animating")
                    }))) : i.css("position", "static"), t + d <= mkdf.scroll + o + f ? i.stop().css("margin-top", t + d - mkdf.scroll - o - f + "px") : i.css("margin-top", "0")), i.hasClass("mkdf-appeared") || i.addClass("mkdf-appeared")) : mkdf.htmlEl.hasClass("touch") && (i.hasClass("mkdf-appeared") || i.addClass("mkdf-appeared"))
                };
            return {
                init: function() {
                    e.length && (i.length && mkdf.htmlEl.hasClass("no-touch") && i.css("width", i.width()), c(), m(), h(window).scroll(function() {
                        c(), m()
                    }), h(window).resize(function() {
                        m(), c()
                    }))
                }
            }
        },
        c = function() {
            var a = h(".mkdf-full-screen-slider-holder"),
                d = h(".mkdf-wrapper .mkdf-content"),
                e = h(".mkdf-portfolio-full-screen-slider"),
                n = h(".full-screen-slider"),
                t = function() {
                    if (a.length) {
                        var e = parseInt(d.css("margin-top")),
                            t = a.find(".mkdf-portfolio-single-media"),
                            i = h(".mkdf-title"),
                            o = mkdf.windowHeight;
                        if (mkdf.body.hasClass("mkdf-passepartout")) o -= 2 * h(".mkdf-passepartout-top").outerHeight();
                        i.length && (o -= i.height()), 1024 < mkdf.windowWidth ? 0 <= e && (o -= mkdfGlobalVars.vars.mkdfMenuAreaHeight) : o -= mkdfGlobalVars.vars.mkdfMobileHeaderHeight, n.css("height", o), a.css("height", o), t.css("height", o)
                    }
                };
            return {
                init: function() {
                    t(), a.length && e.each(function() {
                            var i = h(this);
                            i.on("init", function(e) {
                                i.find(".slick-active.mkdf-portfolio-single-media").hasClass("mkdf-slide-dark-skin") ? i.removeClass("mkdf-slide-light-skin").addClass("mkdf-slide-dark-skin") : i.removeClass("mkdf-slide-dark-skin").addClass("mkdf-slide-light-skin")
                            }), i.on("afterChange", function(e, t) {
                                i.find(".slick-active.mkdf-portfolio-single-media").hasClass("mkdf-slide-dark-skin") ? i.removeClass("mkdf-slide-light-skin").addClass("mkdf-slide-dark-skin") : i.removeClass("mkdf-slide-dark-skin").addClass("mkdf-slide-light-skin")
                            }), i.slick({
                                vertical: !0,
                                verticalSwiping: !0,
                                infinite: !0,
                                slidesToShow: 1,
                                arrows: !0,
                                dots: !1,
                                easing: "easeOutQuart",
                                dotsClass: "mkdf-slick-dots",
                                prevArrow: '<span class="mkdf-slick-prev mkdf-prev-icon"><span class="arrow_up"></span></span>',
                                nextArrow: '<span class="mkdf-slick-next mkdf-prev-icon"><span class="arrow_down"></span></span>',
                                customPaging: function(e, t) {
                                    return '<span class="mkdf-slick-dot-inner"></span>'
                                }
                            }).animate({
                                opacity: 1
                            }, 600)
                        }),
                        function() {
                            if (a.length) {
                                var t = h(".mkdf-portfolio-slider-content"),
                                    e = h(".mkdf-control.mkdf-close"),
                                    i = h(".mkdf-description"),
                                    o = h(".mkdf-portfolio-slider-content-info");
                                t.on("click", function(e) {
                                    e.preventDefault(), t.hasClass("opened") || i.fadeOut(400, function() {
                                        t.addClass("opened"), setTimeout(function() {
                                            o.fadeIn(400)
                                        }, 400), setTimeout(function() {
                                            h(".mkdf-portfolio-slider-content-info").niceScroll({
                                                scrollspeed: 60,
                                                mousescrollstep: 40,
                                                cursorwidth: 0,
                                                cursorborder: 0,
                                                cursorborderradius: 0,
                                                cursorcolor: "transparent",
                                                autohidemode: !1,
                                                horizrailenabled: !1
                                            })
                                        }, 800)
                                    })
                                }), e.on("click", function(e) {
                                    e.preventDefault(), e.stopPropagation(), o.fadeOut(400, function() {
                                        t.removeClass("opened"), setTimeout(function() {
                                            i.fadeIn(400)
                                        }, 400)
                                    })
                                })
                            }
                        }(), h(window).resize(function() {
                            t()
                        })
                }
            }
        }
}(jQuery);