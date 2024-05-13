"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setPlayerMoney } from "@/lib/playerMoneySlice/slice";
import { useState } from "react";
import BlackjackBet from "./BlackjackBet/BlackjackBet";
import BlackjackTable from "./BlackjackTable/BlackjackTable";


function BlackjackGame() {
    const dispatch = useAppDispatch();
    const playerMoney = useAppSelector(state => state.playerMoney.money);
    const [inputValue, setInputValue] = useState<number>(10);
    const [betValue, setBetValue] = useState<number>(0);
    const [messageAfterGame, setMessageAfterGame] = useState('');
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [newGame, setNewGame] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value > 0 && value <= playerMoney) {
            setInputValue(value);
        }
    };

    const handleSaveInput = () => {
        setBetValue(inputValue);
        dispatch(setPlayerMoney({ money: playerMoney - inputValue }));
        setIsGameOver(false);
        setNewGame(false);
    };
    
    const handleWin = () => {
        dispatch(setPlayerMoney({ money: playerMoney + (2 * betValue) }));
        setBetValue(0);
        setIsGameOver(true);
        setMessageAfterGame("You win!");
    };

    const handleDraw = () => {
        dispatch(setPlayerMoney({ money: playerMoney + betValue }));
        setBetValue(0);
        setIsGameOver(true);
        setMessageAfterGame("Draw!");
    };

    const handleLose = () => {
        setBetValue(0);
        setIsGameOver(true);
        setMessageAfterGame("You lose!");
    };

    const handleAgainButton = () => {
        setNewGame(true);
        setIsGameOver(false);
        

    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {newGame &&
                <BlackjackBet inputValue={inputValue} handleInputChange={handleInputChange} handleSaveInput={handleSaveInput} />
            }
            {isGameOver && <div className="py-2 px-6 bg-red-300 border-solid border-4 border-blue-600 rounded-full m-10">{messageAfterGame}</div> }
            {!newGame && <BlackjackTable handleDraw={handleDraw} handleWin={handleWin} handleLose={handleLose} isGameOver={isGameOver}/>}


            {isGameOver &&
                <button className="py-2 px-6 bg-red-300 border-solid border-4 border-blue-600 rounded-full m-10" onClick={() => handleAgainButton()}>
                    Play again
                </button>
            }
        </div>
    );
  }

  export default BlackjackGame