import React, { useState, useEffect } from "react";

const blinkingCursorStyle = {
  fontWeight: "100",
  fontSize: "1.5em",
  color: "black", // Adjust cursor color as needed
  animation: "1s blink step-end infinite",
};

const keyframesStyle = `
  @keyframes blink {
      from, to {
          color: transparent;
      }
      50% {
          color: black; /* Adjust cursor color as needed */
      }
  }
`;

const TypewriterText = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Full Stack Web Developer", "AI-ML Engineer"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(50);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }

      setTypingSpeed(isDeleting ? 100 : 150); // Slow down erasing speed
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  return (
    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
      {displayText}
      <style>{keyframesStyle}</style>
      <span style={blinkingCursorStyle}>|</span>
    </span>
  );
};

export default TypewriterText;
