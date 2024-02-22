window.addEventListener('load', ()=>{
    document.querySelector('header').innerHTML = `
    <nav class="navb">
        <div class="navb-container container">
            <input type="checkbox" name="" id="">
             <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
             </div>
            <ul class="menu-items">
              <li><a href="presentation.html">Présentation</a></li>
              <li><a href="personnages.html">Personnages</a></li>
              <li><a href="recherche_episodes.html">Volumes</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="logo">
                <a class="navb-brand" aria-current="page" href="/index.html">Accueil</a>
            </div>
      </div>
    </nav>
    `
    document.querySelector('footer').innerHTML = `
    <p>Site officieux <b>"Les Carnets de l'Apothicaire"</b> - &copy2024</p>
    `
})

const volumArray = ["images/volume 1.png", "images/volume 2.png", "images/volume 3.png", "images/volume 4.png", "images/volume 5.png", "images/volume 6.png", "images/volume 7.png", "images/volume 8.png", "images/volume 9.png", "images/volume 10.png", "images/volume 11.png", "images/volume 12.png"];

let inputVolum = document.querySelector("#InputVolum");

let index = 0;

inputVolum.addEventListener("input", e => {
    let input = e.target.value;
    index = Number(input) - 1;
    const dest = document.querySelector('div#chapter')

    const value = volumArray[index]
    dest.innerHTML = `<a href="${value}"><img src="${value}"></img></a>`
})

inputVolum.addEventListener('click', _ => {
    inputVolum.value = "";
})






