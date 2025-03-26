let count = 0;
function createDiv(squareNum) {
  const div = document.createElement("div");
  const cont = document.querySelector(".container");
  cont.appendChild(div);

  div.style.height = squareNum + "px";
  div.style.flexBasis = squareNum + "px";
}

function createDivRow(squareNum) {
  let squaredSize = 960 / squareNum;
  let builtSquared = squaredSize * squaredSize;
  for (i = 0; i < builtSquared; i++) {
    createDiv(squareNum);
  }
}
function deleteDivs() {
  document.querySelectorAll(".container>div").forEach((elem) => {
    elem.remove();
  });
}

function divSizeAndHover() {
  deleteDivs();

  count++;
  let n = prompt(
    "Please enter the size for your canvas (e.g., 16 for a 16x16 canvas). Maximum size is 100:"
  );
  if (n > 100) {
    alert("Keep it to Less than 100");
  } else {
    let squareNum = 960 / n;
    createDivRow(squareNum);
  }

  document.querySelectorAll("div").forEach((elem) => {
    if (!elem.classList.contains("container")) {
      elem.addEventListener("mouseover", () => {
        let newRandomColor = Math.floor(Math.random() * 16777215).toString(16);
        elem.style.backgroundColor = "#" + newRandomColor;
      });
    }
  });
}

function starterCanvas() {
  createDivRow(64);

  document.querySelectorAll("div").forEach((elem) => {
    if (!elem.classList.contains("container")) {
      elem.addEventListener("mouseover", () => {
        let newRandomColor = Math.floor(Math.random() * 16777215).toString(16);
        elem.style.backgroundColor = "#" + newRandomColor;
      });
    }
  });
}

const buttonSize = document.querySelector(".size");
buttonSize.addEventListener("click", divSizeAndHover);

starterCanvas();
