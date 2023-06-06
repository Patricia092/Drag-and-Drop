const theButtons = document.querySelectorAll("#buttonHolder img"), 
puzzleBoard = document.querySelector(".puzzle-board");

console.log(puzzleBoard);

// event Listeners


function changeBGImage() {
    // console.log("changeBGImage called");
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

