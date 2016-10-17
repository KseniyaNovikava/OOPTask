var Airplane = require('./airplane');
var inherit = require('../inherit');

inherit (Embraer, Airplane);
function Embraer(name, weight, capacity, range){
	this.name = "Embraer " + name;
	this.weight = weight;
	this.capacity = capacity;
	this.range = range;
}
exports.Embraer = Embraer;