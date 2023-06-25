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

  // Create an event listener for when the button is clicked it will create a div
  btn.addEventListener("click", function () {
    // Square Counter
    squareCount++;

    // Create a div
    let div = document.createElement("div");
    // Create a class for the div
    div.className = "blk-square";
    div.id = squareCount;
    //console.log(squareCount);

    // Add div inside the container when button is pressed
    container.appendChild(div);
    // Event listener for when the mouse is over the square
    div.addEventListener("mouseover", function () {
      div.style.color = "white";
      div.innerText = div.id;
    });
    // Even Listener for when mouse is off square
    div.addEventListener("mouseout", function () {
      div.style.color = "";
      div.innerText = "";
    });
  });

  // Add button to the DOM
  document.body.appendChild(btn);
  // Add container to the DOM
  document.body.appendChild(container);
});
