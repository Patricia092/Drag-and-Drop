const theButtons = document.querySelectorAll("#buttonHolder img"), 
puzzleBoard = document.querySelector(".puzzle-board"), 
puzzlePieces = document.querySelectorAll(".puzzle-pieces img");

console.log(puzzleBoard);

// event Listeners


function changeBGImage() {
    // console.log("changeBGImage called");
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

function handleStartDrag() {
    console.log("handleStartDrag called", this);
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
