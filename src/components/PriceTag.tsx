import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
}

export default function PriceTag({ price }: PriceTagProps) {
  return <div className="badge">{formatPrice(price)}</div>;
}
