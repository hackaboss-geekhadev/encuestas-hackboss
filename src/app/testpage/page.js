'use client'

import { create } from 'zustand'

const useStore = create((set) => ({
  countEncuestas: 0,

  setCountEncuestas: (newCountEncuestas) => set((state) => ({
    countEncuestas: newCountEncuestas
  }))
}))

export default function TestPage () {
  const { countEncuestas, setCountEncuestas } = useStore()
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white'
    >
      <span className='text-4xl'>{countEncuestas}</span>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setCountEncuestas(3)}>one up</button>
    </div>
  )
}
