import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const WarpText = ({ text, className, hoverRange = 200 }) => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        // Track mouse relative to the container for correct distance calculations
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
    };

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`flex justify-center cursor-default py-4 ${className}`} // Added padding to catch mouse easier
        >
            {text.split('').map((char, i) => (
                <InteractiveSpan
                    key={i}
                    mouseX={mouseX}
                    containerRef={containerRef}
                    hoverRange={hoverRange}
                >
                    {char}
                </InteractiveSpan>
            ))}
        </motion.div>
    );
};

const InteractiveSpan = ({ mouseX, children, containerRef, hoverRange }) => {
    const ref = useRef(null);

    // Calculate distance from mouse to the center of this specific letter
    const distance = useTransform(mouseX, (val) => {
        if (!ref.current) return Infinity;

        // Calculate the letter's center position relative to the container
        const bounds = ref.current.getBoundingClientRect();
        const containerBounds = containerRef.current.getBoundingClientRect();

        // Letter's X relative to container
        const letterRelativeX = bounds.x - containerBounds.x + (bounds.width / 2);

        return val - letterRelativeX;
    });

    // Widen the influence range for a "Magnifying Glass" feel
    // Use the hoverRange prop (default 200)
    const scaleSync = useTransform(distance, [-hoverRange, 0, hoverRange], [1, 2.5, 1]);

    // Add physics for that "jell-o" / liquid glass feel
    // We kept the spring for the main title, but the Navbar specific instance might disable it via props if we passed them down
    // Ideally we should pass a prop, but for now let's just make it conditional based on hoverRange to avoid breaking changes
    // If hoverRange is small (like 50 for Navbar), let's use a stiffer spring or no spring to avoid "wave"

    const isSmallRange = hoverRange < 100;

    // If small range (Navbar), use very stiff spring (almost instant) to remove "wave"
    // If large range (Hero), use bouncy spring
    const springConfig = isSmallRange
        ? { mass: 0.1, stiffness: 1000, damping: 50 } // Extremely stiff/damped = No bounce
        : { mass: 0.1, stiffness: 200, damping: 15 }; // Bouncy

    const scale = useSpring(scaleSync, springConfig);

    // Add color shift for style - reduce shift for small range
    // For navbar, we'll keep it white to keep it clean, or maybe subtle blue
    const colorOutput = isSmallRange ? ["#ffffff", "#ffffff", "#ffffff"] : ["#ffffff", "#00f0ff", "#ffffff"];
    const colorSync = useTransform(distance, [-hoverRange / 2, 0, hoverRange / 2], colorOutput);

    return (
        <motion.span
            ref={ref}
            style={{ scale, color: colorSync, display: 'inline-block' }}
            className="origin-bottom font-bold"
        >
            {children === " " ? "\u00A0" : children}
        </motion.span>
    );
};

export default WarpText;
