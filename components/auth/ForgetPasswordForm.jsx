"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Logo from "./Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ForgetPasswordForm({ company }) {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setServerError("");

      try {
        const res = await fetch("/api/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong.");
        }

        resetForm();
        toast.success(data.message || "OTP sent to email.");
        sessionStorage.setItem("email", values.email);
        sessionStorage.setItem("resetRequestId", data.requestId);
        router.push("/verify-otp");
      } catch (err) {
        setServerError(err.message);
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
              Forgot Password 
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {serverError && (
              <div className="text-[#f0506e] tex-sm bg-[#fef4f6] border border-[#f0506e] rounded-[5px] px-3 py-3">
                {serverError}
              </div>
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
                  placeholder="Enter your email address"
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

              {/* Login link */}
              <div className="text-right">
                <Link
                  href="/login"
                  className="text-sm text-cyan-700 hover:underline"
                >
                  Back To Login
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-cyan-700 hover:bg-cyan-600 text-white flex items-center justify-center gap-2
             disabled:opacity-70 disabled:cursor-not-allowed
             focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-colors duration-200 cursor-pointer"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  "CONTINUE"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
