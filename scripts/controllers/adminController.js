(function(module) {
  var adminController = {};

  adminController.reveal = function() {
    $('.tab-content').hide();
    $('#admin').fadeIn();
  };
  module.adminController = adminController;
})(window);
