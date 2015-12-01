angular.module("LoanCalculator").controller("mainCtrl", function($scope, bankService){

	$scope.awesomeSauce = function() {
		bankService.getRate().then(function(res){
			$scope.interest_rate = res.data.interest_rate;
			console.log($scope.interest_rate)

		});
	}()

});
