import { useContext } from "react";
import { userContext } from "../../components/contexts/userContext";
import ProfileUpdate from "./ProfileUpdate";

const Profile = () => {
  const currUser = useContext(userContext);
  if(currUser){
    return (
      <div>
        <div className="text-white">
          <h1 className="display-1">{currUser.username}</h1>
          <p>Number of applications: {currUser.applications && currUser.applications.length}</p>
        </div>
          <ProfileUpdate />
      </div>
    )
  }
}

export default Profile