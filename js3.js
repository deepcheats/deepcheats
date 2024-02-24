
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);

function init() {

    var myLatlng = new google.maps.LatLng(40.755932,30.03735);

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        scrollwheel: false,
        draggable: true,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"lightness":"-50"},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"0"},{"hue":"#ff0000"}]},{"featureType":"landscape","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"lightness":"0"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"lightness":"50"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#95969a"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"lightness":"0"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"},{"lightness":"0"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#3c3c31"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"lightness":"0"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"lightness":"-10"},{"saturation":"0"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"},{"lightness":"41"},{"saturation":"0"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"lightness":"0"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dce6e6"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"labels.text","stylers":[{"lightness":"50"}]}]
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var contentString = '<div class="info-content"><h3><small>34, Istanbul @ Beyoglu</small></h3></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var image = 'img/flag.html';
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'More informations',
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

}
