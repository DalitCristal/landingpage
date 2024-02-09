// Datos de los proyectos
const proyectos = [
  {
    id: "trabajo-1",
    imagen: "assets/can-habilis.jpg",
    nombre: "Can Habilis",
    descripcion:
      "Creación de una página web para criadero de ovejeros alemanes Can Habilis.",
  },
  {
    id: "trabajo-2",
    imagen: "assets/pla-fal.jpeg",
    nombre: "Membranas Pla-Fal",
    descripcion: "Creación de una página web institucional.",
  },
  {
    id: "trabajo-3",
    imagen: "assets/viking-group-polaris.jpg",
    nombre: "Viking Group",
    descripcion:
      "Creación de una página web institucional para una empresa de ventas de vehículos.",
  },
  {
    id: "trabajo-4",
    imagen: "assets/Project-1.jpg",
    nombre: "Color Game",
    descripcion:
      "Las reglas del juego son simples. El programa mostrará un código RGB y opciones posibles para que el usuario adivine cuál es la correcta. El usuario podrá jugar en dos niveles: el fácil (con 3 colores) o el difícil (con 6). En cualquier caso, el juego le permitirá hacer click en todas las opciones hasta que dé con lacorrecta.",
  },
  {
    id: "trabajo-5",
    imagen: "assets/Project-2.jpg",
    nombre: "To do list",
    descripcion:
      "En este proyecto aplicaremos todos los conceptos aprendidos hasta el momento a través de la creación de una lista de tareas (To Do List ). Comenzaremos generando la estructura con el HTML, luego agregaremos estilos con CSS y, por último, escribiremos la lógica de la aplicación web con JavaScript.",
  },
  {
    id: "trabajo-6",
    imagen: "assets/Project-3.png",
    nombre: "Weather Channel",
    descripcion:
      "En este proyecto armaremos un sitio para mostrar las condiciones meteorológicas de cada ciudad. Para eso, interactuaremos con la API del Weather Channel.",
  },
];

function generarTarjetas() {
  const container = document.querySelector(".portfolio .container");
  proyectos.forEach((proyecto) => {
    const cardHTML = `
      <a href="#${proyecto.id}" class="portfolio-card">
        <img src="${proyecto.imagen}" alt="${proyecto.nombre}" />
        <aside class="portfolio-card-info">
          <div>
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
          </div>
        </aside>
      </a>
    `;
    container.innerHTML += cardHTML;
  });
}

// Llamada a la función para generar las tarjetas al cargar la página
window.addEventListener("load", generarTarjetas);
