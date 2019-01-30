import React, {Component} from 'react'
import SelectForm from './SelectForm'
import questions from '../data/questions.json'



export default class Questions extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions
    }
  }

  render () {
    console.log(this.state.questions)
    return (
      <div>
        <SelectForm question={this.state.questions[0]}/>
        {/* start here */}
      </div>
    )
  }
}
