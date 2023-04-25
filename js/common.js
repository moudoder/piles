$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top + -50;
    let html_zoom = $('html').css('zoom');
    top = top * html_zoom;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");
  $('.reviews-slider').slick({
  	infinite: false,
 	  slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
    adaptiveHeight: true,
    variableWidth: true,
    prevArrow: $('.reviews-prev'),
    nextArrow: $('.reviews-next'),
  });

  $('.questions-block').on('click', function() {
    $(this).toggleClass('active');
    return false;
  })


  let reviews_count = $('.reviews-slider .slick-slide').length;
  $('.reviews-content .counter-all').text(reviews_count);

  $('.reviews-slider').on('afterChange', function(event, slick, currentSlide) {
    let counter_slide = currentSlide + 1;
    if (counter_slide < 10) {
      $('.reviews-content .counter-now').text('0' + counter_slide + '/');
    }
    else{
      $('.reviews-content .counter-now').text(counter_slide + '/');
    }
   });

})