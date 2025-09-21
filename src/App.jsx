import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])  // ✅ shuru se array

  useEffect(() => {
    axios.get("https://full-stack-project-eight-beta.vercel.app/api/users")   // proxy ke through request
      .then((UsersData) => {
        console.log(UsersData.data)  // backend ka response check karo
        setUsers(UsersData.data)     // ✅ sirf res.data
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <ol>
        {users.map((u) => (   // ✅ ab safe hai
          <li key={u.id}>
            {u.first_name} {u.last_name} ({u.email}) ({u.gender})
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
