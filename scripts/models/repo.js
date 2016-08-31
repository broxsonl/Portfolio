(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    $.get('/github.com/users/broxsonl/repos' +
           '?per_page=10' +
           '&sort=updated')
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        reposObj.allRepos = data;
        callback();
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
