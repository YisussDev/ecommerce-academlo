import { carritoItems, items } from "../database/database.js"
import { cargaCarrito } from "./cargaCarrito.js"

export const estadoTotal = (datos) => {
    let precioTotal = document.getElementById('precio_total')
    let itemTotal = document.getElementById('item_total')
    let contadorTotal = document.getElementById('carrito_contador')
    const resultPrecio = datos.reduce((previousValue, currentValue) => previousValue + currentValue.price*currentValue.added, 0);
    const resultItem = datos.reduce((previousValue, currentValue) => previousValue + currentValue.added, 0);
    precioTotal.innerHTML= `$${resultPrecio}.00`
    itemTotal.innerHTML= `${resultItem}`
    contadorTotal.innerHTML= `${resultItem}`
}

export const añadirCarrito = (ref) => {
    let condicion=false;
    if(carritoItems.length > 0){
        carritoItems.forEach((respuesta) => {
            if(respuesta.id === ref){
                if(respuesta.added < respuesta.quantity){
                    respuesta.added+=1;
                }else{
                    alert('No hay stock')
                }
                condicion=true;
            }
        })
    }
    if(!condicion){
        carritoItems.push(items[ref-1])
    }
    cargaCarrito();
    estadoTotal(carritoItems);
}
export const reducirCarrito = (ref) => {
        carritoItems.forEach((respuesta) => {
            if(respuesta.id === ref){
                if(respuesta.added > 1){
                    respuesta.added-=1;
                }else{
                    
                }
            }
        })
    cargaCarrito();
    estadoTotal(carritoItems);
}
export const eliminarCarrito = (ref) => {
    carritoItems.forEach((respuesta, ind) => {
        if(respuesta.id === ref){
            respuesta.added = 1;
            carritoItems.splice(ind,1);
        }
    })
    cargaCarrito();
    estadoTotal(carritoItems);
}