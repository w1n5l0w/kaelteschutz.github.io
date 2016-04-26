/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() {
	//Preloader
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
		//animated logo
		// $(".navbar-brand").hover(function () {
		// 	$(this).toggleClass("animated shake");
		// });

		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});

		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();

		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});


		// OwlCarousel N1
		// $("#owl-demo").owlCarousel({
		// 	autoPlay: 3000,
		// 	items : 3,
		// 	itemsDesktop : [1199,3],
		// 	itemsDesktopSmall : [979,3]
		// });

		// OwlCarousel N2
		// $("#owl-demo-1").owlCarousel({
		// 	  navigation : false, // Show next and prev buttons
		// 	  slideSpeed : 300,
		// 	  paginationSpeed : 400,
		// 	  singleItem:true
		// });

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top - 50;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});

		//Map

		// Kartenobjekt erstellen, mit Optionen zum Zentrieren und Zoom Level setzen
		var map = L.map('map', {
			center: [52.491809, 13.388638],
			zoom: 16,
			scrollWheelZoom: false
		});

		// Als Baselayer ein OpenStreetMap Tile Layer mit Attribution hinzufuegen
		var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		// Als zweiten Baselayer die OpenCycleMap anlegen
		var ocm = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
			attribution: '© OpenCycleMap contributors - © OpenStreetMap contributors'
		});

		// Gruppen fuer BaseLayer und Overlays (als Objekte)  anlegen
		var baseLayers = {
			"Open Street Map": osm,
			"Open Cycle Map": ocm
		};

		// LayerControl
		L.control.layers(baseLayers).addTo(map);


		// Einen Marker an einen Koordinate platzieren und ein Popup anhaengen und oeffnen
		L.marker([52.491809, 13.388638]).addTo(map)	// Markerposition hier in Dezimalgrad
			.bindPopup('<b>Kälteschutz im Mehringhof</b> <br> Gneisenaustr. 2a, 10961 Berlin <br/> 2. Hof, Aufgang rechts, 2. Etage (über dem Theater)')
			.openPopup();


		//Subscribe
		// new UIMorphingButton( document.querySelector( '.morph-button' ) );
		// // for demo purposes only
		// [].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) {
		// 	bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		// } );

});
