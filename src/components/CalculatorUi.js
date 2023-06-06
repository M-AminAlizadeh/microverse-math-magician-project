import calculate from './logic/calculate';
import { useState } from 'react';

const CalculatorUi = () => {
  const [obj, setObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const handleInput = (e) => {
    setObj(calculate(obj, e.target.innerText));
  };

  console.log(obj);

  return (
    <>
      <div className='calculator-container'>
        <div className='calculator-display number'>
          {obj.total === null ? 0 : obj.total}
        </div>
        <button
          className='button bg-1 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          AC
        </button>
        <button
          className='button bg-1 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          +/-
        </button>
        <button
          className='button bg-1 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          %
        </button>
        <button
          className='button bg-2 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          ÷
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          7
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          8
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          9
        </button>
        <button
          className='button bg-2 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          x
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          4
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          5
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          6
        </button>
        <button
          className='button bg-2 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          -
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          1
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          2
        </button>
        <button
          className='button bg-1 number'
          onClick={(e) => {
            handleInput(e);
          }}>
          3
        </button>
        <button
          className='button bg-2 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          +
        </button>
        <button
          className='button bg-1 zero-btn number'
          onClick={(e) => {
            handleInput(e);
          }}>
          0
        </button>
        <button
          className='button bg-1 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          .
        </button>
        <button
          className='button bg-2 operator'
          onClick={(e) => {
            handleInput(e);
          }}>
          =
        </button>
      </div>
    </>
  );
};

export default CalculatorUi;
