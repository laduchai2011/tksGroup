import { createContext } from 'react';
import { context_type } from './type';

export const Context = createContext<context_type | undefined>(undefined);
