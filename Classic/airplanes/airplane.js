var Airplane= function (){
}

Airplane.prototype.name = "no_name";
Airplane.prototype.weight = 0;
Airplane.prototype.capacity = 0;
Airplane.prototype.range = 0;

Airplane.prototype.getName = function(){
	return this.name;
};
Airplane.prototype.getWeight = function(){
	return this.weight;
};
Airplane.prototype.getCapacity = function(){
	return this.capacity;
};
Airplane.prototype.getRange = function(){
	return this.range;
};
module.exports=Airplane;