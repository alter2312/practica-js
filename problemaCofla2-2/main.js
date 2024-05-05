    let ancho = window.screen.width;
    let alto = window.screen.height;
    comprar = confirm(`la resolucion es de ${ancho} x ${alto}`);
    
    if(comprar){
        document.write("compra exitosa");
    }
    else{
        document.write("compra cancelada");
    }
    let href = window.location.href;
    let hostname = window.location.hostname;
    let pathname = window.location.pathname;
    let protocol = window.location.protocol;
    
    
    let html = `hostname <b>${hostname}</b> <br>`
    html += `pathname <b>${pathname}</b> <br>`;
    html += `protocol <b>${protocol}</b> <br>`;
    html += `href <b>${href}</b> <br>`;
    document.write(html);