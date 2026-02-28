import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="hidden md:block fixed pointer-events-none w-40 h-40 rounded-full blur-3xl opacity-40 z-0"
      style={{
        background: "radial-gradient(circle, #00F5FF 0%, transparent 70%)",
        left: position.x - 80,
        top: position.y - 80,
      }}
    />
  );
};

export default CursorGlow;