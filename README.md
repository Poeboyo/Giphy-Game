# Giphy-Game

A Website that displays Gif apps, as they are called from the Giphy API.

## How it's Made

- A Search Bar and Pre-defined Buttons are visible upon entering the page,
- Upon hitting Enter after inputting something you'd like to see as a Gif, it will be created as a clickable button

```javascript
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
```

- The API upon clicking one of these specified buttons, will then make a call to the Giphy API with the buttons content as the search and returns the first ten responses from that call and applies them to a DIV present on the page.

```javascript
var gifImageTag = $("<img>");
gifImageTag.attr("src", result[i].images.fixed_height_still.url);
gifImageTag.attr("src", result[i].images.fixed_height.url);

var paragragh = $("<pre>");
paragragh.text(`Rating: ${result[i].rating}`);

$("#gifDisplay").prepend(gifImageTag);
$("#gifDisplay").prepend(paragragh);
```

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Giphy API

## Difficulties and Learning

- The only difficulty and learning to this project at the time were using APIs for the first time and understanding their functionality and how to retrieve only the data you wanted from the response.
