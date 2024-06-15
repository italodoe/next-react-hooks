"use client";

import SearchResult from "@/components/SearchResult";
import SearchBox from "@/components/searchBox";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");
  return (
    <main>
      <h1>Search products</h1>
      <div className="flex flex-col gap-4 ">
        <SearchBox onChange={setSearch}></SearchBox>
        <p className="max-w-screen-md m-auto text-zinc-500">{search}</p>
        <SearchResult search={search}></SearchResult>
      </div>
    </main>
  );
}
