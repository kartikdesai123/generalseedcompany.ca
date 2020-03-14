jQuery(function(e) {
    "use strict";
    var r = function(r) {
            var n = r.find(".recent_works1");
            n && "undefined" != typeof e.fn.carouFredSel && e.each(n, function(r, n) {
                var t = e(n);
                t.carouFredSel({
                    responsive: !0,
                    scroll: 1,
                    auto: !1,
                    items: {
                        width: 300,
                        visible: {
                            min: 1,
                            max: 3
                        }
                    },
                    prev: {
                        button: function() {
                            return t.closest(".recentwork_carousel").find(".prev")
                        },
                        key: "left"
                    },
                    next: {
                        button: function() {
                            return t.closest(".recentwork_carousel").find(".next")
                        },
                        key: "right"
                    }
                })
            })
        },
        n = e(".recentwork_carousel__crsl-wrapper");
    n && r(n)
});