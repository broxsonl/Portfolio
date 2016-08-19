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
  return templateRender(this);

  // $newProject.find('time').html('last updated ' + parseInt((new Date() - new Date(this.updatedOn))/60/60/24/1000) + ' days ago');
  // $newProject.removeClass('template');
  // return template;
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
