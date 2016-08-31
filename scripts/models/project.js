//TODO: DONE! Wrap each js page into a modular function, as we have with the labs in class.
'use strict';
(function(module) {

  //PROJECT OBJECT CONSTRUCTOR BUILT BY A FOR IN LOOP
  function Project (options) {
    for (var keys in options) {
      this[keys] = options[keys];
    }
  };

  //ARRAY ON PROJECT OBJECT FOR INSTANTIATED OBJECTS
  Project.allProjects = [];

  //METHOD ON PROJECT PROTOTYPE TO CREATE EACH PROJECT BASED ON TEMPLATE
  Project.prototype.toHtml = function() {
    var source = $('#project-template').html();
    var templateRender = Handlebars.compile(source);
    this.daysAgo = parseInt((new Date() - new Date(this.updatedOn))/60/60/24/1000);
    this.publishStatus = this.updatedOn ? 'updated ' + this.daysAgo + ' days ago' : '(draft)';
    return templateRender(this);
  };

  //TAKES DATA RETREIVED FROM STORAGE, SORTS IT BY PUBDATE, CREATES A NEW OBJECT
    //WITH PROJECT CONSTRUCTOR, THEN PUSHES INTO allProjects ARRAY.
    //INPUTDATA = RETREIVEDDATA FROM FETCHALL BELOW. (parsed localstorage data)
  Project.loadAll = function(inputData) {
    inputData.sort(function(a,b) {
      return (new Date(b.updatedOn)) - (new Date(a.updatedOn));
    }).forEach(function(element) {
      Project.allProjects.push(new Project(element));
    });
  };

  //TODO: Refactor the below code to obtain only the head when getting the eTag.

  //CHECKS IF THERE IS NO CODEPROJECTS @ LOCALSTORAGE. IF NONE, LOADS IT FROM SERVER(codeProjects.json), STRINGIFIES IT AND STORES IT IN LOCALSTORE. THEN, GRABS eTag, STRINGIFIES IT, STORES IN LOCALSTORAGE. THEN CALLS ITSELF.
  Project.fetchAll = function() {
    if (!localStorage.codeProjects) {
      $.getJSON('data/codeProjects.json', function(data, message, xhr) {
        localStorage.codeProjects = JSON.stringify(data);
        localStorage.eTag = JSON.stringify(xhr.getResponseHeader('eTag'));
        Project.fetchAll();
      });
    }
    //IF CODEPROJECTS @ LOCALSTORAGE EXISTS, JUST GET JSON DATA FROM CODEPROJECTS.JSON. COMPARE CURRENT ETAG AGAINST OLD ETAG, AND IF THEY DON'T MATCH, STORE NEW STRINGIFIED DATA IN LOCALSTORAGE.
    else {
      $.getJSON('data/codeProjects.json', function(data, message, xhr) {
        var newEtag = JSON.stringify(xhr.getResponseHeader('eTag'));
        if (newEtag !== localStorage.eTag) {
          localStorage.codeProjects = JSON.stringify(data);
          localStorage.eTag = newEtag;
        }
      });
      //AT END OF FUNCTION, AFTER ALL STORAGE IS DONE, PARSE THE STRINGIFIED DATA IN JSON, RUN LOADALL WITH THE DATA PASSED IN, THEN RUN THE RENDERINDEXPAGE FUNCTION TO DISPLAY IT WITH ALL OF OUR INFO.
      var retreivedData = JSON.parse(localStorage.codeProjects);
      Project.loadAll(retreivedData);
      projectView.renderHomePage();
    }
  };
  module.Project = Project;
})(window);
