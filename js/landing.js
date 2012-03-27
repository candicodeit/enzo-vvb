$(document).ready(function(){
	$('#main-nav ul li').hover(function(){
		console.log('present');
		var bgType = $(this).find('span').attr('class');
		$('.hero-img').attr('src', 'images/backgrounds/bg-'+ bgType +'.jpg')
	});
});