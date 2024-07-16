import { useParams } from 'react-router-dom'
import UserForm from './UserForm';
import LoginForm from './LoginForm';
import { useContext } from 'react';
import { authInterface } from '../types';
import { authContext } from './contexts/authContext';

const Login = () => {
    const { loginParam } = useParams();
    const { signup } = useContext<authInterface>(authContext);

    if(loginParam == 'login'){
        return (
            <LoginForm />
        )
    } else if(loginParam === 'signup'){
        return (
            <UserForm pageTitle="Sign Up!" handleSubmit={signup} />
        )
    }
}

export default Login