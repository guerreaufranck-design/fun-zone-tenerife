import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/10 text-primary shadow-[0_0_8px_rgba(0,212,255,0.15)]",
        secondary:
          "border-border bg-secondary text-secondary-foreground",
        destructive:
          "border-destructive/30 bg-destructive/10 text-destructive",
        outline:
          "border-border text-foreground",
        neonBlue:
          "border-neon-blue/40 bg-neon-blue/10 text-neon-blue shadow-[0_0_8px_rgba(0,212,255,0.2)]",
        neonViolet:
          "border-neon-violet/40 bg-neon-violet/10 text-neon-violet shadow-[0_0_8px_rgba(139,92,246,0.2)]",
        neonOrange:
          "border-neon-orange/40 bg-neon-orange/10 text-neon-orange shadow-[0_0_8px_rgba(255,107,0,0.2)]",
        neonGreen:
          "border-neon-green/40 bg-neon-green/10 text-neon-green shadow-[0_0_8px_rgba(0,255,136,0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
