import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typecode.com/users')
    const data = await response.data;

    setUsers(data)
  };

  useEffect(() =>{
    fetchUsers();
  }, [])

  return (
    <div>
      {users.map(() => {
        <div>
          {users.name}
        </div>
      })}
    </div>
  );
  
}