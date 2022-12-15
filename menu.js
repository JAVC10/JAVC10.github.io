const boton = document.querySelector(".boton");
const menu = document.querySelector(".menu");
const body = document.querySelector('.background');


boton.addEventListener("click",()=>{
    menu.classList.toggle("bajar");
});

window.addEventListener('click', e=>{
    if(menu.classList.contains("bajar") && e.target != menu && e.target!=boton){
         menu.classList.toggle("bajar"); 
     }
 });


