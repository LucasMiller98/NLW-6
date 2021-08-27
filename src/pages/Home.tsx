import * as S from './styles/styles'
import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ilustrationImg from '../assets/images/ilustration.jpg'
import logoImg from '../assets/images/logo.jpg'
import { CgGoogle, CgEnter } from 'react-icons/all'
import { Button } from '../components/Button'
import { useContextApi } from '../context/hooks/useContextAPI'
import { database } from '../services/firebase'
import { toast } from 'react-toastify'
import * as ReactBootStrap from 'react-bootstrap'
import { useEffect } from 'react';

export function Home() {

  const { signInWithGoogle, user } = useContextApi()
  const [roomCode, setRoomCode] = useState('')
  const history = useHistory()

  useEffect(() => {
    toast.info('Let me ask', {
      autoClose: 5000,
      position: 'top-center',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }, [])

  const handleCreateRoom = async () => { 

    if(!user) {
      await signInWithGoogle()
    }
    
    history.push('/rooms/new')
  }

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault()

    if(roomCode.trim() === '') {
      return
    } 
    
    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if(!roomRef.exists()) {     
      toast.error(`Está sala não existe`, {
        autoClose: 5000,
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }

    if(roomRef.val().endedAt) {
      toast.info(`A sala já está fechada.`, {
        autoClose: 5000,
        position: 'top-center',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }

    history.push(`/rooms/${roomCode}`)
  }
  
  return(
    <>
      <S.PageAuth>
        <S.Aside>
          
          { !ilustrationImg ? (
            <ReactBootStrap.Spinner animation='border' />
          ) : (
            <S.Image src={ilustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
          ) }
          
          <S.Strong>Crie salas de Q&amp;A ao vivo</S.Strong>
          <S.Paragraph>
            Tire as dúvidas de sua audiência em tempo real
          </S.Paragraph>
        </S.Aside>
        <S.Main>
          <S.MainContent>
            { !logoImg ? <ReactBootStrap.Spinner animation='border' /> : (<S.Image src={logoImg} alt='logo' />) }
            
            <S.CreateRoom onClick={handleCreateRoom}>
              <CgGoogle size={27.9} color="#f1f1f1" className='icon' />
              Crie sua sala com o Google
            </S.CreateRoom>

            <S.Separator>Ou entre em uma sala</S.Separator>

            <S.Form onSubmit={handleJoinRoom}>
              <S.Input
                type='text' 
                placeholder='Digite o código da sala'
                onChange={event => setRoomCode(event.target.value)}
                value={roomCode}
              />
              
              <Button type='submit'>
                <CgEnter className='icon-enter' size={27.9} color="#f1f1f1" />
                Entrar na sala
              </Button>
            </S.Form>
          </S.MainContent>
        </S.Main>
      </S.PageAuth>
    </>
  )
}