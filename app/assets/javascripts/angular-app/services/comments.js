app.factory('comments', ['$http', function($http) {
  return $http.get('./comments/latest.json')
     .then(function(data) {
     	console.log(data);
       return data;
     })
}]);
