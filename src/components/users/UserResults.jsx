import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import Spinner from '../layout/Spinner.jsx';
import UserItem from '../users/UserItem.jsx'
import GithubContext from "../../context/github/GithubContext.jsx";

function UserResults() {
    const {
        users,
        loading,
        fetchUsers
    } = useContext(GithubContext)
    
    useEffect(()=>{
        fetchUsers()
    },[])
    
     if (!loading){
         return (
             <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                 {
                     users.map((user)=>(                          
                         <UserItem key={ 
                             user.id
                         }
                                   user ={user}
                                   
                         />
                     ))
                 }
             </div>
         );
     }
     else  {
         return <Spinner />
     }

}

export default UserResults;