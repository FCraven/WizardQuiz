import React, { Component } from 'react'
import axios from 'axios'
import SelectForm from './SelectForm'
import RadioForm from './RadioForm'
import questions from '../data/questions.json'



export default class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions,
      answers: [],
      currentQuestion: 0,
    }
    this.answerQuestion = this.answerQuestion.bind(this)
  }

  async componentDidMount() {
    const res = await axios.get('/api/questions')
    const data = res.data
    this.setState({
      questions: data,
    })
  }

  async answerQuestion(answer){
    const state = this.state
    await this.setState({
      answers: [...state.answers, answer],
      currentQuestion: state.currentQuestion += 1
    })
  }



  render() {
    const currentQuestion = this.state.currentQuestion
    const answerQuestion = this.answerQuestion
    console.log(`render--->`, this.state)
    return (
      <div>
      {
        (currentQuestion%2 === 0) ?

          <SelectForm questions={this.state.questions}
                      currentQuestion={currentQuestion}
                      answerQuestion={answerQuestion}  /> :

          <RadioForm questions={this.state.questions}
                     currentQuestion={currentQuestion}
                     answerQuestion={answerQuestion}
          />
      }
      </div>
    )
  }
}
