// HOVER CIRCLE - HOME VIEW

$(document).ready(function() {
	$(".circle-exterior").hover(function(){
		$(".text-circle").toggleClass("hidden");
		$(".text-hover-circle").toggleClass("hidden");

	});
});

// SMOOTH DOWN

$('.smooth-down').on('click', function(e) {
	e.preventDefault();
	var target = $(this).attr("href");
	$('html, body').stop().animate({
		scrollTop: $(target).offset().top
		}, 1000);
	});

// NAVBAR EFFECT

$(document).ready(function() {
	var mainbottom = $('#landing').offset().top + $('#landing').height();

	$(window).on('scroll', function() {
		stop = Math.round($(window).scrollTop());
		if (stop > mainbottom) {
			$('.nav').addClass('navbar-fixed-top');
			$('.nav').addClass('past-main');
		} else {
			$('.nav').removeClass('navbar-fixed-top');
			$('.nav').removeClass('past-main');
		};
	});
			});