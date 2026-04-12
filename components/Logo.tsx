import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: { w: 48, h: 63 },
  md: { w: 96, h: 126 },
  lg: { w: 160, h: 210 },
};

export default function Logo({ size = "sm", className = "" }: LogoProps) {
  const { w, h } = SIZES[size];
  return (
    <Image
      src="/images/logo.png"
      alt="Royal Kebab Center"
      width={w}
      height={h}
      priority
      className={className}
    />
  );
}
