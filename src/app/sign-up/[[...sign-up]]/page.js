import { SignUp } from '@clerk/nextjs'

export default function PageSignIn () {
  return (
    <>
      <a href="/">
        Volver a la página principal
      </a>
      <a href="/sign-in">
        Ya tengo una cuenta
      </a>
      <SignUp />
    </>
  )
}
