import { configureStore } from '@reduxjs/toolkit'
import playerMoneyReducer from './playerMoneySlice/slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      playerMoney: playerMoneyReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


