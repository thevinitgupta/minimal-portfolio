// public/global.js
const blob = document.createElement('div');
blob.className = 'box';
document.body.appendChild(blob);

document.addEventListener('mousemove', (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;
    // Get the dimensions of the container and the box
  
    blob.animate({
      left : `${xPos}px`,
      top : `${yPos}px`
    }, {
      duration : 3000,
      fill : "forwards"
    });
});
