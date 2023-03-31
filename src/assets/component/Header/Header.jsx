import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between  py-2 my-3'>
            <h1 className='font-bold text-4xl text-black pb-3 '>Knowledge Cafe</h1>
            <div>
                <img className='h-11 w-11 rounded-full' src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="" />
            </div>
            
        </div>
    );
};

export default Header;