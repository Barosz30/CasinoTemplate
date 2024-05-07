"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setPlayerMoney } from "@/lib/playerMoneySlice/slice";
import { useState } from "react";
import BlackjackTable from "./BlackjackTable/BlackjackTable";


function BlackjackGame() {
    const dispatch = useAppDispatch();
    const playerMoney = useAppSelector(state => state.playerMoney.money);
    const [inputValue, setInputValue] = useState<number>(10);
    const [betValue, setBetValue] = useState<number>(0);
    const [isBetOn, setIsBetOn] = useState<boolean>(false);
    const [messageAfterGame, setMessageAfterGame] = useState('');
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value > 0 && value <= playerMoney) {
            setInputValue(value);
        }
    };

    const handleSaveInput = () => {
        setBetValue(inputValue);
        dispatch(setPlayerMoney({ money: playerMoney - inputValue }));
        setIsBetOn(true);
        setIsGameOver(false);
    };
    
    const handleWin = () => {
        dispatch(setPlayerMoney({ money: playerMoney + (2 * betValue) }));
        setIsBetOn(false);
        setBetValue(0);
        setIsGameOver(true);
        setMessageAfterGame("You win!");
    };

    const handleDraw = () => {
        dispatch(setPlayerMoney({ money: playerMoney + betValue }));
        setIsBetOn(false);
        setBetValue(0);
        setIsGameOver(true);
        setMessageAfterGame("Draw!");
    };

    const handleLose = () => {
        setIsBetOn(false);
        setBetValue(0);
        setIsGameOver(true);
        setMessageAfterGame("You lose!");
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {!isBetOn && 
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
            }
            {isGameOver && <div className="py-2 px-6 bg-red-300 border-solid border-4 border-blue-600 rounded-full m-10">{messageAfterGame}</div> }
            {isBetOn &&
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <button
                    className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full m-10"
                    onClick={handleWin}
                >
                    Win
                </button>
                <button
                    className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full m-10"
                    onClick={handleLose}
                >
                    Lose
                </button>
            </div>}
            {isBetOn && 
            <BlackjackTable handleWin={handleWin} handleLose={handleLose} handleDraw={handleDraw}/>}
        </div>
    );
  }

  export default BlackjackGame