//Primera parte 

var registrosList = [];

function addDateToSystem(pcod, pnomprod, pPrecio, pexas){

var newDate = {

    codigo: pcod,
    nombreprod: pnomprod,
    precio: pPrecio,
    existencia: pexas
    };
console.log( newDate );
registrosList.push( newDate );
localStorageRegistrosList(registrosList);

}
function localStorageRegistrosList(plist){
    localStorage.setItem('localRegistrosList', JSON.stringify(plist));
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
function deleteElementrow(codedelete){
    let lista= "";
    lista = JSON.parse(localStorage.getItem('localRegistrosList'));
    let indexLista= lista.findIndex(element => element.codigo === codedelete);
    lista.splice(indexLista, 1);
    let listaJSON= JSON.stringify(lista);
    localStorage.setItem('localRegistrosList', listaJSON);
}
