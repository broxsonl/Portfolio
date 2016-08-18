var testimonials = [];

function Testimonial (opts) {
  this.name = opts.name;
  this.quote = opts.quote;
  this.quoteAuthor = opts.quoteAuthor;
  this.quoteAuthorLink = opts.quoteAuthorLink;
};

Testimonial.prototype.toHtml = function() {
  var $newTestimonial = $('article.testimonial-template').clone();
  $newTestimonial.attr('data-name', this.name);
  $newTestimonial.find('.testimonial-quote').text(this.quote);
  $newTestimonial.find('.testimonial-author ').text(this.quoteAuthor);
  $newTestimonial.find('.testimonial-author').attr('href', this.quoteAuthorLink);
  $newTestimonial.removeClass('testimonial-template');
  return $newTestimonial;
};

testimonialObjectArray.forEach(function(theCurrentTestimonialObject) {
  testimonials.push(new Testimonial(theCurrentTestimonialObject));
});

testimonials.forEach(function(testimonial) {
  $('#testimonials').append(testimonial.toHtml());
});
