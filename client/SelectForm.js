import React from 'react'
import createForm from './createForm'

const SelectForm = (props) => {

  const choices = props.question.choices
  const name = props.question.name

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

