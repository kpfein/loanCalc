module.exports = {
	getInterestRate: function(req, res, next){
		var interestRate = Math.random() * (0.2 - 0.01) + 0.01;
		var rate = { interest_rate: interestRate.toFixed(2)};
		// console.log(rate)
		return res.json(rate); 
	}
}