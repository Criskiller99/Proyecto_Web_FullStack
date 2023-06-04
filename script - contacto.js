//verificar que solo se escriban letras y espacios en el input nombre
var inputTexto = document.getElementById('nombre');
inputTexto.addEventListener('keydown', function (event) {
    var tecla = event.key;

    // Permitir solo letras y espacios
    if (!/^[a-zA-Z\sñÑ]+$/.test(tecla)) { ///^[a-zA-Z\sñÑ]+$/ es una expresion regular para solo aceptar letras
        event.preventDefault(); //no permite que se escriba algo diferente a las letras o espacios
    }
});
let alertaElement = document.getElementById('confirmacion');
//declarar variable para guardar info de formulario

function sendForm() {
    //declarar variable para guardar info de formulario
    let nameInfo = document.getElementById('nombre');
    let emailInfo = document.getElementById('correo');
    let asuntoInfo = document.getElementById('asunto');
    let descripcionInfo = document.getElementById('descripcion');

    //variables para guardar info de formulario
    nameInfo = nameInfo.value;
    emailInfo = emailInfo.value;
    asuntoInfo = asuntoInfo.value;
    descripcionInfo = descripcionInfo.value;

    //declarar objeto para contener información
    let personalInfo = {
        name: nameInfo,
        email: emailInfo,
        asunto: asuntoInfo,
        mensaje: descripcionInfo,
    }

        // Localstorage
        let saveData = localStorage.getItem("Solicitudes"); //Crear clave Solicitudes en localStorage
        //console.log("value localstorage =>", saveData);

        if (saveData) {
            
            let data = JSON.parse(saveData);
            let newData = [...data, personalInfo];
            localStorage.setItem("Solicitudes", JSON.stringify(newData)); //Envia el value del key Solicitudes

        } else {
            let dataInfo = [];
            dataInfo.push(personalInfo); //llenar el arreglo con los datos del formulario
            localStorage.setItem("Solicitudes", JSON.stringify(dataInfo)); //enviar datos al localStorage
            
        }

        alert("EL mensaje fue enviado con exito")

}
  

let buttonForm = document.getElementById("buttonForm");
buttonForm.addEventListener('click', sendForm);



