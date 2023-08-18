$(function(){
//  Stykey Header  
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navbar').addClass('sticky_header');
  }
  else {
       $('.navbar').removeClass('sticky_header');
  }
  }); 

  //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
 //====================== Back-to-top button end ================================================================================
  $('.jamal').slick({
    slidesToShow: 3,
    slidesToScroll:3,
    autoplay: true,
    autoplaySpeed:1000,
    arrows:false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },]
  });

 $('.counter').counterUp({
    delay:10,
    time: 5000
});

$('.sliderr').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:1000,
  arrows:false,
});

// banner 
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 2000,
  arrows:false,
  pauseOnHover:false,
  
});
// banner end
// Slider
$('.hasan').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 2000,
  arrows:true,
  pauseOnHover:false,
  
});
// service 
$('.service_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
  arrows:false,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    },]
  
});

new VenoBox({
  selector: '.my-video-links',
});

// service end




var containerEl = document.querySelector('.hasan_container');

var mixer = mixitup(containerEl);




var mixer = mixitup('.portfolio-mixitup');



// Back to top 
   
})