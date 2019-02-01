import React, { Component } from 'react'
import axios from 'axios'
import SelectForm from './SelectForm'
import RadioForm from './RadioForm'
import Loading from './Loading'
import Result from './Result'
import sortHouse from './sortHouse'
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

  async answerQuestion(answer) {
    const state = this.state
    await this.setState({
      answers: [...state.answers,answer],
      currentQuestion: state.currentQuestion + 1
    })
  }



  render() {
    const question = this.state.questions[this.state.currentQuestion]
    const currentQuestion = this.state.currentQuestion
    const answerQuestion = this.answerQuestion
    console.log(`this.state.answers`, this.state.answers)

    if(this.state.questions.length === this.state.answers.length) {

      return <Result house={sortHouse(this.state.answers)}/>
    }



    return (
      <div>

        {this.state.questions ? (currentQuestion % 2 === 0 ?

          <SelectForm question={question}
            currentQuestion={currentQuestion}
            answerQuestion={answerQuestion} /> :

          <RadioForm question={question}
            currentQuestion={currentQuestion}
            answerQuestion={answerQuestion}
          />) : <Loading />
        }
      </div>
    )
  }
}
