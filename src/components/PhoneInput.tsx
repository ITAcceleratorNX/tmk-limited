"use client";

import { useCallback, useState } from "react";

interface PhoneInputProps {
  id: string;
  name: string;
  required?: boolean;
  placeholder: string;
  className?: string;
  compact?: boolean;
  invalidMessage?: string;
}

function formatKzPhone(digits: string): string {
  if (digits.length === 0) return "";
  let result = `(${digits.slice(0, 3)}`;
  if (digits.length >= 3) result += `) ${digits.slice(3, 6)}`;
  if (digits.length >= 6) result += `-${digits.slice(6, 8)}`;
  if (digits.length >= 8) result += `-${digits.slice(8, 10)}`;
  return result;
}

export function PhoneInput({
  id,
  name,
  required,
  placeholder,
  className = "form-input",
  compact = false,
  invalidMessage = "Enter a full phone number (10 digits).",
}: PhoneInputProps) {
  const [digits, setDigits] = useState("");
  const [display, setDisplay] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let next = e.target.value.replace(/\D/g, "");
      if (next.length > 10 && (next.startsWith("7") || next.startsWith("8"))) next = next.slice(1);
      next = next.slice(0, 10);
      setDigits(next);
      setDisplay(formatKzPhone(next));
      e.target.setCustomValidity(next.length === 10 || (!required && next.length === 0) ? "" : invalidMessage);
    },
    [invalidMessage, required],
  );

  return (
    <div
      className={`relative flex items-center gap-2 border-b border-[var(--form-input-border)] ${compact ? "h-[50px]" : "h-[56px]"}`}
    >
      <input type="hidden" name={name} value={digits ? `+7${digits}` : ""} />
      <svg aria-hidden width="22" height="15" viewBox="0 0 22 15" className="shrink-0">
        <rect width="22" height="15" fill="#00AFC5" />
        <circle cx="12" cy="7.5" r="2.4" fill="#F6D34C" />
        <path
          d="M12 2v2M12 11v2M6.5 7.5h2M15.5 7.5h2M8.2 3.7l1.2 1.2M14.6 10.1l1.2 1.2M15.8 3.7l-1.2 1.2M9.4 10.1l-1.2 1.2"
          stroke="#F6D34C"
          strokeWidth=".8"
        />
      </svg>
      <span aria-hidden className="text-xs text-[#8c929b]">
        ⌄
      </span>
      <span className="text-base text-[#a0a5a8]">+7</span>
      <input
        id={id}
        name={`_${name}_display`}
        type="tel"
        required={required}
        className={`${className} min-w-0 flex-1 !border-0 !py-0 ${compact ? "!text-[14px]" : ""}`}
        placeholder={placeholder}
        value={display}
        onChange={handleChange}
        autoComplete="tel-national"
        inputMode="tel"
        minLength={required ? 14 : undefined}
        pattern={required ? "\\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}" : undefined}
        title={invalidMessage}
      />
      {required && !compact && (
        <span aria-hidden className="pointer-events-none absolute right-1 top-4 text-xs text-gold">
          *
        </span>
      )}
    </div>
  );
}
