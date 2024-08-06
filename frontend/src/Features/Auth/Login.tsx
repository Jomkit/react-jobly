import { Navigate, useParams } from 'react-router-dom'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useContext } from 'react';
import { userContext } from '../../components/contexts/userContext';

const Login = () => {
    const { loginParam } = useParams();
    const currUser = useContext(userContext);
    if(currUser) {
        return (<Navigate to="/" />);
    }
    if(loginParam == 'login'){
        return (
            <LoginForm />
        )
    } else if(loginParam === 'signup'){
        return (
            <SignupForm />
        )
    }
}

export default Login