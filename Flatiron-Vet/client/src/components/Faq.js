import React from 'react';
import Accordion from './Accordion';
import { accordionData } from '../utils/content';
import './Faq.css';


const Faq = () => {
    return (
        <div>
            <h1>Frequently asked questions</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default Faq