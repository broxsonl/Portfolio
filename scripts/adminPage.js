'use strict';
Testimonial.renderAdminPage = function() {
  var source = $('#testimonial-template').html();
  var awesomeRender = Handlebars.compile(source);
  Testimonial.awesomePointsByAuthor().forEach(function(awesomePointsObj) {
    $('.awesome-points ul').append(awesomeRender(awesomePointsObj));
  });
  $('.testimonial-total span').text(Testimonial.allTestimonials.length);
};

Testimonial.allTestimonialAuthors = function() {
  return Testimonial.allTestimonials.map(function(currentAuthor) {
    return currentAuthor.quoteAuthor;
  }).reduce(function(acc, cur) {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
};

Testimonial.awesomePointsByAuthor = function() {
  return Testimonial.allTestimonialAuthors().map(function(currentAuthor) {
    return {
      name: currentAuthor,
      awesomePoints: Testimonial.allTestimonials.filter(function(currentTestimonial){
        return currentTestimonial.quoteAuthor === currentAuthor;
      }).map(function(currentTestimonial) {
        return currentTestimonial.awesomePoints;
      }).reduce(function(prev, cur) {
        return prev + cur;
      })
    };
  });
};

Testimonial.renderAdminPage();
// Testimonial.fetchall();
