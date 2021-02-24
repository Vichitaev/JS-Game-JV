

    let posTop = 10;
    let move = document.addEventListener('keydown', function(event){
    console.log(event);
    const key = event.code;
    if(key =="ArrowDown"){
    posTop = posTop +10;
    }
    if(posTop>90){
    posTop = 0;
    }
    document.querySelector('.player').style.top = posTop + '%';
    })

    document.addEventListener('keydown', function(event){
    console.log(event);
    const key = event.code;
    if(key =="ArrowUp"){
    posTop = posTop +-10;
    }
    if(posTop<0){
    posTop = 90;
    }
    document.querySelector('.player').style.top = posTop + '%';
    })

    let posLeft = 10;
    document.addEventListener('keydown', function(event){
    console.log(event);
    const key = event.code;
    if(key =="ArrowRight"){
    posLeft = posLeft +10;
    }
    if(posLeft >90){
    posLeft = 0;
    }
    document.querySelector('.player').style.left = posLeft + '%';
    })

    document.addEventListener('keydown', function(event){
    console.log(event);
    const key = event.code;
    if(key =="ArrowLeft"){
    posLeft = posLeft +-10;
    }
    if(posLeft <0){
    posLeft = 90;
    }
    document.querySelector('.player').style.left = posLeft + '%';
    })


    let touched = document.querySelector('.player').addEventListener('click', function(){
        (this.style.backgroundColor='red');
        (this.style.display='none');
        alert('You won!');
        
    })
let timerId;
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        timerId= setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer <= -1) {
                clearInterval(timerId)
                alert('Keybord won!');
                (document.querySelector('.player').style.backgroundColor='green');
                ;
                
            }
        }, 1000);
    }
    
    window.onload = function () {
        let tmr = 10,
            display = document.querySelector('#time');
        startTimer(tmr, display);
    };

