'use strict';
(function(module) {
  function Testimonial (options) {
    for (var keys in options) {
      this[keys] = options[keys];
    }
  };

  Testimonial.allTestimonials = [];

  Testimonial.prototype.toHtml = function() {
    var source = $('#testimonial-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  Testimonial.loadAll = function(inputData) {
    inputData.forEach(function(element) {
      Testimonial.allTestimonials.push(new Testimonial(element));
    });
  };


  Testimonial.fetchAll = function() {
    if (!localStorage.testimonials) {
      $.getJSON('data/testimonials.json', function(data, message, xhr) {
        localStorage.testimonials = JSON.stringify(data);
        localStorage.eTag = JSON.stringify(xhr.getResponseHeader('eTag'));
        Testimonial.fetchAll();
      });
    }
    else {
      $.getJSON('data/testimonials.json', function(data, message, xhr) {
        var newEtag = JSON.stringify(xhr.getResponseHeader('eTag'));
        if (newEtag !== localStorage.eTag) {
          localStorage.testimonials = JSON.stringify(data);
          localStorage.eTag = newEtag;
        }
      });
      var retreivedData = JSON.parse(localStorage.testimonials);
      Testimonial.loadAll(retreivedData);
      Testimonial.renderTestimonialPage();
    }
  };

  Testimonial.renderTestimonialPage = function() {
    Testimonial.allTestimonials.forEach(function(a) {
      $('#testimonials').append(a.toHtml());
    });
  };

  Testimonial.fetchAll();
  module.Testimonial = Testimonial;
})(window);
