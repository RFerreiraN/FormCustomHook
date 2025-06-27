import {useState} from 'react'

export const Form = () => { 

  const [form, setForm] = useState([{
    username : '',
    email : '',
    password : ''
  }])

  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter Username"

        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
