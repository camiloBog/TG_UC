//$("#login-button").click(function(event){
//		 event.preventDefault();
//	 
//	 $('form').fadeOut(500);
//	 $('.wrapper').addClass('form-success');
//});


var mainApp = angular.module("mainApp", [ 'ngRoute' ]);

mainApp.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/inventario', {
		templateUrl : 'modules/inventario/inventario.html'
	}).

	when('/ordenCompra', {
		templateUrl : 'modules/inventario/ordenCompra.html'
	}).

	when('/regitraEntrada', {
		templateUrl : '/AngularJs/WebContent/modules/inventario/registroEntrada.html'
	}).

	when('/compras', {
		templateUrl : 'modules/facturacion/compras.html'
	}).

	when('/facturacion', {
		templateUrl : 'modules/facturacion/facturacion.html'
	}).

	when('/registro', {
		templateUrl : 'modules/facturacion/registro.html'
	}).

	when('/login', {
		templateUrl : 'modules/mainPage/login.html',
		controller: "loginController"
	}).
	
	when('/home', {
		templateUrl : 'modules/mainPage/home.html'
	}).
	
	otherwise({
		redirectTo : '/home'
	});

} ])

.controller('loginController', function($scope) {

	$scope.myFunction = function() {
	    $scope.nombre = "Camilo";
	    $scope.login = !$scope.login;
	}
});







