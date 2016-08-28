var FruitObj = function  () {
	this.num = 30;
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.hasBorn = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}
var aneIDs = [];

FruitObj.prototype.init = function  () {
	//去重
	var len = 0;
	var aneID = 0;
	while( len < this.num ){
		aneID = Math.floor(Math.random() * ane.num );
		if( aneIDs.indexOf(aneID) == -1){
			aneIDs.push(aneID);
			len++;			
		}
	}

	for (var i = this.num; i > 0; i--) {
			this.alive[i] = false;
			this.hasBorn[i] = false;
			this.x[i] = 0;
			this.y[i] = 0;
			this.spd[i] = Math.random() * 0.017 + 0.003;//[0.003,0.02)
			this.fruitType[i] = "";//orange,blur
			this.born(i, aneIDs[i]);
	};
	
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";

}
FruitObj.prototype.draw = function  () {
	for (var i = this.num; i > 0; i--) {
		if (this.alive[i] === true){
			if( this.l[i] < 15){
				this.l[i] += this.spd[i] * deltaTime;

			}else{
				this.hasBorn[i] = true;

				this.y[i] -= this.spd[i]*7 * deltaTime;

			}
			if( this.fruitType[i] == "blue" ){
				ctx2.drawImage( this.blue, this.x[i] - this.l[i] * 0.5, this.y[i]- this.l[i] * 0.5, this.l[i], this.l[i] );
			}else{
				ctx2.drawImage( this.orange, this.x[i] - this.l[i] * 0.5, this.y[i]- this.l[i] * 0.5, this.l[i], this.l[i] );
			}
			if( this.y[i] < -this.l[i]*0.5 ){

				this.alive[i] = false;
			}
		}
		
	};
}
FruitObj.prototype.born = function  (i,aneID) {
	
	this.x[i] = ane.x[aneID];
	this.y[i] = can_h - ane.len[aneID];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if( ran < 0.1){
		this.fruitType[i] = "blue";
	}else{
		this.fruitType[i] = "orange";
	}

}
function fruitMonitor () {
	var num = 0;
	for (var i = fruit.num - 1; i >= 0; i--) {
			if( fruit.alive[i] ){
				num++;
			}
			if( num < 15 ){
				sendFruit();
				return;
			}
	};
}
function sendFruit () {
	for (var i = fruit.num - 1; i >= 0; i--) {
		if( !fruit.alive[i]){
			fruit.born( i, aneIDs[i] );
			return;
		}
	}
}
FruitObj.prototype.dead = function  (i) {
	this.alive[i] = false;
	this.hasBorn[i] = false;
}