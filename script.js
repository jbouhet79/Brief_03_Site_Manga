// NAVBAR

function toggleMenu() {
  var menu = document.getElementById("menuContent");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

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

    let previewContainer = document.querySelector('.character-preview');
    let previewBox = previewContainer.querySelectorAll('.preview');
    let modal = document.getElementById("myModal");
    
    let dataTargets = [

        {   
            target : 'c-1',

            image : '/images/mao mao.png',
            
            name: 'Mao Mao', 
        
            description: `Fille d'un apothicaire vivant à la périphérie de la ville et âgée de 17 ans à peine, Mao Mao travaille au service de courtisanes dans le quartier des plaisirs. Sa vie bascule quand elle est kidnappée par des bandits qui la vendent au palais impérial. Elle est entraînée dans les intrigues du palais et grâce à ses connaissances insoupçonnables en matière de poisons et une curiosité insatiable pour tout ce qui y touche, elle est repérée par l'intendant de la cour, Jinshi. En sauvant la fille de la concubine de l'empereur, Gyokuyō, elle devient sa dame de compagnie et sa goûteuse officielle. `
        },

        {   target: 'c-2',

            image : 'images/jinshi 2.png',
            
            name: 'Jinshi',
        
            description: `Eunuque à la beauté surnaturelle, il officie à la cour intérieure où résident les concubines et leur personnel respectif en tant qu'intendant. Alors que son visage attire les hommes et les femmes du palais, il se trouve plutôt attiré par Mao Mao et adore la taquiner car c'est l'unique personne qui reste insensible à son charme.` },
        
            {   
            target: 'c-3',
            
            name: 'Gyokuyou',
            
            image : 'images/Gyokuyou.png',
        
            description: `Concubine favorite de l'Empereur, c'est une jeune femme aux cheveux rouge vif, sage et prudente. Ayant quatre dames de compagnie à son service, elle est mère d'une petite fille. Elle prend Mao Mao comme dame de compagnie en la remerciant de l'avoir prévenue que du maquillage mettait en danger la vie de son bébé.` },

            {   
            
            target: 'c-4',

            image : 'images/lifa.png',
            
            name: 'Lifa', 
        
            description: `Une des concubines de l'Empereur aux cheveux bleu foncé qui a donné naissance à son héritier. Celui-ci tombe malade, mais Lifa décide d'ignorer l'avertissement de Mao Mao concernant son maquillage qui empoisonne son bébé. Ce dernier, en bas âge, meurt et elle-même se retrouve en très mauvaise santé. Après que l'apothicaire l'a soignée, elle devient plus amicale avec elle.` },

            {   
            
              target: 'c-5',
  
              image : 'images/lishu.png',
              
              name: 'Lishu', 
          
              description: `Connue sous le nom "d'épouse vertueuse", elle est la plus jeune des quatre principales concubines de l'empereur. Pour des raisons politiques, elle devient la belle-mère de la concubine Aduo. En raison de ses allergies apparentes, ses dames d'honneur pensent qu'elle n'est qu'une enfant qui fait sa difficile avec sa nourriture, et décident de l'intimider subtilement.` },

              {

              target: 'c-6',
  
              image : 'images/gaoshun.png',
              
              name: 'Gaoshun', 
          
              description: `Le bras droit de Jinshi. C'est un homme responsable qui est quelquefois exaspéré par son maître. Il a surnommé Mao Mao "Shao Mao" ("petit chat").` },
        
        
    ];

    document.querySelectorAll('.characters-container .character').forEach(character => {
      character.onclick = () => {
          let name = character.getAttribute('data-name');
          console.log(name);
          dataTargets.forEach(dataTarget => {
              if (name === dataTarget.target) {
                  modal.style.display = "block";
                  previewContainer.innerHTML = `
                      <div>
                          <img src="${dataTarget.image}" alt="">
                          <h3>${dataTarget.name}</h3>
                          <p>${dataTarget.description}</p>
                      </div>
                  `;
              }
          });
      };
  });
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
  
    previewBox.forEach(close =>{
      close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
      };
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MENU BURGER

// let buttonBurger = document.querySelector('.navbar-toggler');
// let navLinks = document.querySelector(".collapse.navbar-collapse");

// buttonBurger.addEventListener('click', () => {
//     console.log(navLinks);
//     navLinks.classList.toggle('active');
// });



