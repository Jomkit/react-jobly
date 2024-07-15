import { useContext } from "react"
import { userContext } from "./contexts/userContext"
import { Navigate } from "react-router-dom";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = () => {
  const currUser = useContext(userContext);
  if(!currUser) {
    console.log(currUser);
    return (<Navigate to="/unauthorized-access" />);
  }

  if(currUser){
    return (
      <div>
          <h1>{currUser.username}'s Profile</h1>
          <ProfileUpdateForm />
      </div>
    )
  }
}

export default Profile