import { useEffect, useRef } from "react";

export function useAnimationScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observer.unobserve(el); //solo una vez
        }
      },
      { threshold: 0.2 } //%visibilidad requerido
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
