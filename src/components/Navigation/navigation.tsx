"use client";

import CurrentMoney from "../CurrentMoney/currentMoney";
import StoreProvider from "../../app/StoreProvider";
import Navbar from "../Navbar/navbar";

function Navigation() {
    return (
      <>
        <StoreProvider>
            <Navbar />
            <CurrentMoney />
        </StoreProvider>
      </>
    );
  }

  export default Navigation;