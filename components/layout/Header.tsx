"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { navigation } from "@/content/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrolled && open) {
      setOpen(false);
    }
  }, [scrolled, open]);

  return (
    <>
      <motion.header
        initial={false}
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-4" : "py-7"
        )}
      >
        <Container className="transition-all duration-500">
          <motion.div
            animate={{
              maxWidth: scrolled ? 1180 : 1280,
            }}
            transition={{
              duration: 0.45,
            }}
            className={clsx(
              "mx-auto flex w-full items-center justify-between rounded-2xl px-8 transition-all duration-500",
              scrolled
                ? "border border-white/10 bg-black/60 py-4 shadow-2xl backdrop-blur-2xl"
                : "border border-transparent bg-transparent py-2"
            )}
          >
            {/* Logo */}

            <Link
              href="/"
              className="flex items-center"
              aria-label="RG1 Racing Team"
            >
              <motion.div
                animate={{
                  scale: scrolled ? 0.94 : 1,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="RG1 Racing Team"
                  width={150}
                  height={46}
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-12 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    relative
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      bg-primary
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}

            <div className="hidden items-center md:flex">
              <Button
                href="/#contact"
                variant="outline"
                size="sm"
                className="
                  rounded-full
                  border-white/20
                  px-6
                  uppercase
                  tracking-[0.18em]
                  hover:border-primary
                  hover:bg-primary
                  hover:text-white
                "
              >
                Contacto
              </Button>
            </div>

            {/* Mobile Button */}

            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex flex-col gap-1.5 md:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={clsx(
                  "h-0.5 w-6 rounded bg-white transition-all duration-300",
                  open && "translate-y-2 rotate-45"
                )}
              />

              <span
                className={clsx(
                  "h-0.5 w-6 rounded bg-white transition-all duration-300",
                  open && "opacity-0"
                )}
              />

              <span
                className={clsx(
                  "h-0.5 w-6 rounded bg-white transition-all duration-300",
                  open && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </motion.div>
        </Container>
      </motion.header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        items={navigation}
      />
    </>
  );
}