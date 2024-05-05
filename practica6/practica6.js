// const titulo = document.querySelector(".titulo");

// let resultado =titulo.textContent;
// document.write(resultado);
// const container = document.querySelector(".container");

// container.appendChild(titulo);



// const fracmento = document.createDocumentFragment();
// for (i =0; i < 20 ; i ++){
//     const li = document.createElement("LI");
//     li.textContent = "Este es un li";
//     fracmento.appendChild(li);
// }
// container.appendChild(fracmento);

// // console.log(container);


// obtencion de hijos
const contenedor = document.querySelector(".container");

const primerHijo = container.fistElementChild;
console.log(primerHijo);
const parrafo = document.createElement("P").innerHTML= "parrafo";
const h2_nuevo = document.createElement("H2")
h2_nuevo.innerHTML = "titulo3";
const h2_antiguo = document.querySelector(".h2");
contenedor.removeChild(h2_antiguo)
