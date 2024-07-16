import { createContext } from 'react';
import { sharedMethodsInterface } from '../../types';

export const sharedMethodsContext = createContext<sharedMethodsInterface>({} as sharedMethodsInterface);