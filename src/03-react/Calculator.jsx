import React, { useState } from 'react'
import { evaluate } from 'mathjs'

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
export const operations = ['+', '-', '*', '/']
export const equalSing = '='

export const Calculator = () => {
  const [inputValue, setInputValue] = useState('')

  const handleClick = newValue => {
    setInputValue(inputValue => inputValue.concat(newValue))
  }

  return (
    <section>
      <h1>Calculator</h1>

      <div role='grid'>
        <input readOnly type='text' value={inputValue} />

        {rows.map((row, index) => (
          <div role='row' key={index}>
            {row.map(number => (
              <button key={number} onClick={() => handleClick(number.toString())}>
                {number}
              </button>
            ))}
          </div>
        ))}

        {operations.map(operation => (
          <button key={operation} onClick={() => handleClick(operation)}>
            {operation}
          </button>
        ))}

        <button onClick={() => setInputValue(inputValue => evaluate(inputValue))}>
          {equalSing}
        </button>
      </div>
    </section>
  )
}
