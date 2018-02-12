/*
 * Violet main js
 * Version 1.0.0
 * URL: http://rakibhossain.cf
 * Description: This js file is required for different interactive task
 * Author: Rakib Hossain
 *
 */

$(document).ready(function($){

    
//  //================================ owl-carousel======================
//  //========header Slider slider=======
	$(".slider").owlCarousel({
		items:1,
		loop:true,
		margin:0,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    	responsive: { 0: {items: 1} }
	});

  $('.slider').on('translate.owl.carousel',function(){
    $('.slide__content h1:odd').removeClass('animated fadeInUp').css("opacity","0.02");
    $('.slide__content h1:even').removeClass('animated fadeInDown').css("opacity","0.02");
  });
  $('.slider').on('translated.owl.carousel',function(){
    $('.slide__content h1:odd').addClass('animated fadeInUp').css("opacity","1");
    $('.slide__content h1:even').addClass('animated fadeInDown').css("opacity","1");
  });

  
//jQuery end        
});