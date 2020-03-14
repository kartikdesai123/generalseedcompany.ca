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

/*! jQuery UI - v1.10.3 - 2013-12-15
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(e, t) {
    function i(t, i) {
        var s, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (s = t.parentNode, n = s.name, t.href && n && "map" === s.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && a(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && a(t)
    }

    function a(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0,
        n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, a) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), a && a.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var a, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (a = n.css("position"), ("absolute" === a || "relative" === a || "fixed" === a) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, a) {
            return !!e.data(t, a[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var a = e.attr(t, "tabindex"),
                s = isNaN(a);
            return (s || a >= 0) && i(t, !s)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, a) {
        function s(t, i, a, s) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, a && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
            r = a.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + a] = function(i) {
            return i === t ? o["inner" + a].call(this) : this.each(function() {
                e(this).css(r, s(this, i) + "px")
            })
        }, e.fn["outer" + a] = function(t, i) {
            return "number" != typeof t ? o["outer" + a].call(this, t) : this.each(function() {
                e(this).css(r, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, a) {
                var s, n = e.ui[t].prototype;
                for (s in a) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([i, a[s]])
            },
            call: function(e, t, i) {
                var a, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (a = 0; s.length > a; a++) e.options[s[a][0]] && s[a][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var a = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[a] > 0 ? !0 : (t[a] = 1, s = t[a] > 0, t[a] = 0, s)
        }
    })
})(jQuery);
(function(e, t) {
    var i = 0,
        s = Array.prototype.slice,
        a = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (n) {}
        a(t)
    }, e.widget = function(i, s, a) {
        var n, r, o, h, l = {},
            u = i.split(".")[0];
        i = i.split(".")[1], n = u + "-" + i, a || (a = s, s = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: a.version,
            _proto: e.extend({}, a),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(a, function(i, a) {
            return e.isFunction(a) ? (l[i] = function() {
                var e = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    t = function(e) {
                        return s.prototype[i].apply(this, e)
                    };
                return function() {
                    var i, s = this._super,
                        n = this._superApply;
                    return this._super = e, this._superApply = t, i = a.apply(this, arguments), this._super = s, this._superApply = n, i
                }
            }(), t) : (l[i] = a, t)
        }), o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: n
        }), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function(i) {
        for (var a, n, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (a in r[o]) n = r[o][a], r[o].hasOwnProperty(a) && n !== t && (i[a] = e.isPlainObject(n) ? e.isPlainObject(i[a]) ? e.widget.extend({}, i[a], n) : e.widget.extend({}, n) : n);
        return i
    }, e.widget.bridge = function(i, a) {
        var n = a.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r,
                h = s.call(arguments, 1),
                l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, a = e.data(this, n);
                return a ? e.isFunction(a[r]) && "_" !== r.charAt(0) ? (s = a[r].apply(a, h), s !== a && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new a(r, this))
            }), l
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var a, n, r, o = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, a = i.split("."), i = a.shift(), a.length) {
                    for (n = o[i] = e.widget.extend({}, this.options[i]), r = 0; a.length - 1 > r; r++) n[a[r]] = n[a[r]] || {}, n = n[a[r]];
                    if (i = a.pop(), s === t) return n[i] === t ? null : n[i];
                    n[i] = s
                } else {
                    if (s === t) return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, a) {
            var n, r = this;
            "boolean" != typeof i && (a = s, s = i, i = !1), a ? (s = n = e(s), this.bindings = this.bindings.add(s)) : (a = s, s = this.element, n = this.widget()), e.each(a, function(a, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = a.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? n.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var a, n, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent)
                for (a in n) a in i || (i[a] = n[a]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, a, n) {
            "string" == typeof a && (a = {
                effect: a
            });
            var r, o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
            a = a || {}, "number" == typeof a && (a = {
                duration: a
            }), r = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), r && e.effects && e.effects.effect[o] ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function(i) {
                e(this)[t](), n && n.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    a = 1 === i.which,
                    n = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return a && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(e) {
    var t = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, i, s = this.options,
                a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                n = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                r = [];
            for (i = s.values && s.values.length || 1, a.length > i && (a.slice(i).remove(), a = a.slice(0, i)), t = a.length; i > t; t++) r.push(n);
            this.handles = a.add(e(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : this.range = e([])
        },
        _setupEvents: function() {
            var e = this.handles.add(this.range).filter("a");
            this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i, s, a, n, r, o, h, l, u = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), a = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(s - u.values(t));
                (a > i || a === i && (t === u._lastChangedValue || u.values(t) === c.min)) && (a = i, n = e(this), r = t)
            }), o = this._start(t, r), o === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, n.addClass("ui-state-active").focus(), h = n.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - h.left - n.width() / 2,
                top: t.pageY - h.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, i, s, a, n;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), a = this._valueMax() - this._valueMin(), n = this._valueMin() + s * a, this._trimAlignValue(n)
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function(e, t, i) {
            var s, a, n;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (a = this.values(), a[t] = i, n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: a
            }), s = this.values(t ? 0 : 1), n !== !1 && this.values(t, i, !0))) : i !== this.value() && (n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), n !== !1 && this.value(i))
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function(t, i) {
            var s, a, n;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), undefined;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, a = arguments[0], n = 0; s.length > n; n += 1) s[n] = this._trimAlignValue(a[n]), this._change(null, n);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var s, a = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (a = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; a > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, i, s, a, n, r = this.options.range,
                o = this.options,
                h = this,
                l = this._animateOff ? !1 : o.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, o.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, o.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, o.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), t = i
            }) : (s = this.value(), a = this._valueMin(), n = this._valueMax(), i = n !== a ? 100 * ((s - a) / (n - a)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, o.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, o.animate), "max" === r && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, o.animate), "max" === r && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var s, a, n, r, o = e(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, e(i.target).addClass("ui-state-active"), s = this._start(i, o), s === !1)) return
                }
                switch (r = this.options.step, a = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), i.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(a + (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(a - (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (a === this._valueMax()) return;
                        n = this._trimAlignValue(a + r);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (a === this._valueMin()) return;
                        n = this._trimAlignValue(a - r)
                }
                this._slide(i, o, n)
            },
            click: function(e) {
                e.preventDefault()
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);


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


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-audio-backgroundsize-cssanimations-csscalc-csscolumns-csstransforms-csstransforms3d-csstransitions-flexbox-formvalidation-inlinesvg-input-inputtypes-rgba-scriptasync-stylescoped-svg-svgclippaths-svgfilters-video-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var l in T)
            if (T.hasOwnProperty(l)) {
                if (e = [], t = T[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), b.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = S.className,
            n = Modernizr._config.classPrefix || "";
        if (E && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), E ? S.className.baseVal = t : S.className = t)
    }

    function i(e, t) {
        if ("object" == typeof e)
            for (var n in e) P(e, n) && i(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                a = Modernizr[r[0]];
            if (2 == r.length && (a = a[r[1]]), "undefined" != typeof a) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function c() {
        var e = t.body;
        return e || (e = s(E ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, a) {
        var o, i, l, u, d = "modernizr",
            f = s("div"),
            p = c();
        if (parseInt(r, 10))
            for (; r--;) l = s("div"), l.id = a ? a[r] : d + (r + 1), f.appendChild(l);
        return o = s("style"), o.type = "text/css", o.id = "s" + d, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = u, S.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function d(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? f(a, n || t) : a);
        return !1
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function v(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(m(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + m(t[a]) + ":" + r + ")");
            return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function h(e, t, a, o) {
        function i() {
            u && (delete D.style, delete D.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var c = v(e, a);
            if (!r(c, "undefined")) return c
        }
        for (var u, f, p, m, h, g = ["modernizr", "tspan"]; !D.style;) u = !0, D.modElem = s(g.shift()), D.style = D.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (m = e[f], h = D.style[m], d(m, "-") && (m = l(m)), D.style[m] !== n) {
                if (o || r(a, "undefined")) return i(), "pfx" == t ? m : !0;
                try {
                    D.style[m] = a
                } catch (y) {}
                if (D.style[m] != h) return i(), "pfx" == t ? m : !0
            }
        return i(), !1
    }

    function g(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + V.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, a, o) : (s = (e + " " + _.join(i + " ") + i).split(" "), p(s, t, n))
    }

    function y(e, t, r) {
        return g(e, n, n, t, r)
    }
    var b = [],
        T = [],
        C = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                T.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                T.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = C, Modernizr = new Modernizr, Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var w = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    C._prefixes = w, Modernizr.addTest("svgfilters", function() {
        var t = !1;
        try {
            t = "SVGFEColorMatrixElement" in e && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
        } catch (n) {}
        return t
    });
    var S = t.documentElement,
        E = "svg" === S.nodeName.toLowerCase();
    E || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = b.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = n + " " + e, c(t)
        }

        function o(e) {
            var t = y[e[h]];
            return t || (t = {}, g++, e[h] = g, y[g] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), d) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : v.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), d) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) a.createElement(s[i]);
            return a
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return b.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }

        function c(e) {
            e || (e = t);
            var r = o(e);
            return !b.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || l(e, r), e
        }
        var u, d, f = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            v = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            g = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, d = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0, d = !0
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = b, c(t), "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof e ? e : this, t);
    var x = "Moz O ms Webkit",
        _ = C._config.usePrefixes ? x.toLowerCase().split(" ") : [];
    C._domPrefixes = _;
    var P;
    ! function() {
        var e = {}.hasOwnProperty;
        P = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), C._l = {}, C.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, C._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        C.addTest = i
    });
    var k = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, a = e in t, !a && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), a = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    C.hasEvent = k, Modernizr.addTest("audio", function() {
        var e = s("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("video", function() {
        var e = s("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("csscalc", function() {
        var e = "width:",
            t = "calc(10px);",
            n = s("a");
        return n.style.cssText = e + w.join(t + e), !!n.style.length
    }), Modernizr.addTest("rgba", function() {
        var e = s("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("scriptasync", "async" in s("script")), Modernizr.addTest("stylescoped", "scoped" in s("style")), Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var N = s("input"),
        L = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        z = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) z[t[n]] = !!(t[n] in N);
        return z.list && (z.list = !(!s("datalist") || !e.HTMLDataListElement)), z
    }(L);
    var A = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        M = {};
    Modernizr.inputtypes = function(e) {
        for (var r, a, o, i = e.length, s = "1)", l = 0; i > l; l++) N.setAttribute("type", r = e[l]), o = "text" !== N.type && "style" in N, o && (N.value = s, N.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && N.style.WebkitAppearance !== n ? (S.appendChild(N), a = t.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(N, null).WebkitAppearance && 0 !== N.offsetHeight, S.removeChild(N)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? N.checkValidity && N.checkValidity() === !1 : N.value != s)), M[e[l]] = !!o;
        return M
    }(A);
    var $ = "CSS" in e && "supports" in e.CSS,
        R = "supportsCSS" in e;
    Modernizr.addTest("supports", $ || R);
    var B = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var j = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    C.mq = j;
    var F = C.testStyles = u;
    Modernizr.addTest("formvalidation", function() {
        var t = s("form");
        if (!("checkValidity" in t && "addEventListener" in t)) return !1;
        if ("reportValidity" in t) return !0;
        var n, r = !1;
        return Modernizr.formvalidationapi = !0, t.addEventListener("submit", function(t) {
            (!e.opera || e.operamini) && t.preventDefault(), t.stopPropagation()
        }, !1), t.innerHTML = '<input name="modTest" required="required" /><button></button>', F("#modernizr form{position:absolute;top:-99999em}", function(e) {
            e.appendChild(t), n = t.getElementsByTagName("input")[0], n.addEventListener("invalid", function(e) {
                r = !0, e.preventDefault(), e.stopPropagation()
            }, !1), Modernizr.formvalidationmessage = !!n.validationMessage, t.getElementsByTagName("button")[0].click()
        }), r
    });
    var V = C._config.usePrefixes ? x.split(" ") : [];
    C._cssomPrefixes = V;
    var O = function(t) {
        var r, a = w.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = w[i],
                l = s.toUpperCase() + "_" + r;
            if (l in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    C.atRule = O;
    var q = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete q.elem
    });
    var D = {
        style: q.elem.style
    };
    Modernizr._q.unshift(function() {
        delete D.style
    });
    C.testProp = function(e, t, r) {
        return h([e], n, t, r)
    };
    C.testAllProps = g;
    C.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? O(e) : (-1 != e.indexOf("-") && (e = l(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    C.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = y("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("csstransforms3d", function() {
            var e = !!y("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in S.style)) {
                var n, r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", F(r + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), a(), o(b), delete C.addTest, delete C.addAsyncTest;
    for (var U = 0; U < Modernizr._q.length; U++) Modernizr._q[U]();
    e.Modernizr = Modernizr
}(window, document);