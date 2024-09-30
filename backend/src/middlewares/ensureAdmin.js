const AppError = require('../utils/AppError');

function ensureAdmin(request, response, next) {
  const { role } = request.user;

  if (role !== 'admin') {
    throw new AppError("Usuário não autorizado. Somente administradores podem realizar essa ação.", 403);
  }

  return next();
}

module.exports = ensureAdmin;
