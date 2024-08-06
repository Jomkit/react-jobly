import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const auth = localStorage.getItem('currUserToken');
    return (auth ? <Outlet /> : <Navigate to="/unauthorized-access" />);
}

export default ProtectedRoutes;