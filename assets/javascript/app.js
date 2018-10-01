// API Key: FiDaJGdZm9CCACzTDlexL1LjaBfu4j9o 

// Initial array of gif buttons
var animals = ["Dog", "Cat", "Guinea Pig", "Mouse", "Monkey", "Hamster", "Penguin", "Parrot", "Skunk", "Horse", "Owl", "Butterfly", "Pig", "Peacock", "Gerbil"];

function displayAnimal() {

    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=FiDaJGdZm9CCACzTDlexL1LjaBfu4j9o&limit=10";

    // AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Div to hold gifs
      var animalDiv = $("<div class='animal'>");
      console.log(queryURL);
      console.log(response);

      // Stores results    
      var results = response.data;

      // Loops through all results
      for (var i = 0; i < results.length; i++) {

        var animalDiv = $("<div>");

        // Populates results
        var p = $("<p>").text();

        // Creates img tag
        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.append(p);
        animalDiv.append(animalImage);

        // Links animalDiv with html id
        $("#gifs-appear-here").prepend(animalDiv);
      } animalDiv.append(image);
      $("#animals-view").prepend(animalDiv);
    });
  }

   // Function for displaying animal data
   function renderButtons() {

    // Deletes old animals
    $("#buttons-view").empty();

    // Looping through the array of animals
    for (var i = 0; i < animals.length; i++) {

      // Generating new buttons
      var a = $("<button>");
      a.addClass("animal-btn");
      a.attr("data-name", animals[i]);
      a.text(animals[i]);
      $("#buttons-view").append(a);
    }
  }

  // When animal buttons are clicked
  $("#add-animal").on("click", function(event) {
    event.preventDefault();
    var animal = $("#animal-input").val().trim();
    animals.push(animal);

    renderButtons();
  });

  // Event listener
  $(document).on("click", ".animal-btn", displayAnimal);

  // Render buttons when page loads
  renderButtons();