"use client";

import CartIcon from "./icons/CartIcon";

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <button
      onClick={() => console.log(productId)}
      className="btn btn-accent w-full max-w-xs"
    >
      Add To Cart
      <CartIcon />
    </button>
  );
}
