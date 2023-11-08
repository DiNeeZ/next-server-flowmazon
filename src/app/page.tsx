import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <>
      {/* __________________HERO__________________ */}
      <section>
        <div className="hero min-h-[50vh] bg-base-200 py-10">
          <div className="container mx-auto">
            <div className="hero-content flex-col gap-8 lg:flex-row lg:gap-12 xl:gap-24">
              <Image
                width={512}
                height={515}
                alt={products[0].name}
                src={products[0].imageUrl}
                className="aspect-square w-full max-w-lg rounded-lg object-cover shadow-2xl lg:h-[512px]"
              />
              <div>
                <h1 className="text-5xl font-bold">{products[0].name}</h1>
                <p className="py-6">{products[0].description}</p>
                <Link
                  href={`/products/${products[0].id}`}
                  className="btn btn-primary"
                >
                  Check it Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* __________________PRODUCTS GRID__________________ */}
      <section>
        <div className="container mx-auto">
          <ul className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-12">
            {products.slice(1).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
