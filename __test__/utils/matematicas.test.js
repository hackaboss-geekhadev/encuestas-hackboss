import { test, expect } from 'vitest'
import { suma } from '@/utils/matematicas'

test('la función suma debería sumar debería devolver 3 si recivo 2 y 1', () => {
  expect(suma(2, 1)).toBe(3)
})

test('la función suma debería sumar debería revolver error si alguno de los argumentos no es un número', () => {
  expect(() => suma(false, '1')).toThrowError()
})
