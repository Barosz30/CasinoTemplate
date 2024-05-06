"use client";

import { useCallback, useEffect, useState } from "react";

function BlackjackTable() {

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
    const [playerScore, setPlayerScore] = useState<number>(0);

    

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

    console.log(deck.length);



    return (
        <div>Tutaj jest gra</div>
    );
  }

  export default BlackjackTable