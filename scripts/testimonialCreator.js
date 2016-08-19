'use strict';

var testimonials = [];

function Testimonial (opts) {
  this.name = opts.name;
  this.quote = opts.quote;
  this.quoteAuthor = opts.quoteAuthor;
  this.quoteAuthorLink = opts.quoteAuthorLink;
};

Testimonial.prototype.toHtml = function() {
  var source = $('#testimonial-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

testimonialObjectArray.forEach(function(theCurrentTestimonialObject) {
  testimonials.push(new Testimonial(theCurrentTestimonialObject));
});

testimonials.forEach(function(testimonial) {
  $('#testimonials').append(testimonial.toHtml());
});
