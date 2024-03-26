import { SignIn } from '@clerk/nextjs'

export default function PageSignIn () {
  return (
    <>
      <a href="/">
        Volver a la página principal
      </a>
      <SignIn />
    </>
  )
}
