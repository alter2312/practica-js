// Estructura del HTML
const body = document.querySelector("body");
const form = document.createElement("form");
const fragment = document.createDocumentFragment();
const containerBotonForm = document.createElement("div");
const inputSubmit = document.createElement("input");
const title = document.createElement("h1");
const spans = [];
const inputText = [];

fragment.appendChild(title);
for (let x = 0; x < 2; x++) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    label.appendChild(span);
    label.appendChild(input);
    fragment.appendChild(label);
    spans.push(span); 
    inputText.push(input);
}

containerBotonForm.appendChild(inputSubmit);
fragment.appendChild(containerBotonForm);
form.appendChild(fragment);
body.appendChild(form);

// Contenido de la estructura
title.textContent = "login";
spans[0].textContent ="Usuario"; 
spans[1].textContent ="Constraseña"; 
inputSubmit.type = "submit";
inputSubmit.value = "Iniciar sesión";


// Clases
title.classList.add("title");
spans.forEach(span => span.classList.add("text-label"));
inputText.forEach(input => input.classList.add("input-form"));
inputSubmit.classList.add("btn-form");
containerBotonForm.classList.add("container-btn");

//dark mode
