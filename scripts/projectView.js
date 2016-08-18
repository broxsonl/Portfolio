var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var $clickedOn = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $clickedOn).fadeIn('slow');
  });
  $('.main-nav .tab:first').click();
};

projectView.handleMainNav();
