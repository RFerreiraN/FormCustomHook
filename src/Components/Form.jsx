import { useState } from 'react'

export const Form = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = form;

  const handleForm = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onsubmit = (event) => {
    event.preventDefault()
    console.log(form)
    setForm({
      username: '',
      email: '',
      password: ''
    })
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
