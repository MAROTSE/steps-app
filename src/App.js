import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return <Steps />;
}

function Steps() {
  const step = 1;
  const active1 = step >= 1 ? 'active' : '';
  const active2 = step >= 2 ? 'active' : '';
  const active3 = step >= 3 ? 'active' : '';
  const styles = {
    backgroundColor: '#7950f2',
    color: '#fff',
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={active1}>1</div>
        <div className={active2}>2</div>
        <div className={active3}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={styles}>Previous</button>
        <button style={styles}>Next</button>
      </div>
    </div>
  );
}
