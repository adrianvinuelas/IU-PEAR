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
});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});

