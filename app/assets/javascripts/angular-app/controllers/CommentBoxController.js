app.controller('CommentBoxController', ['$scope', '$http', function($scope, $http) {
	$scope.addComment = function(){
		var data = {
			'comment': {
				'commenter': $scope.commenter,
				'body': $scope.body
			}
		};

		var config = {
			headers: {
				"X-CSRF-Token": $('meta[name=csrf-token]').attr('content')
			}
		}

		$http.post(location.href + '/comments', data, config)
			.then(function(response){
				window.location.reload(true);
			}
		);
	}
}]);