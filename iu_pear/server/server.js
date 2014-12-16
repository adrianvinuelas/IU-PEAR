
Meteor.publish("turno", function (turno) {
	// publicar el jugador de quien es el turno
	return Players.find({player_id: turno});
});

Meteor.publish("all_players", function () {
	// publicar todos los jugadores
	return Players.find();
});


Meteor.methods ({ 
	
  empezar_partida: function(){ 
  
  },
  
	preguntar_turno: function(){
	
	},

	dame_ficha: function(){
	
	},	

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
	
	if (Players.find().count() == 0) {
		//Los inserto a pelo, plataforma se los tiene que pasar a ia¿?
		Players.insert({color: "red"});
		Players.insert({color: "blue"});
		Players.insert({color: "yellow"});
		Players.insert({color: "black"});
	};
});

