import { carritoItems } from '../database/database.js';
import { añadirCarrito, reducirCarrito, eliminarCarrito } from './añadirCarrito.js';
import { estadoTotal } from './añadirCarrito.js';

export const cargaCarrito = () => {
    let contenedor = document.querySelector('#contenedor_carrito');
    if(carritoItems.length === 0){
      localStorage.setItem('data', JSON.stringify([]));
        return contenedor.innerHTML= `
        <div class="carrito_vacio">
          <img src="componentes/images/empty-cart.png" alt="empty cart">
          <h2>Your cart is empty</h2>
          <p>You can add items to your cart by clicking on the "<i class="bx bx-plus"></i>" button on the product page.</p>
        </div>
        `;
    }
    else if(carritoItems.length > 0){
        let html = ''
        carritoItems.map(res => {
            html += `
            <div class="carrito_card">
          <div class="carrito_caja">
            <img src=${res.image} alt="Hoodies" class="cart__img">
          </div>
          <div class="carrito_detalles">
            <h3 class="carrito_titulo">${res.name}</h3>
            <span class="carrito_stock">Stock: ${res.quantity} | <span class="carrito_precio">$ ${res.price} </span></span>
            <span class="carrito_subtotal">
              Subtotal: $ ${res.added * res.price}
            </span>
  
            <div class="carrito_amount">
              <div class="carrito_amount-contenido">
                <span class="carrito_amount-caja minus" data-id="${res.id}">
                <i class="bx bx-minus"></i>
                </span>
  
                <span class="cart__amount-number">${res.added} units</span>
  
                <span class="carrito_amount-caja plus" data-id="${res.id}">
                <i class="bx bx-plus"></i>
                </span>
              </div>
  
              <i class="bx bx-trash-alt carrito_delete" data-id="${res.id}"></i>
            </div>
          </div>
        </div>`;
        });
        contenedor.innerHTML = html;
    }

    const reducir = document.querySelectorAll('.minus')
    const aumentar = document.querySelectorAll('.plus')
    const eliminar = document.querySelectorAll('.carrito_delete')

    reducir.forEach(button => {
      button.addEventListener('click', () => {
        let id = parseInt(button.getAttribute('data-id'))
        reducirCarrito(id);
        })
    })
    aumentar.forEach(button => {
        button.addEventListener('click', () => {
          let id = parseInt(button.getAttribute('data-id'))
          añadirCarrito(id);
      })
    })
    eliminar.forEach(button => {
      button.addEventListener('click', () => {
        let id = parseInt(button.getAttribute('data-id'))
        eliminarCarrito(id);
    })
    })

    estadoTotal(carritoItems);
    localStorage.setItem('data', JSON.stringify(carritoItems));
}