import { useContext } from 'react'
import UserForm from './UserForm';
import { sharedMethodsContext } from '../../components/contexts/sharedMethodsContext';

const SignupForm = () => {
    const { signup } = useContext(sharedMethodsContext);
  return (
    <>
        <UserForm pageTitle="Sign Up!" handleSubmit={signup} />
    </>
  )
}

export default SignupForm