var testimonials = [];

function Testimonial (opts) {
  this.name = opts.name;
  this.quote = opts.quote;
  this.quoteAuthor = opts.quoteAuthorLink;
  this.quoteAuthorLink = opts.quoteAuthorLink;
};

Testimonial.prototype.toHtml = function() {
  var $newTestimonial = $('article.testimonial-template').clone();
  $newTestimonial.attr('data-name', this.name);
  $newTestimonial.find('testimonial-quote').text(this.quote);
  $newTestimonial.find('.quote-author').text(this.quoteAuthor);
  $newTestimonial.find('.testimonial-author').attr('href', this.quoteAuthorLink);
  return $newTestimonial;
};

testimonialObjectArray.forEach(function(theCurrentTestimonialObject) {
  projects.push(new Testimonial(theCurrentTestimonialObject));
});

testimonials.forEach(function(testimonial) {
  $('#testimonial-header').append(testimonial.toHtml());
});
