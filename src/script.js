var cellSize;
var mapSize;
var cells;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function init() {
    cellSize = 20;
    mapSize = 5;
    cells = [];
    cells.size = cellSize * cellSize;
    canvas.width = cellSize * mapSize;
    canvas.height = cellSize * mapSize;
    seed();
}

function seed() {
    cells[0] = {};
    cells[1] = {};
    cells[2] = {};
    cells[3] = {};
}

function drawMap() {
    for (var i = 0; i < mapSize; i++) {
        for (var j = 0; j < mapSize; j++) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}

function updateMap() {
    for (var i = 0; i < cells.size; i++) {
        var indexY = Math.floor(i / mapSize) * cellSize;
        var indexX = ((i - (Math.floor(i / mapSize) * cellSize)) * cellSize);
        ctx.fillStyle = "orange";
        ctx.arc(indexX + cellSize / 2, indexY + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function gameLoop() {
    // while (true) {
    updateMap();
    // }
}

init();
drawMap();
gameLoop();