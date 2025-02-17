import HomePage from "./home/page";
import { SaladProvider } from "@/hooks/salad-store";

export default function Home() {
  return (
    <div className="w-full">
      <main>
        <SaladProvider>
          <HomePage />
        </SaladProvider>   
      </main>
      <footer></footer>
    </div>
  );
}
