"use client";

import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

interface Props {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, items }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 pt-24 pb-10 px-6"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-6 text-lg font-semibold text-white">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
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
  );
}
