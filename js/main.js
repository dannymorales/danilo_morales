
$(document).ready(function () {

	$(window).load(function  () {
		$('#main').stop().load('pages/wedding_videos.html');
	});
	
	
	$('.menu ul li a').click(function () {	
		var page = $(this).attr('href');
		$('#main').load('pages/' + page + '.html');
		$(".menu__handle").click();
		return false;
	});
	$('#grid li a').click(function () {	
	
		
		var page = $(this).attr('href');
		$('#main').load('pages/videos/' + page + '.html');
		
		return false;

	});


	var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	percentPosition: true,
	columnWidth: '.grid-sizer'
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	$grid.masonry();
	}); 

	
	
});
