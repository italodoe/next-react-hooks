"use client";
import React, { FormEventHandler, useRef } from "react";
type SearchBoxProps = {
  onChange: (s: string) => void;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  const textRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(textRef.current!.value);
    onChange(textRef.current!.value);
    textRef.current!.value = "";
  };
  return (
    <form
      className="p-2 flex flex-row gap-3 justify-center"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        ref={textRef}
        className="rounded border-2 border-zinc-500 text-black p-1.5"
      />
      <button
        type="submit"
        className="border-black rounded bg-slate-600 px-3 transition ease-in-out delay-150 hover:bg-indigo-500 duration-200"
      >
        Search
      </button>
    </form>
  );
}
