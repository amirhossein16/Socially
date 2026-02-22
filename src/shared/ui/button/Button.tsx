import { forwardRef } from "react";
import type { ButtonProps } from "./button.types";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variantStyles = {
  primary: "bg-brand-main text-white hover:bg-brand-main/90",
  secondary: "bg-text-opposite text-text-primary hover:bg-text-opposite/90",
  tertiary: "border border-border text-text-primary hover:bg-border/20",
  ghost: "bg-transparent text-text-primary hover:bg-border/20",
};

const sizeStyles = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";
