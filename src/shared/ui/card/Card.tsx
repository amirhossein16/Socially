import { forwardRef } from "react";
import clsx from "clsx";
import type { CardProps } from "./card.types";

const baseStyles = "rounded-lg border border-border bg-card";

const paddingStyles = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding = "md", shadow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          baseStyles,
          paddingStyles[padding],
          shadow && "shadow-card",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
