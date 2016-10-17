require('console.table');

function Sweet(){
	this.name="some sweet";
	this.cost=0;
	this.weight=0;
}
Sweet.prototype.getWeight = function(){
	return this.weight;
};

function Cookie() {
  Sweet.call(this); // вызываем конструктор суперкласса
}

function Chocolate(){
	Sweet.call(this);
}
function Lollipop(){
	Sweet.call(this);
}

Cookie.prototype = Object.create(Sweet.prototype);
Cookie.prototype.constructor=function(name,cost,weight,type){
	this.name = name;
	this.cost = cost;
	this.weight = weight;
	this.type = type;
	return this;
};
Chocolate.prototype = Object.create(Sweet.prototype);
Chocolate.prototype.constructor=function(name,cost,weight){
	this.name = name;
	this.cost = cost;
	this.weight = weight;
	return this;
};

Lollipop.prototype = Object.create(Sweet.prototype);
Lollipop.prototype.constructor=function(name,cost,weight){
	this.name = name;
	this.cost = cost;
	this.weight = weight;
	return this;
};


var oreo = new Cookie();
oreo.constructor("Oreo",3,150,"with filling");

var vasilkovoe= new Cookie();
vasilkovoe.constructor("Vasilkovoe",3,150,"no filling");

var alpengold = new Chocolate();
alpengold.constructor("AlpenGold",2,80);

var ritter = new Chocolate();
ritter.constructor("RitterSport",4,100);

var mintLollipop = new Lollipop();
mintLollipop.constructor("MintLollipop",3,1000);

console.log("\nSweets:");
console.table([oreo,vasilkovoe,alpengold,ritter,mintLollipop]);

function GiftBox(){
	var sweets = [];
	this.addSweet = function (sweet){
		return sweets.push(sweet);
	}
	var weightSum = 0;
	this.totalWeight = function(){
		for(var i=0; i < sweets.length; i++){
			weightSum+=sweets[i].getWeight();
		}
		return weightSum;
	}

}

var giftBox = new GiftBox();
giftBox.addSweet(oreo);
giftBox.addSweet(vasilkovoe);
giftBox.addSweet(alpengold);
giftBox.addSweet(ritter);
giftBox.addSweet(mintLollipop);

console.log("\nTotal weight: "+ giftBox.totalWeight());