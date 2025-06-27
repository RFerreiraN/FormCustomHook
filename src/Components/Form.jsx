import { useState } from 'react'
import { useForm } from '../Hooks/useForm';

export const Form = () => {

  const formularioInputs = {
    username: '',
    email: '',
    password: ''
  }
  
  const {resetForm, formState , handleForm} = useForm(formularioInputs)

  const { username, email, password } = formState;

  const onsubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    resetForm()
    
  }

  return (
    <form onSubmit={onsubmit}>
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={handleForm}

        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleForm}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleForm}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
