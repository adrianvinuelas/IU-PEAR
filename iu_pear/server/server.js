
Meteor.publish("turno", function (turno) {
	// publicar el jugador de quien es el turno
	return Players.find({player_id: turno});
});

Meteor.publish("all_players", function () {
	// publicar todos los jugadores
	return Players.find();
});


//Meteor.methods que crea la Ia para que la llamemos nosotros. Ahora creamos un dummie tonto.
Meteor.methods({

    DameFicha: function () {
        console.log("Estoy en DameFicha");
        
        var array = ["5", false];
        console.log(array[0]);
        console.log(array[1]);
        return array;	       		            
    }
    
});

Meteor.startup(function(){
	console.log("Arrancado servidor");
	/*
	if (Players.find().count() == 0) {
		//Los inserto a pelo, plataforma se los tiene que pasar a ia¿?
		Players.insert({color: "red"});
		Players.insert({color: "blue"});
		Players.insert({color: "yellow"});
		Players.insert({color: "black"});
	};
	*/
});

