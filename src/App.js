import React from 'react'
import { useState } from 'react'

import AddUser from './Components/Users/AddUser'

const App = () => {
	const [users, setUsers] = useState([])
	const addUserHandler = (user) => {
		setUsers((prevUsers) => {
			return [user, ...prevUsers]
		})
		console.log(users)
	}

	return (
		<div>
				<AddUser onAddUser={addUserHandler} />		
		</div>
	)
}

export default App
