import React from 'react';

const Answers = () => {
    return (
        <div className=''>
            <ul>
                <div className='border-2 py-2 my-4 bg-violet-300	rounded-md'>
                    <li className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>Question: 1 <br /> Difference between props and state</li>
                    <li className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>Answer : <br />Information is stored in a React component using both props and state, but they serve separate functions. To configure a component with information that won't change, parent components give down read-only props. Data that varies over time and can be altered by the component itself is stored in state. State is used to maintain data within a component, whereas props are used to transmit data between components.</li>
                </div>

                <div className='border-2 py-2 my-4 bg-blue-300	rounded-md'>
                    <li className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>Question: 2 <br /> Work process of useState</li>
                    <li className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>Answer : <br />State is managed through the useState hook in functional React components. The current state value and a function to update it are returned in an array. The component reads the current state value and renders it when it renders. The function is called with the new state value when the state has to be updated, which causes the component to re-render with the new state value.</li>
                </div>

                <div className='border-2 py-2 my-4 bg-violet-300	rounded-md'>
                    <li className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>Question: 3 <br /> What can useEffect do other than loadData?</li>
                    <li className='bg-gray-50	font-bold text-text-sm text-justify	m-2  border-2 rounded-md h-auto p-2 shadow-lg'>Answer : <br />React's useEffect hook is capable of more than just loading data. When a component mounts or receives new props, it can change the document title, record user interactions using event listeners, clean up external resources, start animations, or have side effects. In essence, useEffect executes code when specific criteria are satisfied, like when the component mounts or updates, enabling more complicated functionality and a well-structured code base . </li>
                </div>

                <div className='border-2 py-2 my-4 bg-blue-300	rounded-md'>
                    <li className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>Question: 4 <br /> How does react work </li>
                    <li className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>Answer : <br />React creates user interfaces (UIs) from reusable components that keep track of their own state and re-render in response to changes. It updates quickly and effectively by updating only what is required using a virtual DOM. Web developers like React because it includes hooks for simple development.</li>
                </div>


            </ul>

        </div>

    );
};

export default Answers;