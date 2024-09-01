import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-question">Q: What is DriveWise?</p>
            <p className="faq-answer">A: DriveWise is a platform that helps you manage your driving experience.</p>
            <p className="faq-question">Q: How can I contact DriveWise?</p>
            <p className="faq-answer">A: You can reach us at contact@drivewise.com.</p>
        </div>
    );
};

export default FAQ;