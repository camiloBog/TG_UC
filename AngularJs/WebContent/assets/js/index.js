$("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});



//var mainApp = angular.module("mainApp", [ 'ngRoute' ]);
//
//mainApp.config([ '$routeProvider', function($routeProvider) {
//
//	$routeProvider.when('/inventario', {
//		templateUrl : 'modules/compras/inventario.html',
//	}).
//
//	when('/ordenCompra', {
//		templateUrl : 'modules/compras/ordenCompra.html',
//	}).
//
//	when('/regitraEntrada', {
//		templateUrl : 'modules/compras/registroEntrada.html',
//	}).
//
//	otherwise({
//		redirectTo : '/inventario'
//	});
//
//} ]);