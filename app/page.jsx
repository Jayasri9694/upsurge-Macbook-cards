import MacBook from "../components/MacBook";
import CardGrid from "../components/CardGrid";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-black">
      <MacBook>
        <CardGrid />
      </MacBook>
    </main>
  );
}
