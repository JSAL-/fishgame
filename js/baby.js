var BabyObj = function () {
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
BabyObj.prototype.init = function (){
	this.x = 0.5 * can_w;
	this.y = 0.5 * can_h;
	this.angle = 0;

	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
}
BabyObj.prototype.draw = function () {
	this.x = lerpDistance( mom.x, this.x, 0.985);
	this.y =  lerpDistance( mom.y, this.y, 0.985);
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y; 
	var beta = Math.atan2( deltaY, deltaX ) + Math.PI;
	this.angle = lerpAngle( beta, this.angle, 0.8);
	ctx1.save();
	ctx1.translate( this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage( this.babyTail,-this.babyTail.width * 0.5 +25, -this.babyTail.height * 0.5);
	ctx1.drawImage( this.babyBody,  -this.babyBody.width * 0.5,  -this.babyBody.height * 0.5);
	ctx1.drawImage( this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);
	ctx1.restore();
};