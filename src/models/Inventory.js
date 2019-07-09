const Inventory = {
  create: inventory => Inventory.list.push(inventory),
  findAll: userId => Inventory.list.filter(inventory => inventory.userId === userId),
  list: []
};

export default Inventory;
