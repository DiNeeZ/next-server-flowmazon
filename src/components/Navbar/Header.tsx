import Searchbar from "./Searchbar";
import Logo from "./Logo";
import CartButton from "./CartButton";
import ProfileMenu from "./ProfileMenu";
import { getCart } from "@/lib/db/cart";

export default async function Header() {
  const cart = await getCart();

  return (
    <header className=" bg-base-100">
      <div className="container navbar mx-auto justify-between">
        <Logo />
        <Searchbar />
        <div className="flex flex-none items-center">
          <CartButton cart={cart} />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
