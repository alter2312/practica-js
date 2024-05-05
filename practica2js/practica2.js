// // while
// // do while
// // for
// let animales =["chamchito feliz", "dragon","perrito"];
// for (let animal of animales){
//     console.log(animal);
// }

// let i = 0;
// while (i < animales.length){
//     console.log(animales[i]);
//     i++
// }

// const user = {
//     id: 1,
//     name: "chanchito feliz",
//     age:25,
// };
// for(let prop in user){
//     console.log(prop , user[prop]);
// } 
// let animal = ["chanchito feliz", "dragon", "canguro"];
// for (let indice in animal){
//     console.log(animal[indice])
// }
// for(let i = 0; i <= 100; i++){
//     if (i === 40){
//         continue;
//     }
//     if (i === 4){
//         break;
//     }
//     console.log(i);
// }
// let accion =1;
// switch (accion){
//     case 1: console.log("accion de guardar");
//             break;
//     case 2: console.log("accion de cerrar");
//             break;
// }

//  function cualEsMayor (a,b){
// return (a > b)? a : b;
//  }
//  let mayor = cualEsMayor(1, 5);
//  console.log(mayor);

//  function nombreResolucion (ancho, alto){
//     if (ancho >= 7680  && alto >= 4320){
//         return "8K"
//     }
//    else if (ancho >= 3840  && alto >= 2160){
//         return "4K"
//     }
//     else if (ancho >= 2560  && alto >= 1440){
//         return "WQHDK"
//     }
//     else if (ancho >= 1920  && alto >= 1080){
//         return "FHD"
//     }
//     else if (ancho >= 1280  && alto >= 720){
//         return "HD"
//     }
//    else{
//         return false;
//     }
    
//  }
//  let nombre = nombreResolucion(1366, 768);
//  console.log(nombre);

//  function getByIdx( array, indice){
//     if (indice < 0 || indice > array.length){
//         return "elemento no existe";

//     }
//     return array[indice];

//  }
//  let resultado = getByIdx( [1,2], -4);
//  console.log(resultado);
// function par_impar(){

//  let indice = 0;
//  while (indice <=10){
     
//     if (indice % 2 !== 0){
//         console.log("impar " , indice )
//     }
//     indice++;
//  }
// }
// par_impar();

let array = [2, 5, 7, 15, -5 , -100, 55];
function getMenorMayor(array){
    let menor = array[0];
    let mayor = array[0];
for(let numero of array){
   menor = menor < numero ? menor : numero;
   mayor =mayor >numero ? mayor : numero;
}
return [menor, mayor];
}

numeros = getMenorMayor(array);
console.log(numeros);

// function countPositivo(array){
// let cantidadPositivos = 0;
// for (numero of array){
//     if (numero >= 0 ){
//         cantidadPositivos++;
//     }
// }
// return cantidadPositivos;
// }
// cantidad = countPositivo(array);
// console.log(cantidad)


// let array2 = [{
//     id: 1,
//     name: 'pepe',
// },  {
//     id:2,
//     name: 'perro',
// },{
//     id:3,
//     name: 'gato',
// }
// ];
// let array3 =[
// [1, { name: 'pepe'}],
// [2 ,{ name: 'perro'}],
// [3 ,{ name: 'gato'}],
// ];

// function pares(array){
// let pairs = [];
// for (idx in array){
//    let elemento = array[idx]
//     pairs[idx] = [elemento.id, elemento];
// }
// return pairs;
// }
// salida = pares(array2);
// console.log(salida);


// function arrayObjeto(array){
//     let array_objeto=[];
//     for (idx in array){
//         let elemento = array[idx];
//         array_objeto[idx] = elemento[1];
//         array_objeto[idx].id = elemento[0];
//     }
//     return array_objeto;
// }
// salida2 = arrayObjeto(array3);
// console.log(salida2)

// function crearArray(n){
//     if (n <=0){
//         return [];
//     }
//     let array=[];
//     for (let i = 0; i <7 ;i++){
//         array[i] = i + 1;
//     }
//     return array;
// }
// salida3= crearArray(7);
// console.log(salida3);


function createUser(){
    let user ={
        id:1,
        email:'nico@gmail.com',
        name: 'nico',
        activo:true,
        recuperarClave = function(){
            console.log ('recuperando clave');
        }
    }
}
function Usuario(){
    this.id =1;
    this.recuperarClave = function (){
        console.log('recuperando clave');
    }
}
let obj ={};