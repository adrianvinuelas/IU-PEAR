empezarPartida = function(arrayJug, user_Id) {
   
    
    
    console.log("user_ID: " + user_Id); 
    
    Turno.remove({});
    
    Turno.insert({Comando: "EmpezarPartida",
                  Jugadores: arrayJug,
                  User_id: user_Id,
                  nombrePieza: "",
                  rotacion: false,
                  numRotacion: 0,
		  posx: 0,
		  posy: 0});
                  
    console.log("insertado EmpiezaPartida"); 
}
