$(document).ready(function () {

    $("#submitButton").on("click", function() {
        event.preventDefault();


        var apiID = "82ecbc87";
        var apiKey = "e8c356d3a5bc1eb7ec56ee61ae5911fa";
        var input = $("#recipeInput").val().trim();
        var queryURL = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-details?app_id=${apiID}&app_key=${apiKey}&ingr=1%20large%20apple`


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);


            }



            );



    });





});



