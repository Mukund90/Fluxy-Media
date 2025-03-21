"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
        "w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-transparent shadow-none"
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
            <span className="text-violet-700"> MEDIA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu className="relative z-[60]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="h-9 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-purple-600 text-white hover:bg-purple-700"
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] gap-3 p-4 md:grid-cols-2 bg-white border border-gray-200 rounded-xl shadow-xl relative z-[60]">
                    <ListItem 
                      title="SEO Optimization" 
                      href="/services/seo"
                      className="cursor-pointer transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600 group-hover:text-white text-sm sm:text-base">SEO</div>
                      </div>
                      <p className="text-gray-600 group-hover:text-white text-xs sm:text-sm">
                        Boost your search rankings and drive organic traffic
                      </p>
                    </ListItem>

                    <ListItem 
                      title="Lead Generation" 
                      href="/services/ppc"
                      className="cursor-pointer transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600 group-hover:text-white text-sm sm:text-base">PPC</div>
                      </div>
                      <p className="text-gray-600 group-hover:text-white text-xs sm:text-sm">
                        Generate quality leads through targeted campaigns
                      </p>
                    </ListItem>

                    <ListItem
                      title="Social Media Management"
                      href="/services/social-media"
                      className="cursor-pointer transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600 group-hover:text-white text-sm sm:text-base">Social</div>
                      </div>
                      <p className="text-gray-600 group-hover:text-white text-xs sm:text-sm">
                        Build your brand presence on social platforms
                      </p>
                    </ListItem>

                    <ListItem 
                      title="Content Creation" 
                      href="/services/content"
                      className="cursor-pointer transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600 group-hover:text-white text-sm sm:text-base">Content</div>
                      </div>
                      <p className="text-gray-600 group-hover:text-white text-xs sm:text-sm">
                        Create valuable content that resonates with your audience
                      </p>
                    </ListItem>

                    <ListItem
                      title="Website Design & Development"
                      href="/services/web-design"
                      className="cursor-pointer transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600 group-hover:text-white text-sm sm:text-base">Web</div>
                      </div>
                      <p className="text-gray-600 group-hover:text-white text-xs sm:text-sm">
                        Modern, responsive websites that convert visitors
                      </p>
                    </ListItem>

                    <ListItem
                      title="Graphic Design"
                      href="/services/graphic-design"
                      className="cursor-pointer transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600 group-hover:text-white text-sm sm:text-base">Design</div>
                      </div>
                      <p className="text-gray-600 group-hover:text-white text-xs sm:text-sm">
                        Stunning visuals that enhance your brand identity
                      </p>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/career"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Careers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto">
            <div className="flex items-center gap-4">
              <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-purple-600 hover:bg-purple-50"
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
        <div className="md:hidden bg-transparent">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="py-2 px-4 bg-purple-600 text-white hover:bg-purple-700 rounded-md">
              Home
            </Link>
            <Link href="/about" className="py-2 px-4 bg-purple-600 text-white hover:bg-purple-700 rounded-md">
              About
            </Link>
            {/* Services Dropdown */}
            <div className="py-2 px-4">
              <div className="font-medium mb-2  bg-purple-600 text-white p-2 rounded-md">Services</div>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  href="/services/seo"
                  className="py-2 px-3 bg-purple-600 text-white hover:bg-purple-700 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">SEO Optimization</span>
                  <span className="text-sm text-purple-100">Boost your search rankings</span>
                </Link>
                <Link
                  href="/services/ppc"
                  className="py-2 px-3 bg-purple-600 text-white hover:bg-purple-700 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Lead Generation</span>
                  <span className="text-sm text-purple-100">Targeted marketing campaigns</span>
                </Link>
                <Link
                  href="/services/social-media"
                  className="py-2 px-3 bg-purple-600 text-white hover:bg-purple-700 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Social Media</span>
                  <span className="text-sm text-purple-100">Build brand presence</span>
                </Link>
                <Link
                  href="/services/content"
                  className="py-2 px-3 bg-purple-600 text-white hover:bg-purple-700 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Content Creation</span>
                  <span className="text-sm text-purple-100">Engaging content strategy</span>
                </Link>
                <Link
                  href="/services/web-design"
                  className="py-2 px-3 bg-purple-600 text-white hover:bg-purple-700 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Website Design & Development</span>
                  <span className="text-sm text-purple-100">Modern websites</span>
                </Link>
                <Link
                  href="/services/graphic-design"
                  className="py-2 px-3 bg-purple-600 text-white hover:bg-purple-700 rounded-md transition-colors duration-150 flex flex-col"
                >
                  <span className="font-medium">Graphic Design</span>
                  <span className="text-sm text-purple-100">Visual branding</span>
                </Link>
              </div>
            </div>
            <Link href="/career" className="py-2 px-4 bg-purple-600 text-white hover:bg-purple-700 rounded-md">
              Career
            </Link>
            <Button asChild className="mt-2 bg-purple-600 text-white hover:bg-purple-700">
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
            "block select-none space-y-1 rounded-md p-2 sm:p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-purple-600 group",
            className
          )}
          {...props}
        >
          <div className="text-sm sm:text-base font-medium leading-none text-gray-800 group-hover:text-white mb-1">
            {title}
          </div>
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
