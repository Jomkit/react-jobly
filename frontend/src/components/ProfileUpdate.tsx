import { useContext } from 'react';
import UserForm from './UserForm.tsx'
import { userContext } from './contexts/userContext.tsx';
import { authContext } from './contexts/authContext.tsx';

const ProfileUpdate = () => {
    const currUser = useContext(userContext);
    const { updateUser } = useContext(authContext);
    
  return (
    <div>
        {currUser && <UserForm pageTitle='Edit User Profile' handleSubmit={ updateUser! } defaultValues={currUser} />}
    </div>
  )
}

export default ProfileUpdate