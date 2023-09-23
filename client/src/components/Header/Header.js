import { Cart } from "../../icons";

export const Header = () => {
  return (
    <header className="flex gap-4 py-2 px-4 items-center bg-fingertips-navy-blue text-fingertips-steel whitespace-nowrap sticky top-0">
      <div className="flex flex-grow justify-center">
        <span className="uppercase">Hallo World</span>
      </div>
      <div className="flex gap-1 py-1 px-2 hover:bg-fingertips-steel hover:bg-opacity-10 cursor-pointer rounded">
        <Cart className="fill-fingertips-steel" />
        <span>Shopping Cart</span>
      </div>
    </header>
  );
};
