
  // ========================================== START CODING BELOW!!



//    // Initialize Firebase
//  var config = {
//     apiKey: “AIzaSyB5v8AH08siTi4mAGFGhS-7-rKaR8XYgOo”,
//     authDomain: “employment-management-7c176.firebaseapp.com”,
//     databaseURL: “https://employment-management-7c176.firebaseio.com”,
//     projectId: “employment-management-7c176",
//     storageBucket: “”,
//     messagingSenderId: “644842313209"
//   };
//   firebase.initializeApp(config);


  // Initialize Firebase
  var config = {
    apiKey: "“AIzaSyB5v8AH08siTi4mAGFGhS-7-rKaR8XYgOo",
    authDomain: "employment-management-7c176.firebaseapp.com",
    databaseURL: "https://employment-management-7c176.firebaseio.com",
    projectId: "employment-management-7c176",
    storageBucket: "",
    messagingSenderId: "644842313209"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var employeeName = "";
  var role = "";
  var startDate = 0;
  var monthlyRate = "";

  // Capture Button Click
  $("#add-user").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    employeeName = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();

    // Code for handling the push
    lastPushed = database.ref().push({
      name: name,
      email: email,
      age: age,
      comment: comment,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

  // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.email);
    console.log(sv.age);
    console.log(sv.comment);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.email);
    $("#age-display").text(sv.age);
    $("#comment-display").text(sv.comment);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
