import { useContext } from "react"
import { userContext } from "./contexts/userContext"

const Profile = () => {
  const currUser = useContext(userContext);
  if(currUser){
    return (
      <div>
          <h1>{currUser.username}'s Profile</h1>
          <p>First Name: {currUser.firstName}</p>
          <p>Last Name: {currUser.lastName}</p>
          <p>Email: {currUser.email}</p>
      </div>
    )
  }
}

export default Profile