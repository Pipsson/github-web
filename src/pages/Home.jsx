import React from 'react';
import UserResults from "../components/users/UserResults.jsx";
function Home() {
    return (
        <div>
            <h1 className='text-6xl'>
                Welcome
            </h1>
            <UserResults />
            

        </div>
    );
}

export default Home;