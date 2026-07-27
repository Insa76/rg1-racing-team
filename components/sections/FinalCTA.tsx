import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section id="contact" size="lg">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-primary md:text-sm">
          LET&apos;S BUILD THE NEXT CHAPTER
        </p>

        <h2
  className="
    font-display
    text-6xl
    font-bold
    uppercase
    leading-[0.88]
    tracking-[-0.035em]
    text-white
    md:text-8xl
  "
>
  Ready to Partner
  <br />
  with RG1?
</h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400 md:mt-10">
          Join a project where performance, innovation and passion come together
          to create opportunities for brands, partners and motorsport fans.
        </p>

        <div className="mt-12 flex justify-center md:mt-14">
          <Button size="lg" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}