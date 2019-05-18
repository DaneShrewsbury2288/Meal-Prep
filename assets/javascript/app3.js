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
                console.log(obj.recipes);

                for (var i = 0; i < response.recipes.length; i++){

                }

            }



            );



    });





});



