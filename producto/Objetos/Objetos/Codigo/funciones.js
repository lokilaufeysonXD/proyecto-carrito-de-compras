//Primera parte 

const contenedorCarrito = document.querySelector('#carritoprod');
const contenedorCarritototales = document.querySelector('#carritototales');
const contenedorCarritoclientes = document.querySelector('#carritoclientes');
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const comprarCarritoBtn = document.querySelector('#comprar-carrito');
const contenedorSelectClientes = document.querySelector('#SelectClientes');
var optionSelected= document.querySelector('#SelectClientes');
var registrosList = [];
var carritoArray=[];
var carritoCompras = [];
var clienteArray=[];


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
    
    console.log(storedList);
}
function localStorageclienteList(plist){
    
    
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
        
            <th>Subtotal: ${suma}</th>
            <th> IVA: ${sumiva}</th>
            <th>Total: ${total}</th>
            
            
        `;
    contenedorCarritototales.appendChild(row2);



    storedList = JSON.parse(localStorage.getItem('datosClientes'));
    storedList.forEach(element => {
        var i=0;
        i++;
        
        const row3 = document.createElement('option');
        row3.innerHTML = 
        `
        <option value="${i}">${element.RFC}</option> 
       
        `;       
        contenedorSelectClientes.appendChild(row3);
        
    });
    
    
    optionSelected.addEventListener('change', function(){
        while(contenedorCarritoclientes.firstChild){    
            contenedorCarritoclientes.removeChild(contenedorCarritoclientes.firstChild);
        }
    
    var valorRFC = this.value;

    storedList = JSON.parse(localStorage.getItem('datosClientes'));
    clienteArray= storedList.filter(element => element.RFC === valorRFC);   
    localStorage.setItem('ClientesSelec',JSON.stringify(clienteArray))
    console.log(clienteArray[0]);

    const row4 = document.createElement('tr')
    row4.innerHTML = 
    `<th>RFC: ${clienteArray[0].RFC}</th>
    <th> Razon Social: ${clienteArray[0].RazonS}</th>
    <th> Email: ${clienteArray[0].Email}</th>
    <th>Direccion: ${clienteArray[0].Direccion}</th>`;
    contenedorCarritoclientes.appendChild(row4);
    
    
})
    
    localStorageCarritoList(carritoArray);
    
}
function limpiarHTML(){
    while(contenedorCarrito.firstChild){    
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    while(contenedorCarritototales.firstChild){    
        contenedorCarritototales.removeChild(contenedorCarritototales.firstChild);
    }
    while(contenedorCarritoclientes.firstChild){    
        contenedorCarritoclientes.removeChild(contenedorCarritoclientes.firstChild);
    }
    while(contenedorSelectClientes.firstChild){    
        contenedorSelectClientes.removeChild(contenedorSelectClientes.firstChild);
    }
}

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        carritoArray = carritoArray.filter(element => element.codigo !== cursoId);
        mostrarCarrito(carritoArray);
    }
}

