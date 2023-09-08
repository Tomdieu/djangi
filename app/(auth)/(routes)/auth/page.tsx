import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="">
      <div>
        <h2 className="">Get Started</h2>
        <div className="flex items-center w-full justify-center gap-10">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
