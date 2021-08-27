import { QuestionProps } from './types/types'
import * as S from './styles'
import cx from 'classnames'

export function Question({ 
  author, 
  content, 
  children, 
  isAnswered = false, 
  isHightLighted = false
}: QuestionProps) {
  return (
    <S.Question className={cx(
      'question',
      { answered: isAnswered },
      { hightLighted: isHightLighted && !isAnswered }
    )}>
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