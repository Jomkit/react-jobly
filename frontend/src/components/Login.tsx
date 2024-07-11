import { useParams } from 'react-router-dom'
import SignUpForm from './SignUpForm';

const Login = () => {
    const { loginParam } = useParams();

    if(loginParam == 'login'){
        return (
            <div>Login</div>
        )
    } else if(loginParam === 'signup'){
        return (
            <SignUpForm />
        )
    }
}

export default Login