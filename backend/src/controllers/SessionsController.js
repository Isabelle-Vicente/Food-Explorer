const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken'); 
const authConfig = require("../configs/auth")

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;

        const database = await sqliteConnection();

        const user = await database.get("SELECT * FROM users WHERE email = ?", [email]);

        if (!user) {
            throw new AppError("E-mail e/ou senha incorretos.", 401);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError("E-mail e/ou senha incorretos.", 401);
        }

        const { secret, expiresIn} = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn

        });

        return response.json({ user, token });
    }
}

module.exports = SessionsController;
