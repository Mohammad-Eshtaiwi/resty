import React from 'react';
import '../scss/history.scss';
import { If, Then, Else } from 'react-if';
export default function history({ history, handleFetching, children }) {

    return (
        <section className="container history">
            <If condition={history.length === 0}>
                <Then>
                    <p>you have no history for now</p>
                </Then>
                <Else>
                    <ul>
                        {history.map((item, index) => (
                            <li
                                data-url={item.url}
                                data-method={item.method}
                                key={index}
                                onClick={() => {
                                    handleFetching(item.method, item.url);
                                }}
                            >
                                {item.method} : {item.url}
                            </li>
                        ))}
                    </ul>
                    {children}
                </Else>
            </If>
        </section>
    );
}
