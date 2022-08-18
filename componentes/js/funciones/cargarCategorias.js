import { añadirCarrito } from "./añadirCarrito.js";

export const cargarDatos = (datos) => {
    let direccion = document.getElementById('productos_contenedor-tarjetas')
    let html = ``;
    datos.map(res => {
        html += `
        <div class="tarjetas">
            <div class="tarjetas_imagen">
              <img src=${res.image} alt="">
            </div>
            <div class="tarjetas_datos">
              <h2 class="tarjetas_datos-precios">
                $${res.price}.00
                <span class="tarjetas_datos-stock">| stock: ${res.quantity}</span>
              </h2>
              <h3 class="tarjetas_datos-nombre">${res.name}</h3>
              <button class='tarjetas_datos-boton' data-id=${res.id}>
              <i class="bx bx-plus"></i>
              </button>
            </div>
        </div>
        `
    })

    direccion.innerHTML = html;

    const productsButton = document.querySelectorAll('.tarjetas_datos-boton')

    productsButton.forEach(button => {
    button.addEventListener('click', () => {
      let id = parseInt(button.getAttribute('data-id'))
      añadirCarrito(id);
    })
    })

}