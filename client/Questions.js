import React, {Component} from 'react'
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
        {/* start here */}
      </div>
    )
  }
}
