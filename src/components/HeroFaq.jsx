import { useState, useRef } from 'react';
import '../styles/herofaq.css';

    const faqData = [
        { question: 'How does the free trial work?', answer: 'Your answer text goes here.' },
        { question: 'Can I change plans anytime?', answer: 'Your answer text goes here.' },
        { question: 'How do I pause my subscription?', answer: 'Your answer text goes here.' },
        { question: 'What is your refund policy?', answer: 'Your answer text goes here.' },
    ];

function FaqItem({ question, answer, isOpen, onClick }) {
    const answerRef = useRef(null);
return(
    <div>
        <div className="faq-item">
            <button
                className={`faq-question${isOpen ? ' active' : ''}`}
                onClick={onClick}
            >
                {question}
                <span className="arrow">▼</span>
            </button>
            <div
                className="faq-answer"
                ref={answerRef}
                style={{
                    maxHeight: isOpen ? answerRef.current?.scrollHeight + 'px' : '0px',
                }}
            >
                <p>{answer}</p>
            </div>
        </div>
    </div>
    );
}

export default function HeroFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div>
                <div className="hero">
                    <h1>
                        It&rsquo;s <span className="highlight">your</span> business.
                        <br />
                        We&rsquo;re here to help it grow.
                    </h1>
                    <button className="start-btn">START FREE</button>
                </div>

                <div className="faq">
                    <h2>Frequently Asked Questions</h2>
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}