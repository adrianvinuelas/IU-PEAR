empezarPartida = function(arrayJug, user_Id) {
   
    console.log("insertado EmpiezaPartida"); 
    console.log("ArrayJUG: " + arrayJug);
    console.log("user_ID: " + user_Id); 
    
    Turno.insert({Comando: "EmpezarPartida",
                  Jugadores: arrayJug,
                  User_id: user_Id,
                  nombrePieza: ""});
}
