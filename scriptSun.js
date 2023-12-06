const sun = document.querySelector('.sun');
const earth = document.querySelector('.earth');

var sunStartTime = document.getElementById('sunStartTime').innerHTML;
var sunEndTime = document.getElementById('sunEndTime').innerHTML;



function moveSun() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const start = sunStartTime.split(':')[0] * 60 +  Number(sunStartTime.split(':')[1]);
  const end = sunEndTime.split(':')[0] * 60 +  Number(sunEndTime.split(':')[1]);

  const angle = ((hours * 60 + minutes - start) / (end-start)) * 180;

  let left = 125 - Math.cos(angle * Math.PI / 180)*100;
  let top = 125 - Math.sin(angle * Math.PI / 180)*100;

  if (end < hours*60+minutes || start > hours*60+minutes){
    sun.style.backgroundImage = "url('./source/moon.png')";
  } else {
    sun.style.backgroundImage = "url('./source/sun.png')";
  }

  sun.style.left = left + "px";
  sun.style.top = top + "px";



  
  requestAnimationFrame(moveSun);
}

moveSun();

