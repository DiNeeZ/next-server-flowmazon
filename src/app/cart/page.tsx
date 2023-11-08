import { Metadata } from "next";

import { getCart } from "@/lib/db/cart";
import BagIcon from "@/components/icons/BagIcon";
import CartEntry from "@/components/CartEntry";

export const metadata: Metadata = {
  title: "Your cart --- Flowmazon",
};

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
          <h2 className="sr-only">Cart List</h2>
          <div className="grid w-full grid-cols-12">
            <span className="col-span-3">Image</span>
            <span className="col-span-4">Title</span>
            <span className="col-span-4">Price</span>
            <span className="col-span-1 grid place-items-center">Quantity</span>
          </div>
          <div className="divider" />
          <ul className="flex flex-col gap-4">
            {cart?.items.map((cartItem) => (
              <li key={cartItem.productId}>
                <CartEntry cartItem={cartItem} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
