import React from 'react'
import '../scss/result.scss';
import ReactJson from "react-json-view"
export default function Result({ result }) {
    let toRenderMethod
    let toRenderResult
    if (result !== "") {
        toRenderMethod =
            result[0] + ":";
        toRenderResult = < ReactJson src={result[1]} theme="monokai" />
    }


    return (
        <div className="container">
            <section className="result" data-testid="result">
                {toRenderMethod}
                {toRenderResult}
            </section>
        </div>
    )
}
