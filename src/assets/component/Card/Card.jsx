import React from 'react';

const Card = (props) => {
    const {userName, image, userImage, postDate, readingTime, title} =props.card;
    return (
        <div className=' py-2'>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80" /></figure>
                <div className="card-body  text-left">
                    <div>
                        <div> <img className='h-5 w-5 rounded-full' src={userImage} alt="" /> </div>
                        <div></div>
                    </div>
                    <div>5min</div>
                    <h2 className="card-title font-bold text-2xl">How to get your first job as a self-taught programmer</h2>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;