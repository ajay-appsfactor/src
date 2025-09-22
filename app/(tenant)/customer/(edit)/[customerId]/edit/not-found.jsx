"use client";

import Link from "next/link";
import { Ghost } from "lucide-react"; 

export default function NotFound() {
  return (
    <div className="p-6 flex flex-col items-center justify-center px-4 text-center bg-gray-50 rounded-md">
      <Ghost className="w-16 h-16 text-rose-500 mb-4" />
      <h1 className="text-4xl font-bold text-rose-600 mb-2">
        Oops! Customer Not Found
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        The customer you're looking for doesn’t exist or may have been removed.
        Please check the link or try again later.
      </p>
      <Link
        href="/customers"
        className="inline-block bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium py-2 px-4 rounded-md transition"
      >
        ← Back to Customer List
      </Link>
    </div>
  );
}
