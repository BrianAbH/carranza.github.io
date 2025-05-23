function mostrarValores() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;
  const correo = document.getElementById('correo').value;
  const carrera = document.getElementById('carreras').value;
  const telefono = document.getElementById('telefono').value;
  const fechaInscripcion = document.getElementById('fecha').value;

  const genero = document.querySelector('input[name="genero"]:checked');
  const generoValor = genero ? genero.value : 'No seleccionado';

  const redes = [];
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    if (checkbox.checked) {
      redes.push(checkbox.value);
    }
  });
  
  const resultado = `    
  Nombre: ${nombre}
  Apellido: ${apellido}
  Edad: ${edad}
  Correo Electronico: ${correo}
  Carrera: ${carrera}
  Telefono: ${telefono}
  Fecha de Inscripción: ${fechaInscripcion}
  Género: ${generoValor}
  Visto por: ${redes.join(', ') || 'Ninguno'}
    `;
  if(nombre.length && apellido.length && edad.length && correo.length && carrera.length && telefono.length && fechaInscripcion.length > 0){  
    alert(resultado.trim());
    limpiar();
  }else{
    alert("Ingrese todos los datos");
  }
}

function limpiar(){
    document.getElementById('nombre').value ="";
    document.getElementById('apellido').value ="";
    document.getElementById('edad').value ="";
    document.getElementById('correo').value ="";
    document.getElementById('carreras').value ="";
    document.getElementById('telefono').value ="";
    document.getElementById('fecha').value ="";
    document.querySelector('input[name="genero"]:checked').checked = false;
    document.querySelector('input[type="checkbox"]').checked = false;
}
