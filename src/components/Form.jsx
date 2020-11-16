import React, { Component } from 'react';
import '../scss/form.scss';
export default class Form extends Component {
    state = { url: '', methods: ['get', 'post', 'put', 'delete'], activeMethod: 'get', result: "" };
    handleChange = e => {
        this.setState({ url: e.target.value });
    };
    handleMethodChange = e => {
        e.preventDefault()
        console.log(e);
        e.className = "active"
        console.log(e.className);
        this.setState({ activeMethod: e.target.outerText, result: "" });
    };
    handleSubmit = e => {
        const { activeMethod, url } = this.state
        e.preventDefault()
        const result = `${activeMethod}: \n ${url}`
        this.setState({ result })

    }
    render() {
        return (
            <form>
                <div className="container">
                    <div className="flex-center">
                        <label htmlFor="endpoint">URL:</label>
                        <input
                            type="text"
                            name="endpoint"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                        <button type="submit" onClick={this.handleSubmit}>GO!</button>
                    </div>
                    <div className="methods flex-center flex-gap">
                        {this.state.methods.map((method, index) => (
                            <button
                                key={index}
                                className={this.state.activeMethod === method ? 'active' : null}
                                onClick={this.handleMethodChange}
                            >
                                {method}
                            </button>
                        ))}
                    </div>
                    <div className="result">
                        {this.state.result}
                    </div>
                </div>
            </form>
        );
    }
}
