$(document).ready(function () {

    $("#breakfast-menu").hide();
    $("#lunch-menu").hide();
    $("#dinner-menu").hide();

    /* Events fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);
        // event.dataTransfer.setData("Menu"), event.target.
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
        $("#breakfast-menu").hide();
        if ($("#lunch-menu").is(":hidden")) {
            $("#lunch-menu").show();
        }
        else {
            $("#lunch-menu").hide();
        };
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

                $("#break-card-img-1").append(results.hits[1].recipe.image);
                $("#break-card-img-1").attr("src", results.hits[1].recipe.image);
                $("#breakOne").prepend(results.hits[1].recipe.label);

                $("#break-card-img-2").append(results.hits[2].recipe.image);
                $("#break-card-img-2").attr("src", results.hits[2].recipe.image);
                $("#breakTwo").prepend(results.hits[2].recipe.label);

                $("#break-card-img-3").append(results.hits[3].recipe.image);
                $("#break-card-img-3").attr("src", results.hits[3].recipe.image);
                $("#breakThree").prepend(results.hits[3].recipe.label);
                
                $("#break-card-img-4").append(results.hits[4].recipe.image);
                $("#break-card-img-4").attr("src", results.hits[4].recipe.image);
                $("#breakFour").prepend(results.hits[4].recipe.label);

                $("#break-card-img-5").append(results.hits[5].recipe.image);
                $("#break-card-img-5").attr("src", results.hits[5].recipe.image);
                $("#breakFive").prepend(results.hits[5].recipe.label);

                $("#break-card-img-6").append(results.hits[6].recipe.image);
                $("#break-card-img-6").attr("src", results.hits[6].recipe.image);
                $("#breakSix").prepend(results.hits[6].recipe.label);

                $("#break-card-img-7").append(results.hits[7].recipe.image);
                $("#break-card-img-7").attr("src", results.hits[7].recipe.image);
                $("#breakSeven").prepend(results.hits[7].recipe.label);

                $("#break-card-img-8").append(results.hits[8].recipe.image);
                $("#break-card-img-8").attr("src", results.hits[8].recipe.image);
                $("#breakEight").prepend(results.hits[8].recipe.label);
                
                $("#break-card-img-9").append(results.hits[9].recipe.image);
                $("#break-card-img-9").attr("src", results.hits[9].recipe.image);
                $("#breakNine").prepend(results.hits[9].recipe.label);

                $("#break-card-img-10").append(results.hits[0].recipe.image);
                $("#break-card-img-10").attr("src", results.hits[0].recipe.image);
                $("#breakTen").prepend(results.hits[0].recipe.label);


                console.log(response);


            });
    });
});