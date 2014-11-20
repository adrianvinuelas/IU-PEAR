

Game = new function() {                                                                  

    // Inicializa el juego
    this.initialize = function(canvasElementId,sprite_data,callback) {
	this.canvas = document.getElementById(canvasElementId)
	this.width = this.canvas.width;
	this.height= this.canvas.height;

	this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
	if(!this.ctx) { return alert("Please upgrade your browser to play"); }
  for (i=1;i<9;i++){
    for (j=1;j<10;j++){
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.strokeRect(j*64,i*64,64,64);
      this.ctx.fillStyle = "#775C18";
      this.ctx.fillRect(j*64,i*64,64,64);
    }
  }
    /*
    // Para dibujar rectangulo marron
    this.ctx.fillStyle = "#775C18";
    this.ctx.fillRect(50,50,850,650);
    */

	SpriteSheet.load (sprite_data,callback);
    };

};




SpriteSheet = new function() {


 this.map = { };


 this.load = function(spriteData,callback) {
    this.map = spriteData;
    this.image = new Image();
    this.image.onload = callback;
    this.image.src = 'sprites.jpg';
 };



 this.draw = function(ctx,sprite,x,y,frame) {
 var s = this.map[sprite];
 if(!frame) frame = 0;
    ctx.drawImage(this.image,
    s.sx + frame * s.w,
    s.sy,
    s.w, s.h,
    Math.floor(x), Math.floor(y),
    s.w, s.h);
    };
}

