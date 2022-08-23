class Producto{
    constructor (tipo, modelo, precio, cantidad, foto, id){
        this.tipo=tipo.toLowerCase();
        this.modelo=modelo.toUpperCase();
        this.precio=precio;
        this.cantidad=cantidad;
        this.foto=foto;
        this.id=id;
    }
    show(){
        if (this.cantidad>0) {console.log("hay un stock de "+this.cantidad+" unidades de "+this.tipo+" "+this.modelo)}
        else {console.log("No hay stock "+this.modelo)}
        
    }
    vender(){
        if (this.cantidad>0){this.cantidad=this.cantidad-1;
 alert("Compra procesada con exito!");
console.log("En deposito quedan "+this.cantidad+" unidades de "+this.tipo+" "+this.modelo)}
        else {alert("Al parecer ese producto se agotó");
    }}
};

const deposito=[]

const contenedorProductos = 
    document.getElementById('contenedor-productos').getElementsByClassName('row');

const rowContenedorProductos = contenedorProductos[0];

///


deposito.push(new Producto("Equipos","Notebook ACER", 25000,1, "./imagenes/notebook.png" ,1));
    deposito.push(new Producto("Periferico","Mouse", 1000,300, "./imagenes/mouse.png" ,2));
    deposito.push(new Producto("Almacenamiento","Pendrive", 800,250, "./imagenes/pendrive.png" ,3));
    deposito.push(new Producto("Componentes","Disco", 2500,10, "./imagenes/disco.png" ,4));
   


















    /*function opciones(){
   let i=prompt("seleccione Opcion a Realizar\n 1 Chequear Inventario \n 2 Agregar producto a Deposito \n 3 consultar por un objeto \n 4 Catalogo \n 5 para comprar\n 0 para salir")
    switch (i) {
        case '1':
            inventario();
            opciones();
            break;
        case '2':
            agregarProduct();
            opciones();
            break;
        case '3':
            consultar(deposito,(prompt("Ingrese MODELO del tipo de producto \n Por ej: EXO ó ASUS")));
            opciones();
            break;
          case "4":
            catalogo();
            opciones();
            break;
            case "5":
            buy(deposito,(prompt("Ingrese MODELO (en MAYUSCULAS) del tipo de producto \n Por ej: EXO , ASUS o LENOVO")));
            opciones();
            break;
        case "0":
            alert("bai bai")
          break;
        default:
          opciones();
      }
}
*/