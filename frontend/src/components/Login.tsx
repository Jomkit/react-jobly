import { useParams } from 'react-router-dom'

const Login = () => {
    const { loginParam } = useParams();

    if(loginParam == 'login'){
        return (
            <div>Login</div>
        )
    } else if(loginParam === 'signup'){
        return (
            <div>Sign Up</div>
        )
    }
}

export default Login