function Ball() {
	let x = Math.floor(width /2)
	let y = Math.floor(height- 60)
	const r = 30
	let speedx = 1
	let speedy = -1
	

	this.show = function() {
		fill('rgb(0, 0, 255)')
		ellipse(x,y,r*2,r*2)
	}

	this.move = function() {
		x += speedx
		y += (speedy)

	}

	
	
	this.collision = function(e){

		let dx = Math.abs(x - e.x- e.w/2)
		let dy = Math.abs(y - e.y- e.h/2)

		if(dx > e.w/2 + r || dy > e.h/2 + r)
			return false 

		if(dx <= e.w/2 || dy <= e.h/2)
			speedx *= -1
			return true 

	}

	this.changeMove = function(){
		speedx = -speedx
		speedy = -speedy

	}

	/*this.colision=function(e){
		if(y <= e.y+e.h/2  && y >= e.y- e.h/2)
			if(x >=e.top && x <= e.bot)
				return true;  			
		return false;
	}

	this.colision = function() {

		if( y-r >= height || y-r <= height){
			y+=sy
		}
		if(x-r >=width || x-r<=width){
			x+=sy
		}
	}*/
	
	
}