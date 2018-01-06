app.controller('SideBarController', ['$scope', 'comments', function($scope, comments) {
  comments.then(function(data) {
    $scope.comments = data;
  });
}]);