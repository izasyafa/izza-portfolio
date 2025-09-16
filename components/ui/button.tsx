import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 🔥 Gunakan union: props bisa button atau anchor
type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};
type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export interface ButtonProps
  extends VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps & (ButtonAsButton | ButtonAsAnchor)
>(({ className, variant, size, asChild = false, href, ...props }, ref) => {
  const Comp = asChild || href ? Slot : "button";

  if (href && !asChild) {
    return (
      <a
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as ButtonAsAnchor)}
      />
    );
  }

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(props as ButtonAsButton)}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
