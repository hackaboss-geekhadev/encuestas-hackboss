'use client'

import { useStoreEncuestaCount } from '@/stores/storeEncuestas'

const EncuestasCount = () => {
  const { countEncuestas } = useStoreEncuestaCount()

  return (
    <h2>
      Tenemos {countEncuestas} encuestas
    </h2>
  )
}

export default EncuestasCount
