'use strict';
(function(module) {
  Testimonial.renderAdminPage = function() {
    var awesomeRender = Handlebars.compile($('#awesome-template').html());
    Testimonial.awesomePointsByTestimonial().forEach(function(awesomePointsObj) {
      $('.awesome-points').append(awesomeRender(awesomePointsObj));
    });
    $('#testimonial-total').text(Testimonial.allTestimonials.length);
  };

  Testimonial.fetchall(Testimonial.renderAdminPage);

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

  module.Testimonial = Testimonial;
})(window);
