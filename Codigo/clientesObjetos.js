document.querySelector('#btnSaveDate'). addEventListener('click', saveValues);
document.querySelector('#btnDeleteDate'). addEventListener('click', borrartabla);
//imprimirTabla();



//function imprimirTabla(){
    //var list = getRegistrosList(),
    //tbody =  document.querySelector('#prodTable tbody');
    //tbody.innerHTML = '';

    //for(var i = 0 ; i < list.length; i++)
    //{
    // aqui los nombre tienen que ser iguales a los que fueron definidos en el otro archivo para asi poder imprimir en pantalla los datos.

       // var row = tbody.insertRow(i),
       // codigoCell = row.insertCell(0),
       // nombreprodCell = row.insertCell(1),
       //precioCell = row.insertCell(2),
        //existenciaCell = row.insertCell(3),
       // newDeleteCell = row.insertCell(4);
        
        //codigoCell.innerHTML =  list[i].RFC;
        //nombreprodCell.innerHTML =  list[i].RazonS;
        //precioCell.innerHTML =  list[i].Email;
        //existenciaCell.innerHTML =  list[i].Direccion;

        //aqui declaramos y creamos el boton eliminar y el inputselect
       
        //deleteButton = document.createElement("button")
        //deleteButton.textContent = "Eliminar"
        //newDeleteCell.appendChild(deleteButton)
        //tbody.appendChild(row);
        //el boton radio va ser igual al valor definido en la celda codigo
        
        //deleteButton.addEventListener("click", (event) =>{
        //var inputSelect=`${event.path[2].childNodes[0].innerHTML}`
        //alert("Se eliminara la seccion");
    //target es la parte del padre para imprimir en consola eliminar, en este caso el padre es td y tr
        //event.target.parentNode.parentNode.remove();
        //deleteElementrow(inputSelect);
      //  })
    //}
//};