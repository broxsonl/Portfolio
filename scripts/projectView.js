var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var $clickedOn = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $clickedOn).fadeIn('slow');
  });
  $('.main-nav .tab:first').click();
};

// articleView.setTeasers = function() {
//   $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
//
//   $('#articles').on('click', 'a.read-on', function(e) {
//     e.preventDefault();
//     $(this).parent().find('*').fadeIn();
//     $(this).hide();
//   });
// };

projectView.setTeasers = function() {
  $('.project-picture').hide();

  $('#projects').on('click', 'a.see-more', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });

};

projectView.handleMainNav();
projectView.setTeasers();
