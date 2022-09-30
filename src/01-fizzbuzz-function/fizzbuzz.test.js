import { describe, expect, it } from 'vitest'
import { fizzbuzz } from './fizzbuzz'

/*
Escribir una funcion que al pasarle un numero:
 - Muestra "fizz", si es multiplo de 3.
 - Muestra "bazz", si es mulpiplo de 5.
 - Muestra "fizzbazz", si es multiplo de 3 y 5.
 - Muestra el numero si no es multiplo de ninguno de los anteriores.
*/

describe('Test fizzbazz function', () => {
  // Este test lo hemos desactivado posteriormente
  // porque es redundante
  // it('test #1: should fizzbazz is a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  //   expect(fizzbuzz).toBeTypeOf('function')
  // })

  it('test #2: should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('test #3: should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/^parameter provider must be a number$/)
  })

  it('test #4: should throw a specific error message not a number is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow(/^parameter provider must be a number$/)
  })

  it('test #5: should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('test #6: should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('test #7: should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('test #8: should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  // Este test ya esta cubierto en el algoritmo
  // it('test #9: should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })

  it('test #10: should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('test #11: should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })

  it('test #12: should return "fizzbuzz" if number provided is 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  it('test #13: should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
    expect(fizzbuzz(60)).toBe('fizzbuzz')
  })

  it('test #14: should return "woff" if number provided is 7', () => {
    expect(fizzbuzz(7)).toBe('woff')
  })

  it('test #15: should return "fizzwoff" if number provided is multiple of 21', () => {
    expect(fizzbuzz(21)).toBe('fizzwoff')
  })

  it('test #16: should return "fizzwoff" if number provided is multiple of 3 and 7', () => {
    expect(fizzbuzz(42)).toBe('fizzwoff')
    expect(fizzbuzz(63)).toBe('fizzwoff')
    expect(fizzbuzz(84)).toBe('fizzwoff')
  })

  it('test #17: should return "buzzwoff" if number provided is multiple of 35', () => {
    expect(fizzbuzz(35)).toBe('buzzwoff')
  })

  it('test #18: should return "buzzwoff" if number provided is multiple of 5 and 7', () => {
    expect(fizzbuzz(70)).toBe('buzzwoff')
    expect(fizzbuzz(140)).toBe('buzzwoff')
    expect(fizzbuzz(175)).toBe('buzzwoff')
  })

  it('test #19: should return "fizzbuzzwoff" if number provided is multiple of 105', () => {
    expect(fizzbuzz(105)).toBe('fizzbuzzwoff')
  })

  it('test #20: should return "fizzbuzzwoff" if number provided is multiple of 3, 5 and 7', () => {
    expect(fizzbuzz(210)).toBe('fizzbuzzwoff')
    expect(fizzbuzz(315)).toBe('fizzbuzzwoff')
    expect(fizzbuzz(420)).toBe('fizzbuzzwoff')
  })
})
