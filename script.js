window.addEventListener('load', ()=>{

    document.querySelector('header').innerHTML = `
    <nav class="navbar navbar-expand-lg bg-primaire-subtil">
    <div class="container-fluid">
        <a class="navbar-brand" aria-current="page" href="/index.html">Accueil</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="/presentation.html">Présentation</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="#">Personnages</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/recherche_episodes.html">Volumes</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/contact.html">Contact</a>
                </li>
            </ul>
    </div>
    </nav>
    `
})

const volumArray = ["images/volume 1.png", "images/volume 2.png", "images/volume 3.png", "images/volume 4.png", "images/volume 5.png", "images/volume 6.png", "images/volume 7.png", "images/volume 8.png", "images/volume 9.png", "images/volume 10.png", "images/volume 11.png", "images/volume 12.png"];

let inputVolum = document.querySelector("#InputVolum");

let index = 0;


inputVolum.addEventListener("input", e => {
    let input = e.target.value;
    console.log(input);
    index = Number(input) - 1;
    // const dest = document.querySelector('section.img-volume')
    const dest = document.querySelector('div#chapter')

    const value = volumArray[index]
    dest.innerHTML = `<a href="${value}"><img src="${value}"></img></a>`
})

inputVolum.addEventListener('click', _ => {
    inputVolum.value = "";
})

// function makeImage() {
//     const img = document.createElement('img');
//     img.src = volumArray[index];
//     console.log(index);
//     document.getElementById('content').appendChild(img);
// }




