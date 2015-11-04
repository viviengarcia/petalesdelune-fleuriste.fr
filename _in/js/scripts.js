// @codekit-prepend "jquery-2.1.4.js", "google.map.js", "jquery.touchSwipe.js";


/*
 * Google Map Customization
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


/*
 *	Animated panels  - triggering and manipulation
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
		var currentOpenedPanel = $('.slideInRight');
		panel_background.removeClass('clouded').addClass('cleared');
		currentOpenedPanel.removeClass().addClass('z-index-top slideOutRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				panel_background.removeClass('cleared');
				panel_container.removeClass(' z-index-top');
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