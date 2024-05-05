let botones = document.querySelectorAll(".btn");
let pantalla = document.querySelector(".pantalla");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
 let content=0;
 const botonApretado =  parseInt(boton.textContent(), 10);

    content == parseInt(boton.textContent(), 10);
    pantalla.textContent() = content;
    pantalla.textContent() = parseInt(pantalla.textContent())
    
});
});




function sumar(num1, num2){
    return num1+num2;
}
function restar (num1, num2){
    return num1- num2;
}
function multiplicar (num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    if (num2 !== 0){
        return num1 / num2;
    }
    else{
        return "no se puede dividir entre 0";
    }
}
function potencia (num1,  num2){
    return num1 ** num2;
}
function raiz (num1){
    if (num1 !== 0){
        return num1 / num1;
    }
    else{
        return "no se puede dividir entre 0";
    }
}


