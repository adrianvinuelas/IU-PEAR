/* Jueves 20/11/2014

He añadido desde donde lo dejamos juntos el tittle screen, segun lo dejamos en la url aparecia el tablero y dos fichas
colocadas como prueba. Con lo que he añadido lo que pasa es: primero aparece un titlle screen con el numbre del juego 
y que dice que pulses espacio para comenzar y tal, al pulsar espacio aparece el tablero con las dos piezas puestas de
prueba y un espacio a la derecha para los jugadores y tal, eso ya lo veremos si lo cambiamos.
He sacado el bucle del tablero de donde lo teniamos a una variable y he añadido en el objeto Game bastantes cosas, bucle loop
y lo de la tecla espacio, pero es facil*/



Game = new function() {                                                                  

    // Inicializa el juego
    this.initialize = function(canvasElementId,sprite_data,callback) {
	this.canvas = document.getElementById(canvasElementId)
	this.width = this.canvas.width;
	this.height= this.canvas.height;

	this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
	if(!this.ctx) { return alert("Please upgrade your browser to play"); }

    
    // Para dibujar rectangulo marron
    this.ctx.fillStyle = "#775C18";
    this.ctx.fillRect(50,50,850,650);
   
    this.setupInput();
    
    this.loop(); 

	SpriteSheet.load (sprite_data,callback);
    };
    
    
    // Gestión de la entrada (teclas solo espacio de momento para prueba tonta)
    var KEY_CODES = { 32 :'espacio' };
    this.keys = {};

    this.setupInput = function() {
	$(window).keydown(function(event){
	    if (KEY_CODES[event.which]) {
		Game.keys[KEY_CODES[event.which]] = true;
		return false;
	    }
	});
	
	$(window).keyup(function(event){
	    if (KEY_CODES[event.which]) {
		Game.keys[KEY_CODES[event.which]] = false;
		return false;
	    }
	});
	
    }
    
    
    //Añado aqui el bucle del juego al principio tal cual copiado del alien invasion para probar el tittle screen.
    // Bucle del juego
    var boards = [];

    this.loop = function() { 
	// segundos transcurridos
	var dt = 30 / 1000;

	// Para cada board, de 0 en adelante, se 
	// llama a su método step() y luego a draw()
	for(var i=0,len = boards.length;i<len;i++) {
	    if(boards[i]) { 
		boards[i].step(dt);
		boards[i].draw(Game.ctx);
	    }
	}

	// Ejecutar dentro de 30 ms
	setTimeout(Game.loop,30);
    };
    
    // Para cambiar el panel activo en el juego.
    // Son capas: se dibujan de menor num a mayor
    // Cada capa tiene que tener en su interfaz step() y draw()
    this.setBoard = function(num,board) { boards[num] = board; };

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


TitleScreen = function TitleScreen(title,subtitle,callback) {
    
    var up = false;

    
    // En cada paso, comprobamos si la tecla ha pasado de no pulsada a
    // pulsada. 
    this.step = function(dt) {
	if(!Game.keys['espacio']) up = true;
	if(up && Game.keys['espacio'] && callback) callback();
    };


    
    this.draw = function(ctx) {
	ctx.fillStyle = "#FFFFFF";
	

	ctx.font = "bold 40px bangers";
	ctx.fillText(title,Game.width/6,Game.height/2);

	ctx.font = "bold 20px bangers";
	ctx.fillText(subtitle,Game.width/6,Game.height/2 + 40);
    };
};

