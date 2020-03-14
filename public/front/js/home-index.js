/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=9e12995c18085dd80bf5)
 * Config saved to config.json and https://gist.github.com/9e12995c18085dd80bf5
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function(e) {
            t(e).on("click", i, this.close)
        };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var n = t(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(s);
        e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(a);
            h && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var p = this.getPosition(),
                f = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var d = a,
                    u = this.getPosition(this.$viewport);
                a = "bottom" == a && p.bottom + c > u.bottom ? "top" : "top" == a && p.top - c < u.top ? "bottom" : "right" == a && p.right + f > u.width ? "left" : "left" == a && p.left - f < u.left ? "right" : a, s.removeClass(d).addClass(a)
            }
            var g = this.getCalculatedOffset(a, p, f, c);
            this.applyPlacement(g, a);
            var v = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            r = parseInt(o.css("margin-top"), 10),
            a = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var p = this.getViewportAdjustedDelta(i, e, l, h);
        p.left ? e.left += p.left : e.top += p.top;
        var f = /top|bottom/.test(i),
            c = f ? 2 * p.left - n + l : 2 * p.top - s + h,
            d = f ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][d], f)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, r, a, s)
    }, i.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + o;
            a < r.top ? n.top = r.top - a : l > r.top + r.height && (n.top = r.top + r.height - l)
        } else {
            var h = e.left - s,
                p = e.left + s + i;
            h < r.left ? n.left = r.left - h : p > r.right && (n.left = r.left + r.width - p)
        }
        return n
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.popover"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = o, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(o);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, o, n) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var r = o.find("> .active"),
            a = n && t.support.transition && (r.length && r.hasClass("fade") || !!o.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = o, this
    };
    var n = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.affix"),
                s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + r ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? n : s.top,
            h = a ? r : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                n = o.top,
                s = o.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var a = this.getState(r, e, n, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - s
            })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = o, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
        toggle: !0
    }, o.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n),
            r = s.data("bs.collapse"),
            a = r ? "toggle" : n.data();
        i.call(s, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) r != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var n = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);

/* Plugins */
/*

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});

/*Easy video background jquery plugin

 */

(function() {
    function h() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") ? parseInt(a.split("msie")[1]) : !1
    }
    if (void 0 == jQuery) console.log("Jquery not included!");
    else if (void 0 == Modernizr.video) console.log("Modernizr not included!");
    else {
        var b = jQuery,
            k = h(),
            g = 0,
            e = 0;
        jQuery.fn.extend({
            ensureLoad: function(a) {
                return this.each(function() {
                    this.complete || 4 === this.readyState ? a.call(this) : "uninitialized" === this.readyState && 0 === this.src.indexOf("data:") ? (b(this).trigger("error"), a.call(this)) :

                        (b(this).one("load", a), k && (void 0 != this.src && -1 == this.src.indexOf("?")) && (this.src = this.src + "?" + (new Date).getTime()))
                })
            }
        });
        video_background = function(a, f) {
            this.hidden = !1;
            this.$holder = a;
            this.id = "video_background_video_" + g;
            g++;
            this.parameters = {
                position: "absolute",
                "z-index": "-1",
                video_ratio: !1,
                loop: !0,
                autoplay: !0,
                muted: !1,
                mp4: !1,
                webm: !1,
                ogg: !1,
                flv: !1,
                youtube: !1,
                priority: "html5",
                fallback_image: !1,
                sizing: "fill",
                start: 0
            };
            b.each(f, b.proxy(function(a, b) {
                this.parameters[a] = b
            }, this));
            this.$video_holder = b('<div id="' +

                this.id + '"></div>').appendTo(a).css({
                "z-index": this.parameters["z-index"],
                position: this.parameters.position,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden"
            });
            this.ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
            this.supports_flash = 9 < swfobject.getFlashPlayerVersion().major && (!1 !== this.parameters.mp4 || !1 !== this.parameters.flv);
            this.supports_video = Modernizr.video && (Modernizr.video.h264 && !1 !== this.parameters.mp4 || Modernizr.video.ogg && !1 !== this.parameters.ogg || Modernizr.video.webm &&

                !1 !== this.parameters.webm);
            this.decision = "image";
            this.ismobile || !this.supports_flash && !this.supports_video && !1 === this.parameters.youtube || (this.decision = this.parameters.priority, !1 !== this.parameters.youtube ? this.decision = "youtube" : "flash" == this.parameters.priority && this.supports_flash ? this.decision = "flash" : "html5" == this.parameters.priority && this.supports_video ? this.decision = "html5" : this.supports_flash ? this.decision = "flash" : this.supports_video && (this.decision = "html5"));
            "image" == this.decision ? this.make_image() :

                "youtube" == this.decision ? this.make_youtube() : "html5" == this.decision ? this.make_video() : this.make_flash();
            return this
        };
        video_background.prototype = {
            make_video: function() {
                var a = '<video width="100%" height="100%" ' + ((this.parameters.autoplay ? "autoplay " : "") + (this.parameters.loop ? 'loop onended="this.play()" ' : "")) + ">";
                !1 !== this.parameters.mp4 && (a += '<source src="' + this.parameters.mp4 + '" type="video/mp4"></source>');
                !1 !== this.parameters.webm && (a += '<source src="' + this.parameters.webm + '" type="video/webm"></source>');

                !1 !== this.parameters.ogg && (a += '<source src="' + this.parameters.ogg + '" type="video/ogg"></source>');
                this.$video = b(a + "</video>").css({
                    position: "absolute"
                });
                this.$video_holder.append(this.$video);
                this.video = this.$video.get(0);
                !1 !== this.parameters.video_ratio && (this.resize_timeout = !1, b(window).resize(b.proxy(function() {
                    clearTimeout(this.resize_timeout);
                    this.resize_timeout = setTimeout(b.proxy(this.video_resize, this), 10)
                }, this)), this.video_resize());
                this.parameters.muted && this.mute()
            },
            video_resize: function() {
                var a =

                    this.$video_holder.width(),
                    b = this.$video_holder.height(),
                    c = a,
                    d = a / this.parameters.video_ratio;
                d < b && (d = b, c = b * this.parameters.video_ratio);
                d = Math.ceil(d);
                c = Math.ceil(c);
                b = Math.round(b / 2 - d / 2);
                a = Math.round(a / 2 - c / 2);
                this.$video.attr("width", c);
                this.$video.attr("height", d);
                this.$video.css({
                    top: b + "px",
                    left: a + "px"
                })
            },
            make_youtube: function() {
                var a = b("html");
                this.$video = b('<div id="' + this.id + '_yt"></div>').appendTo(this.$video_holder).css({
                    position: "absolute"
                });
                this.youtube_ready = !1;
                if (0 == e) {
                    var f = document.createElement("script");

                    f.src = "https://www.youtube.com/iframe_api";
                    var c = document.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(f, c);
                    e = 1;
                    window.onYouTubeIframeAPIReady = b.proxy(function() {
                        a.trigger("yt_loaded");
                        this.build_youtube();
                        e = 2
                    }, this)
                } else 1 == e ? a.bind("yt_loaded", b.proxy(this.build_youtube, this)) : 2 == e && this.build_youtube()
            },
            build_youtube: function() {
                var a = {
                    loop: this.parameters.loop ? 1 : 0,
                    start: this.parameters.start,
                    autoplay: this.parameters.autoplay ? 1 : 0,
                    controls: 0,
                    showinfo: 0,
                    wmode: "transparent",
                    iv_load_policy: 3,

                    modestbranding: 1,
                    rel: 0
                };
                this.parameters.loop && (a.playlist = this.parameters.youtube);
                this.player = new YT.Player(this.id + "_yt", {
                    height: "100%",
                    width: "100%",
                    playerVars: a,
                    videoId: this.parameters.youtube,
                    events: {
                        onReady: b.proxy(this.youtube_ready_fun, this)
                    }
                })
            },
            youtube_ready_fun: function(a) {
                this.youtube_ready = !0;
                this.$video = b("#" + this.id + "_yt");
                !1 !== this.parameters.video_ratio && (this.resize_timeout = !1, b(window).resize(b.proxy(function() {
                    clearTimeout(this.resize_timeout);
                    this.resize_timeout = setTimeout(b.proxy(this.video_resize,

                        this), 10)
                }, this)), this.video_resize());
                this.parameters.muted && this.mute()
            },
            make_flash: function() {
                var a = {
                    url: !1 != this.parameters.mp4 ? this.parameters.mp4 : this.parameters.flv,
                    loop: this.parameters.loop,
                    autoplay: this.parameters.autoplay,
                    muted: this.parameters.muted
                };
                this.$video_holder.append('<div id="' + this.id + '_flash"></div>');
                swfobject.embedSWF("flash/video.swf", this.id + "_flash", "100%", "100%", "9.0", null, a, {
                        allowfullscreen: !0,
                        allowScriptAccess: "always",
                        wmode: "transparent"
                    }, {
                        name: "background-video-swf"
                    },

                    b.proxy(this.flash_callback, this))
            },
            flash_callback: function(a) {
                this.video = b(a.target).get(0);
                this.parameters.muted && this.mute()
            },
            make_image: function() {
                !1 !== this.parameters.fallback_image && (this.$img = b('<img src="' + this.parameters.fallback_image + '" alt=""/>').appendTo(this.$video_holder).css({
                    position: "absolute"
                }), this.$img.ensureLoad(b.proxy(this.image_loaded, this)))
            },
            image_loaded: function() {
                this.original_width = this.$img.width();
                this.original_height = this.$img.height();
                this.resize_timeout = !1;
                b(window).resize(b.proxy(function() {
                    clearTimeout(this.resize_timeout);

                    this.resize_timeout = setTimeout(b.proxy(this.image_resize, this), 10)
                }, this));
                this.image_resize()
            },
            image_resize: function() {
                var a = this.$video_holder.width(),
                    b = this.$video_holder.height(),
                    c = a,
                    d = this.original_height / (this.original_width / a);
                if ("adjust" == this.parameters.sizing && d > b || "fill" == this.parameters.sizing && d < b) d = b, c = this.original_width / (this.original_height / b);
                d = Math.ceil(d);
                c = Math.ceil(c);
                b = Math.round(b / 2 - d / 2);
                a = Math.round(a / 2 - c / 2);
                this.$img.css({
                    width: c + "px",
                    height: d + "px",
                    top: b + "px",
                    left: a + "px"
                })
            },

            isPlaying: function() {
                return "html5" == this.decision ? !this.video.paused : "flash" == this.decision ? video.isPlaying() : "youtube" == this.decision && this.youtube_ready ? 1 === this.player.getPlayerState() : !1
            },
            play: function() {
                "html5" == this.decision ? this.video.play() : "flash" == this.decision ? this.video.resume() : "youtube" == this.decision && this.youtube_ready && this.player.playVideo()
            },
            pause: function() {
                "html5" == this.decision || "flash" == this.decision ? this.video.pause() : "youtube" == this.decision && this.youtube_ready && this.player.pauseVideo()
            },

            toggle_play: function() {
                this.isPlaying() ? this.pause() : this.play()
            },
            isMuted: function() {
                return "html5" == this.decision ? !this.video.volume : "flash" == this.decision ? video.isMute() : "youtube" == this.decision && this.youtube_ready ? this.player.isMuted() : !1
            },
            mute: function() {
                "html5" == this.decision ? this.video.volume = 0 : "flash" == this.decision ? this.video.mute() : "youtube" == this.decision && this.youtube_ready && this.player.mute()
            },
            unmute: function() {
                "html5" == this.decision ? this.video.volume = 1 : "flash" == this.decision ? this.video.unmute() :

                    "youtube" == this.decision && this.youtube_ready && this.player.unMute()
            },
            toggle_mute: function() {
                this.isMuted() ? this.unmute() : this.mute()
            },
            hide: function() {
                this.pause();
                this.$video_holder.stop().fadeTo(700, 0);
                this.hidden = !0
            },
            show: function() {
                this.play();
                this.$video_holder.stop().fadeTo(700, 1);
                this.hidden = !1
            },
            toogle_hidden: function() {
                this.hidden ? this.show() : this.hide()
            },
            rewind: function() {
                "html5" == this.decision ? this.video.currentTime = 0 : "flash" == this.decision ? this.video.rewind() : "youtube" == this.decision && this.youtube_ready &&

                    this.player.seekTo(0)
            }
        }
    }
})(void 0);



/* SWF Object */

var swfobject = function() {
    function x() {
        if (!v) {
            try {
                var a = d.getElementsByTagName("body")[0].appendChild(d.createElement("span"));
                a.parentNode.removeChild(a)
            } catch (b) {
                return
            }
            v = !0;
            for (var a = A.length, c = 0; c < a; c++) A[c]()
        }
    }

    function O(a) {
        v ? a() : A[A.length] = a
    }

    function P(a) {
        if (typeof p.addEventListener != k) p.addEventListener("load", a, !1);
        else if (typeof d.addEventListener != k) d.addEventListener("load", a, !1);
        else if (typeof p.attachEvent != k) X(p, "onload", a);
        else if ("function" == typeof p.onload) {
            var b = p.onload;
            p.onload =

                function() {
                    b();
                    a()
                }
        } else p.onload = a
    }

    function Y() {
        var a = d.getElementsByTagName("body")[0],
            b = d.createElement(u);
        b.setAttribute("type", B);
        var c = a.appendChild(b);
        if (c) {
            var f = 0;
            (function() {
                if (typeof c.GetVariable != k) {
                    var g = c.GetVariable("$version");
                    g && (g = g.split(" ")[1].split(","), e.pv = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)])
                } else if (10 > f) {
                    f++;
                    setTimeout(arguments.callee, 10);
                    return
                }
                a.removeChild(b);
                c = null;
                G()
            })()
        } else G()
    }

    function G() {
        var a = s.length;
        if (0 < a)
            for (var b = 0; b < a; b++) {
                var c = s[b].id,

                    f = s[b].callbackFn,
                    g = {
                        success: !1,
                        id: c
                    };
                if (0 < e.pv[0]) {
                    var d = q(c);
                    if (d)
                        if (!C(s[b].swfVersion) || e.wk && 312 > e.wk)
                            if (s[b].expressInstall && H()) {
                                g = {};
                                g.data = s[b].expressInstall;
                                g.width = d.getAttribute("width") || "0";
                                g.height = d.getAttribute("height") || "0";
                                d.getAttribute("class") && (g.styleclass = d.getAttribute("class"));
                                d.getAttribute("align") && (g.align = d.getAttribute("align"));
                                for (var h = {}, d = d.getElementsByTagName("param"), l = d.length, m = 0; m < l; m++) "movie" != d[m].getAttribute("name").toLowerCase() && (h[d[m].getAttribute("name")] =

                                    d[m].getAttribute("value"));
                                I(g, h, c, f)
                            } else Z(d), f && f(g);
                    else w(c, !0), f && (g.success = !0, g.ref = J(c), f(g))
                } else w(c, !0), f && ((c = J(c)) && typeof c.SetVariable != k && (g.success = !0, g.ref = c), f(g))
            }
    }

    function J(a) {
        var b = null;
        (a = q(a)) && "OBJECT" == a.nodeName && (typeof a.SetVariable != k ? b = a : (a = a.getElementsByTagName(u)[0]) && (b = a));
        return b
    }

    function H() {
        return !D && C("6.0.65") && (e.win || e.mac) && !(e.wk && 312 > e.wk)
    }

    function I(a, b, c, f) {
        D = !0;
        K = f || null;
        Q = {
            success: !1,
            id: c
        };
        var g = q(c);
        if (g) {
            "OBJECT" == g.nodeName ? (z = L(g), E = null) :

                (z = g, E = c);
            a.id = R;
            if (typeof a.width == k || !/%$/.test(a.width) && 310 > parseInt(a.width, 10)) a.width = "310";
            if (typeof a.height == k || !/%$/.test(a.height) && 137 > parseInt(a.height, 10)) a.height = "137";
            d.title = d.title.slice(0, 47) + " - Flash Player Installation";
            f = e.ie && e.win ? "ActiveX" : "PlugIn";
            f = "MMredirectURL=" + p.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + d.title;
            b.flashvars = typeof b.flashvars != k ? b.flashvars + ("&" + f) : f;
            e.ie && (e.win && 4 != g.readyState) && (f = d.createElement("div"), c += "SWFObjectNew",

                f.setAttribute("id", c), g.parentNode.insertBefore(f, g), g.style.display = "none",
                function() {
                    4 == g.readyState ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10)
                }());
            M(a, b, c)
        }
    }

    function Z(a) {
        if (e.ie && e.win && 4 != a.readyState) {
            var b = d.createElement("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(L(a), b);
            a.style.display = "none";
            (function() {
                4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
            })()
        } else a.parentNode.replaceChild(L(a), a)
    }

    function L(a) {
        var b = d.createElement("div");

        if (e.win && e.ie) b.innerHTML = a.innerHTML;
        else if (a = a.getElementsByTagName(u)[0])
            if (a = a.childNodes)
                for (var c = a.length, f = 0; f < c; f++) 1 == a[f].nodeType && "PARAM" == a[f].nodeName || 8 == a[f].nodeType || b.appendChild(a[f].cloneNode(!0));
        return b
    }

    function M(a, b, c) {
        var f, g = q(c);
        if (e.wk && 312 > e.wk) return f;
        if (g)
            if (typeof a.id == k && (a.id = c), e.ie && e.win) {
                var r = "",
                    h;
                for (h in a) a[h] != Object.prototype[h] && ("data" == h.toLowerCase() ? b.movie = a[h] : "styleclass" == h.toLowerCase() ? r += ' class="' + a[h] + '"' : "classid" != h.toLowerCase() &&

                    (r += " " + h + '="' + a[h] + '"'));
                h = "";
                for (var l in b) b[l] != Object.prototype[l] && (h += '<param name="' + l + '" value="' + b[l] + '" />');
                g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + h + "</object>";
                F[F.length] = a.id;
                f = q(a.id)
            } else {
                l = d.createElement(u);
                l.setAttribute("type", B);
                for (var m in a) a[m] != Object.prototype[m] && ("styleclass" == m.toLowerCase() ? l.setAttribute("class", a[m]) : "classid" != m.toLowerCase() && l.setAttribute(m, a[m]));
                for (r in b) b[r] != Object.prototype[r] && "movie" != r.toLowerCase() &&

                    (a = l, h = r, m = b[r], c = d.createElement("param"), c.setAttribute("name", h), c.setAttribute("value", m), a.appendChild(c));
                g.parentNode.replaceChild(l, g);
                f = l
            }
        return f
    }

    function S(a) {
        var b = q(a);
        b && "OBJECT" == b.nodeName && (e.ie && e.win ? (b.style.display = "none", function() {
            if (4 == b.readyState) {
                var c = q(a);
                if (c) {
                    for (var f in c) "function" == typeof c[f] && (c[f] = null);
                    c.parentNode.removeChild(c)
                }
            } else setTimeout(arguments.callee, 10)
        }()) : b.parentNode.removeChild(b))
    }

    function q(a) {
        var b = null;
        try {
            b = d.getElementById(a)
        } catch (c) {}
        return b
    }

    function X(a, b, c) {
        a.attachEvent(b, c);
        y[y.length] = [a, b, c]
    }

    function C(a) {
        var b = e.pv;
        a = a.split(".");
        a[0] = parseInt(a[0], 10);
        a[1] = parseInt(a[1], 10) || 0;
        a[2] = parseInt(a[2], 10) || 0;
        return b[0] > a[0] || b[0] == a[0] && b[1] > a[1] || b[0] == a[0] && b[1] == a[1] && b[2] >= a[2] ? !0 : !1
    }

    function T(a, b, c, f) {
        if (!e.ie || !e.mac) {
            var g = d.getElementsByTagName("head")[0];
            g && (c = c && "string" == typeof c ? c : "screen", f && (N = n = null), n && N == c || (f = d.createElement("style"), f.setAttribute("type", "text/css"), f.setAttribute("media", c), n = g.appendChild(f),

                e.ie && (e.win && typeof d.styleSheets != k && 0 < d.styleSheets.length) && (n = d.styleSheets[d.styleSheets.length - 1]), N = c), e.ie && e.win ? n && typeof n.addRule == u && n.addRule(a, b) : n && typeof d.createTextNode != k && n.appendChild(d.createTextNode(a + " {" + b + "}")))
        }
    }

    function w(a, b) {
        if (U) {
            var c = b ? "visible" : "hidden";
            v && q(a) ? q(a).style.visibility = c : T("#" + a, "visibility:" + c)
        }
    }

    function V(a) {
        return null != /[\\\"<>\.;]/.exec(a) && typeof encodeURIComponent != k ? encodeURIComponent(a) : a
    }
    var k = "undefined",
        u = "object",
        B = "application/x-shockwave-flash",

        R = "SWFObjectExprInst",
        p = window,
        d = document,
        t = navigator,
        W = !1,
        A = [function() {
            W ? Y() : G()
        }],
        s = [],
        F = [],
        y = [],
        z, E, K, Q, v = !1,
        D = !1,
        n, N, U = !0,
        e = function() {
            var a = typeof d.getElementById != k && typeof d.getElementsByTagName != k && typeof d.createElement != k,
                b = t.userAgent.toLowerCase(),
                c = t.platform.toLowerCase(),
                f = c ? /win/.test(c) : /win/.test(b),
                c = c ? /mac/.test(c) : /mac/.test(b),
                b = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                g = !+"\v1",
                e = [0, 0, 0],
                h = null;
            if (typeof t.plugins != k && typeof t.plugins["Shockwave Flash"] ==

                u) !(h = t.plugins["Shockwave Flash"].description) || typeof t.mimeTypes != k && t.mimeTypes[B] && !t.mimeTypes[B].enabledPlugin || (W = !0, g = !1, h = h.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), e[0] = parseInt(h.replace(/^(.*)\..*$/, "$1"), 10), e[1] = parseInt(h.replace(/^.*\.(.*)\s.*$/, "$1"), 10), e[2] = /[a-zA-Z]/.test(h) ? parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof p.ActiveXObject != k) try {
                var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                l && (h = l.GetVariable("$version")) && (g = !0, h = h.split(" ")[1].split(","),

                    e = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)])
            } catch (m) {}
            return {
                w3: a,
                pv: e,
                wk: b,
                ie: g,
                win: f,
                mac: c
            }
        }();
    (function() {
        e.w3 && ((typeof d.readyState != k && "complete" == d.readyState || typeof d.readyState == k && (d.getElementsByTagName("body")[0] || d.body)) && x(), v || (typeof d.addEventListener != k && d.addEventListener("DOMContentLoaded", x, !1), e.ie && e.win && (d.attachEvent("onreadystatechange", function() {
            "complete" == d.readyState && (d.detachEvent("onreadystatechange", arguments.callee), x())
        }), p == top && function() {
            if (!v) {
                try {
                    d.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(arguments.callee,

                        0);
                    return
                }
                x()
            }
        }()), e.wk && function() {
            v || (/loaded|complete/.test(d.readyState) ? x() : setTimeout(arguments.callee, 0))
        }(), P(x)))
    })();
    (function() {
        e.ie && e.win && window.attachEvent("onunload", function() {
            for (var a = y.length, b = 0; b < a; b++) y[b][0].detachEvent(y[b][1], y[b][2]);
            a = F.length;
            for (b = 0; b < a; b++) S(F[b]);
            for (var c in e) e[c] = null;
            e = null;
            for (var f in swfobject) swfobject[f] = null;
            swfobject = null
        })
    })();
    return {
        registerObject: function(a, b, c, f) {
            if (e.w3 && a && b) {
                var d = {};
                d.id = a;
                d.swfVersion = b;
                d.expressInstall = c;
                d.callbackFn =

                    f;
                s[s.length] = d;
                w(a, !1)
            } else f && f({
                success: !1,
                id: a
            })
        },
        getObjectById: function(a) {
            if (e.w3) return J(a)
        },
        embedSWF: function(a, b, c, d, g, r, h, l, m, p) {
            var q = {
                success: !1,
                id: b
            };
            e.w3 && !(e.wk && 312 > e.wk) && a && b && c && d && g ? (w(b, !1), O(function() {
                c += "";
                d += "";
                var e = {};
                if (m && typeof m === u)
                    for (var n in m) e[n] = m[n];
                e.data = a;
                e.width = c;
                e.height = d;
                n = {};
                if (l && typeof l === u)
                    for (var s in l) n[s] = l[s];
                if (h && typeof h === u)
                    for (var t in h) n.flashvars = typeof n.flashvars != k ? n.flashvars + ("&" + t + "=" + h[t]) : t + "=" + h[t];
                if (C(g)) s = M(e, n, b), e.id ==

                    b && w(b, !0), q.success = !0, q.ref = s;
                else {
                    if (r && H()) {
                        e.data = r;
                        I(e, n, b, p);
                        return
                    }
                    w(b, !0)
                }
                p && p(q)
            })) : p && p(q)
        },
        switchOffAutoHideShow: function() {
            U = !1
        },
        ua: e,
        getFlashPlayerVersion: function() {
            return {
                major: e.pv[0],
                minor: e.pv[1],
                release: e.pv[2]
            }
        },
        hasFlashPlayerVersion: C,
        createSWF: function(a, b, c) {
            if (e.w3) return M(a, b, c)
        },
        showExpressInstall: function(a, b, c, d) {
            e.w3 && H() && I(a, b, c, d)
        },
        removeSWF: function(a) {
            e.w3 && S(a)
        },
        createCSS: function(a, b, c, d) {
            e.w3 && T(a, b, c, d)
        },
        addDomLoadEvent: O,
        addLoadEvent: P,
        getQueryParamValue: function(a) {
            var b =

                d.location.search || d.location.hash;
            if (b) {
                /\?/.test(b) && (b = b.split("?")[1]);
                if (null == a) return V(b);
                for (var b = b.split("&"), c = 0; c < b.length; c++)
                    if (b[c].substring(0, b[c].indexOf("=")) == a) return V(b[c].substring(b[c].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (D) {
                var a = q(R);
                a && z && (a.parentNode.replaceChild(z, a), E && (w(E, !0), e.ie && e.win && (z.style.display = "block")), K && K(Q));
                D = !1
            }
        }
    }
}();




/*

 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/

 *

 * Uses the built in easing capabilities added In jQuery 1.1

 * to offer multiple easing options

 *

 * TERMS OF USE - jQuery Easing

 * 

 * Open source under the BSD License. 

 * 

 * Copyright Â© 2008 George McGinley Smith

 * All rights reserved.

 * 

 * Redistribution and use in source and binary forms, with or without modification, 

 * are permitted provided that the following conditions are met:

 * 

 * Redistributions of source code must retain the above copyright notice, this list of 

 * conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this list 

 * of conditions and the following disclaimer in the documentation and/or other materials 

 * provided with the distribution.

 * 

 * Neither the name of the author nor the names of contributors may be used to endorse 

 * or promote products derived from this software without specific prior written permission.

 * 

 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 

 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF

 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE

 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,

 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE

 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 

 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING

 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 

 * OF THE POSSIBILITY OF SUCH DAMAGE. 

 *

*/



// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.easing['jswing'] = jQuery.easing['swing'];



jQuery.extend(jQuery.easing,

    {

        def: 'easeOutQuad',

        swing: function(x, t, b, c, d) {

            //alert(jQuery.easing.default);

            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);

        },

        easeInQuad: function(x, t, b, c, d) {

            return c * (t /= d) * t + b;

        },

        easeOutQuad: function(x, t, b, c, d) {

            return -c * (t /= d) * (t - 2) + b;

        },

        easeInOutQuad: function(x, t, b, c, d) {

            if ((t /= d / 2) < 1) return c / 2 * t * t + b;

            return -c / 2 * ((--t) * (t - 2) - 1) + b;

        },

        easeInCubic: function(x, t, b, c, d) {

            return c * (t /= d) * t * t + b;

        },

        easeOutCubic: function(x, t, b, c, d) {

            return c * ((t = t / d - 1) * t * t + 1) + b;

        },

        easeInOutCubic: function(x, t, b, c, d) {

            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;

            return c / 2 * ((t -= 2) * t * t + 2) + b;

        },

        easeInQuart: function(x, t, b, c, d) {

            return c * (t /= d) * t * t * t + b;

        },

        easeOutQuart: function(x, t, b, c, d) {

            return -c * ((t = t / d - 1) * t * t * t - 1) + b;

        },

        easeInOutQuart: function(x, t, b, c, d) {

            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;

            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;

        },

        easeInQuint: function(x, t, b, c, d) {

            return c * (t /= d) * t * t * t * t + b;

        },

        easeOutQuint: function(x, t, b, c, d) {

            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;

        },

        easeInOutQuint: function(x, t, b, c, d) {

            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;

            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;

        },

        easeInSine: function(x, t, b, c, d) {

            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;

        },

        easeOutSine: function(x, t, b, c, d) {

            return c * Math.sin(t / d * (Math.PI / 2)) + b;

        },

        easeInOutSine: function(x, t, b, c, d) {

            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;

        },

        easeInExpo: function(x, t, b, c, d) {

            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;

        },

        easeOutExpo: function(x, t, b, c, d) {

            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;

        },

        easeInOutExpo: function(x, t, b, c, d) {

            if (t == 0) return b;

            if (t == d) return b + c;

            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;

            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;

        },

        easeInCirc: function(x, t, b, c, d) {

            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;

        },

        easeOutCirc: function(x, t, b, c, d) {

            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;

        },

        easeInOutCirc: function(x, t, b, c, d) {

            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;

            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;

        },

        easeInElastic: function(x, t, b, c, d) {

            var s = 1.70158;
            var p = 0;
            var a = c;

            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;

            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);

            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;

        },

        easeOutElastic: function(x, t, b, c, d) {

            var s = 1.70158;
            var p = 0;
            var a = c;

            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;

            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);

            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;

        },

        easeInOutElastic: function(x, t, b, c, d) {

            var s = 1.70158;
            var p = 0;
            var a = c;

            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);

            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);

            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;

            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;

        },

        easeInBack: function(x, t, b, c, d, s) {

            if (s == undefined) s = 1.70158;

            return c * (t /= d) * t * ((s + 1) * t - s) + b;

        },

        easeOutBack: function(x, t, b, c, d, s) {

            if (s == undefined) s = 1.70158;

            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;

        },

        easeInOutBack: function(x, t, b, c, d, s) {

            if (s == undefined) s = 1.70158;

            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;

            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;

        },

        easeInBounce: function(x, t, b, c, d) {

            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;

        },

        easeOutBounce: function(x, t, b, c, d) {

            if ((t /= d) < (1 / 2.75)) {

                return c * (7.5625 * t * t) + b;

            } else if (t < (2 / 2.75)) {

                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;

            } else if (t < (2.5 / 2.75)) {

                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;

            } else {

                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;

            }

        },

        easeInOutBounce: function(x, t, b, c, d) {

            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;

            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;

        }

    });



/*

 *

 * TERMS OF USE - EASING EQUATIONS

 * 

 * Open source under the BSD License. 

 * 

 * Copyright Â© 2001 Robert Penner

 * All rights reserved.

 * 

 * Redistribution and use in source and binary forms, with or without modification, 

 * are permitted provided that the following conditions are met:

 * 

 * Redistributions of source code must retain the above copyright notice, this list of 

 * conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this list 

 * of conditions and the following disclaimer in the documentation and/or other materials 

 * provided with the distribution.

 * 

 * Neither the name of the author nor the names of contributors may be used to endorse 

 * or promote products derived from this software without specific prior written permission.

 * 

 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 

 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF

 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE

 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,

 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE

 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 

 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING

 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 

 * OF THE POSSIBILITY OF SUCH DAMAGE. 

 *

 */



/*!

* imagesLoaded PACKAGED v3.1.4

* JavaScript is all like "You images are done yet or what?"

* MIT License

*/

(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(this, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function c(e) {
            this.img = e
        }

        function f(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                    var s = i[r];
                    this.addImage(s)
                }
            }
        }, s.prototype.addImage = function(e) {
            var t = new c(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), c.prototype = new t, c.prototype.check = function() {
            var e = v[this.img.src] || new f(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, c.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return f.prototype = new t, f.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, f.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, f.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, f.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, f.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, f.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });




/**

 * h5Validate

 * @version v0.9.0

 * Using semantic versioning: http://semver.org/

 * @author Eric Hamilton http://ericleads.com/

 * @copyright 2010 - 2012 Eric Hamilton

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl.html

 *

 * Developed under the sponsorship of RootMusic, Zumba Fitness, LLC, and Rese Property Management

 */

(function(e) {
    "use strict";
    var t = window.console || function() {},
        n = {
            defaults: {
                debug: false,
                RODom: false,
                patternLibrary: {
                    phone: /([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{1,6}[\)])?([0-9A-Za-z \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)/,
                    email: /((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?/,
                    url: /(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
                    number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,
                    dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,
                    alpha: /[a-zA-Z]+/,
                    alphaNumeric: /\w+/,
                    integer: /-?\d+/
                },
                classPrefix: "h5-",
                errorClass: "ui-state-error",
                validClass: "ui-state-valid",
                activeClass: "active",
                requiredClass: "required",
                requiredAttribute: "required",
                patternAttribute: "pattern",
                errorAttribute: "data-h5-errorid",
                customEvents: {
                    validate: true
                },
                kbSelectors: ":input:not(:button):not(:disabled):not(.novalidate)",
                focusout: true,
                focusin: false,
                change: true,
                keyup: false,
                activeKeyup: true,
                mSelectors: '[type="range"]:not(:disabled):not(.novalidate), :radio:not(:disabled):not(.novalidate), :checkbox:not(:disabled):not(.novalidate), select:not(:disabled):not(.novalidate), option:not(:disabled):not(.novalidate)',
                click: true,
                requiredVar: "h5-required",
                patternVar: "h5-pattern",
                stripMarkup: true,
                submit: true,
                focusFirstInvalidElementOnSubmit: true,
                validateOnSubmit: true,
                invalidCallback: function() {},
                validCallback: function() {},
                allValidSelectors: ":input:visible:not(:button):not(:disabled):not(.novalidate)",
                markInvalid: function(n) {
                    var r = e(n.element),
                        i = e(n.errorID);
                    r.addClass(n.errorClass).removeClass(n.validClass);
                    r.addClass(n.settings.activeClass);
                    if (i.length) {
                        if (r.attr("title")) {
                            i.text(r.attr("title"))
                        }
                        i.show()
                    }
                    r.data("valid", false);
                    n.settings.invalidCallback.call(n.element, n.validity);
                    return r
                },
                markValid: function(n) {
                    var r = e(n.element),
                        i = e(n.errorID);
                    r.addClass(n.validClass).removeClass(n.errorClass);
                    if (i.length) {
                        i.hide()
                    }
                    r.data("valid", true);
                    n.settings.validCallback.call(n.element, n.validity);
                    return r
                },
                unmark: function(n) {
                    var r = e(n.element);
                    r.removeClass(n.errorClass).removeClass(n.validClass);
                    r.form.find("#" + n.element.id).removeClass(n.errorClass).removeClass(n.validClass);
                    return r
                }
            }
        },
        r = n.defaults,
        i = r.patternLibrary,
        s = function(n) {
            return e.extend({
                customError: n.customError || false,
                patternMismatch: n.patternMismatch || false,
                rangeOverflow: n.rangeOverflow || false,
                rangeUnderflow: n.rangeUnderflow || false,
                stepMismatch: n.stepMismatch || false,
                tooLong: n.tooLong || false,
                typeMismatch: n.typeMismatch || false,
                valid: n.valid || true,
                valueMissing: n.valueMissing || false
            }, n)
        },
        o = {
            isValid: function(t, n) {
                var r = e(this);
                n = t && n || {};
                if (n.revalidate !== false) {
                    r.trigger("validate")
                }
                return r.data("valid")
            },
            allValid: function(t, n) {
                var r = true,
                    i = [],
                    s = e(this),
                    o, u, a = [],
                    f = function(t, n) {
                        n.e = t;
                        i.push(n)
                    },
                    l = e.extend({}, t, n);
                n = n || {};
                s.trigger("formValidate", {
                    settings: e.extend(true, {}, l)
                });
                s.undelegate(l.allValidSelectors, ".allValid", f);
                s.delegate(l.allValidSelectors, "validated.allValid", f);
                o = s.find(l.allValidSelectors);
                u = o.filter(function(e) {
                    var t;
                    if (this.tagName === "INPUT" && this.type === "radio") {
                        t = this.name;
                        if (a[t] === true) {
                            return false
                        }
                        a[t] = true
                    }
                    return true
                });
                u.each(function() {
                    var t = e(this);
                    r = t.h5Validate("isValid", n) && r
                });
                s.trigger("formValidated", {
                    valid: r,
                    elements: i
                });
                return r
            },
            validate: function(n) {
                var r = e(this),
                    i = r.filter("[pattern]")[0] ? r.attr("pattern") : false,
                    o = new RegExp("^(?:" + i + ")$"),
                    u = null,
                    a = r.is("[type=checkbox]") ? r.is(":checked") : r.is("[type=radio]") ? (u = r.parents("form").find('input[name="' + r.attr("name") + '"]')).filter(":checked").length > 0 : r.val(),
                    f = n.errorClass,
                    l = n.validClass,
                    c = r.attr(n.errorAttribute) || false,
                    h = c ? "#" + c.replace(/(:|\.|\[|\])/g, "\\$1") : false,
                    p = false,
                    d = s({
                        element: this,
                        valid: true
                    }),
                    v = e("<input required>"),
                    m;
                if (v.filter("[required]") && v.filter("[required]").length) {
                    p = r.filter("[required]").length && r.attr("required") !== "false"
                } else {
                    p = r.attr("required") !== undefined
                }
                if (n.debug && window.console) {
                    t.log('Validate called on "' + a + '" with regex "' + o + '". Required: ' + p);
                    t.log("Regex test: " + o.test(a) + ", Pattern: " + i)
                }
                m = parseInt(r.attr("maxlength"), 10);
                if (!isNaN(m) && a.length > m) {
                    d.valid = false;
                    d.tooLong = true
                }
                if (p && !a) {
                    d.valid = false;
                    d.valueMissing = true
                } else if (i && !o.test(a) && a) {
                    d.valid = false;
                    d.patternMismatch = true
                } else {
                    if (!n.RODom) {
                        n.markValid({
                            element: this,
                            validity: d,
                            errorClass: f,
                            validClass: l,
                            errorID: h,
                            settings: n
                        })
                    }
                }
                if (!d.valid) {
                    if (!n.RODom) {
                        n.markInvalid({
                            element: this,
                            validity: d,
                            errorClass: f,
                            validClass: l,
                            errorID: h,
                            settings: n
                        })
                    }
                }
                r.trigger("validated", d);
                if (u !== null && n.alreadyCheckingRelatedRadioButtons !== true) {
                    n.alreadyCheckingRelatedRadioButtons = true;
                    u.not(r).trigger("validate");
                    n.alreadyCheckingRelatedRadioButtons = false
                }
            },
            delegateEvents: function(t, n, r, i) {
                var s = {},
                    o = 0,
                    u = function() {
                        i.validate.call(this, i)
                    };
                e.each(n, function(e, t) {
                    if (t) {
                        s[e] = e
                    }
                });
                for (o in s) {
                    if (s.hasOwnProperty(o)) {
                        e(r).delegate(t, s[o] + ".h5Validate", u)
                    }
                }
                return r
            },
            bindDelegation: function(t) {
                var n = e(this),
                    r;
                e.each(i, function(n, r) {
                    var i = r.toString();
                    i = i.substring(1, i.length - 1);
                    e("." + t.classPrefix + n).attr("pattern", i)
                });
                r = n.filter("form").add(n.find("form")).add(n.parents("form"));
                r.attr("novalidate", "novalidate").submit(u);
                r.find("input[formnovalidate][type='submit']").click(function() {
                    e(this).closest("form").unbind("submit", u)
                });
                return this.each(function() {
                    var e = {
                            focusout: t.focusout,
                            focusin: t.focusin,
                            change: t.change,
                            keyup: t.keyup
                        },
                        n = {
                            click: t.click
                        },
                        r = {
                            keyup: t.activeKeyup
                        };
                    t.delegateEvents(":input", t.customEvents, this, t);
                    t.delegateEvents(t.kbSelectors, e, this, t);
                    t.delegateEvents(t.mSelectors, n, this, t);
                    t.delegateEvents(t.activeClassSelector, r, this, t);
                    t.delegateEvents("textarea[maxlength]", {
                        keyup: true
                    }, this, t)
                })
            }
        },
        u = function(t) {
            var n, r = l.call(this),
                i;
            if (r.submit !== true) {
                return
            }
            n = e(this);
            i = n.h5Validate("allValid", {
                revalidate: r.validateOnSubmit === true
            });
            if (i !== true) {
                t.preventDefault();
                if (r.focusFirstInvalidElementOnSubmit === true) {
                    var s = e(r.allValidSelectors, n).filter(function(t) {
                        return e(this).h5Validate("isValid", {
                            revalidate: false
                        }) !== true
                    });
                    s.first().focus()
                }
            }
            return i
        },
        a = [],
        f = function(n) {
            var i = e.extend({}, r, n, o),
                s = i.classPrefix + i.activeClass;
            return e.extend(i, {
                activeClass: s,
                activeClassSelector: "." + s,
                requiredClass: i.classPrefix + i.requiredClass,
                el: this
            })
        },
        l = function() {
            var n = e(this).closest("[data-h5-instanceId]");
            return a[n.attr("data-h5-instanceId")]
        },
        c = function(n) {
            var r = a.push(n) - 1;
            if (n.RODom !== true) {
                e(this).attr("data-h5-instanceId", r)
            }
            e(this).trigger("instance", {
                "data-h5-instanceId": r
            })
        };
    e.h5Validate = {
        addPatterns: function(e) {
            var t = r.patternLibrary,
                n;
            for (n in e) {
                if (e.hasOwnProperty(n)) {
                    t[n] = e[n]
                }
            }
            return t
        },
        validValues: function(t, n) {
            var r = 0,
                i = n.length,
                s = "",
                o;
            for (r = 0; r < i; r += 1) {
                s = s ? s + "|" + n[r] : n[r]
            }
            o = new RegExp("^(?:" + s + ")$");
            e(t).data("regex", o)
        }
    };
    e.fn.h5Validate = function(n) {
        var r, i, s;
        if (typeof n === "string" && typeof o[n] === "function") {
            s = l.call(this);
            i = [].slice.call(arguments, 0);
            r = n;
            i.shift();
            i = e.merge([s], i);
            return s[r].apply(this, i)
        }
        s = f.call(this, n);
        c.call(this, s);
        return o.bindDelegation.call(this, s)
    }
})(jQuery);

/* jQuery SmartScroll - Debounced scroll event library for jQuery.
 * https://github.com/peschee/jquery-smartscroll
 */
;
(function(e, t) {
    var n = function(e, t, n) {
        var r;
        return function() {
            function u() {
                if (!n) e.apply(s, o);
                r = null
            }
            var s = this,
                o = arguments;
            if (r) clearTimeout(r);
            else if (n) e.apply(s, o);
            r = setTimeout(u, t || 100)
        }
    };
    jQuery.fn[t] = function(e, r) {
        return e ? this.bind("scroll", n(e, r)) : this.trigger(t)
    }
})(jQuery, "smartscroll");

/* jQuery cookie */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function t(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {}
    }

    function r(n, o) {
        var i = u.raw ? n : t(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g,
        u = e.cookie = function(t, c, s) {
            if (arguments.length > 1 && !e.isFunction(c)) {
                if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
                    var a = s.expires,
                        d = s.expires = new Date;
                    d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
                }
                return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
                var x = p[l].split("="),
                    g = o(x.shift()),
                    j = x.join("=");
                if (t === g) {
                    f = r(j, c);
                    break
                }
                t || void 0 === (j = r(j)) || (f[g] = j)
            }
            return f
        };
    u.defaults = {}, e.removeCookie = function(n, o) {
        return e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n)
    }
});

/*!
 * parallax.js v1.3.1 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2015 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
! function(t, i, e, s) {
    function o(i, e) {
        var h = this;
        "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        return r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? (this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this) : navigator.userAgent.match(/(Android)/) ? (this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this) : (this.$mirror = t("<div />").prependTo("body"), this.$slider = t("<img />").prependTo(this.$mirror), this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }), this.$slider.addClass("parallax-slider").one("load", function() {
            h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender()
        }), this.$slider[0].src = this.imageSrc, void((this.naturalHeight && this.naturalWidth || this.$slider[0].complete) && this.$slider.trigger("load")))
    }

    function h(s) {
        return this.each(function() {
            var h = t(this),
                r = "object" == typeof s && s;
            this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") || (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && o[s]()
        })
    }! function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function(e) {
            var s = (new Date).getTime(),
                o = Math.max(0, 16 - (s - t)),
                h = i.setTimeout(function() {
                    e(s + o)
                }, o);
            return t = s + o, h
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), t.extend(o.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t = o.winHeight,
                i = o.docHeight,
                e = Math.min(this.boxOffsetTop, i - t),
                s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
                h = this.boxHeight + (e - s) * (1 - this.speed) | 0,
                r = (this.boxOffsetTop - e) * (1 - this.speed) | 0;
            if (h * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r;
                var n = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -n : isNaN(this.positionX) ? -n / 2 | 0 : Math.max(this.positionX, -n)
            } else {
                this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
                var n = this.imageHeight - h;
                this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - n : isNaN(this.positionY) ? r - n / 2 | 0 : r + Math.max(this.positionY, -n)
            }
        },
        render: function() {
            var t = o.scrollTop,
                i = o.scrollLeft,
                e = this.overScrollFix ? o.overScroll : 0,
                s = t + o.winHeight;
            this.visibility = this.boxOffsetBottom > t && this.boxOffsetTop < s ? "visible" : "hidden", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed), this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - e,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            }), this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }), t.extend(o, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            if (!this.isReady) {
                var s = t(e),
                    h = t(i);
                h.on("scroll.px.parallax load.px.parallax", function() {
                    var t = o.docHeight - o.winHeight,
                        i = o.docWidth - o.winWidth;
                    o.scrollTop = Math.max(0, Math.min(t, h.scrollTop())), o.scrollLeft = Math.max(0, Math.min(i, h.scrollLeft())), o.overScroll = Math.max(h.scrollTop() - t, Math.min(h.scrollTop(), 0)), o.requestRender()
                }).on("resize.px.parallax load.px.parallax", function() {
                    o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width(), o.isFresh = !1, o.requestRender()
                }), this.isReady = !0
            }
        },
        configure: function(i) {
            "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i))
        },
        refresh: function() {
            t.each(this.sliders, function() {
                this.refresh()
            }), this.isFresh = !0
        },
        render: function() {
            this.isFresh || this.refresh(), t.each(this.sliders, function() {
                this.render()
            })
        },
        requestRender: function() {
            var t = this;
            this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function() {
                t.render(), t.isBusy = !1
            }))
        }
    });
    var r = t.fn.parallax;
    t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function() {
        return t.fn.parallax = r, this
    }, t(e).on("ready.px.parallax.data-api", function() {
        t('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document);


/* Scrollme */
var scrollme = function(e) {
    var t = {},
        a = e(document),
        n = e(window);
    return t.body_height = 0, t.viewport_height = 0, t.viewport_top = 0, t.viewport_bottom = 0, t.viewport_top_previous = -1, t.elements = [], t.elements_in_view = [], t.property_defaults = {
        opacity: 1,
        translatex: 0,
        translatey: 0,
        translatez: 0,
        rotatex: 0,
        rotatey: 0,
        rotatez: 0,
        scale: 1,
        scalex: 1,
        scaley: 1,
        scalez: 1
    }, t.scrollme_selector = ".scrollme", t.animateme_selector = ".animateme", t.update_interval = 10, t.easing_functions = {
        linear: function(e) {
            return e
        },
        easeout: function(e) {
            return e * e * e
        },
        easein: function(e) {
            return e = 1 - e, 1 - e * e * e
        },
        easeinout: function(e) {
            return .5 > e ? 4 * e * e * e : (e = 1 - e, 1 - 4 * e * e * e)
        }
    }, t.init_events = ["ready", "page:load", "page:change"], t.init_if = function() {
        return !0
    }, t.init = function() {
        return t.init_if() ? (t.init_elements(), t.on_resize(), n.on("resize orientationchange", function() {
            t.on_resize()
        }), n.load(function() {
            setTimeout(function() {
                t.on_resize()
            }, 100)
        }), setInterval(t.update, t.update_interval), !0) : !1
    }, t.init_elements = function() {
        e(t.scrollme_selector).each(function() {
            var a = {};
            a.element = e(this);
            var n = [];
            e(this).find(t.animateme_selector).addBack(t.animateme_selector).each(function() {
                var a = {};
                a.element = e(this), a.when = a.element.data("when"), a.from = a.element.data("from"), a.to = a.element.data("to"), a.element.is("[data-crop]") ? a.crop = a.element.data("crop") : a.crop = !0, a.element.is("[data-easing]") ? a.easing = t.easing_functions[a.element.data("easing")] : a.easing = t.easing_functions.easeout;
                var i = {};
                a.element.is("[data-opacity]") && (i.opacity = a.element.data("opacity")), a.element.is("[data-translatex]") && (i.translatex = a.element.data("translatex")), a.element.is("[data-translatey]") && (i.translatey = a.element.data("translatey")), a.element.is("[data-translatez]") && (i.translatez = a.element.data("translatez")), a.element.is("[data-rotatex]") && (i.rotatex = a.element.data("rotatex")), a.element.is("[data-rotatey]") && (i.rotatey = a.element.data("rotatey")), a.element.is("[data-rotatez]") && (i.rotatez = a.element.data("rotatez")), a.element.is("[data-scale]") && (i.scale = a.element.data("scale")), a.element.is("[data-scalex]") && (i.scalex = a.element.data("scalex")), a.element.is("[data-scaley]") && (i.scaley = a.element.data("scaley")), a.element.is("[data-scalez]") && (i.scalez = a.element.data("scalez")), a.properties = i, n.push(a)
            }), a.effects = n, t.elements.push(a)
        })
    }, t.update = function() {
        window.requestAnimationFrame(function() {
            t.update_viewport_position(), t.viewport_top_previous != t.viewport_top && (t.update_elements_in_view(), t.animate()), t.viewport_top_previous = t.viewport_top
        })
    }, t.animate = function() {
        for (var e = t.elements_in_view.length, a = 0; e > a; a++)
            for (var n = t.elements_in_view[a], i = n.effects.length, o = 0; i > o; o++) {
                var r = n.effects[o];
                switch (r.when) {
                    case "view":
                    case "span":
                        var s = n.top - t.viewport_height,
                            l = n.bottom;
                        break;
                    case "exit":
                        var s = n.bottom - t.viewport_height,
                            l = n.bottom;
                        break;
                    default:
                        var s = n.top - t.viewport_height,
                            l = n.top
                }
                r.crop && (0 > s && (s = 0), l > t.body_height - t.viewport_height && (l = t.body_height - t.viewport_height));
                var m = (t.viewport_top - s) / (l - s),
                    p = r.from,
                    c = r.to,
                    _ = c - p,
                    u = (m - p) / _,
                    v = r.easing(u),
                    d = t.animate_value(m, v, p, c, r, "opacity"),
                    h = t.animate_value(m, v, p, c, r, "translatey"),
                    f = t.animate_value(m, v, p, c, r, "translatex"),
                    w = t.animate_value(m, v, p, c, r, "translatez"),
                    g = t.animate_value(m, v, p, c, r, "rotatex"),
                    y = t.animate_value(m, v, p, c, r, "rotatey"),
                    x = t.animate_value(m, v, p, c, r, "rotatez"),
                    z = t.animate_value(m, v, p, c, r, "scale"),
                    b = t.animate_value(m, v, p, c, r, "scalex"),
                    k = t.animate_value(m, v, p, c, r, "scaley"),
                    F = t.animate_value(m, v, p, c, r, "scalez");
                "scale" in r.properties && (b = z, k = z, F = z), r.element.css({
                    opacity: d,
                    transform: "translate3d( " + f + "px , " + h + "px , " + w + "px ) rotateX( " + g + "deg ) rotateY( " + y + "deg ) rotateZ( " + x + "deg ) scale3d( " + b + " , " + k + " , " + F + " )"
                })
            }
    }, t.animate_value = function(e, a, n, i, o, r) {
        var s = t.property_defaults[r];
        if (!(r in o.properties)) return s;
        var l = o.properties[r],
            m = i > n ? !0 : !1;
        if (n > e && m) return s;
        if (e > i && m) return l;
        if (e > n && !m) return s;
        if (i > e && !m) return l;
        var p = s + a * (l - s);
        switch (r) {
            case "opacity":
                p = p.toFixed(2);
                break;
            case "translatex":
                p = p.toFixed(0);
                break;
            case "translatey":
                p = p.toFixed(0);
                break;
            case "translatez":
                p = p.toFixed(0);
                break;
            case "rotatex":
                p = p.toFixed(1);
                break;
            case "rotatey":
                p = p.toFixed(1);
                break;
            case "rotatez":
                p = p.toFixed(1);
                break;
            case "scale":
                p = p.toFixed(3)
        }
        return p
    }, t.update_viewport_position = function() {
        t.viewport_top = n.scrollTop(), t.viewport_bottom = t.viewport_top + t.viewport_height
    }, t.update_elements_in_view = function() {
        t.elements_in_view = [];
        for (var e = t.elements.length, a = 0; e > a; a++) t.elements[a].top < t.viewport_bottom && t.elements[a].bottom > t.viewport_top && t.elements_in_view.push(t.elements[a])
    }, t.on_resize = function() {
        t.update_viewport(), t.update_element_heights(), t.update_viewport_position(), t.update_elements_in_view(), t.animate()
    }, t.update_viewport = function() {
        t.body_height = a.height(), t.viewport_height = n.height()
    }, t.update_element_heights = function() {
        for (var e = t.elements.length, a = 0; e > a; a++) {
            var n = t.elements[a].element.outerHeight(),
                i = t.elements[a].element.offset();
            t.elements[a].height = n, t.elements[a].top = i.top, t.elements[a].bottom = i.top + n
        }
    }, a.on(t.init_events.join(" "), function() {
        t.init()
    }), t
}(jQuery);


/*
 * iosSlider - http://iosscripts.com/iosslider/
 *
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser
 * content slider into your web presence. Designed for use as a content slider, carousel,
 * scrolling website banner, or image gallery.
 *
 * Copyright (c) 2013 Marc Whitbread
 *
 * Version: v1.3.43 (06/17/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function(b) {
    var ma = 0,
        X = 0,
        ga = 0,
        T = 0,
        Ca = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints,
        Da = "onorientationchange" in window,
        ca = !1,
        da = !1,
        Y = !1,
        na = !1,
        ia = !1,
        ea = "pointer",
        ta = "pointer",
        ja = [],
        N = [],
        ua = [],
        R = [],
        B = [],
        aa = [],
        y = [],
        n = [],
        t = [],
        oa = [],
        fa = [],
        f = {
            showScrollbar: function(e, c) {
                e.scrollbarHide && b("." + c).css({
                    opacity: e.scrollbarOpacity,
                    filter: "alpha(opacity:" + 100 * e.scrollbarOpacity + ")"
                })
            },
            hideScrollbar: function(b, c, a, v, g, d, n, t, y, B) {
                if (b.scrollbar && b.scrollbarHide)
                    for (var w = a; w < a + 25; w++) c[c.length] = f.hideScrollbarIntervalTimer(10 * w, v[a], (a + 24 - w) / 24, g, d, n, t, y, B, b)
            },
            hideScrollbarInterval: function(e, c, a, v, g, d, n, y, B) {
                T = -1 * e / t[y] * (g - d - n - v);
                f.setSliderOffset("." + a, T);
                b("." + a).css({
                    opacity: B.scrollbarOpacity * c,
                    filter: "alpha(opacity:" + B.scrollbarOpacity * c * 100 + ")"
                })
            },
            slowScrollHorizontalInterval: function(e, c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k, l) {
                if (l.infiniteSlider) {
                    if (a <= -1 * t[m] || a <= -1 * oa[m]) {
                        var q = b(e).width();
                        if (a <= -1 * oa[m]) {
                            var s = -1 * w[0];
                            b(c).each(function(a) {
                                f.setSliderOffset(b(c)[a], s + D);
                                a < x.length && (x[a] = -1 * s);
                                s += u[a]
                            });
                            a += -1 * x[0];
                            n[m] = -1 * x[0] + D;
                            t[m] = n[m] + q - d;
                            y[m] = 0
                        }
                        for (; a <= -1 * t[m];) {
                            var h = 0,
                                C = f.getSliderOffset(b(c[0]), "x");
                            b(c).each(function(a) {
                                f.getSliderOffset(this, "x") < C && (C = f.getSliderOffset(this, "x"), h = a)
                            });
                            A = n[m] + q;
                            f.setSliderOffset(b(c)[h], A);
                            n[m] = -1 * x[1] + D;
                            t[m] = n[m] + q - d;
                            x.splice(0, 1);
                            x.splice(x.length, 0, -1 * A + D);
                            y[m]++
                        }
                    }
                    if (a >= -1 * n[m] || 0 <= a) {
                        q = b(e).width();
                        if (0 < a)
                            for (s = -1 * w[0], b(c).each(function(a) {
                                    f.setSliderOffset(b(c)[a], s + D);
                                    a < x.length && (x[a] = -1 * s);
                                    s += u[a]
                                }), a -= -1 * x[0], n[m] = -1 * x[0] + D, t[m] = n[m] + q - d, y[m] = r; 0 < -1 * x[0] - q + D;) {
                                var z = 0,
                                    L = f.getSliderOffset(b(c[0]), "x");
                                b(c).each(function(a) {
                                    f.getSliderOffset(this, "x") > L && (L = f.getSliderOffset(this, "x"), z = a)
                                });
                                A = n[m] - u[z];
                                f.setSliderOffset(b(c)[z], A);
                                x.splice(0, 0, -1 * A + D);
                                x.splice(x.length - 1, 1);
                                n[m] = -1 * x[0] + D;
                                t[m] = n[m] + q - d;
                                y[m]--;
                                B[m]++
                            }
                        for (; a > -1 * n[m];) z = 0, L = f.getSliderOffset(b(c[0]), "x"), b(c).each(function(a) {
                            f.getSliderOffset(this, "x") > L && (L = f.getSliderOffset(this, "x"), z = a)
                        }), A = n[m] - u[z], f.setSliderOffset(b(c)[z], A), x.splice(0, 0, -1 * A + D), x.splice(x.length - 1, 1), n[m] = -1 * x[0] + D, t[m] = n[m] + q - d, y[m]--
                    }
                }
                w = !1;
                d = f.calcActiveOffset(l, a, x, d, y[m], r, K, m);
                A = (d + y[m] + r) % r;
                l.infiniteSlider ? A != aa[m] && (w = !0) : d != B[m] && (w = !0);
                if (w && (r = new f.args("change", l, e, b(e).children(":eq(" + A + ")"), A, k), b(e).parent().data("args", r), "" != l.onSlideChange)) l.onSlideChange(r);
                B[m] = d;
                aa[m] = A;
                a = Math.floor(a);
                if (m != b(e).parent().data("args").data.sliderNumber) return !0;
                f.setSliderOffset(e, a);
                l.scrollbar && (T = Math.floor((-1 * a - n[m] + D) / (t[m] - n[m] + D) * (I - O - g)), e = g - J, a >= -1 * n[m] + D ? (e = g - J - -1 * T, f.setSliderOffset(b("." + v), 0)) : (a <= -1 * t[m] + 1 && (e = I - O - J - T), f.setSliderOffset(b("." + v), T)), b("." + v).css({
                    width: e + "px"
                }))
            },
            slowScrollHorizontal: function(e, c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k, l, q, s) {
                var h = f.getSliderOffset(e, "x");
                d = [];
                var C = 0,
                    z = 25 / 1024 * O;
                frictionCoefficient = s.frictionCoefficient;
                elasticFrictionCoefficient = s.elasticFrictionCoefficient;
                snapFrictionCoefficient = s.snapFrictionCoefficient;
                g > s.snapVelocityThreshold && s.snapToChildren && !l ? C = 1 : g < -1 * s.snapVelocityThreshold && s.snapToChildren && !l && (C = -1);
                g < -1 * z ? g = -1 * z : g > z && (g = z);
                b(e)[0] !== b(k)[0] && (C *= -1, g *= -2);
                k = y[u];
                if (s.infiniteSlider) var L = n[u],
                    p = t[u];
                l = [];
                for (var z = [], G = 0; G < A.length; G++) l[G] = A[G], G < c.length && (z[G] = f.getSliderOffset(b(c[G]), "x"));
                for (; 1 < g || -1 > g;) {
                    g *= frictionCoefficient;
                    h += g;
                    (h > -1 * n[u] || h < -1 * t[u]) && !s.infiniteSlider && (g *= elasticFrictionCoefficient, h += g);
                    if (s.infiniteSlider) {
                        if (h <= -1 * p) {
                            for (var p = b(e).width(), N = 0, P = z[0], G = 0; G < z.length; G++) z[G] < P && (P = z[G], N = G);
                            G = L + p;
                            z[N] = G;
                            L = -1 * l[1] + q;
                            p = L + p - O;
                            l.splice(0, 1);
                            l.splice(l.length, 0, -1 * G + q);
                            k++
                        }
                        if (h >= -1 * L) {
                            p = b(e).width();
                            N = 0;
                            P = z[0];
                            for (G = 0; G < z.length; G++) z[G] > P && (P = z[G], N = G);
                            G = L - r[N];
                            z[N] = G;
                            l.splice(0, 0, -1 * G + q);
                            l.splice(l.length - 1, 1);
                            L = -1 * l[0] + q;
                            p = L + p - O;
                            k--
                        }
                    }
                    d[d.length] = h
                }
                z = !1;
                g = f.calcActiveOffset(s, h, l, O, k, D, B[u], u);
                L = (g + k + D) % D;
                s.snapToChildren && (s.infiniteSlider ? L != aa[u] && (z = !0) : g != B[u] && (z = !0), 0 > C && !z ? (g++, g >= A.length && !s.infiniteSlider && (g = A.length - 1)) : 0 < C && !z && (g--, 0 > g && !s.infiniteSlider && (g = 0)));
                if (s.snapToChildren || (h > -1 * n[u] || h < -1 * t[u]) && !s.infiniteSlider) {
                    (h > -1 * n[u] || h < -1 * t[u]) && !s.infiniteSlider ? d.splice(0, d.length) : (d.splice(.1 * d.length, d.length), h = 0 < d.length ? d[d.length - 1] : h);
                    for (; h < l[g] - .5 || h > l[g] + .5;) h = (h - l[g]) * snapFrictionCoefficient + l[g], d[d.length] = h;
                    d[d.length] = l[g]
                }
                C = 1;
                0 != d.length % 2 && (C = 0);
                for (h = 0; h < a.length; h++) clearTimeout(a[h]);
                k = (g + k + D) % D;
                L = 0;
                for (h = C; h < d.length; h += 2)
                    if (h == C || 1 < Math.abs(d[h] - L) || h >= d.length - 2) L = d[h], a[a.length] = f.slowScrollHorizontalIntervalTimer(10 * h, e, c, d[h], v, I, O, J, K, w, g, x, A, m, D, r, u, q, k, s);
                L = (g + y[u] + D) % D;
                "" != s.onSlideComplete && 1 < d.length && (a[a.length] = f.onSlideCompleteTimer(10 * (h + 1), s, e, b(e).children(":eq(" + L + ")"), k, u));
                a[a.length] = f.updateBackfaceVisibilityTimer(10 * (h + 1), c, u, D, s);
                R[u] = a;
                f.hideScrollbar(s, a, h, d, v, I, O, K, w, u)
            },
            onSlideComplete: function(e, c, a, v, g) {
                a = new f.args("complete", e, b(c), a, v, v);
                b(c).parent().data("args", a);
                if ("" != e.onSlideComplete) e.onSlideComplete(a)
            },
            getSliderOffset: function(e, c) {
                var a = 0;
                c = "x" == c ? 4 : 5;
                if (!ca || da || Y) a = parseInt(b(e).css("left"), 10);
                else {
                    for (var a = ["-webkit-transform", "-moz-transform", "transform"], f, g = 0; g < a.length; g++)
                        if (void 0 != b(e).css(a[g]) && 0 < b(e).css(a[g]).length) {
                            f = b(e).css(a[g]).split(",");
                            break
                        }
                    a = void 0 == f[c] ? 0 : parseInt(f[c], 10)
                }
                return a
            },
            setSliderOffset: function(e, c) {
                c = parseInt(c, 10);
                !ca || da || Y ? b(e).css({
                    left: c + "px"
                }) : b(e).css({
                    msTransform: "matrix(1,0,0,1," + c + ",0)",
                    webkitTransform: "matrix(1,0,0,1," + c + ",0)",
                    MozTransform: "matrix(1,0,0,1," + c + ",0)",
                    transform: "matrix(1,0,0,1," + c + ",0)"
                })
            },
            setBrowserInfo: function() {
                null != navigator.userAgent.match("WebKit") ? (ea = "-webkit-grab", ta = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ? (ia = !0, ea = "move", ta = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? na = da = !0 : null != navigator.userAgent.match("MSIE 8") ? na = Y = !0 : null != navigator.userAgent.match("MSIE 9") && (na = !0)
            },
            has3DTransform: function() {
                var e = !1,
                    c = b("<div />").css({
                        msTransform: "matrix(1,1,1,1,1,1)",
                        webkitTransform: "matrix(1,1,1,1,1,1)",
                        MozTransform: "matrix(1,1,1,1,1,1)",
                        transform: "matrix(1,1,1,1,1,1)"
                    });
                "" == c.attr("style") ? e = !1 : ia && 21 <= parseInt(navigator.userAgent.split("/")[3], 10) ? e = !1 : void 0 != c.attr("style") && (e = !0);
                return e
            },
            getSlideNumber: function(b, c, a) {
                return (b - y[c] + a) % a
            },
            calcActiveOffset: function(b, c, a, f, g, d, n, t) {
                g = !1;
                b = [];
                var y;
                c > a[0] && (y = 0);
                c < a[a.length - 1] && (y = d - 1);
                for (d = 0; d < a.length; d++) a[d] <= c && a[d] > c - f && (g || a[d] == c || (b[b.length] = a[d - 1]), b[b.length] = a[d], g = !0);
                0 == b.length && (b[0] = a[a.length - 1]);
                for (d = g = 0; d < b.length; d++) n = Math.abs(c - b[d]), n < f && (g = b[d], f = n);
                for (d = 0; d < a.length; d++) g == a[d] && (y = d);
                return y
            },
            changeSlide: function(e, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D, k) {
                f.autoSlidePause(r);
                for (var l = 0; l < v.length; l++) clearTimeout(v[l]);
                var q = Math.ceil(k.autoSlideTransTimer / 10) + 1,
                    s = f.getSliderOffset(c, "x"),
                    h = x[e],
                    h = h - s,
                    C = e - (B[r] + y[r] + m) % m;
                if (k.infiniteSlider) {
                    e = (e - y[r] + 2 * m) % m;
                    l = !1;
                    0 == e && 2 == m && (e = m, x[e] = x[e - 1] - b(a).eq(0).outerWidth(!0), l = !0);
                    var h = x[e],
                        h = h - s,
                        z = [x[e] - b(c).width(), x[e] + b(c).width()];
                    l && x.splice(x.length - 1, 1);
                    for (l = 0; l < z.length; l++) Math.abs(z[l] - s) < Math.abs(h) && (h = z[l] - s)
                }
                0 > h && -1 == C ? h += b(c).width() : 0 < h && 1 == C && (h -= b(c).width());
                C = [];
                f.showScrollbar(k, g);
                for (l = 0; l <= q; l++) z = l, z /= q, z--, z = s + h * (Math.pow(z, 5) + 1), C[C.length] = z;
                q = (e + y[r] + m) % m;
                for (l = s = 0; l < C.length; l++) {
                    if (0 == l || 1 < Math.abs(C[l] - s) || l >= C.length - 2) s = C[l], v[l] = f.slowScrollHorizontalIntervalTimer(10 * (l + 1), c, a, C[l], g, d, n, t, J, K, e, w, x, u, m, A, r, D, q, k);
                    0 == l && "" != k.onSlideStart && (h = (B[r] + y[r] + m) % m, k.onSlideStart(new f.args("start", k, c, b(c).children(":eq(" + h + ")"), h, e)))
                }
                s = !1;
                k.infiniteSlider ? q != aa[r] && (s = !0) : e != B[r] && (s = !0);
                s && "" != k.onSlideComplete && (v[v.length] = f.onSlideCompleteTimer(10 * (l + 1), k, c, b(c).children(":eq(" + q + ")"), q, r));
                R[r] = v;
                f.hideScrollbar(k, v, l, C, g, d, n, J, K, r);
                f.autoSlide(c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D, k)
            },
            changeOffset: function(e, c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k) {
                f.autoSlidePause(r);
                for (var l = 0; l < v.length; l++) clearTimeout(v[l]);
                k.infiniteSlider || (e = e > -1 * n[r] + D ? -1 * n[r] + D : e, e = e < -1 * t[r] ? -1 * t[r] : e);
                var q = Math.ceil(k.autoSlideTransTimer / 10) + 1,
                    s = f.getSliderOffset(c, "x"),
                    l = (f.calcActiveOffset(k, e, x, I, y, m, B[r], r) + y[r] + m) % m,
                    h = x.slice();
                if (k.snapToChildren && !k.infiniteSlider) e = x[l];
                else if (k.infiniteSlider && k.snapToChildren) {
                    for (; e >= h[0];) h.splice(0, 0, h[m - 1] + b(c).width()), h.splice(m, 1);
                    for (; e <= h[m - 1];) h.splice(m, 0, h[0] - b(c).width()), h.splice(0, 1);
                    l = f.calcActiveOffset(k, e, h, I, y, m, B[r], r);
                    e = h[l]
                }
                var C = e - s;
                e = [];
                var z;
                f.showScrollbar(k, g);
                for (h = 0; h <= q; h++) z = h, z /= q, z--, z = s + C * (Math.pow(z, 5) + 1), e[e.length] = z;
                q = (l + y[r] + m) % m;
                for (h = s = 0; h < e.length; h++) {
                    if (0 == h || 1 < Math.abs(e[h] - s) || h >= e.length - 2) s = e[h], v[h] = f.slowScrollHorizontalIntervalTimer(10 * (h + 1), c, a, e[h], g, d, I, O, J, K, l, w, x, u, m, A, r, D, q, k);
                    0 == h && "" != k.onSlideStart && (q = (B[r] + y[r] + m) % m, k.onSlideStart(new f.args("start", k, c, b(c).children(":eq(" + q + ")"), q, l)))
                }
                s = !1;
                k.infiniteSlider ? q != aa[r] && (s = !0) : l != B[r] && (s = !0);
                s && "" != k.onSlideComplete && (v[v.length] = f.onSlideCompleteTimer(10 * (h + 1), k, c, b(c).children(":eq(" + q + ")"), q, r));
                R[r] = v;
                f.hideScrollbar(k, v, h, e, g, d, I, J, K, r);
                f.autoSlide(c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k)
            },
            autoSlide: function(b, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D) {
                if (!N[A].autoSlide) return !1;
                f.autoSlidePause(A);
                ja[A] = setTimeout(function() {
                    !D.infiniteSlider && B[A] > w.length - 1 && (B[A] -= u);
                    f.changeSlide(B[A] + y[A] + 1, b, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D);
                    f.autoSlide(b, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D)
                }, D.autoSlideTimer + D.autoSlideTransTimer)
            },
            autoSlidePause: function(b) {
                clearTimeout(ja[b])
            },
            isUnselectable: function(e, c) {
                return "" != c.unselectableSelector && 1 == b(e).closest(c.unselectableSelector).length ? !0 : !1
            },
            slowScrollHorizontalIntervalTimer: function(b, c, a, v, g, d, n, t, y, B, w, x, A, r, u, m, D, k, l, q) {
                return setTimeout(function() {
                    f.slowScrollHorizontalInterval(c, a, v, g, d, n, t, y, B, w, x, A, r, u, m, D, k, l, q)
                }, b)
            },
            onSlideCompleteTimer: function(b, c, a, v, g, d) {
                return setTimeout(function() {
                    f.onSlideComplete(c, a, v, g, d)
                }, b)
            },
            hideScrollbarIntervalTimer: function(b, c, a, v, g, d, n, t, y, B) {
                return setTimeout(function() {
                    f.hideScrollbarInterval(c, a, v, g, d, n, t, y, B)
                }, b)
            },
            updateBackfaceVisibilityTimer: function(b, c, a, v, g) {
                return setTimeout(function() {
                    f.updateBackfaceVisibility(c, a, v, g)
                }, b)
            },
            updateBackfaceVisibility: function(e, c, a, v) {
                c = (B[c] + y[c] + a) % a;
                for (var g = [], d = 0; d < 2 * v.hardwareAccelBuffer; d++) {
                    var n = f.mod(c + d - v.hardwareAccelBuffer, a);
                    if ("visible" == b(e).eq(n).css("-webkit-backface-visibility")) {
                        g[g.length] = n;
                        var t = f.mod(n + 2 * v.hardwareAccelBuffer, a),
                            J = f.mod(n - 2 * v.hardwareAccelBuffer, a);
                        b(e).eq(n).css("-webkit-backface-visibility", "hidden"); - 1 == g.indexOf(J) && b(e).eq(J).css("-webkit-backface-visibility", ""); - 1 == g.indexOf(t) && b(e).eq(t).css("-webkit-backface-visibility", "")
                    }
                }
            },
            mod: function(b, c) {
                var a = b % c;
                return 0 > a ? a + c : a
            },
            args: function(e, c, a, v, g, d) {
                this.prevSlideNumber = void 0 == b(a).parent().data("args") ? void 0 : b(a).parent().data("args").prevSlideNumber;
                this.prevSlideObject = void 0 == b(a).parent().data("args") ? void 0 : b(a).parent().data("args").prevSlideObject;
                this.targetSlideNumber = d + 1;
                this.targetSlideObject = b(a).children(":eq(" + d + ")");
                this.slideChanged = !1;
                "load" == e ? this.targetSlideObject = this.targetSlideNumber = void 0 : "start" == e ? this.targetSlideObject = this.targetSlideNumber = void 0 : "change" == e ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == b(a).parent().data("args") ? c.startAtSlide : b(a).parent().data("args").currentSlideNumber, this.prevSlideObject = b(a).children(":eq(" + this.prevSlideNumber + ")")) : "complete" == e && (this.slideChanged = b(a).parent().data("args").slideChanged);
                this.settings = c;
                this.data = b(a).parent().data("iosslider");
                this.sliderObject = a;
                this.sliderContainerObject = b(a).parent();
                this.currentSlideObject = v;
                this.currentSlideNumber = g + 1;
                this.currentSliderOffset = -1 * f.getSliderOffset(a, "x")
            },
            preventDrag: function(b) {
                b.preventDefault()
            },
            preventClick: function(b) {
                b.stopImmediatePropagation();
                return !1
            },
            enableClick: function() {
                return !0
            }
        };
    f.setBrowserInfo();
    var $ = {
        init: function(e, c) {
            ca = f.has3DTransform();
            var a = b.extend(!0, {
                elasticPullResistance: .6,
                frictionCoefficient: .92,
                elasticFrictionCoefficient: .6,
                snapFrictionCoefficient: .92,
                snapToChildren: !1,
                snapSlideCenter: !1,
                startAtSlide: 1,
                scrollbar: !1,
                scrollbarDrag: !1,
                scrollbarHide: !0,
                scrollbarPaging: !1,
                scrollbarLocation: "top",
                scrollbarContainer: "",
                scrollbarOpacity: .4,
                scrollbarHeight: "4px",
                scrollbarBorder: "0",
                scrollbarMargin: "5px",
                scrollbarBackground: "#000",
                scrollbarBorderRadius: "100px",
                scrollbarShadow: "0 0 0 #000",
                scrollbarElasticPullResistance: .9,
                desktopClickDrag: !1,
                keyboardControls: !1,
                tabToAdvance: !1,
                responsiveSlideContainer: !0,
                responsiveSlides: !0,
                navSlideSelector: "",
                navPrevSelector: "",
                navNextSelector: "",
                autoSlideToggleSelector: "",
                autoSlide: !1,
                autoSlideTimer: 5E3,
                autoSlideTransTimer: 750,
                autoSlideHoverPause: !0,
                infiniteSlider: !1,
                snapVelocityThreshold: 5,
                slideStartVelocityThreshold: 0,
                horizontalSlideLockThreshold: 5,
                verticalSlideLockThreshold: 3,
                hardwareAccelBuffer: 5,
                stageCSS: {
                    position: "relative",
                    top: "0",
                    left: "0",
                    overflow: "hidden",
                    zIndex: 1
                },
                unselectableSelector: "",
                onSliderLoaded: "",
                onSliderUpdate: "",
                onSliderResize: "",
                onSlideStart: "",
                onSlideChange: "",
                onSlideComplete: ""
            }, e);
            void 0 == c && (c = this);
            return b(c).each(function(c) {
                function e() {
                    f.autoSlidePause(d);
                    va = b(F).find("a");
                    za = b(F).find("[onclick]");
                    pa = b(F).find("*");
                    b(l).css("width", "");
                    b(l).css("height", "");
                    b(F).css("width", "");
                    E = b(F).children().not("script").get();
                    ha = [];
                    M = [];
                    a.responsiveSlides && b(E).css("width", "");
                    t[d] = 0;
                    p = [];
                    m = b(l).parent().width();
                    q = b(l).outerWidth(!0);
                    a.responsiveSlideContainer && (q = b(l).outerWidth(!0) > m ? m : b(l).width());
                    b(l).css({
                        position: a.stageCSS.position,
                        top: a.stageCSS.top,
                        left: a.stageCSS.left,
                        overflow: a.stageCSS.overflow,
                        zIndex: a.stageCSS.zIndex,
                        webkitPerspective: 1E3,
                        webkitBackfaceVisibility: "hidden",
                        msTouchAction: "pan-y",
                        width: q
                    });
                    b(a.unselectableSelector).css({
                        cursor: "default"
                    });
                    for (var c = 0; c < E.length; c++) {
                        ha[c] = b(E[c]).width();
                        M[c] = b(E[c]).outerWidth(!0);
                        var v = M[c];
                        a.responsiveSlides && (M[c] > q ? (v = q + -1 * (M[c] - ha[c]), ha[c] = v, M[c] = q) : v = ha[c], b(E[c]).css({
                            width: v
                        }));
                        b(E[c]).css({
                            overflow: "hidden",
                            position: "absolute"
                        });
                        p[c] = -1 * t[d];
                        t[d] = t[d] + v + (M[c] - ha[c])
                    }
                    a.snapSlideCenter && (k = .5 * (q - M[0]), a.responsiveSlides && M[0] > q && (k = 0));
                    oa[d] = 2 * t[d];
                    for (c = 0; c < E.length; c++) f.setSliderOffset(b(E[c]), -1 * p[c] + t[d] + k), p[c] -= t[d];
                    if (!a.infiniteSlider && !a.snapSlideCenter) {
                        for (c = 0; c < p.length && !(p[c] <= -1 * (2 * t[d] - q)); c++) ja = c;
                        p.splice(ja + 1, p.length);
                        p[p.length] = -1 * (2 * t[d] - q)
                    }
                    for (c = 0; c < p.length; c++) G[c] = p[c];
                    L && (N[d].startAtSlide = N[d].startAtSlide > p.length ? p.length : N[d].startAtSlide, a.infiniteSlider ? (N[d].startAtSlide = (N[d].startAtSlide - 1 + H) % H, B[d] = N[d].startAtSlide) : (N[d].startAtSlide = 0 > N[d].startAtSlide - 1 ? p.length - 1 : N[d].startAtSlide, B[d] = N[d].startAtSlide - 1), aa[d] = B[d]);
                    n[d] = t[d] + k;
                    b(F).css({
                        position: "relative",
                        cursor: ea,
                        webkitPerspective: "0",
                        webkitBackfaceVisibility: "hidden",
                        width: t[d] + "px"
                    });
                    U = t[d];
                    t[d] = 2 * t[d] - q + 2 * k;
                    (V = U + k < q || 0 == q ? !0 : !1) && b(F).css({
                        cursor: "default"
                    });
                    D = b(l).parent().outerHeight(!0);
                    s = b(l).height();
                    a.responsiveSlideContainer && (s = s > D ? D : s);
                    b(l).css({
                        height: s
                    });
                    f.setSliderOffset(F, p[B[d]]);
                    if (a.infiniteSlider && !V) {
                        c = f.getSliderOffset(b(F), "x");
                        for (v = (y[d] + H) % H * -1; 0 > v;) {
                            var g = 0,
                                z = f.getSliderOffset(b(E[0]), "x");
                            b(E).each(function(a) {
                                f.getSliderOffset(this, "x") < z && (z = f.getSliderOffset(this, "x"), g = a)
                            });
                            var J = n[d] + U;
                            f.setSliderOffset(b(E)[g], J);
                            n[d] = -1 * p[1] + k;
                            t[d] = n[d] + U - q;
                            p.splice(0, 1);
                            p.splice(p.length, 0, -1 * J + k);
                            v++
                        }
                        for (; 0 < -1 * p[0] - U + k && a.snapSlideCenter && L;) {
                            var O = 0,
                                P = f.getSliderOffset(b(E[0]), "x");
                            b(E).each(function(a) {
                                f.getSliderOffset(this, "x") > P && (P = f.getSliderOffset(this, "x"), O = a)
                            });
                            J = n[d] - M[O];
                            f.setSliderOffset(b(E)[O], J);
                            p.splice(0, 0, -1 * J + k);
                            p.splice(p.length - 1, 1);
                            n[d] = -1 * p[0] + k;
                            t[d] = n[d] + U - q;
                            y[d]--;
                            B[d]++
                        }
                        for (; c <= -1 * t[d];) g = 0, z = f.getSliderOffset(b(E[0]), "x"), b(E).each(function(a) {
                            f.getSliderOffset(this, "x") < z && (z = f.getSliderOffset(this, "x"), g = a)
                        }), J = n[d] + U, f.setSliderOffset(b(E)[g], J), n[d] = -1 * p[1] + k, t[d] = n[d] + U - q, p.splice(0, 1), p.splice(p.length, 0, -1 * J + k), y[d]++, B[d]--
                    }
                    f.setSliderOffset(F, p[B[d]]);
                    f.updateBackfaceVisibility(E, d, H, a);
                    a.desktopClickDrag || b(F).css({
                        cursor: "default"
                    });
                    a.scrollbar && (b("." + K).css({
                        margin: a.scrollbarMargin,
                        overflow: "hidden",
                        display: "none"
                    }), b("." + K + " ." + w).css({
                        border: a.scrollbarBorder
                    }), h = parseInt(b("." + K).css("marginLeft")) + parseInt(b("." + K).css("marginRight")), C = parseInt(b("." + K + " ." + w).css("borderLeftWidth"), 10) + parseInt(b("." + K + " ." + w).css("borderRightWidth"), 10), r = "" != a.scrollbarContainer ? b(a.scrollbarContainer).width() : q, u = q / U * (r - h), a.scrollbarHide || (ca = a.scrollbarOpacity), b("." + K).css({
                        position: "absolute",
                        left: 0,
                        width: r - h + "px",
                        margin: a.scrollbarMargin
                    }), "top" == a.scrollbarLocation ? b("." + K).css("top", "0") : b("." + K).css("bottom", "0"), b("." + K + " ." + w).css({
                        borderRadius: a.scrollbarBorderRadius,
                        background: a.scrollbarBackground,
                        height: a.scrollbarHeight,
                        width: u - C + "px",
                        minWidth: a.scrollbarHeight,
                        border: a.scrollbarBorder,
                        webkitPerspective: 1E3,
                        webkitBackfaceVisibility: "hidden",
                        position: "relative",
                        opacity: ca,
                        filter: "alpha(opacity:" + 100 * ca + ")",
                        boxShadow: a.scrollbarShadow
                    }), f.setSliderOffset(b("." + K + " ." + w), Math.floor((-1 * p[B[d]] - n[d] + k) / (t[d] - n[d] + k) * (r - h - u))), b("." + K).css({
                        display: "block"
                    }), x = b("." + K + " ." + w), A = b("." + K));
                    a.scrollbarDrag && !V && b("." + K + " ." + w).css({
                        cursor: ea
                    });
                    a.infiniteSlider && (S = (t[d] + q) / 3);
                    "" != a.navSlideSelector && b(a.navSlideSelector).each(function(c) {
                        b(this).css({
                            cursor: "pointer"
                        });
                        b(this).unbind(Q).bind(Q, function(e) {
                            "touchstart" == e.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
                            Q = e.type + ".iosSliderEvent";
                            f.changeSlide(c, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
                        })
                    });
                    "" != a.navPrevSelector && (b(a.navPrevSelector).css({
                        cursor: "pointer"
                    }), b(a.navPrevSelector).unbind(Q).bind(Q, function(c) {
                        "touchstart" == c.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
                        Q = c.type + ".iosSliderEvent";
                        c = (B[d] + y[d] + H) % H;
                        (0 < c || a.infiniteSlider) && f.changeSlide(c - 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
                    }));
                    "" != a.navNextSelector && (b(a.navNextSelector).css({
                        cursor: "pointer"
                    }), b(a.navNextSelector).unbind(Q).bind(Q, function(c) {
                        "touchstart" == c.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
                        Q = c.type + ".iosSliderEvent";
                        c = (B[d] + y[d] + H) % H;
                        (c < p.length - 1 || a.infiniteSlider) && f.changeSlide(c + 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
                    }));
                    a.autoSlide && !V && "" != a.autoSlideToggleSelector && (b(a.autoSlideToggleSelector).css({
                        cursor: "pointer"
                    }), b(a.autoSlideToggleSelector).unbind(Q).bind(Q, function(c) {
                        "touchstart" == c.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
                        Q = c.type + ".iosSliderEvent";
                        ka ? (f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a), ka = !1, b(a.autoSlideToggleSelector).removeClass("on")) : (f.autoSlidePause(d), ka = !0, b(a.autoSlideToggleSelector).addClass("on"))
                    }));
                    f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a);
                    b(l).bind("mouseleave.iosSliderEvent", function() {
                        if (ka) return !0;
                        f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
                    });
                    b(l).bind("touchend.iosSliderEvent", function() {
                        if (ka) return !0;
                        f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
                    });
                    a.autoSlideHoverPause && b(l).bind("mouseenter.iosSliderEvent", function() {
                        f.autoSlidePause(d)
                    });
                    b(l).data("iosslider", {
                        obj: Aa,
                        settings: a,
                        scrollerNode: F,
                        slideNodes: E,
                        numberOfSlides: H,
                        centeredSlideOffset: k,
                        sliderNumber: d,
                        originalOffsets: G,
                        childrenOffsets: p,
                        sliderMax: t[d],
                        scrollbarClass: w,
                        scrollbarWidth: u,
                        scrollbarStageWidth: r,
                        stageWidth: q,
                        scrollMargin: h,
                        scrollBorder: C,
                        infiniteSliderOffset: y[d],
                        infiniteSliderWidth: S,
                        slideNodeOuterWidths: M,
                        shortContent: V
                    });
                    L = !1;
                    return !0
                }
                ma++;
                var d = ma,
                    I = [];
                N[d] = b.extend({}, a);
                n[d] = 0;
                t[d] = 0;
                var O = [0, 0],
                    J = [0, 0],
                    K = "scrollbarBlock" + ma,
                    w = "scrollbar" + ma,
                    x, A, r, u, m, D, k = 0,
                    l = b(this),
                    q, s, h, C, z, L = !0;
                c = -1;
                var p, G = [],
                    ca = 0,
                    P = 0,
                    ia = 0,
                    F = b(this).children(":first-child"),
                    E, ha, M, H = b(F).children().not("script").length,
                    W = !1,
                    ja = 0,
                    wa = !1,
                    qa = void 0,
                    S;
                y[d] = 0;
                var V = !1,
                    ka = !1;
                ua[d] = !1;
                var Z, ra = !1,
                    la = !1,
                    Q = "touchstart.iosSliderEvent click.iosSliderEvent",
                    U, va, za, pa;
                fa[d] = !1;
                R[d] = [];
                a.scrollbarDrag && (a.scrollbar = !0, a.scrollbarHide = !1);
                var Aa = b(this);
                if (void 0 != Aa.data("iosslider")) return !0;
                14.2 <= parseInt(b().jquery.split(".").join(""), 10) ? b(this).delegate("img", "dragstart.iosSliderEvent", function(a) {
                    a.preventDefault()
                }) : b(this).find("img").bind("dragstart.iosSliderEvent", function(a) {
                    a.preventDefault()
                });
                a.infiniteSlider && (a.scrollbar = !1);
                a.infiniteSlider && 1 == H && (a.infiniteSlider = !1);
                a.scrollbar && ("" != a.scrollbarContainer ? b(a.scrollbarContainer).append("<div class = '" + K + "'><div class = '" + w + "'></div></div>") : b(F).parent().append("<div class = '" + K + "'><div class = '" + w + "'></div></div>"));
                if (!e()) return !0;
                b(this).find("a").bind("mousedown", f.preventDrag);
                b(this).find("[onclick]").bind("click", f.preventDrag).each(function() {
                    b(this).data("onclick", this.onclick)
                });
                c = f.calcActiveOffset(a, f.getSliderOffset(b(F), "x"), p, q, y[d], H, void 0, d);
                c = (c + y[d] + H) % H;
                c = new f.args("load", a, F, b(F).children(":eq(" + c + ")"), c, c);
                b(l).data("args", c);
                if ("" != a.onSliderLoaded) a.onSliderLoaded(c);
                a.scrollbarPaging && a.scrollbar && !V && (b(A).css("cursor", "pointer"), b(A).bind("click.iosSliderEvent", function(a) {
                    this == a.target && (a.pageX > b(x).offset().left ? $.nextPage(l) : $.prevPage(l))
                }));
                if (N[d].responsiveSlides || N[d].responsiveSlideContainer) c = Da ? "orientationchange" : "resize", b(window).bind(c + ".iosSliderEvent-" + d, function() {
                    if (!e()) return !0;
                    var c = b(l).data("args");
                    if ("" != a.onSliderResize) a.onSliderResize(c)
                });
                !a.keyboardControls && !a.tabToAdvance || V || b(document).bind("keydown.iosSliderEvent", function(b) {
                    da || Y || (b = b.originalEvent);
                    if ("INPUT" == b.target.nodeName || fa[d]) return !0;
                    if (37 == b.keyCode && a.keyboardControls) b.preventDefault(), b = (B[d] + y[d] + H) % H, (0 < b || a.infiniteSlider) && f.changeSlide(b - 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a);
                    else if (39 == b.keyCode && a.keyboardControls || 9 == b.keyCode && a.tabToAdvance) b.preventDefault(), b = (B[d] + y[d] + H) % H, (b < p.length - 1 || a.infiniteSlider) && f.changeSlide(b + 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
                });
                if (Ca || a.desktopClickDrag) {
                    var ba = !1,
                        xa = !1;
                    c = b(F);
                    var sa = b(F),
                        ya = !1;
                    a.scrollbarDrag && (c = c.add(x), sa = sa.add(A));
                    b(c).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(c) {
                        b(window).one("scroll.iosSliderEvent", function(a) {
                            ba = !1
                        });
                        if (ba) return !0;
                        ba = !0;
                        xa = !1;
                        "touchstart" == c.type ? b(sa).unbind("mousedown.iosSliderEvent") : b(sa).unbind("touchstart.iosSliderEvent");
                        if (fa[d] || V || (ya = f.isUnselectable(c.target, a))) return W = ba = !1, !0;
                        Z = b(this)[0] === b(x)[0] ? x : F;
                        da || Y || (c = c.originalEvent);
                        f.autoSlidePause(d);
                        pa.unbind(".disableClick");
                        if ("touchstart" == c.type) eventX = c.touches[0].pageX, eventY = c.touches[0].pageY;
                        else {
                            if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                            else if (document.selection)
                                if (Y) try {
                                    document.selection.empty()
                                } catch (e) {} else document.selection.empty();
                            eventX = c.pageX;
                            eventY = c.pageY;
                            wa = !0;
                            qa = F;
                            b(this).css({
                                cursor: ta
                            })
                        }
                        O = [0, 0];
                        J = [0, 0];
                        X = 0;
                        W = !1;
                        for (c = 0; c < I.length; c++) clearTimeout(I[c]);
                        c = f.getSliderOffset(F, "x");
                        c > -1 * n[d] + k + U ? (c = -1 * n[d] + k + U, f.setSliderOffset(b("." + w), c), b("." + w).css({
                            width: u - C + "px"
                        })) : c < -1 * t[d] && (c = -1 * t[d], f.setSliderOffset(b("." + w), r - h - u), b("." + w).css({
                            width: u - C + "px"
                        }));
                        c = b(this)[0] === b(x)[0] ? n[d] : 0;
                        P = -1 * (f.getSliderOffset(this, "x") - eventX - c);
                        f.getSliderOffset(this, "y");
                        O[1] = eventX;
                        J[1] = eventY;
                        la = !1
                    });
                    b(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(c) {
                        da || Y || (c = c.originalEvent);
                        if (fa[d] || V || ya || !ba) return !0;
                        var e = 0;
                        if ("touchmove" == c.type) eventX = c.touches[0].pageX, eventY = c.touches[0].pageY;
                        else {
                            if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                            else if (document.selection)
                                if (Y) try {
                                    document.selection.empty()
                                } catch (v) {} else document.selection.empty();
                            eventX = c.pageX;
                            eventY = c.pageY;
                            if (!wa || !na && ("undefined" != typeof c.webkitMovementX || "undefined" != typeof c.webkitMovementY) && 0 === c.webkitMovementY && 0 === c.webkitMovementX) return !0
                        }
                        O[0] = O[1];
                        O[1] = eventX;
                        X = (O[1] - O[0]) / 2;
                        J[0] = J[1];
                        J[1] = eventY;
                        ga = (J[1] - J[0]) / 2;
                        if (!W) {
                            var g = (B[d] + y[d] + H) % H,
                                g = new f.args("start", a, F, b(F).children(":eq(" + g + ")"), g, void 0);
                            b(l).data("args", g);
                            if ("" != a.onSlideStart) a.onSlideStart(g)
                        }(ga > a.verticalSlideLockThreshold || ga < -1 * a.verticalSlideLockThreshold) && "touchmove" == c.type && !W && (ra = !0);
                        (X > a.horizontalSlideLockThreshold || X < -1 * a.horizontalSlideLockThreshold) && "touchmove" == c.type && c.preventDefault();
                        if (X > a.slideStartVelocityThreshold || X < -1 * a.slideStartVelocityThreshold) W = !0;
                        if (W && !ra) {
                            var g = f.getSliderOffset(F, "x"),
                                m = b(Z)[0] === b(x)[0] ? n[d] : k,
                                s = b(Z)[0] === b(x)[0] ? (n[d] - t[d] - k) / (r - h - u) : 1,
                                A = b(Z)[0] === b(x)[0] ? a.scrollbarElasticPullResistance : a.elasticPullResistance,
                                D = a.snapSlideCenter && b(Z)[0] === b(x)[0] ? 0 : k,
                                K = a.snapSlideCenter && b(Z)[0] === b(x)[0] ? k : 0;
                            "touchmove" == c.type && (ia != c.touches.length && (P = -1 * g + eventX), ia = c.touches.length);
                            if (a.infiniteSlider) {
                                if (g <= -1 * t[d]) {
                                    var I = b(F).width();
                                    if (g <= -1 * oa[d]) {
                                        var L = -1 * G[0];
                                        b(E).each(function(a) {
                                            f.setSliderOffset(b(E)[a], L + k);
                                            a < p.length && (p[a] = -1 * L);
                                            L += M[a]
                                        });
                                        P -= -1 * p[0];
                                        n[d] = -1 * p[0] + k;
                                        t[d] = n[d] + I - q;
                                        y[d] = 0
                                    } else {
                                        var N = 0,
                                            S = f.getSliderOffset(b(E[0]), "x");
                                        b(E).each(function(a) {
                                            f.getSliderOffset(this, "x") < S && (S = f.getSliderOffset(this, "x"), N = a)
                                        });
                                        A = n[d] + I;
                                        f.setSliderOffset(b(E)[N], A);
                                        n[d] = -1 * p[1] + k;
                                        t[d] = n[d] + I - q;
                                        p.splice(0, 1);
                                        p.splice(p.length, 0, -1 * A + k);
                                        y[d]++
                                    }
                                }
                                if (g >= -1 * n[d] || 0 <= g)
                                    if (I = b(F).width(), 0 <= g)
                                        for (L = -1 * G[0], b(E).each(function(a) {
                                                f.setSliderOffset(b(E)[a], L + k);
                                                a < p.length && (p[a] = -1 * L);
                                                L += M[a]
                                            }), P += -1 * p[0], n[d] = -1 * p[0] + k, t[d] = n[d] + I - q, y[d] = H; 0 < -1 * p[0] - I + k;) {
                                            var Q = 0,
                                                R = f.getSliderOffset(b(E[0]), "x");
                                            b(E).each(function(a) {
                                                f.getSliderOffset(this, "x") > R && (R = f.getSliderOffset(this, "x"), Q = a)
                                            });
                                            A = n[d] - M[Q];
                                            f.setSliderOffset(b(E)[Q], A);
                                            p.splice(0, 0, -1 * A + k);
                                            p.splice(p.length - 1, 1);
                                            n[d] = -1 * p[0] + k;
                                            t[d] = n[d] + I - q;
                                            y[d]--;
                                            B[d]++
                                        } else Q = 0, R = f.getSliderOffset(b(E[0]), "x"), b(E).each(function(a) {
                                            f.getSliderOffset(this, "x") > R && (R = f.getSliderOffset(this, "x"), Q = a)
                                        }), A = n[d] - M[Q], f.setSliderOffset(b(E)[Q], A), p.splice(0, 0, -1 * A + k), p.splice(p.length - 1, 1), n[d] = -1 * p[0] + k, t[d] = n[d] + I - q, y[d]--
                            } else I = b(F).width(), g > -1 * n[d] + k && (e = (n[d] + -1 * (P - m - eventX + D) * s - m) * A * -1 / s), g < -1 * t[d] && (e = (t[d] + K + -1 * (P - m - eventX) * s - m) * A * -1 / s);
                            f.setSliderOffset(F, -1 * (P - m - eventX - e) * s - m + K);
                            a.scrollbar && (f.showScrollbar(a, w), T = Math.floor((P - eventX - e - n[d] + D) / (t[d] - n[d] + k) * (r - h - u) * s), g = u, 0 >= T ? (g = u - C - -1 * T, f.setSliderOffset(b("." + w), 0), b("." + w).css({
                                width: g + "px"
                            })) : T >= r - h - C - u ? (g = r - h - C - T, f.setSliderOffset(b("." + w), T), b("." + w).css({
                                width: g + "px"
                            })) : f.setSliderOffset(b("." + w), T));
                            "touchmove" == c.type && (z = c.touches[0].pageX);
                            c = !1;
                            e = f.calcActiveOffset(a, -1 * (P - eventX - e), p, q, y[d], H, void 0, d);
                            g = (e + y[d] + H) % H;
                            a.infiniteSlider ? g != aa[d] && (c = !0) : e != B[d] && (c = !0);
                            if (c) {
                                B[d] = e;
                                aa[d] = g;
                                la = !0;
                                g = new f.args("change", a, F, b(F).children(":eq(" + g + ")"), g, g);
                                b(l).data("args", g);
                                if ("" != a.onSlideChange) a.onSlideChange(g);
                                f.updateBackfaceVisibility(E, d, H, a)
                            }
                        }
                    });
                    var Ba = b(window);
                    if (Y || da) Ba = b(document);
                    b(c).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function(b) {
                        b = b.originalEvent;
                        if (xa) return !1;
                        xa = !0;
                        if (fa[d] || V || ya) return !0;
                        if (0 != b.touches.length)
                            for (var c = 0; c < b.touches.length; c++) b.touches[c].pageX == z && f.slowScrollHorizontal(F, E, I, w, X, ga, u, q, r, h, C, G, p, M, d, S, H, Z, la, k, a);
                        else f.slowScrollHorizontal(F, E, I, w, X, ga, u, q, r, h, C, G, p, M, d, S, H, Z, la, k, a);
                        ba = ra = !1;
                        return !0
                    });
                    b(Ba).bind("mouseup.iosSliderEvent-" + d, function(c) {
                        W ? va.unbind("click.disableClick").bind("click.disableClick", f.preventClick) : va.unbind("click.disableClick").bind("click.disableClick", f.enableClick);
                        za.each(function() {
                            this.onclick = function(a) {
                                if (W) return !1;
                                b(this).data("onclick") && b(this).data("onclick").call(this, a || window.event)
                            };
                            this.onclick = b(this).data("onclick")
                        });
                        1.8 <= parseFloat(b().jquery) ? pa.each(function() {
                            var a = b._data(this, "events");
                            if (void 0 != a && void 0 != a.click && "iosSliderEvent" != a.click[0].namespace) {
                                if (!W) return !1;
                                b(this).one("click.disableClick", f.preventClick);
                                var a = b._data(this, "events").click,
                                    c = a.pop();
                                a.splice(0, 0, c)
                            }
                        }) : 1.6 <= parseFloat(b().jquery) && pa.each(function() {
                            var a = b(this).data("events");
                            if (void 0 != a && void 0 != a.click && "iosSliderEvent" != a.click[0].namespace) {
                                if (!W) return !1;
                                b(this).one("click.disableClick", f.preventClick);
                                var a = b(this).data("events").click,
                                    c = a.pop();
                                a.splice(0, 0, c)
                            }
                        });
                        if (!ua[d]) {
                            if (V) return !0;
                            a.desktopClickDrag && b(F).css({
                                cursor: ea
                            });
                            a.scrollbarDrag && b(x).css({
                                cursor: ea
                            });
                            wa = !1;
                            if (void 0 == qa) return !0;
                            f.slowScrollHorizontal(qa, E, I, w, X, ga, u, q, r, h, C, G, p, M, d, S, H, Z, la, k, a);
                            qa = void 0
                        }
                        ba = ra = !1
                    })
                }
            })
        },
        destroy: function(e, c) {
            void 0 == c && (c = this);
            return b(c).each(function() {
                var a = b(this),
                    c = a.data("iosslider");
                if (void 0 == c) return !1;
                void 0 == e && (e = !0);
                f.autoSlidePause(c.sliderNumber);
                ua[c.sliderNumber] = !0;
                b(window).unbind(".iosSliderEvent-" + c.sliderNumber);
                b(document).unbind(".iosSliderEvent-" + c.sliderNumber);
                b(document).unbind("keydown.iosSliderEvent");
                b(this).unbind(".iosSliderEvent");
                b(this).children(":first-child").unbind(".iosSliderEvent");
                b(this).children(":first-child").children().unbind(".iosSliderEvent");
                b(c.settings.scrollbarBlockNode).unbind(".iosSliderEvent");
                e && (b(this).attr("style", ""), b(this).children(":first-child").attr("style", ""), b(this).children(":first-child").children().attr("style", ""), b(c.settings.navSlideSelector).attr("style", ""), b(c.settings.navPrevSelector).attr("style", ""), b(c.settings.navNextSelector).attr("style", ""), b(c.settings.autoSlideToggleSelector).attr("style", ""), b(c.settings.unselectableSelector).attr("style", ""));
                c.settings.scrollbar && b(".scrollbarBlock" + c.sliderNumber).remove();
                for (var c = R[c.sliderNumber], g = 0; g < c.length; g++) clearTimeout(c[g]);
                a.removeData("iosslider");
                a.removeData("args")
            })
        },
        update: function(e) {
            void 0 == e && (e = this);
            return b(e).each(function() {
                var c = b(this),
                    a = c.data("iosslider");
                if (void 0 == a) return !1;
                a.settings.startAtSlide = c.data("args").currentSlideNumber;
                $.destroy(!1, this);
                1 != a.numberOfSlides && a.settings.infiniteSlider && (a.settings.startAtSlide = (B[a.sliderNumber] + 1 + y[a.sliderNumber] + a.numberOfSlides) % a.numberOfSlides);
                $.init(a.settings, this);
                c = new f.args("update", a.settings, a.scrollerNode, b(a.scrollerNode).children(":eq(" + (a.settings.startAtSlide - 1) + ")"), a.settings.startAtSlide - 1, a.settings.startAtSlide - 1);
                b(a.stageNode).data("args", c);
                if ("" != a.settings.onSliderUpdate) a.settings.onSliderUpdate(c)
            })
        },
        addSlide: function(e, c) {
            return this.each(function() {
                var a = b(this),
                    f = a.data("iosslider");
                if (void 0 == f) return !1;
                0 == b(f.scrollerNode).children().length ? (b(f.scrollerNode).append(e), a.data("args").currentSlideNumber = 1) : f.settings.infiniteSlider ? (1 == c ? b(f.scrollerNode).children(":eq(0)").before(e) : b(f.scrollerNode).children(":eq(" + (c - 2) + ")").after(e), -1 > y[f.sliderNumber] && B[f.sliderNumber]--, a.data("args").currentSlideNumber >= c && B[f.sliderNumber]++) : (c <= f.numberOfSlides ? b(f.scrollerNode).children(":eq(" + (c - 1) + ")").before(e) : b(f.scrollerNode).children(":eq(" + (c - 2) + ")").after(e), a.data("args").currentSlideNumber >= c && a.data("args").currentSlideNumber++);
                a.data("iosslider").numberOfSlides++;
                $.update(this)
            })
        },
        removeSlide: function(e) {
            return this.each(function() {
                var c = b(this),
                    a = c.data("iosslider");
                if (void 0 == a) return !1;
                b(a.scrollerNode).children(":eq(" + (e - 1) + ")").remove();
                B[a.sliderNumber] > e - 1 && B[a.sliderNumber]--;
                c.data("iosslider").numberOfSlides--;
                $.update(this)
            })
        },
        goToSlide: function(e, c, a) {
            void 0 == a && (a = this);
            return b(a).each(function() {
                var a = b(this).data("iosslider");
                if (void 0 == a || a.shortContent) return !1;
                e = e > a.childrenOffsets.length ? a.childrenOffsets.length - 1 : e - 1;
                void 0 != c && (a.settings.autoSlideTransTimer = c);
                f.changeSlide(e, b(a.scrollerNode), b(a.slideNodes), R[a.sliderNumber], a.scrollbarClass, a.scrollbarWidth, a.stageWidth, a.scrollbarStageWidth, a.scrollMargin, a.scrollBorder, a.originalOffsets, a.childrenOffsets, a.slideNodeOuterWidths, a.sliderNumber, a.infiniteSliderWidth, a.numberOfSlides, a.centeredSlideOffset, a.settings)
            })
        },
        prevSlide: function(e) {
            return this.each(function() {
                var c = b(this).data("iosslider");
                if (void 0 == c || c.shortContent) return !1;
                var a = (B[c.sliderNumber] + y[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides;
                void 0 != e && (c.settings.autoSlideTransTimer = e);
                (0 < a || c.settings.infiniteSlider) && f.changeSlide(a - 1, b(c.scrollerNode), b(c.slideNodes), R[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings);
                B[c.sliderNumber] = a
            })
        },
        nextSlide: function(e) {
            return this.each(function() {
                var c = b(this).data("iosslider");
                if (void 0 == c || c.shortContent) return !1;
                var a = (B[c.sliderNumber] + y[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides;
                void 0 != e && (c.settings.autoSlideTransTimer = e);
                (a < c.childrenOffsets.length - 1 || c.settings.infiniteSlider) && f.changeSlide(a + 1, b(c.scrollerNode), b(c.slideNodes), R[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings);
                B[c.sliderNumber] = a
            })
        },
        prevPage: function(e, c) {
            void 0 == c && (c = this);
            return b(c).each(function() {
                var a = b(this).data("iosslider");
                if (void 0 == a) return !1;
                var c = f.getSliderOffset(a.scrollerNode, "x") + a.stageWidth;
                void 0 != e && (a.settings.autoSlideTransTimer = e);
                f.changeOffset(c, b(a.scrollerNode), b(a.slideNodes), R[a.sliderNumber], a.scrollbarClass, a.scrollbarWidth, a.stageWidth, a.scrollbarStageWidth, a.scrollMargin, a.scrollBorder, a.originalOffsets, a.childrenOffsets, a.slideNodeOuterWidths, a.sliderNumber, a.infiniteSliderWidth, a.numberOfSlides, a.centeredSlideOffset, a.settings)
            })
        },
        nextPage: function(e, c) {
            void 0 == c && (c = this);
            return b(c).each(function() {
                var a = b(this).data("iosslider");
                if (void 0 == a) return !1;
                var c = f.getSliderOffset(a.scrollerNode, "x") - a.stageWidth;
                void 0 != e && (a.settings.autoSlideTransTimer = e);
                f.changeOffset(c, b(a.scrollerNode), b(a.slideNodes), R[a.sliderNumber], a.scrollbarClass, a.scrollbarWidth, a.stageWidth, a.scrollbarStageWidth, a.scrollMargin, a.scrollBorder, a.originalOffsets, a.childrenOffsets, a.slideNodeOuterWidths, a.sliderNumber, a.infiniteSliderWidth, a.numberOfSlides, a.centeredSlideOffset, a.settings)
            })
        },
        lock: function() {
            return this.each(function() {
                var e = b(this).data("iosslider");
                if (void 0 == e || e.shortContent) return !1;
                b(e.scrollerNode).css({
                    cursor: "default"
                });
                fa[e.sliderNumber] = !0
            })
        },
        unlock: function() {
            return this.each(function() {
                var e = b(this).data("iosslider");
                if (void 0 == e || e.shortContent) return !1;
                b(e.scrollerNode).css({
                    cursor: ea
                });
                fa[e.sliderNumber] = !1
            })
        },
        getData: function() {
            return this.each(function() {
                var e = b(this).data("iosslider");
                return void 0 == e || e.shortContent ? !1 : e
            })
        },
        autoSlidePause: function() {
            return this.each(function() {
                var e = b(this).data("iosslider");
                if (void 0 == e || e.shortContent) return !1;
                N[e.sliderNumber].autoSlide = !1;
                f.autoSlidePause(e.sliderNumber);
                return e
            })
        },
        autoSlidePlay: function() {
            return this.each(function() {
                var e = b(this).data("iosslider");
                if (void 0 == e || e.shortContent) return !1;
                N[e.sliderNumber].autoSlide = !0;
                f.autoSlide(b(e.scrollerNode), b(e.slideNodes), R[e.sliderNumber], e.scrollbarClass, e.scrollbarWidth, e.stageWidth, e.scrollbarStageWidth, e.scrollMargin, e.scrollBorder, e.originalOffsets, e.childrenOffsets, e.slideNodeOuterWidths, e.sliderNumber, e.infiniteSliderWidth, e.numberOfSlides, e.centeredSlideOffset, e.settings);
                return e
            })
        }
    };
    b.fn.iosSlider = function(e) {
        if ($[e]) return $[e].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof e && e) b.error("invalid method call!");
        else return $.init.apply(this, arguments)
    }
})(jQuery);

! function(e) {
    "use strict";
    e(document).ready(function() {
        var i = function(i) {
                function s(i) {
                    var s = e(i.sliderObject),
                        l = i.currentSlideNumber - 1,
                        d = s.closest(".iosslider-slideshow");
                    d.find(".kl-ios-selectors-block .iosslider__bull-item").removeClass("selected"), d.find(".kl-ios-selectors-block .iosslider__bull-item:eq(" + l + ")").addClass("selected"), s.find(".iosslider__item").removeClass("kl-iosslider-active"), s.find(".iosslider__item:eq(" + l + ")").addClass("kl-iosslider-active")
                }

                function l(i, l) {
                    var d = e(i.sliderObject);
                    l.hideControls && d.addClass("hideControls"), l.hideCaptions && d.addClass("hideCaptions"), "undefined" != typeof i.currentSlideNumber && s(i), d.closest(".iosslider-slideshow").addClass("kl-slider-loaded")
                }
                var d = i.find(".iosSlider");
                d && d.length && "undefined" != typeof e.fn.iosSlider && e.each(d, function(i, d) {
                    var o = e(d),
                        r = o.closest(".kl-slideshow");
                    o.iosSlider({
                        snapToChildren: !0,
                        desktopClickDrag: !0,
                        keyboardControls: !0,
                        autoSlide: "1" == o.data("autoplay") ? !0 : !1,
                        autoSlideTimer: o.data("trans"),
                        navNextSelector: r.find(".kl-iosslider-next"),
                        navPrevSelector: r.find(".kl-iosslider-prev"),
                        navSlideSelector: r.find(".kl-ios-selectors-block .item"),
                        scrollbar: !0,
                        scrollbarContainer: r.find(".scrollbarContainer"),
                        scrollbarMargin: "0",
                        scrollbarBorderRadius: "4px",
                        onSliderLoaded: function(e) {
                            var i = {
                                hideControls: !0,
                                hideCaptions: !1
                            };
                            l(e, i)
                        },
                        onSlideChange: s,
                        infiniteSlider: o.data("infinite")
                    }), e(window).on("debouncedresize", function() {
                        "undefined" != typeof e.fn.iosSlider && o.iosSlider("update")
                    })
                })
            },
            s = e(".iosslider-slideshow");
        s && i(s)
    })
}(jQuery);

/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($) {
    function sc_setScroll(a, b, c) {
        return "transition" == c.transition && "swing" == b && (b = "ease"), {
            anims: [],
            duration: a,
            orgDuration: a,
            easing: b,
            startTime: getTime()
        }
    }

    function sc_startScroll(a, b) {
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e && e[0][b.transition](e[1], a.duration, a.easing, e[2])
        }
    }

    function sc_stopScroll(a, b) {
        is_boolean(b) || (b = !0), is_object(a.pre) && sc_stopScroll(a.pre, b);
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e[0].stop(!0), b && (e[0].css(e[1]), is_function(e[2]) && e[2]())
        }
        is_object(a.post) && sc_stopScroll(a.post, b)
    }

    function sc_afterScroll(a, b, c) {
        switch (b && b.remove(), c.fx) {
            case "fade":
            case "crossfade":
            case "cover-fade":
            case "uncover-fade":
                a.css("opacity", 1), a.css("filter", "")
        }
    }

    function sc_fireCallbacks(a, b, c, d, e) {
        if (b[c] && b[c].call(a, d), e[c].length)
            for (var f = 0, g = e[c].length; g > f; f++) e[c][f].call(a, d);
        return []
    }

    function sc_fireQueue(a, b, c) {
        return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]), b.shift()), b
    }

    function sc_hideHiddenItems(a) {
        a.each(function() {
            var a = $(this);
            a.data("_cfs_isHidden", a.is(":hidden")).hide()
        })
    }

    function sc_showHiddenItems(a) {
        a && a.each(function() {
            var a = $(this);
            a.data("_cfs_isHidden") || a.show()
        })
    }

    function sc_clearTimers(a) {
        return a.auto && clearTimeout(a.auto), a.progress && clearInterval(a.progress), a
    }

    function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
        return {
            width: g.width,
            height: g.height,
            items: {
                old: a,
                skipped: b,
                visible: c
            },
            scroll: {
                items: d,
                direction: e,
                duration: f
            }
        }
    }

    function sc_getDuration(a, b, c, d) {
        var e = a.duration;
        return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e), 1 > e ? 0 : ("fade" == a.fx && (e /= 2), Math.round(e)))
    }

    function nv_showNavi(a, b, c) {
        var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1;
        if ("show" == b || "hide" == b) var e = b;
        else if (d > b) {
            debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation.");
            var e = "hide"
        } else var e = "show";
        var f = "show" == e ? "removeClass" : "addClass",
            g = cf_c("hidden", c);
        a.auto.button && a.auto.button[e]()[f](g), a.prev.button && a.prev.button[e]()[f](g), a.next.button && a.next.button[e]()[f](g), a.pagination.container && a.pagination.container[e]()[f](g)
    }

    function nv_enableNavi(a, b, c) {
        if (!a.circular && !a.infinite) {
            var d = "removeClass" == b || "addClass" == b ? b : !1,
                e = cf_c("disabled", c);
            if (a.auto.button && d && a.auto.button[d](e), a.prev.button) {
                var f = d || 0 == b ? "addClass" : "removeClass";
                a.prev.button[f](e)
            }
            if (a.next.button) {
                var f = d || b == a.items.visible ? "addClass" : "removeClass";
                a.next.button[f](e)
            }
        }
    }

    function go_getObject(a, b) {
        return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}), b
    }

    function go_getItemsObject(a, b) {
        return b = go_getObject(a, b), is_number(b) ? b = {
            visible: b
        } : "variable" == b ? b = {
            visible: b,
            width: b,
            height: b
        } : is_object(b) || (b = {}), b
    }

    function go_getScrollObject(a, b) {
        return b = go_getObject(a, b), is_number(b) ? b = 50 >= b ? {
            items: b
        } : {
            duration: b
        } : is_string(b) ? b = {
            easing: b
        } : is_object(b) || (b = {}), b
    }

    function go_getNaviObject(a, b) {
        if (b = go_getObject(a, b), is_string(b)) {
            var c = cf_getKeyCode(b);
            b = -1 == c ? $(b) : c
        }
        return b
    }

    function go_getAutoObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            button: b
        } : is_boolean(b) ? b = {
            play: b
        } : is_number(b) && (b = {
            timeoutDuration: b
        }), b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = {
            bar: b.progress
        }), b
    }

    function go_complementAutoObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_boolean(b.play) || (b.play = !0), is_number(b.delay) || (b.delay = 0), is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0), is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0), is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration), b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)), is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)), b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1), b
    }

    function go_getPrevNextObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            button: b
        } : is_number(b) && (b = {
            key: b
        }), b
    }

    function go_complementPrevNextObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_string(b.key) && (b.key = cf_getKeyCode(b.key)), b
    }

    function go_getPaginationObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            container: b
        } : is_boolean(b) && (b = {
            keys: b
        }), b
    }

    function go_complementPaginationObject(a, b) {
        return is_function(b.container) && (b.container = b.container.call(a)), is_string(b.container) && (b.container = $(b.container)), is_number(b.items) || (b.items = !1), is_boolean(b.keys) || (b.keys = !1), is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(b.deviation) || (b.deviation = 0), b
    }

    function go_getSwipeObject(a, b) {
        return is_function(b) && (b = b.call(a)), is_undefined(b) && (b = {
            onTouch: !1
        }), is_true(b) ? b = {
            onTouch: b
        } : is_number(b) && (b = {
            items: b
        }), b
    }

    function go_complementSwipeObject(a, b) {
        return is_boolean(b.onTouch) || (b.onTouch = !0), is_boolean(b.onMouse) || (b.onMouse = !1), is_object(b.options) || (b.options = {}), is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1), b
    }

    function go_getMousewheelObject(a, b) {
        return is_function(b) && (b = b.call(a)), is_true(b) ? b = {} : is_number(b) ? b = {
            items: b
        } : is_undefined(b) && (b = !1), b
    }

    function go_complementMousewheelObject(a, b) {
        return b
    }

    function gn_getItemIndex(a, b, c, d, e) {
        if (is_string(a) && (a = $(a, e)), is_object(a) && (a = $(a, e)), is_jquery(a) ? (a = e.children().index(a), is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0), is_number(a) || (a = 0), is_number(b) || (b = 0), c && (a += d.first), a += b, d.total > 0) {
            for (; a >= d.total;) a -= d.total;
            for (; 0 > a;) a += d.total
        }
        return a
    }

    function gn_getVisibleItemsPrev(a, b, c) {
        for (var d = 0, e = 0, f = c; f >= 0; f--) {
            var g = a.eq(f);
            if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
            0 == f && (f = a.length), e++
        }
    }

    function gn_getVisibleItemsPrevFilter(a, b, c) {
        return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c)
    }

    function gn_getScrollItemsPrevFilter(a, b, c, d) {
        return gn_getItemsPrevFilter(a, b.items.filter, d, c)
    }

    function gn_getItemsPrevFilter(a, b, c, d) {
        for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) {
            if (f++, f == h) return f;
            var i = a.eq(g);
            if (i.is(b) && (e++, e == c)) return f;
            0 == g && (g = h)
        }
    }

    function gn_getVisibleOrg(a, b) {
        return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length
    }

    function gn_getVisibleItemsNext(a, b, c) {
        for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) {
            var h = a.eq(f);
            if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
            if (e++, e == g + 1) return e;
            f == g && (f = -1)
        }
    }

    function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
        var e = gn_getVisibleItemsNext(a, b, c);
        return b.circular || c + e > d && (e = d - c), e
    }

    function gn_getVisibleItemsNextFilter(a, b, c) {
        return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular)
    }

    function gn_getScrollItemsNextFilter(a, b, c, d) {
        return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1
    }

    function gn_getItemsNextFilter(a, b, c, d) {
        for (var f = 0, g = 0, h = d, i = a.length - 1; i >= h; h++) {
            if (g++, g >= i) return g;
            var j = a.eq(h);
            if (j.is(b) && (f++, f == c)) return g;
            h == i && (h = -1)
        }
    }

    function gi_getCurrentItems(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsPrev(a, b, c) {
        return a.slice(c, b.items.visibleConf.old + c)
    }

    function gi_getNewItemsPrev(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsNext(a, b) {
        return a.slice(0, b.items.visibleConf.old)
    }

    function gi_getNewItemsNext(a, b, c) {
        return a.slice(c, b.items.visible + c)
    }

    function sz_storeMargin(a, b, c) {
        b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"), a.each(function() {
            var a = $(this),
                d = parseInt(a.css(b.d.marginRight), 10);
            is_number(d) || (d = 0), a.data(c, d)
        }))
    }

    function sz_resetMargin(a, b, c) {
        if (b.usePadding) {
            var d = is_boolean(c) ? c : !1;
            is_number(c) || (c = 0), sz_storeMargin(a, b, "_cfs_tempCssMargin"), a.each(function() {
                var a = $(this);
                a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin"))
            })
        }
    }

    function sz_storeOrigCss(a) {
        a.each(function() {
            var a = $(this);
            a.data("_cfs_origCss", a.attr("style") || "")
        })
    }

    function sz_restoreOrigCss(a) {
        a.each(function() {
            var a = $(this);
            a.attr("style", a.data("_cfs_origCss") || "")
        })
    }

    function sz_setResponsiveSizes(a, b) {
        var d = (a.items.visible, a.items[a.d.width]),
            e = a[a.d.height],
            f = is_percentage(e);
        b.each(function() {
            var b = $(this),
                c = d - ms_getPaddingBorderMargin(b, a, "Width");
            b[a.d.width](c), f && b[a.d.height](ms_getPercentage(c, e))
        })
    }

    function sz_setSizes(a, b) {
        var c = a.parent(),
            d = a.children(),
            e = gi_getCurrentItems(d, b),
            f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1);
        if (c.css(f), b.usePadding) {
            var g = b.padding,
                h = g[b.d[1]];
            b.align && 0 > h && (h = 0);
            var i = e.last();
            i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h), a.css(b.d.top, g[b.d[0]]), a.css(b.d.left, g[b.d[3]])
        }
        return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")), a.css(b.d.height, ms_getLargestSize(d, b, "height")), f
    }

    function ms_getSizes(a, b, c) {
        return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)]
    }

    function ms_getLargestSize(a, b, c, d) {
        return is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(a, b, c))
    }

    function ms_getTrueLargestSize(a, b, c) {
        for (var d = 0, e = 0, f = a.length; f > e; e++) {
            var g = a.eq(e),
                h = g.is(":visible") ? g[b.d[c]](!0) : 0;
            h > d && (d = h)
        }
        return d
    }

    function ms_getTotalSize(a, b, c, d) {
        if (is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d) return b[b.d[c]];
        if (is_number(b.items[b.d[c]])) return b.items[b.d[c]] * a.length;
        for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) {
            var i = a.eq(g);
            f += i.is(":visible") ? i[b.d[e]](!0) : 0
        }
        return f
    }

    function ms_getParentSize(a, b, c) {
        var d = a.is(":visible");
        d && a.hide();
        var e = a.parent()[b.d[c]]();
        return d && a.show(), e
    }

    function ms_getMaxDimension(a, b) {
        return is_number(a[a.d.width]) ? a[a.d.width] : b
    }

    function ms_hasVariableSizes(a, b, c) {
        for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) {
            var h = a.eq(f),
                i = h.is(":visible") ? h[b.d[c]](!0) : 0;
            d === !1 ? d = i : d != i && (e = !0), 0 == d && (e = !0)
        }
        return e
    }

    function ms_getPaddingBorderMargin(a, b, c) {
        return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]()
    }

    function ms_getPercentage(a, b) {
        if (is_percentage(b)) {
            if (b = parseInt(b.slice(0, -1), 10), !is_number(b)) return a;
            a *= b / 100
        }
        return a
    }

    function cf_e(a, b, c, d, e) {
        return is_boolean(c) || (c = !0), is_boolean(d) || (d = !0), is_boolean(e) || (e = !1), c && (a = b.events.prefix + a), d && (a = a + "." + b.events.namespace), d && e && (a += b.serialNumber), a
    }

    function cf_c(a, b) {
        return is_string(b.classnames[a]) ? b.classnames[a] : a
    }

    function cf_mapWrapperSizes(a, b, c) {
        is_boolean(c) || (c = !0);
        var d = b.usePadding && c ? b.padding : [0, 0, 0, 0],
            e = {};
        return e[b.d.width] = a[0] + d[1] + d[3], e[b.d.height] = a[1] + d[0] + d[2], e
    }

    function cf_sortParams(a, b) {
        for (var c = [], d = 0, e = a.length; e > d; d++)
            for (var f = 0, g = b.length; g > f; f++)
                if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) {
                    c[f] = a[d];
                    break
                }
        return c
    }

    function cf_getPadding(a) {
        if (is_undefined(a)) return [0, 0, 0, 0];
        if (is_number(a)) return [a, a, a, a];
        if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")), !is_array(a)) return [0, 0, 0, 0];
        for (var b = 0; 4 > b; b++) a[b] = parseInt(a[b], 10);
        switch (a.length) {
            case 0:
                return [0, 0, 0, 0];
            case 1:
                return [a[0], a[0], a[0], a[0]];
            case 2:
                return [a[0], a[1], a[0], a[1]];
            case 3:
                return [a[0], a[1], a[2], a[1]];
            default:
                return [a[0], a[1], a[2], a[3]]
        }
    }

    function cf_getAlignPadding(a, b) {
        var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0;
        switch (b.align) {
            case "left":
                return [0, c];
            case "right":
                return [c, 0];
            case "center":
            default:
                return [Math.ceil(c / 2), Math.floor(c / 2)]
        }
    }

    function cf_getDimensions(a) {
        for (var b = [
                ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
                ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
            ], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++) e[b[0][f]] = b[d][f];
        return e
    }

    function cf_getAdjust(a, b, c, d) {
        var e = a;
        if (is_function(c)) e = c.call(d, e);
        else if (is_string(c)) {
            var f = c.split("+"),
                g = c.split("-");
            if (g.length > f.length) var h = !0,
                i = g[0],
                j = g[1];
            else var h = !1,
                i = f[0],
                j = f[1];
            switch (i) {
                case "even":
                    e = 1 == a % 2 ? a - 1 : a;
                    break;
                case "odd":
                    e = 0 == a % 2 ? a - 1 : a;
                    break;
                default:
                    e = a
            }
            j = parseInt(j, 10), is_number(j) && (h && (j = -j), e += j)
        }
        return (!is_number(e) || 1 > e) && (e = 1), e
    }

    function cf_getItemsAdjust(a, b, c, d) {
        return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf)
    }

    function cf_getItemAdjustMinMax(a, b) {
        return is_number(b.min) && b.min > a && (a = b.min), is_number(b.max) && a > b.max && (a = b.max), 1 > a && (a = 1), a
    }

    function cf_getSynchArr(a) {
        is_array(a) || (a = [
            [a]
        ]), is_array(a[0]) || (a = [a]);
        for (var b = 0, c = a.length; c > b; b++) is_string(a[b][0]) && (a[b][0] = $(a[b][0])), is_boolean(a[b][1]) || (a[b][1] = !0), is_boolean(a[b][2]) || (a[b][2] = !0), is_number(a[b][3]) || (a[b][3] = 0);
        return a
    }

    function cf_getKeyCode(a) {
        return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1
    }

    function cf_setCookie(a, b, c) {
        if (a) {
            var d = b.triggerHandler(cf_e("currentPosition", c));
            $.fn.carouFredSel.cookie.set(a, d)
        }
    }

    function cf_getCookie(a) {
        var b = $.fn.carouFredSel.cookie.get(a);
        return "" == b ? 0 : b
    }

    function in_mapCss(a, b) {
        for (var c = {}, d = 0, e = b.length; e > d; d++) c[b[d]] = a.css(b[d]);
        return c
    }

    function in_complementItems(a, b, c, d) {
        return is_object(a.visibleConf) || (a.visibleConf = {}), is_object(a.sizesConf) || (a.sizesConf = {}), 0 == a.start && is_number(d) && (a.start = d), is_object(a.visible) ? (a.visibleConf.min = a.visible.min, a.visibleConf.max = a.visible.max, a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible, a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible, a.visible = !1), is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"), a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"), a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)), a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)), a.sizesConf.width = a.width, a.sizesConf.height = a.height, a
    }

    function in_complementVisibleItems(a, b) {
        return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0), a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]), a[a.d.width] = a.items.visible * a.items[a.d.width], a.items.visibleConf.adjust || (a.align = !1)), ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), a.items.visibleConf.variable = !0)), a
    }

    function in_complementPrimarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")), a
    }

    function in_complementSecondarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")), a || (a = b.items[b.d.height]), a
    }

    function in_getAlignPadding(a, b) {
        var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a);
        return a.padding[a.d[1]] = c[1], a.padding[a.d[3]] = c[0], a
    }

    function in_getResponsiveValues(a, b) {
        var d = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf);
        d > b.length && (d = b.length);
        var e = Math.floor(a[a.d.width] / d);
        return a.items.visible = d, a.items[a.d.width] = e, a[a.d.width] = d * e, a
    }

    function bt_pauseOnHoverConfig(a) {
        if (is_string(a)) var b = a.indexOf("immediate") > -1 ? !0 : !1,
            c = a.indexOf("resume") > -1 ? !0 : !1;
        else var b = c = !1;
        return [b, c]
    }

    function bt_mousesheelNumber(a) {
        return is_number(a) ? a : null
    }

    function is_null(a) {
        return null === a
    }

    function is_undefined(a) {
        return is_null(a) || a === void 0 || "" === a || "undefined" === a
    }

    function is_array(a) {
        return a instanceof Array
    }

    function is_jquery(a) {
        return a instanceof jQuery
    }

    function is_object(a) {
        return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a)
    }

    function is_number(a) {
        return (a instanceof Number || "number" == typeof a) && !isNaN(a)
    }

    function is_string(a) {
        return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a)
    }

    function is_function(a) {
        return a instanceof Function || "function" == typeof a
    }

    function is_boolean(a) {
        return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a)
    }

    function is_true(a) {
        return a === !0 || "true" === a
    }

    function is_false(a) {
        return a === !1 || "false" === a
    }

    function is_percentage(a) {
        return is_string(a) && "%" == a.slice(-1)
    }

    function getTime() {
        return (new Date).getTime()
    }

    function deprecated(a, b) {
        debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.")
    }

    function debug(a, b) {
        if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
            if (is_object(a)) {
                var c = " (" + a.selector + ")";
                a = a.debug
            } else var c = "";
            if (!a) return !1;
            b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b], window.console.log(b)
        }
        return !1
    }
    $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
        if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
        if (this.length > 1) return this.each(function() {
            $(this).carouFredSel(options, configs)
        });
        var $cfs = this,
            $tt0 = this[0],
            starting_position = !1;
        $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
        var FN = {};
        FN._init = function(a, b, c) {
            a = go_getObject($tt0, a), a.items = go_getItemsObject($tt0, a.items), a.scroll = go_getScrollObject($tt0, a.scroll), a.auto = go_getAutoObject($tt0, a.auto), a.prev = go_getPrevNextObject($tt0, a.prev), a.next = go_getPrevNextObject($tt0, a.next), a.pagination = go_getPaginationObject($tt0, a.pagination), a.swipe = go_getSwipeObject($tt0, a.swipe), a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel), b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
            var d = $cfs.children(),
                e = ms_getParentSize($wrp, opts, "width");
            if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, e), opts.items = in_complementItems(opts.items, opts, d, c), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, d, e);
            else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
                case "center":
                case "left":
                case "right":
                    "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d), opts.usePadding = !0);
                    break;
                default:
                    opts.align = !1, opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0
            }
            is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
        }, FN._build = function() {
            $cfs.data("_cfs_isCarousel", !0);
            var a = $cfs.children(),
                b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                c = "relative";
            switch (b.position) {
                case "absolute":
                case "fixed":
                    c = b.position
            }
            "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b), $wrp.css({
                overflow: "hidden",
                position: c
            }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", b.zIndex), $cfs.css({
                textAlign: "left",
                "float": "none",
                position: "absolute",
                top: 0,
                right: "auto",
                bottom: "auto",
                left: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            }), sz_storeMargin(a, opts), sz_storeOrigCss(a), opts.responsive && sz_setResponsiveSizes(opts, a)
        }, FN._bind_events = function() {
            FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function(a, b) {
                return a.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), b)), !0
            }), $cfs.bind(cf_e("finish", conf), function(a) {
                return a.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
            }), $cfs.bind(cf_e("pause", conf), function(a, b, c) {
                if (a.stopPropagation(), tmrs = sc_clearTimers(tmrs), b && crsl.isScrolling) {
                    scrl.isStopped = !0;
                    var d = getTime() - scrl.startTime;
                    scrl.duration -= d, scrl.pre && (scrl.pre.duration -= d), scrl.post && (scrl.post.duration -= d), sc_stopScroll(scrl, !1)
                }
                if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
                    var e = opts.auto.timeoutDuration - tmrs.timePassed,
                        f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration);
                    opts.auto.onTimeoutPause.call($tt0, f, e)
                }
                return !0
            }), $cfs.bind(cf_e("play", conf), function(a, b, c, d) {
                a.stopPropagation(), tmrs = sc_clearTimers(tmrs);
                var e = [b, c, d],
                    f = ["string", "number", "boolean"],
                    g = cf_sortParams(e, f);
                if (b = g[0], c = g[1], d = g[2], "prev" != b && "next" != b && (b = crsl.direction), is_number(c) || (c = 0), is_boolean(d) || (d = !1), d && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
                crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
                var h = opts.auto.timeoutDuration + c;
                return dur2 = h - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / h), opts.auto.progress && (tmrs.progress = setInterval(function() {
                    var a = getTime() - tmrs.startTime + tmrs.timePassed,
                        b = Math.ceil(100 * a / h);
                    opts.auto.progress.updater.call(opts.auto.progress.bar[0], b)
                }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function() {
                    opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto)
                }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
            }), $cfs.bind(cf_e("resume", conf), function(a) {
                return a.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
            }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(a, b, c, d, e) {
                if (a.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
                var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                if (f > itms.total) return a.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling.");
                var g = [b, c, d, e],
                    h = ["object", "number/string", "function", "boolean"],
                    i = cf_sortParams(g, h);
                b = i[0], c = i[1], d = i[2], e = i[3];
                var j = a.type.slice(conf.events.prefix.length);
                if (is_object(b) || (b = {}), is_function(d) && (b.onAfter = d), is_boolean(e) && (b.queue = e), b = $.extend(!0, {}, opts[j], b), b.conditions && !b.conditions.call($tt0, j)) return a.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
                if (!is_number(c)) {
                    if ("*" != opts.items.filter) c = "visible";
                    else
                        for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++)
                            if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) {
                                c = k[i];
                                break
                            } switch (c) {
                        case "page":
                            return a.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]);
                        case "visible":
                            opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible)
                    }
                }
                if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]), a.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
                if (b.duration > 0 && crsl.isScrolling) return b.queue && ("last" == b.queue && (queu = []), ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])), a.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
                if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + j, conf), [b, c]), opts.synchronise)
                    for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) {
                        var p = j;
                        m[o][2] || (p = "prev" == p ? "next" : "prev"), m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])), n[1] = c + m[o][3], m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n])
                    }
                return !0
            }), $cfs.bind(cf_e("slide_prev", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), a.stopImmediatePropagation();
                if (sz_resetMargin(d, opts), !is_number(c)) {
                    if (opts.items.visibleConf.variable) c = gn_getVisibleItemsPrev(d, opts, itms.total - 1);
                    else if ("*" != opts.items.filter) {
                        var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e)
                    } else c = opts.items.visible;
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                    var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0);
                    f >= opts.items.visible + c && itms.total > c && (c++, f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = f
                } else if ("*" != opts.items.filter) {
                    var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
                    opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                for (debug(conf, "Scrolling " + c + " items backward."), itms.first += c; itms.first >= itms.total;) itms.first -= itms.total;
                opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children(),
                    g = gi_getOldItemsPrev(d, opts, c),
                    h = gi_getNewItemsPrev(d, opts),
                    i = d.eq(c - 1),
                    j = g.last(),
                    k = h.last();
                sz_resetMargin(d, opts);
                var l = 0,
                    m = 0;
                if (opts.align) {
                    var n = cf_getAlignPadding(h, opts);
                    l = n[0], m = n[1]
                }
                var o = 0 > l ? opts.padding[opts.d[3]] : 0,
                    p = !1,
                    q = $();
                if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q, i = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                }
                var s = !1,
                    t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                    u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding),
                    v = 0,
                    w = {},
                    x = {},
                    y = {},
                    z = {},
                    A = {},
                    B = {},
                    C = {},
                    D = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                    case "cover":
                    case "cover-fade":
                        v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width")
                }
                p && (opts.items[opts.d.width] = r), sz_resetMargin(d, opts, !0), m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]), l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = m, opts.padding[opts.d[3]] = l), B[opts.d.left] = -(t - o), C[opts.d.left] = -(v - o), x[opts.d.left] = u[opts.d.width];
                var E = function() {},
                    F = function() {},
                    G = function() {},
                    H = function() {},
                    I = function() {},
                    J = function() {},
                    K = function() {},
                    L = function() {},
                    M = function() {},
                    N = function() {},
                    O = function() {};
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        s = $cfs.clone(!0).appendTo($wrp)
                }
                switch (b.fx) {
                    case "crossfade":
                    case "uncover":
                    case "uncover-fade":
                        s.children().slice(0, c).remove(), s.children().slice(opts.items.visibleConf.old).remove();
                        break;
                    case "cover":
                    case "cover-fade":
                        s.children().slice(opts.items.visible).remove(), s.css(C)
                }
                if ($cfs.css(B), scrl = sc_setScroll(D, b.easing, conf), w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function() {
                        $wrp.css(u)
                    }, F = function() {
                        scrl.anims.push([$wrp, u])
                    }), opts.usePadding) {
                    switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"), 0 > l ? i.css(y) : (K = function() {
                        i.css(y)
                    }, L = function() {
                        scrl.anims.push([i, y])
                    })), b.fx) {
                        case "cover":
                        case "cover-fade":
                            s.children().eq(c - 1).css(y)
                    }
                    k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"), G = function() {
                        j.css(z)
                    }, H = function() {
                        scrl.anims.push([j, z])
                    }), m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], I = function() {
                        k.css(A)
                    }, J = function() {
                        scrl.anims.push([k, A])
                    })
                }
                O = function() {
                    $cfs.css(w)
                };
                var P = opts.items.visible + c - itms.total;
                N = function() {
                    if (P > 0 && ($cfs.children().slice(itms.total).remove(), g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))), sc_showHiddenItems(p), opts.usePadding) {
                        var a = $cfs.children().eq(opts.items.visible + c - 1);
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                };
                var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u);
                switch (M = function() {
                    sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk), b.fx) {
                    case "none":
                        $cfs.css(w), E(), G(), I(), K(), O(), N(), M();
                        break;
                    case "fade":
                        scrl.anims.push([$cfs, {
                            opacity: 0
                        }, function() {
                            E(), G(), I(), K(), O(), N(), scrl = sc_setScroll(D, b.easing, conf), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, M]), sc_startScroll(scrl, conf)
                        }]);
                        break;
                    case "crossfade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, {
                            opacity: 1
                        }, M]), F(), G(), I(), K(), O(), N();
                        break;
                    case "cover":
                        scrl.anims.push([s, w, function() {
                            G(), I(), K(), O(), N(), M()
                        }]), F();
                        break;
                    case "cover-fade":
                        scrl.anims.push([$cfs, {
                            opacity: 0
                        }]), scrl.anims.push([s, w, function() {
                            G(), I(), K(), O(), N(), M()
                        }]), F();
                        break;
                    case "uncover":
                        scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                        break;
                    case "uncover-fade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([$cfs, {
                            opacity: 1
                        }]), scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                        break;
                    default:
                        scrl.anims.push([$cfs, w, function() {
                            N(), M()
                        }]), F(), H(), J(), L()
                }
                return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
            }), $cfs.bind(cf_e("slide_next", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), a.stopImmediatePropagation();
                if (sz_resetMargin(d, opts), !is_number(c)) {
                    if ("*" != opts.items.filter) {
                        var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsNextFilter(d, opts, 0, e)
                    } else c = opts.items.visible;
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                var f = 0 == itms.first ? itms.total : itms.first;
                if (!opts.circular) {
                    if (opts.items.visibleConf.variable) var g = gn_getVisibleItemsNext(d, opts, c),
                        e = gn_getVisibleItemsPrev(d, opts, f - 1);
                    else var g = opts.items.visible,
                        e = opts.items.visible;
                    c + g > f && (c = f - e)
                }
                if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                    for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c;) c++, g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0);
                    opts.items.visible = g
                } else if ("*" != opts.items.filter) {
                    var g = gn_getVisibleItemsNextFilter(d, opts, c);
                    opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                for (debug(conf, "Scrolling " + c + " items forward."), itms.first -= c; 0 > itms.first;) itms.first += itms.total;
                opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children(),
                    h = gi_getOldItemsNext(d, opts),
                    i = gi_getNewItemsNext(d, opts, c),
                    j = d.eq(c - 1),
                    k = h.last(),
                    l = i.last();
                sz_resetMargin(d, opts);
                var m = 0,
                    n = 0;
                if (opts.align) {
                    var o = cf_getAlignPadding(i, opts);
                    m = o[0], n = o[1]
                }
                var p = !1,
                    q = $();
                if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q, j = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                }
                var s = !1,
                    t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                    u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding),
                    v = 0,
                    w = {},
                    x = {},
                    y = {},
                    z = {},
                    A = {},
                    B = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                    case "uncover":
                    case "uncover-fade":
                        v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width")
                }
                p && (opts.items[opts.d.width] = r), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(d, opts, !0), sz_resetMargin(k, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = n, opts.padding[opts.d[3]] = m), A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                var C = function() {},
                    D = function() {},
                    E = function() {},
                    F = function() {},
                    G = function() {},
                    H = function() {},
                    I = function() {},
                    J = function() {},
                    K = function() {};
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        s = $cfs.clone(!0).appendTo($wrp), s.children().slice(opts.items.visibleConf.old).remove()
                }
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                        $cfs.css("zIndex", 1), s.css("zIndex", 0)
                }
                if (scrl = sc_setScroll(B, b.easing, conf), w[opts.d.left] = -t, x[opts.d.left] = -v, 0 > m && (w[opts.d.left] += m), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function() {
                        $wrp.css(u)
                    }, D = function() {
                        scrl.anims.push([$wrp, u])
                    }), opts.usePadding) {
                    var L = l.data("_cfs_origCssMargin");
                    n >= 0 && (L += opts.padding[opts.d[1]]), l.css(opts.d.marginRight, L), j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")), E = function() {
                        k.css(z)
                    }, F = function() {
                        scrl.anims.push([k, z])
                    };
                    var M = j.data("_cfs_origCssMargin");
                    m > 0 && (M += opts.padding[opts.d[3]]), y[opts.d.marginRight] = M, G = function() {
                        j.css(y)
                    }, H = function() {
                        scrl.anims.push([j, y])
                    }
                }
                K = function() {
                    $cfs.css(A)
                };
                var N = opts.items.visible + c - itms.total;
                J = function() {
                    N > 0 && $cfs.children().slice(itms.total).remove();
                    var a = $cfs.children().slice(0, c).appendTo($cfs).last();
                    if (N > 0 && (i = gi_getCurrentItems(d, opts)), sc_showHiddenItems(p), opts.usePadding) {
                        if (itms.total < opts.items.visible + c) {
                            var b = $cfs.children().eq(opts.items.visible - 1);
                            b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                        }
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                };
                var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u);
                switch (I = function() {
                    $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk), b.fx) {
                    case "none":
                        $cfs.css(w), C(), E(), G(), K(), J(), I();
                        break;
                    case "fade":
                        scrl.anims.push([$cfs, {
                            opacity: 0
                        }, function() {
                            C(), E(), G(), K(), J(), scrl = sc_setScroll(B, b.easing, conf), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, I]), sc_startScroll(scrl, conf)
                        }]);
                        break;
                    case "crossfade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, {
                            opacity: 1
                        }, I]), D(), E(), G(), K(), J();
                        break;
                    case "cover":
                        $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                        break;
                    case "cover-fade":
                        $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                        break;
                    case "uncover":
                        scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                        break;
                    case "uncover-fade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([$cfs, {
                            opacity: 1
                        }]), scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                        break;
                    default:
                        scrl.anims.push([$cfs, w, function() {
                            K(), J(), I()
                        }]), D(), F(), H()
                }
                return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
            }), $cfs.bind(cf_e("slideTo", conf), function(a, b, c, d, e, f, g) {
                a.stopPropagation();
                var h = [b, c, d, e, f, g],
                    i = ["string/number/object", "number", "boolean", "object", "string", "function"],
                    j = cf_sortParams(h, i);
                return e = j[3], f = j[4], g = j[5], b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs), 0 == b ? !1 : (is_object(e) || (e = !1), "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"), "prev" == f && (b = itms.total - b), $cfs.trigger(cf_e(f, conf), [e, b, g]), !0)
            }), $cfs.bind(cf_e("prevPage", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c])
            }), $cfs.bind(cf_e("nextPage", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c])
            }), $cfs.bind(cf_e("slideToPage", conf), function(a, b, c, d, e) {
                a.stopPropagation(), is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf)));
                var f = opts.pagination.items || opts.items.visible,
                    g = Math.ceil(itms.total / f) - 1;
                return 0 > b && (b = g), b > g && (b = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e])
            }), $cfs.bind(cf_e("jumpToStart", conf), function(a, b) {
                if (a.stopPropagation(), b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0, b += itms.first, 0 != b) {
                    if (itms.total > 0)
                        for (; b > itms.total;) b -= itms.total;
                    $cfs.prepend($cfs.children().slice(b, itms.total))
                }
                return !0
            }), $cfs.bind(cf_e("synchronise", conf), function(a, b) {
                if (a.stopPropagation(), b) b = cf_getSynchArr(b);
                else {
                    if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
                    b = opts.synchronise
                }
                for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++) b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1);
                return d
            }), $cfs.bind(cf_e("queue", conf), function(a, b, c) {
                return a.stopPropagation(), is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]), queu
            }), $cfs.bind(cf_e("insertItem", conf), function(a, b, c, d, e) {
                a.stopPropagation();
                var f = [b, c, d, e],
                    g = ["string/object", "string/number/object", "boolean", "number"],
                    h = cf_sortParams(f, g);
                if (b = h[0], c = h[1], d = h[2], e = h[3], is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)), !is_jquery(b) || 0 == b.length) return debug(conf, "Not a valid object.");
                is_undefined(c) && (c = "end"), sz_storeMargin(b, opts), sz_storeOrigCss(b);
                var i = c,
                    j = "before";
                "end" == c ? d ? (0 == itms.first ? (c = itms.total - 1, j = "after") : (c = itms.first, itms.first += b.length), 0 > c && (c = 0)) : (c = itms.total - 1, j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs);
                var k = $cfs.children().eq(c);
                return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(b)), "end" == i || d || itms.first > c && (itms.first += b.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
            }), $cfs.bind(cf_e("removeItem", conf), function(a, b, c, d) {
                a.stopPropagation();
                var e = [b, c, d],
                    f = ["string/number/object", "boolean", "number"],
                    g = cf_sortParams(e, f);
                if (b = g[0], c = g[1], d = g[2], b instanceof $ && b.length > 1) return i = $(), b.each(function() {
                    var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]);
                    e && (i = i.add(e))
                }), i;
                if (is_undefined(b) || "end" == b) i = $cfs.children().last();
                else {
                    b = gn_getItemIndex(b, d, c, itms, $cfs);
                    var i = $cfs.children().eq(b);
                    i.length && itms.first > b && (itms.first -= i.length)
                }
                return i && i.length && (i.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), i
            }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length);
                return is_array(b) && (clbk[c] = b), is_function(b) && clbk[c].push(b), clbk[c]
            }), $cfs.bind(cf_e("currentPosition", conf), function(a, b) {
                if (a.stopPropagation(), 0 == itms.first) var c = 0;
                else var c = itms.total - itms.first;
                return is_function(b) && b.call($tt0, c), c
            }), $cfs.bind(cf_e("currentPage", conf), function(a, b) {
                a.stopPropagation();
                var e, c = opts.pagination.items || opts.items.visible,
                    d = Math.ceil(itms.total / c - 1);
                return e = 0 == itms.first ? 0 : itms.first < itms.total % c ? 0 : itms.first != c || opts.circular ? Math.round((itms.total - itms.first) / c) : d, 0 > e && (e = 0), e > d && (e = d), is_function(b) && b.call($tt0, e), e
            }), $cfs.bind(cf_e("currentVisible", conf), function(a, b) {
                a.stopPropagation();
                var c = gi_getCurrentItems($cfs.children(), opts);
                return is_function(b) && b.call($tt0, c), c
            }), $cfs.bind(cf_e("slice", conf), function(a, b, c, d) {
                if (a.stopPropagation(), 0 == itms.total) return !1;
                var e = [b, c, d],
                    f = ["number", "number", "function"],
                    g = cf_sortParams(e, f);
                if (b = is_number(g[0]) ? g[0] : 0, c = is_number(g[1]) ? g[1] : itms.total, d = g[2], b += itms.first, c += itms.first, items.total > 0) {
                    for (; b > itms.total;) b -= itms.total;
                    for (; c > itms.total;) c -= itms.total;
                    for (; 0 > b;) b += itms.total;
                    for (; 0 > c;) c += itms.total
                }
                var i, h = $cfs.children();
                return i = c > b ? h.slice(b, c) : $(h.slice(b, itms.total).get().concat(h.slice(0, c).get())), is_function(d) && d.call($tt0, i), i
            }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length),
                    d = crsl[c];
                return is_function(b) && b.call($tt0, d), d
            }), $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
                e.stopPropagation();
                var reInit = !1;
                if (is_function(a)) a.call($tt0, opts);
                else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                else if (!is_undefined(a))
                    if (is_function(b)) {
                        var val = eval("opts." + a);
                        is_undefined(val) && (val = ""), b.call($tt0, val)
                    } else {
                        if (is_undefined(b)) return eval("opts." + a);
                        "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                    }
                if (reInit) {
                    sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
                    var sz = sz_setSizes($cfs, opts);
                    $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                }
                return opts
            }), $cfs.bind(cf_e("linkAnchors", conf), function(a, b, c) {
                return a.stopPropagation(), is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)), is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"), b.find(c).each(function() {
                    var a = this.hash || "";
                    a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function(b) {
                        b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), a)
                    })
                }), !0) : debug(conf, "Not a valid object.")
            }), $cfs.bind(cf_e("updatePageStatus", conf), function(a, b) {
                if (a.stopPropagation(), opts.pagination.container) {
                    var d = opts.pagination.items || opts.items.visible,
                        e = Math.ceil(itms.total / d);
                    b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function() {
                        for (var a = 0; e > a; a++) {
                            var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, !0, itms, $cfs));
                            $(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1))
                        }
                    })), opts.pagination.container.each(function() {
                        $(this).children().unbind(opts.pagination.event).each(function(a) {
                            $(this).bind(opts.pagination.event, function(b) {
                                b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [a * d, -opts.pagination.deviation, !0, opts.pagination])
                            })
                        })
                    }));
                    var f = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                    return f >= e && (f = 0), 0 > f && (f = e - 1), opts.pagination.container.each(function() {
                        $(this).children().removeClass(cf_c("selected", conf)).eq(f).addClass(cf_c("selected", conf))
                    }), !0
                }
            }), $cfs.bind(cf_e("updateSizes", conf), function() {
                var b = opts.items.visible,
                    c = $cfs.children(),
                    d = ms_getParentSize($wrp, opts, "width");
                if (itms.total = c.length, crsl.primarySizePercentage ? (opts.maxDimension = d, opts[opts.d.width] = ms_getPercentage(d, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, d), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, c, d), b = opts.items.visible, sz_setResponsiveSizes(opts, c)) : opts.items.visibleConf.variable ? b = gn_getVisibleItemsNext(c, opts, 0) : "*" != opts.items.filter && (b = gn_getVisibleItemsNextFilter(c, opts, 0)), !opts.circular && 0 != itms.first && b > itms.first) {
                    if (opts.items.visibleConf.variable) var e = gn_getVisibleItemsPrev(c, opts, itms.first) - itms.first;
                    else if ("*" != opts.items.filter) var e = gn_getVisibleItemsPrevFilter(c, opts, itms.first) - itms.first;
                    else var e = opts.items.visible - itms.first;
                    debug(conf, "Preventing non-circular: sliding " + e + " items backward."), $cfs.trigger(cf_e("prev", conf), e)
                }
                opts.items.visible = cf_getItemsAdjust(b, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, c);
                var f = sz_setSizes($cfs, opts);
                return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, f]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), f
            }), $cfs.bind(cf_e("destroy", conf), function(a, b) {
                return a.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), b && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
            }), $cfs.bind(cf_e("debug", conf), function() {
                return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
            }), $cfs.bind("_cfs_triggerEvent", function(a, b, c) {
                return a.stopPropagation(), $cfs.triggerHandler(cf_e(b, conf), c)
            })
        }, FN._unbind_events = function() {
            $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
        }, FN._bind_buttons = function() {
            if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                $wrp.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(a) {
                    a.preventDefault();
                    var b = !1,
                        c = null;
                    crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause", c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), b && $cfs.trigger(cf_e(b, conf), c)
                }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(a) {
                    a.preventDefault(), $cfs.trigger(cf_e("prev", conf))
                }), opts.prev.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(a) {
                    a.preventDefault(), $cfs.trigger(cf_e("next", conf))
                }), opts.next.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.pagination.container && opts.pagination.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                    var b = a.keyCode;
                    b == opts.next.key && (a.preventDefault(), $cfs.trigger(cf_e("next", conf))), b == opts.prev.key && (a.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
                }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                    var b = a.keyCode;
                    b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible, itms.total >= b && (a.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination])))
                }), $.fn.swipe) {
                var b = "ontouchstart" in window;
                if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) {
                    var c = $.extend(!0, {}, opts.prev, opts.swipe),
                        d = $.extend(!0, {}, opts.next, opts.swipe),
                        e = function() {
                            $cfs.trigger(cf_e("prev", conf), [c])
                        },
                        f = function() {
                            $cfs.trigger(cf_e("next", conf), [d])
                        };
                    switch (opts.direction) {
                        case "up":
                        case "down":
                            opts.swipe.options.swipeUp = f, opts.swipe.options.swipeDown = e;
                            break;
                        default:
                            opts.swipe.options.swipeLeft = f, opts.swipe.options.swipeRight = e
                    }
                    crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
                }
            }
            if ($.fn.mousewheel && opts.mousewheel) {
                var g = $.extend(!0, {}, opts.prev, opts.mousewheel),
                    h = $.extend(!0, {}, opts.next, opts.mousewheel);
                crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function(a, b) {
                    a.preventDefault(), b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h])
                }), crsl.mousewheel = !0
            }
            if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
                var i = function() {
                        $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
                    },
                    j = $(window),
                    k = null;
                if ($.debounce && "debounce" == conf.onWindowResize) k = $.debounce(200, i);
                else if ($.throttle && "throttle" == conf.onWindowResize) k = $.throttle(300, i);
                else {
                    var l = 0,
                        m = 0;
                    k = function() {
                        var a = j.width(),
                            b = j.height();
                        (a != l || b != m) && (i(), l = a, m = b)
                    }
                }
                j.bind(cf_e("resize", conf, !1, !0, !0), k)
            }
        }, FN._unbind_buttons = function() {
            var b = (cf_e("", conf), cf_e("", conf, !1));
            ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(b), opts.auto.button && opts.auto.button.unbind(b), opts.prev.button && opts.prev.button.unbind(b), opts.next.button && opts.next.button.unbind(b), opts.pagination.container && (opts.pagination.container.unbind(b), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
        }, is_boolean(configs) && (configs = {
            debug: configs
        });
        var crsl = {
                direction: "next",
                isPaused: !0,
                isScrolling: !1,
                isStopped: !1,
                mousewheel: !1,
                swipe: !1
            },
            itms = {
                total: $cfs.children().length,
                first: 0
            },
            tmrs = {
                auto: null,
                progress: null,
                startTime: getTime(),
                timePassed: 0
            },
            scrl = {
                isStopped: !1,
                duration: 0,
                startTime: 0,
                easing: "",
                anims: []
            },
            clbk = {
                onBefore: [],
                onAfter: []
            },
            queu = [],
            conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
            opts = {},
            opts_orig = $.extend(!0, {}, options),
            $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
        if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;
        else {
            var start_arr = [];
            0 != opts.items.start && start_arr.push(opts.items.start)
        }
        if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0)
            for (var a = 0, l = start_arr.length; l > a; a++) {
                var s = start_arr[a];
                if (0 != s) {
                    if (s === !0) {
                        if (s = window.location.hash, 1 > s.length) continue
                    } else "random" === s && (s = Math.floor(Math.random() * itms.total));
                    if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                            fx: "none"
                        }])) break
                }
            }
        var siz = sz_setSizes($cfs, opts),
            itm = gi_getCurrentItems($cfs.children(), opts);
        return opts.onCreate && opts.onCreate.call($tt0, {
            width: siz.width,
            height: siz.height,
            items: itm
        }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
    }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
        synchronise: !1,
        infinite: !0,
        circular: !0,
        responsive: !1,
        direction: "left",
        items: {
            start: 0
        },
        scroll: {
            easing: "swing",
            duration: 500,
            pauseOnHover: !1,
            event: "click",
            queue: !1
        }
    }, $.fn.carouFredSel.configs = {
        debug: !1,
        transition: !1,
        onWindowResize: "throttle",
        events: {
            prefix: "",
            namespace: "cfs"
        },
        wrapper: {
            element: "div",
            classname: "caroufredsel_wrapper"
        },
        classnames: {}
    }, $.fn.carouFredSel.pageAnchorBuilder = function(a) {
        return '<a href="#"><span>' + a + "</span></a>"
    }, $.fn.carouFredSel.progressbarUpdater = function(a) {
        $(this).css("width", a + "%")
    }, $.fn.carouFredSel.cookie = {
        get: function(a) {
            a += "=";
            for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) {
                for (var e = b[c];
                    " " == e.charAt(0);) e = e.slice(1);
                if (0 == e.indexOf(a)) return e.slice(a.length)
            }
            return 0
        },
        set: function(a, b, c) {
            var d = "";
            if (c) {
                var e = new Date;
                e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), d = "; expires=" + e.toGMTString()
            }
            document.cookie = a + "=" + b + d + "; path=/"
        },
        remove: function(a) {
            $.fn.carouFredSel.cookie.set(a, "", -1)
        }
    }, $.extend($.easing, {
        quadratic: function(a) {
            var b = a * a;
            return a * (-b * a + 4 * b - 6 * a + 4)
        },
        cubic: function(a) {
            return a * (4 * a * a - 9 * a + 6)
        },
        elastic: function(a) {
            var b = a * a;
            return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15)
        }
    }))
})(jQuery);

/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.8
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.skinkers.com/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var y = "1.6.9",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe";
    var n = {
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
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (!F && (typeof H === "object" || !H)) {
                return w.apply(this, arguments)
            }
        }
        return G
    };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function() {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, aw) {
        var aA = (a || d || !aw.fallbackToMouseEvents),
            K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = aA ? null : "mouseleave",
            aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null;
        var aS = f(a5);
        var aa = "start";
        var X = 0;
        var aR = null;
        var U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0;
        var aX = null,
            ag = null;
        try {
            aS.bind(K, aO);
            aS.bind(aE, ba)
        } catch (al) {
            f.error("events not supported " + K + "," + aE + " on jQuery.swipe")
        }
        this.enable = function() {
            aS.bind(K, aO);
            aS.bind(aE, ba);
            return aS
        };
        this.disable = function() {
            aL();
            return aS
        };
        this.destroy = function() {
            aL();
            aS.data(C, null);
            aS = null
        };
        this.option = function(bd, bc) {
            if (aw[bd] !== undefined) {
                if (bc === undefined) {
                    return aw[bd]
                } else {
                    aw[bd] = bc
                }
            } else {
                f.error("Option " + bd + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function aO(be) {
            if (aC()) {
                return
            }
            if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                be.preventDefault()
            }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S();
            if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
                aj(0, bc);
                U = au();
                if (X == 2) {
                    aj(1, bg[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                }
                if (aw.swipeStatus || aw.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (aw.hold) {
                    ag = setTimeout(f.proxy(function() {
                        aS.trigger("hold", [bf.target]);
                        if (aw.hold) {
                            bd = aw.hold.call(aS, bf, bf.target)
                        }
                    }, this), aw.longTapThreshold)
                }
                ap(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || an()) {
                return
            }
            var be, bj = bi.touches,
                bd = bj ? bj[0] : bi;
            var bg = aI(bd);
            a3 = au();
            if (bj) {
                X = bj.length
            }
            if (aw.hold) {
                clearTimeout(ag)
            }
            aa = k;
            if (X == 2) {
                if (a2 == 0) {
                    aj(1, bj[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                } else {
                    aI(bj[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end)
                }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0)
            }
            if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
                aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah);
                if (aw.swipeStatus || aw.pinchStatus) {
                    be = P(bi, aa)
                }
                if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                    var bc = true;
                    if (aw.triggerOnTouchLeave) {
                        var bh = aZ(this);
                        bc = F(bg.end, bh)
                    }
                    if (!aw.triggerOnTouchEnd && bc) {
                        aa = aD(k)
                    } else {
                        if (aw.triggerOnTouchLeave && !bc) {
                            aa = aD(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            if (be) {
                if (be.length) {
                    G();
                    return true
                }
            }
            if (an()) {
                X = ae
            }
            a3 = au();
            ac = aN();
            if (bb() || !ao()) {
                aa = q;
                P(bd, aa)
            } else {
                if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
                    bc.preventDefault();
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!aw.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aG(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            ap(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (aw.triggerOnTouchLeave) {
                aa = aD(h);
                P(bd, aa)
            }
        }

        function aL() {
            aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M);
            if (T) {
                aS.unbind(T, L)
            }
            ap(false)
        }

        function aD(bg) {
            var bf = bg;
            var be = aB();
            var bd = ao();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && aw.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            if ((J() || W()) || (Q() || aY())) {
                if (J() || W()) {
                    bd = aG(be, bc, l)
                }
                if ((Q() || aY()) && bd !== false) {
                    bd = aG(be, bc, t)
                }
            } else {
                if (aH() && bd !== false) {
                    bd = aG(be, bc, j)
                } else {
                    if (aq() && bd !== false) {
                        bd = aG(be, bc, b)
                    } else {
                        if (ai() && bd !== false) {
                            bd = aG(be, bc, B)
                        }
                    }
                }
            }
            if (bc === q) {
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aG(bf, bc, be) {
            var bd;
            if (be == l) {
                aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                if (aw.swipeStatus) {
                    bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aW()) {
                    aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                    if (aw.swipe) {
                        bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                            if (aw.swipeLeft) {
                                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                            if (aw.swipeRight) {
                                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                            if (aw.swipeUp) {
                                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                            if (aw.swipeDown) {
                                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                if (aw.pinchStatus) {
                    bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aK) {
                        case c:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchIn) {
                                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchOut) {
                                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aX);
                    clearTimeout(ag);
                    if (Z() && !I()) {
                        O = au();
                        aX = setTimeout(f.proxy(function() {
                            O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) {
                                bd = aw.tap.call(aS, bf, bf.target)
                            }
                        }, this), aw.doubleTapThreshold)
                    } else {
                        O = null;
                        aS.trigger("tap", [bf.target]);
                        if (aw.tap) {
                            bd = aw.tap.call(aS, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]);
                        if (aw.doubleTap) {
                            bd = aw.doubleTap.call(aS, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]);
                            if (aw.longTap) {
                                bd = aw.longTap.call(aS, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function ao() {
            var bc = true;
            if (aw.threshold !== null) {
                bc = ah >= aw.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (aw.cancelThreshold !== null && aQ !== null) {
                bc = (aU(aQ) - ah) >= aw.cancelThreshold
            }
            return bc
        }

        function af() {
            if (aw.pinchThreshold !== null) {
                return ar >= aw.pinchThreshold
            }
            return true
        }

        function aB() {
            var bc;
            if (aw.maxTimeThreshold) {
                if (ac >= aw.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function am(bc, bd) {
            if (aw.preventDefaultEvents === false) {
                return
            }
            if (aw.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = aw.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aP();
            var bc = Y();
            var be = af();
            return bd && bc && be
        }

        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }

        function Q() {
            return !!(a9() && aY())
        }

        function aW() {
            var bf = aB();
            var bh = ao();
            var be = aP();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }

        function J() {
            return !!(aW() && W())
        }

        function aP() {
            return ((X === aw.fingers || aw.fingers === i) || !a)
        }

        function Y() {
            return aR[0].end.x !== 0
        }

        function a7() {
            return !!(aw.tap)
        }

        function Z() {
            return !!(aw.doubleTap)
        }

        function aV() {
            return !!(aw.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = au();
            return (Z() && ((bc - O) <= aw.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function ay() {
            return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
        }

        function a1() {
            return ((ac > aw.longTapThreshold) && (ah < r))
        }

        function ai() {
            return !!(ay() && a7())
        }

        function aH() {
            return !!(R() && Z())
        }

        function aq() {
            return !!(a1() && aV())
        }

        function G() {
            a6 = au();
            ae = event.touches.length + 1
        }

        function S() {
            a6 = 0;
            ae = 0
        }

        function an() {
            var bc = false;
            if (a6) {
                var bd = au() - a6;
                if (bd <= aw.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aC() {
            return !!(aS.data(C + "_intouch") === true)
        }

        function ap(bc) {
            if (bc === true) {
                aS.bind(az, a4);
                aS.bind(V, M);
                if (T) {
                    aS.bind(T, L)
                }
            } else {
                aS.unbind(az, a4, false);
                aS.unbind(V, M, false);
                if (T) {
                    aS.unbind(T, L, false)
                }
            }
            aS.data(C + "_intouch", bc === true)
        }

        function aj(bd, bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
            return aR[bd]
        }

        function aI(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++) {
                if (aR[bc].identifier == bd) {
                    return aR[bc]
                }
            }
        }

        function ak() {
            var bc = [];
            for (var bd = 0; bd <= 5; bd++) {
                bc.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bc
        }

        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc));
            N[bc].distance = bd
        }

        function aU(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[p] = ax(p);
            bc[o] = ax(o);
            bc[e] = ax(e);
            bc[x] = ax(x);
            return bc
        }

        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aN() {
            return a3 - U
        }

        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function at() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aF(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aM(bd, bc) {
            var be = aF(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function au() {
            var bc = new Date();
            return bc.getTime()
        }

        function aZ(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));

/* Screenshot */
jQuery(function(e) {
    "use strict";
    var n = e(".thescreenshot");
    if (n) {
        var t = function(n) {
            var t = n.find(".screenshot-carousel");
            t && "undefined" != typeof e.fn.carouFredSel && e.each(t, function(n, t) {
                var o = e(t),
                    r = o.attr("data-carousel-pagination"),
                    s = {
                        scroll: {
                            fx: "crossfade",
                            duration: "1500"
                        },
                        auto: !0,
                        responsive: !0,
                        prev: {
                            button: function() {
                                return o.closest(".thescreenshot").find(".prev")
                            },
                            key: "left"
                        },
                        next: {
                            button: function() {
                                return o.closest(".thescreenshot").find(".next")
                            },
                            key: "right"
                        }
                    };
                "undefined" != typeof r && (s.pagination = r), o.imagesLoaded(function() {
                    o.carouFredSel(s)
                })
            })
        };
        t(n)
    }
});

/* Partners carousel */
jQuery(function(e) {
    "use strict";
    var t = function(t) {
            var r = t.find(".ts-pt-partners__carousel");
            r && "undefined" != typeof e.fn.carouFredSel && e.each(r, function(t, r) {
                var a = e(r),
                    i = function() {
                        var e = a.triggerHandler("currentVisible");
                        a.children(".ts-pt-partners__carousel-item").removeClass("ts-pt--active-item"), e.addClass("ts-pt--active-item")
                    },
                    n = function() {
                        a.children(".ts-pt-partners__carousel-item").removeClass("ts-pt--active-item")
                    };
                a.carouFredSel({
                    responsive: !0,
                    items: {
                        visible: {
                            min: 1,
                            max: 5
                        }
                    },
                    scroll: {
                        fx: "fade",
                        duration: 1e3,
                        timeoutDuration: 3e3,
                        onBefore: n,
                        onAfter: i
                    },
                    auto: !0,
                    onCreate: i
                })
            })
        },
        r = e(".ts-pt-partners__carousel-wrapper");
    r && t(r)
});

/* jquery cookie*/
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function t(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {}
    }

    function r(n, o) {
        var i = u.raw ? n : t(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g,
        u = e.cookie = function(t, c, s) {
            if (arguments.length > 1 && !e.isFunction(c)) {
                if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
                    var a = s.expires,
                        d = s.expires = new Date;
                    d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
                }
                return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
                var x = p[l].split("="),
                    g = o(x.shift()),
                    j = x.join("=");
                if (t === g) {
                    f = r(j, c);
                    break
                }
                t || void 0 === (j = r(j)) || (f[g] = j)
            }
            return f
        };
    u.defaults = {}, e.removeCookie = function(n, o) {
        return e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n)
    }
});




/* Demo panel */
if (jQuery)(function($) {
    $.minicolors = {
        defaults: {
            animationSpeed: 50,
            animationEasing: 'swing',
            change: null,
            changeDelay: 0,
            control: 'hue',
            dataUris: true,
            defaultValue: '',
            hide: null,
            hideSpeed: 100,
            inline: false,
            letterCase: 'lowercase',
            opacity: false,
            position: 'bottom left',
            show: null,
            showSpeed: 100,
            theme: 'default'
        }
    };
    $.extend($.fn, {
        minicolors: function(method, data) {
            switch (method) {
                case 'destroy':
                    $(this).each(function() {
                        destroy($(this))
                    });
                    return $(this);
                case 'hide':
                    hide();
                    return $(this);
                case 'opacity':
                    if (data === undefined) {
                        return $(this).attr('data-opacity')
                    } else {
                        $(this).each(function() {
                            updateFromInput($(this).attr('data-opacity', data))
                        })
                    }
                    return $(this);
                case 'rgbObject':
                    return rgbObject($(this), method === 'rgbaObject');
                case 'rgbString':
                case 'rgbaString':
                    return rgbString($(this), method === 'rgbaString');
                case 'settings':
                    if (data === undefined) {
                        return $(this).data('minicolors-settings')
                    } else {
                        $(this).each(function() {
                            var settings = $(this).data('minicolors-settings') || {};
                            destroy($(this));
                            $(this).minicolors($.extend(true, settings, data))
                        })
                    }
                    return $(this);
                case 'show':
                    show($(this).eq(0));
                    return $(this);
                case 'value':
                    if (data === undefined) {
                        return $(this).val()
                    } else {
                        $(this).each(function() {
                            updateFromInput($(this).val(data))
                        })
                    }
                    return $(this);
                default:
                    if (method !== 'create') data = method;
                    $(this).each(function() {
                        init($(this), data)
                    });
                    return $(this)
            }
        }
    });

    function init(input, settings) {
        var minicolors = $('<div class="minicolors" />'),
            defaults = $.minicolors.defaults;
        if (input.data('minicolors-initialized')) return;
        settings = $.extend(true, {}, defaults, settings);
        minicolors.addClass('minicolors-theme-' + settings.theme).toggleClass('minicolors-with-opacity', settings.opacity).toggleClass('minicolors-no-data-uris', settings.dataUris !== true);
        if (settings.position !== undefined) {
            $.each(settings.position.split(' '), function() {
                minicolors.addClass('minicolors-position-' + this)
            })
        }
        input.addClass('minicolors-input').data('minicolors-initialized', false).data('minicolors-settings', settings).prop('size', 7).wrap(minicolors).after('<div class="minicolors-panel minicolors-slider-' + settings.control + '">' + '<div class="minicolors-slider minicolors-sprite">' + '<div class="minicolors-picker"></div>' + '</div>' + '<div class="minicolors-opacity-slider minicolors-sprite">' + '<div class="minicolors-picker"></div>' + '</div>' + '<div class="minicolors-grid minicolors-sprite">' + '<div class="minicolors-grid-inner"></div>' + '<div class="minicolors-picker"><div></div></div>' + '</div>' + '</div>');
        if (!settings.inline) {
            input.after('<span class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></span>');
            input.next('.minicolors-swatch').on('click', function(event) {
                event.preventDefault();
                input.focus()
            })
        }
        input.parent().find('.minicolors-panel').on('selectstart', function() {
            return false
        }).end();
        if (settings.inline) input.parent().addClass('minicolors-inline');
        updateFromInput(input, false);
        input.data('minicolors-initialized', true)
    }

    function destroy(input) {
        var minicolors = input.parent();
        input.removeData('minicolors-initialized').removeData('minicolors-settings').removeProp('size').removeClass('minicolors-input');
        minicolors.before(input).remove()
    }

    function show(input) {
        var minicolors = input.parent(),
            panel = minicolors.find('.minicolors-panel'),
            settings = input.data('minicolors-settings');
        if (!input.data('minicolors-initialized') || input.prop('disabled') || minicolors.hasClass('minicolors-inline') || minicolors.hasClass('minicolors-focus')) return;
        hide();
        minicolors.addClass('minicolors-focus');
        panel.stop(true, true).fadeIn(settings.showSpeed, function() {
            if (settings.show) settings.show.call(input.get(0))
        })
    }

    function hide() {
        $('.minicolors-focus').each(function() {
            var minicolors = $(this),
                input = minicolors.find('.minicolors-input'),
                panel = minicolors.find('.minicolors-panel'),
                settings = input.data('minicolors-settings');
            panel.fadeOut(settings.hideSpeed, function() {
                if (settings.hide) settings.hide.call(input.get(0));
                minicolors.removeClass('minicolors-focus')
            })
        })
    }

    function move(target, event, animate) {
        var input = target.parents('.minicolors').find('.minicolors-input'),
            settings = input.data('minicolors-settings'),
            picker = target.find('[class$=-picker]'),
            offsetX = target.offset().left,
            offsetY = target.offset().top,
            x = Math.round(event.pageX - offsetX),
            y = Math.round(event.pageY - offsetY),
            duration = animate ? settings.animationSpeed : 0,
            wx, wy, r, phi;
        if (event.originalEvent.changedTouches) {
            x = event.originalEvent.changedTouches[0].pageX - offsetX;
            y = event.originalEvent.changedTouches[0].pageY - offsetY
        }
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > target.width()) x = target.width();
        if (y > target.height()) y = target.height();
        if (target.parent().is('.minicolors-slider-wheel') && picker.parent().is('.minicolors-grid')) {
            wx = 75 - x;
            wy = 75 - y;
            r = Math.sqrt(wx * wx + wy * wy);
            phi = Math.atan2(wy, wx);
            if (phi < 0) phi += Math.PI * 2;
            if (r > 75) {
                r = 75;
                x = 75 - (75 * Math.cos(phi));
                y = 75 - (75 * Math.sin(phi))
            }
            x = Math.round(x);
            y = Math.round(y)
        }
        if (target.is('.minicolors-grid')) {
            picker.stop(true).animate({
                top: y + 'px',
                left: x + 'px'
            }, duration, settings.animationEasing, function() {
                updateFromControl(input, target)
            })
        } else {
            picker.stop(true).animate({
                top: y + 'px'
            }, duration, settings.animationEasing, function() {
                updateFromControl(input, target)
            })
        }
    }

    function updateFromControl(input, target) {
        function getCoords(picker, container) {
            var left, top;
            if (!picker.length || !container) return null;
            left = picker.offset().left;
            top = picker.offset().top;
            return {
                x: left - container.offset().left + (picker.outerWidth() / 2),
                y: top - container.offset().top + (picker.outerHeight() / 2)
            }
        }
        var hue, saturation, brightness, x, y, r, phi, hex = input.val(),
            opacity = input.attr('data-opacity'),
            minicolors = input.parent(),
            settings = input.data('minicolors-settings'),
            swatch = minicolors.find('.minicolors-swatch'),
            grid = minicolors.find('.minicolors-grid'),
            slider = minicolors.find('.minicolors-slider'),
            opacitySlider = minicolors.find('.minicolors-opacity-slider'),
            gridPicker = grid.find('[class$=-picker]'),
            sliderPicker = slider.find('[class$=-picker]'),
            opacityPicker = opacitySlider.find('[class$=-picker]'),
            gridPos = getCoords(gridPicker, grid),
            sliderPos = getCoords(sliderPicker, slider),
            opacityPos = getCoords(opacityPicker, opacitySlider);
        if (target.is('.minicolors-grid, .minicolors-slider')) {
            switch (settings.control) {
                case 'wheel':
                    x = (grid.width() / 2) - gridPos.x;
                    y = (grid.height() / 2) - gridPos.y;
                    r = Math.sqrt(x * x + y * y);
                    phi = Math.atan2(y, x);
                    if (phi < 0) phi += Math.PI * 2;
                    if (r > 75) {
                        r = 75;
                        gridPos.x = 69 - (75 * Math.cos(phi));
                        gridPos.y = 69 - (75 * Math.sin(phi))
                    }
                    saturation = keepWithin(r / 0.75, 0, 100);
                    hue = keepWithin(phi * 180 / Math.PI, 0, 360);
                    brightness = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
                    hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });
                    slider.css('backgroundColor', hsb2hex({
                        h: hue,
                        s: saturation,
                        b: 100
                    }));
                    break;
                case 'saturation':
                    hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
                    saturation = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
                    brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
                    hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });
                    slider.css('backgroundColor', hsb2hex({
                        h: hue,
                        s: 100,
                        b: brightness
                    }));
                    minicolors.find('.minicolors-grid-inner').css('opacity', saturation / 100);
                    break;
                case 'brightness':
                    hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
                    saturation = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
                    brightness = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
                    hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });
                    slider.css('backgroundColor', hsb2hex({
                        h: hue,
                        s: saturation,
                        b: 100
                    }));
                    minicolors.find('.minicolors-grid-inner').css('opacity', 1 - (brightness / 100));
                    break;
                default:
                    hue = keepWithin(360 - parseInt(sliderPos.y * (360 / slider.height()), 10), 0, 360);
                    saturation = keepWithin(Math.floor(gridPos.x * (100 / grid.width())), 0, 100);
                    brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
                    hex = hsb2hex({
                        h: hue,
                        s: saturation,
                        b: brightness
                    });
                    grid.css('backgroundColor', hsb2hex({
                        h: hue,
                        s: 100,
                        b: 100
                    }));
                    break
            }
            input.val(convertCase(hex, settings.letterCase))
        }
        if (target.is('.minicolors-opacity-slider')) {
            if (settings.opacity) {
                opacity = parseFloat(1 - (opacityPos.y / opacitySlider.height())).toFixed(2)
            } else {
                opacity = 1
            }
            if (settings.opacity) input.attr('data-opacity', opacity)
        }
        swatch.find('SPAN').css({
            backgroundColor: hex,
            opacity: opacity
        });
        doChange(input, hex, opacity)
    }

    function updateFromInput(input, preserveInputValue) {
        var hex, hsb, opacity, x, y, r, phi, minicolors = input.parent(),
            settings = input.data('minicolors-settings'),
            swatch = minicolors.find('.minicolors-swatch'),
            grid = minicolors.find('.minicolors-grid'),
            slider = minicolors.find('.minicolors-slider'),
            opacitySlider = minicolors.find('.minicolors-opacity-slider'),
            gridPicker = grid.find('[class$=-picker]'),
            sliderPicker = slider.find('[class$=-picker]'),
            opacityPicker = opacitySlider.find('[class$=-picker]');
        hex = convertCase(parseHex(input.val(), true), settings.letterCase);
        if (!hex) {
            hex = convertCase(parseHex(settings.defaultValue, true), settings.letterCase)
        }
        hsb = hex2hsb(hex);
        if (!preserveInputValue) input.val(hex);
        if (settings.opacity) {
            opacity = input.attr('data-opacity') === '' ? 1 : keepWithin(parseFloat(input.attr('data-opacity')).toFixed(2), 0, 1);
            if (isNaN(opacity)) opacity = 1;
            input.attr('data-opacity', opacity);
            swatch.find('SPAN').css('opacity', opacity);
            y = keepWithin(opacitySlider.height() - (opacitySlider.height() * opacity), 0, opacitySlider.height());
            opacityPicker.css('top', y + 'px')
        }
        swatch.find('SPAN').css('backgroundColor', hex);
        switch (settings.control) {
            case 'wheel':
                r = keepWithin(Math.ceil(hsb.s * 0.75), 0, grid.height() / 2);
                phi = hsb.h * Math.PI / 180;
                x = keepWithin(75 - Math.cos(phi) * r, 0, grid.width());
                y = keepWithin(75 - Math.sin(phi) * r, 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });
                y = 150 - (hsb.b / (100 / grid.height()));
                if (hex === '') y = 0;
                sliderPicker.css('top', y + 'px');
                slider.css('backgroundColor', hsb2hex({
                    h: hsb.h,
                    s: hsb.s,
                    b: 100
                }));
                break;
            case 'saturation':
                x = keepWithin((5 * hsb.h) / 12, 0, 150);
                y = keepWithin(grid.height() - Math.ceil(hsb.b / (100 / grid.height())), 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });
                y = keepWithin(slider.height() - (hsb.s * (slider.height() / 100)), 0, slider.height());
                sliderPicker.css('top', y + 'px');
                slider.css('backgroundColor', hsb2hex({
                    h: hsb.h,
                    s: 100,
                    b: hsb.b
                }));
                minicolors.find('.minicolors-grid-inner').css('opacity', hsb.s / 100);
                break;
            case 'brightness':
                x = keepWithin((5 * hsb.h) / 12, 0, 150);
                y = keepWithin(grid.height() - Math.ceil(hsb.s / (100 / grid.height())), 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });
                y = keepWithin(slider.height() - (hsb.b * (slider.height() / 100)), 0, slider.height());
                sliderPicker.css('top', y + 'px');
                slider.css('backgroundColor', hsb2hex({
                    h: hsb.h,
                    s: hsb.s,
                    b: 100
                }));
                minicolors.find('.minicolors-grid-inner').css('opacity', 1 - (hsb.b / 100));
                break;
            default:
                x = keepWithin(Math.ceil(hsb.s / (100 / grid.width())), 0, grid.width());
                y = keepWithin(grid.height() - Math.ceil(hsb.b / (100 / grid.height())), 0, grid.height());
                gridPicker.css({
                    top: y + 'px',
                    left: x + 'px'
                });
                y = keepWithin(slider.height() - (hsb.h / (360 / slider.height())), 0, slider.height());
                sliderPicker.css('top', y + 'px');
                grid.css('backgroundColor', hsb2hex({
                    h: hsb.h,
                    s: 100,
                    b: 100
                }));
                break
        }
        if (input.data('minicolors-initialized')) {
            doChange(input, hex, opacity)
        }
    }

    function doChange(input, hex, opacity) {
        var settings = input.data('minicolors-settings'),
            lastChange = input.data('minicolors-lastChange');
        if (!lastChange || lastChange.hex !== hex || lastChange.opacity !== opacity) {
            input.data('minicolors-lastChange', {
                hex: hex,
                opacity: opacity
            });
            if (settings.change) {
                if (settings.changeDelay) {
                    clearTimeout(input.data('minicolors-changeTimeout'));
                    input.data('minicolors-changeTimeout', setTimeout(function() {
                        settings.change.call(input.get(0), hex, opacity)
                    }, settings.changeDelay))
                } else {
                    settings.change.call(input.get(0), hex, opacity)
                }
            }
            input.trigger('change').trigger('input')
        }
    }

    function rgbObject(input) {
        var hex = parseHex($(input).val(), true),
            rgb = hex2rgb(hex),
            opacity = $(input).attr('data-opacity');
        if (!rgb) return null;
        if (opacity !== undefined) $.extend(rgb, {
            a: parseFloat(opacity)
        });
        return rgb
    }

    function rgbString(input, alpha) {
        var hex = parseHex($(input).val(), true),
            rgb = hex2rgb(hex),
            opacity = $(input).attr('data-opacity');
        if (!rgb) return null;
        if (opacity === undefined) opacity = 1;
        if (alpha) {
            return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + parseFloat(opacity) + ')'
        } else {
            return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')'
        }
    }

    function convertCase(string, letterCase) {
        return letterCase === 'uppercase' ? string.toUpperCase() : string.toLowerCase()
    }

    function parseHex(string, expand) {
        string = string.replace(/[^A-F0-9]/ig, '');
        if (string.length !== 3 && string.length !== 6) return '';
        if (string.length === 3 && expand) {
            string = string[0] + string[0] + string[1] + string[1] + string[2] + string[2]
        }
        return '#' + string
    }

    function keepWithin(value, min, max) {
        if (value < min) value = min;
        if (value > max) value = max;
        return value
    }

    function hsb2rgb(hsb) {
        var rgb = {};
        var h = Math.round(hsb.h);
        var s = Math.round(hsb.s * 255 / 100);
        var v = Math.round(hsb.b * 255 / 100);
        if (s === 0) {
            rgb.r = rgb.g = rgb.b = v
        } else {
            var t1 = v;
            var t2 = (255 - s) * v / 255;
            var t3 = (t1 - t2) * (h % 60) / 60;
            if (h === 360) h = 0;
            if (h < 60) {
                rgb.r = t1;
                rgb.b = t2;
                rgb.g = t2 + t3
            } else if (h < 120) {
                rgb.g = t1;
                rgb.b = t2;
                rgb.r = t1 - t3
            } else if (h < 180) {
                rgb.g = t1;
                rgb.r = t2;
                rgb.b = t2 + t3
            } else if (h < 240) {
                rgb.b = t1;
                rgb.r = t2;
                rgb.g = t1 - t3
            } else if (h < 300) {
                rgb.b = t1;
                rgb.g = t2;
                rgb.r = t2 + t3
            } else if (h < 360) {
                rgb.r = t1;
                rgb.g = t2;
                rgb.b = t1 - t3
            } else {
                rgb.r = 0;
                rgb.g = 0;
                rgb.b = 0
            }
        }
        return {
            r: Math.round(rgb.r),
            g: Math.round(rgb.g),
            b: Math.round(rgb.b)
        }
    }

    function rgb2hex(rgb) {
        var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
        $.each(hex, function(nr, val) {
            if (val.length === 1) hex[nr] = '0' + val
        });
        return '#' + hex.join('')
    }

    function hsb2hex(hsb) {
        return rgb2hex(hsb2rgb(hsb))
    }

    function hex2hsb(hex) {
        var hsb = rgb2hsb(hex2rgb(hex));
        if (hsb.s === 0) hsb.h = 360;
        return hsb
    }

    function rgb2hsb(rgb) {
        var hsb = {
            h: 0,
            s: 0,
            b: 0
        };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        hsb.s = max !== 0 ? 255 * delta / max : 0;
        if (hsb.s !== 0) {
            if (rgb.r === max) {
                hsb.h = (rgb.g - rgb.b) / delta
            } else if (rgb.g === max) {
                hsb.h = 2 + (rgb.b - rgb.r) / delta
            } else {
                hsb.h = 4 + (rgb.r - rgb.g) / delta
            }
        } else {
            hsb.h = -1
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
            hsb.h += 360
        }
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb
    }

    function hex2rgb(hex) {
        hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return {
            r: hex >> 16,
            g: (hex & 0x00FF00) >> 8,
            b: (hex & 0x0000FF)
        }
    }
    $(document).on('mousedown.minicolors touchstart.minicolors', function(event) {
        if (!$(event.target).parents().add(event.target).hasClass('minicolors')) {
            hide()
        }
    }).on('mousedown.minicolors touchstart.minicolors', '.minicolors-grid, .minicolors-slider, .minicolors-opacity-slider', function(event) {
        var target = $(this);
        event.preventDefault();
        $(document).data('minicolors-target', target);
        move(target, event, true)
    }).on('mousemove.minicolors touchmove.minicolors', function(event) {
        var target = $(document).data('minicolors-target');
        if (target) move(target, event)
    }).on('mouseup.minicolors touchend.minicolors', function() {
        $(this).removeData('minicolors-target')
    }).on('mousedown.minicolors touchstart.minicolors', '.minicolors-swatch', function(event) {
        var input = $(this).parent().find('.minicolors-input');
        event.preventDefault();
        show(input)
    }).on('focus.minicolors', '.minicolors-input', function() {
        var input = $(this);
        if (!input.data('minicolors-initialized')) return;
        show(input)
    }).on('blur.minicolors', '.minicolors-input', function() {
        var input = $(this),
            settings = input.data('minicolors-settings');
        if (!input.data('minicolors-initialized')) return;
        input.val(parseHex(input.val(), true));
        if (input.val() === '') input.val(parseHex(settings.defaultValue, true));
        input.val(convertCase(input.val(), settings.letterCase))
    }).on('keydown.minicolors', '.minicolors-input', function(event) {
        var input = $(this);
        if (!input.data('minicolors-initialized')) return;
        switch (event.keyCode) {
            case 9:
                hide();
                break;
            case 13:
            case 27:
                hide();
                input.blur();
                break
        }
    }).on('keyup.minicolors', '.minicolors-input', function() {
        var input = $(this);
        if (!input.data('minicolors-initialized')) return;
        updateFromInput(input, true)
    }).on('paste.minicolors', '.minicolors-input', function() {
        var input = $(this);
        if (!input.data('minicolors-initialized')) return;
        setTimeout(function() {
            updateFromInput(input, true)
        }, 1)
    })
})(jQuery);

// ! important
var SITE_URL = 'http://hogash-demos.com/kallyas_html/';

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)", "i");
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        var hash = '';
        if (uri.indexOf('#') !== -1) {
            hash = uri.replace(/.*#/, '#');
            uri = uri.replace(/#.*/, '');
            console.log('had tag');
        }
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        return uri + separator + key + "=" + value + hash;
    }
}

/*
 * OnLoad
 */
(function($) {
    $(document).ready(function() {

        // // ENABLE FOOTER STYLE CHANGING
        var footer_style_option = $('#dp_footer_style');
        if (footer_style_option) {
            var _footers = {
                'footer1': 'footer1.html',
                'footer2': 'footer2.html'
            };
            var targetElement2 = $('#dp-js-footer-helper'),
                getFooter = function(footer) {
                    if (footer.length > 0) {
                        $.ajax({
                            'url': SITE_URL + _footers[footer],
                            'cache': false,
                            'async': true,
                            'method': 'GET'
                        }).done(function(reply) {
                            // change header here
                            $('#footer').remove();
                            $(reply).insertBefore(targetElement2);
                            document.getElementById('footer').scrollIntoView();
                        });
                    }
                };

            footer_style_option.change(function() {
                var value = $(this).val();
                getFooter(value);
            });
        }

        /*
        		var header_style_option = $( '#dp_cta_button' );
        		header_style_option.change(function(){

        			var value = $( this ).val();

        			if( value == 'no' ){
        				$( '#ctabutton' ).hide();
        			}
        			else{
        				var url      = window.location.href;
        				document.location = updateQueryStringParameter( url, 'cta_style', value );
        			}

        		});
        */

        var $header = $('#header'),
            $body = $('body');

        function doBgColor(elem, hex) {
            $(elem).css('background-color', hex);
        }

        function doBodyTextColor(hex) {
            $body.css('color', hex);
        }

        function convertHex(hex, opacity) {
            hex = hex.replace('#', '');
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);

            result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
            return result;
        }


        function doThemeColor(hex) {
            var styleSheet = $('#template-colors');

            if (styleSheet.length == 0) {
                $('<style id="template-colors">')
                    .appendTo('head');
            }

            styleSheet.text(" a:hover,.cart-container > .widget_shopping_cart_content .checkout,.sc-infopop__btn,.m_title,.smallm_title,.circle_title,.zn_text_box-title--style1,.feature_box .title,.services_box--classic .services_box__title,.latest_posts.default-style .hoverBorder:hover h6,.latest_posts.style2 ul.posts .title,.recentwork_carousel--1 .recentwork_carousel__crsl-title,.acc--default-style .acc-tgg-button,.acc--style3 .acc-tgg-button:after,.screenshot-box .left-side h3.title,.vertical_tabs.kl-style-1 .tabbable .nav>li.active>a,.services_box_element .box .list li,.shop-latest .tabbable .nav li.active a,.product-list-item:hover .details h3,.product-category .product-list-item:hover h3,.eBlog .itemContainer:not(.featured-post) .post_details .catItemAuthor a,.theHoverBorder:hover,.text-custom,.text-custom-hover:hover,.statbox h4 , #bbpress-forums .bbp-topics li.bbp-body .bbp-topic-title > a,.ib2-text-color-light-theme .ib2-info-message:before,.tbk--color-theme.tbk-symbol--icon .tbk__icon,.pricing-table-element .plan-column .plan-title,.process_steps--style2 .process_steps__step-icon,.vertical_tabs.kl-style-2 .tabbable .nav>li>a:hover,.vertical_tabs.kl-style-2 .tabbable .nav>li.active>a [data-zn_icon]:before,.vertical_tabs.kl-style-2 .tabbable .nav>li>a:hover [data-zn_icon]:before,.services_box--boxed .services_box__fonticon,.services_box--boxed .services_box__list li,.woocommerce ul.product_list_widget li .star-rating,.woocommerce .woocommerce-product-rating .star-rating,body .static-content__infopop .sc-infopop__btn {color: #" + hex + "; } .acc--style4,#page-loading:after,.ib2-text-color-light-theme .ib2-info-message:before,.itemThumbnail .overlay__inner a:hover,.acc--style4 .acc-tgg-button .acc-icon {border-color: #" + hex + "; } .acc--style3 .acc-tgg-button:hover,.acc--style3 .acc-tgg-button:hover:after,.acc--default-style .acc-tgg-button,.acc--style2 .acc-tgg-button,.acc--style3 .acc-tgg-button,.acc--style4 .acc-tgg-button {color: #" + hex + " ; } .tabs_style5 > ul.nav > li.active > a {border-bottom: 2px solid #" + hex + "; } header.style1,header.style2 .site-logo a,header.style3 .site-logo a {border-top: 3px solid #" + hex + "; } .tabs_style1 > ul.nav > li.active > a {box-shadow: inset 0 3px 0 #" + hex + "; } .main-nav > ul > li > a:before,.main-nav .zn_mega_container li a:not(.zn_mega_title):before,.social-icons.sc--normal li a:hover,.action_box,body .circlehover,body .kl-flex--classic .zn_general_carousel-arr:hover,body .kl-ioscaption--style1 .more:before,body .kl-ioscaption--style1 .more:after,body .kl-ioscaption--style2 .more,body .nivo-directionNav a:hover,body .th-wowslider a.ws_next:hover,body .th-wowslider a.ws_prev:hover,body .ca-more,body .title_circle,body .title_circle:before,body ul.links li a,.hg-portfolio-sortable #portfolio-nav li a:hover, .hg-portfolio-sortable #portfolio-nav li.current a,.kl-ioscaption--style1 .more:before, .kl-ioscaption--style1 .more:after,.btn-flat ,.zn_limited_offers li:after,.login-panel .login_facebook ,.imgboxes_style1 .hoverBorder h6,.circlehover:before,.kl-cta-ribbon,.newsletter-signup input[type=submit],.recentwork_carousel--1 .recentwork_carousel__bg,.zn-acc--style4 .acc-title,.zn-acc--style3 .acc-tgg-button:before,.process_box .content:before,#bbpress-forums div.bbp-search-form input[type=submit], #bbpress-forums .bbp-submit-wrapper button, #bbpress-forums #bbp-your-profile fieldset.submit button,.bg-custom,.bg-custom-hover:hover,.site-header.style8 .kl-main-header .kl-cta-lined,.site-header.style9 .kl-cta-lined,.latest_posts.default-style.kl-style-2 .lp-title,.latest_posts.default-style.kl-style-2 .post:not(.lp-title) .m_title:after,.latest_posts.default-style .hoverBorder h6,.itemThumbnail .overlay__inner a:hover,.elm-searchbox--normal .elm-searchbox__submit,.elm-searchbox--transparent .elm-searchbox__submit,.itemThumbnail .overlay__inner a:hover,.zn-acc--style4 .acc-tgg-button .acc-icon:before,span.zn_badge_sale,span.zn_badge_sale:after,.zn_limited_offers li:before,.style3 .action_box_inner,.style3 .action_box_inner:before,.action_box.style3:before,.circlehover.style2,.circlehover.style2:before,body .kl-flex--classic .zn_simple_carousel-arr:hover {background-color: #" + hex + "; } .breadcrumbs li:after,.ib2-text-color-light-theme .ib2-inner {border-left-color: #" + hex + "; } .kl-cta-ribbon .trisvg path,.kl-bottommask .bmask-customfill,.kl-slideshow .kl-loader svg path,.kl-slideshow.kl-loadersvg rect,.kl-diagram circle {fill: #" + hex + "; } .how_to_shop .number, .newsletter-signup input[type=submit], .th-map_controls, .hg-portfolio-sortable #portfolio-nav li.current a, .ptcarousel .controls > a:hover, .itemLinks span a:hover, .product-list-item .kw-actions a, .woocommerce ul.products li.product .product-list-item .kw-actions a, .shop-features .shop-feature:hover, .btn-flat, .redbtn, .imgboxes_style1 .hoverBorder h6, .feature_box.style3 .box:hover, .services_box--classic:hover .services_box__icon, services_box_element:hover .box .icon, .latest_posts.default-style .hoverBorder h6, .process_steps--style1 .process_steps__intro, .process_steps--style2 .process_steps__intro, .recentwork_carousel.style2 li a .details .plus, .gobox.ok:before, .gobox.ok:after, .gobox.ok, .zn_hover_box .hover-box:hover, .recentwork_carousel--1 .recentwork_carousel__bg, .circlehover:before,.kl-ioscaption--style1 .more:before, .kl-ioscaption--style1 .more:after ,.kl-ioscaption--style2 .more {background-color: #" + hex + "; } .action_box:before, .action_box:after, .site-header.style1, .site-header.style6 {border-top-color: #" + hex + "; } .process_steps--style1 .process_steps__intro:after,body .nivo-caption,body .kl-flex--classic .flex-caption,body .th-wowslider .ws-title,.process_box[data-align=left] .content:after,body .ls--laptop .ls__item-caption {border-left-color: #" + hex + "; } .process_box[data-align=right] .content:after {border-right-color: #" + hex + "; } .theHoverBorder:hover {box-shadow: 0 0 0 5px #" + hex + " inset; } .vertical_tabs.kl-style-1 .tabbable .nav>li.active>a {box-shadow: inset -3px 0 0 0 #" + hex + " inset; } .offline-page .containerbox {border-bottom: 5px solid #" + hex + "; } .offline-page .containerbox:after {border-top: 20px solid #" + hex + "; } .site-header.style2 .site-logo a {border-top: 3px solid #" + hex + "; } body .kl-ioscaption--style2 .title_big, body .kl-ioscaption--style2 .title_small {border-left: 5px solid #" + hex + "; } body .kl-ioscaption--style2.fromright .title_big, body .kl-ioscaption--style2.fromright .title_small {border-right: 5px solid #" + hex + " ; } #buddypress form#whats-new-form p.activity-greeting:after {border-top-color: #" + hex + "; } #buddypress input[type=submit],#buddypress input[type=button],#buddypress input[type=reset] ,#buddypress .activity-list li.load-more a {background: #" + hex + "; } #buddypress div.item-list-tabs ul li.selected a,#buddypress div.item-list-tabs ul li.current a {border-top: 2px solid #" + hex + "; } #buddypress form#whats-new-form p.activity-greeting,.widget.buddypress ul.item-list li:hover {background-color: #" + hex + "; } .widget.buddypress div.item-options a.selected ,#buddypress div.item-list-tabs ul li.selected a,#buddypress div.item-list-tabs ul li.current a ,#buddypress div.activity-meta a ,#buddypress div.activity-meta a:hover,#buddypress .acomment-options a {color: #" + hex + "; } .keywordbox.keywordbox-2 {border-bottom: solid 5px #" + hex + "; } .keywordbox.keywordbox-3 {border-bottom: solid 10px #" + hex + "; } .process_box4 .number:before,.loginbox-popup input[type=submit],.login-panel .login_facebook {background: #" + hex + "; } .statistics-horizontal .v-line {border-bottom: dotted 1px #" + hex + "; } .statistics-vertical::before {border-left: dotted 1px #" + hex + "; } .circle-text-box.style3 .wpk-circle-span,.circle-text-box.style2 .wpk-circle-span::before {background: #" + hex + "; } .circle-text-box:not(.style3) .wpk-circle-span:after {background-color: #" + hex + "; } .circle-text-box .wpk-circle-title {color: #" + hex + "; } .services_box--modern .services_box__icon {box-shadow: inset 0 0 0 2px #" + hex + "; } .services_box--modern:hover .services_box__icon {box-shadow: inset 0 0 0 40px #" + hex + "; } .services_box--modern .services_box__fonticon {color: #" + hex + "; } .services_box--modern .services_box__list li:before {box-shadow: 0 0 0 2px #" + hex + "; } .services_box--modern .services_box__list li:hover:before {box-shadow: 0 0 0 3px #" + hex + "; } .kl-has-overlay .img-intro:hover .overlay {box-shadow: inset 0 -8px 0 0 #" + hex + "; } .kl-cta-ribbon {background-color: #" + hex + "} .kl-cta-ribbon .trisvg path {fill: #" + hex + "} .logo-container .logo-infocard {background: #" + hex + "} body .kl-ioscaption--style4 .more:before {border-color: #" + hex + "; background: " + convertHex('#' + hex, 70) + "} body .kl-ioscaption--style4 .more:hover:before {background: " + convertHex('#' + hex, 90) + "} .timeline_box:hover:before {background-color: #" + hex + "} body .kl-ioscaption--style3.s3ext .main_title::before,body .kl-ios-selectors-block.bullets2 .item.selected::before,.iosslider__item .kl-ioscaption--style5 .klios-separator-line span,.btn-fullcolor,.btn-fullcolor:focus,.btn-fullcolor.btn-skewed:before,.cart-container .buttons .button.wc-forward,body .kl-flex--modern .flex-underbar,.tbk--color-theme.tbk-symbol--line .tbk__symbol span,.tbk--color-theme.tbk-symbol--line_border .tbk__symbol span,.ls__nav-item.selected,.site-header.style7 .kl-cart-button .glyphicon:after,.how_to_shop .number,.recentwork_carousel--2 .recentwork_carousel__title:after,.recentwork_carousel_v3 .btn::before,.recentwork_carousel--2 .recentwork_carousel__cat,.recentwork_carousel_v2 .recentwork_carousel__plus,.recentwork_carousel_v3 .recentwork_carousel__cat,.pricing-table-element .plan-column.featured .subscription-price .inner-cell,.shop-latest .tabbable .nav li.active a:before,.product-list-item .kw-actions a, .woocommerce ul.products li.product .product-list-item .kw-actions a,.latest_posts.style2 ul.posts .details span.date,.eBlog .related-articles .rta-post > a:after,.shop-features .shop-feature:hover,.cart-container .buttons .button.wc-forward,.media-container__link--style-borderanim1 > i,.site-header .kl-cart-button .glyphicon:after,.chaser .main-menu li.active > a,.imgboxes_style4 .imgboxes-title:after,.woocommerce a.button,.woocommerce button.button,.woocommerce button.button.alt,.woocommerce input.button,.woocommerce input#button,.woocommerce #review_form #submit {background-color: #" + hex + "; } .borderanim2-svg__shape {stroke: #" + hex + "; } .btn-fullcolor:hover,.btn-fullcolor.btn-skewed:hover:before,.cart-container .buttons .button.wc-forward:hover,.woocommerce a.button:hover,.woocommerce button.button:hover,.woocommerce button.button.alt:hover,.woocommerce input.button:hover,.woocommerce input#button:hover,.woocommerce #review_form #submit:hover {background-color: #a41a1b } .btn-lined.lined-custom {color: #" + hex + "; border-color: #" + hex + "; } .btn-lined.lined-custom:hover {color: #a41a1b; } .site-header.style8 .kl-main-header,.site-header.style9,.shop-latest .tabbable .nav li.active a:after,.zn_post_image,.zn_full_image,.sidebar .widget .widgettitle:after,.imgboxes_style4.kl-title_style_bottom .imgboxes-border-helper,.imgboxes_style4.kl-title_style_bottom:hover .imgboxes-border-helper,.statistic-box__line {border-bottom-color: #" + hex + "} .fake-loading:after {border: 2px solid " + convertHex('#' + hex, 15) + "; border-top-color: #" + hex + "; border-right-color: #" + hex + "; } .latest_posts.style2 ul.posts .details span.date:after {border-top-color: #" + hex + "; } .eluidf3608cd8 .kl-bg-source__overlay {background: #" + hex + " !important; } ");

        }


        // Init Tooltips
        $('[data-toggle=tooltip]').tooltip();

        var togglePanel = $('#togglePanel'),
            demoPanel = $('#kallyas_demopanel');

        togglePanel.click(function(e) {
            e.preventDefault();
            demoPanel.toggleClass('is-opened');
        });
        // Hide the tooltip after load ( delay is attached on the css's transition )
        togglePanel.next(".demo_tooltip").addClass("hideme").one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
            function() {
                $(this).remove();
            });

        // Init Pickers
        $('.cpicker').each(function() {
            var $this = $(this);
            $this.minicolors({
                control: $this.attr('data-control') || 'hue',
                inline: $this.attr('data-inline') === 'true',
                letterCase: $this.attr('data-letterCase') || 'lowercase',
                changeDelay: $this.attr('data-changedelay') || 0,
                change: function(hex, opacity) {
                    if (!hex) return;

                    switch ($this.attr('id')) {
                        case "bodybgcolor":
                            doBgColor($("body"), hex);
                            break;
                        case "boxed_bgcolor":
                            doBgColor($("body"), hex);
                            break;
                        case "themecolor":
                            doThemeColor(hex.substring(1, 7));
                            break;
                    }

                },
                theme: 'default'
            });
        });

        // Show / Hide Cart
        $('#dp_header_cart').change(function() {
            if ($(this).is(':checked')) $body.addClass('dp-hide-cart');
            else $body.removeClass('dp-hide-cart');
        });
        // Show / Hide Social Icons
        $('#dp_header_soc_icons').change(function() {
            if ($(this).is(':checked')) $body.addClass('dp-hide-soc-icons');
            else $body.removeClass('dp-hide-soc-icons');
        });
        // Show / Hide Login Button
        $('#dp_header_login_btn').change(function() {
            if ($(this).is(':checked')) $body.addClass('dp-hide-login-btn');
            else $body.removeClass('dp-hide-login-btn');
        });
        // Show / Hide Search
        $('#dp_header_search').change(function() {
            if ($(this).is(':checked')) $body.addClass('dp-hide-search');
            else $body.removeClass('dp-hide-search');
        });
        // Show / Hide Support button
        $('#dp_header_support').change(function() {
            if ($(this).is(':checked')) $body.addClass('dp-hide-support');
            else $body.removeClass('dp-hide-support');
        });
        // Show / Hide Top Text
        $('#dp_header_toptext').change(function() {
            if ($(this).is(':checked')) $body.addClass('dp-hide-toptext');
            else $body.removeClass('dp-hide-toptext');
        });
        // Show / Hide Language selector
        $('#dp_header_lang_menu').change(function() {
            if ($(this).is(':checked')) $body.addClass('dp-hide-langmenu');
            else $body.removeClass('dp-hide-langmenu');
        });

        /* Color presets */
        $('#dp-color-presets > span').click(function(event) {
            doThemeColor($(this).attr('data-color'));
        });

        /* Boxed layout options */
        // enable boxed layout?
        $('#enableboxed').change(function() {
            if ($(this).is(':checked')) $body.addClass('boxed-layout');
            else $body.removeClass('boxed-layout');
            jQuery(window).trigger("resize");
        });
        //  Add shadow to boxed page wrapper
        $('#enableboxed_image').change(function() {
            if ($(this).is(':checked')) $body.addClass('boxed-bgimage');
            else $body.removeClass('boxed-bgimage');
        });

        // Add patterns:
        $('#dp-patters a').click(function(e) {
            e.preventDefault();
            console.log($(this).attr('href'))
            $body.css('background-image', 'url(' + $(this).attr('href') + ')');
        });

    });
})(jQuery);

/* Scripts */
var domainroot = "http://hogash.com/demo/kallyas_html/";
! function(e, a, t) {
    "use strict";

    function n(a) {
        e.ajax({
            type: a.attr("method"),
            url: a.attr("action"),
            data: a.serialize(),
            cache: !1,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            error: function(a) {
                var t = e('<span class="alert alert-danger"><button type="button" class="close icon-close" data-dismiss="alert" aria-hidden="true"></button>Could not connect to server. Please try again later.</span>');
                e("#notification_container").html(t), setTimeout(function() {
                    t.addClass("animate")
                }, 300)
            },
            success: function(a) {
                if ("success" != a.result) {
                    var t = a.msg.substring(4),
                        n = e('<span class="alert alert-warning"><button type="button" class="close icon-close" data-dismiss="alert" aria-hidden="true"></button>' + t + "</span>");
                    e("#notification_container").html(n), setTimeout(function() {
                        n.addClass("animate")
                    }, 300)
                } else {
                    var t = a.msg,
                        n = e('<span class="success alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>' + t + "</span>");
                    e("#notification_container").html(n), setTimeout(function() {
                        n.addClass("animate")
                    }, 300)
                }
            }
        })
    }
    var i = e(a),
        o = (e(t), e("#page_wrapper")),
        s = e(".zn-res-trigger"),
        r = "Back",
        l = '<li class="zn_res_menu_go_back"><span class="zn_res_back_icon glyphicon glyphicon-chevron-left"></span><a href="#">' + r + "</a></li>",
        d = e("#main-menu > ul").clone().attr({
            id: "zn-res-menu",
            "class": ""
        }),
        c = function() {
            var a = d.prependTo(o);
            s.click(function(e) {
                e.preventDefault(), a.addClass("zn-menu-visible"), p()
            }), a.find('a:not([rel*="mfp-"])').on("click", function(a) {
                e(".zn_res_menu_go_back").first().trigger("click")
            }), a.find("li:has(> ul)").addClass("zn_res_has_submenu").prepend('<span class="zn_res_submenu_trigger glyphicon glyphicon-chevron-right"></span>'), a.find(".zn_res_has_submenu > ul").addBack().prepend(l), e(".zn_res_menu_go_back").click(function(a) {
                a.preventDefault();
                var t = e(this).closest(".zn-menu-visible");
                t.removeClass("zn-menu-visible"), p(), t.is("#zn-res-menu") && o.css({
                    height: "auto"
                })
            }), e(".zn_res_submenu_trigger").click(function(a) {
                a.preventDefault(), e(this).siblings("ul").addClass("zn-menu-visible"), p()
            })
        },
        p = function() {
            var t = e(".zn-menu-visible").last().css({
                    height: "auto"
                }).outerHeight(!0),
                n = e(a).height(),
                i = 0,
                s = e("#wpadminbar");
            n > t && (t = n, s.length > 0 && (i = s.outerHeight(!0), t -= i)), e(".zn-menu-visible").last().attr("style", ""), o.css({
                height: t
            })
        },
        u = !1,
        h = function() {
            e(a).width() < 1200 ? (u || (c(), u = !0), o.addClass("zn_res_menu_visible")) : (e(".zn-menu-visible").removeClass("zn-menu-visible"), o.css({
                height: "auto"
            }).removeClass("zn_res_menu_visible"))
        };
    e(t).ready(function() {
        h()
    }), e(a).on("resize", function() {
        h()
    });
    var m = e("#search").children(".searchBtn"),
        f = m.next(),
        g = m.parent();
    if (m.click(function(a) {
            a.preventDefault();
            var t = e(this);
            t.hasClass("active") ? (t.removeClass("active").find("span").addClass("glyphicon-search icon-white").removeClass("glyphicon-remove"), f.hide()) : (t.addClass("active").find("span").removeClass("glyphicon-search icon-white").addClass("glyphicon-remove"), f.show())
        }), e(t).click(function() {
            m.removeClass("active").find("span").addClass("glyphicon-search icon-white").removeClass("glyphicon-remove"), f.hide(0)
        }), g.click(function(e) {
            e.stopPropagation()
        }), e("#totop").length) {
        var v = 100,
            b = function() {
                var t = e(a).scrollTop();
                t > v ? e("#totop").addClass("show") : e("#totop").removeClass("show")
            };
        b(), e(a).on("scroll", function() {
            b()
        }), e("#totop").on("click", function(a) {
            a.preventDefault(), e("html,body").animate({
                scrollTop: 0
            }, 700)
        })
    }
//    e.ajax({
//        url: "php_helpers/date.php",
//        success: function(a) {
//            e("#current-date").html(a)
//        }
//    });
     e(".kl-video").each(function(a, t) {
        var n = e(t),
            i = n.next(".kl-video--controls"),
            o = i.find(".btn-toggleplay"),
            s = i.find(".btn-audio"),
            r = n.attr("data-setup"),
            l = "undefined" != typeof r ? JSON.parse(r) : "{}";
        if (1 == l.height_container && n.closest(".kl-video-container").css("height", n.height()), l.hasOwnProperty("muted") && 1 == l.muted && s.children("i").addClass("mute"), l.hasOwnProperty("autoplay") && 0 == l.autoplay && o.children("i").addClass("paused"), "undefined" != typeof video_background) {
            var d = new video_background(n, {
                position: l.hasOwnProperty("position") ? l.position : "absolute",
                "z-index": l.hasOwnProperty("zindex") ? l.zindex : "-1",
                loop: l.hasOwnProperty("loop") ? l.loop : !0,
                autoplay: l.hasOwnProperty("autoplay") ? l.autoplay : !1,
                muted: l.hasOwnProperty("muted") ? l.muted : !0,
                mp4: l.hasOwnProperty("mp4") ? l.mp4 : !1,
                webm: l.hasOwnProperty("webm") ? l.webm : !1,
                ogg: l.hasOwnProperty("ogg") ? l.ogg : !1,
                flv: l.hasOwnProperty("flv") ? l.flv : !1,
                fallback_image: l.hasOwnProperty("poster") ? l.poster : !1,
                youtube: l.hasOwnProperty("youtube") ? l.youtube : !1,
                priority: l.hasOwnProperty("priority") ? l.priority : "html5",
                video_ratio: l.hasOwnProperty("video_ratio") ? l.video_ratio : !1,
                sizing: l.hasOwnProperty("sizing") ? l.sizing : "fill",
                start: l.hasOwnProperty("start") ? l.start : 0
            });
            o.on("click", function(a) {
                a.preventDefault(), d.toggle_play(), e(this).children("i").toggleClass("paused")
            }), s.on("click", function(a) {
                a.preventDefault(), d.toggle_mute(), e(this).children("i").toggleClass("mute")
            })
        }
    }), "undefined" != typeof e.fn.magnificPopup && (e("a.kl-login-box").magnificPopup({
        type: "inline",
        closeBtnInside: !0,
        showCloseBtn: !0,
        mainClass: "mfp-fade mfp-bg-lighter"
    }), e('a[data-lightbox="image"]:not([data-type="video"])').each(function(a, t) {
        0 == e(t).parents(".gallery").length && e(t).magnificPopup({
            type: "image",
            tLoading: "",
            mainClass: "mfp-fade"
        })
    }), e(".mfp-gallery.images").each(function(a, t) {
        e(t).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: !0
            },
            tLoading: "",
            mainClass: "mfp-fade"
        })
    }), e('.mfp-gallery.misc a[data-lightbox="mfp"]').magnificPopup({
        mainClass: "mfp-fade",
        type: "image",
        gallery: {
            enabled: !0
        },
        tLoading: "",
        callbacks: {
            elementParse: function(a) {
                a.type = e(a.el).attr("data-mfp")
            }
        }
    }), e('a[data-lightbox="iframe"]').magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        tLoading: ""
    }), e('a[data-lightbox="inline"]').magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        tLoading: ""
    }), e('a[data-lightbox="ajax"]').magnificPopup({
        type: "ajax",
        mainClass: "mfp-fade",
        tLoading: ""
    }), e('a[data-lightbox="youtube"], a[data-lightbox="vimeo"], a[data-lightbox="gmaps"], a[data-type="video"]').magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !0,
        fixedContentPos: !1,
        mainClass: "mfp-fade",
        tLoading: ""
    }), e(".single_product_main_image .images a").magnificPopup({
        mainClass: "mfp-fade",
        type: "image",
        gallery: {
            enabled: !0
        },
        tLoading: ""
    }));
    var y = e(".flickrfeed"),
        _ = y.find(".flickr_feeds");
    _ && _.length && e.each(_, function(a, t) {
        var n = e(t),
            i = n.attr("data-limit") ? n.attr("data-limit") : 6,
            o = n.attr("data-fid");
        "undefined" != typeof e.fn.jflickrfeed && n.jflickrfeed({
            limit: i,
            qstrings: {
                id: o
            },
            itemTemplate: '<li><a href="{{image_b}}" data-lightbox="image"><img src="{{image_s}}" alt="{{title}}" /><span class="theHoverBorder"></span></a></li>'
        }, function(e) {
            n.find(" a[data-lightbox='image']").magnificPopup({
                type: "image",
                tLoading: ""
            }), n.parent().removeClass("loadingz")
        })
    }), e(".js-tonext-btn").on("click", function(a) {
        a.preventDefault();
        var t = e(this).attr("data-endof") ? e(this).attr("data-endof") : !1,
            n = 0;
        t && (n = e(t).height() + e(t).offset().top), e("html,body").animate({
            scrollTop: n
        }, 1e3, "easeOutExpo")
    });
    var w = function(e) {
            var a = e.find(".zn_blog_columns");
            0 != a.length && a.imagesLoaded(function() {
                a.isotope({
                    itemSelector: ".blog-isotope-item",
                    animationEngine: "jquery",
                    animationOptions: {
                        duration: 250,
                        easing: "easeOutExpo",
                        queue: !1
                    },
                    filter: "",
                    sortAscending: !0,
                    sortBy: ""
                })
            })
        },
        k = e(".zn_blog_archive_element");
    k && w(k), e(".shop-latest-carousel > ul").each(function(a, t) {
        e(this).carouFredSel({
            responsive: !0,
            scroll: 1,
            auto: !1,
            height: 437,
            items: {
                width: 260,
                visible: {
                    min: 1,
                    max: 4
                }
            },
            prev: {
                button: e(this).parent().find("a.prev"),
                key: "left"
            },
            next: {
                button: e(this).parent().find("a.next"),
                key: "right"
            }
        })
    });
    var C = function(a) {
            var t = a.find(".zn_limited_offers");
            t && "undefined" != typeof e.fn.carouFredSel && e.each(t, function(a, t) {
                var n = e(t);
                n.carouFredSel({
                    responsive: !0,
                    width: "92%",
                    scroll: 1,
                    items: {
                        width: 190,
                        visible: {
                            min: 2,
                            max: 4
                        }
                    },
                    prev: {
                        button: function() {
                            return n.closest(".limited-offers-carousel").find(".prev")
                        },
                        key: "left"
                    },
                    next: {
                        button: function() {
                            return n.closest(".limited-offers-carousel").find(".next")
                        },
                        key: "right"
                    }
                })
            })
        },
        x = e(".limited-offers-carousel");
    x && C(x);
    var P = e(".price-range-slider");
    e.each(P, function(a, t) {
        var n = e(this),
            i = n.parent().find(".price-result"),
            o = i.data("currency");
        n.slider({
            range: !0,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(e, a) {
                i.val(o + a.values[0] + " - " + o + a.values[1])
            }
        }), i.val(o + n.slider("values", 0) + " - " + o + n.slider("values", 1))
    }), e.each(e(".contactForm form"), function(a, t) {
        var n = e(t),
            i = e('<div class="cf_response"></div>');
        n.prepend(i), n.h5Validate(), n.submit(function(a) {
            return a.preventDefault(), n.h5Validate("allValid") && (i.hide(), e.post(e(this).attr("action"), n.serialize(), function(e) {
                i.html(e).fadeIn("fast"), null != e.match("success") && n.get(0).reset()
            })), !1
        })
    });
    var _ = e(".portfolio-item-more-toggle");
    _ && e.each(_, function(a, t) {
        var n = e(t);
        n.on("click", function(e) {
            e.preventDefault(), e.stopPropagation();
            var a = n.parents(".portfolio-item-desc").first();
            a.toggleClass("is-opened")
        })
    }), _ = e(".kl-contentmaps__panel-tgg"), _ && _.each(function(a, t) {
        var n = e(t);
        n.on("click", function(a) {
            a.preventDefault(), a.stopPropagation();
            var t = e(n.data("target"));
            if (t) {
                var i = n.data("targetClass");
                i && t.toggleClass(i)
            }
        })
    }), _ = e(".kl-iconbox"), _ && e.each(_, function(a, t) {
        var n = e(t),
            i = e(n.data("targetElement"));
        i && n.on("mouseenter", function(e) {
            i.addClass("kl-ib-point-active")
        }).on("mouseleave", function() {
            i.removeClass("kl-ib-point-active")
        })
    });
    var z = e("#mc-embedded-subscribe-form");
    e("#mc-embedded-subscribe").on("click", function(e) {
        e && e.preventDefault(), n(z)
    }), e(".bubble-box").each(function(t, n) {
        var o = e(n),
            s = o.attr("data-reveal-at"),
            r = o.attr("data-hide-after"),
            l = 1e3;
        "undefined" == typeof s && s.length <= 0 && (s = l), i.smartscroll(function(t) {
            o.length > 0 && e(a).scrollTop() > s && !o.hasClass("bb--anim-show") && !o.hasClass("bb--anim-hide") && (o.addClass("bb--anim-show"), "undefined" != typeof r && r.length >= 0 && setTimeout(function() {
                o.removeClass("bb--anim-show").addClass("bb--anim-hide").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                    e(this).remove()
                })
            }, r))
        }), o.find(".bb--close").on("click", function() {
            o.addClass("bb--anim-hide").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                e(this).remove()
            })
        })
    }), e(".kl-pp-box[data-ppbox-timeout]").each(function(a, t) {
        var n = e(t),
            i = n.attr("data-ppbox-timeout"),
            o = "undefined" == typeof i && e(i).length <= 0 ? i : 8e3,
            s = n.attr("data-cookie-expire"),
            r = "undefined" != typeof s ? s : 2;
        if (!e.cookie("ppbox")) {
            setTimeout(function() {
                e.magnificPopup.open({
                    items: {
                        src: e(n.get(0))
                    },
                    type: "inline",
                    mainClass: "mfp-fade mfp-bg-lighter",
                    tLoading: ""
                })
            }, o)
        }
        e(t).find(".dontshow").on("click", function(a) {
            a.preventDefault(), e.cookie("ppbox", "hideit", {
                expires: parseInt(r),
                path: "/"
            }), e.magnificPopup.close()
        })
    }), e(".popup-with-form, .popup-with-form2").magnificPopup({
        closeBtnInside: !0,
        type: "inline",
        preloader: !1,
        focus: "#name",
        callbacks: {
            beforeOpen: function() {
                e(a).width() < 700 ? this.st.focus = !1 : this.st.focus = "#name"
            }
        }
    });
    var O = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    O && (t.getElementsByTagName("body")[0].className += " is-safari")
}(window.jQuery, window, document),
function(e) {
    var a = "http://hogash-demos.com/kallyas_html/",
        t = !1,
        n = 1,
        i = {
            _headers: {
                header1: "header-style1.html",
                header2: "header-style2.html",
                header3: "header-style3.html",
                header4: "header-style4-old.html",
                header5: "header-style5-old.html",
                header6: "header-style6-old.html",
                header7: "header-style7-old.html",
                header8: "header-style8.html",
                header9: "header-style9.html",
                header10: "header-style10.html",
                header11: "header-style11.html",
                header12: "header-style12.html"
            },
            _ajax: function(t) {
                var n = this,
                    i = e("#dp-js-header-helper");
                i && e.ajax({
                    url: a + n._headers[t],
                    cache: !1,
                    async: !0,
                    method: "GET"
                }).done(function(a) {
                    if (a.length) {
                        e("#header").remove(), e(a).insertBefore(i), document.getElementById("header").scrollIntoView();
                        var n = t.substr(t.length - 1);
                        e("#header").attr("data-header-style", n), o.update(e(a), n)
                    }
                })
            },
            update: function(e) {
                e.length && this._ajax(e)
            }
        },
        o = {
            update: function(e, a) {
                return 1 > a ? void console.warn("[KT_Chaser::update] Error: Invalid header style number provided.") : void this._createChaserByHeaderStyle(e, a)
            },
            _createChaserByHeaderStyle: function(a, t) {
                var n = e.inArray(parseInt(t, 10), [1, 2, 3]);
                this._updateChaserHtml(a, n)
            },
            _updateChaserHtml: function(a, t) {
                t = t > -1;
                var n = e("body .chaser");
                if (n) {
                    e("#chaserMenuRow").html("").append('<div class="col-sm-2 col-md-2" id="left-container"></div>').append('<div class="col-sm-10 col-md-10" id="right-container"></div>'), e("#left-container").html(e(".logo-container", a).clone(!0));
                    var i = e("#right-container");
                    i.append('<div id="_wpk-custom-bar" class="col-sm-12 col-md-12"></div>').append('<div id="wpk-main-menu" class="col-sm-11 col-md-11"></div>').append('<div id="_wpk-cta-button" class="col-sm-1 col-md-1"></div>'), t ? "2" == a.attr("data-header-style") ? e("#_wpk-custom-bar").html(e('<div style="height:40px;"></div>')) : "3" == a.attr("data-header-style") ? e("#_wpk-custom-bar").html(e(".kl-top-header").clone(!0)) : e("#_wpk-custom-bar").html(e(".kl-top-header").clone(!0)) : e("#_wpk-custom-bar").html(e('<div style="height:40px;"></div>')), e("#_wpk-cta-button").html(e("#ctabutton", a).clone(!0)), e("#wpk-main-menu").html(e("#menu-main-menu", a).clone(!0))
                }
            }
        };
    n && e(function() {
        var a = e("#dp_header_style");
        a && a.change(function() {
            var a = e(this).val();
            i.update(a)
        });
        var n = e("#main-menu > ul");
        if (n) {
            var s = 300,
                r = e("#header");
            r.attr("data-header-style", "1"), e('<div id="chaserMenuRow" class="row"></div>').appendTo(document.body).wrap('<div class="chaser"><div class="container"></div></div>');
            var l = e(".hg_section").first();
            l && l.length > 0 && (s = l.first().offset().top);
            var d = e(window).scrollTop(),
                c = e("body .chaser");
            d > s && (c.addClass("visible"), t = !0)
        }
        e(window).scroll(function() {
            var a = e(window).scrollTop(),
                n = 300,
                i = e(".hg_section").first(),
                s = e("body .chaser");
            i && (n = i.first().offset().top), !t && a >= n ? (s.addClass("visible"), t = !0, o.update(e("#header"), e("#header").attr("data-header-style"))) : t && a >= n ? (s.addClass("visible"), t = !0, o.update(e("#header"), e("#header").attr("data-header-style"))) : t && n > a ? (s.removeClass("visible"), t = !1) : s.hasClass("visible") && "" == e("#chaserMenuRow").html().trim() && (s.addClass("visible"), t = !0, o.update(e("#header"), e("#header").attr("data-header-style")))
        })
    })
}(jQuery);