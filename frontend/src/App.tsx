 import { useEffect, useState } from 'react';
import JoblyApi from './api.ts';
import { jwtDecode, JwtPayload } from "jwt-decode";
import './App.css'
import NavBar from './Features/Nav/NavBar.tsx'
import RoutesList from './components/RoutesList'
import { userInterface } from './types';
import { sharedMethodsContext } from './components/contexts/sharedMethodsContext.tsx';
import { userContext } from './components/contexts/userContext';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './components/hooks/useLocalStorage.tsx';

function App() {
  const [token, setToken] = useLocalStorage('currUserToken');
  const [ currUser, setCurrUser ] = useState<userInterface | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // get current user info when userToken changes (going from null to
  // actual token when user signs up or logs in)

  useEffect(() => {
    const getCurrUser = async (userToken: string) => {
      setIsLoading(true);
      try{
        const { username } = jwtDecode<JwtPayload & {username: string}>(userToken);
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
        setIsLoading(false);
      }catch(e: any){
        console.log("No user found");
        console.error(e);
      }
    }

    JoblyApi.token = token;
    const currUserToken:string = token as string;
    if(currUserToken) {
      getCurrUser(currUserToken);
    } else {
      setCurrUser(null);
    }
    
  },[token]);

  const signup = async (values: userInterface) => {
    const { applications, ...newUserValues } = values;
    const { token }: { token: string } = await JoblyApi.register(newUserValues);
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
    try{
      let { token }: { token: string } = await JoblyApi.login(username, password);
      setToken(token);
    } catch(e: any){
      console.error(e);
      navigate("/incorrect-credentials");
    }
  }
  const logout = () => {
    setToken(null);
    setCurrUser(null);
    alert("Successfully logged out...");
    navigate('/');
  }

  const updateUser = async (user: userInterface) => {
    const updatedUser = await JoblyApi.updateUser(user);
    setCurrUser(updatedUser);
    alert(`${updatedUser.username}, your profile has been updated`);
  }

  const applyToJob = async (jobId: number) => {
    await JoblyApi.applyToJob(currUser!.username, jobId);
    if(currUser?.applications){
      currUser.applications.push(+jobId);
    }
  }
  
  if(isLoading) {
    return (<h3 className='text-center text-white pt-5'>Loading...</h3>);
  }
  
  return (
    <>
      <userContext.Provider value={ currUser }>
        <sharedMethodsContext.Provider value={{ signup, login, logout, updateUser, applyToJob }}>
          <NavBar />
          <RoutesList />
        </sharedMethodsContext.Provider>
      </userContext.Provider>
    </>
  )
}

export default App
