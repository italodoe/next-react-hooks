"use client";

import UserComponent from "@/components/UserComponent";
import { User, loadUsers } from "@/lib/users";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [userList, setUserList] = useState<User[] | null>(null);

  useEffect(() => {
    // loadUsers().then((user) => setUserList(user));
    loadUsers().then(setUserList);
  }, []); //WITH array empty calling only one

  if (userList === null) return <div>Loading...</div>;

  return (
    <main>
      <h1 >
        User list
      </h1>
      <div className="flex flex-col gap-4 ">
        {userList.map((user) => (
          <UserComponent key={user.email} userProp={user}></UserComponent>
        ))}
      </div>
    </main>
  );
}
