import Link from "next/link";
import {
  Bike,
  Cog,
  Gauge,
  Droplets,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Motorcycles",
    description:
      "Motos seleccionadas para quienes buscan rendimiento, tecnología y experiencia.",
    href: "/store/motorcycles",
    icon: Bike,
  },
  {
    title: "Parts",
    description:
      "Repuestos y componentes para mantenimiento, reparación y performance.",
    href: "/store/parts",
    icon: Cog,
  },
  {
    title: "Accessories",
    description:
      "Accesorios para mejorar funcionalidad, estética y experiencia de conducción.",
    href: "/store/accessories",
    icon: Gauge,
  },
  {
    title: "Lubricants",
    description:
      "Lubricantes y productos especializados para cuidar el rendimiento de cada máquina.",
    href: "/store/lubricants",
    icon: Droplets,
  },
];

export default function StoreCategories() {
  return (
    <section className="bg-[#050505] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Our Categories
          </p>

          <h2
  className="
    font-display
    mt-6
    text-6xl
    font-bold
    uppercase
    leading-[0.9]
    tracking-[-0.03em]
    text-white
    md:text-8xl
  "
>
  Everything for
  <br />
  the machine.
</h2>
        </div>

        <div className="mt-20 grid border-t border-white/10 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="
                  group
                  relative
                  min-h-[360px]
                  overflow-hidden
                  border-b
                  border-white/10
                  p-8
                  transition-colors
                  duration-500
                  hover:bg-white/[0.025]
                  md:p-12
                  md:odd:border-r
                "
              >
                <span className="absolute right-8 top-8 text-xs tracking-[0.3em] text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon
                  size={34}
                  strokeWidth={1.5}
                  className="text-primary"
                />

                <div className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12">
                  <h3
  className="
    font-display
    text-4xl
    
    uppercase
    leading-none
    tracking-[-0.02em]
    text-white
    md:text-5xl
  "
>
  {category.title}
</h3>

                  <p className="mt-5 max-w-md leading-7 text-white/45">
                    {category.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 transition-colors group-hover:text-white">
                    Explore

                    <ArrowUpRight
                      size={17}
                      className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}