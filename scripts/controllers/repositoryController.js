(function(module) {
  var repositoryController = {};

  repositoryController.reveal = function() {
    $('.tab-content').hide();
    $('#repositories').fadeIn();
  };
  module.repositoryController = repositoryController;
})(window);
