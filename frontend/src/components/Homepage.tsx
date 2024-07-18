import { useContext } from "react"
import { userContext } from "./contexts/userContext"

const Homepage = () => {
  const currUser = useContext(userContext);
  return (
    <div style={{marginTop: "30vh", color: "white"}}>
        <h1 className="display-1">Jobly</h1>
        { currUser ?
        <p>Welcome back {currUser.username}! Here are all the jobs in one, convenient place!</p>
        :
        <p>Join now for easy access to all the jobs in one, convenient place</p>
        }
    </div>
  )
}

export default Homepage