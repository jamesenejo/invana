import models from '../models';

const { Inventory } = models;

export default {
  create: (req, res) => {
    const { body: { category, name, description }, user: { userId } } = req;

    const inventory = {
      id: Inventory.list.length + 1,
      category,
      name,
      description,
      userId
    };

    // persist inventory to database
    Inventory.create(inventory);
    return res.jsend.success(inventory);
  },
  findAll: (req, res) => {
    const { user: { userId } } = req;
    const listOfInventory = Inventory.findAll(userId);
    return res.jsend.success(listOfInventory);
  }
};
