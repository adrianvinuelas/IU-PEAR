Meteor.methods ({ 
	
    
    
    dame_ficha: function(){
        objetoFicha = {
            tipo: 11,
            escudo: false
        }
        
        return objetoFicha;
    },	

    colocar_ficha: function(coordenadas){
        console.log("numero giro = " + coordenadas[0]);
        console.log("x = " +coordenadas[1]);
        console.log("y = " +coordenadas[2]);
        return true;
    },
    
    

    colocar_seguidor: function(posicion){
        console.log("posicion: " + posicion);
	array = [{nombre : "Kevin", puntos: 10, seguidores: 6},{nombre : "adri", puntos: 0, seguidores: 7}];
	arraydummy = [true, array, "vGT5dXZp6ra8tXoZa"];
        return arraydummy;
    },

});

    Meteor.publish("turnoIU");                //solo lo toca IU
    array = [{nombre : "Kevin", puntos: 0, seguidores: 7},{nombre : "adri", puntos: 0, seguidores: 7}];
    user_Id = "fSgjGKvfxdYcjfw3R";
    //user_Id ="Y6hGfd6uL8Syc9sM4"    

Meteor.startup(function(){
    console.log("Arrancado servidor");        
    empezarPartida(array, user_Id);
    console.log("Llamamos a EmpezarPartida");
});

