import {createContext, useEffect, useReducer, useState} from "react";
import React from 'react';
import githubReducer from "./GithubReducer.js";


const  GithubContext = createContext();

const  apiUrl = import.meta.env.VITE_API_URL;
const  apiKey = import.meta.env.VITE_GITHUB_TOKEN;


export const    GithubProvider = ({children}) =>{
        // const [users, setUsers] = useState([]);
        // const [loading, setLoading] = useState(true);

    const initialState = {
        users : [],
        loading : true,
    }
    
    
    const [state,dispatch] = useReducer(githubReducer, initialState);

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

        
        //dispatch function to update state
        dispatch ({
            type : 'GET_USERS',
            payload : data,
        })
        // setUsers(data);
        // setLoading(false); 
    }

    return (
        <GithubContext.Provider value={{
            users : state.users,
            loading : state.loading,
            fetchUsers
        }}> 
            {
                children
            }

        </GithubContext.Provider>
    )



}


export default GithubContext;