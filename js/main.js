$(document).ready(function(){
	var pull = $("#navigation-toggle");
	var nav = $(".navigation ul");

$(pull).on("click",function(e){
	e.preventDefault();
	$(nav).slideToggle();
	$(this).toggleClass('navigation__toggle-button--open');
});

$(window).resize(function(){
	var w = $(window).width();
	if (w > 992 && nav.is(':hidden')) {
		nav.removeAttr('style');
	};
});

$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});

})