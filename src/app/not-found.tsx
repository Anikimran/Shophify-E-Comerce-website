"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, MailWarning } from "lucide-react";
import { motion } from "framer-motion";

// If you're using the Pages Router instead of the App Router,
// copy this component into /pages/404.tsx (same code works).

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-[100vh] grid place-items-center bg-gradient-to-b from-white to-gray-50 px-6 py-16">
      <section className="w-full max-w-2xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-gray-500 bg-white shadow-sm">
          <span className="h-2 w-2 rounded-full bg-gray-400" />
          <span>Oops! Something’s missing</span>
        </div>

        {/* 404 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-7xl md:text-8xl font-extrabold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#0ea5e9,#8b5cf6,#ef4444)]">
            Coming Soon
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 text-lg text-gray-600"
        >
          We are working the page you’re looking for.
        </motion.p>

        {/* Helpful actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <ArrowLeft className="h-4 w-4" /> Go back
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            <Home className="h-4 w-4" /> Go home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <MailWarning className="h-4 w-4" /> Contact support
          </Link>
        </motion.div>

        {/* Tips */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-8 text-xs text-gray-500"
        >
          Mistyped the address? Check the URL or return to the homepage.
        </motion.p>

        {/* Decorative ring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="pointer-events-none relative mx-auto mt-8 h-28 w-28"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/20 via-fuchsia-400/20 to-red-400/20 blur-2xl" />
          <div className="absolute inset-[12%] rounded-full border border-dashed border-gray-200" />
        </motion.div>
      </section>
    </main>
  );
}
