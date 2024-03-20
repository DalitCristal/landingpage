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
      "Creación de una página web institucional para empresa de ventas de vehículos.",
  },
  {
    id: "trabajo-4",
    imagen: "assets/en-destino-viaje-turismo-receptivo-mendoza.jpg",
    nombre: "Endestino Viajes",
    descripcion: "Página web institucional para empresa de turismo de Mendoza.",
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
