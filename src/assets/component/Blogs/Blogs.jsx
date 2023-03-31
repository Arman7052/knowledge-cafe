import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Bookmarks from '../Bookmarks/Bookmarks';
import SpentTime from '../SpentTime/SpentTime';

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    const [timeSpent, setTimeSpent] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);

    // spent time
    const handleSpentTime = (card) => {
        // console.log(card)
        const newTimeSpent = [...timeSpent, card];
        setTimeSpent(newTimeSpent);
    }

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
                        handleSpentTime={handleSpentTime}
                        handleAddToBookmark={handleAddToBookmark}
                    ></Card>)
                }
            </div>
            <div className='pt-10'>
                <SpentTime spentTime={timeSpent}></SpentTime>
                <Bookmarks bookmarks={bookmark}></Bookmarks>
            </div>
        </div>
    );
};

export default Blogs;