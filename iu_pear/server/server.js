Meteor.methods ({ 
	
    //IA nos llama a empezar_partida
    empezar_partida: function(jugadores){ 
        console.log(jugadores);
        accion.insert ("empezar");
        //EmpezarTodo(jugadores);
    },
    
    /*
    preguntar_turno: function(){

    },
    */
    
    dame_ficha: function(){
        array = ["1", false];
    return array;
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

Meteor.startup(function(){
    console.log("Arrancado servidor");
});

