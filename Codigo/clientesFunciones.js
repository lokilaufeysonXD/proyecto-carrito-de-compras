$mylocalStorage = window.localStorage;
var registros=[];
document.querySelector('#btnSaveDate'). addEventListener('click', saveValues);
document.querySelector('#btnDeleteDate'). addEventListener('click', borrartabla);



function saveValues()
{
    var RFC = document.getElementById("txtRFC").value,
        RazonS = document.getElementById("txtRS").value,
        Email = document.getElementById("txtEmail").value,
        Direccion = document.getElementById("txtDF").value;

        crearLocalstorage(RFC, RazonS, Email , Direccion);   
        
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
