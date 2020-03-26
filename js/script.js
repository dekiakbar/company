// navbar
(function ($){
	$(document).ready(function (){

		// hide nav
		$(".navscroll").hide();

		// fade nav
		$(function () {
			$(window).scroll(function () {

				// setelan jarak ketika di scroll
				if ($(this).scrollTop () > 100) {
					$('.navscroll').fadeIn ();
				} else {
					$('.navscroll').fadeOut ();
				}
			});
		});		

});
	}(jQuery));


// scroll page

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -65
      }, 900,'easeInBack', function(){
   
      });
    } 
  });
});

// about

$(window).on('scroll',function(){
	$('.putar1').addClass('look')
	$('.putar2').addClass('look')
});



