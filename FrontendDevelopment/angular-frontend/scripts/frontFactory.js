angular
	.module('angular-frontend')
	.factory('frontFactory', function($http){


	
		function getData()
		{
			return $http.get('data/data.json');
		}


		return{
			getData : getData
		}
	});