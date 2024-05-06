import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface MoneyState {
  money: number;
}

export const initialState: MoneyState = {
  money: 1000,
};

export const playerMoneySlice = createSlice({
  name: 'playerMoney',
  initialState,
  reducers: {
    setPlayerMoney: (state, action) => {
      return action.payload;
    },
  }
});

export const { setPlayerMoney } = playerMoneySlice.actions;

export const getPlayerMoney = (state: RootState) => state.playerMoney.money;

export default playerMoneySlice.reducer;