const boton2 = document.querySelector(".boton2");
const menu2 = document.querySelector(".menu2");
const background = document.querySelector(".background");
const fondo = document.querySelectorAll('.fondo');


boton2.addEventListener("click",()=>{
    menu2.classList.toggle("bajo");
});

window.addEventListener('click', e=>{
    if(menu2.classList.contains("bajo") && e.target!=boton2){
         menu2.classList.toggle("bajo"); 
     }
 });

fondo.forEach(fondo1=>{
    fondo1.addEventListener('click',()=>{
        background.src= fondo1.getAttribute('src');
    });
});