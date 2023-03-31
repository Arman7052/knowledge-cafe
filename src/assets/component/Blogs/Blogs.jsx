import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    // bookmark section 
    const handleAddToBookmark = (card) => {
        // console.log(card)
        const newBookmark = [...bookmark, card];
        setBookmark(newBookmark);
    }


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
            <div className='col-span-2 '>
                {
                    blog.map((card) => <Card
                        key={card.id}
                        card={card}
                        handleAddToBookmark={handleAddToBookmark}
                    ></Card>)
                }
            </div>
            <div className='pt-10'>
                <div className=' border h-20 rounded-lg bg-indigo-300	pt-3'>
                    <strong className=' font-semibold text-3xl'>Spent time on read :</strong>
                </div>
                <div className='text-start  border rounded-lg mt-4'>
                    <h1 className=' font-bold text-xl ps-2'>Bookmarked Blogs : {bookmark.length}</h1>

                </div>
            </div>
        </div>
    );
};

export default Blogs;