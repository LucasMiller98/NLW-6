import * as S from './styles/styles'
import logoImg from '../assets/images/logo.jpg'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useContextApi } from '../context/hooks/useContextAPI'
import { database } from '../services/firebase'
import { Spinner } from 'react-bootstrap'

export function NewRoom() {
  const history = useHistory()

  const { user } = useContextApi()
  const [newRoom, setNewRoom] = useState('')
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if(newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }
  
  return(
    <>
      <S.PageAuth>
        <S.Aside>
          <S.Strong>Crie salas de Q&amp;A ao vivo</S.Strong>
          <S.Paragraph>
            Tire as dúvidas de sua audiência em tempo real
          </S.Paragraph>
        </S.Aside>
        <S.Main>
          <S.MainContent>
            <S.UserNameH1>Olá, {!user?.name && <Spinner animation='border' />} {user?.name}</S.UserNameH1>
            
            <S.Image src={logoImg} alt='logo' />

            <S.titleNewRoom>Criar uma nova sala</S.titleNewRoom>
            
            <S.Form onSubmit={handleSubmit}>
              <S.Input 
                type='text' 
                placeholder='Nome da sala'
                onChange={event => setNewRoom(event.target.value)}
                value={newRoom}
              />
              
              <Button type='submit'>
                Criar sala
              </Button>
            </S.Form>

            <S.Question>
              Quer entrar em uma sala existente? <Link to='/'>Click aqui</Link>
            </S.Question>
          </S.MainContent>
        </S.Main>
      </S.PageAuth>
    </>
  )
}