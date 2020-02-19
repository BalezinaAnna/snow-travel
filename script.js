$(document).ready(function(){

		$('.next').click(function(){
			var id = $(this).closest('.slider').attr('id');
			var currentImage = $('#'+id+' .img.curry');
			var currentImageIndex = $('#'+id+' .img.curry').index();
			var nextImageIndex = currentImageIndex + 1;
			var nextImage = $('#'+id+' .img').eq(nextImageIndex);
			currentImage.removeClass('curry');

			if(nextImageIndex == ($('#'+id+' .img:last').index()+1)){
				$('#'+id+' .img').eq(0).addClass('curry');
			} else {
				nextImage.addClass('curry');
			}
		});
		$('.prev').click(function(){
			var id = $(this).closest('.slider').attr('id');
			var currentImage = $('#'+id+' .img.curry');
			var currentImageIndex = $('#'+id+' .img.curry').index();
			var prevImageIndex = currentImageIndex - 1;
			var prevImage = $('#'+id+' .img').eq(prevImageIndex);

			currentImage.removeClass('curry');
			prevImage.addClass('curry');
		});

		$('.comments__pad').slick({
  			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true, 
    		prevArrow: '<div class="slick-prev"><i class="fas fa-long-arrow-alt-left fa-3x"></i></div>', 
    		nextArrow: '<div class="slick-next"><i class="fas fa-long-arrow-alt-right fa-3x"></i></div>'
		});
		//$('a.header__menu__item').click(function(){
			//var elementClick = $(this).attr('href');
			//var destination = $(elementClick).offset().top;
			//$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 800);
			//return false;
		//});


		 $('a[href^="#"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
		var top_show = 150;
		var delay = 1000;
		$(document).ready(function() {
    	$(window).scroll(function () {
        	if ($(this).scrollTop() > top_show){
            	$('.upper').fadeIn();
       				 }else{
            	$('.upper').fadeOut();
        	}
    			});
    		$('.upper').click(function () { 
        	$('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});
 

});
