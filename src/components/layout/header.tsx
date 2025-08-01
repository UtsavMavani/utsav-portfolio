"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/navigation/drawer";
import { NAV_LINKS } from "@/lib/data";
import { mergeClasses } from "@/lib/utils";
import useWindowSize from "@/hooks/use-window-size";
import useScroll from "@/hooks/use-scroll";
import Link from "@/components/navigation/link";
import ThemeSwitcher from "@/components/general/theme-switcher";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Download from "@/components/general/download";

const Logo = () => (
  <Typography variant="h2" className="font-bold">
    UTSAV
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 1024px
  useEffect(() => {
    if (size?.width && size?.width > 1024 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        "sticky top-0 z-30 w-full border-b border-transparent bg-gray p-4 max-md:border-gray-100 md:px-16",
        scrolled ? "bg-gray/50 backdrop-blur-xl md:border-gray-100" : ""
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Download title="CV" fileName="utsav-resume.pdf" />
          </div> */}
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex lg:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-gray-100 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <Download title="CV" fileName="utsav-resume.pdf" />
            </div> */}
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
