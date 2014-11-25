var sprites = {
        
    ccurvo: { sx: 0, sy: 0, w: 64, h: 64, ni:"campo", nc:"campo", nd :"campo", ci:"camino", cc:"camino", cd:"campo", 
        si:"campo", sc:"camino", sd:"campo", escudo:false}, //camino de izquierda a abajo
        
     Cec: { sx: 330, sy: 459, w: 64, h: 64, ni:"ciudad", nc:"ciudad", nd: "ciudad", ci:"campo", cc:"ciudad", cd:"campo", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: false}, //ciudad centro campo a los lados 
        
     CDiagonal: { sx: 264, sy: 459, w: 64, h: 64, ni:"ciudad", nc:"campo", nd: "campo", ci:"ciudad", cc:"campo", cd:"campo", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: false}, //Ciudad diagonal con un campo
        
     Cce: { sx: 657, sy: 525, w: 64, h: 64, ni:"ciudad", nc:"ciudad", nd: "ciudad", ci:"camino", cc:"ciudad", cd:"ciudad", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: true}, //Ciudad a la que le lleva un camino(escudo) 
        
     Cc: { sx: 133, sy: 591, w: 64, h: 64, ni:"ciudad", nc:"ciudad", nd: "ciudad", ci:"camino", cc:"campo", cd:"ciudad", 
        si:"campo", sc:"camino", sd:"ciudad", escudo: false}, //Ciudad que tiene un camino pero el camino no entra en ella 
        //Duda en cc "campo"    Hay que hablarlo con IA, conflicto en el juego
 
     ce2C: { sx: 788, sy: 66, w: 64, h: 64, ni:"ciudad", nc:"campo", nd: "ciudad", ci:"ciudad", cc:"campo", cd:"ciudad", 
        si:"ciudad", sc:"campo", sd:"ciudad", escudo: false}, //Campo entre dos ciudades
        
     Ccampo: { sx: 460, sy: 590, w: 64, h: 64, ni:"ciudad", nc:"ciudad", nd: "ciudad", ci:"ciudad", cc:"ciudad", cd:"campo", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: false}, //Ciudad que tiene casas y un campo a un lado sin camino
        
     Cladoccentro: { sx: 198, sy: 458, w: 64, h: 64, ni:"campo", nc:"camino", nd: "ciudad", ci:"campo", cc:"camino", cd:"ciudad", 
        si:"campo", sc:"camino", sd:"ciudad", escudo: false}, //Ciudad a un lado y en el centro un camino atravesando
        
     Cccurvo: { sx: 918, sy: 264, w: 64, h: 64, ni:"campo", nc:"campo", nd: "ciudad", ci:"camino", cc:"camino", cd:"ciudad", 
        si:"campo", sc:"camino", sd:"ciudad", escudo: false}, //Ciudad a un lado y camino curvo sin atravesar
        
     Ccamporesto: { sx: 65, sy: 195, w: 64, h: 64, ni:"campo", nc:"campo", nd: "ciudad", ci:"campo", cc:"campo", cd:"ciudad", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: false}, //Ciudad a un lado y campo el resto
        
     Cady: { sx:722 , sy: 525, w: 64, h: 64, ni:"ciudad", nc:"ciudad", nd: "ciudad", ci:"ciudad", cc:"campo", cd:"campo", 
        si:"ciudad", sc:"campo", sd:"campo", escudo: false}, //Ciudades adayacentes resto campo
        
     crucecC: { sx:722 , sy: 394, w: 64, h: 64, ni:"campo", nc:"camino", nd: "campo", ci:"camino", cc:"cruce", cd:"camino", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: false}, //Cruce 3 caminos mas ciudad
        
     Ccarribadcha: { sx:0 , sy: 64, w: 64, h: 64, ni:"campo", nc:"camino", nd: "campo", ci:"campo", cc:"camino", cd:"camino", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: false}, //Mirando desde ciudad camino hacia arriba y derecha
     
     m: { sx:526 , sy: 458, w: 64, h: 64, ni:"campo", nc:"campo", nd: "campo", ci:"campo", cc:"monasterio", cd:"campo", 
        si:"campo", sc:"campo", sd:"campo", escudo: false}, //Monasterio
         
     C: { sx:723 , sy: 65, w: 64, h: 64, ni:"ciudad", nc:"ciudad", nd: "ciudad", ci:"ciudad", cc:"ciudad", cd:"ciudad", 
        si:"ciudad", sc:"ciudad", sd:"ciudad", escudo: true}, //Todo ciudad con escudo
        
     cruce4c: { sx:590 , sy: 590, w: 64, h: 64, ni:"campo", nc:"camino", nd: "campo", ci:"camino", cc:"cruce", cd:"camino", 
        si:"campo", sc:"camino", sd:"campo", escudo: false}, //Cruce de 4 caminos con casas en medio
        
     cruce3c: { sx:786 , sy: 460, w: 64, h: 64, ni:"campo", nc:"camino", nd: "campo", ci:"camino", cc:"cruce", cd:"campo", 
        si:"campo", sc:"camino", sd:"campo", escudo: false}, //Cruce de 3 caminos sin ciudad
        
     mc: { sx:852 , sy: 460, w: 64, h: 64, ni:"campo", nc:"campo", nd: "campo", ci:"campo", cc:"monasterio", cd:"campo", 
        si:"campo", sc:"camino", sd:"campo", escudo: false}, //Monasterio con camino
        
     c: { sx:918 , sy: 394, w: 64, h: 64, ni:"campo", nc:"camino", nd: "campo", ci:"campo", cc:"camino", cd:"campo", 
        si:"campo", sc:"camino", sd:"campo", escudo: false}, //Camino recto    
         
    sn:{ sx:989, sy:6, w:17, h:17}, //Seguidor negro
    sa:{ sx:1018, sy:5, w:17, h:17}, //Seguidor amarillo
    sb:{ sx:1049, sy:4, w:17, h:17}, //Seguidor blanco
    sr:{ sx:1077, sy:4, w:17, h:17}, //Seguidor rojo
    sblue:{ sx:1104, sy:4, w:17, h:17}, //Seguidor azul 
};

var startGame = function() {
    Game.setBoard(0,new TitleScreen("Juego Carcassone", "Pulsa espacio para empezar a jugar",playGame));
    /*                              
    SpriteSheet.draw(Game.ctx,"ccurvo",1*64,1*64);
    SpriteSheet.draw(Game.ctx,"crucecC",1*64,2*64);
    /*
     SpriteSheet.draw(Game.ctx,"Cec",150,50);
     SpriteSheet.draw(Game.ctx,"CDiagonal",250,50);
     SpriteSheet.draw(Game.ctx,"Cce",350,50);
     SpriteSheet.draw(Game.ctx,"Cc",450,50);
     SpriteSheet.draw(Game.ctx,"ce2C",550,50);
     SpriteSheet.draw(Game.ctx,"Ccampo",650,50);
     SpriteSheet.draw(Game.ctx,"Cladoccentro",750,50);
     SpriteSheet.draw(Game.ctx,"Cccurvo",50,150);
     SpriteSheet.draw(Game.ctx,"Ccamporesto",150,150);
     SpriteSheet.draw(Game.ctx,"Cady",250,150);
     SpriteSheet.draw(Game.ctx,"crucecC",350,150);
     SpriteSheet.draw(Game.ctx,"Ccarribadcha",450,150);
     SpriteSheet.draw(Game.ctx,"m",550,150);
     SpriteSheet.draw(Game.ctx,"C",650,150);
     SpriteSheet.draw(Game.ctx,"cruce4c",750,150);
     SpriteSheet.draw(Game.ctx,"cruce3c",50,250);
     SpriteSheet.draw(Game.ctx,"mc",150,250);
     SpriteSheet.draw(Game.ctx,"c",250,250);
     SpriteSheet.draw(Game.ctx,"sn",350,250);
     SpriteSheet.draw(Game.ctx,"sa",450,250);
     SpriteSheet.draw(Game.ctx,"sb",550,250);
     SpriteSheet.draw(Game.ctx,"sr",650,250);
     SpriteSheet.draw(Game.ctx,"sblue",750,250);
    */
}

var playGame = function() {
  Game.setBoard(0,new tablero());
  Game.setBoard(1,new TextoPideFicha("Pulsa enter para pedir ficha ",playFicha));
  Game.setBoard(2,new pieza ("ccurvo", 1*64, 1*64));
}

var playFicha = function () {
  Game.setBoard(3,new pieza ("mc", 11.5*64, 8*64));
}

var pieza = function (nombre, x, y){
  this.step = function(dt) {
        //De momento lo pongo vacio porque solo quiero probar tittle scream
  };
  this.draw = function(ctx) {
	  SpriteSheet.draw(Game.ctx, nombre, x, y);
  };
}

var tablero = function(){
    this.step = function(dt) {
        //De momento lo pongo vacio porque solo quiero probar tittle scream
    };
    this.draw = function(ctx) {
	    for (i=1;i<9;i++){
        for (j=1;j<10;j++){
          Game.ctx.strokeStyle = "#ffffff";
          Game.ctx.strokeRect(j*64,i*64,64,64);
          Game.ctx.fillStyle = "#775C18";
          Game.ctx.fillRect(j*64,i*64,64,64);
        }
      }
    };	
}

$(function() {
    Game.initialize("game",sprites,startGame);
});


