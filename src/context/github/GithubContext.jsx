import {createContext, useEffect, useReducer, useState} from "react";
import React from 'react';
import githubReducer from "./GithubReducer.js";
import {useSearchParams} from "react-router-dom";


const  GithubContext = createContext();

const  apiUrl = import.meta.env.VITE_API_URL;
const  apiKey = import.meta.env.VITE_GITHUB_TOKEN;


export const    GithubProvider = ({children}) =>{
        // const [users, setUsers] = useState([]);
        // const [loading, setLoading] = useState(true);

    const initialState = {
        users : [],
        loading : false,
    }
    
    
    const [state,dispatch] = useReducer(githubReducer, initialState);

    // const fetchUsers =async ()=>{
    //     const response = await fetch(
    //         `${apiUrl}/users`,{
    //             headers : {
    //                 authorization : `token ${
    //                     apiKey
    //                 }`
    //             }
    //         }
    //
    //     )
    //     const  data = await response.json();
    //
    //    
    //     //dispatch function to update state
    //     dispatch ({
    //         type : 'GET_USERS',
    //         payload : data,
    //     })
    //     // setUsers(data);
    //     // setLoading(false); 
    // }

    //searchUsers function
    const searchUsers = async (text)=>{ 
        setLoading();
        const params = new URLSearchParams({
            q:text
        });
        const response = await fetch(
            `${apiUrl}/search/users?${params}`,{
                headers : {
                    authorization : `token ${
                        apiKey
                    }`
                }
            }

        )
        const  {items} = await response.json();


        //dispatch function to update state
        dispatch ({
            type : 'GET_USERS',
            payload : items,
        })
        // setUsers(data);
        // setLoading(false);
    }

 const setLoading  =( ) => {
        dispatch({
            type : 'SET_LOADING'
        })
 }
    return (
        <GithubContext.Provider value={{
            users : state.users,
            loading : state.loading,
            searchUsers
        }}> 
            {
                children
            }

        </GithubContext.Provider>
    )



}


export default GithubContext;