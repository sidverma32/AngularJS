angular
		.module('angular-frontend')
		.controller('frontController', function($scope , frontFactory){

			$scope.hotel ;

			$scope.priceInfo = {
				min: 0,
				max: 5000
			}

          frontFactory.getData().success(function(data){

            $scope.front=data;

          }).error(function(error){

            console.log(error);
          });
      	});