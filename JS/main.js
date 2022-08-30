///


///
let carrito = [];

let contenedorFooterCarrito=document.getElementById("grantotal");
 
const contenedorCarritoCompras = document.getElementById('tablabody');

const contenedorProductos = document.getElementById('contenedor-productos');

///
dibujarCarrito();
dibujarCatalogoProductos();

  
//
function dibujarCarrito() {

    let sumaCarrito = 0;
    contenedorCarritoCompras.innerHTML = "";

    carrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.modelo}</td>
                <td><img src="${elemento.producto.foto}" heigth="100%" width="100%"></td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>$ ${elemento.producto.precio}</td>
                <td>$ ${elemento.producto.precio*elemento.cantidad}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

            sumaCarrito+=elemento.cantidad*elemento.producto.precio;

            //eventos de carrito
            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            
            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

            let borrarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);

            borrarProducto.addEventListener("click", (e) => {
                removerProductoCarrito(elemento);
                dibujarCarrito();
            });

        }
    );
////TERNARIO
    (carrito.length==0)?
    contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`: 
    contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total de la compra: $${sumaCarrito}</th>`;
    

}

function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = carrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    carrito.length = 0;

    elementosAMantener.forEach((elemento) => carrito.push(elemento));
}

function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.modelo}</h5>
        <p>$ ${producto.precio} USD</p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.modelo;

    //Card
    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    ////Contenedor
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);

    botonAgregar.onclick = () => {

        let elementoExistente = carrito.find((elemento) => elemento.producto.id == producto.id);

        if(elementoExistente) {
            elementoExistente.cantidad+=1;
        } else {
            let elementoCarrito = new itemCarro(producto, 1);
            carrito.push(elementoCarrito);
        }

        dibujarCarrito();
        swal({
            icon: "success",
            text:"Producto cargado al carrito",
            title:"Operación Exitosa!"
          });
    } 
    
    return contenedorCarta;

}

function dibujarCatalogoProductos() {
    contenedorProductos.innerHTML = "";

    deposito.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            contenedorProductos.append(contenedorCarta);
        }
    );

}


////
