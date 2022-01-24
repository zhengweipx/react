import React, { useState, useEffect } from 'react';
import AboutRequest from "../service/AboutRequest";
import appStore from '../mobx/appStore';
import Pagination from "../../remote-scope/common/pagination/index";
import { FigmaEmbed } from '../components/figma-embed';


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
            <Pagination 
                total={85}
                showSizeChanger
                showQuickJumper
                showTotal={(total) => `Total ${total} items`}
            />
            {/* <FigmaEmbed
                loading="eager"
                width="600px"
                height="300px"
                style={{ border: '1px solid red' }}
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/lWSTTpfaa6BdA7gFFlFfcr/Untitled?node-id=2%3A20385"
                />
                <FigmaEmbed src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDaShaxpMbyWlvOGMFFUHCl%2Fbutton%3Fnode-id%3D0%253A1" /> */}
                <FigmaEmbed
                loading="eager"
                
                style={{ border: '1px solid red' }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FlWSTTpfaa6BdA7gFFlFfcr%2FUntitled%3Fnode-id%3D73%253A39864"
                />
            {counter}
        </main>
    );
}