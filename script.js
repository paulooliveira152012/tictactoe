const box = document.querySelectorAll(".box");
const playerOne = "x";
const playerTwo = "O";
let turn = 0;
let lastClicked;

console.log(box)

//make each box selectable
box.forEach(item => {
    item.addEventListener("click", event => {
        console.log("test")
    })
})
