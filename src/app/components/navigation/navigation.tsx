"use client";

import CurrentMoney from "../currentMoney/currentMoney";
import StoreProvider from "../../StoreProvider";

function Navigation() {
    return (
      <>
        <StoreProvider>
            <CurrentMoney />
        </StoreProvider>
      </>
    );
  }

  export default Navigation;