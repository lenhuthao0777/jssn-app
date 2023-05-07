import { getCookie } from '@src/hooks'
import { createContext, ReactNode, type FC } from 'react'

interface ContextProps {
  children: ReactNode
}

const user: any = getCookie('userInfo')

const AuthContext = createContext(null)

const authContext: FC<ContextProps> = ({ children }) => {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
export default authContext
