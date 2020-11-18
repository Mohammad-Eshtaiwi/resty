import React from 'react'
import '../scss/result.scss';
import ReactJson from "react-json-view"
import { If, Then, Else } from 'react-if';
export default function Result({ result, isLoading }) {
    return (
        <div className="container">
            <section className="result" data-testid="result">
                <If condition={result !== ""}>
                    <Then>
                        {result[0]}:
                        < ReactJson src={result[1]} theme="monokai" />
                    </Then>
                    <Else>
                        {isLoading ? <img src="https://media1.giphy.com/media/2WjpfxAI5MvC9Nl8U7/giphy.gif" alt="loading"></img> : null}
                    </Else>
                </If>
            </section>
        </div>
    )
}
