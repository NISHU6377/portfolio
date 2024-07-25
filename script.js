let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a ');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.applay(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href'= + id + ']').classList.add('active');
            })
        }
    });
}

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx bx-x');
navbar.classList.remove('active');