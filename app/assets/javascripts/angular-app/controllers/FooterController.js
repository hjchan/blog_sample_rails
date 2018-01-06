app.controller('FooterController', ['$scope',
	function($scope) {
		$scope.text = "Copyright &copy; My Rails Blog "
		$scope.date = new Date();
	}
]);