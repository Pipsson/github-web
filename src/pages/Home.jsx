import React from 'react';
import UserResults from "../components/users/UserResults.jsx";
import UserSearch from "../components/users/UserSearch.jsx";

function Home() {
    return (
        <div>
            <UserSearch />
            <UserResults />
            

        </div>
    );
}

export default Home;