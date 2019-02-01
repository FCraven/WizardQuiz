import React from 'react'
import createForm from './createForm'

const SelectForm = (props) => {
  console.log(`SelectForm props -->`,props)
  const choices = props.questions[props.currentQuestion].choices || []
  const name = props.questions[props.currentQuestion].name || ''

  return (
      <form onSubmit={props.handleSubmit} >
        <label>{name}</label>
        <select name='answer'
                onChange={props.handleChange}>
          <option value=''>--</option>
          {choices.map((choice,idx) => <option value={choice.value} key={idx}>{choice.label}</option>)}
        </select>
        <button type='submit'>Next</button>
      </form>
    )
  }

export default createForm(SelectForm)

