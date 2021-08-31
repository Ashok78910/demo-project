import React,{useState} from 'react'
import AddUser from './Users/AddUser'
import UserList from './Users/UserList'

function App() {

const[userList,setUsersList] =  useState([])

const addUserHandler =  (uName,uAge,uEmail,uAddress,uIschecked) =>{
  setUsersList([...userList,{name:uName,age:uAge,email:uEmail,address:uAddress,ischecked:uIschecked, id:Math.random().toString()}]);
}
  return (
    <>
      <AddUser onAddUser = { addUserHandler}/>
      <UserList users = {userList }/>
    </>
  )
}

export default App;
