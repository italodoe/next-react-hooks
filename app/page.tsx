import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col p-10  gap-4">
      <Link href="/server-user-list" className="text-blue-200">
        User list from server
      </Link>
      <Link href="/client-user-list" className="text-blue-200">
        User list from client
      </Link>
    </main>
  );
}
