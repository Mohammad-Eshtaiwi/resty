import React, { Component } from 'react';
import Result from './result';
import Form from './form';
import History from './history';
import noRepeat from '../utilities/noRepeat';
export default class Main extends Component {
    state = { result: '', isLoading: false, history: [] };
    toggleLoading = () => {
        this.setState({ isLoading: !this.state.isLoading });
    };
    setResult = result => {
        this.setState({ result });
    };
    clearLocalHistory = () => {
        localStorage.clear();
        this.setState({ history: [] });
        localStorage.setItem('history', JSON.stringify([]));
    };
    handleFetching = (method, url, body) => {
        console.log('body:', body);
        this.toggleLoading();
        let reqHeader = new Headers();
        reqHeader.append('Content-Type', 'text/json');
        let initObject = {
            method: method.toUpperCase(),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        };
        if (method !== 'get') initObject.body = JSON.stringify({ body });
        console.log(initObject);
        fetch(url, initObject)
            .then(raw => {
                console.log(raw);
                return raw.json();
            })
            .then(result => {
                this.toggleLoading();
                const results = { count: result.length, headers: result.headers, body: result };
                result = [method, results];
                console.log(result);
                let localHistory = JSON.parse(localStorage.getItem('history'));
                localHistory = [...localHistory, { method, url }];
                console.log(localHistory);
                localHistory = noRepeat(localHistory);
                localStorage.setItem('history', JSON.stringify(localHistory));
                this.setState({ result, history: localHistory });
            })
            .catch(error => {
                this.toggleLoading();
                this.setState({ result: error });
            });
    };
    componentDidMount() {
        const history = JSON.parse(localStorage.getItem('history'));
        console.log(history);
        if (history) this.setState({ history });
        else localStorage.setItem('history', JSON.stringify([]));
    }
    render() {
        const { result, isLoading, history } = this.state;
        console.log(isLoading);
        return (
            <main>
                <History history={history} handleFetching={this.handleFetching}>
                    <button type="submit" onClick={this.clearLocalHistory}>
                        clear
          </button>
                </History>

                <Form setResult={this.setResult} handleFetching={this.handleFetching} />
                <Result result={result} isLoading={isLoading} />
            </main>
        );
    }
}
