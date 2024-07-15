import { createContext } from "react";
import { userInterface } from "../../types";

export const userContext = createContext<userInterface | null>(null);