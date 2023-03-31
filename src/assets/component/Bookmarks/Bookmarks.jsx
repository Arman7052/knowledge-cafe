import React from 'react';


const Bookmarks = ({ bookmarks }) => {

    return (
        <div>

            <div className='text-start  border rounded-lg mt-4'>
                <h1 className=' font-bold text-xl ps-2'>Bookmarked Blogs : {bookmarks.length} </h1>

            </div>
        </div>
    );
};

export default Bookmarks;