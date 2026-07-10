import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  size = "md",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const sizeClass =
    size === "lg"
      ? "px-8 h-[60px] text-base"
      : size === "sm"
        ? "px-6 h-[45px] text-sm"
        : "px-8 h-[50px]";

  return (
    <button type={type} className={`btn-primary ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
