function track(eyes){
  eyes.forEach((eye) => {
    window.addEventListener('mousemove', (e) => {
    let mouseX = (eye.getBoundingClientRect().left);
    let mouseY = (eye.getBoundingClientRect().top);
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
    eye.style.transform = `rotate(${rotationDegrees}deg)`;
    });
  });
}

export function eyeTracking(){
  let eyes = [];
  const left = document.querySelector('.monster-eye-left');
  const right = document.querySelector('.monster-eye-right');
  if(left && right){
    eyes.push(left);
    eyes.push(right);
    track(eyes);
    
  }
}
