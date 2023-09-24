import { Question } from "../../icons/Question";
import { Content, Root, Trigger } from "@radix-ui/react-hover-card";

export const ProductCardDetails = ({ product }) => {
  return (
    <Root>
      <Trigger>
        <div className="bg-fingertips-steel p-1 rounded-full w-fit cursor-pointer absolute top-2 right-2">
          <Question className="fill-fingertips-light-gray" />
        </div>
      </Trigger>
      <Content className="z-10">
        <div className="bg-fingertips-yellow shadow p-4 rounded max-w-xs relative top-6 flex gap-4 text-xs">
          <div className="">
            <img
              src={product.imageUrl}
              height={200}
              width={300}
              alt="product"
            />
          </div>
          <div className="flex-grow flex flex-col gap-4">
            <div className="flex-grow flex flex-col gap-2">
              <div className="font-bold">Description</div>
              <p>{product.description}</p>
            </div>
            <div className="flex-grow flex flex-col gap-2">
              <div className="font-bold">Key features</div>
              <table>
                <tbody>
                  <tr>
                    <td>Lines:</td>
                    <td>{product.lines}</td>
                  </tr>
                  <tr>
                    <td>Display:</td>
                    <td>
                      {product.displaySize}" {product.displayColour && "Colour"}
                    </td>
                  </tr>
                  <tr>
                    <td>Bluetooth:</td>
                    <td>
                      {product.bluetooth ? "Yes with mobile pairing" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td>Connection:</td>
                    <td>{product.connection ? "2 x Rj45 and Wi-Fi" : "N/A"}</td>
                  </tr>
                  <tr>
                    <td>USB:</td>
                    <td>{product.connection ? "2 x USB-C" : "No"}</td>
                  </tr>
                  <tr>
                    <td>PoE:</td>
                    <td>{product.poe ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Content>
    </Root>
  );
};
