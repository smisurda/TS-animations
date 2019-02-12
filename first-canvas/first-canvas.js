/**
 * @file first-canvas.ts
 * @author Samantha L. Misurda
 * @description A short example to grow and shrink a circle using TS and the HTML Canvas
 */
var mainCanvas = document.getElementById("the-canvas");
var mainContext = mainCanvas.getContext("2d");
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
var circleAngle = 0;
/**
 * Sets up the canvas for a new illustration
 */
function setupCanvas() {
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight); // Start with a blank canvas, har.
    mainContext.fillStyle = "#EEEEEE"; // Fill in background for the canvas
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
}
/**
 * Draws a circle on the Canvas
 */
function drawCircle() {
    setupCanvas();
    mainContext.beginPath();
    var radius = 25 + 150 * Math.abs(Math.cos(circleAngle));
    mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
    mainContext.closePath();
    // Add color to the circle
    mainContext.fillStyle = "#006699";
    mainContext.fill();
    circleAngle += Math.PI / 64; // Slowly increase the angle
    requestAnimationFrame(drawCircle);
}
drawCircle();
