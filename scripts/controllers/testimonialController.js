(function(module) {
  var testimonialsController = {};

  testimonialsController.reveal = function() {
    $('.tab-content').hide();
    $('#testimonials').fadeIn();
  };
  module.testimonialsController = testimonialsController;
})(window);
