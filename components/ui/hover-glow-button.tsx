"use client";

import React, { useRef, useState, MouseEvent, ReactNode } from "react";

interface HoverButtonProps {
  children: ReactNode;
  onClick?: () => void;
  /** Si se pasa, el botón se renderiza como enlace <a>. */
  href?: string;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  children,
  onClick,
  href,
  className = "",
  disabled = false,
  glowColor = "#b566ff",
  backgroundColor = "#2a0e45", // morado oscuro de marca
  textColor = "#ffffff",
  hoverTextColor = "#ffffff",
}) => {
  const ref = useRef<HTMLElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setGlowPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const baseClasses = `
    relative inline-flex items-center justify-center px-8 py-3.5
    border border-[#b566ff]/30 cursor-pointer overflow-hidden
    transition-colors duration-300 text-base font-semibold tracking-tight
    rounded-lg z-10 select-none
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
    ${className}
  `;

  const inlineStyle: React.CSSProperties = {
    backgroundColor,
    color: isHovered ? hoverTextColor : textColor,
  };

  const inner = (
    <>
      {/* Glow que sigue al cursor */}
      <div
        className={`
          absolute w-[200px] h-[200px] rounded-full opacity-60 pointer-events-none
          transition-transform duration-500 ease-out -translate-x-1/2 -translate-y-1/2
          ${isHovered ? "scale-125" : "scale-0"}
        `}
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          background: `radial-gradient(circle, ${glowColor} 10%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={disabled ? undefined : href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={disabled ? undefined : onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-disabled={disabled || undefined}
        className={baseClasses}
        style={inlineStyle}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={baseClasses}
      style={inlineStyle}
    >
      {inner}
    </button>
  );
};

export { HoverButton };
