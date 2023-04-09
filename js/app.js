let redBtn = document.getElementById('red');
let blueBtn = document.getElementById('blue');
let blackBtn = document.getElementById('black');
let bike = document.getElementById('bike');


redBtn.onclick = function(){
    bike.style.backgroundImage = "url(../images/BMW1.png)";
}
blueBtn.onclick = function(){
    bike.style.backgroundImage = "url(../images/BMW2.png)";
}
blackBtn.onclick = function(){
    bike.style.backgroundImage = "url(../images/BMW3.png)";
}




let yCyan = document.getElementById('y-cyan');
let yYellow = document.getElementById('y-yellow');
let yOrange = document.getElementById('y-orange');
let bikeY = document.getElementById('bikeY');

yCyan.onclick = function(){     bikeY.style.backgroundImage = "url(../images/Cyan-Green-Blue-Yamaha.png)";     }
yYellow.onclick = function(){     bikeY.style.backgroundImage = "url(../images/Yamaha2.png)";    }
yOrange.onclick = function(){      bikeY.style.backgroundImage = "url(../images/Yamaha3.png)";    }


const buttons = document.querySelectorAll('.color-select .yamahaaa');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});
