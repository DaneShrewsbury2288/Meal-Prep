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

    $(window).resize(function(){
        if(window.innerWidth < 500) {
            $("#introImage").remove();

        }
    });




    var explainArray = ["", "Having pre-prepared meals on hand can also reduce portion size and help you reach your nutrition goals. This way, you’ll avoid unhealthy options like TV dinners or takeout, especially when you’re overwhelmed or exhausted.","But tracking those calories and nutrients can be difficult, so we prepared a way for you to do it on the next page!"]

    $("#explaining").on("click", function() {

        console.log("p");
        console.log(explainArray);

        if (explainArray.length === 1) {
            $("#moreInfo").fadeOut();
        }

        else {

            function delay() {
                $("#explaining").text(explainArray[i]);
                $("#explaining").fadeIn();
                explainArray.shift();
                console.log(explainArray);
            }
            
            for (var i = 0; i < 1; i++) {
                $("#explaining").fadeOut();
                setTimeout(delay, 500);
            }

        }

    });
});