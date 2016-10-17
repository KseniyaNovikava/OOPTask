
var airline = function Airline(){
	var airlines = [];
	this.addAirplane = function (airplane){
		return airlines.push(airplane);
	}
	var weightSum = 0;
	this.totalWeight = function(){
		for(var i=0; i < airlines.length; i++){
			weightSum+=airlines[i].getWeight();
		}
		return weightSum;
	}

	var capacitySum = 0;

	this.totalCapacity = function(){
		for(var i=0; i < airlines.length; i++){
			capacitySum+=airlines[i].getCapacity();
		}
		return capacitySum;
	}
	this.sortByRange = function(){
		airlines.sort(compareRange);
		for(var i = 0; i < airlines.length; i++) {
			console.log(airlines[i].getName());
		}
		return airlines;

	}
	this.filterAirplanes = function(){
		var filteredAirplanes = airlines.filter(function(airplane){
			return airplane.range>12000 && airplane.capacity>300;
		});
		for(var i = 0; i < airlines.length; i++) {
			console.log(airlines[i].getName());
		}
		return filteredAirplanes;
	}
}

	function compareRange(A, B) {
		return A.getRange() - B.getRange();
	}
	module.exports = airline;