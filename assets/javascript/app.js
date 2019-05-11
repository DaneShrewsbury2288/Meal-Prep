$(document).ready(function () {

    // Your web app's Firebase configuration

    var firebaseConfig = {
        apiKey: "AIzaSyDKrVHt43u2axKy28_3Oy1y1mmC9yj1TPU",
        authDomain: "meal-prep-b23a3.firebaseapp.com",
        databaseURL: "https://meal-prep-b23a3.firebaseio.com",
        projectId: "meal-prep-b23a3",
        storageBucket: "meal-prep-b23a3.appspot.com",
        messagingSenderId: "413133199350",
        appId: "1:413133199350:web:7a9b0fdb10a8cabc"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Create a variable to reference the database.
    var database = firebase.database();


    // ajax call

    var apiID = "aee51471";
    var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
    // var q = on.click on breakfest lunch or dinner dropdown?
    var queryURL = "https://api.edamam.com/search?q=" + q + "&app_id={" + apiID + "}&app_key=${" + apiKey + "}";

    // --------EXAMPLE-------------
    // curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"



        $.ajax({
            url: queryURL,
            method: "GET"
            })
            .then(function (response) {


        });

});