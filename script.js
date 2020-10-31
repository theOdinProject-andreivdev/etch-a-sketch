let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);
resetButton.addEventListener("transitionend", function () {
  this.classList.remove("resetEffect");
});

let grid = document.querySelector(".grid");

setup();

function setup() {
  let gridSize = prompt("Please enter grid size");
  clearGrid();
  drawGrid(gridSize);
}

function reset(e) {
  this.classList.add("resetEffect");
  setup();
}

function clearGrid() {
  grid.innerHTML = "";
}

function drawGrid(size) {
  //sanity check
  if (size < 1) size = 1;
  if (size > 20) size = 20;

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      addGridElement(i, j, size);
    }
  }
}

function addGridElement(posx, posy, size) {
  let gridElement = document.createElement("div");
  let width = grid.clientWidth / size - 2;
  setElementProperties(gridElement, width, "white", "1px solid lightgrey");
  setElementEvents(gridElement);

  grid.appendChild(gridElement);
}

function setElementProperties(gridElement, width, color, border) {
  gridElement.style.width = width + "px";
  gridElement.style.height = width + "px";
  gridElement.style.background = color;
  gridElement.style.border = border;
}

function setElementEvents(gridElement) {
  gridElement.addEventListener("touchmove", function (e) {
    e.target.style.background = "black";
  });
  gridElement.addEventListener("mouseover", function (e) {
    e.target.style.background = "black";
  });
}
