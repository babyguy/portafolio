// abrir en paginas nuevas
const target= "_blank"

// links proyectos
const paginaWeb_link = "https://babyguy.github.io/Landinfg_web_serviMoviles/"
const paginaWeb = document.getElementById('pagweb');
// eventos proyectos
paginaWeb.addEventListener('click',()=>{
    paginaWeb.href= paginaWeb_link;
    paginaWeb.target = target
});


// links contacto
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const telegram = document.getElementById('telegram');
const whatsapp = document.getElementById('whatsapp');
const github = document.getElementById('github');
const github_link = "https://github.com/babyguy";

// eventos contacto
github.addEventListener('click',()=>{
    github.href= github_link;
    github.target = target
});
