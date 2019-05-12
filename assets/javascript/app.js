$(document).ready(function () {

    $("#breakfast-menu").hide();
    $("#lunch-menu").hide();
    $("#dinner-menu").hide();

    /* Events fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);
    });

    document.addEventListener("drag", function (event) {
        console.log("drag")
    });

    /* Events fired on the drop target */
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    document.addEventListener("drop", function (event) {
        event.preventDefault();
        console.log("dropped")
        if (event.target.className == "foodBox droptarget") {
            var cloneDiv = $("#food-card").clone();
            cloneDiv.attr("id", "food-card");
            $("#food-card").after(cloneDiv);
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
            console.log("dropped2")
        }
    });

    $("#breakfast-button").on("click", function() {
        $("#breakfast-menu").show();
        $("#lunch-menu").hide();
        $("#dinner-menu").hide();
    });

    $("#lunch-button").on("click", function() {
        $("#breakfast-menu").hide();
        $("#lunch-menu").show();
        $("#dinner-menu").hide();
    });

    $("#dinner-button").on("click", function() {
        $("#breakfast-menu").hide();
        $("#lunch-menu").hide();
        $("#dinner-menu").show();
    });









    // Your web app's Firebase configuration

    var config = {
        apiKey: "AIzaSyDKrVHt43u2axKy28_3Oy1y1mmC9yj1TPU",
        authDomain: "meal-prep-b23a3.firebaseapp.com",
        databaseURL: "https://meal-prep-b23a3.firebaseio.com",
        projectId: "meal-prep-b23a3",
        storageBucket: "meal-prep-b23a3.appspot.com",
        messagingSenderId: "413133199350",
        appId: "1:413133199350:web:7a9b0fdb10a8cabc"
    };

    // Initialize Firebase
    firebase.initializeApp(config);

    // Create a variable to reference the database.
    // var database = firebase.database();

    // login
    var logInForm = document.querySelector("#user");
    logInForm.addEventListener("submit", function () {
        event.preventDefault();

        // get user info
        var email = $("#user-login").val();
        var password = $("#user-password").val();


        console.log(email);

        // sign up the user
        database.createUserWithEmailAndPassword(email, password)

    });




    //On click of x button, call api for images and nutrient information
    $(document).on("click", "#calculate", function () {

        // For breakfast, hide lunch/dinner. For lunch, hide breakfast/dinner. etc..


        // ajax call
        var apiID = "aee51471";
        var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
        var q = "chicken";
        // var q = on.click on breakfast lunch or dinner dropdown?
        var queryURL = `https://api.edamam.com/search?q=${q}&app_id=${apiID}&app_key=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                var results = response;
                var FoodImageArea = $("<img>");

                FoodImageArea.append(results.hits[1].recipe.image);

                FoodImageArea.attr("src", results.hits[1].recipe.image);

                $("#testdiv").prepend(FoodImageArea);

                console.log(response);


            });
    });
});