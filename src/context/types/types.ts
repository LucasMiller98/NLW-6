import { ReactNode } from 'react'

export type User = {
  id: string
  name: string
  avatar: string
}

export type AuthContextType = {
  signInWithGoogle: () => Promise<void> // função async
  user: User | undefined
}

export type ProviderProps = {
  children: ReactNode
}