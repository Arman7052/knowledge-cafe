import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div>
            <div className="bg-gray-200	text-start border rounded-lg mt-4 shadow-md">
                <h1 className="font-bold text-xl ps-6 py-3">
                    Bookmarked Blogs : {bookmarks.length}
                    
                </h1>
                
                <ul className=" ps-4">
                    {bookmarks.map((bookmark) => (
                        <li className=' list-none text-left' key={bookmark.id}>
                            <div className='bg-gray-50	font-bold text-xl border-2 m-3 mr-4 rounded-md h-auto p-2 shadow-md'>
                                {bookmark.title}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Bookmarks; 
