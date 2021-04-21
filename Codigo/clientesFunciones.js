$mylocalStorage = window.localStorage;
var registros=[];

function saveValues()
{
    var RFC = document.getElementById("txtRFC").value,
        RazonS = document.getElementById("txtRS").value,
        Email = document.getElementById("txtEmail").value,
        Direccion = document.getElementById("txtDF").value;

        crearLocalstorage(RFC, RazonS, Email , Direccion);   
        //imprimirTabla();   
};

function borrartabla(){
    $mylocalStorage.clear()
    location.reload();
}
  
function crearLocalstorage(RFCC, RazonSC, EmailC, DirC)
{

var infocliente = 
    {
    RFC: RFCC,
    RazonS: RazonSC,
    Email: EmailC,
    Direccion: DirC
    };
console.log( infocliente);
registros.push(infocliente)
llenarlocalstorage(registros);
};
function llenarlocalstorage(registros){
    $mylocalStorage.setItem('datosClientes', JSON.stringify(registros));
    
    
}
function getRegistrosList(){
    var storedList = localStorage.getItem('datosClientes');
        if(storedList == null)
        {
        registros = [];
        }
    else{
        registros =  JSON.parse(storedList); 
        }
    return registros;
}
function deleteElementrow(codedelete){
    let lista= "";
    console.log(codedelete);
    lista = JSON.parse(localStorage.getItem('datosClientes'));
    let indexLista= lista.findIndex(element => element.RFC === codedelete);
    lista.splice(indexLista, 1);
    let listaJSON= JSON.stringify(lista);
    localStorage.setItem('datosClientes', listaJSON);
}