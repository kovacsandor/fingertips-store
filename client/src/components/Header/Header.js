import { CartButton } from "./CartButton";

export const Header = () => {
  return (
    <header className="flex flex-row-reverse text-fingertips-steel whitespace-nowrap sticky top-0 z-10">
      <span className="uppercase leading-8 absolute w-full bg-fingertips-navy-blue py-2 left-0 top-0 text-center ">
        Hallo World
      </span>
      <div className="flex flex-row-reverse py-2 px-4 z-20">
        <CartButton />
      </div>
    </header>
  );
};
