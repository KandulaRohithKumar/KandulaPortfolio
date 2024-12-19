import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 2.5L10 17.5L12.5 10L20 7.5L2.5 2.5Z"
            fill="#00ff00"
          stroke="#00ff00"
            strokeWidth="1"
          />
        </svg>
      </div>
      <style>
        {`
          .custom-cursor {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transform: translate(-2px, -2px);
            transition: opacity 0.15s ease-in-out;
            filter: drop-shadow(0 0 4px rgba(0, 255, 0, 0.3));
          }

          * {
            cursor: none !important;
          }

          a:hover ~ .custom-cursor,
          button:hover ~ .custom-cursor {
            transform: translate(-2px, -2px) scale(1.2);
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;