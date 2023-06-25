// Event listener to make sure the DOM loads first before running the function.
document.addEventListener("DOMContentLoaded", function () {
  // Creat a button element and assign it to a variable.
  let btn = document.createElement("button");

  // Create a parent container for the divs
  let container = document.createElement("container");
  container.className = "container";
  // Create text for the button and assign it a variable.
  let btnText = document.createTextNode("Add Square");

  // Fun fact of the day: Blink-182 decided to incorporate their band under a funny name – ‘Poo Poo Butt LLC’ – as they thought it’s funny to hear accountants use the name in important conversations on a daily basis.

  // Add text to button
  btn.appendChild(btnText);

  // create a for loop to count squares when created.
  // for (let i = 1; i < 7; i++) {
  //   console.log(i);
  // }

  // Variable to keep track of square count
  let squareCount = 0;

  // Array of random colors
  let colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#000000",
  ];

  // Create an event listener for when the button is clicked it will create a div
  btn.addEventListener("click", function () {
    // Square Counter
    squareCount++;

    // Create a div
    let div = document.createElement("div");
    // Create a class for the div
    div.className = "blk-square";
    // Add id to each square
    div.id = squareCount;
    //console.log(squareCount);

    // Add div inside the container when button is pressed
    container.appendChild(div);
    // Event listener for when the mouse is over the square
    div.addEventListener("mouseover", function () {
      // Change the number color to white
      div.style.color = "white";
      // Display the ID of the square on the page.
      div.innerText = div.id;
    });
    // Even Listener for when mouse is off square
    div.addEventListener("mouseout", function () {
      // remove the text from the square
      div.innerText = "";
    });

    // Event Listener to add a random color to the square when clicked
    div.addEventListener("click", function () {
      // Set random color to a variable
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      // Add the random color to the square
      div.style.backgroundColor = randomColor;
    });

    // Event listener for when the square is double clicked it is to remove squares.
    div.addEventListener("dblclick", function () {
      // Check to see if the square id is even.
      if (div.id % 2 === 0) {
        // Check to see if there is a next sibling (square)
        if (div.nextElementSibling) {
          // Remove next square
          div.nextElementSibling.remove();
        } else {
          // alert if no square is found
          alert("There is no square to delete");
        }
        // check to see if square id is odd
      } else if (div.id % 2 === 1) {
        // check to see if therer is a previous sibling (square)
        if (div.previousElementSibling) {
          //remove previous sibling (square)
          div.previousElementSibling.remove();
        } else {
          // alert if no square is found
          alert("There is no square to delete");
        }
      }
    });
  });

  // Add button to the DOM
  document.body.appendChild(btn);
  // Add container to the DOM
  document.body.appendChild(container);
});
