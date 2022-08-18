import { cerrarSidebar } from './cerrarSidebar.js';
import { filtrarCategory } from './filtrar.js';
import { items } from '../database/database.js';
import { cargarDatos } from './cargarCategorias.js';


export const cargarBotones = () => {
    const listaBotones = document.querySelectorAll('.producto_item');
    const botonesSidebar = document.querySelectorAll('.link_sidebar');
    const botonTheme = document.querySelector('#theme-button');
    const body = document.querySelector('body');
    const accionadorSidedar = document.querySelector('#accionador_sidebar');
    const cerrar_Sidedar = document.querySelector('#cerrar_sidebar');
    const carritoBoton = document.querySelector('#carrito_boton');
    const cerrarCarrito = document.querySelector('#cerrar_carrito');
    
    botonTheme.addEventListener('click', ()=>{
            let opcion = botonTheme.getAttribute('theme');
            body.classList.toggle('darktheme')
            if(opcion === 'dark'){
                botonTheme.setAttribute('theme', 'white');
                botonTheme.classList.remove('bx-sun')
                botonTheme.classList.add('bx-moon')
                localStorage.setItem('config', 'white')
            }
            else if(opcion === 'white'){
                botonTheme.setAttribute('theme', 'dark');
                botonTheme.classList.remove('bx-moon')
                botonTheme.classList.add('bx-sun')
                localStorage.setItem('config', 'dark')
            }
    });
    accionadorSidedar.addEventListener('click', () => {
        let barra = document.querySelector('#barraNavegacion_sidebar');
        barra.classList.add('mostrar_sidebar')
    });
    cerrar_Sidedar.addEventListener('click', () => {
        cerrarSidebar();
    });
    carritoBoton.addEventListener('click', () => {
        let carrito = document.querySelector('#carrito');
        carrito.classList.add('mostrar_carrito')
    });
    cerrarCarrito.addEventListener('click', () => {
        let carrito = document.querySelector('#carrito');
        carrito.classList.remove('mostrar_carrito')
    });
    botonesSidebar[0].addEventListener('click', ()=>{
        cerrarSidebar();
        botonesSidebar[0].classList.add('link_activo')
        botonesSidebar[1].classList.remove('link_activo')
    });
    botonesSidebar[1].addEventListener('click', ()=>{
        cerrarSidebar();
        botonesSidebar[1].classList.add('link_activo')
        botonesSidebar[0].classList.remove('link_activo')
    });
    for (const boton of listaBotones) {
        boton.addEventListener('click', ()=>{
              let opcion = boton.getAttribute('filtrar');
              let respuesta = filtrarCategory(items, opcion);
              cargarDatos(respuesta)
        });
    };
}