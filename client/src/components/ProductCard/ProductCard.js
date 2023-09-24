import { Question } from "../../icons/Question";
import { Button } from "../Button";
import { Card } from "../Card";
import { addItem } from "../../strore";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils";

export const ProductCard = ({ id, imageUrl, name, price }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <div className="flex flex-col gap-1">
        <div
          className="bg-fingertips-steel p-1 rounded-full w-fit cursor-pointer absolute right-2 top-2"
          onClick={() => alert(id)}
        >
          <Question className="fill-fingertips-light-gray" />
        </div>
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
