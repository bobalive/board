const board = document.querySelector(".board");

// console.log(document);

for (let i = 0; i < 500; i++) {
  let block = document.createElement("div");
  block.classList.add("box");
  board.appendChild(block);

  block.addEventListener("mouseover", () => {
    let a = Math.floor(Math.random() * (257 - 0)) + 0;
    let b = Math.floor(Math.random() * (257 - 0)) + 0;
    let c = Math.floor(Math.random() * (257 - 0)) + 0;
    block.style.background = `rgb(${a},${b},${c})`;
    fu;
  });

  block.addEventListener("mouseleave", () => {
    block.style.background = "#1d1717";
  });
}
