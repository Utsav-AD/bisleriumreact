import { useState, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

function AppContextProvider(props){
    const {user, setUser} = useState();
    const loginUser = (email, password) => {

    }

    const registerUser = async (firstName, lastName, phoneNumber, email, password ,confirmPassword, role) => {
        let userData = {
            firstName, lastName, phoneNumber, email, password ,confirmPassword, role
        }
        try{
            const response = await axios.post("'https://localhost:7241/api/User/RegisterUser", userData);
            return response;
        }catch(err){
            console.error("something went wrong")
        }        
        
    }
    
    const contextValues = {
        registerUser,
        loginUser
    }

    return (
     <AppContext.Provider value={contextValues}>
      {props.children}
     </AppContext.Provider>
    );
}

export default AppContextProvider;