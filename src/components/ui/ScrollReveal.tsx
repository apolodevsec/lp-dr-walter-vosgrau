"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.1,
  ...rest
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  let hiddenClass = "opacity-0";
  if (animation === "slide-up") hiddenClass += " translate-y-12";
  if (animation === "slide-down") hiddenClass += " -translate-y-12";
  if (animation === "slide-left") hiddenClass += " translate-x-12";
  if (animation === "slide-right") hiddenClass += " -translate-x-12";
  if (animation === "zoom") hiddenClass += " scale-90";

  const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? visibleClass : hiddenClass} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
