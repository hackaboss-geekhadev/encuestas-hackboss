import { auth, UserProfile } from '@clerk/nextjs'

const Header = async () => {
  return (<UserProfile />)
}

export default Header
