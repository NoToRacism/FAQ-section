import React from 'react'
import SingleQuestion from './SingleQuestion'

// passing the questions as props to the Questions component and destructuring it
const Questions = ({ questions, activeId, toggleQuestion }) => {
    return (
        <section className='container'>
            <h1>FAQ's</h1>
            {questions.map((question) => {
                return (
                    // using the SingleQuestion component to display each question and passing the question data as props
                    // using the spread operator to pass all the question data as props to the SingleQuestion component
                    <SingleQuestion key={question.id} activeId={activeId} toggleQuestion={toggleQuestion} {...question} />
                )
            })}

        </section>
    )
}

export default Questions
