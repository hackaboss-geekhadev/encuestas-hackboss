export const suma = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números')
  }

  return a + b
}

export const resta = (a, b) => {
  return a - b
}
