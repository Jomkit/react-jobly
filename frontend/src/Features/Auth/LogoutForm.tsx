import { FormEvent, useContext } from 'react'
import { sharedMethodsInterface } from '/home/jomkit/react-jobly/frontend/src/types.ts';
import { sharedMethodsContext } from '../../components/contexts/sharedMethodsContext';

const LogoutForm = () => {
    const { logout } = useContext<sharedMethodsInterface>(sharedMethodsContext);

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