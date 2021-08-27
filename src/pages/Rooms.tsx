import { RoomParams } from './types/types'
import * as S from './styles/styles'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useContextApi } from '../context/hooks/useContextAPI';
import {  toast } from 'react-hot-toast/dist/index'
import { database } from '../services/firebase'
import * as ReactBootStrap from 'react-bootstrap'
import { Question } from '../components/Question'
import { useRoom } from './../context/hooks/useRoom';
import { BiLike } from 'react-icons/all'

export function Room() {

  const { user } = useContextApi()
  const { id } = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  const { questions, title } = useRoom(id)
  
  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault()
  
    try {
      
      if(newQuestion.trim() === '') {
        return
      }
      
      if(!user) {
        throw new Error('You must be logged in')
      }
    }catch(error) {
      toast.error(`${error.message}`)
    }

    const questions = {
      content : newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar
      },
      isHightLighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${id}/questions`).push(questions)

    setNewQuestion('')
  } 

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if(likeId) {
      await database.ref(`rooms/${id}/questions/${questionId}/likes/${likeId}`).remove()
    }else{
      await database.ref(`rooms/${id}/questions/${questionId}/likes`).push({
        authorId: user?.id
      })
    }
  }
  
  return (
    <S.PageRoom>
      <S.Header>
        <S.Content>

          <S.ContainerImgAvatarHeader>
              {!user?.avatar ? (
                <>
                  <ReactBootStrap.Spinner animation='border' />
                </>
              ):(
                <>
                  <S.Image src={user?.avatar} alt='LetMeAsk' />
                  <S.UserName>{user?.name}</S.UserName>
                </>
              )}

          </S.ContainerImgAvatarHeader>
          
          <RoomCode code={id} />
        </S.Content>
      </S.Header>

      <S.ContentMain>

        <S.RoomTitle>
          <S.TitleRoomName>Sala {!title && <ReactBootStrap.Spinner animation='border' />} {title}</S.TitleRoomName>
          {questions.length === 1 && <S.SpanQuestions>{questions.length} pergunta</S.SpanQuestions>}

          { questions.length >= 2 && <S.SpanQuestions>{questions.length} perguntas</S.SpanQuestions>}
        </S.RoomTitle>

        <S.FormQuestions onSubmit={handleSendQuestion}>
          <S.TextArea 
            placeholder='O que você quer perguntar?'
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <S.FormFooterContainer>
            
            { !user && <ReactBootStrap.Spinner animation='border' /> }
            
            { user ? (
              <S.UserInfo>
                <S.ImageUserInfo src={user.avatar} alt={user.name} />
                <S.Span>{user.name}</S.Span>
              </S.UserInfo>
            ) : (
              <S.SpanSendQuestions>Para enviar uma pergunta, <S.ButtonLoginGoogle>faça seu login</S.ButtonLoginGoogle>.</S.SpanSendQuestions>
            ) }

            <Button type='submit' disabled={!user}>Enviar pergunta</Button>
            
          </S.FormFooterContainer>
        </S.FormQuestions>

        <S.QuestionList>
          { questions.map(value =>  ( 
              <Question 
                key={value.id}
                author={value.author} 
                content={value.content}
                isAnswered={value.isAnswered}
                isHightLighted={value.isHightLighted}
              >
                { !value.isAnswered && (
                  <S.Like
                    type='button'
                    className={`like-button ${value.likeId ? 'liked': ''}`}
                    aria-label='Marcar como gostei' // assencibilidade
                    onClick={() => handleLikeQuestion(value.id, value.likeId)}
                  >
                    { value.likeCount > 0 && <S.SpanCounterLike>{value.likeCount}</S.SpanCounterLike> }
                    <BiLike size={25} color='#737380' className='icon-like-stroke' />
                  </S.Like>
                ) }
              </Question>
          )) }
        </S.QuestionList>
      </S.ContentMain>
    </S.PageRoom>
  )
}