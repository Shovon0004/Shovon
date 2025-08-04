'use client';
import { useEffect, useRef } from 'react';

const CustomWhaleCursor: React.FC = () => {
  const cursorRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <></>
  );
};

export default CustomWhaleCursor;
