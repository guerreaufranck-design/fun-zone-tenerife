import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00b4d8] to-[#8b5cf6] text-black font-bold border-2 border-white/80 shadow-[0_0_20px_rgba(0,212,255,0.3),0_0_40px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5),0_0_60px_rgba(139,92,246,0.25)] hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-secondary/80",
        outline:
          "border-2 border-white/60 bg-white/5 text-white font-bold backdrop-blur-sm hover:bg-white/15 hover:border-white",
        ghost:
          "text-foreground hover:bg-secondary hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        neon:
          "bg-gradient-to-r from-[#00b4d8] to-[#8b5cf6] text-black font-bold border-2 border-white/80 shadow-[0_0_25px_rgba(0,212,255,0.4),0_0_50px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6),0_0_70px_rgba(139,92,246,0.3)] hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        default: "h-10 px-5 py-2",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
