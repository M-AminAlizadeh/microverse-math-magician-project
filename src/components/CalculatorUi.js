const CalculatorUi = () => {
  return (
    <>
      <div className='calculator-container'>
        <div className='calculator-display'>0</div>
        <button className='button bg-1'>AC</button>
        <button className='button bg-1'>+/-</button>
        <button className='button bg-1'>%</button>
        <button className='button bg-2'>÷</button>
        <button className='button bg-1'>7</button>
        <button className='button bg-1'>8</button>
        <button className='button bg-1'>9</button>
        <button className='button bg-2'>x</button>
        <button className='button bg-1'>4</button>
        <button className='button bg-1'>5</button>
        <button className='button bg-1'>6</button>
        <button className='button bg-2'>-</button>
        <button className='button bg-1'>1</button>
        <button className='button bg-1'>2</button>
        <button className='button bg-1'>3</button>
        <button className='button bg-2'>+</button>
        <button className='button bg-1 zero-btn'>0</button>
        <button className='button bg-1'>.</button>
        <button className='button bg-2'>=</button>
      </div>
    </>
  );
};

export default CalculatorUi;
