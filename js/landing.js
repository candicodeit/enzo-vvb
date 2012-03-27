$(document).ready(function(){
	$('#main-nav ul li').hover(function(){
		var bgType = $(this).find('span').attr('class');
		$('.hero-img').attr('src', 'images/backgrounds/bg-'+ bgType +'.jpg');
	}, function(){
		$('.hero-img').attr('src', 'images/backgrounds/bg-beaches.jpg')
	});
});