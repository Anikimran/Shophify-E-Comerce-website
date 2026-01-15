"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { error } from "../../public/logo";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className=" justify-center min-h-screen">
      <Image
        src={error}
        alt="error"
        width={500}
        height={600}
        priority
        className="mx-auto"
      />
      <div className=" text-center">
        <Link
          href="/"
          className="border border-blue-600 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
