document.querySelector('.player').addEventListener('click', function(){
    this.style.backgroundColor='red';
    })
    
    let posTop = 10;
    document.addEventListener('keydown', function(event){
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

    






