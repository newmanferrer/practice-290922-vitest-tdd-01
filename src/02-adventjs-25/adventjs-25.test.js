import { describe, expect, it } from 'vitest'
import { adventjs25 } from './adventjs-25'

/*
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.
Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar
las máquinas y optimizar al máximo la creación de regalos. 🎁
La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y,
para ello, podemos cambiar cada carácter por otro.
Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar
al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.
Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a
fabricar otro según las reglas mencionadas.
*/

describe('TEST adventjs25 function', () => {
  // Este test lo hemos desactivado posteriormente
  // porque es redundante
  /* it('test #1: should adentjs25 to be a function', () => {
    expect(typeof adventjs25).toBe('function')
    expect(adventjs25).toBeTypeOf('function')
  }) */

  // Este test lo hemos desactivado posteriormente
  // porque es redundante. Ya lo cubre el test #3
  /* it('test #2: should throw if first parameter is missing', () => {
    expect(() => adventjs25()).throw()
  }) */

  // Este test lo hemos desactivado posteriormente
  // porque es redundante. Ya lo cubre el test #3
  /* it('test #3: should throw a specific error message if first parameter is missing', () => {
    expect(() => adventjs25()).throw(/^from is required$/)
  }) */

  it('test #4: should throw if first parameter is not a string', () => {
    expect(() => adventjs25(7)).throw()
  })

  it('test #5: should throw a specific error message if first parameter is not a string', () => {
    expect(() => adventjs25(7)).throw(/^from is not a string$/)
  })

  it('test #6: should throw if second parameter is not a string', () => {
    expect(() => adventjs25('a')).throw()
  })

  it('test #7: should throw a specific error message if second parameter is not a string', () => {
    expect(() => adventjs25('from', true)).throw(/^to is not a string$/)
  })

  it('test #8: should return a boolean', () => {
    expect(adventjs25('a', 'b')).toBeTypeOf('boolean')
  })

  it('test #9: should return false if strings provided have different length', () => {
    expect(adventjs25('abc', 'de')).toBe(false)
  })

  it('test #10: should return false if strings provided have different length even with same unique letters', () => {
    expect(adventjs25('aab', 'ab')).toBe(false)
  })

  it('test #11: should return false if strings provided have different number of unique letters', () => {
    expect(adventjs25('abc', 'ddd')).toBe(false)
  })

  it('test #12: should return false if strings has different order of transformation', () => {
    expect(adventjs25('XBOX', 'XXBO')).toBe(false)
  })
})
