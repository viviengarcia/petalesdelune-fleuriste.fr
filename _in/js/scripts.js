/*
Add the code below to the bottom of your page, just before the closing </body> tag.
Edit myLatlng and the other variables.

Find syntax for Features that can be styled here:

https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyleFeatureType

Or use a service such as:

http://software.stadtwerk.org/google_maps_colorizr/#
http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
https://developers.google.com/maps/documentation/javascript/tutorial
*/
var bittersMap = (function () {
	var myLatlng = new google.maps.LatLng(45.316525, 1.337981),
			mapCenter = new google.maps.LatLng(45.316525, 1.337981),
			mapCanvas = document.getElementById('map_canvas'),
			mapOptions = {
				center: mapCenter,
				zoom: 14,
				minZoom: 10,
				zoomControl: true,
				scrollwheel: false,
				draggable: true,
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			},
			map = new google.maps.Map(mapCanvas, mapOptions),
			contentString =
				'<div id="content">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h1 id="firstHeading" class="firstHeading">Pétales de Lune</h1>'+
				'<div id="bodyContent"'+
				// '<p>Sveavägen 98</p>'+
				'</div>'+
				'</div>',
			infowindow = new google.maps.InfoWindow({
				content: contentString,
				maxWidth: 300
			}),
			marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: 'Pétales de Lune'
			});

	return {
		init: function () {
			map.set('styles', [{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [
					{ hue: '#ffff00' },
					{ saturation: 30 },
					{ lightness: 10}
				]}
			]);

			google.maps.event.addListener(marker, 'click', function () {
				infowindow.open(map,marker);
			});
		}
	};
}());

bittersMap.init();

// IS JS ON IN THIS FUCKING CHROME BROWSER ?
// alert('JS ON');

/*
*	PANEL ANIMATION
*
*/
$.noConflict();
jQuery(document).ready(function($) {

	var panel_openButton = $('.panel-openButton');
	var panel_closeButton = $('.panel-closeButton');

	var panel_background = $('.panel-background');

	var panel_container = $('#contact-panel-container, #mentions-panel-container');

	var contactPanel_openButton = $('#contact-button');
	var mentionsPanel_openButton = $('#mentions-button');

	// swipe
	var swipeOptions = {
			triggerOnTouchEnd: true,
			swipeStatus: swipeStatus,
			allowPageScroll: "vertical",
			threshold: 150
	};

	function swipeStatus(event, phase, direction, distance) {
		if (phase == "move" && direction == "right") {
			closePanel();
		}
	}

	// mouse
	function openPanel(js_trigger) {
		var separatorPos = js_trigger.indexOf('-');
		var idPart = js_trigger.slice(0, separatorPos + 1);
		var target = $('#' + idPart.concat('panel-container'));
		panel_background.addClass('clouded');
		target.removeClass().addClass('slideInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			});
	}

	function closePanel() {
		panel_background.removeClass('clouded').addClass('cleared');
		panel_container.removeClass().addClass('slideOutRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				panel_background.removeClass('cleared');
			});
		panel_background.delay('500').removeClass('cleared');
	}


	panel_openButton.click(function(e) {
		e.preventDefault();
		var tmpId = this.id;
		openPanel(tmpId);
	});

	panel_closeButton.click(function(e) {
		e.preventDefault();
		closePanel();
	});


	panel_background.click(function(e) {
		e.preventDefault();
		closePanel();
	});

	panel_container.swipe(swipeOptions);

});

/*
*	PANEL ANIMATION
*
*/

jQuery(document).ready(function($) {
	var viewport = $(window).width();
	var pixelRatio = window.devicePixelRatio;
	$('#media-query-debug').text(viewport + 'px - @' + pixelRatio + 'x');
});
