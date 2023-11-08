"use client";

import { ComponentProps, useState } from "react";
import CartIcon from "./icons/CartIcon";
import { incrementProductQuantity } from "@/actions";
import { toast } from "sonner";

interface AddToCartButtonProps extends ComponentProps<"button"> {
  productId: string;
  className?: string;
}

export default function AddToCartButton({
  productId,
  className = "",
  ...restProps
}: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (id: string) => {
    try {
      setLoading(true);
      await incrementProductQuantity(id);
      toast.success("Added to Cart.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={() => handleClick(productId)}
      className={`btn btn-accent w-full max-w-xs ${className}`}
      disabled={loading}
      {...restProps}
    >
      Add To Cart
      {loading ? (
        <span className="loading loading-spinner text-black/70" />
      ) : (
        <CartIcon />
      )}
    </button>
  );
}
