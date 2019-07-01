//Pseudo Code
//Create an array of footy gif topics
//Create a button for each gif topic
//Use a for loop to append a button to each string in the array
//Grab 10 static, non-animated GIFS from GIPHY API
//They should animate on click (play/pause)
//Display rating of each GIF under the GIF
//Make AJAX call that takes each topic in array and remakes the buttons on the page
$(document).ready(function () {

    var footyArray = ["Arsenal", "Chelsea", "Barcelona", "Manchester United", "AC Milan",
        "Mario Balotelli", "Luis Suarez", "Joey Barton", "Vinnie Jones"];

    function createButtons() {
        //To delete buttons before adding new buttons (avoids repeat buttons):
        $("#buttons-view").empty();

        //Loop through the array to generate buttons for each string:
        for (var i = 0; i < footyArray.length; i++) {
            var createButtons = $("<button>");
            createButtons.addClass("footy");
            createButtons.attr("data-name", footyArray[i]);
            createButtons.text(footyArray[i]);

            $("#buttons-view").append(createButtons);
            $("#footy-input").val("");
        }
    }

    //Creates button for user input
    $("#add-footy").on("click", function (event) {
        //So form won't submit itself, user can click submit or press enter
        event.preventDefault();
        //push the input to the array:
        var footyUser = $("#footy-input").val().trim();
        footyArray.push(footyUser);

        createButtons();
    })

    createButtons();

    //AJAX Call to pull GIPHY gifs based on specific button click:
    $(document).on("click", ".footy", function (event) {
        var response = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + response + "&api_key=eM3vuQQaXtYtAStZNGXUC7wA1T5Z46FB&limit=10";

        // console.log(queryURL);
        console.log(queryURL);
        console.log(response);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.data[0].type);

            //storing the array as a variable name:
            var giphy = response.data;
            $("#gifHolder").empty();

            //Loop through the array in queryURL:
            for (var i = 0; i < giphy.length, i++;) {
                var footyGifs = $("#gifRowOne");



                footyGifs.append(response.data[0].type);
                footyGifs.append(footyGifImage);

            }

        })
    })
});