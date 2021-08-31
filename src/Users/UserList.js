import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'
const UserList = (props) => {
  return (
    <Card className = {`${classes.users}`}>
      <ul>
        {props.users.map((user) => (
         <div> <li key = {user.id}>
         Name = ({user.name})  
         Email = ({user.email}) 
         Address = ({user.address}) 
         Age = ({user.age}) 
         gender = ({user.ischecked.gender})
          </li></div>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
