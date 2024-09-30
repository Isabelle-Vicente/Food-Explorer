const sqliteConnection = require('../database/sqlite');
const AppError = require('../utils/AppError');

class OrdersController {
  async create(request, response) {
    const { user_id, items } = request.body;

    const database = await sqliteConnection();

    let totalPrice = 0;
    for (const item of items) {
      const food = await database.get("SELECT * FROM foods WHERE id = ?", [item.food_id]);
      if (!food) {
        throw new AppError(`O item ${item.food_id} não foi encontrado.`);
      }
      totalPrice += food.price * item.quantity;
    }

    const { lastID: orderId } = await database.run(
      "INSERT INTO orders (user_id, total_price) VALUES (?, ?)",
      [user_id, totalPrice]
    );

    for (const item of items) {
      await database.run(
        "INSERT INTO order_items (order_id, food_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.food_id, item.quantity, item.price]
      );
    }

    return response.status(201).json({ message: 'Pedido criado com sucesso!' });
  }

  async updateStatus(request, response) {
    const { id } = request.params;
    const { status } = request.body;

    const database = await sqliteConnection();
    const order = await database.get("SELECT * FROM orders WHERE id = ?", [id]);

    if (!order) {
      throw new AppError("Pedido não encontrado");
    }

    await database.run(
      "UPDATE orders SET status = ?, updated_at = DATETIME('now') WHERE id = ?",
      [status, id]
    );

    return response.json({ message: 'Status do pedido atualizado!' });
  }

  async index(request, response) {
    const { user_id } = request.query;

    const database = await sqliteConnection();
    const orders = await database.all("SELECT * FROM orders WHERE user_id = ?", [user_id]);

    return response.json(orders);
  }

  async show(request, response) {
    const { id } = request.params;

    const database = await sqliteConnection();
    const order = await database.get("SELECT * FROM orders WHERE id = ?", [id]);

    if (!order) {
      throw new AppError("Pedido não encontrado");
    }

    const orderItems = await database.all("SELECT * FROM order_items WHERE order_id = ?", [id]);

    return response.json({ order, items: orderItems });
  }
}

module.exports = OrdersController;
