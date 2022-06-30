(function(){
'use strict';

$('.slider_wrapper').slick({  
    slidesToShow: 4,
    dots:false,
    arrows:false,
    responsive: [
	    {
	      breakpoint: 1919,
	      settings: {
            slidesToShow: 2,
            slidesToScroll:2,
            arrows:false, 
            dots:true,
	      }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows:false, 
              dots:true,
              slidesToScroll:1
            }
          }
    ]
});


})();