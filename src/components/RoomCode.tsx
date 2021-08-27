import * as S from './styles'
import { BiCopy } from 'react-icons/all'
import { toast } from 'react-toastify'

type RoomCodeProps = {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {

  const copyRoomCodeToClipBoard = () => {
    navigator.clipboard.writeText(code)

    toast.success('Código copiado ✅', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      pauseOnHover: true
    })
  }
  
  return (
    <S.ButtonRoomCode onClick={copyRoomCodeToClipBoard}>
      <S.Container>
        <BiCopy size={27} color='#f1f1f1' />
      </S.Container>

      <S.Span>Sala #{ code }</S.Span>
    </S.ButtonRoomCode>    
  )
}