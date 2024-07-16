import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage';
import Companies from '../Features/Company/Companies';
import Jobs from '../Features/Job/Jobs';
import Company from '../Features/Company/Company';
import Login from '../Features/Auth/Login';
import Profile from '../Features/User/Profile';
import UnauthorizedAccess from '../Features/ErrorPages/UnauthorizedAccess';
import IncorrectCredentials from '../Features/ErrorPages/IncorrectCredentials';

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
        <Route path='/incorrect-credentials' element={<IncorrectCredentials />} />

    </Routes>
  )
}

export default RoutesList