 document.addEventListener('DOMContentLoaded', function() {
 const miBoton = document.querySelector("button"); 

 //Utilizo es querySelector (el cual selecciona un elemento segun su etiqueta en css) 
 // porque al usar el getElementByClass me devuelve un array.

 miBoton.addEventListener('click', function() {
     alert('Hola! Soy el div');
     });
     miBoton.removeAttribute("onclick"); 
     // En este caso sirve tambien se podria utilizar stopPropagation()
 });


// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementsByClassName("Saludo");
//     const miBoton = container[0];

//       miBoton.addEventListener('click', function() {
//         alert('Hola! Soy el div');
//       });
//     });

//Esta es otra opcion que encontre si si quiere utilizar getElement, 
//seleccionar elemento 0 del array