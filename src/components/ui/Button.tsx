"use client";

import { ButtonHTMLAttributes, ReactNode, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full font-medium transition-all duration-300 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background shadow-lg shadow-foreground/10 hover:shadow-xl hover:shadow-foreground/20",

        secondary:
          "border border-border bg-background text-foreground hover:bg-muted",

        ghost: "bg-transparent text-foreground hover:bg-muted",

        destructive: "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  const reduceMotion = useReducedMotion();

  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 18,
  });

  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
    visible: false,
  });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (reduceMotion) return;

    const rect = ref.current!.getBoundingClientRect();

    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    setSpotlight({
      x: px,
      y: py,
      visible: true,
    });

    const dx = px - rect.width / 2;
    const dy = py - rect.height / 2;

    x.set(dx * 0.12);
    y.set(dy * 0.12);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);

    setSpotlight((prev) => ({
      ...prev,
      visible: false,
    }));
  }

  return (
    <motion.button
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(buttonVariants({ variant, size }), "group", className)}
      {...props}>
      {/* Spotlight */}
      <motion.span
        className="pointer-events-none absolute inset-0"
        animate={{
          opacity: spotlight.visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        style={{
          background: `radial-gradient(120px circle at ${spotlight.x}px ${spotlight.y}px,
          rgba(255,255,255,.22),
          transparent 70%)`,
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
