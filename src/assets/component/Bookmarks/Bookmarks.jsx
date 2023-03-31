import React from 'react';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div>
            <div className="text-start border rounded-lg mt-4">
                <h1 className="font-bold text-xl ps-2">
                    Bookmarked Blogs: {bookmarks.length}
                </h1>
                <ul className=" ps-4">
                    {bookmarks.map((bookmark) => (
                        <li className=' list-none text-center' key={bookmark.id}>
                            <div className='font-bold text-xl border-2 m-3 rounded-md h-20 p-2'>
                                {bookmark.title}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Bookmarks; 
