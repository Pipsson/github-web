import React from 'react';

function About() {
    return (
        <>
            <h1 className='text-6xl mb-4'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project is part of the learning react concepts  
                <strong>
                    <a href='/'>  JuliusMalya</a>
                </strong>
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
           
        </>
    );
}

export default About;