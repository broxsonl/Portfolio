//TODO: DONE! Go through all js files and comment above each code block what the code is doing to help ensure both comprehension and readability for later examination.
'use strict';

Testimonial.renderAdminPage = function() {
  var source = $('#admin-template').html();
  var awesomeRender = Handlebars.compile(source);
  Testimonial.awesomePointsByAuthor().forEach(function(awesomePointsObj) {
    $('#admin ul').append(awesomeRender(awesomePointsObj));
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
