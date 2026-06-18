import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const sizeClass = size === "lg" ? "px-8 py-4 text-base" : "";
  const base = variant === "primary" ? "btn-primary" : variant === "outline" ? "btn-outline" : "";
  const ghostClass =
    variant === "ghost"
      ? "inline-flex items-center justify-center text-text-muted hover:text-text-heading text-sm font-semibold tracking-wide transition-colors"
      : "";

  const classes = `${base || ghostClass} ${sizeClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
