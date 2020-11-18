import React, { Component } from 'react';
import '../scss/form.scss';
import { If, Then, Else } from 'react-if';
export default class Form extends Component {
    state = { url: '', methods: ['get', 'post', 'put', 'delete'], activeMethod: 'get', body: '' };

    handleChange = e => {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
    }
    handleMethodChange = e => {
        e.preventDefault()
        e.className = "active"
        this.setState({ activeMethod: e.target.outerText });
        this.props.setResult("")
        this.setState({ url: "", body: "" })
    };
    handleSubmit = e => {
        e.preventDefault()
        const { activeMethod, url, body } = this.state
        this.props.handleFetching(activeMethod, url, body)
    }

    render() {
        const { activeMethod } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="flex-center">
                        {/* Endpoint */}
                        <label htmlFor="endpoint">URL:</label>
                        <input
                            type="text"
                            name="url"
                            value={this.state.url}
                            onChange={this.handleChange}
                            data-testid="url"
                        />
                        {/* Body */}
                        <If condition={["put", "post"].includes(activeMethod)}>
                            <Then>
                                <label htmlFor="body">Body:</label>
                                <input
                                    type="text"
                                    name="body"
                                    value={this.state.body}
                                    onChange={this.handleChange}
                                    data-testid="url"
                                />
                            </Then>
                        </If>
                        <button type="submit" data-testid="submit-button">GO!</button>
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
