import { FC, useEffect, useRef, useState } from "react";

interface SpinnerProps {
    onFinish: (position: number) => void;
    timer: number;
  }
  
export const Spinner: FC<SpinnerProps> = ({ onFinish, timer }) => {
    const [position, setPosition] = useState<number>(0);
    const [timeRemaining, setTimeRemaining] = useState<number>(timer);
    const timerId = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      const iconHeight = 188;
      const multiplier = Math.floor(Math.random() * (4 - 1) + 1);
      const speed = iconHeight * multiplier;
      const maxPosition = (iconHeight * 8) * -1;
  
      const moveBackground = () => {
        setPosition(prevPosition => {
          const nextPosition = prevPosition - speed;
          return nextPosition < maxPosition ? 0 : nextPosition;
        });
        setTimeRemaining(prevTime => prevTime - 100);
      };
  
      const getSymbolFromPosition = () => {
        const totalSymbols = 9;
        let currentPosition = ((Math.floor((Math.random() * totalSymbols))) * iconHeight) * -1;
        onFinish(currentPosition);
      };
  
      if (timeRemaining <= 0) {
        clearInterval(timerId.current as NodeJS.Timeout);
        getSymbolFromPosition();
      } else {
        timerId.current = setInterval(moveBackground, 100);
      }
  
      return () => clearInterval(timerId.current as NodeJS.Timeout);
    }, [timeRemaining, onFinish]);
  
    useEffect(() => {
      setTimeRemaining(timer);
    }, [timer]);
  
    return (
      <div style={{backgroundPosition: '0px ' + position + 'px'}} className={`icons`} />
    );
  };