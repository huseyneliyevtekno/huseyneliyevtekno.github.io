

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