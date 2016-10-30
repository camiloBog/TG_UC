//$("#login-button").click(function(event){
//		 event.preventDefault();
//	 
//	 $('form').fadeOut(500);
//	 $('.wrapper').addClass('form-success');
//});


var mainApp = angular.module("mainApp", [ 'ngRoute' ]);

mainApp.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.
	
	when('/tenant', {
		templateUrl : 'modules/configuracion/tenant.html'
	}).
	
	when('/usuario', {
		templateUrl : 'modules/configuracion/usuario.html'
	}).
	
	when('/inventario', {
		templateUrl : 'modules/consultas/inventario.html'
	}).
	
	when('/ventas', {
		templateUrl : 'modules/consultas/ventas.html'
	}).
	
	when('/facturacion', {
		templateUrl : 'modules/facturacion/facturacion.html'
	}).
	
	when('/ingreso', {
		templateUrl : 'modules/inventario/ingreso.html'
	}).
	
	when('/productos', {
		templateUrl : 'modules/inventario/productos.html'
	}).
	
	when('/proveedores', {
		templateUrl : 'modules/inventario/proveedores.html'
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
		
		//alert("myFunction " + $scope.login);
		
	    $scope.nombre = "Camilo";
	    
	    $scope.login = !$scope.login;
	}
})


;



