let buttons = document.getElementById('counter');
let count = parseInt(1);

function lowerCounter(){
    count--;
    buttons.innerHTML=count;
    console.log(buttons);
}

function addCounter(){
    count++
    buttons.innerHTML=count;
    
}