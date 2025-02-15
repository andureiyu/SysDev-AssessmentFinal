import { useEffect, useState } from "react";

export default function Collaborations() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then((data) => setUsers(data.data))
        .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="min-h-screen p-8 bg-[#212121]">
        <h1 className="text-4xl font-bold text-center mb-8 text-white font-serif">
          Collaborations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-500 text-center break-words">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
