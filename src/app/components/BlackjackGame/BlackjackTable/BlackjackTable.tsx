"use client";

import { useCallback, useEffect, useState } from "react";

type HandleWinFunction = () => void;
type HandleLoseFunction = () => void;
type HandleDrawFunction = () => void;

function BlackjackTable({ handleWin, handleLose, handleDraw }: { handleWin: HandleWinFunction, handleLose: HandleLoseFunction, handleDraw: HandleDrawFunction}) {


    type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
    type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

    interface Card {
        rank: Rank;
        suit: Suit;
    }

    const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

    const generateDeck = () => {
        const newDeck: Card[] = [];
        for (let i = 0; i < 4; i++) {
            for (const suit of suits) {
                for (const rank of ranks) {
                    const card: Card = {
                        rank,
                        suit
                    };
                    newDeck.push(card);
                }
            }
        }
        return newDeck;
    }

    const [deck, setDeck] = useState<Card[]>(generateDeck());
    const [playerCards, setPlayerCards] = useState<Card[]>([])
    const [hostCards, setHostCards] = useState<Card[]>([])

    

    const playerDrawCard = () => {
        if (deck.length === 0) {
            console.log("No more cards in the deck!");
            return;
        }
    
        const randomIndex = Math.floor(Math.random() * deck.length);
        const drawnCard = deck[randomIndex];
    
        setDeck(prevDeck => {
            const updatedDeck = [...prevDeck.slice(0, randomIndex), ...prevDeck.slice(randomIndex + 1)];
            return updatedDeck;
        });
    
        setPlayerCards(prevPlayerCards => {
            const updatedPlayerCards = [...prevPlayerCards, drawnCard];
            return updatedPlayerCards;
        });
    };
    
    const hostDrawCard = () => {
        if (deck.length === 0) {
            console.log("No more cards in the deck!");
            return;
        }
    
        const randomIndex = Math.floor(Math.random() * deck.length);
        const drawnCard = deck[randomIndex];
    
        setDeck(prevDeck => {
            const updatedDeck = [...prevDeck.slice(0, randomIndex), ...prevDeck.slice(randomIndex + 1)];
            return updatedDeck;
        });
    
        setHostCards(prevHostCards => {
            const updatedHostCards = [...prevHostCards, drawnCard];
            return updatedHostCards;
        });
    };


    useEffect(() => {
        if (playerCards.length < 2) {
            playerDrawCard();
        }
    
        if (hostCards.length < 2) {
            hostDrawCard();
        }
    }, [playerCards, hostCards]);

    console.log("player cards");
    console.log(playerCards);
    console.log("host cards");
    console.log(hostCards);

    const CountPoints = (hand: Card[]) => {
        let result = 0;
        let aceCount = 0;
        
        for (const card of hand) {
            switch (card.rank) {
                case "2":
                    result += 2;
                    break;
                case "3":
                    result += 3;
                    break;
                case "4":
                    result += 4;
                    break;
                case "5":
                    result += 5;
                    break;
                case "6":
                    result += 6;
                    break;
                case "7":
                    result += 7;
                    break;
                case "8":
                    result += 8;
                    break;
                case "9":
                    result += 9;
                    break;
                case "10":
                case "J":
                case "Q":
                case "K":
                    result += 10;
                    break;
                case "A":
                    result += 11;
                    aceCount++;
                    break;
                default:
                    console.log("Unknown card rank: " + card.rank);
                    break;
            }
        }
        while (result > 21 && aceCount > 0) {
            result -= 10;
            aceCount--;
        }
        return result;
    }

    const playerScore = CountPoints(playerCards);
    if (playerScore > 21) 
        { 
            handleLose() 
        }
    const hostScore = CountPoints(hostCards);


    const playerStopDrawing = () => {
        if (playerScore > hostScore) {
            handleWin();
        } else if (playerScore === hostScore) {
            handleDraw();
        } else {
            handleLose();
        }
    }



    return (
        <>
            <div>{hostScore}</div>
            <div>{playerScore}</div>
            <button 
                className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full m-10"
                onClick={playerDrawCard}
            >
                Draw card
            </button>
            <button 
                className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full m-10"
                onClick={playerStopDrawing}
            >
                Enough
            </button>
        </>
    );
  }

  export default BlackjackTable