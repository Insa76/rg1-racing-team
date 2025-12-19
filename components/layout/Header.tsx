"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Logros", href: "#logros" },
  { label: "Galería", href: "#galeria" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al scrollear
  useEffect(() => {
    if (open) setOpen(false);
  }, [scrolled]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all",
          scrolled
            ? "bg-neutral-900/95 backdrop-blur shadow-lg"
            : "bg-transparent"
        )}
        initial={false}
      >
        <Container
          className={clsx(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              animate={{ scale: scrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logo/logo.jpeg"
                alt="RG1 Racing Team"
                width={120}
                height={40}
                priority
              />
            </motion.div>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-10 text-sm font-semibold text-neutral-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden md:block">
            <Button href="#contacto" size="sm">
              Contacto
            </Button>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            className="md:hidden flex flex-col justify-center gap-1"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>
        </Container>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 pt-24 pb-10 px-6"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <nav className="flex flex-col gap-6 text-lg font-semibold text-white">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-neutral-300 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8">
                <Button href="#contacto" size="lg" className="w-full">
                  Contacto
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
