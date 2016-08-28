window.requestAnimFrame = function(){
return (
    window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(/* function */ callback){
        window.setTimeout(callback, 1000 / 60);
    }
);
}();
function lerpDistance ( aim, cur, ratio ) {
	var delta = cur - aim;
	return aim + delta * ratio;
}
function lerpAngle ( aim, cur, ratio ) {
	var delta = cur - aim;
	if( delta > Math.PI ){
		delta = delta - 2 * Math.PI;
	}else if( delta < -Math.PI ){
		delta = delta + 2 * Math.PI;
	}
	return aim + delta * ratio;
}
function calLength2 ( x1, y1, x2, y2 ) {
	return Math.pow( x1-x2,2) + Math.pow( y1-y2,2);
}

function randomColor () {
	var col = [ 0, 1, 2];
	col[0] = (Math.random()*100 +155).toFixed();
	col[1] = (Math.random()*100 +155).toFixed();
	col[2] = (Math.random()*100 +155).toFixed();
	var num = Math.floor( Math.random()*3 );
	col[num] = 0;
	return "rgb(" + col[0] + "," + col[1] + "," + col[2] + ")";

}