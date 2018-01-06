app.factory('articleComments', ['$http', function($http) {
	  return $http.get(location.href + '/comments')
	     .then(function(data) {
	       return data;
     })
}]);
