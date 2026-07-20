"use client";

import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black hover:bg-zinc-200 transition-colors",
        secondary:
          "bg-surface-elevated text-text-primary border border-border hover:bg-surface-overlay hover:border-border-strong",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-surface",
        cta: "bg-white text-black font-semibold hover:bg-zinc-200",
        outline:
          "border border-border text-text-primary hover:bg-surface hover:border-border-strong",
        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
  download?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, download, children, ...props }, ref) => {
    const styles = cn(buttonVariants({ variant, size, className }));

    if (href) {
      return (
        <a
          href={href}
          className={styles}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
