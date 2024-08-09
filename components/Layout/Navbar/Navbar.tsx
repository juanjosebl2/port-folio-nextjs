"use client";

import Link from "next/link";
import { dataLinks } from "./NavbarRoutes.data";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {dataLinks.map((link) => (
        <Link
          key={link.path} // Aquí asumiendo que `link.path` es único
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
