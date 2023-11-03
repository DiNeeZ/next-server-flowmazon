import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";

export default function NotFound() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <Image
        width={800}
        height={400}
        src={"/images/404.png"}
        alt="404"
        className="w-full max-w-xl object-cover"
      />

      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="sr-only">404. Page not found.</h1>

        <div className="flex flex-col items-center gap-2 py-6">
          <h2 className="text-lg font-bold">Look like you&apos;re lost</h2>
          <span>the page you&apos;re looking for is not avaliable!</span>
        </div>
        <Link
          href="/"
          className="btn btn-primary flex w-full max-w-xs items-center gap-4"
        >
          <span className="pt-1">Go to Home</span>
          <HomeIcon />
        </Link>
      </div>
    </section>
  );
}
