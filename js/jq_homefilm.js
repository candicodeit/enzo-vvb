//use jquery to hide div, show new div
$(document).ready(function(){
		//hide normal div
		$('#visitors_promo_scroller').remove();
		
		//set up
		$(function() {
			$(".carousel .jCarouselLite").jCarouselLite({
				btnNext: ".carousel .next",
				btnPrev: ".carousel .prev",
				speed: 500,
				visible: 4,
				vertical: false
			});
		//	$(".jqLink").vAlign();


		$(".jCarouselLite ul li").hover(function() 
		{
		//if target on other

			$(".onlyOnHoverBak", this).stop(true, true).fadeIn();
			$(".onlyOnHoverTxt", this).stop(true, true).fadeIn();

		},
			function () {
			$(".onlyOnHoverTxt", this).stop(true, true).fadeOut();
			$(".onlyOnHoverBak", this).stop(true, true).fadeOut();
			
			}
			//hide only if 
			);
			
		});

		
		//show
		$('#jq_sidebar').fadeIn();
});

