import { ButtonProps } from './types/types'
import * as S from './styles'

export function Button(props: ButtonProps) {
  
  return (
    <S.Button { ...props } />
  )
}