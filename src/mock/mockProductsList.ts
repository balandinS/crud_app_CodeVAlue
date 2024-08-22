import { ProductTyped } from "../types/product.type";
const { v4: uuidv4 } = require("uuid");

export const INITIAL_MOCK_PRODUCTS: ProductTyped[] = [
  {
    id: uuidv4(),
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
    date: "2024-08-22T00:00:00.000Z",
  },
  {
    id: uuidv4(),
    name: "AProduct 2",
    description: "Description for Product 2",
    price: 30,
    image:
      "https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2",
    date: "2024-08-21T00:00:00.000Z",
  },
];
