import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-700">
      <Link className="py-2 px-6 bg-cyan-400 border-solid border-4 border-blue-600 rounded-full" href={"/blackjack"}>Blackjack</Link>
    </main>
  );
}
