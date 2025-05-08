import { createContext } from "react";
import { assets } from "../assets";

export const AppContext = createContext()
const AppContextProvider= (props) =>{


    const value = {
        doctors: assets.doctors

    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
