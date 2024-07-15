import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage';
import Companies from './Companies';
import Jobs from './Jobs';
import Company from './Company';
import Login from './Login';
import Profile from './Profile';
import UnauthorizedAccess from './UnauthorizedAccess';

const RoutesList = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<Companies />} />

        <Route path="/companies/:company" element={<Company />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/:loginParam" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/unauthorized-access' element={<UnauthorizedAccess />} />

    </Routes>
  )
}

export default RoutesList