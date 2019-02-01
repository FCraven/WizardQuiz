import React, { Component } from 'react'
import axios from 'axios'
import SelectForm from './SelectForm'
import RadioForm from './RadioForm'
import questions from '../data/questions.json'



export default class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/questions')
    const data = res.data
    this.setState({
      questions: data
    })
  }

  render() {
    console.log(`render--->`, this.state)
    return (
      <div>
        <SelectForm questions={this.state.questions} />
        <RadioForm questions={this.state.questions} />
        {/* start here */}
      </div>
    )
  }
}
