export interface StoreProduct {
  name: string;
  category: string;
  description: string;
  image: string;
}

export const featuredProducts: StoreProduct[] = [
  {
    name: "BMW S 1000 RR",
    category: "Motorcycles",
    description:
      "Superbike de alto rendimiento orientada a conducción deportiva.",
    image: "/images/store/products/bmw-s1000rr.webp",
  },
  {
    name: "BMW R 1300 GS",
    category: "Motorcycles",
    description:
      "Adventure diseñada para combinar ruta, viajes y conducción off-road.",
    image: "/images/store/products/bmw-r1300gs.webp",
  },
  {
    name: "Pirelli Diablo Rosso IV",
    category: "Tires",
    description:
      "Neumático deportivo desarrollado para motos de altas prestaciones.",
    image: "/images/store/products/pirelli-diablo.webp",
  },
  {
    name: "Motul 7100 4T",
    category: "Lubricants",
    description:
      "Lubricante para motores de motocicletas de cuatro tiempos.",
    image: "/images/store/products/motul-7100.webp",
  },
  {
    name: "Brembo Racing Brake Kit",
    category: "Parts",
    description:
      "Componentes de frenado orientados a conducción deportiva y performance.",
    image: "/images/store/products/brembo-brakes.webp",
  },
  {
    name: "Akrapovič Racing Line",
    category: "Performance",
    description:
      "Sistema de escape de alto rendimiento para motocicletas deportivas.",
    image: "/images/store/products/akrapovic.webp",
  },
];