import { Cart } from "../../icons";
import { Root, Trigger, Content, Arrow } from "@radix-ui/react-popover";
import { Button } from "../Button";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils";

export const CartButton = () => {
  const cart = useSelector((state) => state.cart);

  const items = useMemo(() => {
    return Object.keys(cart).reduce((acc, curr) => acc + cart[curr].units, 0);
  }, [cart]);

  const total = useMemo(() => {
    return Object.keys(cart).reduce(
      (acc, curr) => acc + cart[curr].units * cart[curr].price,
      0
    );
  }, [cart]);

  return (
    <Root>
      <Trigger>
        <div className="flex gap-1 py-1 px-2 hover:bg-fingertips-steel hover:bg-opacity-10 cursor-pointer rounded z-20 relative">
          <Cart className="fill-fingertips-steel" />
          {items > 0 && (
            <span className="rounded-full bg-fingertips-red text-fingertips-white w-4 h-4 text-xs absolute top-4 left-0">
              {items}
            </span>
          )}
          <span className="hidden sm:inline">Shopping Cart</span>
        </div>
      </Trigger>
      <Content>
        <Arrow className="fill-fingertips-white" />
        <div className="flex flex-col gap-1 p-4 bg-fingertips-white shadow rounded text-fingertips-navy-blue">
          <div className="font-bold">You have {items} items in your cart!</div>
          {items > 0 && (
            <table>
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 px-2">Items</th>
                  <th className="text-right py-2 px-2">Units</th>
                  <th className="text-right py-2 px-2">Price</th>
                </tr>
              </thead>
              <tbody className="border-b">
                {Object.keys(cart).map((id) => {
                  const item = cart[id];
                  return (
                    <tr key={id}>
                      <td className="text-left py-1 px-2">{item.name}</td>
                      <td className="text-right py-1 px-2">{item.units}</td>
                      <td className="text-right py-1 px-2">
                        {formatPrice(item.price)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="font-bold">
                <tr>
                  <td className="text-left py-2 px-2" colSpan={2}>
                    Total order value
                  </td>
                  <td className="text-right py-2 px-2">{formatPrice(total)}</td>
                </tr>
              </tfoot>
            </table>
          )}
          <Button
            disabled={items === 0}
            onClick={() => alert("navigate to checkout page...")}
          >
            Checkout
          </Button>
        </div>
      </Content>
    </Root>
  );
};
