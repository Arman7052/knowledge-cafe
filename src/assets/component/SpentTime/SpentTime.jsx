import React from 'react';

const SpentTime = ({ spentTime }) => {

    let total = 0;
    for (const card of spentTime) {
        total = total + card.readingTime;
    };
    console.log(spentTime)
    return (
        <div>
            <div className=' border-2 border-indigo-300	 h-auto rounded-lg bg-indigo-100 py-3'>
                <strong className=' font-bold text-lg text-indigo-600 py-3'>Spent time on read: {total} min</strong>
            </div>
        </div>
    );
};

export default SpentTime;