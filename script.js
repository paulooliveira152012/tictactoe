const box = document.querySelectorAll(".box");
const playerOne = "x";
const playerTwo = "O";
let turn = 0;
let lastClicked;

console.log(box)



function firstPlayer() {
    //make each box selectable
box.forEach(item => {
    turn = playerOne
    item.addEventListener("click", event => {
        //console.log("test")
        console.log('last selected was ' + turn)
        //add an X to a selected box
        item.style.backgroundColor="blue";
        item.innerText=playerOne;

        secondPlayer()
    })
})
}

function secondPlayer() {
    console.log("now it is " + playerTwo + "'s turn")
    box.forEach(item => {
        turn = playerOne
        item.addEventListener("click", event => {
            //console.log("test")
            console.log('last selected was ' + turn)
            //add an X to a selected box
            item.style.backgroundColor="blue";
            item.innerText=playerTwo;
            firstPlayer()
        })
    })
}

firstPlayer()
