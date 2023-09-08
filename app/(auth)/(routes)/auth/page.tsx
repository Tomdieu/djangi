import Link from "next/link"
import { Button } from "@/components/ui/button";

export default function AuthPage(){
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div>
                <h2 className="">Get Started</h2>
                <div className="flex items-center justify-center w-full gap-10">
                <Button asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link href="/register">Register</Link>
                </Button>
                </div>
            </div>
        </div>
    )
}