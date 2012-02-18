(function($){
 var slider_list = $('.slider').find('ul'),
     slider_images = slider_list.find('img'),
     slider_images_count = slider_images.length,
     slider_image_width = slider_images[0].width,
     slider_images_width = slider_image_width * slider_images_count, 
     slider_images_current = 1;

  $('.slider_nav').show().find('button').on('click', function(){
    var direction = $(this).data('dir'),
        location = slider_image_width;

    (direction == 'next') ? slider_images_current += 1 : slider_images_current -= 1;

    if (slider_images_current === 0) {
      slider_images_current = slider_images_count;
      direction = 'next';
      location = slider_images_width - slider_image_width;
    } else if (slider_images_current - 1 == slider_images_count) {
      slider_images_current = 1;
      location = 0;
    }


    transition(slider_list, location, direction);
  });

  function transition(container, location, direction) {
    var unit;

    if (direction && location !== 0) {
      unit = (direction === 'next') ? '-=' : '+=';
    }

    container.animate({
      'margin-left': unit ? (unit + location) : location
    });
  }
})(jQuery);
