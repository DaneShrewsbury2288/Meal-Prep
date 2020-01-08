$(document).ready(function () {

    $("#submitButton").on("click", function() {
        event.preventDefault();

        var apiKey = "9d3e8ccabaa18dc09d254e37adb22193";
        var userSearch = $("#recipeInput").val().trim();
        var queryURL = `https://www.food2fork.com/api/search?key=${apiKey}&q=${userSearch}`


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //convert JSON String into JSON object
                // console.log(response);
                var json = response;
                obj = JSON.parse(json);
                // console.log(obj);
                // console.log(obj.recipes);
                // console.log(obj.recipes[1].title);

                for (var i = 0; i < 10; i++) {

                    var image = obj.recipes[i].image_url;
                    var source = obj.recipes[i].source_url;
                    var title = obj.recipes[i].title;

                    var card = $("<div id='recipe" + i + "' class='card'>");
                    var recipeTitle = $("<p id='recipeTitle" + i + "'>" + title + "</p>");
                    var recipeSource = $("<a href='" + source + "'>");
                    var recipeImage = $("<img id='recipeImage" + i + "' src='" + image + "'>");

                    recipeSource.append(recipeImage);
                    card.append(recipeTitle);
                    card.append(recipeSource);


                    $("#recipeRow").append(card);

                }


            });

    });





});



