/* eslint-disable @next/next/no-img-element */
import { auth, clerkClient, SignOutButton } from '@clerk/nextjs'
import EncuestasCount from '@/components/EncuestasCount'

const Header = async () => {
  const { userId } = auth()
  const user = userId ? await clerkClient.users.getUser(userId) : null

  return (
    <>
      <h1 className="text-5xl font-bold text-center text-blue-500">
        Encuestas
        <br />
        HACKABOSS
      </h1>
      {userId && (
        <>
          <h2>
            Bienvenido {
              user?.firstName
                ? `${user?.firstName} ${user?.lastName}`
                : user?.phoneNumbers[0]?.phoneNumber
            }
          </h2>
          <img src={user?.imageUrl} alt="Foto de perfil" className="size-20 border-2 rounded-full" />
          <SignOutButton />
          <a href="/profile">
            Ir al perfil
          </a>
        </>
      )}
      <EncuestasCount />
      {!userId && (
        <>
          <a href="/sign-in">
            Acceder
          </a>
          <a href="/sign-up">
            Registrarse
          </a>
        </>
      )}
    </>
  )
}

export default Header
