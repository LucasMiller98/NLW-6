import { createContext, useState, useEffect } from 'react'
import { auth, firebase } from '../services/firebase'
import { AuthContextType, ProviderProps, User } from './types/types'
import { toast, ToastContainer } from 'react-toastify'

export const AuthContext = createContext({} as AuthContextType)

export const ContextProvider = ({ children }: ProviderProps) => {

  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        try{
          const { displayName, uid, photoURL } = user
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.')
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
          
        }catch(error) {
          toast.error(`🤦‍♂️${error.message}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        }
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider) // autenticação com o firebase
     
    if(result.user) { // se foi retornado um usuário dessa autenticação
      try{
        const { displayName, uid, photoURL } = result.user

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
        
      }catch(error) {
        toast.error(`🤦‍♂️${error.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    }
  
  }

  return (
    <>
      <ToastContainer 
        position='top-right' 
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <AuthContext.Provider value={{
        user,
        signInWithGoogle
      }}>
        { children }
      </AuthContext.Provider>
    </>
  )
}