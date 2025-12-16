const cards=document.querySelectorAll('.card');
const ventas=document.querySelector('.ventas');


const reveal=()=>{
const trigger=window.innerHeight*0.85;
cards.forEach(card=>{
const top=card.getBoundingClientRect().top;
if(top<trigger){
card.style.opacity=1;
card.style.transform='translateY(0)';
}
});


const ventasTop=ventas.getBoundingClientRect().top;
if(ventasTop<trigger){
ventas.style.opacity=1;
ventas.style.transform='scale(1)';
}
}


window.addEventListener('scroll',reveal);
reveal();