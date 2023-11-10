import { Metadata } from "next";
import Link from "next/link";

import { ShoppingCart, getCart } from "@/lib/db/cart";
import BagIcon from "@/components/icons/BagIcon";
import CartEntry from "@/components/CartEntry/CartEntry";
import BigCartIcon from "@/components/icons/BigCartIcon";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Your cart --- Flowmazon",
};

const renderCartTable = (cart: ShoppingCart) => (
  <>
    <h2 className="sr-only">Cart List</h2>
    <div className="grid w-full grid-cols-12">
      <span className="col-span-3">Image</span>
      <span className="col-span-4">Title</span>
      <span className="col-span-3">Price</span>
      <span className="col-span-1 grid place-items-center">Quantity</span>
      <span className="col-span-1" />
    </div>
    <div className="divider" />
    <ul className="flex flex-col gap-4">
      {cart?.items.map((cartItem) => (
        <li key={cartItem.productId}>
          <CartEntry cartItem={cartItem} />
        </li>
      ))}
    </ul>
    <div className="divider" />
    <div>Total: {formatPrice(cart?.subtotal || 0)}</div>
  </>
);

const renderCartIsEmpty = () => (
  <div className="flex flex-col items-center justify-center gap-12 py-14">
    <BigCartIcon />
    <h3 className="mb-4 text-xl font-semibold ">
      Your shopping cart is empty.
    </h3>
    <Link href="/" className="btn btn-primary">
      Let&apos;s go shopping!
    </Link>
  </div>
);

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <div className="container mx-auto">
        <div className="mb-6 flex items-center gap-2 py-6 text-3xl font-bold">
          <BagIcon width={36} height={36} />
          <h1 className="">Shopping Cart</h1>
        </div>
        <section className="mb-6">
          {cart && cart.items.length
            ? renderCartTable(cart)
            : renderCartIsEmpty()}
        </section>
      </div>
    </div>
  );
}
