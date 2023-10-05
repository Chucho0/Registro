function validar() {
    let nombre = document.getElementById("minombre").value;
    let apellido = document.getElementById("miapellido").value;
    let tipoDocumentoElement = document.querySelector('input[name="identificacion"]:checked');
    let tipoDocumento = tipoDocumentoElement ? tipoDocumentoElement.value : null;
    let numeroDocumento = document.getElementById("numeroidentificacion").value;
    let generoElement = document.querySelector('input[name="genero"]:checked');
    let genero = generoElement ? generoElement.value : null;
    let fecha = document.getElementById("fecha").value;
    let telefono = document.getElementById("numerodetelefono").value;
    let correo = document.getElementById("correoeletronico").value;

    if (nombre === "") {
        mostrarAlerta("Ingrese su nombre");
        return;
    }
    if (apellido === "") {
        mostrarAlerta("Ingrese su apellido");
        return;
    }
    if (tipoDocumento === null) {
        mostrarAlerta("Seleccione el tipo de documento");
        return;
    }
    if (numeroDocumento === "") {
        mostrarAlerta("Ingrese el número de documento");
        return;
    }
    if (fecha === "") {
        mostrarAlerta("Ingrese la fecha de nacimiento");
        return;
    } else {
        let fechaNacimiento = new Date(fecha);
        let hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        if (edad < 13) {
            mostrarAlerta("Debe ser mayor de 13 años para registrarse.");
            return;
        }
    }
    if (genero === null) {
        mostrarAlerta("Seleccione su genero");
        return;
    }
    if (telefono === "") {
        mostrarAlerta("Ingrese su número de teléfono");
        return;
    } else if (telefono.length !== 10 || isNaN(telefono)) {
        mostrarAlerta("El número de teléfono debe tener 10 dígitos.");
        return;
    }
    if (correo === "") {
        mostrarAlerta("Ingrese una dirección de correo electronico");
        return;
    } else {
        let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            mostrarAlerta("introduzca una dirección de correo válida.");
            return;
        }
    }

    let persona = {
        nombre: nombre,
        apellido: apellido,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        genero: genero,
        fechaNacimiento: fecha,
        telefono: telefono,
        correo: correo,
    };

    let informacion = [];
    informacion.push(persona);

    document.getElementById("minombre").value = "";
    document.getElementById("miapellido").value = "";
    if (tipoDocumentoElement) tipoDocumentoElement.checked = false;
    document.getElementById("numeroidentificacion").value = "";
    if (generoElement) generoElement.checked = false;
    document.getElementById("fecha").value = "";
    document.getElementById("numerodetelefono").value = "";
    document.getElementById("correoeletronico").value = "";

    alert("Información guardada con éxito");
}

function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("alert");
    alerta.textContent = mensaje;
    alerta.classList.remove("alert2");
    alerta.classList.add("alert2");
    setTimeout(() => {
        alerta.textContent = "";
        alerta.classList.remove("alert2");
    }, 1000);
}
