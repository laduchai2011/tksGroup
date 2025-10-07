import { createContext } from 'react';
import { Header__interface } from './interface';

export const HeaderContext = createContext<Header__interface | undefined>(undefined);
