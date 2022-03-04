function gotoBanff() {
    let mapOptions = {
        center: new google.maps.LatLng(51.17840371835689, -115.57072785363039),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // disabling controls
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
    };

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    map.setOptions({ styles: junnelStyles });
}

function gotoDrumheller() {
    let mapOptions = {
        center: new google.maps.LatLng(51.461875980984345, -112.71065585037239),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID,
    };

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// style
let junnelStyles = [
    {
        featureType: "all",
        elementType: "geometry",
        stylers: [
            {
                color: "#202c3e",
            },
        ],
    },
    {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
            {
                gamma: 0.01,
            },
            {
                lightness: 20,
            },
            {
                weight: "1.39",
            },
            {
                color: "#ffffff",
            },
        ],
    },
    {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
            {
                weight: "0.96",
            },
            {
                saturation: "9",
            },
            {
                visibility: "on",
            },
            {
                color: "#000000",
            },
        ],
    },
    {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                lightness: 30,
            },
            {
                saturation: "9",
            },
            {
                color: "#29446b",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                saturation: 20,
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                lightness: 20,
            },
            {
                saturation: -20,
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                lightness: 10,
            },
            {
                saturation: -30,
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#193a55",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
            {
                saturation: 25,
            },
            {
                lightness: 25,
            },
            {
                weight: "0.01",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                lightness: -20,
            },
        ],
    },
];
