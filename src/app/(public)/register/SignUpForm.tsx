"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import InputError from "@/components/ui/InputError";
export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);
  const [errors, setErrors] = useState<Record<string, []>>({});

  const SubmitForm = async (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign up to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={SubmitForm}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="name"
                  placeholder="John Do"
                  required
                />
              </div>
              <InputError messages={errors.name} />
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
                <InputError messages={errors.email} />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    required
                  />
                  <EyeIcon
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    size={20}
                    color="#555555"
                    className="absolute right-2.5 top-2 cursor-pointer "
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="passwordConfirmation">
                    Password Confirmation
                  </Label>
                </div>
                <div className="relative">
                  <Input
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    id="passwordConfirmation"
                    type={isPasswordConfirmationVisible ? "text" : "password"}
                    required
                  />
                  <EyeIcon
                    onClick={() =>
                      setIsPasswordConfirmationVisible(
                        !isPasswordConfirmationVisible
                      )
                    }
                    size={20}
                    color="#555555"
                    className="absolute right-2.5 top-2 cursor-pointer "
                  />

                  <InputError messages={errors.password} />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
            <div className="mt-4 text-center text-sm">
              have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Log in
              </Link>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
