

/* Bildirimler funksiya Javascript */


var box = document.querySelector('.notification-box');
var down = false;



function notification(){
    if (down) {
        box.style.height = '0px';
        box.style.opacity = 0;
        down = false;
    }else{
        box.style.height = '320px';
        box.style.opacity = 1;
        down = true;
    }
}



/* Menu funksiya Javascript */


var box1 = document.querySelector('.menu');
var down = false;



function menu(){
    if (down) {
        box1.style.height = '0px';
        box1.style.opacity = 0;
        down = false;
    }else{
        box1.style.height = '380px';
        box1.style.opacity = 1;
        down = true;
    }
}









