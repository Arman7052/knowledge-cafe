import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
            <div className='col-span-2 '>
                {
                    blog.map((card) => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
            <div className='pt-4'>
                <div className=' border h-20 rounded-lg bg-indigo-300	pt-3'>
                    <strong className=' font-semibold text-3xl'>Spent time on read :</strong>
                </div>
                <div className='text-start  border rounded-lg mt-4'>
                    <h1 className=' font-bold text-xl ps-2'>Bookmarked Blogs :</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;