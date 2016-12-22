;(function($){

	$(window).load(function() {

		if ( typeof google !== 'underfined') {

			var $coordinates = {lat: 46.486801,	lng: 30.732628};
			var $map_options = {
		        center: $coordinates,
		        zoom: 19,
		        mapTypeId: google.maps.MapTypeId.ROADMAP, //ROADMAP, HYBRID etc
				disableDefaultUI: true, //disable controls zooms icon
				scrollwheel: true, // disable map scroll
				draggable: true, // disable drag map with mouse
		    };

			var $map_div = $('#map')[0]; // [0] it is important, if you use jQuery for a map
			var $map = new google.maps.Map($map_div, $map_options);

			// Markers
			var $marker = new google.maps.Marker({
			    position: $coordinates,
			    map: $map, // variable of our map
			    title: 'Beetroot', // tooltip on hover
			    icon: 'img/marker-beetroot.png', // path relative index.html
			});

		
			//Direction

			$(document).on('click', '.address-form__btn', function(event) {
				event.preventDefault();
				
				var directionsDisplay = new google.maps.DirectionsRenderer(),
					directionsService = new google.maps.DirectionsService(),
					start = $('.start-route').val(),
					end = $('.end-route').val();

				var request = {
				    origin:start,
				    destination:end,
				    travelMode: google.maps.TravelMode.DRIVING
				};

				directionsDisplay.setMap($map);

				directionsService.route(request, function(result, status) {
				    if (status == google.maps.DirectionsStatus.OK) {
				      directionsDisplay.setDirections(result);
				    }
				});
			}); //end click
		}
		
	}); // end load

})(jQuery);
