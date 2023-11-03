import { Prisma } from "@prisma/client";
import prisma from "./prisma";
import { cookies } from "next/headers";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

async function findCart(localCartId: string): Promise<CartWithProducts | null> {
  return await prisma.cart.findUnique({
    where: { id: localCartId },
    include: { items: { include: { product: true } } },
  });
}

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("localCartId")?.value;
  const cart = localCartId ? await findCart(localCartId) : null;

  if (!cart) return null;

  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0,
    ),
  };
}

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });

  //Note: Needs encryption and secure settings in real production app
  cookies().set("localCartId", newCart.id);

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}
