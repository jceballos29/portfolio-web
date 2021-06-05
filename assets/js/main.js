const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav-menu")

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

// ///////////////////////////////////////////////////////////////7

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal>= desplazamientoActual) {
        document.getElementById('nav-bar').style.top = '0';
    }
    else {
        document.getElementById('nav-bar').style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual;
}

