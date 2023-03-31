import React from 'react';

const Card = (props) => {
    const { userName, image, userImage, postDate, readingTime, title } = props.card;
    return (
        <div className=' py-2'>
            <div className="card w-auto bg-base-100">
                <figure><img className=' rounded-md' src={image} alt="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80" /></figure>
                <div className="card-body  text-left">
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <div className='pt-4 pe-3'> <img className='h-10 w-10 rounded-full' src={userImage} alt="" /> </div>
                            <div className='my-2'>
                                <h6 className=' font-semibold text-sm'>{userName}</h6>
                                <span className='text-sm text-gray-500	'>{postDate}</span>
                            </div>
                        </div>
                        <div className='flex text-gray-400	'>
                            <div>{readingTime} min read</div>
                            <div> <button className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg></button>
                            </div>
                        </div>
                    </div>
                    <h2 className="card-title font-bold text-2xl">How to get your first job as a self-taught programmer</h2>

                    <button className=' underline underline-offset-auto font-bold text-left text-indigo-700	pt-2'>Mark As Read</button>

                </div>
            </div>
        </div>
    );
};

export default Card;