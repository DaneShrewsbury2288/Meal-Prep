

$(document).ready(function () {


    //On click of x button, call api for images and nutrient information
    $(document).on("click", "#calculate", function () {
    
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
                var FoodImageArea = $("<img>");

                FoodImageArea.append(results.hits[1].recipe.image);
                
                FoodImageArea.attr("src", results.hits[1].recipe.image);

                $("#testdiv").prepend(FoodImageArea);

                console.log(response);
            

        });
    });
});