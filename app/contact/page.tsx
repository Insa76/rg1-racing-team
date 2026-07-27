import ContactHero from "@/components/contact/ContactHero";
import ContactPaths from "@/components/contact/ContactPaths";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Contact RG1 Racing Team for partnerships, performance, media, press and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactPaths />

      <ContactForm />
    </>
  );
}