import React, { useEffect, useState } from 'react';

const RotatingText = () => {
  const words = ['Elegance', 'Minimalism', 'Comfort'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>{words[currentWordIndex]}</span>
  );
};

export default RotatingText;
