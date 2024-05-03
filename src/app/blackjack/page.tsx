"use client"

import { useState } from "react";

export default function Blackjack() {
    const [isGameStarted, setIsGameStarted] = useState(false);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-700">
        {!isGameStarted && <button onClick={() => setIsGameStarted(true)}>Start Game</button>}
        {isGameStarted && <div>Wsadzić tu grę</div>}
      </main>
    );
  }