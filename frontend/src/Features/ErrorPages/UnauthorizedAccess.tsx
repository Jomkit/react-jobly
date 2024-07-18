import { Link } from 'react-router-dom'

const UnauthorizedAccess = () => {
  return (
    <div className='bg-white m-5 p-3 rounded'>
        <h1>Error 401: Unauthorized Access</h1>
        <p>Sorry, you need to <Link to="/login">log in</Link> or <Link to="/signup">sign-up</Link> first before you can see this page</p>
        <Link to="/">Home</Link>
    </div>
  )
}

export default UnauthorizedAccess