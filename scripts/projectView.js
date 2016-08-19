'use strict';

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

  $('#projects').on('click', '.see-more', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).html('See less &larrhk;').removeClass('see-more').addClass('see-less');
  });

  $('#projects').on('click', '.see-less', function(event){
    event.preventDefault();
    $('.project-picture').hide();
    $(this).html('Read on &#x21aa').removeClass('see-less').addClass('see-more');

  });
};

projectView.handleMainNav();
projectView.setTeasers();
