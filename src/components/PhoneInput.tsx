"use client";

import { useCallback } from "react";

interface PhoneInputProps {
  id: string;
  name: string;
  required?: boolean;
  placeholder: string;
  className?: string;
}

function formatKzPhone(value: string): string {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 0) return "";

  let normalized = digits;
  if (normalized.startsWith("8")) normalized = "7" + normalized.slice(1);
  if (!normalized.startsWith("7")) normalized = "7" + normalized;

  normalized = normalized.slice(0, 11);

  const rest = normalized.slice(1);
  let result = "+7";

  if (rest.length > 0) result += ` (${rest.slice(0, 3)}`;
  if (rest.length >= 3) result += `) ${rest.slice(3, 6)}`;
  if (rest.length >= 6) result += `-${rest.slice(6, 8)}`;
  if (rest.length >= 8) result += `-${rest.slice(8, 10)}`;

  return result;
}

export function PhoneInput({
  id,
  name,
  required,
  placeholder,
  className = "form-input",
}: PhoneInputProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatKzPhone(e.target.value);
  }, []);

  return (
    <input
      id={id}
      name={name}
      type="tel"
      required={required}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete="tel"
      inputMode="tel"
    />
  );
}
