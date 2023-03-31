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
        <div className='grid grid-cols-3  gap-4'>
            <div className='col-span-2 '>
                {
                    blog.map((card) => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
            <div className=''>a</div>
        </div>
    );
};

export default Blogs;