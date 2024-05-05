// Creación de elementos HTML
const body = document.querySelector("body");
const container = document.createElement("main");
const title = document.createElement("h1");
const form = document.createElement("form");
const inputBtn = document.createElement("input");
const labels = [];
const inputForms = [];
const spans = [];
const fragment = new DocumentFragment();
const containerLink = document.createElement("div");
const links = [];
const arrayDivInputGroup =[]
// Construcción de la estructura HTML
fragment.appendChild(title);
fragment.appendChild(form);

for (let valor = 0; valor <= 2; valor++) {
    const label = document.createElement("label");
    const inputForm = document.createElement("input");
    const span = document.createElement("span");
    if (valor < 2 ){
        const divInputGroup = document.createElement("div");
        const icono = document.createElement("i");
        inputForm.type = "text";
        icono.classList.add("fa-solid", "icon");
        divInputGroup.classList.add("input-group"); // Nuevo elemento div para contener el input y el icono
        divInputGroup.appendChild(icono); // Agrega el icono al nuevo div
        divInputGroup.appendChild(inputForm); // Agrega el input al nuevo div
        label.appendChild(divInputGroup); // Agrega el nuevo div al label
    }
    else{
        label.appendChild(inputForm);
    }

  
    
     // Agrega una clase al nuevo div para aplicar estilos

    span.innerText = (valor === 0) ? "Usuario" : "Contraseña"; // Usa el valor del bucle para establecer el texto del span

    label.appendChild(span);

    form.appendChild(label);
    labels.push(label);
    inputForms.push(inputForm);
    spans.push(span);
    const link = document.createElement("a");
    containerLink.appendChild(link);
    links.push(link);
 
}

containerLink.removeChild(links[2]); // Elimina el tercer enlace
form.appendChild(inputBtn);
form.appendChild(containerLink);

container.appendChild(fragment);
body.appendChild(container);

// Agregar iconos a los campos de usuario y contraseña
const iconoUsuario = document.createElement("i");
iconoUsuario.classList.add("fa-solid", "fa-user", "icon");
const divInputGroupUsuario = document.createElement("div");
divInputGroupUsuario.classList.add("input-group");
divInputGroupUsuario.appendChild(iconoUsuario);
divInputGroupUsuario.appendChild(inputForms[0]);
labels[0].appendChild(divInputGroupUsuario);

const iconoContraseña = document.createElement("i");
iconoContraseña.classList.add("fa-solid", "fa-lock", "icon");
const divInputGroupContraseña = document.createElement("div");
divInputGroupContraseña.classList.add("input-group");
divInputGroupContraseña.appendChild(iconoContraseña);
divInputGroupContraseña.appendChild(inputForms[1]);
labels[1].appendChild(divInputGroupContraseña);

// Contenido del formulario
title.innerText = "Login";
spans[0].innerText = "Usuario";
spans[1].innerText = "Contraseña";
spans[2].innerText = "Recordar usuario";
links[0].innerHTML = "¿Olvidó su contraseña?";
links[1].innerHTML = "Registrar usuario";
inputForms[2].type = "checkbox";
inputBtn.type = "button";
inputBtn.value = "Iniciar sesión";
inputForms[1].type = "password";
inputForms.forEach(inputForm =>{
    inputForm.maxLength = 25;
})
links.forEach(link => {
    link.href = "#"});

    //funcionalidades
    iconoContraseña.addEventListener("click", () => {
        const inputContraseña = inputForms[1];     
        if (inputContraseña.type === "password") {
            inputContraseña.type = "text";
            iconoContraseña.style="color: #350aaa;"
        } else {
            inputContraseña.type = "password";
            iconoContraseña.style="color: #f1f1f1;"

        }
    });