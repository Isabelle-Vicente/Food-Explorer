const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');

class FoodsController {
  // Método para criar um novo prato
  async create(request, response) {
    const { name, price, description, ingredientes, type, image } = request.body;

    const database = await sqliteConnection();

    await database.run(
      "INSERT INTO foods (name, price, description, ingredientes, type, image) VALUES (?, ?, ?, ?, ?, ?)",
      [name, price, description, ingredientes, type, image]
    );

    return response.status(201).json({ message: 'Prato criado com sucesso!' });
  }

  // Método para listar todos os pratos
  async index(request, response) {
    const database = await sqliteConnection();
    const foods = await database.all("SELECT * FROM foods");

    return response.json(foods);
  }

  // Método para mostrar um prato específico
  async show(request, response) {
    const { id } = request.params;

    const database = await sqliteConnection();
    const food = await database.get("SELECT * FROM foods WHERE id = ?", [id]);

    if (!food) {
      throw new AppError("Prato não encontrado", 404);
    }

    return response.json(food);
  }

  // Método para atualizar um prato
  async update(request, response) {
    const { name, price, description, ingredientes, type, image } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const food = await database.get("SELECT * FROM foods WHERE id = ?", [id]);

    if (!food) {
      throw new AppError("Prato não encontrado", 404);
    }

    await database.run(`
      UPDATE foods SET
      name = ?,
      price = ?,
      description = ?,
      ingredientes = ?,
      type = ?,
      image = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [name, price, description, ingredientes, type, image, id]
    );

    return response.json({ message: 'Prato atualizado com sucesso!' });
  }

  // Método para excluir um prato
  async delete(request, response) {
    const { id } = request.params;

    const database = await sqliteConnection();
    const food = await database.get("SELECT * FROM foods WHERE id = ?", [id]);

    if (!food) {
      throw new AppError("Prato não encontrado", 404);
    }

    await database.run("DELETE FROM foods WHERE id = ?", [id]);

    return response.json({ message: 'Prato excluído com sucesso!' });
  }
}

module.exports = FoodsController;
