import * as S from './styles/styles'
import ilustrationImg from '../assets/images/ilustration.jpg'
import logoImg from '../assets/images/logo.jpg'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useContextApi } from '../context/hooks/useContextAPI'

export function NewRoom() {

  const { user } = useContextApi()
  const [value, setValue] = useState('')
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  
  return(
    <>
      <S.PageAuth>
        <S.Aside>
          {/* <S.Image src={ilustrationImg} alt='Ilustração simbolizando perguntas e respostas' /> */}
          <S.Strong>Crie salas de Q&amp;A ao vivo</S.Strong>
          <S.Paragraph>
            Tire as dúvidas de sua audiência em tempo real
          </S.Paragraph>
        </S.Aside>
        <S.Main>
          <S.MainContent>
            <h1>{user?.name}</h1>
            
            <S.Image src={logoImg} alt='logo' />

            <S.titleNewRoom>Criar uma nova sala</S.titleNewRoom>
            
            <S.Form onSubmit={handleSubmit}>
              <S.Input 
                type='text' 
                placeholder='Nome da sala'
                onChange={event => setValue(event.target.value)}
                value={value}
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