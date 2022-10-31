// abrir en paginas nuevas
const target= "_blank"

// links proyectos

//pagina web
const paginaWeb_link = "https://babyguy.github.io/Landinfg_web_serviMoviles/"
const paginaWeb = document.getElementById('pagweb');

// eventos proyectos

//pagina web
paginaWeb.addEventListener('click',()=>{
    paginaWeb.href= paginaWeb_link;
    paginaWeb.target = target
});


//iconos de contacto
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const telegram = document.getElementById('telegram');
const whatsapp = document.getElementById('whatsapp');
const github = document.getElementById('github');
// links contacto
const github_link = "https://github.com/babyguy";
const facebook_link = "https://www.facebook.com/HaaRiiTooLdd/"
const instagram_link = "https://www.instagram.com/babyguy13/"
const telegram_link = "https://t.me/babyguy13"
const whatsapp_link = "https://walink.co/5e8ada"


// eventos contacto
// github
github.addEventListener('click',()=>{
    github.href= github_link;
    github.target = target;
});
// facebook
facebook.addEventListener('click',()=>{
    facebook.target = target;
    facebook.href = facebook_link;
});
// instagram
instagram.addEventListener('click',()=>{
    instagram.target = target;
    instagram.href = instagram_link
})
// telegram
telegram.addEventListener('click',()=>{
    telegram.target = target;
    telegram.href = telegram_link
})
// whatsapp
whatsapp.addEventListener('click',()=>{
    whatsapp.target = target;
    whatsapp.href = whatsapp_link
})