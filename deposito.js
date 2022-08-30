class Producto{
    constructor (tipo, modelo, precio, cantidad, foto, id){
        this.tipo=tipo.toLowerCase();
        this.modelo=modelo.toUpperCase();
        this.precio=precio;
        this.cantidad=cantidad;
        this.foto=foto;
        this.id=id;
    }
   /* show(){
        console.log(...Producto)
       
    }
    vender(){
        if (this.cantidad>0){this.cantidad=this.cantidad-1;
 alert("Compra procesada con exito!");
console.log("En deposito quedan "+this.cantidad+" unidades de "+this.tipo+" "+this.modelo)}
        else {alert("Al parecer ese producto se agotó");
    }}*/
};


class itemCarro {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

///
const deposito = [];
//
deposito.push(new Producto("Equipos","Notebook ACER", 25000,1, "./imagenes/notebook.png" ,1));
deposito.push(new Producto("Periferico","Mouse", 1000,300, "./imagenes/mouse.png" ,2));
deposito.push(new Producto("Almacenamiento","Pendrive", 800,250, "./imagenes/pendrive.png" ,3));
deposito.push(new Producto("Componentes","Disco", 2500,10, "./imagenes/disco.png" ,4));
deposito.push(new Producto("Almacenamiento","Pendrive", 800,250, "./imagenes/pendrive.png" ,3));



/////FUNCTIONAS DEPOSITO
//// SPREAD
function catalogo(){
    const catalog=deposito.map((Producto)=>{
        return {
            nombre: Producto.tipo+''+Producto.modelo, 
            precio: Producto.precio,
            conIva: (Producto.precio*1.21)
                }
        });
        console.log(...catalog);
}
//////



///Mostrar un ITEM Desestructurando el Array
function ultimoItem(){
let ultimoItem=deposito.length;
console.log(deposito[ultimoItem-1])};

////FUNCIONES DEPOSITO
    
  //////MODO DE ILUMINACIÓN

/// + operador condicional
  let stage=localStorage?.getItem("stage")||(document.body.className="theSun");
  let boton=document.getElementById("stage");
  ///

  boton.onclick=()=>{
      if (stage=="theSun"){
          boton.innerText="El sol"
          stage="stars";
      document.body.className="stars";
      } else{
          boton.innerText="Estrellas"
          stage="theSun";
          document.body.className="theSun";   
      }
  
      localStorage.setItem("stage",stage);
  }
  

  
////
////ADMIN BOTON

let adminPassword="";
let miBotonAdmin=document.getElementById ("botonAdmin")
miBotonAdmin.addEventListener ("click", ingresoAdmin)

function ingresoAdmin () {
   adminPassword=prompt("Ïngrese clave de admin (la clave es 1234)");
   (adminPassword==1234)? modoAdmin(): alert("Not admin")
}

function modoAdmin() {
    let adminSpace=document.getElementById("adminman")
    adminSpace.innerHTML=`
    <button id="botonCatalogo"class="btn btn-danger">Catálogo</button>
    <button id="botonUltimo"class="btn btn-danger">Ultimo item</button>
    <button id="botonAdmin"class="btn btn-danger">Ingresar como admin</button>
    `
    let botonCatalog=document.getElementById("botonCatalogo")
    botonCatalog.onclick=()=>{
        catalogo();
        swal({
            icon: "success",
            text:"Mostrando catálogo..."
          });
    }
    let botonAgreg=document.getElementById("botonUltimo")
    botonAgreg.onclick=()=>{
        ultimoItem();
        swal({
            text:"El ultimo objeto deberia estar en consola",
            title:"Ding Dong"
          });
    }
};