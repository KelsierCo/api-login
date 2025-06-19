export function buildRecoveryEmail(link, user) {
  return `
    <h2>Hola ${user.nombre || 'usuario'}</h2>
    <p>Hemos recibido una solicitud para restablecer tu contraseña.</p>
    <p>Haz clic en el siguiente enlace para continuar:</p>
    <a href="${link}">${link}</a>
    <p><small>Este enlace expirará en 15 minutos.</small></p>
  `;
}

export function buildConfirmationEmail(link, user) {
  return `
    <h1>Hola ${user.nombre}</h1>
    <p>Confirma tu correo haciendo clic en este enlace:</p>
    <a href="${link}">${link}</a>
  `;
}