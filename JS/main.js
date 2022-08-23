//SECTOR DEPOSITO
let carrito=[];

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    //agrego una fila nueva a la tabla body
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.modelo}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    alert("Producto: "+producto.nombre+" agregado al carrito!");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//FUNCIONALIDADES DEL DEPOSITO//

function inventario(){
for (let i=0;i<deposito.length; i++){
    deposito[i].show();}}

function agregarProduct(){
    deposito.push (new Producto(
        prompt("Nombre de producto: ej notebook"),
        prompt("modelo de producto"),
        prompt("PRECIO"),
        prompt("CANTIDAD")
    ))
};

function consultar(deposito, Producto){
    const item=deposito.find((xd)=>xd.modelo==Producto);
    if (item==undefined){alert('No encuentro ningun producto con ese nombre')}
    else {console.log(item)}
};

function catalogo(){
    const catalog=deposito.map((Producto)=>{
        return {
            nombre: Producto.tipo+''+Producto.modelo, 
            precio: Producto.precio,
            conIva: (Producto.precio*1.21)
                }
        });
        console.table(catalog);
}

function buy(deposito, Producto){
    const produc=deposito.find(xd=>xd.modelo==Producto);
    if (produc==undefined){alert('No encuentro ningun producto con ese nombre')}
    else {alert("Procesando su pedido de "+produc.tipo+" "+produc.modelo);produc.vender();}
};
////// FIN FUNCIONALIDADES DEPOSITO///

////// CATALOGO/////

///Cards
function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";
    botonAgregar.id="btn"+producto.id;

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.modelo}</h5>
        <p>$ ${producto.precio}</p>
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

    //Contenedor Card
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);
  
    return contenedorCarta;

}
/// dibujar catalogo
function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    deposito.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    )
    deposito.forEach(producto => {
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
            agregarAlCarrito(producto);
        });
    });
}


// FUNCION PRINCIPAL
dibujarCatalogoProductos();



////ADMIN BOTON

let adminPassword="";
let miBotonAdmin=document.getElementById ("botonAdmin")
miBotonAdmin.addEventListener ("click", ingresoAdmin)
function ingresoAdmin () {
    adminPassword=prompt("Ïngrese clave de admin (la clave es 1234)")
    if (adminPassword==1234) {opciones(), dibujarCatalogoProductos();}
    else {alert("Not admin")}
}

//

////// CARRITO


function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    //agrego una fila nueva a la tabla body
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.modelo}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    alert("Producto: "+producto.modelo+" agregado al carrito!");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
