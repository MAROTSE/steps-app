import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Internalize the concept',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
  'Be grateful to God 👏',
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  /*{ conditional rendering for  active class}*/
  const active1 = step >= 1 ? 'active' : '';
  const active2 = step >= 2 ? 'active' : '';
  const active3 = step >= 3 ? 'active' : '';
  const active4 = step >= 4 ? 'active' : '';
  const active5 = step >= 5 ? 'active' : '';

  /*{styling buttons}*/
  const styles = {
    backgroundColor: '#7950f2',
    color: '#fff',
  };

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((curStep) => curStep + 1);
  }
  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((curIsOpen) => !curIsOpen)}
      >
        ❎
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={active1}>1</div>
            <div className={active2}>2</div>
            <div className={active3}>3</div>
            <div className={active4}>4</div>
            <div className={active5}>5</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button style={styles} onClick={handlePrevious}>
              Previous
            </button>
            <button style={styles} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="page2">
          <p>Press ❎ button to go back to the previous page!</p>
        </div>
      )}
    </>
  );
}
