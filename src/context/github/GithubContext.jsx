import { createContext, useEffect, useReducer, useState } from "react";
import React from "react";
import githubReducer from "./GithubReducer.js";

const GithubContext = createContext();

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    loading: false,
    ripos : [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // this was a function to fetch all users
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

  //searchUsers function using query parameter
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${apiUrl}/users/${login}}`, {
      headers: {
        authorization: `token ${apiKey}`,
      },
    });
    const data = await response.json();
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      //dispatch function to update state
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }

    //dispatch function to update state

    // setUsers(data); 
    // setLoading(false);
  };

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${apiUrl}/search/users?${params}`, {
      headers: {
        authorization: `token ${apiKey}`,
      },
    });
    const { items } = await response.json();

    //dispatch function to update state
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
    // setUsers(data);
    // setLoading(false);
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const clearUsersResults = () => {
    dispatch({
      type: "CLEAR_SEARCH_RESULT",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,  
        searchUsers,
        clearUsersResults,
        getUser,
        repos : state.repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
