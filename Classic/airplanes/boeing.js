var Airplane = require('./airplane');
var inherit = require('../inherit');

inherit(Boeing, Airplane);
 function Boeing(name, weight, capacity, range){
	this.name = "Boeing " + name;
	this.weight = weight;

	this.capacity = capacity;
	this.range = range;
}

exports.Boeing = Boeing;