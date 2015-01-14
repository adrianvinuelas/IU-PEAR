//Meteor.subscribe("");

var currentUser = null;
Tracker.autorun(function(){
    console.log("current user: " + currentUser);
    currentUser = Meteor.userId();
    console.log("current user: " + currentUser);
    Session.set ("currentUser", currentUser);
});

var reactiva = null;
Tracker.autorun(function(){

    reactiva = Turno.find();
    console.log(reactiva);    
    reactiva.forEach(function(m){
           
        if(m.Comando === "EmpezarPartida"){
            console.log("1111");
            EmpezarTodo(m.Jugadores, m.User_id);
        }else if(m.Comando === "PedirPieza"){
            if(Meteor.userId() != User_IdIA){
                console.log("2222") ; 
                var piezaNueva = new pieza (m.nombrePieza, 11.5*64, 8*64);
		        board.add(piezaNueva);
		    }
            
        }else if(m.Comando === "ColocarPieza"){
        
        } else if (m.Comando === "ColocarSeguidor") {
            console.log("33333") ; 
            //colocar seguidor 
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
