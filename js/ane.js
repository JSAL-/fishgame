var AneObj = function  () {
	this.x = []; //ane 位置
	this.len = []; // ane 长度
	this.num = 50;
}
// aneObj.prototype.num = 50;
AneObj.prototype.init = function  () {
	for (var i = this.num ; i > 0; i--) {
			this.x[i] = i * 16 + Math.random() * 20;
			this.len[i] = 200 + Math.random() * 50;
	};
};
AneObj.prototype.draw = function  () {
	ctx2.save();
	ctx2.globalAlpha = 0.6 ;
	ctx2.strokeStyle = "#3b154e";
	ctx2.lineCap = "round";
	ctx2.lineWidth = 20;
	for (var i = this.num; i > 0; i--) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i], can_h);
		ctx2.lineTo(this.x[i], can_h-this.len[i]);
		ctx2.stroke();
	};
	ctx2.restore();
};
