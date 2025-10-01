let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

// Función que oculta el menú cuando se selecciona una opción
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");

    // Technical Skills
    habilidades[0].classList.add("r");
    habilidades[1].classList.add("python");
    habilidades[2].classList.add("estadistica");
    habilidades[3].classList.add("matematicas");
    habilidades[4].classList.add("machinelearning");
    habilidades[5].classList.add("bioinformatica");
    habilidades[6].classList.add("htmlcss");

    // Professional Skills
    habilidades[7].classList.add("comunicacion");
    habilidades[8].classList.add("trabajo");
    habilidades[9].classList.add("adaptabilidad");
    habilidades[10].classList.add("resolucion");
    habilidades[11].classList.add("organizacion");
    habilidades[12].classList.add("creatividad");
    habilidades[13].classList.add("empatia");
  }
}

// Scroll para animación de habilidades + auto-hide navbar
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  efectoHabilidades();

  let currentScrollPos = window.pageYOffset;
  const header = document.querySelector(".contenedor-header");

  if (prevScrollPos > currentScrollPos) {
    // Scroll hacia arriba → mostramos la barra
    header.style.transform = "translateY(0)";
  } else {
    // Scroll hacia abajo → ocultamos la barra
    header.style.transform = "translateY(-120%)";
  }

  prevScrollPos = currentScrollPos;
};
