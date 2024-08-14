function Ventas(producto, precio){   /* clase Ventas*/ 
   this.producto = producto
   this.precio = precio 

   this.ObtenerPorcentaje = function(){         /* calcula  el Porcentaje de comision. Compara si el precio es menor a 100 y selecciona 5%. Sino selecciona 7.5%  */
    return this.precio < 100 ? 5 : 7.5;
   }

   this.ObtenerComision = function(){      /* Obtiene la comision. Toma el precio del producto y lo multiplica por el % obtenido arriba(ObtenerPorcentaje). Posterior lo divide entre 100 */
    return (this.precio * this.ObtenerPorcentaje()) / 100
   }

}


var ventas = [] /*arreglo vacio ventas */

 const venta1 = new Ventas("parlante", 50) /* Objeto venta1 */

 //console.log("Venta1", venta1);
 //console.log("Porcentaje", venta1.ObtenerPorcentaje());
 //console.log("Comision", venta1.ObtenerComision());

 ventas.push(venta1) /*al arreglo ventas le insertamos el objeto venta1 */
 ventas.push(new Ventas("monitor", 150))
 ventas.push(new Ventas("mouse", 40))


 var suma = 0;
 for (let index = 0; index < ventas.length; index++) {
    const element = ventas[index];
    var comision = element.ObtenerComision()
    suma = suma + comision


    console.log(element.producto, comision);
    
    
 }
 console.log(suma);