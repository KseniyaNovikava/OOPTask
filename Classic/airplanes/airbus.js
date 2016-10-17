var Airplane = require('./airplane');
var inherit = require('../inherit');

inherit (Airbus, Airplane);
function Airbus(name, weight, capacity, range){
	this.name = "Airbus " + name;
	this.weight = weight;
	this.capacity = capacity;
	this.range = range;
}
exports.Airbus = Airbus;