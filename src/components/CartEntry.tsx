"use client";

import Image from "next/image";
import type { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import { setProductQuantity } from "@/actions";
import { ChangeEvent, useState } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

export default function CartEntry({ cartItem }: CartEntryProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const quantityOptions: JSX.Element[] = [];

  for (let i = 1; i <= 99; i++)
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );

  const setNewQuantity = async (e: ChangeEvent<HTMLSelectElement>) => {
    try {
      setLoading(true);
      await setProductQuantity(cartItem.productId, +e.target.value);
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-12 items-center justify-center">
      <Image
        src={cartItem.product.imageUrl}
        alt={cartItem.product.name}
        width={128}
        height={128}
        className="col-span-3 aspect-square rounded-lg object-cover object-center shadow"
      />
      <h3 className="col-span-4 justify-center self-center pr-4 text-base font-semibold">
        {cartItem.product.name}
      </h3>
      <div className="col-span-4 font-bold text-red-600">
        {formatPrice(cartItem.product.price * cartItem.quantity)}
      </div>
      <div className="relative col-span-1 grid place-items-center">
        {loading && (
          <span className="loading loading-infinity loading-sm absolute right-full translate-x-3/4" />
        )}
        {error && (
          <span className="absolute right-full text-error">{error}</span>
        )}
        <select
          disabled={loading}
          defaultValue={cartItem.quantity}
          className="select select-bordered select-sm"
          onChange={setNewQuantity}
        >
          {quantityOptions}
        </select>
      </div>
    </div>
  );
}
