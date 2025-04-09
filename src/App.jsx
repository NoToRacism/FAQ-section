import React, { useState } from 'react'
import Questions from './Questions'
import data from './data'

const App = () => {
  // importing the questions from data.js and setting it to the state
  const [questions, setQuestions] = useState(data);

  // setting the activeId to null
  // this will be used to track the active question 
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId)
  }

  return (
    <main>
      {/* Calling the Questions component and passing the questions data to it as questions*/}
      <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
    </main>
  )
}

export default App

