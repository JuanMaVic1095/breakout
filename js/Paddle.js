function Paddle() {
	//let widht
	this.x = width / 2
	this.y = height - 20
	this.w = 180
	this.h = 20
	let speed = 5
	let radius = 180
	let LEFT = -1
	let RIGHT = 1

	this.draw = function() {
		rectMode(CORNER)
		fill(0, 0, 0)
		rect(this.x, this.y, this.w, this.h)

	}

	this.mover = function(dir){
		if(!this.isOut(dir))
			this.x += speed* dir
	}

	this.isOut = function(dir){
		return(this.x <=0 && dir== -1) ||(this.x + this.w >= width && dir == 1)
	}
}