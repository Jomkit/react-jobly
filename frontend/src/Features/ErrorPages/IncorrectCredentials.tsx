import { Link } from 'react-router-dom'

const IncorrectCredentials = () => {
  return (
    <div>
        <h1>Email or Password Incorrect</h1>
        <p>Try <Link to="/login">logging in</Link> again with correct email and password</p>
    </div>
  )
}

export default IncorrectCredentials