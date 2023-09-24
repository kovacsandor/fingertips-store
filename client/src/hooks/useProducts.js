import { useQuery } from "react-query";
import { faker } from "@faker-js/faker";

export const useProducts = () => {
  const query = useQuery("products", async () => {
    const symbol = faker.finance.currencySymbol()
    const products = new Array(Math.floor(Math.random() * 20))
      .fill(null)
      .map((item) => {
        return {
          id: faker.database.mongodbObjectId(),
          imageUrl: faker.image.urlLoremFlickr({ height: 200, width: 300 }),
          name: faker.commerce.productName(),
          price:faker.commerce.price({ dec: 0, symbol }),
        };
      });
    return Promise.resolve(products);
  });

  return query;
};
