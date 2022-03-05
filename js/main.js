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
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID,
    };

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // polygon
    let drumCoords = [
        new google.maps.LatLng(51.4752623632513, -112.74762252453857),
        new google.maps.LatLng(51.48938242900342, -112.74782229114551),
        new google.maps.LatLng(51.48932023565774, -112.73204072919577),
        new google.maps.LatLng(51.48291386664779, -112.71630910889779),
        new google.maps.LatLng(51.4746402333813, -112.71595951733559),
    ];

    drumArea = new google.maps.Polygon({
        paths: drumCoords,
        strokeColor: "#ff0000",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#ffffff",
        fillOpacity: 0.35,
    });

    let myCircle = {
        strokeColor: "#ff0000",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#ffffff",
        fillOpacity: 0.35,
        map: map,
        center: new google.maps.LatLng(51.46770291038004, -112.70861809437967),
        radius: 200,
    };

    let cityCircle = new google.maps.Circle(myCircle);
    drumArea.setMap(map);

    let playgroundMarker = new google.maps.Marker({
        position: new google.maps.LatLng(
            51.457071325370414,
            -112.69081205557248
        ),
        map: map,
        title: "Riverside Park",
        icon: "assets/icons/playground.png",
    });

    let dinosaurMarker = new google.maps.Marker({
        position: new google.maps.LatLng(
            51.46737003970833,
            -112.70880061838022
        ),
        map: map,
        title: "World's Largest Dinosaur",
        icon: "assets/icons/dinopark.png",
    });

    let dinosaurWindow = new google.maps.InfoWindow({
        content:
            '<div class="info-popup"><h2>World\'s Largest Dinosaur</h2><div class="content-flex"><img src="img/large-dinosaur.jpg" /><div class="information-center"><p>The model Tyrannosaurus was constructed of fiberglass and steel, with a height of 26.3 metres (86 ft) and a length of 46 metres (151 ft), considerably larger than the largest known specimens of the actual dinosaur, known as Sue which reached up to 12.8 m (42 ft) in length, and up to 4 m (13 ft) tall at the hips.</p><div class="links"><a href="#">Contact</a><a href="#">Phone</a><a href="#">Wiki</a></div></div></div>',
    });

    google.maps.event.addListener(dinosaurMarker, "click", function () {
        dinosaurWindow.open(map, dinosaurMarker);
    });

    google.maps.event.trigger(dinosaurMarker, "click");
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

// extras
$(".selectGroup").each(function (i, selectGroup) {
    let $selectGroup = $(selectGroup);

    $selectGroup.on("click", "a", function () {
        $selectGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
    });
});
