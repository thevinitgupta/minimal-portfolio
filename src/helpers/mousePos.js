export const handleMouseMove = (blob, event) =>{
    const xPos = event.clientX;
    const yPos = event.clientY;
    // Get the dimensions of the container and the box
  
    blob.animate({
      left : `${xPos}px`,
      top : `${yPos}px`
    }, {
      duration : 3000,
      fill : "forwards"
    });
  }