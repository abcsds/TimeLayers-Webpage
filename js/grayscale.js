/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);


function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        // center: {lat: 19.4310, lng: -99.1296},
        center: {lat: 41.02543462610611, lng: 28.974273204803467},

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,
    };

    map = new google.maps.Map(document.getElementById('map'),mapOptions);

    // Load GeoJSON.
    // map.data.loadGeoJson('/js/test.json');

    // Marker with Galata

    var contentString = '<div id="info-content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Galata Tower</h1>'+
     '<div id="bodyContent">'+
     '<br>'+
     '<p class="text-center"><img class="info-img" src="/img/Galata.jpg" alt="Galata"><br>'+
     '<small>South elevation</small><br>'+
     'Years: 1920s <br>'+
     'Galata Tower was the tallest building in Istanbul at 219½ feet (66.9 m) when it was built in 1348.<br>'+
     '<smal>Attribution:</small> Istambul Hatirasi<a href="azizistanbul.com"><br>'+
     'https://azizistanbul.com</a> <br>'+
     '<small>(last visited July, 2015)</small>.</p>'+
     '</div>'+
     '</div>';

    var myLatlng = new google.maps.LatLng(41.02560460051535, 28.97419810295105)
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Galata Tower'
    });
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
}
