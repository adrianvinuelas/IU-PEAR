
Game = new function() {                                                                  

  // Inicializa el juego
  this.initialize = function(canvasElementId,sprite_data,callback) {
	  this.canvas = document.getElementById(canvasElementId)
	  this.width = this.canvas.width;
	  this.height= this.canvas.height;
	  this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
	  if(!this.ctx) { return alert("Please upgrade your browser to play"); }
      //Modificamos las propiedades del canvas
      //Pantalla que va a aparecer ANTES de pulsar espacio (En el caso de que se necesite)
      this.setupInput();
    
      this.loop(); 

	    SpriteSheet.load (sprite_data,callback);
    };
    
    
    // Gestión de la entrada (teclas solo espacio de momento para prueba tonta)
    var KEY_CODES = { 32 :'espacio', 39: 'giro', 13: 'pedirficha'};
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

  this.draw = function(ctx,sprite,x,y,girar,numgiro,frame) {
    var s = this.map[sprite];
    //var sw = s.w;
    //var sh = s.h;
    
    if(!frame) frame = 0;
    if(girar){
	    ctx.save();	    
	    ctx.translate(x,y);
	    ctx.translate(s.w/2, s.h/2);
	        
	    if(numgiro == 1){
		    //console.log("entro a rotar 90");		    
		    ctx.rotate(90*Math.PI/180);
		    ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(-s.w/2) , Math.floor(-s.h/2),s.w, s.h);
	    }else if (numgiro == 2){
		    //console.log("entro a rotar 180");
		    ctx.rotate(180*Math.PI/180);
		    ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(-s.w/2) , Math.floor(-s.h/2),s.w, s.h);
	    }else if (numgiro == 3){
		    //console.log("entro a rotar 270");
		    ctx.rotate(270*Math.PI/180);
		    ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(-s.w/2) , Math.floor(-s.h/2),s.w, s.h);
	    }else if(numgiro == 4){
		     ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(-s.w/2) , Math.floor(-s.h/2),s.w, s.h);
	    }
	    ctx.restore();
    }else{	
      ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(x), Math.floor(y), s.w, s.h);
      //ctx.drawImage(this.image, s.sx + frame * s.w, s.sy, s.w, s.h, Math.floor(-s.w/2) , Math.floor(-s.h/2),s.w, s.h);
    }
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
}

TextoPideFicha =  function TextoPideFicha(title,callback) {
  var up = false;
  
  // En cada paso, comprobamos si la tecla ha pasado de no pulsada a pulsada
  this.step = function(dt) {
    if(!Game.keys['pedirficha']) up = true;
    if(up && Game.keys['pedirficha'] && callback) callback();
  };
  
  this.draw = function(ctx) {
    ctx.fillStyle = "#FFFFFF";   
    ctx.font = "bold 12px bangers";
    ctx.fillText(title,10.5*64,7.8*64);
    ctx.fillText("Pulsa flecha derecha para rotar",10.5*64,9.3*64);
  };   
}



// GameBoard implementa un tablero de juego que gestiona la
// interacción entre los elementos del juego sobre el que se disponen
// los elementos del juego (fichas, cartas, naves, proyectiles, etc.)
// La clase GameBoard ofrece la interfaz step(), draw() para que sus
// elementos puedan ser mostrados desde el bucle principal del juego.
// "tablero" o clase abstracta donde vamos a ir metiendo todas las cosas que se vayan añadiendo en el juego, fichas.....

TableroJuego = function() {
    var board = this;
    // Colección de objetos contenidos por este tablero
    this.objects = [];
    // Añade obj a objects
    this.add = function(obj) {
        obj.board=this; // Para que obj pueda referenciar el tablero. al objeto ademas de añadirlo a objects le paso un puntero del objeto al 
                        //tablero
        this.objects.push(obj);
        return obj;
    };
    // Los siguientes 3 métodos gestionan el borrado. Cuando un board
    // está siendo recorrido (en step()) podría eliminarse algún
    // objeto, lo que interferiría en el recorrido. Por ello borrar se
    // hace en dos fases: marcado, y una vez terminado el recorrido,
    // se modifica objects.
    // Marcar un objeto para borrar
    this.remove = function(obj) {
        this.removed.push(obj);
    };
    // Inicializar la lista de objetos pendientes de ser borrados
    this.resetRemoved = function() { this.removed = []; }
    // Elimina de objects los objetos pendientes de ser borrados
    this.finalizeRemoved = function() {
        for(var i=0, len=this.removed.length; i<len;i++) {
            // Buscamos qué índice tiene en objects[] el objeto i de
            // removed[]
            var idx = this.objects.indexOf(this.removed[i]);
            // splice elimina de objects el objeto en la posición idx
            if(idx != -1) this.objects.splice(idx,1);
        }
    }
    // Iterador que aplica el método funcName a todos los
    // objetos de objects
    //Iterate si le llamas por ejemplo con draw, lo que hará es recorrerse todos los objetos que hay en el board(tablero), y llamar al draw de esos objetos para que
    //se vayan pintando todos.
    this.iterate = function(funcName) {
        // Convertimos en un array args (1..)
        var args = Array.prototype.slice.call(arguments,1);
        _(this.objects).forEach(function (obj) {
        obj[funcName].apply(obj,args)
        })
    };
    // Devuelve el primer objeto de objects para el que func es true//Luego lo llamaremos con collide, lo que hara es recorrerse todos los objetos llamando al
    //collide de cada objeto para comprobar si hay colision. Si hay colision te devolvera el objeto.
    this.detect = function(func) {
        var encontrado = _(this.objects).find(function (obj) { return func.call(obj)})
        if (encontrado){
            return encontrado
        }else{
            return false;
        }
    };
    // Cuando Game.loop() llame a step(), hay que llamar al método
    // step() de todos los objetos contenidos en el tablero. Antes se
    // inicializa la lista de objetos pendientes de borrar, y después
    // se borran los que hayan aparecido en dicha lista
    this.step = function(dt) {
        this.resetRemoved();
        this.iterate('step',dt);
        this.finalizeRemoved();
    };
    // Cuando Game.loop() llame a draw(), hay que llamar al método
    // draw() de todos los objetos contenidos en el tablero
    this.draw= function(ctx) {
        this.iterate('draw',ctx);
    };
    // Comprobar si hay intersección entre los rectángulos que
    // circunscriben a los objetos o1 y o2
    this.overlap = function(o1,o2) {
        // return !((o1 encima de o2) || (o1 debajo de o2) ||
        // (o1 a la izda de o2) || (o1 a la dcha de o2)
        return !((o1.y+o1.h-1<o2.y) || (o1.y>o2.y+o2.h-1) ||
        (o1.x+o1.w-1<o2.x) || (o1.x>o2.x+o2.w-1));
    };
    // Encontrar el primer objeto de tipo type que colisiona con obj
    // Si se llama sin type, en contrar el primer objeto de cualquier
    // tipo que colisiona con obj
    this.collide = function(obj,type) {
        return this.detect(function() {
        if(obj != this) {
            var col = (!type || this.type & type) && board.overlap(obj,this)
            return col ? this : false;
        }
        });
    };
};

