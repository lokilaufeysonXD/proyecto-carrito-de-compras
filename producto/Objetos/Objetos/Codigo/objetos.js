document.querySelector('#btnSaveDate'). addEventListener('click', saveDate);
printProductTable();


function saveDate(){
    var codigo = document.querySelector('#txtCod').value,
        nombreprod = document.querySelector('#txtNP').value,
        precio = document.querySelector('#txtPrice').value;
        

        addDateToSystem(codigo, nombreprod, precio );      
        printProductTable();

}


function printProductTable(){
    var list = getRegistrosList(),
    tbody =  document.querySelector('#prodTable tbody');

    tbody.innerHTML = '';

// aqui los nombre tienen que ser iguales a los que fueron definidos en el otro archivo para asi poder imprimir en pantalla los datos.
    for(var i = 0 ; i < list.length; i++){
    var row = tbody.insertRow(i),
     codigoCell = row.insertCell(0),
        nombreprodCell = row.insertCell(1),
        precioCell = row.insertCell(2),
        
        
        //esta seccion es para borrar se inserta una nueva celda
        
        newDeleteCell = row.insertCell(3);

    codigoCell.innerHTML =  list[i].codigo;
    nombreprodCell.innerHTML =  list[i].nombreprod;
    precioCell.innerHTML =  list[i].precio;
    

    //aqui declaramos y creamos el boton anadir
    
    deleteButton = document.createElement("button")
    deleteButton.textContent = "anadir a carrito"
    newDeleteCell.appendChild(deleteButton)
    deleteButton.addEventListener("click", (event) =>{
        var inputSelect=`${event.path[2].childNodes[0].innerHTML}`
        
//target es la parte del padre para imprimir en consola eliminar, en este caso el padre es td y tr
        addtocart(inputSelect);
        
    })   
    }
}