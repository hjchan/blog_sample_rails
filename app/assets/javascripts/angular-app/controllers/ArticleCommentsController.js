app.controller('ArticleCommentsController', ['$scope', 'articleComments', function($scope, articleComments) {
	articleComments.then(function(data) {
    $scope.comments = data.data.comments;
  });
}]);