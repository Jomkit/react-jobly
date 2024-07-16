import { useParams } from 'react-router-dom'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Login = () => {
    const { loginParam } = useParams();

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