import models from '../models';

const { Inventory } = models;

export default {
  create: async (req, res) => {
    const { body: { category, name, description }, user: { userId } } = req;

    const inventory = {
      id: Inventory.list.length + 1,
      category,
      name,
      description,
      userId
    };

    // persist user to database
    Inventory.create(inventory);
    return res.jsend.success(inventory);
  }
};
