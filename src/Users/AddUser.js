import React, { useState,useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import ErrorModel from '../UI/ErrorModel'
import Wrapper from '../components/Helpers/Wrapper'

//var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const AddUser = (props) => {
   
    const nameInputRef = useRef();
    const ageInputRef = useRef()
    const emailInputRef = useRef()
    const addressInputRef = useRef()
 
  const [error, SetError] = useState()
  const [isChecked, setIsChecked] = useState({
    gender: '',
  })

  const addUserHandler = (event) => {
    event.preventDefault()
    const enteredName =  nameInputRef.current.value;
    const enteredUserAge =  ageInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress =  addressInputRef.current.value
    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredAddress.trim().length === 0
    ) {
      SetError({
        title: 'invalid input',
        message: 'please eneter valid age and name and Email (non empty value)',
      })
      return
    }
    if (+enteredUserAge < 1) {
      SetError({
        title: 'invalid input',
        message: 'please eneter valid age (> 0)',
      })
      return
    }
    if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test( enteredEmail.value)) {
      SetError({
        title: 'invalid input',
        message: 'please eneter valid Email Address',
      })
      return
    }
    props.onAddUser(
      enteredName,
      enteredUserAge,
      enteredEmail,
      enteredAddress,
      isChecked
    )
    nameInputRef.current.value = '';
    ageInputRef.current.value ='';
    emailInputRef.current.value = '';
    addressInputRef.current.value = '';
    setIsChecked(false)
  }

  const handleOnChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value
    setIsChecked({
      ...isChecked,
      [name]: value,
    })
  }

  const errorHandler = () => {
    SetError(null)
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref = {nameInputRef}
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref = {ageInputRef}
          ></input>


          <label htmlFor="Email">Email</label>
          <input
            id="email"
            type="email"
            ref ={emailInputRef}
          ></input>

          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="address"
            ref = {addressInputRef}
          ></input>

          <h2> Select your Gender </h2>

          <label class="container">
            <input
              className="radio"
              type="radio"
              name="gender"
              value="male"
              checked={isChecked.gender === 'male'}
              onChange={handleOnChange}
            />
            Male
          </label>

          <label class="container">
            <input
              className="radio"
              type="radio"
              name="gender"
              value="female"
              checked={isChecked.gender === 'female'}
              onChange={handleOnChange}
            />
            Female
          </label>

          <div>
            <Button className="button" type="submit">
              Add User
            </Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser
