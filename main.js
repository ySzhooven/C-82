var mouseEvent = "empty";

var lastPositionX, lastPositionY;

   canvas = document.getElementById('myCanvas');
   ctx = canvas.getContext("2d");

   color = "black";
   widthLine = 1;


   canvas.addEventListener("mousedown", myMouseDown);
   width = 1;


   canvas.addEventListener("mousedown", myMouseDown);
   function myMouseDown(e)
   {
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    mouseEvent = "mouseDown";
   }


   canvas.addEventListener("mousemove", myMouseDown);
   function myMouseMove(e)
   {
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown") {
        ctx.beginPaft();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log("Last Position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveto(lastPositionX, lastPositionY);

        console.log("Current Position of x and y coordinates = ");
        console.log("x =" + PositionX + "y = " + PostionY);
        ctx.lineTo|(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
   }

   canvas.addEventListener("mouseup", myMouseUp);
   function myMouseUp(e)
   {
    mouseEvent = "mouseUp"
   }

   canvas.addEventListener("mouseleave", myMouseLeave);
   function myMouseLeave(e)
   {
    mouseEvent = "mouseleave"
   }

   function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   }
