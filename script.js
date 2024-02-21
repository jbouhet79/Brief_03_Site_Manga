// CAROUSSEL

let carouselItems = document.querySelectorAll('.carousel-item');
let lastChildItem = carouselItems[carouselItems.length - 1];
let firstChildItem = carouselItems[0];
let prevButton = document.querySelector('.carousel-control-prev');
let nextButton = document.querySelector('.carousel-control-next');

const prevClick = () => {

    let active = document.querySelector('.active');
    let divPrev = active.previousElementSibling
    if(divPrev && divPrev.classList.contains('carousel-item')){
     divPrev.classList.add('active');
    active.classList.remove('active');   
    }else {
        
        active.classList.remove('active');  
        lastChildItem.classList.add('active');
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
    prevButton.addEventListener("click",prevClick)
    nextButton.addEventListener("click",nextClick)
    
///////////////////////////////////////////////////////////////////////////////////////////////////////

// CARDS

    let previewContainer = document.querySelector('.characters-preview');
    let previewBox = previewContainer.querySelectorAll('.preview');
    
    document.querySelectorAll('.characters-container .character').forEach(character =>{
      character.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = character.getAttribute('data-name');
        previewBox.forEach(preview =>{
          let target = preview.getAttribute('data-target');
          if(name == target){
            preview.classList.add('active');
          }
        });
      };
    });
    
    previewBox.forEach(close =>{
      close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
      };
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MENU BURGER

let buttonBurger = document.querySelector('.navbar-toggler');



