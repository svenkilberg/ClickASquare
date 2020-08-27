
//class GameBoardTile {
//    constructor() {
//        this.xPoint;
//        this.yPoint;
//        this.width;
//        this.height;
//    }   
//}

const GameBoardTile = function() {
    this.xPoint;
    this.yPoint;
    this.width;
    this.height;
    this.hasMarker;
}


 


var c = document.getElementById("playField");
var ctx = c.getContext("2d");

// Start point for the first gameboard tile.
const startRectXPoint = 20;
const startRectYPoint = 20;

// Common with and height used for all tiles.
const rectWidth = 100;
const rectHeight = 100;

var tiles = []; // Array to store all tile objects.
let tilesCount = 0; // Counster used for going throw each element in the tile array.

// These nested loops sets the properties of the tile objects in the tile array.
// It goes tile by tile and row by row. Loop 'i' is rows and 'j' is tiles.
for (let i = 0; i < 6; i++){

    for (let j = 0; j < 7; j++) {
        
        tiles[tilesCount] = new GameBoardTile();
        tiles[tilesCount].xPoint = startRectXPoint + (j * rectWidth);
        tiles[tilesCount].yPoint = startRectYPoint + (i * rectHeight)
        tiles[tilesCount].width = rectWidth;
        tiles[tilesCount].height = rectHeight;
        tiles[tilesCount].hasMarker = false;

        tilesCount++       
    }
}

console.log(tiles);

// Draws the tiles in the tile array to the canvas
tiles.forEach(element => {
    ctx.rect(element.xPoint, element.yPoint, element.width, element.height);
    ctx.stroke();
});

window.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
});

document.querySelector('#playField').addEventListener('click', onClick);

function onClick(e) {
    
    let val;

    val = e.target;

    console.log(val);

    // context.arc(x,y,r,sAngle,eAngle,counterclockwise); To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI.
    tiles.forEach(element => {
        console.log(e.x, e.y);
        console.log(element.hasMarker);
        if (e.x > element.xPoint && e.x < element.xPoint + element.width && e.y > element.yPoint && e.y < element.yPoint + element.height && !element.hasMarker) {
            ctx.beginPath();
            ctx.arc(element.xPoint + (element.width / 2), element.yPoint + (element.height / 2), element.width / 2 - 4 , 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
        }
        else {
            ctx.beginPath();
            ctx.rect(element.xPoint + 8, element.yPoint + 8, element.width - 8, element.height - 8);
            ctx.fillStyle = "white";
            ctx.fill();

        }
    });
}

