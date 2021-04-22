document.getElementById("imprimir").addEventListener('click', printFactura)

//Aqui se realiza la funcion del ticket

function printFactura(){
var ListaCarrito= JSON.parse(localStorage.getItem('localRegistrosCarritoList'));
var ListaClientes =JSON.parse(localStorage.getItem('ClientesSelec'));
console.log(ListaCarrito,ListaClientes);
const newPay = window.open('','','width=500 height=300'); 
newPay.document.write(`<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Factura</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
  
  <link rel="stylesheet" href="imprimir/imprimircss/style.css">

</head>
<body>
<!-- partial:index.partial.html -->
</div><div id="app" class="col-11">

    <h2>Ticket de compra</h2>

    <div class="row my-3">
      <div class="col-10">
        <p>Proyecto de carrito de compras</p>
        
      </div>
      <div class="col-2">
        <img src="" />
      </div>
    </div>
  
    <hr />
  
    <div class="row fact-info mt-3">
      <div class="col-3">
        <h5>RFC</h5>
        <p id="ejemplo"></p>
      </div>
      <div class="col-3">
        <h5>Razon Social</h5>
        <p id="idPrint"></p>
      </div>
      <div class="col-3">
        <h5>Email</h5>
        <h5></h5>
      </div>
      <div class="col-3">
      <h5>Direccion Fiscal</h5>
        <p id=""></p>
      </div>
    </div>
    

    <div class="row fact-info mt-3">
      <div class="col-3">
        <h5>${ListaClientes[0].RFC}</h5>
        <p id="ejemplo"></p>
      </div>
      <div class="col-3">
        <h5>${ListaClientes[0].RazonS}</h5>
        <p id="idPrint"></p>
      </div>
      <div class="col-3">
        <h5>${ListaClientes[0].Email}</h5>
        <h5></h5>
      </div>
      <div class="col-3">
      <h5>${ListaClientes[0].Direccion}</h5>
        <p id=""></p>
      </div>
    </div>


  
    <div class="row my-5">
      <table class="table table-borderless factura">
        <thead>
          <tr>
            <th>Codigo.</th>
            <th>Nombre del Producto</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>${ListaCarrito[0].codigo}</td>
            
            <td>${ListaCarrito[0].nombreprod}</td>
            <td>${ListaCarrito[0].precio}</td>
          </tr>
          <tr>
          <td>${ListaCarrito[1].codigo}</td>
          
          <td>${ListaCarrito[1].nombreprod}</td>
          <td>${ListaCarrito[1].precio}</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Total Factura</th>
            <th>****</th>
          </tr>
        </tfoot>
      </table>
    </div>
  
    <div class="cond row">
      <div class="col-12 mt-3">
        <h4>Gracias por su compra XD!!!</h4>
        
      </div>
    </div>
</div>
<!-- partial -->
        <script src="Objetos/Codigo/funcionesPrint.js"> </script>
        <script src="OBjetos/Codigo/funciones.js"></script>
        <script src="Objetos/Codigo/objetos.js"> </script>  
</body>
</html>`)

}
