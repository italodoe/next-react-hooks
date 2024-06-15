import UserList from "@/components/UserLisrt";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 ">
      <h1 className="font-bold text-3xl ">User list</h1>
      <UserList></UserList>
    </main>
  );
}
