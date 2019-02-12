/**
 * @file first-canvas.ts
 * @author Samantha L. Misurda
 * @description Drives the animations for the Canvas example
 */

 let mainCanvas = <HTMLCanvasElement>document.getElementById("the-canvas");
 let mainContext = mainCanvas.getContext("2d");

 let canvasWidth = mainCanvas.width;
 let canvasHeight = mainCanvas.height;
 let circleAngle = 0;
 
 /**
  * Sets up the canvas for a new illustration
  */
 function setupCanvas(){
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
    let radius = 25+ 150 * Math.abs(Math.cos(circleAngle));
    mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
    mainContext.closePath();

    // Add color to the circle
    mainContext.fillStyle = "#006699";
    mainContext.fill();
    circleAngle += Math.PI / 64; // Slowly increase the angle
    requestAnimationFrame(drawCircle);
 }
drawCircle();