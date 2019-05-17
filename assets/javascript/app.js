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

            var cloneDiv = $("#" + data).clone();
            cloneDiv.attr("id", data);
            $("#" + data).after(cloneDiv);
            console.log(cloneDiv)


            event.target.appendChild(document.getElementById(data));
            console.log("successful drop")
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

    $("#calculate").on("click", function () {
        console.log("Calculated!")

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

    });

    $("#clear").on("click", function () {
        $(".droptarget").empty();
    })

    function calculate() {

    };


    //Prevents refresh on clicking submit button
    $('#submitbutton').click(function (e) {

        e.preventDefault();
    });


    //On click of submit next to input form, AJAX request for user input
    $(document).on("click", "#submitbutton", function () {
        var apiID = "aee51471";
        var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
        var input = document.getElementById("searchAPI").value;
        var userinput = input;  
        var queryURL = `https://api.edamam.com/search?q=${userinput}&app_id=${apiID}&app_key=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                $("#search-card-img-0").attr("src", response.hits[0].recipe.image);
                $("#search-card-img-1").attr("src", response.hits[1].recipe.image);
                $("#search-card-img-2").attr("src", response.hits[2].recipe.image);
                $("#search-card-img-3").attr("src", response.hits[3].recipe.image);
                $("#search-card-img-4").attr("src", response.hits[4].recipe.image);
                $("#search-card-img-5").attr("src", response.hits[5].recipe.image);
                $("#search-card-img-6").attr("src", response.hits[6].recipe.image);
                $("#search-card-img-7").attr("src", response.hits[7].recipe.image);
                $("#search-card-img-8").attr("src", response.hits[8].recipe.image);
                $("#search-card-img-9").attr("src", response.hits[9].recipe.image);
                

            }



            );
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
                        "calories": response.hits[i].recipe.calories,
                        "protein": response.hits[i].recipe.digest[2].total,
                        "fats": response.hits[i].recipe.digest[0].total,
                        "carbohydrates": response.hits[i].recipe.digest[1].total,
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
                        "calories": response.hits[i].recipe.calories,
                        "protein": response.hits[i].recipe.digest[2].total,
                        "fats": response.hits[i].recipe.digest[0].total,
                        "carbohydrates": response.hits[i].recipe.digest[1].total,
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
                        "calories": response.hits[i].recipe.calories,
                        "protein": response.hits[i].recipe.digest[2].total,
                        "fats": response.hits[i].recipe.digest[0].total,
                        "carbohydrates": response.hits[i].recipe.digest[1].total,
                    })
                    $("#dinner" + i).prepend(response.hits[i].recipe.label);
                }

                console.log(response);

            });
    });

    $(window).resize(function () {
        if (window.innerWidth < 500) {
            $("#introImage").hide();

        }
    });

    $(window).resize(function () {
        if (window.innerWidth > 500) {
            $("#introImage").show();

        }
    });

});