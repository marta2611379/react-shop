import { useState } from "react";
import "./Users.css";
import UserCard from "../UserCard/UserCard";

export type User = {
  name: string;
  email: string;
  age: number;
};

function Users() {
  const [users, setUsers] = useState<User[]>([
    {
      name: "Andrew Davydovych",
      email: "andrew.davydovych@example.com",
      age: 28,
    },
    {
      name: "Marta Martsinkiv",
      email: "marta.martsinkiv@example.com",
      age: 27,
    },
    {
      name: "Ruslan Martsinkiv",
      email: "ruslan.martsinkiv@example.com",
      age: 18,
    },
    {
      name: "Olena Martsinkiv",
      email: "olena.martsinkiv@example.com",
      age: 12,
    },
    {
      name: "Viktor Martsinkiv",
      email: "viktor.martsinkiv@example.com",
      age: 30,
    }
  ]);

  function deleteUser(index: number): void {
    setUsers(users.filter((_, i) => i !== index));
    console.log(users);
  }

  function addUser(user: User): void {
    setUsers([...users, user]);
    console.log(users);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <button
            className="btn btn-primary"
            onClick={() =>
              addUser({
                name: "New User",
                email: "new.user@example.com",
                age: 30,
              })
            }
          >
            Add User
          </button>
        </div>
        {users.map((user, i) => (
          <div className="col-md-4" key={i}>
            <UserCard
              key={i}
              name={user.name}
              email={user.email}
              age={user.age}
              onDelete={() => deleteUser(i)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
