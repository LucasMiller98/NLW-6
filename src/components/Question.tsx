import { QuestionProps } from './types/types'
import * as S from './styles'

export function Question({ author, content, children }: QuestionProps) {
  return (
    <S.Question className='question'>
      <S.Paragraph>{content}</S.Paragraph>

      <S.Footer>
        <S.UserInfo>
          <S.Image src={author.avatar} alt={author.name} />
          <S.Span>{author.name}</S.Span>
        </S.UserInfo>
        <S.Children>{children}</S.Children>
      </S.Footer>
    </S.Question>
  )
}