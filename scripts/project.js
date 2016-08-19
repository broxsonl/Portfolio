var projects = [];

function Project (opts) {
  // Save ALL the properties of `opts` into `this`
  this.name = opts.name;
  this.title = opts.title;
  this.subtitle = opts.subtitle;
  this.projectUrl = opts.projectUrl;
  this.projectImage = opts.projectImage;
  this.imageAlt = opts.imageAlt;
  this.updatedOn = opts.updatedOn;
};

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.updatedOn))/60/60/24/1000);
  this.publishStatus = this.updatedOn ? 'updated ' + this.daysAgo + ' days ago' : '(draft)';
  return templateRender(this);
};

projectObjectsArray.sort(function(firstElement, secondElement) {
  return (new Date(secondElement.updatedOn)) - (new Date(firstElement.updatedOn));
});

projectObjectsArray.forEach(function(theCurrentProjectObject) {
  projects.push(new Project(theCurrentProjectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
