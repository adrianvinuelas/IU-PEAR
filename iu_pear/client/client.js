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
        
        reactiva.forEach(function(m){
            console.log(m.EmpezarPartida);
            //console.log(m.Jugadores);
            if(m.EmpezarPartida == "SI"){
                    console.log("1111");
                    EmpezarTodo(m.Jugadores);
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
