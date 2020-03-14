! function(e) {
    "use strict";
    e(document).ready(function() {
        {   var e = [{
                    address: "65, Vrundavan Shopping Center, Gujarat Housing Board, Chandkheda, Ahmedabad, Gujarat, India",
                    latitude: 23.1110782,
                    longitude: 72.5809954,
                    icon: {
                        image: baseurl+"public/front/images/map-marker.png",
                        iconsize: [60, 70],
                        iconanchor: [60, 70]
                    }
                }],
                o = [{
                    featureType: "water",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#acbcc9"
                    }]
                }, {
                    featureType: "landscape",
                    stylers: [{
                        color: "#f2e5d4"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        color: "#c5c6c6"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e4d7c6"
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#fbfaf7"
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#c5dac6"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: 33
                    }]
                }, {
                    featureType: "road"
                }, {
                    featureType: "poi.park",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: 20
                    }]
                }, {}, {
                    featureType: "road",
                    stylers: [{
                        lightness: 20
                    }]
                }],
                r = 23.1110782,
                t = 72.5809954;
            jQuery(".th-google_map").gMap({
                controls: {
                    panControl: !0,
                    zoomControl: !0,
                    mapTypeControl: !0,
                    scaleControl: !0,
                    streetViewControl: !0,
                    overviewMapControl: !0
                },
                scrollwheel: !1,
                markers: e,
                latitude: "23.1110782",
                longitude: "72.5809954",
                zoom: 14,
                style: o,
                draggable: Modernizr.touch ? !1 : !0
            })
        }
    })
}(jQuery);