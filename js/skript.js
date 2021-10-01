let oiu = 0;
const slid = document.querySelector('.slider-line');
const c1 =document.querySelector('.sliderN');
const c2 =document.querySelector('.sliderP');

c1.addEventListener('click', () =>{
    oiu += 256;
    if (oiu > 768) {
        oiu = 0
    }
    slid.style.left = -oiu +'px';
})
c2.addEventListener('click', () =>{
    oiu -= 256;
    if (oiu < 0) {
        oiu = 768
    }
    slid.style.left = -oiu +'px';
})

setInterval(() => {
    oiu += 256;
    if (oiu > 768) {
        oiu = 0
    }
    slid.style.left = -oiu +'px';
},5000)