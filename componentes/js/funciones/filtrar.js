export const filtrarCategory = (array, category) =>{
    if(category === 'All'){
        return array;
    } else {
        let filtro = array.filter(res => res.category === category);
        return filtro;
    }
}