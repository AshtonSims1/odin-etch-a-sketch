document.addEventListener("DOMContentLoaded", function(){
    
    console.log("hi")
})

function createBoard(size){
    let board = document.querySelectorAll(".board"); 

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}