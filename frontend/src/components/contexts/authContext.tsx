import { createContext } from 'react';
import { authInterface } from '../../types';

export const authContext = createContext<authInterface>({} as authInterface);