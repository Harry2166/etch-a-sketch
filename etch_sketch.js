
let pixels = prompt("How many pixels do you want to see in the sketching app?")
while(pixels>100){
    pixels = prompt("You may only pick up to 100.\nHow many pixels do you want to see in the sketching app?")
}

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(pixels, pixels);

let divs = document.querySelectorAll(".grid-item"); // gets all grid items
const changeBackgroundColor = e => {
    e.target.style.backgroundColor = "black";
        }
divs.forEach(div => {
    div.addEventListener("click", changeBackgroundColor, {once: false});
        })