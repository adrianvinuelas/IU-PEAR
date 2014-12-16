//Meteor.subscribe("");

Tracker.autorun(function(){
	var turno = Session.get("turno");
	//Meteor.subscribe("all_players");
});

Tracker.autorun(function(){
	currentUser = Meteor.userId();
});

Meteor.startup(function(){
	console.log("Arrancado Cliente");
});

