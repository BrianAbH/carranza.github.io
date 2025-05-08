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
  if(nombre.length && apellido.length && edad.length && correo.length && carrera.length && telefono.length && fechaInscripcion.length && generoValor.lenght < 0  ){  
    alert(resultado.trim());
  }else{
    alert("Ingrese todos los datos");
  }


}
