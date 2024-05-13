"use client";

import Link from "next/link";

function Navbar() {

    return (
      <div className="items-center justify-between py-2 px-6 bg-white border-solid border-4 border-yellow-600">
        <Link href={"/"} className="py-2 px-2 m-4"> Home</Link>
      </div>
    );
  }

  export default Navbar