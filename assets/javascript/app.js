var buttonArray = [
  "BJJ",
  "Muay Thai",
  "Boxing",
  "Jeet Kune Do",
  "Kimetsu No Yaiba",
  "Monster Hunter World",
  "Programming",
  "Axes",
  "Weight Training",
  "Running",
  "Contortion"
];
function displayGif() {
  var choice = $(this).attr("data-gif");
  console.log(choice);

  // Constructing a queryURL using the gif name searched
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    choice +
    "&api_key=VjqniSBcgXB8hDfyzgCB6vNi5uAFE7vc&limit=20";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      var result = response.data;
      for (let i = 0; i < 10; i++) {
        var gifImageTag = $("<img>");
        gifImageTag.attr("src", result[i].images.fixed_height_still.url);
        gifImageTag.attr("src", result[i].images.fixed_height.url);

        var paragragh = $("<pre>");
        paragragh.text(`Rating: ${result[i].rating}`);

        $("#gifDisplay").prepend(gifImageTag);
        $("#gifDisplay").prepend(paragragh);

        console.log(result);
      }
    });
}
$(".gifImageTag").on("click", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
function renderButtons() {
  $("#buttonDisplay").empty();

  for (let i = 0; i < buttonArray.length; i++) {
    var newButton = $("<button>");
    newButton
      .addClass("gif-button")
      .attr("data-gif", buttonArray[i])
      .text(buttonArray[i])
      .on("click", displayGif);
    $("#buttonDisplay").append(newButton);
  }
}
renderButtons();

//A Click handler to submit a new button to the selection and a new item to the array
$("#submitBtn").on("click", function(event) {
  event.preventDefault();
  var buttonItem = $("#inputSearch")
    .val()
    .trim();
  if (buttonItem == "") {
    alert("Please Input a Word before Submitting");
    return false;
  } else {
    buttonArray.push(buttonItem);
    $("#inputSearch").val("");
  }

  renderButtons();
});
