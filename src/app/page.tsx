import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-700">
      <Link href={"/blackjack"}>Blackjack</Link>
    </main>
  );
}
