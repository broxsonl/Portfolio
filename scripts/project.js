'use strict';
function Project (options) {
  for (var keys in options) {
    this[keys] = options[keys];
  }
};

Project.allProjects = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.updatedOn))/60/60/24/1000);
  this.publishStatus = this.updatedOn ? 'updated ' + this.daysAgo + ' days ago' : '(draft)';
  return templateRender(this);
};

Project.loadAll = function(inputData) {
  inputData.sort(function(a,b) {
    return (new Date(b.updatedOn)) - (new Date(a.updatedOn));
  }).forEach(function(element) {
    Project.allProjects.push(new Project(element));
  });
};

Project.fetchAll = function() {
  if (!localStorage.codeProjects) {
    $.getJSON('data/codeProjects.json', function(data, message, xhr) {
      localStorage.codeProjects = JSON.stringify(data);
      localStorage.eTag = JSON.stringify(xhr.getResponseHeader('eTag'));
      Project.fetchAll();
    });
  }
  else {
    $.getJSON('data/codeProjects.json', function(data, message, xhr) {
      var newEtag = JSON.stringify(xhr.getResponseHeader('eTag'));
      if (newEtag !== localStorage.eTag) {
        localStorage.codeProjects = JSON.stringify(data);
        localStorage.eTag = newEtag;
      }
      // var retreivedData = JSON.parse(localStorage.codeProjects);
      // Project.loadAll(retreivedData);
      // projectView.renderIndexPage();
    });
    var retreivedData = JSON.parse(localStorage.codeProjects);
    Project.loadAll(retreivedData);
    projectView.renderIndexPage();
  }
};
