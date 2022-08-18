import { cargaCarrito } from "./cargaCarrito.js";
import { carritoItems } from "../database/database.js";
import { estadoTotal } from "./añadirCarrito.js";

const botonTheme = document.querySelector('#theme-button');
const body = document.querySelector('body');

export const configUsuario = () => {
    let config = localStorage.getItem('config');
    console.log(config)
    if(config === 'dark'){
        body.classList.add('darktheme')
        botonTheme.setAttribute('theme', 'dark');
        botonTheme.classList.remove('bx-moon')
        botonTheme.classList.add('bx-sun')
    }
    if(config === 'white'){
        body.classList.remove('darktheme')
        botonTheme.setAttribute('theme', 'white');
        botonTheme.classList.remove('bx-sun')
        botonTheme.classList.add('bx-moon')
    }
    let data = JSON.parse(localStorage.getItem('data'));
    if(data){
        carritoItems.push(...data)
        cargaCarrito();
        estadoTotal(carritoItems);
    }
}