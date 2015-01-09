//Meteor.subscribe("");

var currentUser = null;
Tracker.autorun(function(){
    console.log("current user: " + currentUser);
    currentUser = Meteor.userId();
    console.log("current user: " + currentUser);
    Session.set ("currentUser", currentUser);
});

Meteor.startup(function(){
    console.log("Arrancado Cliente");
    //Meteor.call ("empezar_partida", {"adri": 1, "kevin": 2, "alvaro": 3, "victor": 4});  
});
