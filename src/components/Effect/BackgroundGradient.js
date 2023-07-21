import { useEffect } from 'react';

const BackgroundGradient = () => {
  useEffect(() => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };

    const getRandomColor = () => {
      const r = getRandomInt(256);
      const g = getRandomInt(256);
      const b = getRandomInt(256);
      return `rgb(${r}, ${g}, ${b})`;
    };

    const setRandomBackgroundGradient = () => {
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      const randomGradient = `linear-gradient(to right, ${color1}, ${color2})`;

      document.body.style.background = randomGradient;
    };

    setRandomBackgroundGradient();
  }, []);

  return null;
};

export default BackgroundGradient;
