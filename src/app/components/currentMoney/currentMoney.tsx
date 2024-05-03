"use client";

import { useState } from 'react';
import { useAppSelector } from '../../../lib/hooks'

function CurrentMoney() {

  const [playerMoney, setPlayerMoney] = useState(useAppSelector(state => state.playerMoney.money));

    return (
      <div className="items-center justify-between py-2 px-6 bg-white border-solid border-4 border-yellow-600 rounded-full absolute m-10">
        {playerMoney}
      </div>
    );
  }

  export default CurrentMoney