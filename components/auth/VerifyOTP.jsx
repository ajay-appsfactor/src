"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Logo from "./Logo";

export default function VerifyOtpPage({ company }) {
  const router = useRouter();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const requestId = sessionStorage.getItem("resetRequestId");

    if (!storedEmail && !requestId) {
      router.replace("/forgot-password");
      return;
    }

    setEmail(storedEmail);
  }, [router]);

  const [serverError, setServerError] = useState("");
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: Yup.object({
      otp: Yup.string()
        .matches(/^[0-9]+$/, "OTP must contain only numbers")
        .length(6, "OTP must be 6 digits")
        .required("OTP is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setServerError("");
      setMessage("");

      try {
        const res = await fetch("/api/auth/forgot-password", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp: values.otp }),
        });

        const data = await res.json();

        // console.log("Response verify otp :", data);

        if (!res.ok) {
          throw new Error(data.error || "Invalid OTP");
        }

        resetForm();
        sessionStorage.setItem("resetToken", data.resetToken);
        sessionStorage.removeItem("resetRequestId");
        // sessionStorage.removeItem("email");
        toast.success(data.message || "OTP verified successfully.");
        router.push(`/reset-password?token=${data.resetToken}`);
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
              Verify OTP
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
              <div>
                <Label htmlFor="otp" className="mb-2">
                  Enter OTP<span className="text-rose-500">*</span>
                </Label>
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  maxLength={6}
                  className="h-12"
                  placeholder="Enter 6-digit OTP"
                  value={formik.values.otp}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.otp && formik.errors.otp && (
                  <p className="text-xs mt-1 text-red-500">
                    {formik.errors.otp}
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
                    <Loader className="w-4 h-4 animate-spin" /> Verifying...
                  </>
                ) : (
                  "VERIFY OTP"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
