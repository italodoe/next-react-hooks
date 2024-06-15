import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col p-10  gap-4">
      <Link href="/server-user-list" className="main-link">
        User list from server
      </Link>
      <Link href="/client-user-list" className="main-link">
        User list from client
      </Link>
      <Link href="/search-products" className="main-link">
       Search products
      </Link>
    </main>
  );
}
