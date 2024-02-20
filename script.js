// const carouselItems = document.querySelectorAll('.carousel-item');
// let currentIndex = 0;

// function showSlide(index) {
//   // Hide all carousel items
//   carouselItems.forEach(item => {
//     item.style.display = 'none';
//   });

//   // Show the slide at the specified index
//   carouselItems[index].style.display = 'block';
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   showSlide(currentIndex);
// }

// function previousSlide() {
//   currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//   showSlide(currentIndex);
// }

// // Show the first slide initially
// showSlide(currentIndex);

// // Set up event listeners for next and previous buttons
// document.getElementById('nextBtn').addEventListener('click', nextSlide);
// document.getElementById('prevBtn').addEventListener('click', previousSlide);

// window.addEventListener('load', ()=>{
//     document.querySelector('header').innerHTML+` CODE HTML`
// })

let carouselItems = document.querySelectorAll('carousel-item');
let lastChilItem = carouselItems[carouselItems.length - 1];
let firstChildItem = carouselItems[0];
let prevButton = document.querySelector('carousel-control-prev');
let nextButton = document.querySelector('carousel-control-next');

const prevClick = () => {

    let active = document.querySelector('.active');
    let divPrev = active.previousElementSibling
    if(divPrev && divPrev.classList.contains('carousel-item')){
     divPrev.classList.add('active');
    active.classList.remove('active');   
    }else {
        
        active.classList.remove('active');  
        lastChilItem.classList.add('active');
    }

}

console.log(prevButton);

function nextClick() {
    let active = document.querySelector('.active');
    let divNext = active.nextElementSibling

    if(divNext && divNext.classList.contains('carousel-item')){
     divNext.classList.add('active');
    active.classList.remove('active');   
    }else {
        
        active.classList.remove('active');  
        firstChildItem.classList.add('active');
    }

}
    nextButton.addEventListener("click",nextClick)
    


