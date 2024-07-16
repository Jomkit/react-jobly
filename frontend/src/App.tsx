 import { useEffect, useState } from 'react';
import JoblyApi from './api.ts';
import { jwtDecode, JwtPayload } from "jwt-decode";
import './App.css'
import NavBar from './components/NavBar'
import RoutesList from './components/RoutesList'
import { userInterface } from './types';
import { authContext } from './components/contexts/authContext';
import { userContext } from './components/contexts/userContext';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './components/hooks/useLocalStorage.tsx';

function App() {
  const [token, setToken] = useLocalStorage('currUserToken');
  const [ currUser, setCurrUser ] = useState<userInterface | null>(null);
  const navigate = useNavigate();

  // get current user info when userToken changes (going from null to
  // actual token when user signs up or logs in)
  useEffect(() => {
    const getCurrUser = async (userToken: string) => {
      try{
        const { username } = jwtDecode<JwtPayload & {username: string}>(userToken);
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
        
      }catch(e: any){
        console.log("No user found");
        console.error(e);
      }
    }
    JoblyApi.token = token;
    const currUserToken:string = token as string;
    console.log("currUserToken", currUserToken);
    if(currUserToken) {
      getCurrUser(currUserToken);
    } else {
      setCurrUser(null);
    }
    
  },[token]);

  const signup = async (values: userInterface) => {
    const { token }: { token: string } = await JoblyApi.register(values);
    setToken(token);
  } 

 /**
 * Asynchronously logs in a user with 
 * the provided values.
 *
 * Params: username, password
 * @return {Promise<void>} A promise that resolves when the login process is complete.
 */
  const login = async ({username, password}: {username: string, password: string}) => {
    const { token }: { token: string } = await JoblyApi.login(username, password);
    setToken(token);
    console.log(token);
    console.log('logging in...');
  }
  const logout = () => {
    setToken(null);
    setCurrUser(null);
    alert("Successfully logged out...");
    console.log('logging out...');
    navigate('/');
  }

  const updateUser = async (user: userInterface) => {
    console.log("Updating...");
    const updatedUser = await JoblyApi.updateUser(user);
    setCurrUser(updatedUser);
    alert(`${updatedUser.username}, your profile has been updated`);
}
  
  return (
    <>
      <userContext.Provider value={ currUser }>
        <authContext.Provider value={{ signup, login, logout, updateUser }}>
          <NavBar />
          <RoutesList />
        </authContext.Provider>
      </userContext.Provider>
    </>
  )
}

export default App
