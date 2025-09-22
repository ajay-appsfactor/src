"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Card className="w-full max-w-md text-center shadow-2xl border-0 bg-white/10 backdrop-blur-lg">
        <CardContent className="p-10">
          <h1 className="text-7xl font-extrabold text-white animate-bounce">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="mt-2 text-gray-300">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          <Button
            onClick={() => router.push("/login")}
            className="cursor-pointer mt-6 w-full flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
