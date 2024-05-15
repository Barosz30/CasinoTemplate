import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-center p-24 bg-green-700">
      <Link className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full m-5 h-fit" href={"/blackjack"}>Blackjack</Link>
      <Link className="py-2 px-6 bg-orange-300 border-solid border-4 border-blue-600 rounded-full m-5 h-fit" href={"/slots"}>Slots</Link>
    </main>
  );
}
