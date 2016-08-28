function momFruitsCollision () {
	for (var i = fruit.num - 1; i >= 0; i--) {
		if ( fruit.alive[i] && fruit.hasBorn[i] ) {
			var l = calLength2( fruit.x[i], fruit.y[i], mom.x, mom.y );
			if( l < 900){
				fruit.dead(i);
			}
		};
	};
}