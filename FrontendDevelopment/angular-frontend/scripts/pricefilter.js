angular
	.module('angular-frontend')
	.filter('pricefilter', function () {
		return function(listings, priceInfo){

			var filtered = [];
			var min = priceInfo.min;
			var max = priceInfo.max;


			angular.forEach(listings, function(listing){


				if(listing.actualprice >= min && listing.actualprice <= max){
					filtered.push(listing);
			}
			});
			return filtered;
		}
		});