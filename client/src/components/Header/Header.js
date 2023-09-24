import { Cart } from "../../icons";

export const Header = () => {
  return (
    <header className="flex py-2 px-4 justify-center bg-fingertips-navy-blue text-fingertips-steel whitespace-nowrap sticky top-0 z-10">
      <span className="uppercase leading-8">Hallo World</span>
      <div
        className="flex gap-1 py-1 px-2 hover:bg-fingertips-steel hover:bg-opacity-10 cursor-pointer rounded absolute right-2"
        onClick={() => alert("Shopping Cart")}
      >
        <Cart className="fill-fingertips-steel" />
        <span className="hidden sm:inline">Shopping Cart</span>
      </div>
    </header>
  );
};
