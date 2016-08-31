'use strict';
//TODO: Not sure how to modularize this. Need help from TA/Rick.

//EMPTY FUNCTION THAT THE PAGE WILL BUILD INTO
var projectView = {};

//HIDES ALL BUT THE BEGINNING OF EACH PROJECT, SHOWS ALL WHEN CLICKED AGAIN
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
//APPENDS EACH PROJECT FROM THE allProjects ARRAY AFTER ITS COMPLETED INSTANTIATION. ALSO RUNS handleMainNav to PREPARE THE CLICK LISTENERS. ALSO MINIMIZES THE EXCESS TYPE FOR EACH PROJECT.
projectView.renderHomePage = function() {
  Project.allProjects.forEach(function(a) {
    $('#projects').append(a.toHtml());
  });
  // projectView.handleMainNav();
  projectView.setTeasers();
};
//RUN FETCHALL HERE TO START THE CHAIN AND TO ENSURE PROJECTVIEW IS LOADED IN FIRST.
Project.fetchAll();
