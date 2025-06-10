import React, {useState} from 'react';
import {useEffect} from 'react';
function UserResults() {
    // since we are using the vite for installing react, then the env variable start with VITE
    const apiUrl =import.meta.env.VITE_API_URL;
    const apiToken = import.meta.env.VITE_GITHUB_TOKEN;
    console.log(apiUrl);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        fetchUsers()
    },[])
     const fetchUsers =async ()=>{
        const response = await fetch(
            `${apiUrl}/users`,{
                headers : {
                    authorization : `token ${
                        apiToken
                    }`
                }
            }

        )
         const  data = await response.json();
        
         // console.log(data);

         setUsers(data);
         setLoading(false);
         
         
        
     }
     if (!loading){
         return (
             <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                 {
                     users.map((user)=>(
                         <h3>
                             {user.login}
                         </h3>
                     ))
                 }
             </div>
         );
     }
     else  {
         return <h3>
             loading ...
         </h3>
     }

}

export default UserResults;