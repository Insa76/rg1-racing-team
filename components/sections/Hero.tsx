"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <Section
      id="home"
      variant="none"
      fullWidth
      className="relative min-h-screen overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="/images/hero/hero-bg.png"
        alt="RG1 Racing Team en pista"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Contenido animado */}
      <div className="relative z-10 min-h-screen flex items-center">
        <motion.div
          className="max-w-4xl px-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Badge className="mb-6">
            BMW 1000cc · Campeón Brasileño
          </Badge>

          <Heading
            as="h1"
            title="RG1 Racing Team"
            subtitle="Velocidad. Precisión. Campeonatos."
            description="Proyecto deportivo profesional enfocado en el alto rendimiento dentro del motociclismo de velocidad."
          />

          <div className="mt-12 flex flex-wrap gap-4">
            <Button size="lg">
              Contacto Comercial
            </Button>

            <Button
              variant="ghost"
              size="lg"
              href="#logros"
            >
              Ver Logros
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
