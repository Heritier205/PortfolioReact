import { useEffect, useRef } from "react";

export default function useAppearOnScreen({ selector = ".toObserve", threshold = 0.1 } = {}) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible"); // redevient invisible
                    }
                });
            },
            { threshold }
        );

        const elements = containerRef.current.querySelectorAll(selector);
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [selector, threshold]);

    return containerRef;
}
