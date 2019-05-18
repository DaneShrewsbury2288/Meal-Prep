$(document).ready(function () {

    $("#submitButton").on("click", function() {
        event.preventDefault();

        var apiKey = "0eaf44ffa7f6490ddcb1c67293a62dbb";
        var userSearch = $("#recipeInput").val().trim();
        var queryURL = `https://www.food2fork.com/api/search?key=${apiKey}&q=${userSearch}`


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //convert JSON String into JSON object
                var json = response;
                obj = JSON.parse(json);
                console.log(obj);
                console.log(obj.recipes);
                console.log(obj.recipes[1].title);

                var resultsArea = $("<section class='results-container'>");

                for (var i = 0; i < obj.recipes.length; i++) {
                    var resultsDiv = $("<div class='results-container'>");
                    var sImage = $("<img class='imageresult'>");
                    var title = $("<p class=foodname>").text(obj.recipes[i].title);

                }

                resultsDiv.prepend(sImage);
                resultsDiv.prepend(title);
                resultsArea.prepend(resultsDiv);


            });

    });





});



