import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isOverButton, setIsOverButton] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hover on download buttons and remove custom cursor
    const downloadButtons = document.querySelectorAll(".download-button, .download-button-alt");
    const handleButtonHover = () => setIsOverButton(true);
    const handleButtonLeave = () => setIsOverButton(false);

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    downloadButtons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleButtonHover);
      btn.addEventListener("mouseleave", handleButtonLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      downloadButtons.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleButtonHover);
        btn.removeEventListener("mouseleave", handleButtonLeave);
      });
    };
  }, []);

  return (
    <>
      {!isOverButton && (
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
      )}

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

          /* Default: No normal cursor */
          * {
            cursor: none !important;
          }

          /* Allow normal cursor and pointer events for buttons */
          .download-button, .download-button-alt {
            cursor: pointer !important;
            pointer-events: auto !important;
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
