"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginData } from "@/schemas/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred during login.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    if (success && success?.length > 6) {
      toast.success("Sign Up successful", {
        description: "Sign Up successful! You can now log in.",
        action: {
          label: "Ok",
          onClick: () => console.log("ok"),
        },
      });
    }

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("success");

    router.replace(`/login?${newParams.toString()}`);
  }, [success, searchParams, router]);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-1">
      <div className="w-full max-w-sm">
        <Card
          className="w-full max-w-md mx-auto shadow-xl rounded-xl"
          data-testid="login-card"
        >
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Sign In
            </CardTitle>
            <p className="text-sm text-gray-500">
              Access your cloud training dashboard.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Input */}
              <div className="space-y-1">
                <Label htmlFor="email" data-testid="label-card">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                  data-testid="input-card"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <Label htmlFor="password" data-testid="label-card">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className={errors.password ? "border-red-500" : ""}
                  data-testid="input-card"
                />
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div
                  className="p-3 bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full "
                disabled={isSubmitting}
                data-testid="button-login"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
              <FieldDescription className="text-center">
                Don&apos;t have an account? <Link href="/signup">Sign up</Link>
              </FieldDescription>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
