import faker from "faker";

  const Products = [...Array(20)].map(() => {
   return ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    });
  });
export default Products;
