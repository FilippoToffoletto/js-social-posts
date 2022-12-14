// BANCA DATI
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Bene ma non benissimo Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Bella la foto qui sotto è Parigi.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Questo è palesemente un libro aperto.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/* Descrizione**
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Utilizzando la base dati fornita e prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
Formattare le date in formato italiano (gg/mm/aaaa)----------------> OK
****BONUS**
1
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. ----------------> OK
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
2
Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF). ----------------> OK
3
Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. */

const container = document.getElementById('container');


// inizializzo il tutto all'apertura della pagina
init();


function init (){
    generatePosts();
};

// funzione che  aggiuge i post in sequenza
function generatePosts(){
    posts.forEach((post) => {
        container.innerHTML += createDom(post);
    })
};


// funzione crea i posts dinamicamente
function createDom(post){
    const {id, content, media, author, likes,  created} = post;
    const {name, image} = author;
    const profilePhoto = generatePhoto(author);
    let card =`
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${profilePhoto}                  
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${dateEu(created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="${media}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button"
                        onclick="likeBtn(this)"
                        href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `

return card;
};

/* 
 inverto la data:
  1 - split la stringa al separatore del otterenere un array di stringhe
  2 - reverse (inverto) l'array
  3 - join creo una stringa da un array mettendo il separatore      
*/
function dateEu(changeDate){
    return changeDate.split('-').reverse().join('-');
}


// genero la foto profilo se nel valore di author.name è null
function generatePhoto(author){
    const splitName = author.name.split('');
    let profilePhoto;

    // creo la condizione affichè venga creata  l'immagine profilo se è null
    if(author.image === null){
        profilePhoto = `
            <div class="profile-pic-default">
            <span> ${splitName[0][0] + splitName[1][0]}</span>
            </div>
        `
    }else{
        profilePhoto = `<img class="profile-pic" src="${author.image}" alt="${author.name}">`
    }
    return profilePhoto;
}



// funzione per colorare il pulsante mi piace
function likeBtn(btn) {
    btn.classList.toggle("like-button--liked");
  }
