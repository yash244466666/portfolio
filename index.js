// $(document).ready(function() {
 
//     $(".owl-carousel").owlCarousel();
   
//   });

const loadTxt = document.querySelector('.loading-txt');
const bg = document.querySelector('.content');

let load = 0;
let int = setInterval(blurring, 20);
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadTxt.innerText = `${load}%`;
    loadTxt.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}