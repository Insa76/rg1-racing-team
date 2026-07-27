import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <Container>
        <div className="py-20">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Marca */}
            <div>
              <Image
                src="/logo/logo.png"
                alt="RG1 Racing Team"
                width={140}
                height={50}
                priority
              />

              <p className="mt-8 max-w-md text-lg leading-8 text-neutral-400">
                Performance, precision and passion. RG1 Racing Team competes at
                the highest level while building meaningful partnerships and
                premium motorsport experiences.
              </p>
            </div>

            {/* Navegación */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-white">
                Navigation
              </h3>

              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/racing"
                  className="block transition hover:text-white"
                >
                  Racing
                </Link>

                <Link
                  href="/partners"
                  className="block transition hover:text-white"
                >
                  Partners
                </Link>

                <Link
                  href="/store"
                  className="block transition hover:text-white"
                >
                  Performance
                </Link>

                <Link
                  href="/media"
                  className="block transition hover:text-white"
                >
                  Media
                </Link>
              </nav>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-white">
                Connect
              </h3>

              <div className="space-y-4 text-neutral-400">
                <p>contact@rg1racing.com</p>

                <p>
                  <Link
                    href="https://instagram.com"
                    className="transition hover:text-white"
                  >
                    Instagram
                  </Link>
                </p>

                <p>
                  <Link
                    href="https://linkedin.com"
                    className="transition hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} RG1 Racing Team. All rights reserved.
            </p>

            <p>Built for Performance.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}