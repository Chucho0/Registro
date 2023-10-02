function enviar() {
    let nombre = document.getElementById("minombre").value;
    let apellido = document.getElementById("miapellido").value;
    let tipoDocumento = document.querySelector('input[name="identificacion"]:checked').value;
    let numeroDocumento = document.getElementById("numeroidentificacion").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let fechaNacimiento = document.getElementById("fechadenacimiento").value;
    let telefono = document.getElementById("numerodetelefono").value;
    let correo = document.getElementById("correoeletronico").value;

    let persona = {
        nombre: nombre,
        apellido: apellido,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        genero: genero,
        fechaNacimiento: fechaNacimiento,
        telefono: telefono,
        correo: correo,
    };

    let informacion=[];

    informacion.push(persona);

    alert("Información guardada con exito")
}