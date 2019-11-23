var firebaseConfig = {
    apiKey: "AIzaSyCgEL1kMTluWvQHhFZvsk06JhtJMy2dek4",
    authDomain: "profile-ebdd6.firebaseapp.com",
    databaseURL: "https://profile-ebdd6.firebaseio.com",
    projectId: "profile-ebdd6",
    storageBucket: "profile-ebdd6.appspot.com",
    messagingSenderId: "442690875353",
    appId: "1:442690875353:web:a8ccf7ed49e6e1ae0273c8",
    measurementId: "G-N6LP6CR2K1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();
  $("#add-visitor-btn").on("click", function(event) {
      event.preventDefault();

      var visitorName = $("#nameInput").val().trim();
      var visitorEmail = $("#emailInput").val().trim();
      var visitorMessage = $("#messageText").val().trim();
  

  var newVisitor = {
    name: visitorName,
    email: visitorEmail,
    message: visitorMessage
  }

  database.ref().push(newVisitor);

  console.log(newVisitor.name);
  console.log(newVisitor.email);
  console.log(newVisitor.message);

  $("#nameInput").val("");
  $("#emailInput").val("");
  $("#messageText").val("");

});

database.ref().on("child_added", function(childSnapshot){

console.log(childSnapshot.val());

var visitorName = childSnapshot.val().name;
var visitorEmail = childSnapshot.val().email;
var visitorMessage = childSnapshot.val().message;

console.log(visitorName);
console.log(visitorEmail);
console.log(visitorMessage);

})