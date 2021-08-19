import { AuthContext } from '../../context'
import { useContext } from 'react'

export const useContextApi = () => useContext(AuthContext)