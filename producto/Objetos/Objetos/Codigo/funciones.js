//Primera parte 

const contenedorCarrito = document.querySelector('#carritoprod');
const contenedorCarritototales = document.querySelector('#carritototales');
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

var registrosList = [];
var carritoArray=[];
let carritoCompras = [];
vaciarCarritoBtn.addEventListener('click', () => {
    carritoArray = [];
    mostrarCarrito(carritoArray);
    console.log(carritoArray);
    limpiarHTML();
});
carrito.addEventListener('click', eliminarCurso);
function addDateToSystem(pcod, pnomprod, pPrecio, pexas){

var newDate = {

    codigo: pcod,
    nombreprod: pnomprod,
    precio: pPrecio,
    
    };
console.log( newDate );
registrosList.push( newDate );
localStorageRegistrosList(registrosList);

}
function localStorageRegistrosList(plist){
    localStorage.setItem('localRegistrosList', JSON.stringify(plist));
}
function localStorageCarritoList(plist){
    localStorage.setItem('localRegistrosCarritoList', JSON.stringify(plist));
    storedList = JSON.parse(localStorage.getItem('localRegistrosCarritoList'));
    console.log(storedList);
}
function getRegistrosList(){
    var storedList = localStorage.getItem('localRegistrosList');
    
        if(storedList == null){

        registrosList = [];
    }
   else{

    registrosList =  JSON.parse(storedList); 

    }
    return registrosList;
    
}
/*function deleteElementrow(codedelete){
    let lista= "";
    lista = JSON.parse(localStorage.getItem('localRegistrosList'));
    let indexLista= lista.findIndex(element => element.codigo === codedelete);
    lista.splice(indexLista, 1);
    let listaJSON= JSON.stringify(lista);
    localStorage.setItem('localRegistrosList', listaJSON);
}*/
function addtocart(codeadd){
    
    storedList = localStorage.getItem('localRegistrosList');
    let ListArray = JSON.parse(storedList);
    let prodCarrito= ListArray.filter(element => element.codigo === codeadd) || [] ;
    carritoArray.push(prodCarrito[0]);
    if (carritoArray == "" || carritoArray == null  || carritoArray == undefined){
        carritoArray=[];
    }
    
    console.log(carritoArray);
    mostrarCarrito(carritoArray);    
    

}
function mostrarCarrito(carritoArray){
    
    storedList = localStorage.getItem('localRegistrosList');
    ListArray = JSON.parse(storedList);
    //LIMPIAR EL CARRITO DE FORMA LENTA
    //contenedorCarrito.innerHTML = '';

    //LIMPIARLO DE MANERA MÁS EFECTIVA
        limpiarHTML();
        var suma=0;
        var sumiva=0;
        var total=0;
        carritoArray.forEach(element => {
        suma+=parseFloat(element.precio);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${element.codigo}
            </td>

            
            <td>
                ${element.nombreprod}
            </td>

            <td>
                ${element.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${element.codigo}">X</a>
            </td>

        
        `;
        
        contenedorCarrito.appendChild(row);
         sumiva=suma*0.16;
         total=sumiva+suma;
        console.log(suma,sumiva,total);
        
    });
    const row2 = document.createElement('tr');
        row2.innerHTML = `
            <td>
            <th>Subtotal: ${suma}</th>
            <th> IVA: ${sumiva}</th>
            <th>Total: ${total}</th>
            
            
        `;
    contenedorCarritototales.appendChild(row2);
    localStorageCarritoList(carritoArray);
    
}
function limpiarHTML(){
    while(contenedorCarrito.firstChild){    
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    while(contenedorCarritototales.firstChild){    
        contenedorCarritototales.removeChild(contenedorCarritototales.firstChild);
    }
}
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        carritoArray = carritoArray.filter(element => element.codigo !== cursoId);
        mostrarCarrito(carritoArray);
    }
}

