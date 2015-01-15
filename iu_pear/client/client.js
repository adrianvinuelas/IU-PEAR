
var reactiva = null;
Tracker.autorun(function(){

    reactiva = Turno.find();
    //console.log(reactiva);    
    reactiva.forEach(function(m){
           
        if(m.Comando === "EmpezarPartida"){
            console.log("1111");
            EmpezarTodo(m.Jugadores, m.User_id);
        }
        if(Meteor.userId() != User_IdIA){
            if(m.Comando === "PedirPieza"){
                if(!m.rotacion){               
                    console.log("2222") ; 
                    var piezaNueva = new pieza (m.nombrePieza, 11.5*64, 8*64);
                    board.add(piezaNueva);
                }else{
                    rotacionTracker = [m.rotacion, m.numRotacion];
                }
            
            }else if(m.Comando === "ColocarPieza"){
		colocadaTracker = true;
            	xTracker = m.posx;
		yTracker = m.posy;
            } else if (m.Comando === "ColocarSeguidor") {
                console.log("33333") ; 
                //colocar seguidor 
            }
        }
    });
        
});


Meteor.startup(function(){
    console.log("Arrancado Cliente");
    Meteor.subscribe("turnoIU");
});

Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
