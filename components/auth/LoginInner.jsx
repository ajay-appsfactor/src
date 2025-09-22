"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Logo from "./Logo";
// import Logo from "../../../public/logo.png";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { EyeIcon, EyeOffIcon, Loader } from "lucide-react";

export default function LoginInner({ company }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      const roles = session?.user?.roles || [];

      if (roles.includes("super_admin")) {
        router.push("/super-admin/dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [status, session, router]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setServerError("");

      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.ok) {
        const sessionRes = await fetch("/api/auth/session");
        const freshSession = await sessionRes.json();
        const roles = freshSession?.user?.roles || [];

        if (roles.includes("super_admin")) {
          router.push("/super-admin/dashboard");
        } else {
          router.push("/dashboard");
        }
      } else {
        setServerError("Invalid email or password");
      }

      setSubmitting(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-50 to-gray-200 p-6">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Small Logo */}
        <Logo company={company} className="w-12 h-12" />

        {/* Welcome Back Heading */}
        <h2 className="text-2xl font-extrabold mb-6 text-slate-800 animate-fade-in">
          Welcome Back 👋
        </h2>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800 font-extrabold">
              Log in to {company.company_name}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {serverError && (
              <Alert variant="destructive">
                <AlertTitle>{serverError}</AlertTitle>
              </Alert>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="mb-2">
                  Email address<span className="text-rose-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  className="h-12"
                  placeholder="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs mt-1 text-red-500">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="mb-2">
                  Password<span className="text-rose-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    className="h-12"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[17px] text-gray-500 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={18} />
                    ) : (
                      <EyeIcon size={18} />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs mt-1 text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-cyan-700 hover:underline"
                >
                  Forgotten your password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-cyan-700 hover:bg-cyan-600 text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" /> Logging in...
                  </>
                ) : (
                  "LOGIN NOW"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
