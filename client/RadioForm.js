import React from 'react'
import createForm from './createForm'

const RadioForm = (props) => {
    const questionName = props.question.name
    const choices = props.question.choices
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
          </label>)}

        <button type='submit'>Next</button>
      </form>
    )
}

export default createForm(RadioForm)
