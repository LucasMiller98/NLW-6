import { ButtonProps } from './types/types'
import * as S from './styles'

export function Button({ isOutlined = false , ...props }: ButtonProps) {
  
  return (
    <S.Button className={`${isOutlined ? 'outlined': ''}`} { ...props } />
  )
}