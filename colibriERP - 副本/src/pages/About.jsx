import React, { useState, useEffect } from 'react';
import AboutRequest from "../service/AboutRequest";
import appStore from '../mobx/appStore';

export default function About() {
    const [counter, setCounter] = useState(0);

    const getRes = async () => {
        try {
            let res = await AboutRequest.openPaymentService('18435201562');
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getRes()
    }, [])

    return (
        <main style={{ padding: '1rem 0' }} onClick={() => {
            appStore.addCount();
            setCounter(appStore.counter)
        }}>
            <h2>Expenses</h2>
            {counter}
        </main>
    );
}