"use client";

import Image from "next/image";
import errorImage from "@/assets/error.png";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mt-10 flex flex-col items-center gap-8">
      <h2 className="text-2xl">Something went wrong!</h2>
      <p className="text-4xl font-bold text-error">{error.message}</p>
      <Image
        src={errorImage}
        width={710}
        height={396}
        alt="Robot fix computer"
      />
      <button onClick={() => reset()} className="btn btn-warning">
        Try again
      </button>
    </div>
  );
}
