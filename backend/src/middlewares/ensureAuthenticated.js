const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const sqliteConnection = require('../database/sqlite');

async function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token não está presente", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = ?", [user_id]);

    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    // Injetar o ID e o role do usuário autenticado na requisição
    request.user = {
      id: user.id,
      role: user.role
    };

    return next();
  } catch (error) {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;
