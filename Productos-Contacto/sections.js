const z = window.Zod;

//const { z } = window; // Importamos Zod desde el global (por el CDN)

const esquema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("El correo no es válido"),
  mensaje: z.string().min(1, "El mensaje no puede estar vacío"),
});

const formulario = document.getElementById('form-contacto');
//const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
const erroresDiv = document.getElementById("errores");

console.log(formulario);

  formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

  const datos = {
    nombre: document.getElementById("nombre").value.trim(),
    email: document.getElementById("email").value.trim(),
    mensaje: document.getElementById("mensaje").value.trim(),
  };
/*
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    
*/

const resultado = esquema.safeParse(datos);


 if (!resultado.success) {
    const errores = resultado.error.errors.map(err => `<p>${err.message}</p>`).join('');
    erroresDiv.innerHTML = errores;
  } else {
    erroresDiv.innerHTML = "<p style='color: green;'>Formulario enviado correctamente ✅</p>";

    formulario.reset();    // Aquí limpiamos el formulario
  }

/*
if (nombre && email && mensaje) {
      // Simular envío exitoso
      mensajeConfirmacion.style.display = 'block';
      mensajeConfirmacion.style.color = 'green';
      mensajeConfirmacion.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;

      formulario.reset(); // Limpia el formulario
    } else {
      mensajeConfirmacion.style.display = 'block';
      mensajeConfirmacion.style.color = 'red';
      mensajeConfirmacion.textContent = 'Por favor, completa todos los campos.';
    }
*/

  });