import { useQuery } from "react-query";
import { faker } from "@faker-js/faker";

export const useProducts = () => {
  const query = useQuery("products", async () => {
    const products = new Array(faker.number.int({ max: 20 }))
      .fill(null)
      .map((item) => {
        return {
          bluetooth: faker.datatype.boolean(),
          connection: faker.datatype.boolean(),
          description: faker.commerce.productDescription(),
          displayColour: faker.datatype.boolean(),
          displaySize: faker.number.int({ min: 3, max: 6 }),
          id: faker.database.mongodbObjectId(),
          imageUrl: faker.image.urlLoremFlickr({ height: 200, width: 300 }),
          lines: faker.number.int({ min: 3, max: 6 }),
          name: faker.commerce.productName(),
          poe: faker.datatype.boolean(),
          price:faker.commerce.price({ dec: 0 }),
          usb: faker.datatype.boolean(),
        };
      });

      console.log(products);
    return Promise.resolve(products);
  });

  return query;
};
