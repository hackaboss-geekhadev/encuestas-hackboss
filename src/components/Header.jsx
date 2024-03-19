'use client'

import { useStoreEncuestaCount } from '@/stores/storeEncuestas'

const Header = () => {
  const { countEncuestas } = useStoreEncuestaCount()
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-blue-500">
        Encuestas
        <br />
        HACKABOSS
      </h1>
      <h2>
        Tenemos {countEncuestas} encuestas
      </h2>
    </>
  )
}

export default Header
