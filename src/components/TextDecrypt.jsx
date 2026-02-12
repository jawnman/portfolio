import React, { useEffect, useState } from 'react';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

const TextDecrypt = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let iteration = 0;
        let animationFrameId;

        const animate = () => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration < text.length) {
                iteration += 1 / 3;
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [text]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
};

export default TextDecrypt;
