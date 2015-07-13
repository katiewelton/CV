$(document).ready(function(){
// alert("Does it work?");

$("a.trigger").on("click", function(){
	console.log("clicked");
	$(".rightColumn").slideToggle(1000);
	$(".leftColumn").toggleClass("leftSlide");
	});
});

