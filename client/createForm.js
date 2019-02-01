import React, {Component} from 'react'

const createForm = (FormComponent) => {
  return class StatefulForm extends Component {
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
      this.props.answerQuestion(evt.target.value)
    }

    render () {
      return <FormComponent handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            {...this.props}
                            {...this.state}
                            />
    }
  }
}


export default createForm
