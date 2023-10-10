let informacion = [];
let op = null
let indice = null
function validar() {
    let nombre = document.getElementById("minombre").value;
    let apellido = document.getElementById("miapellido").value;
    let tipoDocumento = document.querySelector('input[name="identificacion"]:checked');
    let numeroDocumento = document.getElementById("numeroidentificacion").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let fecha = document.getElementById("fecha").value;
    let telefono = document.getElementById("numerodetelefono").value;
    let correo = document.getElementById("correoeletronico").value;

    if (op === true) {
        informacion[indice].nombre = document.getElementById("minombre").value
        informacion[indice].apellido = document.getElementById("miapellido").value
        informacion[indice].tipoDoc = document.querySelector('input[name="identificacion"][value="' + r.tipoDoc + '"]').checked = true;
        informacion[indice].numeroDocumento = document.getElementById("numeroidentificacion").value
        informacion[indice].gen = document.querySelector('input[name="genero"][value="' + r.gen + '"]').checked = true;
        informacion[indice].fechaNacimiento = document.getElementById("fecha").value
        informacion[indice].telefono = document.getElementById("numerodetelefono").value
        informacion[indice].correo = document.getElementById("correoeletronico").value
    } else {
        let identificaciontext = tipoDocumento.value
        let generotext = genero.value
        let persona = {
            nombre: nombre,
            apellido: apellido,
            tipoDoc: identificaciontext,
            numeroDocumento: numeroDocumento,
            gen: generotext,
            fechaNacimiento: fecha,
            telefono: telefono,
            correo: correo,
        };
        informacion.push(persona);
        document.getElementById("minombre").value = "";
        document.getElementById("miapellido").value = "";
        document.querySelector('input[name="identificacion"]:checked').checked = false
        document.getElementById("numeroidentificacion").value = "";
        document.querySelector('input[name="genero"]:checked').checked = false
        document.getElementById("fecha").value = "";
        document.getElementById("numerodetelefono").value = "";
        document.getElementById("correoeletronico").value = "";
        document.getElementById("tabla").innerHTML = ""
    }

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

    pintar()
    op = false
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

function pintar() {
    let frag = document.createDocumentFragment()

    informacion.forEach((item, index) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        let td9 = document.createElement("td")
        let editar = document.createElement("button")
        let eliminar = document.createElement("button")
        editar.textContent = "📝"
        editar.addEventListener("click", () => {
            edita(item, index)
        })
        eliminar.textContent = "❌"
        td1.textContent = item.nombre
        td2.textContent = item.apellido
        td3.textContent = item.tipoDoc
        td4.textContent = item.numeroDocumento
        td5.textContent = item.gen
        td6.textContent = item.fechaNacimiento
        td7.textContent = item.telefono
        td8.textContent = item.correo
        td9.appendChild(editar)
        td9.appendChild(eliminar)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)
        frag.appendChild(tr)
        document.getElementById("tabla").appendChild(frag)
    })
}

function edita(r, i) {
    indice = i
    op = true
    console.log(r);
    document.getElementById("minombre").value = r.nombre;
    document.getElementById("miapellido").value = r.apellido;
    document.querySelector('input[name="identificacion"][value="' + r.tipoDoc + '"]').checked = true;
    document.getElementById("numeroidentificacion").value = r.numeroDocumento;
    document.querySelector('input[name="genero"][value="' + r.gen + '"]').checked = true;
    document.getElementById("fecha").value = r.fechaNacimiento;
    document.getElementById("numerodetelefono").value = r.telefono;
    document.getElementById("correoeletronico").value = r.correo;
}
