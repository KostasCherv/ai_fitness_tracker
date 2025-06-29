"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3 animate-fadeIn">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group hover-lift">
          <div className="p-1 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
            <ZapIcon className="w-4 h-4 text-primary group-hover:animate-pulse" />
          </div>
          <span className="text-xl font-bold font-mono">
            AI<span className="text-primary text-glow">Fitness</span>Tracker
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors group"
              >
                <HomeIcon size={16} className="group-hover:animate-pulse" />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors group"
              >
                <DumbbellIcon size={16} className="group-hover:animate-pulse" />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors group"
              >
                <UserIcon size={16} className="group-hover:animate-pulse" />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10 hover-lift focus-cyber"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10 hover-lift focus-cyber"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-gradient-primary text-primary-foreground hover:bg-primary/90 hover-lift focus-cyber">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
