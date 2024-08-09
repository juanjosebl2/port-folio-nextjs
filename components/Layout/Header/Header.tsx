import Link from "next/link";
import { Navbar } from "../Navbar";
import { Button } from "../../ui/button";
import { MovileNav } from "../MovileNav";

export function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            JUAN<span className="text-accent">.</span>
          </h1>
        </Link>
        {/** Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Contratame</Button>
          </Link>
        </div>
        {/** Mobile */}
        <div className="xl:hidden">
            <MovileNav />
        </div>
      </div>
    </header>
  );
}
