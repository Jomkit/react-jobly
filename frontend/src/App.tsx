 import { useContext, useEffect, useState } from 'react';
import JoblyApi from './api.ts';
import { jwtDecode, JwtPayload } from "jwt-decode";
import './App.css'
import NavBar from './components/NavBar'
import RoutesList from './components/RoutesList'
import { userInterface } from './types';
import { authContext } from './components/contexts/authContext';
import { userContext } from './components/contexts/userContext';

type usernameType = string;

function App() {
  const [ userToken, setUserToken ] = useState<string | null>(null);
  const [ currUser, setCurrUser ] = useState<userInterface | null>(null);

  useEffect(() => {
    const getCurrUser = async (userToken: string) => {
      try{
        console.log("decoding currUser");
        const decoded = jwtDecode<JwtPayload & {username: string}>(userToken);
        console.log(decoded);
        const user = await JoblyApi.getUser(decoded.username);
        console.log(user);
        setCurrUser(user);
        
      }catch(e: any){
        console.log("No user found");
        console.error(e);
      }
    }

    getCurrUser(userToken as string);
    
  },[userToken]);
  
  const signup = async (values: userInterface) => {
    const { token }: { token: string } = await JoblyApi.register(values);
    setUserToken(token);
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
    setUserToken(token);
    console.log(token);
    console.log('logging in...');
  }
  const logout = () => {
    console.log('logging out...');
  }
  
  return (
    <>
      <userContext.Provider value={ currUser }>
        <authContext.Provider value={{ signup, login, logout }}>
          <NavBar />
          <RoutesList />
        </authContext.Provider>
      </userContext.Provider>
    </>
  )
}

export default App
