import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Logo() {
  return (
    <Link href={"/"} className="btn btn-ghost text-xl normal-case">
      <Image src={logo} alt="flowmazon logo" width={40} height={40} />
      <span>Flowmazon</span>
    </Link>
  );
}
