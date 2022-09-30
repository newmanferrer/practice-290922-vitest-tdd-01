import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Calculator, operations, equalSing } from './Calculator'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('TEST Calculator Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('test #1: should render', () => {
    render(<Calculator />)
  })

  it('test #2: should render title correctly', () => {
    render(<Calculator />)
    screen.getByRole('heading', { level: 1, name: /^Calculator$/ })
  })

  it('test #3: should render numbers correctly', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('test #4: should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('test #5: should render operations', () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('test #6: should render equal sing', () => {
    render(<Calculator />)

    screen.getByText(equalSing)
  })

  it('test #7: should render an input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('test #8: should user input after clicking a number', () => {
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('test #9: should user input after clicking several numbers', () => {
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const numberTwo = screen.getByText('2')
    fireEvent.click(numberTwo)

    const numberThree = screen.getByText('3')
    fireEvent.click(numberThree)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('test #10: should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const plusSing = screen.getByText('+')
    fireEvent.click(plusSing)

    const numberTwo = screen.getByText('2')
    fireEvent.click(numberTwo)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+2')
  })

  it('test #11: should calculate based on user input and show the calculation', () => {
    render(<Calculator />)

    const numberOne = screen.getByText('1')
    fireEvent.click(numberOne)

    const plusSing = screen.getByText('+')
    fireEvent.click(plusSing)

    const numberTwo = screen.getByText('2')
    fireEvent.click(numberTwo)

    const equalSingElement = screen.getByText(equalSing)
    fireEvent.click(equalSingElement)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('3')
  })
})
