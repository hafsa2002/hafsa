let jewelry = document.querySelector('#jewelry-btn');
let navbar = document.querySelector('.header .flex .navbar');

jewelry.onclick = () =>{
    jewelry.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
    jewelry.classList.remove('fa-times');
   navbar.classList.remove('active');
}