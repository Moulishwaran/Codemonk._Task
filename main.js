//code here

// Get the canvas element and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the circle properties
const radius = 40;
const lineWidth = 2;
const strokeStyle = "#0000ff";
const fillStyle = "#ffffff";

// Listen to the mousemove event
canvas.addEventListener("mousemove", function (event) {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get the mouse position relative to the canvas
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.stroke();
  ctx.fill();
});
