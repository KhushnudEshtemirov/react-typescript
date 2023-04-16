import { useState } from "react";

const SearchUser = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const users = [
    { name: "Salim", age: 23 },
    { name: "Olim", age: 22 },
    { name: "Micheal", age: 34 },
    { name: "John", age: 21 },
  ];

  const onClick = () => {
    const foundUser = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>

      <h3>{user && user.name}</h3>
      <h3>{user && user.age}</h3>
    </div>
  );
};

export default SearchUser;
