import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";
import { formatPrice } from "@/lib/format";

interface ProductCardProps {
  product: Product;
}

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

export default function ProductCard({ product }: ProductCardProps) {
  const isNew = Date.now() - new Date(product.createdAt).getTime() < ONE_WEEK;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="aspect-square object-cover object-center  lg:aspect-[8/5]"
        />
      </figure>
      <div className="flex flex-grow flex-col gap-4 p-5">
        <h2 className="card-title lg:text-lg">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        <p className="mt-auto line-clamp-3 overflow-hidden text-sm">
          {product.description}
        </p>
        <p>{formatPrice(product.price)}</p>
        <div className="flex justify-end">
          <Link
            href={`/products/${product.id}`}
            className="btn btn-primary btn-sm text-xs"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
