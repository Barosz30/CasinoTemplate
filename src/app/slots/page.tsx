"use client"

import { useState } from "react";
import StoreProvider from "../StoreProvider";
import Slots from "@/components/Slots/Slots";

export default function SlotsPage() {
    const [isGameStarted, setIsGameStarted] = useState(false);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-700">
        {!isGameStarted && <button className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full" onClick={() => setIsGameStarted(true)}>
          Start Game
        </button>}
        {isGameStarted && <StoreProvider><Slots /></StoreProvider>}
      </main>
    );
  }