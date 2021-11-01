const careSlide = document.querySelector('.prop-slider');
const careImages = document.querySelectorAll('.prop-slider .prop-item');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let counter = 1;
const size = careImages[0].clientWidth;

careSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () =>{
    if(counter >= careImages.length -1) return;
    careSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    careSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () =>{
    if(counter <= 0) return;
    careSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    careSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

careSlide.addEventListener('transitionend', ()=>{
    if(careImages[counter].id === 'last-clone'){
        careSlide.style.transition = "none";
        counter = careImages.length - 2;
        careSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(careImages[counter].id === 'first-clone'){
        careSlide.style.transition = "none";
        counter = careImages.length - counter;
        careSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})