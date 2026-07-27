interface Props {
  children: React.ReactNode;
}

export default function GradientText({
  children,
}: Props) {
  return (
    <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
      {children}
    </span>
  );
}