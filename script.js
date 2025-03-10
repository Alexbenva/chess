const board = document.getElementById("chessboard");
function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            // Alternate colors
            if ((row + col) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }
            square.dataset.position = `${String.fromCharCode(97 + col)}${8 - row}`; // e.g., 'a8', 'h1'
            board.appendChild(square);
        }
    }
}

createBoard(); // Call function to build board