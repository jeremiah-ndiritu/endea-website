import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import clsx from "clsx";
import type { LucideProps } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  size?: "sm" | "lg" | "";
  icon?:
    | React.ReactNode
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", isLoading, disabled, className, children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition";

    const variantStyles = {
      primary:
        "bg-accent text-white border border-accent hover:bg-accent-border",
      secondary:
        "bg-transparent border border-accent text-accent hover:bg-accent-bg hover:border-accent-border",
      outline: "bg-transparent border border-border text-text hover:bg-border",
      ghost: "bg-transparent border border-border text-text hover:bg-border" as const,
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          "px-4 py-2 rounded-md",
          disabled && "opacity-60 cursor-not-allowed",
          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin border-2 border-t-transparent rounded-full h-4 w-4 mr-2" />
        ) : null}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
