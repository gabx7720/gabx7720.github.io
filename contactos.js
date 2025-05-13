let nombre;
let data;
let color;
let comentario;
let terminos;  
let enviar_formulario;    

document.addEventListener("DOMContentLoaded", (event) => {

    nombre = document.getElementById("campo-nombre");
    data = document.getElementById("campo-data");
    color = document.getElementById("campo-color");
    comentario = document.getElementById("campo-comentario");
    terminos = document.getElementById("campo-terminos");
    enviar_formulario = document.getElementById("formulario");


    terminos.addEventListener("click", function(event) {

        if (terminos.checked) {  
            console.log("jajaja lol xd :D");
        } else {
            console.log("noooooooooooooooooooooooooooooooo");
        }
    });

    enviar_formulario.addEventListener("submit", function(event) {
        let  send = true;

        if (nombre.value.length < 2 || nombre.value.length > 32) {
            send = false;
            nombre.style.borderColor = "red";
        }else{
            nombre.style.borderColor = "green";
        }

        console.log(data.value);
        if (data.value === "" || data.value.length != 10) {
            send = false;
            data.style.borderColor = "red";
        }else{
            let fecha = data.value.split("-");

            let year = parseInt(fecha[0]);
            let month = parseInt(fecha[1]);
            let day = parseInt(fecha[2]);


            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                send = false;
                data.style.borderColor = "red";
            }else {
                if (year <= 0 || year > 2025) {
                    send = false;
                    data.style.borderColor = "red";
                }else{
                    data.style.borderColor = "green";
                }
                if (month <= 0 || month > 12) {
                    send = false;
                    data.style.borderColor = "red";
                }else{
                    data.style.borderColor = "green";
                }
                if (day <= 0 || day > 31) {
                    send = false;
                    data.style.borderColor = "red";
                }else{
                    data.style.borderColor = "green";
                }
            }              
        }
        if (color.value.length != 7) {
            send = false;   
            color.style.borderColor = "red";
        }else {
            if (color.value[0] !== "#"){
                send = false;
                comentario.style.borderColor = "red";
            }else {
                color.style.borderColor = "green";
            }
        }


        if (comentario.value.length < 5 || comentario.value.length > 255) {
            send = false;
            comentario.style.borderColor = "red";
        }else{
            let tmp = comentario.value.replace(/'/g, "\\'");
        }
        
        send = false;
        if (!send){
            event.preventDefault();
        }

    });});