
'use strict';

angular.module('login')

.controller('loginController', function($scope) {
	
	$scope.loginFunction = function() {
	    $scope.login = !$scope.login;
	}
	
});
