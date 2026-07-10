"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type TildaStyle = "zoomin" | "fadeindown" | "fadeinright";

/** Exact easing used by Tilda's animation engine (tilda-animation-2.0.min.js) */
const tildaEase = [0.19, 1, 0.22, 1] as const;

/**
 * Tilda varies animation duration by element role (tilda-animation-2.0.min.css):
 * .t-title = 1.2s, .t-descr/.t-subtitle/.t-text/.t-uptitle = 0.7s, .t-item = 0.5s,
 * everything else (default zoomin/fadein* block) = 1s.
 */
const TILDA_DURATIONS = {
  title: 1.2,
  text: 0.7,
  item: 0.5,
  default: 1,
} as const;

type TildaSpeed = keyof typeof TILDA_DURATIONS;

/**
 * Tilda's engine doesn't start observing/animating ANY element until 1.5s
 * after page load (`setTimeout(t_animate__startAnimation, 1500)`). For
 * scroll-triggered reveals this is invisible in practice (users take longer
 * than 1.5s to scroll), but for above-the-fold "load" animations (the hero)
 * it means there's a full 1.5s pause before the entrance animation starts.
 */
const TILDA_LOAD_DELAY = 1.5;

function buildVariants(style: TildaStyle, duration: number, delay = 0): Variants {
  const transition = { duration, delay, ease: tildaEase };
  switch (style) {
    case "fadeindown":
      return { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0, transition } };
    case "fadeinright":
      return { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition } };
    case "zoomin":
      return { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition } };
  }
}

/**
 * Tilda's engine (tilda-animation-2.0.min.js) computes its IntersectionObserver
 * rootMargin per-element as `-elementHeight/5` (applied top+bottom, "Npx 0px"),
 * with the default threshold of 0 (fires as soon as 1px is visible). This means
 * short text elements reveal almost immediately on scroll, while tall photo
 * blocks need to clear a much larger margin before they trigger. We replicate
 * that exactly instead of using one fixed margin for every element size.
 */
function useTildaMargin() {
  const ref = useRef<HTMLDivElement>(null);
  const [margin, setMargin] = useState<`${number}px 0px`>("0px 0px");

  useLayoutEffect(() => {
    if (ref.current) {
      const h = ref.current.offsetHeight;
      setMargin(`${Math.round(-h / 5)}px 0px`);
    }
  }, []);

  return { ref, margin };
}

interface TildaInProps {
  children: ReactNode;
  style?: TildaStyle;
  className?: string;
  delay?: number;
  /** Element role — controls duration to match Tilda's per-type timings. */
  speed?: TildaSpeed;
  /** Animate immediately on mount (used for hero / above-the-fold content) instead of on scroll */
  mode?: "scroll" | "load";
}

export function TildaIn({
  children,
  style = "zoomin",
  className,
  delay = 0,
  speed = "default",
  mode = "scroll",
}: TildaInProps) {
  const isLoad = mode === "load";
  const { ref, margin } = useTildaMargin();
  const inView = useInView(ref, { once: true, margin });

  const effectiveDelay = isLoad ? TILDA_LOAD_DELAY + delay : delay;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isLoad || inView ? "visible" : "hidden"}
      variants={buildVariants(style, TILDA_DURATIONS[speed], effectiveDelay)}
    >
      {children}
    </motion.div>
  );
}

export function TildaStagger({
  children,
  className,
  mode = "scroll",
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  mode?: "scroll" | "load";
  stagger?: number;
}) {
  const isLoad = mode === "load";
  const { ref, margin } = useTildaMargin();
  const inView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isLoad || inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: isLoad ? TILDA_LOAD_DELAY : 0 } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Easing used by Tilda's scroll-based-scrolling engine (tilda-animation-sbs-1.0.min.js) */
const sbsEase = [0.3, 0, 0.6, 1] as const;

/**
 * Replicates the sbs "intoview" reveal used for the decorative shape behind the
 * About photo on the original site: the shape starts aligned exactly behind the
 * photo (fully hidden), then — once scrolled into view — slides down by ~its own
 * height into its final accent position. Timings taken from the live
 * data-animate-sbs-opts payload: 0.3s hold, then a 0.5s move.
 */
export function TildaParallaxShape({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, margin } = useTildaMargin();
  const inView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: "-100%" }}
      animate={inView ? { y: "0%" } : { y: "-100%" }}
      transition={{ duration: 0.5, delay: 0.3, ease: sbsEase }}
    >
      {children}
    </motion.div>
  );
}

export function TildaItem({
  children,
  className,
  style = "zoomin",
  speed = "default",
}: {
  children: ReactNode;
  className?: string;
  style?: TildaStyle;
  speed?: TildaSpeed;
}) {
  return (
    <motion.div className={className} variants={buildVariants(style, TILDA_DURATIONS[speed])}>
      {children}
    </motion.div>
  );
}
