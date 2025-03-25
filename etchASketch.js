function createDiv(userInput) {
  const div = document.createElement("div");
  const cont = document.querySelector(".container");
  cont.appendChild(div);

  let containerSize = userInput * 20;

  cont.style.height = containerSize + "px";
  cont.style.flexBasis = containerSize + "px";
}

function createDivRow(num) {
  for (i = 0; i < num; i++) {
    let userNum = Math.sqrt(num);
    createDiv(userNum);
  }
}

// //PlaceHolder user input convert to input field
// let userInput = prompt(
//   "How big do you want your Canvas hint 16*16 Enter only one num"
// );
// let numTwice = parseInt(userInput * userInput);
createDivRow(256);
