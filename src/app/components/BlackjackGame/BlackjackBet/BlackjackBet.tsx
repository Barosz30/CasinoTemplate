"use client";

import { useCallback, useEffect, useState } from "react";


interface BlackjackBetProps {
    inputValue: number;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSaveInput: () => void;
}

function BlackjackBet({ inputValue, handleInputChange, handleSaveInput }: BlackjackBetProps) {




    return (
        <>
        <input
            id="blackjackBet"
            type="number"
            className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter amount"
        />
        <button
            className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full m-10"
            onClick={handleSaveInput}
        >
            Bet
        </button>
        
    </>
    );
  }

  export default BlackjackBet