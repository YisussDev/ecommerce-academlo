import { cargarDatos } from './funciones/cargarCategorias.js';
import { items } from './database/database.js';
import { headerScroll } from './funciones/scroll.js';
import { cargarBotones } from './funciones/cargarBotones.js';
import { configUsuario } from './funciones/configUsuario.js';
import { cerrarLoader } from './funciones/loader.js';

document.addEventListener("DOMContentLoaded", ()=>{
	configUsuario();
	cargarBotones();
	headerScroll();
	cargarDatos(items);
	cerrarLoader();
});


