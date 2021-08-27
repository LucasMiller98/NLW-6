import { useEffect, useState } from "react"
import { FirebaseQuestions, Questions } from "../../pages/types/types"
import { database } from "../../services/firebase"
import { useContextApi } from '../hooks/useContextAPI'

export function useRoom(id: string) {
  const { user } = useContextApi()
  const [questions, setQuestions] = useState<Questions[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${id}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}
      
      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHightLighted: value.isHightLighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0] // some() => percorre o array até encontrar uma condição que satisfa e retorna true ou false
        }
      })
      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })

    return () => {
      roomRef.off('value') // remove todos os eventos listener
    }
    
  }, [id, user?.id])
  
  return {
    questions,
    title
  }
  
}