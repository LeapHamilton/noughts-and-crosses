const gameBoard = {
    sectors: ["1","2","3","4","5","6","7","8","9"]
};

gameBoard.sectors.forEach(addDivs);

function addDivs(sector) {
    const board = document.getElementById("board");
    const newDiv = document.createElement("div");
    newDiv.textContent = sector;
    board.appendChild(newDiv);
};


