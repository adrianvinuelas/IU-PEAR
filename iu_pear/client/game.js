var sprites = {
    ccurvo: { sx: 0, sy: 0, w: 64, h: 64}, //camino de izquierda a abajo
     Cec: { sx: 330, sy: 459, w: 64, h: 64}, //ciudad centro campo a los lados 
     CDiagonal: { sx: 264, sy: 459, w: 64, h: 64}, //Ciudad diagonal con un campo
     Cce: { sx: 657, sy: 525, w: 64, h: 64}, //Ciudad a la que le lleva un camino(escudo) 
     Cc: { sx: 133, sy: 591, w: 64, h: 64}, //Ciudad que tiene un camino pero el camino no le lleva a ella, mirando desde C esta hacia arriba izq
     ce2C: { sx: 788, sy: 66, w: 64, h: 64}, //Campo entre dos ciudades
     Ccampo: { sx: 460, sy: 590, w: 64, h: 64}, //Ciudad que tiene casas y un campo a un lado el cual no 
     Cladoccentro: { sx: 198, sy: 458, w: 64, h: 64}, //Ciudad a un lado y en el centro un camino atravesando
     Cccurvo: { sx: 918, sy: 264, w: 64, h: 64}, //Ciudad a un lado y camino curvo sin atravesar
     Ccamporesto: { sx: 65, sy: 195, w: 64, h: 64}, //Ciudad a un lado y campo el resto
     Cady: { sx:722 , sy: 525, w: 64, h: 64}, //Ciudades adayacentes resto campo
     crucecC: { sx:722 , sy: 394, w: 64, h: 64}, //Cruce 3 caminos mas ciudad
     Ccarribadcha: { sx:0 , sy: 64, w: 64, h: 64}, //Mirando desde ciudad camino hacia arriba y derecha
     m: { sx:526 , sy: 458, w: 64, h: 64}, //Monasterio 
     C: { sx:723 , sy: 65, w: 64, h: 64}, //Todo ciudad con escudo
     cruce4c: { sx:590 , sy: 590, w: 64, h: 64}, //Cruce de 4 caminos con casas en medio
     cruce3c: { sx:786 , sy: 460, w: 64, h: 64}, //Cruce de 3 caminos sin ciudad
     mc: { sx:852 , sy: 460, w: 64, h: 64}, //Monasterio con camino
     c: { sx:918 , sy: 394, w: 64, h: 64} //Camino recto
};

var startGame = function() {
    SpriteSheet.draw(Game.ctx,"ccurvo",50,50);
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
}

$(function() {
    Game.initialize("game",sprites,startGame);
});


