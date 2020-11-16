import React, { Component } from 'react';
import '../scss/form.scss';
export default class Form extends Component {
    state = { url: '', methods: ['get', 'post', 'put', 'delete'], activeMethod: 'get' };
    handleChange = e => {
        this.setState({ url: e.target.value });
    };
    handleMethodChange = e => {
        e.preventDefault()
        e.className = "active"
        this.setState({ activeMethod: e.target.outerText });
        this.props.setResult("")
    };
    handleSubmit = e => {
        e.preventDefault()
        const { activeMethod, url } = this.state
        let reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        let initObject = {
            method: activeMethod.toUpperCase(), Headers: reqHeader
        };

        fetch(url, initObject).then(raw => {
            console.log(raw);
            return raw.json()
        }).then(result => {


            console.log(result);
            const results = { count: result.length, headers: result.headers, body: result }
            result = [activeMethod, results]
            console.log(result);
            this.props.setResult(result)

        })
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
                            data-testid="url"
                        />
                        <button type="submit" onClick={this.handleSubmit} data-testid="submit-button">GO!</button>
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

                </div>
            </form>
        );
    }
}
