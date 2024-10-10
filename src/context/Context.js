import { createContext, useState } from "react";
import run from "../config/Gemini";

 export const Context = createContext();

 const ContextProvider = (props)=>{

    const[input , setinput] = useState("");
    const[recentprompt , setrecentprompt] = useState("");
    const[prevprompt , setprevprompt]  = useState([]);
    const[showresult , setshowresult] = useState(false);
    const[loading , setloding] = useState(false);
    const[resultdata , setresultdata] = useState("");

      const onsent = async(prompt) =>{
       await run(input)
      }

    const contextValue = {
            prevprompt , 
            setprevprompt,
            onsent,
            setrecentprompt,
            recentprompt,
            showresult,
            loading,
            resultdata,
            input,
            setinput,
            // newchat
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
 }
 export default ContextProvider