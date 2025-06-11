import {createContext, useEffect, useState} from "react";
import React from 'react';



const  GithubContext = createContext();

const  apiUrl = import.meta.env.VITE_API_URL;
const  apiKey = import.meta.env.VITE_GITHUB_TOKEN;


export const    GithubProvider = ({children}) =>{
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);

    const fetchUsers =async ()=>{
        const response = await fetch(
            `${apiUrl}/users`,{
                headers : {
                    authorization : `token ${
                        apiKey
                    }`
                }
            }

        )
        const  data = await response.json();
        setUsers(data);
        setLoading(false); 
    }

    return (
        <GithubContext.Provider value={{
            users,
            loading,
            fetchUsers
        }}> 
            {
                children
            }

        </GithubContext.Provider>
    )



}


export default GithubContext;