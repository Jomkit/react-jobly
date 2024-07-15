import { useParams } from 'react-router-dom'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const Login = () => {
    const { loginParam } = useParams();

    if(loginParam == 'login'){
        return (
            <LoginForm />
        )
    } else if(loginParam === 'signup'){
        return (
            <SignUpForm />
        )
    }
}

export default Login