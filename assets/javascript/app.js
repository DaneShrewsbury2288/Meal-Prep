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
        console.log("dropped")

        if (event.target.className == "foodBox droptarget") {

            var data = event.dataTransfer.getData("Text");
            var calories = event.dataTransfer.getData("Calories");
            console.log("Calories" + calories);
            console.log("data stored: " + data);

            var cloneDiv = $("#" + data).clone();
            cloneDiv.attr("id", data);
            $("#"+ data).after(cloneDiv);
            console.log(cloneDiv)

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
        console.log("Calculated!")

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

    });

    $("#clear").on("click", function () {
        $(".droptarget").empty();
    })

    function calculate() {

    };




    //On click of x button, call api for images and nutrient information
    $(document).on("click", "#breakfast-button", function () {

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

        // For breakfast, hide lunch/dinner. For lunch, hide breakfast/dinner. etc..


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

        // For breakfast, hide lunch/dinner. For lunch, hide breakfast/dinner. etc..


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
                console.log(response.length);


            });
    });




    var explainArray = ["Having pre-prepared meals on hand can also reduce portion size and help you reach your nutrition goals. This way, you’ll avoid unhealthy options like TV dinners or takeout, especially when you’re overwhelmed or exhausted.",
        "And since it requires you to determine what to eat ahead of time, meal prepping can lead to more nutritious meal choices over the long term.",
        "Despite what people may think, there are various ways to meal prep — not all of which involve spending a whole Sunday afternoon cooking dishes for the week to come. You can choose methods that work best for you."]

    $("#explaining").on("click", function () {

        console.log("p");


        $("#explaining").fadeOut();
        $("#explaining").empty();
        $("#explaining").append(explainArray[0]);
        explainArray.shift();

    });
});