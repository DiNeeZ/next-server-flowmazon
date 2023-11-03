import { cache } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ObjectId } from "bson";
import prisma from "@/lib/db/prisma";

import PriceTag from "@/components/PriceTag";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductPageProps {
  params: {
    id: string;
  };
}

function InvalidProduct() {
  return (
    <section className="grid h-screen place-items-center">
      <h1 className="textt-center text-2xl font-bold text-error">
        Product id is Invalid!!! What are you doing!?!?!
      </h1>
    </section>
  );
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.id);

  return {
    title: product.name + " - Flowmazon",
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.imageUrl }],
    },
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export default async function Product({ params: { id } }: ProductPageProps) {
  if (!ObjectId.isValid(id)) return <InvalidProduct />;
  const product = await getProduct(id);

  return (
    <section className="my-8">
      <div className="container mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
        <Image
          src={product.imageUrl}
          width={512}
          height={512}
          alt={product.name}
          className="aspect-video w-full justify-self-center rounded-xl object-cover object-center shadow-2xl"
        />
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <PriceTag price={product.price} />
          <p>{product.description}</p>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </section>
  );
}
