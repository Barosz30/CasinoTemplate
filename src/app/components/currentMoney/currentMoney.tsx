"use client";

import { useState } from 'react';
import { useAppSelector } from '../../../lib/hooks'

function CurrentMoney() {

  const [playerMoney, setPlayerMoney] = useState(useAppSelector(state => state.playerMoney.money));

    return (
      <div className="items-center justify-between p-10 bg-gray-700 border-solid rounded">
        {playerMoney}
      </div>
    );
  }

  export default CurrentMoney