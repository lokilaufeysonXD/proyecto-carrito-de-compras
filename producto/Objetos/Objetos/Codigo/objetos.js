document.querySelector('#btnSaveDate'). addEventListener('click', saveDate);
printProductTable();

function saveDate(){
    var codigo = document.querySelector('#txtCod').value,
        nombreprod = document.querySelector('#txtNP').value,
        precio = document.querySelector('#txtPrice').value,
        existencia = document.querySelector('#txtEXS').value;

        addDateToSystem(codigo, nombreprod, precio , existencia);      
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
        existenciaCell = row.insertCell(3),
        
        //esta seccion es para borrar se inserta una nueva celda
        selectCell = row.insertCell(4),
        newDeleteCell = row.insertCell(5);

    codigoCell.innerHTML =  list[i].codigo;
    nombreprodCell.innerHTML =  list[i].nombreprod;
    precioCell.innerHTML =  list[i].precio;
    existenciaCell.innerHTML =  list[i].existencia;

    //aqui declaramos y creamos el boton eliminar y el inputselect
    var inputSelect = document.createElement('input');
    inputSelect.type = 'radio';
    //el boton radio va ser igual al valor definido en la celda codigo
    
    selectCell.appendChild(inputSelect);
    tbody.appendChild(row);
    inputSelect.value = list[i].codigo;
    deleteButton = document.createElement("button")
    deleteButton.textContent = "Eliminar"
    newDeleteCell.appendChild(deleteButton)
    deleteButton.addEventListener("click", (event) =>{
        alert("Se eliminara la seccion")
//target es la parte del padre para imprimir en consola eliminar, en este caso el padre es td y tr
        event.target.parentNode.parentNode.remove();
        console.log(inputSelect.value);
        deleteElementrow(inputSelect.value);
        
    })
  
   
    }


}