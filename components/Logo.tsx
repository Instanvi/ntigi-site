"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 120, height = 32 }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Light Mode Logo: original long logo */}
      <Image
        src="/logo-long.svg"
        alt="NTIGI Logo"
        fill
        className="object-contain dark:hidden"
        priority
      />
      {/* Dark Mode Logo: custom white accent logo */}
      <Image
        src="/logo-long-white.svg"
        alt="NTIGI Logo"
        fill
        className="object-contain hidden dark:block"
        priority
      />
    </div>
  );
}
