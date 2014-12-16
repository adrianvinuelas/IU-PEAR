Players = new Meteor.Collection("players");


if (Meteor.isClient) { 
  Accounts.ui.config({
 passwordSignupFields: 'USERNAME_ONLY'
 })
}

if (Meteor.isServer) {
 Meteor.startup(function () {
 // code to run on server at startup
 });
}
