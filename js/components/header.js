$(document).ready(function()
{
$(window).scroll(function(){
  var y = $(this).scrollTop();
		if(y > 20){
			$(".header").slideDown(100);
		}	else{
			$(".header").slideUp(100);
		}
});
$(".header").click(function(){
		 $("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});
});
