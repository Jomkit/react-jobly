import { useContext } from 'react';
import UserForm from '../Auth/UserForm.tsx'
import { userContext } from '../../components/contexts/userContext.tsx';
import { sharedMethodsContext } from '../../components/contexts/sharedMethodsContext.tsx';

const ProfileUpdate = () => {
    const currUser = useContext(userContext);
    const { updateUser } = useContext(sharedMethodsContext);
    
  return (
    <div>
        {currUser && <UserForm pageTitle='Edit User Profile' handleSubmit={ updateUser! } defaultValues={currUser} />}
    </div>
  )
}

export default ProfileUpdate