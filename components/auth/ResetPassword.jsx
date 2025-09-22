"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "./Logo";

export default function VerifyOtpPage({ company }) {
  const searchParams = useSearchParams();
  const resetToken = searchParams.get("token");
  const router = useRouter();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const requestId = sessionStorage.getItem("resetToken");

    if (!storedEmail || !requestId) {
      router.replace("/forgot-password");
      return;
    }

    setEmail(storedEmail);
  }, [router]);

  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: { password: "", confirm_password: "" },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setServerError("");
      setMessage("");

      try {
        const res = await fetch("/api/auth/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: resetToken,
            password: values.password,
            email,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setServerError(data.error || "Invalid Password");
        } else {
          setMessage("Password updated successfully.");
          sessionStorage.removeItem("resetToken");
          sessionStorage.removeItem("email");
          router.push("/login");
        }
      } catch (err) {
        setServerError("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
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
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800 font-extrabold">
              Reset Password
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {serverError && (
              <Alert variant="destructive">
                <AlertTitle>{serverError}</AlertTitle>
              </Alert>
            )}

            {message && (
              <Alert className="bg-green-100 text-green-800 border-green-300">
                <AlertTitle>{message}</AlertTitle>
              </Alert>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-4">
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

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirm_password" className="mb-2">
                  Confirm Password<span className="text-rose-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="confirm_password"
                    name="confirm_password"
                    className="h-12"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.confirm_password &&
                  formik.errors.confirm_password && (
                    <p className="text-xs mt-1 text-red-500">
                      {formik.errors.confirm_password}
                    </p>
                  )}
              </div>

              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-cyan-700 hover:underline"
                >
                  Back to forgot your password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-700 hover:bg-cyan-600 text-white flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" /> Updating...
                  </>
                ) : (
                  "UPDATE PASSWORD"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
