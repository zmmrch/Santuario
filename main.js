// Funcionalidad para el slideshow
let slideIndex = 1;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000);
}

// Funcionalidad para mover slides
let slideIndex1 = 1;
moveSlides(slideIndex1);

function plusSlides(n) {
    moveSlides(slideIndex1 += n);
}

function currentSlide(n) {
    moveSlides(slideIndex1 = n);
}

function moveSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
}

// Nuevas funciones agregadas

function sacramentos() {
    let v = document.getElementById("imagenPrincipal");
    v.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER VIDA DE FE 1967X312.jpg')";
    v.style.transition = '.35s ease-in-out'
}

function bautismo() {
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER BAUTISMO 1967X312.jpg')";
}

function Comunion() {
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER PRIMERA COMUNION 1967X312.jpg')";
}

function Confirmacion() {
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER CONFIRMACION 1967X312.jpg')";
}

function Matrimonio() {
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER MATRIMONIO 1967X312.jpg')";
}

function Uncion() {
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER UNCION DE LOS ENFERMOS 1967X312.jpg')";
}

function servsac() {
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER SERVICIO SACERDOTAL 1967X312.jpg')";
}

function ciner() {
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage = "url('../imagenes/vida_de_fe/BANNER CINERARIO 1967X312.jpg')";
}

function gruposPastorales(){
    let y = document.getElementById("imagenPrincipal");
    y.style.backgroundImage =
    "url('../imagenes/grupos/GRUPOS PASTORALES 1967X312.jpg')"
}  

function contacto() {
    let y = document.getElementById("imagenPrincipalHorarios");
    y.style.backgroundImage =
        "url('../imagenes/horarios/CONTACTO 1967X312.jpg')";
}

function horarios() {
    let y = document.getElementById("imagenPrincipalHorarios");
    y.style.backgroundImage =
        "url('../imagenes/horarios/HORARIO 1967X312.jpg')";
}

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

function openPage2(pageName, elmnt, color) {
    var i, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent2.length; i++) {
        tabcontent2[i].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablink2");
    for (i = 0; i < tablinks2.length; i++) {
        tablinks2[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes inicializar cualquier funcionalidad que necesite que el DOM esté listo
});