import { Button } from "../Button";
import { Card } from "../Card";
import { addItem } from "../../strore";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils";
import { ProductCardDetails } from "./ProductCardDetails";

export const ProductCard = ({ product }) => {
  const { id, imageUrl, name, price } = product
  const dispatch = useDispatch();
  return (
    <Card>
      <div className="flex flex-col gap-1">
        <ProductCardDetails product={product}/>
        <img src={imageUrl} height={400} width={600} alt="product" />
        <div
          className="whitespace-nowrap overflow-ellipsis overflow-hidden"
          title={name}
        >
          {name}
        </div>
        <div className="font-bold">{formatPrice(price)}</div>
        <Button onClick={() => dispatch(addItem({ id, name, price }))}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
