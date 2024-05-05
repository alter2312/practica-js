// Creación de elementos HTML
const body = document.querySelector("body");
const container = document.createElement("main");
const title = document.createElement("h1");
const form = document.createElement("form");
const inputBtn = document.createElement("input");
const inputCheckBox = document.createElement("input");
const labels = [];
const inputForms = [];
const spans = [];
const fragment = new DocumentFragment();
const containerLink = document.createElement("div");
const links = [];

// Construcción de la estructura HTML
fragment.appendChild(title);
fragment.appendChild(form);

for (let valor = 0; valor <= 2; valor++) {
    const label = document.createElement("label");
    const inputForm = document.createElement("input");
    const span = document.createElement("span");
    label.appendChild(span);
    label.appendChild(inputForm);
    form.appendChild(label);
    labels.push(label);
    inputForms.push(inputForm);
    spans.push(span);
    
    const link = document.createElement("a");
    containerLink.appendChild(link);
    links.push(link);
}

containerLink.removeChild(links[2]); // Elimina el tercer enlace

labels[1].appendChild(inputCheckBox);
form.appendChild(inputBtn);
form.appendChild(containerLink);

container.appendChild(fragment);
body.appendChild(container);

// Contenido del formulario
title.innerText = "Login";
spans[0].innerText = "Usuario";
spans[1].innerText = "Contraseña";
spans[2].innerText = "Recordar usuario";
links[0].innerHTML = "¿Olvidó su contraseña?";
links[1].innerHTML = "Registrar usuario";
inputForms[2].type = "checkbox";
inputCheckBox.type = "checkbox";
inputBtn.type = "button";
inputBtn.value = "Iniciar sesión";

// Depuración
console.log(body);
console.log(labels);
console.log(inputForms);
