import type { UserComponentProps } from "@/lib/users";
import Image from "next/image";

export default function UserComponent({ userProp: user }: UserComponentProps) {
  const { email, name } = user;
  return (
    <div className="px-4 py-3 border rounded-lg shadow-md shadow-slate-500 flex flex-row gap-4 items-center w-8/12 m-auto">
      <Image
        src={user.picture.thumbnail}
        alt="user picture"
        width={66}
        height={66}
        className="rounded-full ml-5"
      />
      <div className="flex flex-col">
        <div className="font-bold ">
          {name.first} {name.last}
        </div>
        <div className="font-mono text-xs text-zinc-400">{email}</div>
      </div>
    </div>
  );
}
