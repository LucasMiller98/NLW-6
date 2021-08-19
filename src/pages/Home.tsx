import * as S from './styles/styles'
import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ilustrationImg from '../assets/images/ilustration.jpg'
import logoImg from '../assets/images/logo.jpg'
import { CgGoogle, CgEnter } from 'react-icons/all'
import { Button } from '../components/Button'
import { useContextApi } from '../context/hooks/useContextAPI'

export function Home() {

  const { signInWithGoogle, user } = useContextApi()
  const [value, setValue] = useState('')
  const history = useHistory()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleCreateRoom = async () => { 

    if(!user) {
      await signInWithGoogle()
    }
    
    history.push('/rooms/new')
  }
  
  return(
    <>
      <S.PageAuth>
        <S.Aside>
          <S.Image src={ilustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
          <S.Strong>Crie salas de Q&amp;A ao vivo</S.Strong>
          <S.Paragraph>
            Tire as dúvidas de sua audiência em tempo real
          </S.Paragraph>
        </S.Aside>
        <S.Main>
          <S.MainContent>
            
            <S.Image src={logoImg} alt='logo' />
            <S.Title>Let me ask</S.Title>
            
            <S.CreateRoom onClick={handleCreateRoom}>
              <CgGoogle size={27.9} color="#f1f1f1" className='icon' />
              Crie sua sala com o Google
            </S.CreateRoom>

            <S.Separator>Ou entre em uma sala</S.Separator>

            <S.Form onSubmit={handleSubmit}>
              <S.Input
                type='text' 
                placeholder='Digite o código da sala'
                onChange={event => setValue(event.target.value)}
                value={value}
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