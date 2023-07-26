const nextbtn = document.querySelector('.next-btn');
const leftbtn = document.querySelector('.left-btn');
const slides = document.querySelectorAll('.slide');
const numberofslides = slides.length;
let slidenumber =0;



nextbtn.onclick = () => {
slides.forEach ((slide) =>{
slide.classList.remove('active');
}) 

slidenumber ++;

if (slidenumber > (numberofslides - 1)){
slidenumber = 0;
}
slides[slidenumber].classList.add('active');

}


leftbtn.onclick = () => {
    slides.forEach ((slide) =>{
    slide.classList.remove('active');
    
    
    }) 
    
    slidenumber --;
    
    if (slidenumber < 0){
    slidenumber = numberofslides - 1;
    }
    slides[slidenumber].classList.add('active');
}