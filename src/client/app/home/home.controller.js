(function () {
	angular.module('app.home')
	.controller('HomeController',HomeController);
	
	
	/* @ngInject */
	function HomeController(){
		var vm = this;
		vm.message="Home Screen @ your service";
	}
})();