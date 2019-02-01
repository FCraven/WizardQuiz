import React from 'react'
import createForm from './createForm'

const RadioForm = (props) => {
    const questionName = props.questions[props.currentQuestion].name
    const choices = props.questions[props.currentQuestion].choices || []
    return(
      <form onSubmit={props.handleSubmit}>
        <label>{questionName}</label>

        {choices.map((choice,idx) =>
          <label key={idx}>
              <input type='radio'
                     name='answer'
                     value={choice.value}
                     onChange={props.handleChange}
               />
              {choice.label}
          </label>) }

        <button type='submit'>Next</button>
      </form>
    )
}

export default createForm(RadioForm)
