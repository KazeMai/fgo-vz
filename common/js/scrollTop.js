$(function(){
	$('#gotop').hide();
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 60){
			$('#gotop').fadeIn();
		}else{
			$('#gotop').fadeOut();
		}
	});
	
	$('#gotop a').click(function(){
		$('body,html').animate({
			scrollTop:0
		},500);
		return false;
	});
});