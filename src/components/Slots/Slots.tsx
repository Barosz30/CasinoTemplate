import React, { useState, useEffect, useRef, FC } from 'react';
import { Spinner } from './Spinner/Spinner';
import { RepeatButton } from './RepeatButton/RepeatButton';



const WinningSound: FC = () => {
  return (
    <audio autoPlay className="player" preload="false">
      <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
    </audio>  
  );
};

const loserMessages: string[] = [
  'Not quite', 
  'Stop gambling', 
  'Hey, you lost!', 
  'Ouch! I felt that',      
  'Don\'t beat yourself up',
  'There goes the college fund',
  'I have a cat. You have a loss',
  'You\'re awesome at losing',
  'Coding is hard',
  'Don\'t hate the coder'
];

export default function Slots() {
    const [winner, setWinner] = useState<boolean | null>(null);
    const [spinKey, setSpinKey] = useState<number>(0); // Add a state to track the spin key
    const matches = useRef<number[]>([]);
  
    const finishHandler = (value: number) => {
      matches.current.push(value);
  
      if (matches.current.length === 3) {
        const first = matches.current[0];
        const results = matches.current.every(match => match === first);
        setWinner(results);
      }
    };
  
    const handleClick = () => {
      setWinner(null);
      matches.current = [];
      setSpinKey(prevKey => prevKey + 1); // Update the spin key to trigger a re-render
    };
  
    const getLoserMessage = (): string => {
      return loserMessages[Math.floor(Math.random() * loserMessages.length)];
    };
  
    return (
      <div>
        {winner && <WinningSound />}
        <h1 style={{ color: 'white'}}>
          <span>{winner === null ? 'Waiting…' : winner ? '🤑 Pure skill! 🤑' : getLoserMessage()}</span>
        </h1>
  
        <div className={`spinner-container`}>
          <Spinner key={`spinner-1-${spinKey}`} onFinish={finishHandler} timer={1000} />
          <Spinner key={`spinner-2-${spinKey}`} onFinish={finishHandler} timer={1400} />
          <Spinner key={`spinner-3-${spinKey}`} onFinish={finishHandler} timer={2200} />
          <div className="gradient-fade"></div>
        </div>
        {winner !== null && <RepeatButton onClick={handleClick} />}          
      </div>
    );
  };

