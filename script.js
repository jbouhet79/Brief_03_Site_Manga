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

let inputVolum = document.querySelector("#InputVolum");

inputVolum.addEventListener("input", e => {
    let input = e.target.value;
    console.log(input);
})

