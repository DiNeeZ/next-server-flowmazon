"use client";

import Link from "next/link";
import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import CartIcon from "../icons/CartIcon";

interface CartButtonProps {
  cart: ShoppingCart | null;
}

export default function CartButton({ cart }: CartButtonProps) {
  const closeDropdown = () => {
    const element = document.activeElement as HTMLElement;
    if (element) element.blur();
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        <div className="indicator">
          <CartIcon />

          <span className="badge indicator-item badge-sm">
            {cart?.size ?? 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{cart?.size ?? 0} Items</span>
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link
              onClick={closeDropdown}
              href="/cart"
              className="btn btn-accent btn-block"
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
