import React from 'react';

const SpentTime = ({ spentTime }) => {

    let total = 0;
    for (const card of spentTime) {
        total = total + card.readingTime;
    };
    console.log(spentTime)
    return (
        <div>
            <div className=' border h-auto rounded-lg bg-indigo-300	py-3'>
                <strong className=' font-semibold text-xl'>Spent time on reading: {total} mins</strong>
            </div>
        </div>
    );
};

export default SpentTime;