import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <nav className="w-full flex justify-around bg-gray-800 p-4 text-white">
        <Link href="/">Home</Link>
        <Link href="/sports">Sports</Link>
        <Link href="/bet-analyzer">Bet Analyzer</Link>
      </nav>
      
      <section className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sports Analytics</h1>
        <Image src="/sportsanal.png" alt="Sports" width={1500} height={1500} />
        <p className="text-lg">
          Empowering people to use historical data in sports to make insightful bets on current games. 
          To help people place and manage risk/reward in their bets.
        </p>
      </section>
      <div className="grid grid-cols-5  gap-4">
        <div className="col-span-1 bg-gray-400 rounded-lg py-6">
          <h2 className="text-2xl font-bold text-center">UFC</h2>
          <Image src="/sportscard.png" alt="Sports" width={350} height={500} className="px-1"/>
        </div>
        <div className="col-span-1 bg-gray-400 rounded-lg py-6">
          <h2 className="text-2xl font-bold text-center">NBA</h2>
          <Image src="/sportscard.png" alt="Sports" width={500} height={500} />
        </div>
        <div className="col-span-1 bg-gray-400 rounded-lg py-6">
          <h2 className="text-2xl font-bold text-center">NFL</h2>
          <Image src="/sportscard.png" alt="Sports" width={500} height={500} />
        </div>
        <div className="col-span-1 bg-gray-400 rounded-lg py-6">
          <h2 className="text-2xl font-bold text-center">NCAAF</h2>
          <Image src="/sportscard.png" alt="Sports" width={500} height={500} />
        </div>
        <div className="col-span-1 bg-gray-400 rounded-lg py-6">
          <h2 className="text-2xl font-bold text-center">NCAAB</h2>
          <Image src="/sportscard.png" alt="Sports" width={500} height={500} />
        </div>
        <div className="col-span-1 bg-gray-400 rounded-lg py-6">
          <h2 className="text-2xl font-bold text-center">Finance</h2>
          <Image src="/sportscard.png" alt="Sports" width={500} height={500} />
        </div>

      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">

      </div>
    </main>
  );
}