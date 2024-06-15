import { loadUsers } from "@/lib/users";
import UserComponent from "./UserComponent";

export default async function UserList() {
  const users = await loadUsers();
  return (
    <div className="flex flex-col gap-4 ">
      {users.map((u) => (
        <UserComponent key={u.email} user={u}></UserComponent>
      ))}
    </div>
  );
}
