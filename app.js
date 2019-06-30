//Pseudo Code
//Create an array of footy gif topics
//Create a button for each gif topic
//Use a for loop to append a button to each string in the array
//Grab 10 static, non-animated GIFS from GIPHY API
//They should animate on click (play/pause)
//Display rating of each GIF under the GIF
//Make AJAX call that takes each topic in array and remakes the buttons on the page

var footyArray = ["Arsenal", "Chelsea", "Barcelona", "Manchester United", "Barcelona", "AC Milan",
    "Mario Balotelli", "Luis Suarez", "Joey Barton", "Vinnie Jones",];

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
    }
}

    //Creates button for user input
$("#add-footy").on("click", function(event){
    //So form won't submit itself, user can click submit or press enter
    event.preventDefault();

    var footyUser = $("#footy-input").val();
    footyArray.push(footyUser);

    createButtons();
})
createButtons();
