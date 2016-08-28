var MomObj = function  () {
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();



}
MomObj.prototype.init = function  () {
	this.x = can_w * 0.5;
	this.y = can_h * 0.5;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
MomObj.prototype.draw = function  () {

	this.x = lerpDistance( mouseX, this.x, 0.96);
	this.y =  lerpDistance( mouseY, this.y, 0.96);
	//lerta angel
	var deltaY = mouseY - this.y;
	var deltaX = mouseX - this.x;
	var beta = Math.atan2( deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle( beta , this.angle, 0.6);
	ctx1.save();
	ctx1.translate( this.x, this.y);
	ctx1.rotate( this.angle );
	ctx1.drawImage( this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5 );
	ctx1.drawImage( this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5 );
	ctx1.drawImage( this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5 );
	ctx1.restore();

}