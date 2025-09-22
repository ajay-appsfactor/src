"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Loader } from "lucide-react";
import { getRootDomain, protocol } from "@/utils/rootDomain";

const validationSchema = Yup.object({
  subdomain: Yup.string()
    .trim()
    .lowercase()
    .required("Please enter your company subdomain.")
    .matches(
      /^[a-z0-9-]+$/,
      "Subdomain can only contain lowercase letters, numbers, and hyphens."
    ),
});

export default function LandingPage() {
  const rootDomain = getRootDomain();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    const sub = values.subdomain.trim().toLowerCase();

    try {
      const res = await fetch("/api/check-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subdomain: sub }),
      });

      const data = await res.json();

      if (res.ok) {
        // router.push('/login')
        window.location.href = `${protocol}://${sub}.${rootDomain}/login`;
      } else {
        setFieldError("subdomain", data.error || "Company not found.");
      }
    } catch {
      setFieldError("subdomain", "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={50}
            style={{ height: "auto" }}
            className="mx-auto"
            priority
          />

          <CardTitle className="text-2xl font-bold text-slate-800">
            Welcome to 3DQuotePro
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter your company subdomain to continue
          </p>
        </CardHeader>

        <CardContent>
          <Formik
            initialValues={{ subdomain: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Label htmlFor="subdomain" className="mb-2">
                    Subdomain
                  </Label>
                  <div className="flex items-center">
                    <div className="relative flex-1">
                      <Field
                        as={Input}
                        id="subdomain"
                        name="subdomain"
                        placeholder="your-subdomain"
                        className="w-full rounded-r-none focus:z-10"
                      />
                    </div>
                    <span className="bg-gray-100 px-3 border border-l-0 border-input rounded-r-md text-gray-500 min-h-[36px] flex items-center">
                      .{rootDomain}
                    </span>
                  </div>
                  <ErrorMessage
                    name="subdomain"
                    component="p"
                    className="text-xs text-red-600 mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-700 cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader className="w-4 h-4 animate-spin" /> Checking...
                    </div>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
