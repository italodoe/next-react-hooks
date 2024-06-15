export type User = {
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
};
export type UserComponentProps = {
  user: User;
};
export const loadUsers = async () => {
  const response = await fetch(`https://randomuser.me/api/?results=20`);
  const { results: users } = await response.json();
  return users as User[];
};
