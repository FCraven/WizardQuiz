import React, { Component } from 'react'

export default class SelectForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      answer:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleChange(evt){
    await this.setState({
      [evt.target.name]: evt.target.value
    })
    console.log(`handleChange --->`,this.state)
  }

  handleSubmit(evt){
    evt.preventDefault()
    console.log(`handleSubmit--->`, this.state.answer)
  }

  render() {
  const choices = this.props.question.choices
  const name = this.props.question.name


  return (
      <form onSubmit={this.handleSubmit} >
        <label>{name}</label>
        <select name='answer'
                onChange={this.handleChange}>
          <option value=''>--</option>
          {choices.map((choice,idx) => <option value={choice.value} key={idx}>{choice.label}</option>)}
        </select>
        <button type='submit'>Next</button>
      </form>
    )
  }
}
