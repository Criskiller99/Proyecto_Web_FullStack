//verificar que solo se escriban letras y espacios en el input nombre
var inputTexto = document.getElementById('nombre');
inputTexto.addEventListener('keydown', function (event) {
    var tecla = event.key;

    // Permitir solo letras y espacios
    if (!/^[a-zA-Z\sñÑ]+$/.test(tecla)) { ///^[a-zA-Z\sñÑ]+$/ es una expresion regular para solo aceptar letras
        event.preventDefault(); //no permite que se escriba algo diferente a las letras o espacios
    }
});

//verificar que solo se escriban numeros
var inputnumeroCel = document.getElementById('Telefono');
inputnumeroCel.addEventListener('input', function (event) {
    var valor = inputnumeroCel.value;

    // Eliminar todos los caracteres no numéricos
    valor = valor.replace(/[^\d]/g, '');
    // Actualizar el valor del campo
    inputnumeroCel.value = valor;
});

function sendForm() {
    //declarar variable para guardar info de formulario
    let nameInfo = document.getElementById('nombre');
    let apellidoInfo = document.getElementById('apellido');
    let tipoDocInfo = document.querySelector("#cuadro > form > select");
    let DocInfo = document.getElementById('Numero-de-identificacion');
    let telefonoInfo = document.getElementById('Telefono');
    let profesionInfo = document.getElementById('Profesion');
    let emailInfo = document.getElementById('correo');
    let asuntoInfo = document.getElementById('asunto');
    let descripcionInfo = document.getElementById('descripcion');

    //variables para guardar info de formulario
    nameInfo = nameInfo.value;
    apellidoInfo = apellidoInfo.value;
    switch (tipoDocInfo.value) {
        case '1':
            tipoDocInfo = 'Cédula de ciudadanía';
            break;
        case '2':
            tipoDocInfo = 'Tarjeta de identidad';
            break;
        case '3':
            tipoDocInfo = 'Pasaporte';
            break;
        case '4':
            tipoDocInfo = 'Cédula de extranjería';
            break;           
        default:
            tipoDocInfo = 'Documento no existente entre las opciones';
            break;
    }
    DocInfo = DocInfo.value;
    telefonoInfo = telefonoInfo.value;
    profesionInfo = profesionInfo.value;
    emailInfo = emailInfo.value;
    asuntoInfo = asuntoInfo.value;
    descripcionInfo = descripcionInfo.value;

    //declarar objeto para contener información
    let personalInfo = {
        Nombre: nameInfo,
        Apellidos: apellidoInfo,
        Tipo_de_identificacion: tipoDocInfo,
        Numero_identificacion: DocInfo,
        Telefono: telefonoInfo,
        Profesion: profesionInfo,
        Email: emailInfo,
        Asunto: asuntoInfo,
        Descripcion: descripcionInfo
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

    let url = "http://localhost:8000/api/crearUsuarios";
    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(personalInfo),
    }

    fetch(url, params).then((response) => {

        if (response.status == 201) {
            alert("Mensaje enviado 😀");
            location.reload()
        } else {
            alert("Mensaje no enviado 😢");
        }
    });
    return true;
}

let buttonForm = document.getElementById("buttonForm");
buttonForm.addEventListener('click', sendForm);



