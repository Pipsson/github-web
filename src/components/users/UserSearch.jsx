import React from 'react';
import {useState, useContext} from 'react'
import GithubContext from "../../context/github/GithubContext.jsx";
import AlertContext  from "../../context/alert/AlertContext.jsx";
function UserSearch() {
    const [text , setText] = useState('');
    const{users, searchUsers, clearUsersResults} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)
    
   const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleOnSubmit = (e) =>{
       e.preventDefault()
        if(text === ''){
            setAlert('Please enter something',  'error')      
          }
        else {
            //Todo to add search
            searchUsers(text);
            setText('');
        }
    }
    const handleClearResults = () => {
        clearUsersResults();
    }
    
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:cols-cols-2 mb-8 gap-8">
            <div>
                <form action="" onSubmit={handleOnSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" onChange ={handleChange} />
                            <button type='submit' className='absolute top-0  right-0 rounder-l-none w-36 btn btn-lg' >
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                
                {
                    users.length > 0 && <button onClick={handleClearResults} className="btn btn-ghost btn-lg">
                        Clear
                    </button>
                }
            </div>
            
        </div>
    );
}

export default UserSearch;