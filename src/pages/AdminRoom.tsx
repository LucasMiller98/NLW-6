import { RoomParams } from './types/types'
import * as S from './styles/styles'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'
import { useParams } from 'react-router-dom'
import { useContextApi } from '../context/hooks/useContextAPI';
import * as ReactBootStrap from 'react-bootstrap'
import { Question } from '../components/Question'
import { useRoom } from './../context/hooks/useRoom';
import { BiTrash } from 'react-icons/all'
import { database } from '../services/firebase'
import { toast, Toaster } from 'react-hot-toast'
import { useHistory } from 'react-router-dom'

export function AdminRoom() {

  const { user } = useContextApi()
  const { id } = useParams<RoomParams>()
  const { questions, title } = useRoom(id) 
  const history = useHistory()
  
  const handleEndRoom = async () => {
    await database.ref(`rooms/${id}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }
  
  const handleDeleteQuestion = async (questionsId: string) => {
    if(window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${id}/questions/${questionsId}`).remove()

      toast.success('Deletado com sucesso!')
    }
  }
  
  return (
    <S.PageRoom>
      <Toaster 
        position='top-center'
        reverseOrder={false}
      />
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
          <S.Container>
            <RoomCode code={id} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          </S.Container>
        </S.Content>
      </S.Header>

      <S.ContentMain>

        <S.RoomTitle>
          <S.TitleRoomName>Sala {!title && <ReactBootStrap.Spinner animation='border' />} {title}</S.TitleRoomName>
          {questions.length === 1 && <S.SpanQuestions>{questions.length} pergunta</S.SpanQuestions>}

          { questions.length >= 2 && <S.SpanQuestions>{questions.length} perguntas</S.SpanQuestions>}
        </S.RoomTitle>

        <S.QuestionList>
          { questions.map(value =>( 
              <Question 
                key={value.id}
                author={value.author} 
                content={value.content}
              >
                <S.Trash
                  type='button'
                  onClick={() => handleDeleteQuestion(value.id)}
                >
                  <BiTrash size={22} color='#835afd' />
                </S.Trash>
              </Question>
          )) }
        </S.QuestionList>
      </S.ContentMain>
    </S.PageRoom>
  )
}
