'use strict';
projectView.renderAdminPage = function() {
  var awesomeRender = Handlebars.compile($('#awesome-template').html());
  Project.awesomePointsByTestimonial().forEach(function(awesomePointsObj) {
    $('.awesome-points').append(awesomeRender(awesomePointsObj));
  });
  $('#testimonial-total').text(Testimonial.allTestimonials.length);
};

Project.fetchall(projectView.renderAdminPage);
