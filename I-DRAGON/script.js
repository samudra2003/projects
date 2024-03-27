audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(()=>{
    audio.play();
},1000)
document.onkeydown = function (e) {
    if (e.code == 'ArrowUp') {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.code == 'ArrowRight') {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + "px";
    }
    if (e.code == 'ArrowLeft') {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 112) + "px";
    }
}
 let score =0;
 cross =true;
setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);
   // console.log(offsetx,offsety);
    if (offsetx<113 && offsety<52) {
        gameover.innerHTML = "Game Over-Reload to Play Again"
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000)
    }
    else if(offsetx<145 && cross) {
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(()=>{
          cross = true;
        },1000)
        setTimeout(()=>{
           anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animate-duration'));
           newdur = anidur - 0.081;
           obstacle.style.animationDuration = newdur+'s';
        },500);
    }
},10);
function updatescore(score) {
    scorecount.innerHTML = "Your Score :"+score;
}