$(document).ready(function () {

    $("#breakfast-menu").hide();
    $("#lunch-menu").hide();
    $("#dinner-menu").hide();

    /* Events fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);

    });

    document.addEventListener("drag", function (event) {
        event.preventDefault();
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

            var data = event.dataTransfer.getData("Text");
            console.log("data stored: " + data);

            var cloneDiv = $("#" + data).clone();
            cloneDiv.attr("id", data);
            $("#" + data).after(cloneDiv);
            event.target.appendChild(document.getElementById(data));
            console.log("successful drop")
        }
    });

    $("#breakfast-button").on("click", function () {

        if ($("#breakfast-menu").is(":hidden")) {
            $("#breakfast-menu").show();
        }
        else {
            $("#breakfast-menu").hide();
        };

        $("#lunch-menu").hide();
        $("#dinner-menu").hide();
    });

    $("#lunch-button").on("click", function () {

        if ($("#lunch-menu").is(":hidden")) {
            $("#lunch-menu").show();
        }
        else {
            $("#lunch-menu").hide();
        };

        $("#breakfast-menu").hide();
        $("#dinner-menu").hide();
    });

    $("#dinner-button").on("click", function () {

        $("#breakfast-menu").hide();
        $("#lunch-menu").hide();

        if ($("#dinner-menu").is(":hidden")) {
            $("#dinner-menu").show();
        }
        else {
            $("#dinner-menu").hide();
        };
    });

    $("#calculate").on("click", function () {
            
    });

    $("#clear").on("click", function () {
        $(".droptarget").empty();

    })

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
    $(document).on("click", ".category", function () {

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
                console.log(response);

                for (i = 0; i < response.hits.length; i++) {

                    $("#break-card-img-" + i).append(results.hits[i].recipe.image);
                    $("#break-card-img-" + i).attr("src", results.hits[i].recipe.image);
                    $("#breakfast-food-card-" + i).attr({
                        "calories": results.hits[i].recipe.calories,
                        "protein": results.hits[i].recipe.digest[2].total,
                        "fats": results.hits[i].recipe.digest[0].total,
                        "carbohydrates": results.hits[i].recipe.digest[1].total,
                    })

                    $("#break" + i).empty();
                    $("#break" + i).append(results.hits[i].recipe.label);
                }


            });
    });
});