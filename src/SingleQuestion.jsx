// Import icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import React from 'react';

// Receives its own 'id', 'title', 'info', plus the shared 'activeId' and the 'toggleQuestion' function from the App component.
const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
    // Determine if this specific question instance is the currently active one by comparing its own 'id' to the 'activeId' from the App state.
    const isActive = id === activeId;

    return (
        <article className='question'>
            <header>
                <h5>{title}</h5>
                <button
                    className='question-btn'
                    // When clicked, call the 'toggleQuestion' function (passed down from App) and pass this question's unique 'id' to it.
                    onClick={() => toggleQuestion(id)}
                >
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {/* It only renders if 'isActive' is true */}
            {isActive && <p>{info}</p>}
        </article>
    );
};

export default SingleQuestion;