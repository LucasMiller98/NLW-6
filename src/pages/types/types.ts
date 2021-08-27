// Record => declaração de objeto no type
export type FirebaseQuestions = Record<string, {
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHightLighted: boolean
  likes: Record<string, {
    authorId: string
  }>
}>

export type RoomParams = {
  id: string
}

export type Questions = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHightLighted: boolean
  likeCount: number
  likeId: string | undefined
}