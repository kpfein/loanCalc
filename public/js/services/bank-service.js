angular.module("LoanCalculator").service("bankService", function($http){

	this.getRate = function(){
		return $http({
			method: "GET",
			url: "/interest_rate"
		})
	};

	

});
