import { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'


const AddUser = (props) => {
	const [EnteredUsername, setEnteredUsername] = useState('')
	const [EnteredAge, setEnteredAge] = useState('')

	const AddUserHandler = (event) => {
		event.preventDefault()
		if (EnteredUsername && EnteredAge){
			if (EnteredAge > 0){
				const user = {
					username: EnteredUsername,
					age: EnteredAge,
				}
				props.onAddUser(user)
				setEnteredUsername('')
				setEnteredAge('')
			}
		}
		return
	}

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value)
	}

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value)
	}

	return (
		<Card className={classes.input}>
			<form onSubmit={AddUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" onChange={usernameChangeHandler} />
				<label htmlFor="age">Age(years)</label>
				<input id="age" type="number" onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
