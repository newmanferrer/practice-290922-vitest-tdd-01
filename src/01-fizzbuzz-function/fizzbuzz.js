/*
Escribir una funcion que al pasarle un numero:
 - Muestra "fizz", si es multiplo de 3.
 - Muestra "bazz", si es mulpiplo de 5.
 - Muestra "fizzbazz", si es multiplo de 3 y 5.
 - Muestra el numero si no es multiplo de ninguno de los anteriores.
*/

export const fizzbuzz = number => {
  if (typeof number !== 'number') throw new Error('parameter provider must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provider must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }
  let output = ''

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output === '' ? number : output
}
