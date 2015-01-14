Meteor.methods ({ 
	
    
    
    dame_ficha: function(){
        objetoFicha = {
            tipo: 16,
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
        return false;
    },

});

        Meteor.publish("turnoIU");                //solo lo toca IU
        array = [{nombre : "Kevin", puntos: 0, seguidores: 7}];
        user_Id = "vRiFJ5G2mGzAywQSb";
         
        empezarPartida(array, user_Id);

Meteor.startup(function(){
    console.log("Arrancado servidor");
});

