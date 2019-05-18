$(document).ready(function () {

    // Hide the meal menus at the beginning
    $("#breakfast-menu").hide();
    $("#lunch-menu").hide();
    $("#dinner-menu").hide();

    /* Events fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);

    });

    document.addEventListener("drag", function (event) {
        event.preventDefault();

    });

    /* Events fired on the drop target */
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    // Events fired on the actual drop event
    document.addEventListener("drop", function (event) {
        event.preventDefault();

        if (event.target.className == "foodBox droptarget") {

            var data = event.dataTransfer.getData("Text");
            console.log("data stored: " + data);

            // var nodeCopy = document.getElementById(data).cloneNode(true);
            // nodeCopy.id = "newId"; 
            // event.target.appendChild(nodeCopy);

            var cloneDiv = $("#" + data).clone();
            cloneDiv.attr("id", data);
            $("#" + data).after(cloneDiv);

            event.target.appendChild(document.getElementById(data));
            console.log("successful drop")

            calculate();
        }
    });

    // Reveal the breakfast menu when clicked
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

    // Reveal the lunch button when clicked
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

    // Reveal the dinner button when clicked
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

    $("#clear").on("click", function () {
        $(".droptarget").empty();
    })



    function calculate() {

        // Calculate Sunday Calories / Nutrients 

        var sundayBreakfastCalories = $("#sunday-breakfast").children().attr("calories");
        var sundayLunchCalories = $("#sunday-lunch").children().attr("calories");
        var sundayDinnerCalories = $("#sunday-dinner").children().attr("calories");

        var sundayCalories = Math.round((+sundayBreakfastCalories) + (+sundayLunchCalories) + (+sundayDinnerCalories));

        var sundayBreakfastProtein = $("#sunday-breakfast").children().attr("protein");
        var sundayLunchProtein = $("#sunday-lunch").children().attr("protein");
        var sundayDinnerProtein = $("#sunday-dinner").children().attr("protein");

        var sundayProtein = Math.round((+sundayBreakfastProtein) + (+sundayLunchProtein) + (+sundayDinnerProtein));

        var sundayBreakfastCarbs = $("#sunday-breakfast").children().attr("carbohydrates");
        var sundayLunchCarbs = $("#sunday-lunch").children().attr("carbohydrates");
        var sundayDinnerCarbs = $("#sunday-dinner").children().attr("carbohydrates");

        var sundayCarbs = Math.round((+sundayBreakfastCarbs) + (+sundayLunchCarbs) + (+sundayDinnerCarbs));

        var sundayBreakfastFats = $("#sunday-breakfast").children().attr("fats");
        var sundayLunchFats = $("#sunday-lunch").children().attr("fats");
        var sundayDinnerFats = $("#sunday-dinner").children().attr("fats");

        var sundayFats = Math.round((+sundayBreakfastFats) + (+sundayLunchFats) + (+sundayDinnerFats));

        $("#sunday-stats").empty().append("Calories: " + sundayCalories + "<br>");
        $("#sunday-stats").append("Protein: " + sundayProtein + "g" + "<br>");
        $("#sunday-stats").append("Carbs: " + sundayCarbs + "g" + "<br>");
        $("#sunday-stats").append("Fats: " + sundayFats + "g" + "<br>");


        // Calculate Monday Calories / Nutrients

        var mondayBreakfastCalories = $("#monday-breakfast").children().attr("calories");
        var mondayLunchCalories = $("#monday-lunch").children().attr("calories");
        var mondayDinnerCalories = $("#monday-dinner").children().attr("calories");

        var mondayCalories = Math.round((+mondayBreakfastCalories) + (+mondayLunchCalories) + (+mondayDinnerCalories));

        var mondayBreakfastProtein = $("#monday-breakfast").children().attr("protein");
        var mondayLunchProtein = $("#monday-lunch").children().attr("protein");
        var mondayDinnerProtein = $("#monday-dinner").children().attr("protein");

        var mondayProtein = Math.round((+mondayBreakfastProtein) + (+mondayLunchProtein) + (+mondayDinnerProtein));

        var mondayBreakfastCarbs = $("#monday-breakfast").children().attr("carbohydrates");
        var mondayLunchCarbs = $("#monday-lunch").children().attr("carbohydrates");
        var mondayDinnerCarbs = $("#monday-dinner").children().attr("carbohydrates");

        var mondayCarbs = Math.round((+mondayBreakfastCarbs) + (+mondayLunchCarbs) + (+mondayDinnerCarbs));

        var mondayBreakfastFats = $("#monday-breakfast").children().attr("fats");
        var mondayLunchFats = $("#monday-lunch").children().attr("fats");
        var mondayDinnerFats = $("#monday-dinner").children().attr("fats");

        var mondayFats = Math.round((+mondayBreakfastFats) + (+mondayLunchFats) + (+mondayDinnerFats));

        $("#monday-stats").empty().append("Calories: " + mondayCalories + "<br>");
        $("#monday-stats").append("Protein: " + mondayProtein + "g" + "<br>");
        $("#monday-stats").append("Carbs: " + mondayCarbs + "g" + "<br>");
        $("#monday-stats").append("Fats: " + mondayFats + "g" + "<br>");

        // Calculate Tuesday Calories / Nutrients 

        var tuesdayBreakfastCalories = $("#tuesday-breakfast").children().attr("calories");
        var tuesdayLunchCalories = $("#tuesday-lunch").children().attr("calories");
        var tuesdayDinnerCalories = $("#tuesday-dinner").children().attr("calories");

        var tuesdayCalories = Math.round((+tuesdayBreakfastCalories) + (+tuesdayLunchCalories) + (+tuesdayDinnerCalories));


        var tuesdayBreakfastProtein = $("#tuesday-breakfast").children().attr("protein");
        var tuesdayLunchProtein = $("#tuesday-lunch").children().attr("protein");
        var tuesdayDinnerProtein = $("#tuesday-dinner").children().attr("protein");

        var tuesdayProtein = Math.round((+tuesdayBreakfastProtein) + (+tuesdayLunchProtein) + (+tuesdayDinnerProtein));


        var tuesdayBreakfastCarbs = $("#tuesday-breakfast").children().attr("carbohydrates");
        var tuesdayLunchCarbs = $("#tuesday-lunch").children().attr("carbohydrates");
        var tuesdayDinnerCarbs = $("#tuesday-dinner").children().attr("carbohydrates");

        var tuesdayCarbs = Math.round((+tuesdayBreakfastCarbs) + (+tuesdayLunchCarbs) + (+tuesdayDinnerCarbs));


        var tuesdayBreakfastFats = $("#tuesday-breakfast").children().attr("fats");
        var tuesdayLunchFats = $("#tuesday-lunch").children().attr("fats");
        var tuesdayDinnerFats = $("#tuesday-dinner").children().attr("fats");

        var tuesdayFats = Math.round((+tuesdayBreakfastFats) + (+tuesdayLunchFats) + (+tuesdayDinnerFats));


        $("#tuesday-stats").empty().append("Calories: " + tuesdayCalories + "<br>");
        $("#tuesday-stats").append("Protein: " + tuesdayProtein + "g" + "<br>");
        $("#tuesday-stats").append("Carbs: " + tuesdayCarbs + "g" + "<br>");
        $("#tuesday-stats").append("Fats: " + tuesdayFats + "g" + "<br>");

        // Calculate Wednesday Calories / Nutrients 

        var wednesdayBreakfastCalories = $("#wednesday-breakfast").children().attr("calories");
        var wednesdayLunchCalories = $("#wednesday-lunch").children().attr("calories");
        var wednesdayDinnerCalories = $("#wednesday-dinner").children().attr("calories");

        var wednesdayCalories = Math.round((+wednesdayBreakfastCalories) + (+wednesdayLunchCalories) + (+wednesdayDinnerCalories));

        var wednesdayBreakfastProtein = $("#wednesday-breakfast").children().attr("protein");
        var wednesdayLunchProtein = $("#wednesday-lunch").children().attr("protein");
        var wednesdayDinnerProtein = $("#wednesday-dinner").children().attr("protein");

        var wednesdayProtein = Math.round((+wednesdayBreakfastProtein) + (+wednesdayLunchProtein) + (+wednesdayDinnerProtein));

        var wednesdayBreakfastCarbs = $("#wednesday-breakfast").children().attr("carbohydrates");
        var wednesdayLunchCarbs = $("#wednesday-lunch").children().attr("carbohydrates");
        var wednesdayDinnerCarbs = $("#wednesday-dinner").children().attr("carbohydrates");

        var wednesdayCarbs = Math.round((+wednesdayBreakfastCarbs) + (+wednesdayLunchCarbs) + (+wednesdayDinnerCarbs));

        var wednesdayBreakfastFats = $("#wednesday-breakfast").children().attr("fats");
        var wednesdayLunchFats = $("#wednesday-lunch").children().attr("fats");
        var wednesdayDinnerFats = $("#wednesday-dinner").children().attr("fats");

        var wednesdayFats = Math.round((+wednesdayBreakfastFats) + (+wednesdayLunchFats) + (+wednesdayDinnerFats));

        $("#wednesday-stats").empty().append("Calories: " + wednesdayCalories + "<br>");
        $("#wednesday-stats").append("Protein: " + wednesdayProtein + "g" + "<br>");
        $("#wednesday-stats").append("Carbs: " + wednesdayCarbs + "g" + "<br>");
        $("#wednesday-stats").append("Fats: " + wednesdayFats + "g" + "<br>");

        // Calculate Thursday Calories / Nutrients 

        var thursdayBreakfastCalories = $("#thursday-breakfast").children().attr("calories");
        var thursdayLunchCalories = $("#thursday-lunch").children().attr("calories");
        var thursdayDinnerCalories = $("#thursday-dinner").children().attr("calories");

        var thursdayCalories = Math.round((+thursdayBreakfastCalories) + (+thursdayLunchCalories) + (+thursdayDinnerCalories));

        var thursdayBreakfastProtein = $("#thursday-breakfast").children().attr("protein");
        var thursdayLunchProtein = $("#thursday-lunch").children().attr("protein");
        var thursdayDinnerProtein = $("#thursday-dinner").children().attr("protein");

        var thursdayProtein = Math.round((+thursdayBreakfastProtein) + (+thursdayLunchProtein) + (+thursdayDinnerProtein));

        var thursdayBreakfastCarbs = $("#thursday-breakfast").children().attr("carbohydrates");
        var thursdayLunchCarbs = $("#thursday-lunch").children().attr("carbohydrates");
        var thursdayDinnerCarbs = $("#thursday-dinner").children().attr("carbohydrates");

        var thursdayCarbs = Math.round((+thursdayBreakfastCarbs) + (+thursdayLunchCarbs) + (+thursdayDinnerCarbs));

        var thursdayBreakfastFats = $("#thursday-breakfast").children().attr("fats");
        var thursdayLunchFats = $("#thursday-lunch").children().attr("fats");
        var thursdayDinnerFats = $("#thursday-dinner").children().attr("fats");

        var thursdayFats = Math.round((+thursdayBreakfastFats) + (+thursdayLunchFats) + (+thursdayDinnerFats));

        $("#thursday-stats").empty().append("Calories: " + thursdayCalories + "<br>");
        $("#thursday-stats").append("Protein: " + thursdayProtein + "g" + "<br>");
        $("#thursday-stats").append("Carbs: " + thursdayCarbs + "g" + "<br>");
        $("#thursday-stats").append("Fats: " + thursdayFats + "g" + "<br>");

        // Calculate Friday Calories / Nutrients 

        var fridayBreakfastCalories = $("#friday-breakfast").children().attr("calories");
        var fridayLunchCalories = $("#friday-lunch").children().attr("calories");
        var fridayDinnerCalories = $("#friday-dinner").children().attr("calories");

        var fridayCalories = Math.round((+fridayBreakfastCalories) + (+fridayLunchCalories) + (+fridayDinnerCalories));

        var fridayBreakfastProtein = $("#friday-breakfast").children().attr("protein");
        var fridayLunchProtein = $("#friday-lunch").children().attr("protein");
        var fridayDinnerProtein = $("#friday-dinner").children().attr("protein");

        var fridayProtein = Math.round((+fridayBreakfastProtein) + (+fridayLunchProtein) + (+fridayDinnerProtein));

        var fridayBreakfastCarbs = $("#friday-breakfast").children().attr("carbohydrates");
        var fridayLunchCarbs = $("#friday-lunch").children().attr("carbohydrates");
        var fridayDinnerCarbs = $("#friday-dinner").children().attr("carbohydrates");

        var fridayCarbs = Math.round((+fridayBreakfastCarbs) + (+fridayLunchCarbs) + (+fridayDinnerCarbs));

        var fridayBreakfastFats = $("#friday-breakfast").children().attr("fats");
        var fridayLunchFats = $("#friday-lunch").children().attr("fats");
        var fridayDinnerFats = $("#friday-dinner").children().attr("fats");

        var fridayFats = Math.round((+fridayBreakfastFats) + (+fridayLunchFats) + (+fridayDinnerFats));

        $("#friday-stats").empty().append("Calories: " + fridayCalories + "<br>");
        $("#friday-stats").append("Protein: " + fridayProtein + "g" + "<br>");
        $("#friday-stats").append("Carbs: " + fridayCarbs + "g" + "<br>");
        $("#friday-stats").append("Fats: " + fridayFats + "g" + "<br>");

        // Calculate Saturday Calories / Nutrients 

        var saturdayBreakfastCalories = $("#saturday-breakfast").children().attr("calories");
        var saturdayLunchCalories = $("#saturday-lunch").children().attr("calories");
        var saturdayDinnerCalories = $("#saturday-dinner").children().attr("calories");

        var saturdayCalories = Math.round((+saturdayBreakfastCalories) + (+saturdayLunchCalories) + (+saturdayDinnerCalories));

        var saturdayBreakfastProtein = $("#saturday-breakfast").children().attr("protein");
        var saturdayLunchProtein = $("#saturday-lunch").children().attr("protein");
        var saturdayDinnerProtein = $("#saturday-dinner").children().attr("protein");

        var saturdayProtein = Math.round((+saturdayBreakfastProtein) + (+saturdayLunchProtein) + (+saturdayDinnerProtein));

        var saturdayBreakfastCarbs = $("#saturday-breakfast").children().attr("carbohydrates");
        var saturdayLunchCarbs = $("#saturday-lunch").children().attr("carbohydrates");
        var saturdayDinnerCarbs = $("#saturday-dinner").children().attr("carbohydrates");

        var saturdayCarbs = Math.round((+saturdayBreakfastCarbs) + (+saturdayLunchCarbs) + (+saturdayDinnerCarbs));

        var saturdayBreakfastFats = $("#saturday-breakfast").children().attr("fats");
        var saturdayLunchFats = $("#saturday-lunch").children().attr("fats");
        var saturdayDinnerFats = $("#saturday-dinner").children().attr("fats");

        var saturdayFats = Math.round((+saturdayBreakfastFats) + (+saturdayLunchFats) + (+saturdayDinnerFats));

        $("#saturday-stats").empty().append("Calories: " + saturdayCalories + "<br>");
        $("#saturday-stats").append("Protein: " + saturdayProtein + "g" + "<br>");
        $("#saturday-stats").append("Carbs: " + saturdayCarbs + "g" + "<br>");
        $("#saturday-stats").append("Fats: " + saturdayFats + "g" + "<br>");

    };

    function firebaseMeals() {

        var sundayBreakfast = $("#sunday-breakfast").html();
        var sundayLunch = $("#sunday-lunch").html();
        var sundayDinner = $("#sunday-dinner").html();

        var mondayBreakfast = $("#monday-breakfast").html();
        var mondayLunch = $("#monday-lunch").html();
        var mondayDinner = $("#monday-dinner").html();

        var tuesdayBreakfast = $("#tuesday-breakfast").html();
        var tuesdayLunch = $("#tuesday-lunch").html();
        var tuesdayDinner = $("#tuesday-dinner").html();

        var wednesdayBreakfast = $("#wednesday-breakfast").html();
        var wednesdayLunch = $("#wednesday-lunch").html();
        var wednesdayDinner = $("#wednesday-dinner").html();

        var thursdayBreakfast = $("#thursday-breakfast").html();
        var thursdayLunch = $("#thursday-lunch").html();
        var thursdayDinner = $("#thursday-dinner").html();

        var fridayBreakfast = $("#friday-breakfast").html();
        var fridayLunch = $("#friday-lunch").html();
        var fridayDinner = $("#friday-dinner").html();

        var saturdayBreakfast = $("#saturday-breakfast").html();
        var saturdayLunch = $("#saturday-lunch").html();
        var saturdayDinner = $("#saturday-dinner").html();



        database.ref($("#login").val().trim()).set({


            sundayBreakfast: sundayBreakfast,
            sundayLunch: sundayLunch,
            sundayDinner: sundayDinner,

            mondayBreakfast: mondayBreakfast,
            mondayLunch: mondayLunch,
            mondayDinner: mondayDinner,

            tuesdayBreakfast: tuesdayBreakfast,
            tuesdayLunch: tuesdayLunch,
            tuesdayDinner: tuesdayDinner,

            wednesdayBreakfast: wednesdayBreakfast,
            wednesdayLunch: wednesdayLunch,
            wednesdayDinner: wednesdayDinner,

            thursdayBreakfast: thursdayBreakfast,
            thursdayLunch: thursdayLunch,
            thursdayDinner: thursdayDinner,

            fridayBreakfast: fridayBreakfast,
            fridayLunch: fridayLunch,
            fridayDinner: fridayDinner,

            saturdayBreakfast: saturdayBreakfast,
            saturdayLunch: saturdayLunch,
            saturdayDinner: saturdayDinner,

        });
    };

    
    $("#add-user").on("click", function() {
        var user = $("#login").val().trim();
        event.preventDefault();
        console.log(user);
        console.log(database.ref(user).key);
        if (user === database.ref(user).key) {

            database.ref(user).on("value", function(snapshot) {

                console.log(snapshot.val());
        
                $("#sunday-breakfast").html(snapshot.val().sundayBreakfast);
                $("#sunday-lunch").html(snapshot.val().sundayLunch);
                $("#sunday-dinner").html(snapshot.val().sundayDinner);
        
                $("#monday-breakfast").html(snapshot.val().mondayBreakfast);
                $("#monday-lunch").html(snapshot.val().mondayLunch);
                $("#monday-dinner").html(snapshot.val().mondayDinner);
        
                $("#tuesday-breakfast").html(snapshot.val().tuesdayBreakfast);
                $("#tuesday-lunch").html(snapshot.val().tuesdayLunch);
                $("#tuesday-dinner").html(snapshot.val().tuesdayDinner);
        
                $("#wednesday-breakfast").html(snapshot.val().wednesdayBreakfast);
                $("#wednesday-lunch").html(snapshot.val().wednesdayLunch);
                $("#wednesday-dinner").html(snapshot.val().wednesdayDinner);
        
                $("#thursday-breakfast").html(snapshot.val().thursdayBreakfast);
                $("#thursday-lunch").html(snapshot.val().thursdayLunch);
                $("#thursday-dinner").html(snapshot.val().thursdayDinner);
        
                $("#friday-breakfast").html(snapshot.val().fridayBreakfast);
                $("#friday-lunch").html(snapshot.val().fridayLunch);
                $("#friday-dinner").html(snapshot.val().fridayDinner);
        
                $("#saturday-breakfast").html(snapshot.val().saturdayBreakfast);
                $("#saturday-lunch").html(snapshot.val().saturdayLunch);
                $("#saturday-dinner").html(snapshot.val().saturdayDinner);
        
            });

        }

        else {
            database.ref().push({
                user:user,

                sundayBreakfast: sundayBreakfast,
                sundayLunch: sundayLunch,
                sundayDinner: sundayDinner,

                mondayBreakfast: mondayBreakfast,
                mondayLunch: mondayLunch,
                mondayDinner: mondayDinner,

                tuesdayBreakfast: tuesdayBreakfast,
                tuesdayLunch: tuesdayLunch,
                tuesdayDinner: tuesdayDinner,

                wednesdayBreakfast: wednesdayBreakfast,
                wednesdayLunch: wednesdayLunch,
                wednesdayDinner: wednesdayDinner,

                thursdayBreakfast: thursdayBreakfast,
                thursdayLunch: thursdayLunch,
                thursdayDinner: thursdayDinner,

                fridayBreakfast: fridayBreakfast,
                fridayLunch: fridayLunch,
                fridayDinner: fridayDinner,

                saturdayBreakfast: saturdayBreakfast,
                saturdayLunch: saturdayLunch,
                saturdayDinner: saturdayDinner,
            })
            console.log("work");
        }
    });

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

    var database = firebase.database();

    $("#save").on("click", function () {
        event.preventDefault();

        firebaseMeals();

    });

    database.ref("user").on("child_added", function (snapshot) {

        console.log(snapshot.val());

        $("#sunday-breakfast").html(snapshot.val().sundayBreakfast);
        $("#sunday-lunch").html(snapshot.val().sundayLunch);
        $("#sunday-dinner").html(snapshot.val().sundayDinner);

        $("#monday-breakfast").html(snapshot.val().mondayBreakfast);
        $("#monday-lunch").html(snapshot.val().mondayLunch);
        $("#monday-dinner").html(snapshot.val().mondayDinner);

        $("#tuesday-breakfast").html(snapshot.val().tuesdayBreakfast);
        $("#tuesday-lunch").html(snapshot.val().tuesdayLunch);
        $("#tuesday-dinner").html(snapshot.val().tuesdayDinner);

        $("#wednesday-breakfast").html(snapshot.val().wednesdayBreakfast);
        $("#wednesday-lunch").html(snapshot.val().wednesdayLunch);
        $("#wednesday-dinner").html(snapshot.val().wednesdayDinner);

        $("#thursday-breakfast").html(snapshot.val().thursdayBreakfast);
        $("#thursday-lunch").html(snapshot.val().thursdayLunch);
        $("#thursday-dinner").html(snapshot.val().thursdayDinner);

        $("#friday-breakfast").html(snapshot.val().fridayBreakfast);
        $("#friday-lunch").html(snapshot.val().fridayLunch);
        $("#friday-dinner").html(snapshot.val().fridayDinner);

        $("#saturday-breakfast").html(snapshot.val().saturdayBreakfast);
        $("#saturday-lunch").html(snapshot.val().saturdayLunch);
        $("#saturday-dinner").html(snapshot.val().saturdayDinner);

    });

    //Prevents refresh on clicking submit button
    $('#submitbutton').click(function (e) {
        e.preventDefault();
    });

    $("#stats").click(function (e) {
       
        calculate();


    });


    //On click of submit next to input form, AJAX request for user input
    $(document).on("click", "#submitbutton", function () {
        var apiID = "aee51471";
        var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
        var input = document.getElementById("searchAPI").value;
        var userinput = input;
        var queryURL = `https://api.edamam.com/search?q=${userinput}&app_id=${apiID}&app_key=${apiKey}`

        $("#searchContainer").show();

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //For loop for appending images and title of user search
                console.log(response);
                for (var i = 0; i < response.hits.length; i++) {

                    $("#search-card-img-" + i).attr("src", response.hits[i].recipe.image);
                    $("#search" + i).text(response.hits[i].recipe.label);
                    $("#search-food-card-" + i).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    });
                };


            });

    });





    //On click of x button, call api for images and nutrient information
    $(document).on("click", "#breakfast-button", function () {

        // For breakfast, hide lunch/dinner. For lunch, hide breakfast/dinner. etc..


        // ajax call
        var apiID = "aee51471";
        var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
        var q = "breakfast";
        // var q = on.click on breakfast lunch or dinner dropdown?
        var queryURL = `https://api.edamam.com/search?q=${q}&app_id=${apiID}&app_key=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                for (var i = 0; i < response.hits.length; i++) {

                    $("#break-card-img-" + i).append(response.hits[i].recipe.image);
                    $("#break-card-img-" + i).attr("src", response.hits[i].recipe.image);
                    $("#breakfast-food-card-" + i).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    })
                    $("#break" + i).prepend(response.hits[i].recipe.label);
                }

                console.log(response);
            });
    });


    $(document).on("click", "#lunch-button", function () {

        // ajax call
        var apiID = "aee51471";
        var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
        var q = "lunch";
        // var q = on.click on breakfast lunch or dinner dropdown?
        var queryURL = `https://api.edamam.com/search?q=${q}&app_id=${apiID}&app_key=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                for (var i = 0; i < response.hits.length; i++) {

                    $("#lunch-card-img-" + i).append(response.hits[i].recipe.image);
                    $("#lunch-card-img-" + i).attr("src", response.hits[i].recipe.image);
                    $("#lunch-food-card-" + i).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    })
                    $("#lunch" + i).prepend(response.hits[i].recipe.label);
                }

                console.log(response);

            });
    });


    $(document).on("click", "#dinner-button", function () {

        // ajax call
        var apiID = "aee51471";
        var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
        var q = "dinner";
        // var q = on.click on breakfast lunch or dinner dropdown?
        var queryURL = `https://api.edamam.com/search?q=${q}&app_id=${apiID}&app_key=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {


                for (var i = 0; i < response.hits.length; i++) {

                    $("#dinner-card-img-" + i).append(response.hits[i].recipe.image);
                    $("#dinner-card-img-" + i).attr("src", response.hits[i].recipe.image);
                    $("#dinner-food-card-" + i).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    })
                    $("#dinner" + i).prepend(response.hits[i].recipe.label);
                }

                console.log(response);

            });
    });

});

