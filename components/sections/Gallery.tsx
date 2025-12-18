"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";

const images = [
  "/images/gallery/gallery.png",
  "/images/gallery/gallery1.png",
  "/images/gallery/gallery2.png",
  "/images/gallery/gallery2.png",
  "/images/gallery/gallery1.png",
  "/images/gallery/gallery.png",
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <Section id="galeria" variant="dark">
      <Heading
        title="Galería"
        subtitle="En acción"
        description="Momentos que definen una trayectoria en la pista."
      />
       
       
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
            <Reveal key={src} delay={index * 0.05}>
          <button
            key={index}
            onClick={() => setActiveImage(src)}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt={`Galería ${index + 1}`}
              className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </button>
          </Reveal>
        ))}
      </div>
      

      {activeImage && (
        <Lightbox
          src={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </Section>
  );
}
