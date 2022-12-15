const caja = document.querySelector('.gris');
const img = document.querySelectorAll(".img");
const imgl = document.querySelector('.grande');


img.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        caja.classList.toggle("show");
        imgl.classList.toggle("show-image");
        imgl.src= imagen.getAttribute('src');
    });
})



window.addEventListener('click', e=>{
   if(caja.classList.contains("show") && e.target == caja){
        caja.classList.toggle("show");
        imgl.classList.toggle("show-image");   
    }
});

const aparecerImagen = (imagen)=>{
    aparecerImagen(imagen.getAttribute('src'));
}

