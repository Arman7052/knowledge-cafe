import React from 'react';

const Card = (props) => {
    const { userName, image, userImage, postDate, readingTime, title } = props.card;
    const handleSpentTime = props.handleSpentTime;
    const handleAddToBookmark = props.handleAddToBookmark;

    return (
        <div className=' py-2'>

            {/* card section */}
            <div className="card w-auto bg-base-100 shadow-md">
                <figure><img className=' rounded-md' src={image} alt={image} /></figure>
                <div className="card-body  text-left">
                    <div className='flex justify-between'>
                        <div className='flex justify-between gap-3'>
                            <div className='pt-3 pe-3'> <img className='h-11 w-11 rounded-full' src={userImage} alt="" /> </div>
                            <div className='my-2'>
                                <h6 className=' font-bold text-sm'>{userName}</h6>
                                <span className='font-semibold text-sm text-gray-500'>{postDate}</span>
                            </div>
                        </div>
                        {/* bookmark and time  section */}
                        <div className='flex text-gray-400	gap-3'>



                            <div>{readingTime} min read</div>
                            <div> <button onClick={() => handleAddToBookmark(props.card)} className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg></button>
                            </div>
                        </div>
                    </div>
                    <h2 className="card-title font-bold text-2xl">{title}</h2>

                    {/* Spending time calculate */}

                    <button onClick={() => handleSpentTime(props.card)} className=' underline underline-offset-auto font-bold text-left text-indigo-700	pt-2'>Mark As Read</button>

                </div>
            </div>
        </div>
    );
};

export default Card;