import { create } from 'zustand'

export const useStoreEncuestaCount = create((set) => ({
  countEncuestas: 0,
  setCountEncuestas: (newCountEncuestas) => set((state) => ({
    countEncuestas: newCountEncuestas
  }))
}))
