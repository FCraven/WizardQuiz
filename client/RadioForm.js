import React, { Component } from 'react'

export default class RadioForm extends Component {
  constructor(props){
    super(props)
    this.state= {
      answer:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleChange(evt) {
    await this.setState({
      [evt.target.name]: evt.target.value
    })
    console.log(`handleChange this.state --->`, this.state)
  }

  handleSubmit(evt){
    evt.preventDefault()
    console.log(`handleSubmit -->`,this.state.answer)
  }


  render(){
    console.log(`this.props --->`,this.props)
    const questionName = this.props.question.name
    const choices = this.props.question.choices
    return(
      <form onSubmit={this.handleSubmit}>
        <label>{questionName}</label>

        {choices.map((choice,idx) =>
          <label key={idx}>
              <input type='radio'
                     name='answer'
                     value={choice.value}
                     onChange={this.handleChange}
               />
              {choice.label}
          </label>)}

        <button type='submit'>Next</button>
      </form>
    )
  }
}
