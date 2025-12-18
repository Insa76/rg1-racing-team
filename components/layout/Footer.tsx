import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-14">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="mb-2">
              
              <Image
                src="/logo/logo.jpeg"
                alt="RG1 Racing Team"
                width={120}
                height={40}
                priority
              />
              <p>Ramiro Gandola</p>
              
            </div>
            <p className="max-w-sm">
              Proyecto deportivo profesional enfocado en el motociclismo de
              velocidad y el alto rendimiento.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-white font-semibold mb-3">Secciones</p>
              <ul className="space-y-2">
                <li>
                  <Link href="#logros">Logros</Link>
                </li>
                <li>
                  <Link href="#sponsors">Sponsors</Link>
                </li>
                <li>
                  <Link href="#actividades">Actividades</Link>
                </li>
                <li>
                  <Link href="#emprendimientos">Emprendimientos</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold mb-3">Contacto</p>
              <ul className="space-y-2">
                <li>Email: contacto@rg1racing.com</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-sm">
          © {new Date().getFullYear()} RG1 Racing Team. Todos los derechos
          reservados.
        </div>
      </Container>
    </footer>
  );
}
