'use strict';

angular.module('login')

.controller('loginController', ['$scope', 'testServiceRequest',
    function($scope, testServiceRequest) {
		
		$scope.loginFunction = function() {
			
			alert("ok");
			
		};
		
		
	}
]);

/////////////////////////////////////////////////////
//'use strict';
//
//angular.module('login')
//
//.controller('loginController', ['$scope', '$http',
//    function($scope, $http) {
//	
//		var path = "http://localhost:8080/Core/";//API path
//	
//		$scope.loginFunction = function() {
//			
//			//alert("path: "+path+'someservice/getusuario');
//			alert(ruta);
//			var global = $http.get(path+'someservice/getusuario');
//			alert("Respuesta: "+global);
//			return global;
//			
//			//$scope.login = !$scope.login;
//			
////			$http.get(path+'someservice/getusuario').success(function(data) {
////				
////				alert("Respuesta: "+data);
////				
////				//$scope.films = data;
////			});
//			
//		};
//		
//		
//	}
//]);






//'use strict';
//
//angular.module('login')
//
//.controller('loginController', function($scope) {
//	
//	$scope.loginFunction = function() {
//	    $scope.login = !$scope.login;
//	};
//	
//});