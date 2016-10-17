var prompt = require('prompt');
require('console.table');

var Boeing = require('./airplanes/boeing');
var Airbus = require('./airplanes/airbus');
var Embraer = require('./airplanes/embraer');
var Airline = require('./airline');

var belavia = new Airline();

var boeing7878 = new Boeing.Boeing("787-8 Dreamliner",227,250,13600);
var boeing7879 = new Boeing.Boeing("787-9 Dreamliner",254,330,11910);
var airbus350 = new Airbus.Airbus("A350 XWB",248,440,15200);
var airbus380 = new Airbus.Airbus("A380",296,480,15200);
var embraer = new Embraer.Embraer("E-Jet 170",38,80,3900);

prompt.start();

console.table([boeing7878,boeing7879,airbus380,airbus350,embraer]);

 prompt.get(['boeing7878Count','boeing7879Count','airbus350Count','airbus380Count','embraerCount'], function (err, result) {

 	for(var i = 0; i < result.boeing7878Count; i++){
		belavia.addAirplane(boeing7878);
	}
	for(var i = 0; i < result.boeing7879Count; i++){
		belavia.addAirplane(boeing7879);
	}
	for(var i = 0; i < result.airbus350Count; i++){
		belavia.addAirplane(airbus350);
	}
	for(var i = 0; i < result.airbus380Count; i++){
		belavia.addAirplane(airbus380);
	}
	for(var i = 0; i < result.embraerCount; i++){
		belavia.addAirplane(embraer);
	}

console.log("\nBelavia aviapark:");
console.log(boeing7878.getName()+" - "+ result.boeing7878Count+" airplanes");
console.log(boeing7879.getName()+" - "+ result.boeing7879Count+" airplanes");
console.log(airbus350.getName()+" - "+ result.airbus350Count+" airplanes");
console.log(airbus380.getName()+" - "+ result.airbus380Count+" airplanes");
console.log(embraer.getName()+" - "+ result.embraerCount+" airplanes");

console.log("\nTotal capacity: "+ belavia.totalWeight());
console.log("Total weight: "+ belavia.totalCapacity());

console.log("\nBelavia aviapark sorted by range:");
belavia.sortByRange();
console.log("\nBelavia filtered aviapark:");
belavia.filterAirplanes();
});



