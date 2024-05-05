let materias = {
    fisica: [100, 6, 4, "fisica"], 
    matematica: [80, 8, 2, "matematica"],
    programacion: [92, 6, 4, "programacion"],
    logica: [53, 5, 2, "logica"],
    bd: [94, 9, 4 , "bd"],
    biologia: [75, 7, 3, "biologia"],
    quimica: [60, 6, 3, "quimica"],
    
}
function aprobo (){
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);

        if (asistencias >= 90){
            console.log ("   %cAsistencias en orden", "color:blue");
        }
        else{
            console.log ("   %cFaltas de asistencias", "color:red");
        }
        if (promedio >= 7){
            console.log ("   %cpromedio en orden", "color:blue");
        }
        else{
            console.log(" %cDesaprobado", "color:red");
        }
        if (trabajos >=3){

            console.log ("   %cTrabajos entregados", "color:blue");
        }
        else{
            console.log(" %Trabajos no entregados", "color:red");
        }
    }
}
aprobo();

let trabajo = "240 minutos trabajando";
let estudio = "100 minutos estudiando";
let tp = "100 minutos trabajo fuera de casa";
let homework = "30 minutos trabajo de casa";
let descanso = "10 minutos descansando";

for (var i = 0; i< 14;i++){
    if (i == 0){
        console.group("semana 1")
    }

    console. log ("tareas");
    console.groupCollapsed ("dia "+(i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 6){
        console.groupEnd();
        console.groupCollapsed("semana 2")
    }
}

console.groupEnd()
console.groupEnd()
