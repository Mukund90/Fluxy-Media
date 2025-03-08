"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo1.jpg"
            alt="Fluxy Media Logo"
            width={50}
            height={50}
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[80px] md:h-[80px] transform transition-transform duration-300 hover:scale-110"
          />
          <div className="text-lg sm:text-xl md:text-2xl font-bold">
            <span className="text-purple-900">FLUXY</span>
            <span className="text-purple-400">MEDIA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-background hover:bg-accent hover:text-accent-foreground">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem 
                      title="SEO Optimization" 
                      href="/services/seo"
                      className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600">SEO</div>
                      </div>
                      Boost your search rankings and drive organic traffic
                    </ListItem>
                    <ListItem
                      title="Lead Generation"
                      href="/services/ppc"
                      className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600">PPC</div>
                      </div>
                      Generating leads and attracting clients through targeted campaigns
                    </ListItem>
                    <ListItem
                      title="Social Media"
                      href="/services/social-media"
                      className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600">Social</div>
                      </div>
                      Build your brand presence on social platforms
                    </ListItem>
                    <ListItem 
                      title="Content Creation" 
                      href="/services/content"
                      className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600">Content</div>
                      </div>
                      Create valuable content that resonates with your audience
                    </ListItem>
                    <ListItem
                      title="Web Design"
                      href="/services/web-design"
                      className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600">Web</div>
                      </div>
                      Modern, responsive websites that convert visitors
                    </ListItem>
                    <ListItem
                      title="Graphic Design"
                      href="/services/graphic-design"
                      className="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600">Design</div>
                      </div>
                      Stunning visuals that enhance your brand identity
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/career"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    )}
                  >
                    Careers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto">
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button asChild className="bg-purple-600">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="py-2 px-4 hover:bg-muted rounded-md">
              Home
            </Link>
            <Link href="/about" className="py-2 px-4 hover:bg-muted rounded-md">
              About
            </Link>
            {/* Services Dropdown */}
            <div className="py-2 px-4">
              <div className="font-medium mb-2 text-purple-600">Services</div>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  href="/services/seo"
                  className="py-2 px-3 hover:bg-purple-50 dark:hover:bg-purple-950 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">SEO Optimization</span>
                  <span className="text-sm text-muted-foreground">Boost your search rankings</span>
                </Link>
                <Link
                  href="/services/ppc"
                  className="py-2 px-3 hover:bg-purple-50 dark:hover:bg-purple-950 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Lead Generation</span>
                  <span className="text-sm text-muted-foreground">Targeted marketing campaigns</span>
                </Link>
                <Link
                  href="/services/social-media"
                  className="py-2 px-3 hover:bg-purple-50 dark:hover:bg-purple-950 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Social Media</span>
                  <span className="text-sm text-muted-foreground">Build brand presence</span>
                </Link>
                <Link
                  href="/services/content"
                  className="py-2 px-3 hover:bg-purple-50 dark:hover:bg-purple-950 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Content Creation</span>
                  <span className="text-sm text-muted-foreground">Engaging content strategy</span>
                </Link>
                <Link
                  href="/services/web-design"
                  className="py-2 px-3 hover:bg-purple-50 dark:hover:bg-purple-950 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Web Design</span>
                  <span className="text-sm text-muted-foreground">Modern websites</span>
                </Link>
                <Link
                  href="/services/graphic-design"
                  className="py-2 px-3 hover:bg-purple-50 dark:hover:bg-purple-950 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Graphic Design</span>
                  <span className="text-sm text-muted-foreground">Visual branding</span>
                </Link>
              </div>
            </div>
            <Link
              href="/career"
              className="py-2 px-4 hover:bg-muted rounded-md"
            >
              Career
            </Link>
            <Button asChild className="mt-2 bg-purple-600">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
