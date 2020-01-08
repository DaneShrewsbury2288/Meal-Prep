$(document).ready(function () {

    // Hide the meal menus at the beginning
    $("#breakfast-menu").hide();
    $("#lunch-menu").hide();
    $("#dinner-menu").hide();

    /* Events fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);

    });

    /* events fired while drag */
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

        if (event.target.className === "foodBox droptarget") {

            var data = event.dataTransfer.getData("Text");
            // console.log("data stored: " + data);

            var cloneDiv = $("#" + data).clone();
            cloneDiv.attr("id", data);
            $("#" + data).after(cloneDiv);

            event.target.appendChild(document.getElementById(data));
            // console.log("successful drop")

            calculate();
        }
    });


    // When you doubleclick a meal div, it removes the card and re-runs calculate
    $(".droptarget").dblclick(function () {

        $(this).empty();

        calculate();

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

    // Clears all the menu divs and re-runs calculate function
    $("#clear").on("click", function () {
        $(".droptarget").empty();

        calculate();

    })

    // MouseOver function to show more information
    $(".card").mouseover(function () {
        $(this).css("background-color", "yellow");
        
    });
    $(".card").mouseout(function () {
        $(this).css("background-color", "lightgray");
    });




    function calculate() {

        daysArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        nutrientArray = ["calories", "protein", "carbohydrates", "fats"];


        //     // loop through the days array
        //    for (var i = 0; i < daysArray.length; i++) {

        //     // make sure to empty it the first time
        //     $("#" + daysArray[i] + "-stats").empty();

        //     // loop through the nutrient array
        //     for (var k = 0; k < nutrientArray.length; k++) {

        //         // add together the nutrient from all the meals of that day and round it to a number

        //         var breakfast = (+$("#" + daysArray[i] + "-breakfast").children().attr(nutrientArray[k]));
        //         var lunch = (+$("#" + daysArray[i] + "-lunch").children().attr(nutrientArray[k]));
        //         var dinner = (+$("#" + daysArray[i] + "-dinner").children().attr(nutrientArray[k]));

        //         var count = Math.round(breakfast + lunch + dinner);

        //         // append numbers to html
        //         $("#" + daysArray[i] + "-stats").append(nutrientArray[k] + ": " + count + "<br>");

        //     }
        // }

        // Calculate Sunday Calories / Nutrients 

        if ($("#sunday-breakfast").is(':empty')) {

            var sundayBreakfastCalories = 0;
            var sundayBreakfastProtein = 0;
            var sundayBreakfastCarbs = 0;
            var sundayBreakfastFats = 0;

        } else {

            var sundayBreakfastCalories = $("#sunday-breakfast").children().attr("calories");
            var sundayBreakfastProtein = $("#sunday-breakfast").children().attr("protein");
            var sundayBreakfastCarbs = $("#sunday-breakfast").children().attr("carbohydrates");
            var sundayBreakfastFats = $("#sunday-breakfast").children().attr("fats");

        };

        if ($("#sunday-lunch").is(':empty')) {

            var sundayLunchCalories = 0;
            var sundayLunchProtein = 0;
            var sundayLunchCarbs = 0;
            var sundayLunchFats = 0;

        } else {

            var sundayLunchCalories = $("#sunday-lunch").children().attr("calories");
            var sundayLunchProtein = $("#sunday-lunch").children().attr("protein");
            var sundayLunchCarbs = $("#sunday-lunch").children().attr("carbohydrates");
            var sundayLunchFats = $("#sunday-lunch").children().attr("fats");

        };

        if ($("#sunday-dinner").is(':empty')) {

            var sundayDinnerCalories = 0;
            var sundayDinnerProtein = 0;
            var sundayDinnerCarbs = 0;
            var sundayDinnerFats = 0;

        } else {

            var sundayDinnerCalories = $("#sunday-dinner").children().attr("calories");
            var sundayDinnerProtein = $("#sunday-dinner").children().attr("protein");
            var sundayDinnerCarbs = $("#sunday-dinner").children().attr("carbohydrates");
            var sundayDinnerFats = $("#sunday-dinner").children().attr("fats");

        };

        var sundayCalories = Math.round((+sundayBreakfastCalories) + (+sundayLunchCalories) + (+sundayDinnerCalories));
        var sundayProtein = Math.round((+sundayBreakfastProtein) + (+sundayLunchProtein) + (+sundayDinnerProtein));
        var sundayCarbs = Math.round((+sundayBreakfastCarbs) + (+sundayLunchCarbs) + (+sundayDinnerCarbs));
        var sundayFats = Math.round((+sundayBreakfastFats) + (+sundayLunchFats) + (+sundayDinnerFats));

        $("#sunday-stats").empty().append("Calories: " + sundayCalories + "<br>");
        $("#sunday-stats").append("Protein: " + sundayProtein + "g" + "<br>");
        $("#sunday-stats").append("Carbs: " + sundayCarbs + "g" + "<br>");
        $("#sunday-stats").append("Fats: " + sundayFats + "g" + "<br>");


        // Calculate Monday Calories / Nutrients

        if ($("#monday-breakfast").is(':empty')) {

            var mondayBreakfastCalories = 0;
            var mondayBreakfastProtein = 0;
            var mondayBreakfastCarbs = 0;
            var mondayBreakfastFats = 0;

        } else {

            var mondayBreakfastCalories = $("#monday-breakfast").children().attr("calories");
            var mondayBreakfastProtein = $("#monday-breakfast").children().attr("protein");
            var mondayBreakfastCarbs = $("#monday-breakfast").children().attr("carbohydrates");
            var mondayBreakfastFats = $("#monday-breakfast").children().attr("fats");

        };

        if ($("#monday-lunch").is(':empty')) {

            var mondayLunchCalories = 0;
            var mondayLunchProtein = 0;
            var mondayLunchCarbs = 0;
            var mondayLunchFats = 0;

        } else {

            var mondayLunchCalories = $("#monday-lunch").children().attr("calories");
            var mondayLunchProtein = $("#monday-lunch").children().attr("protein");
            var mondayLunchCarbs = $("#monday-lunch").children().attr("carbohydrates");
            var mondayLunchFats = $("#monday-lunch").children().attr("fats");

        };

        if ($("#monday-dinner").is(':empty')) {

            var mondayDinnerCalories = 0;
            var mondayDinnerProtein = 0;
            var mondayDinnerCarbs = 0;
            var mondayDinnerFats = 0;

        } else {

            var mondayDinnerCalories = $("#monday-dinner").children().attr("calories");
            var mondayDinnerProtein = $("#monday-dinner").children().attr("protein");
            var mondayDinnerCarbs = $("#monday-dinner").children().attr("carbohydrates");
            var mondayDinnerFats = $("#monday-dinner").children().attr("fats");

        };

        var mondayCalories = Math.round((+mondayBreakfastCalories) + (+mondayLunchCalories) + (+mondayDinnerCalories));
        var mondayProtein = Math.round((+mondayBreakfastProtein) + (+mondayLunchProtein) + (+mondayDinnerProtein));
        var mondayCarbs = Math.round((+mondayBreakfastCarbs) + (+mondayLunchCarbs) + (+mondayDinnerCarbs));
        var mondayFats = Math.round((+mondayBreakfastFats) + (+mondayLunchFats) + (+mondayDinnerFats));

        $("#monday-stats").empty().append("Calories: " + mondayCalories + "<br>");
        $("#monday-stats").append("Protein: " + mondayProtein + "g" + "<br>");
        $("#monday-stats").append("Carbs: " + mondayCarbs + "g" + "<br>");
        $("#monday-stats").append("Fats: " + mondayFats + "g" + "<br>");

        // Calculate Tuesday Calories / Nutrients 

        if ($("#tuesday-breakfast").is(':empty')) {

            var tuesdayBreakfastCalories = 0;
            var tuesdayBreakfastProtein = 0;
            var tuesdayBreakfastCarbs = 0;
            var tuesdayBreakfastFats = 0;

        } else {

            var tuesdayBreakfastCalories = $("#tuesday-breakfast").children().attr("calories");
            var tuesdayBreakfastProtein = $("#tuesday-breakfast").children().attr("protein");
            var tuesdayBreakfastCarbs = $("#tuesday-breakfast").children().attr("carbohydrates");
            var tuesdayBreakfastFats = $("#tuesday-breakfast").children().attr("fats");

        };

        if ($("#tuesday-lunch").is(':empty')) {

            var tuesdayLunchCalories = 0;
            var tuesdayLunchProtein = 0;
            var tuesdayLunchCarbs = 0;
            var tuesdayLunchFats = 0;

        } else {

            var tuesdayLunchCalories = $("#tuesday-lunch").children().attr("calories");
            var tuesdayLunchProtein = $("#tuesday-lunch").children().attr("protein");
            var tuesdayLunchCarbs = $("#tuesday-lunch").children().attr("carbohydrates");
            var tuesdayLunchFats = $("#tuesday-lunch").children().attr("fats");

        };

        if ($("#tuesday-dinner").is(':empty')) {

            var tuesdayDinnerCalories = 0;
            var tuesdayDinnerProtein = 0;
            var tuesdayDinnerCarbs = 0;
            var tuesdayDinnerFats = 0;

        } else {

            var tuesdayDinnerCalories = $("#tuesday-dinner").children().attr("calories");
            var tuesdayDinnerProtein = $("#tuesday-dinner").children().attr("protein");
            var tuesdayDinnerCarbs = $("#tuesday-dinner").children().attr("carbohydrates");
            var tuesdayDinnerFats = $("#tuesday-dinner").children().attr("fats");

        };


        var tuesdayCalories = Math.round((+tuesdayBreakfastCalories) + (+tuesdayLunchCalories) + (+tuesdayDinnerCalories));
        var tuesdayProtein = Math.round((+tuesdayBreakfastProtein) + (+tuesdayLunchProtein) + (+tuesdayDinnerProtein));
        var tuesdayCarbs = Math.round((+tuesdayBreakfastCarbs) + (+tuesdayLunchCarbs) + (+tuesdayDinnerCarbs));
        var tuesdayFats = Math.round((+tuesdayBreakfastFats) + (+tuesdayLunchFats) + (+tuesdayDinnerFats));


        $("#tuesday-stats").empty().append("Calories: " + tuesdayCalories + "<br>");
        $("#tuesday-stats").append("Protein: " + tuesdayProtein + "g" + "<br>");
        $("#tuesday-stats").append("Carbs: " + tuesdayCarbs + "g" + "<br>");
        $("#tuesday-stats").append("Fats: " + tuesdayFats + "g" + "<br>");

        // Calculate Wednesday Calories / Nutrients

        if ($("#wednesday-breakfast").is(':empty')) {

            var wednesdayBreakfastCalories = 0;
            var wednesdayBreakfastProtein = 0;
            var wednesdayBreakfastCarbs = 0;
            var wednesdayBreakfastFats = 0;

        } else {

            var wednesdayBreakfastCalories = $("#wednesday-breakfast").children().attr("calories");
            var wednesdayBreakfastProtein = $("#wednesday-breakfast").children().attr("protein");
            var wednesdayBreakfastCarbs = $("#wednesday-breakfast").children().attr("carbohydrates");
            var wednesdayBreakfastFats = $("#wednesday-breakfast").children().attr("fats");

        };

        if ($("#wednesday-lunch").is(':empty')) {

            var wednesdayLunchCalories = 0;
            var wednesdayLunchProtein = 0;
            var wednesdayLunchCarbs = 0;
            var wednesdayLunchFats = 0;

        } else {

            var wednesdayLunchCalories = $("#wednesday-lunch").children().attr("calories");
            var wednesdayLunchProtein = $("#wednesday-lunch").children().attr("protein");
            var wednesdayLunchCarbs = $("#wednesday-lunch").children().attr("carbohydrates");
            var wednesdayLunchFats = $("#wednesday-lunch").children().attr("fats");

        };

        if ($("#wednesday-dinner").is(':empty')) {

            var wednesdayDinnerCalories = 0;
            var wednesdayDinnerProtein = 0;
            var wednesdayDinnerCarbs = 0;
            var wednesdayDinnerFats = 0;

        } else {

            var wednesdayDinnerCalories = $("#wednesday-dinner").children().attr("calories");
            var wednesdayDinnerProtein = $("#wednesday-dinner").children().attr("protein");
            var wednesdayDinnerCarbs = $("#wednesday-dinner").children().attr("carbohydrates");
            var wednesdayDinnerFats = $("#wednesday-dinner").children().attr("fats");

        };

        var wednesdayCalories = Math.round((+wednesdayBreakfastCalories) + (+wednesdayLunchCalories) + (+wednesdayDinnerCalories));
        var wednesdayProtein = Math.round((+wednesdayBreakfastProtein) + (+wednesdayLunchProtein) + (+wednesdayDinnerProtein));
        var wednesdayCarbs = Math.round((+wednesdayBreakfastCarbs) + (+wednesdayLunchCarbs) + (+wednesdayDinnerCarbs));
        var wednesdayFats = Math.round((+wednesdayBreakfastFats) + (+wednesdayLunchFats) + (+wednesdayDinnerFats));

        $("#wednesday-stats").empty().append("Calories: " + wednesdayCalories + "<br>");
        $("#wednesday-stats").append("Protein: " + wednesdayProtein + "g" + "<br>");
        $("#wednesday-stats").append("Carbs: " + wednesdayCarbs + "g" + "<br>");
        $("#wednesday-stats").append("Fats: " + wednesdayFats + "g" + "<br>");

        // Calculate Thursday Calories / Nutrients 

        if ($("#thursday-breakfast").is(':empty')) {

            var thursdayBreakfastCalories = 0;
            var thursdayBreakfastProtein = 0;
            var thursdayBreakfastCarbs = 0;
            var thursdayBreakfastFats = 0;

        } else {

            var thursdayBreakfastCalories = $("#thursday-breakfast").children().attr("calories");
            var thursdayBreakfastProtein = $("#thursday-breakfast").children().attr("protein");
            var thursdayBreakfastCarbs = $("#thursday-breakfast").children().attr("carbohydrates");
            var thursdayBreakfastFats = $("#thursday-breakfast").children().attr("fats");

        };

        if ($("#thursday-lunch").is(':empty')) {

            var thursdayLunchCalories = 0;
            var thursdayLunchProtein = 0;
            var thursdayLunchCarbs = 0;
            var thursdayLunchFats = 0;

        } else {

            var thursdayLunchCalories = $("#thursday-lunch").children().attr("calories");
            var thursdayLunchProtein = $("#thursday-lunch").children().attr("protein");
            var thursdayLunchCarbs = $("#thursday-lunch").children().attr("carbohydrates");
            var thursdayLunchFats = $("#thursday-lunch").children().attr("fats");

        };

        if ($("#thursday-dinner").is(':empty')) {

            var thursdayDinnerCalories = 0;
            var thursdayDinnerProtein = 0;
            var thursdayDinnerCarbs = 0;
            var thursdayDinnerFats = 0;

        } else {

            var thursdayDinnerCalories = $("#thursday-dinner").children().attr("calories");
            var thursdayDinnerProtein = $("#thursday-dinner").children().attr("protein");
            var thursdayDinnerCarbs = $("#thursday-dinner").children().attr("carbohydrates");
            var thursdayDinnerFats = $("#thursday-dinner").children().attr("fats");

        };


        var thursdayCalories = Math.round((+thursdayBreakfastCalories) + (+thursdayLunchCalories) + (+thursdayDinnerCalories));
        var thursdayProtein = Math.round((+thursdayBreakfastProtein) + (+thursdayLunchProtein) + (+thursdayDinnerProtein));
        var thursdayCarbs = Math.round((+thursdayBreakfastCarbs) + (+thursdayLunchCarbs) + (+thursdayDinnerCarbs));
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


    $("#add-user").on("click", function () {
        var user = $("#login").val().trim();
        event.preventDefault();

        $("#current-user").html("Current User: " + user);

        // console.log(user);
        // console.log(database.ref(user).key);

        if (user === database.ref(user).key) {

            database.ref(user).on("value", function (snapshot) {

                // console.log(snapshot.val());

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

                calculate();

            });

        }

        else {

            database.ref().push({
                user: user,

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
            // console.log("work");
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
                // console.log(response);
                for (var i = 0; i < response.hits.length; i++) {

                    $("#search-card-img-" + i).attr("src", response.hits[i].recipe.image);
                    $("#search" + i).text(response.hits[i].recipe.label);
                    $("#search-food-card-" + i).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                        "recipe": response.hits[i].recipe.url,
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
                        "recipe": response.hits[i].recipe.url,
                    })
                    $("#break" + i).prepend(response.hits[i].recipe.label);
                }

                // console.log(response);
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
                        "recipe": response.hits[i].recipe.url,
                    })
                    $("#lunch" + i).prepend(response.hits[i].recipe.label);
                }

                // console.log(response);

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
                        "recipe": response.hits[i].recipe.url,
                    })
                    $("#dinner" + i).prepend(response.hits[i].recipe.label);
                }

                // console.log(response);

            });
    });

});

