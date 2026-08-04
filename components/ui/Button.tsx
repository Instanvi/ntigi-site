"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
  href?: string;
}

function Button({
  className,
  variant = "primary",
  size = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-none text-xs font-bold tracking-wider uppercase transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer border";
  
  const variantStyles = {
    primary: "bg-[#263071] border-[#263071] text-white hover:bg-[#1f275c] hover:border-[#1f275c] dark:bg-[#263071]/20 dark:border-[#263071] dark:text-white dark:hover:bg-[#263071] dark:hover:border-blue-500 shadow-glow",

    secondary: "bg-[#3b82f6] border-[#3b82f6] text-white hover:bg-blue-600 hover:border-blue-600",
    
    // Outline: Deep blue border and text in light mode. Transparent with white/grey borders and text in dark mode.
    outline: "bg-transparent border-[#263071]/40 text-[#263071] hover:border-[#263071] hover:bg-[#263071]/5 dark:border-white/20 dark:text-gray-300 dark:hover:border-white dark:hover:text-white dark:hover:bg-white/5",
    
    // Ghost: Transparent margins with adaptively colored text.
    ghost: "bg-transparent border-transparent text-[#263071] hover:bg-[#263071]/5 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
  };
  
  const sizeStyles = {
    default: "px-4 py-2 text-[11px]",
    sm: "px-3 py-1.5 text-[10px]",
    lg: "px-6 py-3 text-xs",
    xl: "px-8 py-3.5 text-xs",
    icon: "size-9 p-0",
    "icon-sm": "size-8 p-0",
    "icon-lg": "size-10 p-0",
  };

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export { Button };
export default Button;
