(function(module) {
  var repoView = {};

  var repoCompiler = function(thisRepo) {
    var source = $('#repo-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(thisRepo);
  };

  repoView.renderRepos = function() {
    $('#repositories ul').empty().append(
      reposObj.withTheAttribute('name').map(repoCompiler)
    );
  };
  reposObj.requestRepos(repoView.renderRepos);
})(window);
