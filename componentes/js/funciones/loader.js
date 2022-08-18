const loader = document.getElementById('loader');

export const cerrarLoader = () => {
    setTimeout(()=>{
        loader.style.display = 'none';
    }, 3000)
}