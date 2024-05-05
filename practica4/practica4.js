let materias = {
    fisica: ["pepe","cofla","pedro","luci","crinje","matias","seba"],
    quimica: ["eduardo","cofla","pedro","luci","crinje","matias","seba"],
    programacion: ["lucia","cofla","pedro","luci","crinje","matias","seba"],
    matematicas: ["tu","cofla","pedro","luci","crinje","matias","seba"],
}

function inscribir (alumno, materia){
let personas = materias[materia];


if (personas.length >=21){
    document.write("las clases estan completa por lo tanto no es posible inscribirte <br>");
}
else{
    personas.push(alumno);
    if (materia === "fisica"){
        materias = {
            fisica: personas,
            quimica: materia["quimica"],
            programacion: materia["programacion"],
            matematicas: materia["matematica"],
        };
    }
    else if (materia === "quimica"){
        materias = {
            fisica: materia["fisica"],
            quimica: personas,
            programacion: materia["programacion"],
            matematicas: materia["matematica"],
        };
    }
    else if (materia === "programacion"){
        materias = {
            fisica: materia["fisica"],
            quimica: materia["quimica"],
            programacion: personas,
            matematicas: materias["matematica"],
        };
    }
    else if (materia === "matematica"){
        materias = {
            fisica: materia["fisica"],
            quimica: materia["quimica"],
            programacion: materia["programacion"],
            matematicas: personas,
        };
    }
document.write('felicidades ' + alumno + ' te inscribiste a '+ materia + "<br></br>");
}
}
document.write(materias["programacion"]+ "<br>")
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
inscribir("alter", "programacion" );
document.write("<br>"+materias["programacion"]+ "<br>")