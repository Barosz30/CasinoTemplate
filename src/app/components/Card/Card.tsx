import React from 'react';

interface CardProps {
  suit: 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
  rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
}

const Card: React.FC<CardProps> = ({ suit, rank }) => {
    return (
      <div className="card bg-white rounded-lg shadow-md w-24 h-36 flex justify-center items-center m-2">
        <div className={`card-inner ${suit.toLowerCase()} w-full h-full flex justify-center items-center`}>
          <div className="card-front flex flex-col justify-center items-center text-center">
            <span className="rank text-lg">{rank}</span>
            <span className="suit text-sm">{suit}</span>
          </div>
          <div className="card-back"></div>
        </div>
      </div>
    );
  };

export default Card;