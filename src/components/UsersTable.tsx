import { useState, useEffect } from "react";

const AUTH_BEARER_TOKEN = process.env.AUTH_BEARER

type User = {
    id: number;
    email: string;
    username: string;
    gamesWon: number;
  };
const UsersTable = () => {
    const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${AUTH_BEARER_TOKEN}`,
      },
    });
    const usersData = await response.json();
    const sortedUsers = usersData.sort((a: User, b: User) => b.gamesWon - a.gamesWon);
    setUsers(sortedUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
        <h1>Ranking Global</h1>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">Partidas Ganadas</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.gamesWon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
