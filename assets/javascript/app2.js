$(document).ready(function () {


    var explainArray = ["", "Having pre-prepared meals on hand can also reduce portion size and help you reach your nutrition goals. This way, you’ll avoid unhealthy options like TV dinners or takeout, especially when you’re overwhelmed or exhausted.","But tracking those calories and nutrients can be tedious, so we prepared a way for you to do it on the next page!"]

    $("#explaining").on("click", function () {

        // console.log("p");
        // console.log(explainArray);

        if (explainArray.length === 1) {
            $("#moreInfo").fadeOut();
        }

        else {

            function delay() {
                $("#explaining").text(explainArray[i]);
                $("#explaining").fadeIn();
                explainArray.shift();
                // console.log(explainArray);
            }

            for (var i = 0; i < 1; i++) {
                $("#explaining").fadeOut();
                setTimeout(delay, 500);
            }

        }

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