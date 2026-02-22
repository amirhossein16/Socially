import clsx from "clsx";
import type { AvatarProps } from "./avatar.types";

const sizeStyles = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
};

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  const fallback = name?.charAt(0).toUpperCase() ?? "?";

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center rounded-full overflow-hidden border border-border bg-border/30 text-text-primary font-medium",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? name ?? "avatar"}
          className="w-full h-full object-cover"
        />
      ) : (
        fallback
      )}
    </div>
  );
}
