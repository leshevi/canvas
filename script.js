document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("drawCanvas");
    const context = canvas.getContext("2d");
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    // Начать рисование
    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];}
    // Закончить рисование
    function stopDrawing() {
        isDrawing = false}
    // Рисование на холсте
    function draw(e) {
        if (!isDrawing) return;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = "#000";
        context.lineWidth = 5;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];}
    // Слушатели событий
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    canvas.addEventListener("mousemove", draw);});