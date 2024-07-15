import { FormEvent, useContext } from 'react'
import { authInterface } from '../types';
import { authContext } from './contexts/authContext';

const LogoutForm = () => {
    const { logout } = useContext<authInterface>(authContext);

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        logout();
    }

  return (
    <form method='post' onSubmit={handleSubmit}>
        <button className='btn text-light' type="submit"><strong>Logout</strong></button>
    </form>
  )
}

export default LogoutForm