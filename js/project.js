$(document).ready(function(){
// alert("Does it work?");

	$(".trigger").on("click", function(){
		console.log("clicked");
		$(".rightColumn").slideToggle(1000);
		$(".leftColumn").toggleClass("leftSlide");
	});
	
	$(".backToTop").on("click", function(){
		$("html, body").animate({scrollTop: 0}, 1000);
		return false;
	});

});

