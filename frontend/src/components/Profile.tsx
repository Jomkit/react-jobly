import { useContext } from "react"
import { userContext } from "./contexts/userContext"
import { Navigate } from "react-router-dom";
import ProfileUpdate from "./ProfileUpdate";

const Profile = () => {
  const currUser = useContext(userContext);
  if(!currUser) {
    console.log(currUser);
    return (<Navigate to="/unauthorized-access" />);
  }

  if(currUser){
    return (
      <div>
          <h1 className="display-1">{currUser.username}</h1>
          <ProfileUpdate />
      </div>
    )
  }
}

export default Profile