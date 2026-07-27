"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface Props {
  open: boolean;
  onClose: () => void;
  items: {
    label: string;
    href: string;
  }[];
}

export default function MobileMenu({
  open,
  onClose,
  items,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed top-0 right-0 z-50 flex h-screen w-[320px] flex-col bg-neutral-950 border-l border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  RG1
                </p>

                <h2 className="mt-1 text-xl font-bold text-white">
                  Racing Team
                </h2>
              </div>

              <button
                onClick={onClose}
                className="text-2xl text-white transition hover:opacity-70"
                aria-label="Cerrar menú"
              >
                ×
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col px-6 py-8">
              <div className="space-y-6">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block text-lg font-semibold text-white transition hover:text-red-500"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="my-8 border-t border-white/10" />

              <Button
                 href="#contacto"
                size="lg"
                className="w-full"
              >
                Contacto
              </Button>

              <div className="mt-auto pt-10">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Follow RG1
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    Instagram
                  </a>

                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    YouTube
                  </a>

                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}