var sprites = {

    1: { sx: 198, sy: 458, w: 64, h: 64},   //madre
    
    2: { sx:0 , sy: 64, w: 64, h: 64}, 
    
    3: { sx: 918, sy: 264, w: 64, h: 64}, 
    
    4: { sx:722 , sy: 394, w: 64, h: 64},
    
    S5: { sx: 133, sy: 591, w: 64, h: 64}, 
    
    C5: { sx: 263, sy: 524, w: 64, h: 64},   
    
    S6: { sx: 591, sy: 328, w: 64, h: 64}, 
    
    C6: { sx: 657, sy: 526, w: 64, h: 64},  
    
    7: { sx: 918, sy: 198, w: 64, h: 64}, 
        
    8: { sx:722 , sy: 525, w: 64, h: 64},
    
    9: { sx: 788, sy: 66, w: 64, h: 64}, 
    
    S10: { sx: 264, sy: 459, w: 64, h: 64}, 
    
    C10: { sx: 1, sy: 328, w: 64, h:64},    
    
    S11: { sx: 330, sy: 459, w: 64, h: 64}, 
    
    C11: { sx: 330, sy: 0, w: 64, h: 64}, 
    
    S12: { sx: 460, sy: 590, w: 64, h: 64},
        
    C12: { sx: 657, sy: 328, w: 64, h: 64},
    
    13: { sx:723 , sy: 65, w: 64, h: 64}, // De este tipo de pieza solo hay una con escudo.
    
    14: { sx: 0, sy: 0, w: 64, h: 64}, 
    
    15: { sx:918 , sy: 394, w: 64, h: 64}, 
    
    16: { sx:786 , sy: 460, w: 64, h: 64}, 
    
    17: { sx:590 , sy: 590, w: 64, h: 64}, 
    
    18: { sx:526 , sy: 458, w: 64, h: 64}, 
    
    19: { sx:852 , sy: 460, w: 64, h: 64}, 
        
         
    sn:{ sx:989, sy:6, w:17, h:17}, //Seguidor negro
    sa:{ sx:1018, sy:5, w:17, h:17}, //Seguidor amarillo
    sb:{ sx:1049, sy:4, w:17, h:17}, //Seguidor blanco
    sr:{ sx:1077, sy:4, w:17, h:17}, //Seguidor rojo
    sblue:{ sx:1104, sy:4, w:17, h:17}, //Seguidor azul 
};


var board = new TableroJuego();
var otrapieza = true;
var piezaactual = new PiezaActual();

var startGame = function() {

    Jugador1 = {nombre: "Adri" , color: "sr"};
    Jugador2 = {nombre: "Victor" , color: "sblue"};
    Jugador3 = {nombre: "Alvaro" , color: "sa"};
    Jugador4 = {nombre: "Kevin" , color: "sn"};
    Game.setBoard(0,new cuadricula());
    Game.setBoard(1,new Jugadores());       
    Game.setBoard(5,new AyudaScreen("Pulsa espacio para ayuda"));
    board.add(new PiezaMadre("1", 5*64, 5*64)); //Pieza madre que siempre esta puesta cuando empieza el juego
    Game.setBoard(2,new TextoPideFicha("Pulsa enter para pedir ficha ",playGame));
    board.add(new ScrollTeclas());
    Game.setBoard(3,board);
   
    
}


var playGame = function() {

    if(otrapieza){
	  piezaNew = pedirPieza();
	  board.add(piezaNew);
	  board.add(new ColocarSeguidor());
	  Game.setBoard(2,new TextoPideFicha("Pulsa enter para pedir ficha ",playGame));
    }
  
 }
  
  

function pedirPieza(){ //Hay que llamar a la IA para que nos de la pieza aleatoria, mientras ponemos siempre la misma 
	var piezaNueva = new pieza("2", 11.5*64, 8*64);
	return piezaNueva;
}

var PiezaMadre = function (nombre, x, y){

  this.x = x;
  this.y = y;
  this.w = 64;
  this.h = 64;
  this.nombre = nombre;

 
  this.type = "pieza";

  
  this.step = function(dt) {
  
                  
	
  }
  
  this.draw = function(ctx) {

	  SpriteSheet.draw(Game.ctx, nombre, this.x, this.y,this.giro,this.numgiro,1);
  };	

}

var pieza = function (nombre, x, y){
  this.x = x;
  this.y = y;
  this.w = 64;
  this.h = 64;
  this.nombre = nombre;
  piezaactual.nombre = nombre;
  var colocada = false;
  this.giro = false;
  piezaactual.giro= false;
  this.numgiro = 0;
  piezaactual.ngiro= 0;
  this.type = "pieza";
  this.scroll = false;
  this.primeravez = true;
  this.primer = 0;
  this.step = function(dt) {
  //console.log("colocada = " + colocada);
   if (!colocada){
	   otrapieza = false;
	   game.onmousedown = function(e){
		if(e.which == 1){
		    if (!colocada){//límite(76-644)para la x, (167-674) para la y
			    mX = (e.pageX);
			    mY = (e.pageY);
			    if(mX<76||mX>644 ||mY<167 || mY>674){
				alert('No puedes colocar la pieza ahí!');
			    }else{
				    cX =Math.floor((mX-5)/64);
				    cY = Math.floor((mY-100)/64);
				   
					console.log("x ------>:"  + cX +"mx :" + mX + "my :" + mY + "," + "y ----->: " + cY);
				   
				    x = (cX *64);
				    y = (cY * 64);
					console.log(x + ","+ y ) ; 
				    colocada = true;
				    otrapieza = true;
				//console.log("this.colocada = " + colocada);
			   }
		  }
		     
       }
    }              
	if(Game.keys['giro']){
		
			this.giro = true;
			piezaactual.giro = true;
			this.numgiro++;
			piezaactual.ngiro++;
			if(this.numgiro == 5){
				this.numgiro = 1;
				piezaactual.ngiro = 1;
			}
			console.log("this.numgiro = " +this.numgiro)
			Game.keys['giro'] = false;
	}	
  }
        //De momento lo pongo vacio porque solo quiero probar tittle scream
  };
  this.draw = function(ctx) {
	  if(colocada && !this.scroll){
		//console.log("como esta colocada cambio el this.x");
		this.x = x;
		this.y = y;
		this.primeravez = false;
		this.primer= 1; //si la colocamos ya no es la primeravez que sale a imagen,lo hago para que si es aun la pieza a 
		this.scroll = true;//colocar pues se pueda pintar fuera de la cuadricula, es decir, si this.primer = 0
				//(ver draw de spritesheet engine)
	        alert("Si quieres tener un seguidor pulsa la tecla s.") ; 
	  }
	  if(!this.scroll){//esto es para que si aun la pieza es la que tenemos que colocar al hacer scroll no se mueva
		this.x = x;//si scroll esta a false, la pieza mantiene las coordenadas (11.5*64, 8*64)
		this.y = y;
	  }
	  SpriteSheet.draw(Game.ctx, nombre, this.x, this.y,this.giro,this.numgiro,this.primer);

  };
}


//constructor para inicializar jugadores y pintarlos a un lado....etc
//de momento sin argumentos porque por defecto suponemos los 4 jugadores inicializados al principio
//supongo que luego como argumentos habrá que pasarle los jugadores que nos informen que juagan
var Jugadores = function(){
  this.step = function(dt) {
        //De momento lo pongo vacio porque solo quiero probar tittle scream
  };
  this.draw = function(ctx) {
      ctx.fillStyle = "#FFFFFF";
	  ctx.font = "bold 27px bangers";
	  ctx.fillText("JUGADORES", 10.5*64,1.5*64);
	  ctx.font = "bold 17px bangers";
	  ctx.fillText("JUGADOR 1: ", 10.5*64,2*64);
	  ctx.fillText("JUGADOR 2: ", 10.5*64,3*64);
	  ctx.fillText("JUGADOR 3: ", 10.5*64,4*64);
	  ctx.fillText("JUGADOR 4: ", 10.5*64,5*64);
	  ctx.font = "bold 14px bangers";
	  ctx.fillText(Jugador1.nombre, 10.5*64,2.5*64);
	  SpriteSheet.draw(Game.ctx,Jugador1.color, 12*64, 2.3*64,false,0,0);
	  ctx.fillText(Jugador2.nombre, 10.5*64,3.5*64);
	  SpriteSheet.draw(Game.ctx,Jugador2.color, 12*64, 3.3*64,false,0,0);
	  ctx.fillText(Jugador3.nombre, 10.5*64,4.5*64);
	  SpriteSheet.draw(Game.ctx,Jugador3.color, 12*64, 4.3*64,false,0,0);
	  ctx.fillText(Jugador4.nombre, 10.5*64,5.5*64);
	  SpriteSheet.draw(Game.ctx,Jugador4.color, 12*64, 5.3*64,false,0,0);
	  
  };
}

var cuadricula = function(){
    this.step = function(dt) {
        
    };
    this.draw = function(ctx) {
      //Pantalla que va a aparecer DESPUES de pulsar espacio
      var img1 = new Image();
      var img2 = new Image();
      img1.src = 'background.jpg';
      img2.src = 'menu.jpg';
      Game.ctx.drawImage(img1, 50, 50, 655, 650);
      Game.ctx.drawImage(img2, 655, 50, 245, 650);
	    for (i=1;i<9;i++){
        for (j=1;j<10;j++){
          Game.ctx.strokeStyle = "#ffffff";
          Game.ctx.strokeRect(j*64,i*64,64,64);
        }
      }
    };	
}


var ColocarSeguidor = function() {
   
    pulsado = false ; 
    posi = false;
    
    this.step = function(dt) {
        if(Game.keys['seguidor']) pulsado = true;
        if(pulsado && !Game.keys['seguidor']) {
            pulsado = true;
            board.add(piezaactual);            
        }
        
        
        if(Game.keys['pos2']) posi = true;
        if(posi && !Game.keys['pos2']) {
            posi = true;
            board.remove(piezaactual);  
            pulsado = false;               
        }
        
    }
    
    
    this.draw = function(ctx) {
        
        
    }
}


var ScrollTeclas = function() {

    this.width = 140;
    this.height = 140;
    this.scrollx = 45;
    this.scrolly = 45;

    var izq = false;
    var der = false;
    var arriba = false;
    var abajo = false;


    this.draw = function (ctx) {
        ctx.save();
        for(var y=0; y<=550; y=y+64){
            for(var x=0; x<=600; x=x+64){
                ctx.fillText((this.scrollx+x/64) + ".",7+x,11+y);
                ctx.fillText((this.scrolly+y/64),32+x,11+y);
            };
        };

 ctx.restore();
    }
    
    this.step = function(dt) {
    
        if(!Game.keys['left']) izq = true;
        if(izq && Game.keys['left']) {
            izq = false;
            if (this.scrollx != 0) {
                this.scrollx -= 1;
                this.board.translateScroll(1,0);
            }
        }
        
        if(!Game.keys['right']) der = true;
        if(der && Game.keys['right']) {
            der = false;
            if (this.scrollx != this.width) {
                this.scrollx += 1;
                this.board.translateScroll(-1,0);

            }
        }
        
        if(!Game.keys['up']) arriba = true;
        if(arriba && Game.keys['up']) {
            arriba = false;
            if (this.scrolly != 0) {
                this.scrolly -= 1;
                this.board.translateScroll(0,1);

            }
        }
        
        if(!Game.keys['down']) abajo = true;
        if(abajo && Game.keys['down']) {
            abajo= false;
            if (this.scrolly != this.height) {
                this.scrolly += 1;
                this.board.translateScroll(0,-1);
            }
    
        }
    }

}


$(function() {
    Game.initialize("game",sprites,startGame);
});


