import React, { Component } from 'react'
import Form from './Form'
import Result from './Result'

export default class Main extends Component {
    state = { result: "" }
    setResult = result => {
        this.setState({ result })
    }
    render() {
        const { result } = this.state
        return (
            <main>
                <Form setResult={this.setResult} />
                <Result result={result} />
            </main>
        )
    }
}
