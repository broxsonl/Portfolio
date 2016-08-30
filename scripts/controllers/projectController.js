(function(module) {
  var projectsController = {};

  projectsController.reveal = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  };
  module.projectsController = projectsController;
})(window);
