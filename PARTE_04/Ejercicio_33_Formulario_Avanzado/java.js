document.addEventListener('DOMContentLoaded', () => {

  const usuario = document.getElementById('usuario');
  const correo = document.getElementById('correo');
  const password = document.getElementById('password');
  const confirmar = document.getElementById('confirmar');
  const telefono = document.getElementById('telefono');

  const regex = {
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    telefono: /^\d{9}$/
  };

  function validarCampo(input, condicion, mensaje) {
    const contenedor = input.parentElement;
    const error = contenedor.querySelector('.mensaje-error');

    if (condicion) {
      input.classList.remove('error');
      input.classList.add('valido');
      contenedor.classList.remove('mostrar-error');
    } else {
      input.classList.remove('valido');
      input.classList.add('error');
      contenedor.classList.add('mostrar-error');
      error.textContent = mensaje;
    }
  }

  // Usuario (simple: no vacío)
  usuario.addEventListener('keyup', () => {
    validarCampo(usuario, usuario.value.trim() !== '', 'El usuario es obligatorio');
  });

  // Correo
  correo.addEventListener('keyup', () => {
    validarCampo(correo, regex.correo.test(correo.value), 'Correo no válido');
  });

  // Password
  password.addEventListener('keyup', () => {
    validarCampo(password, regex.password.test(password.value),
      'Mínimo 8 caracteres, una mayúscula y un número');
  });

  // Confirmar contraseña
  confirmar.addEventListener('keyup', () => {
    validarCampo(confirmar, confirmar.value === password.value,
      'Las contraseñas no coinciden');
  });

  // Teléfono
  telefono.addEventListener('keyup', () => {
    validarCampo(telefono, regex.telefono.test(telefono.value),
      'Teléfono no válido (9 dígitos)');
  });

});