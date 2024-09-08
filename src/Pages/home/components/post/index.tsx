import { PostContainer, PostContent, PostHeader } from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface PostProps {
  number: number
  title: string
  dateOfCreated: string
  content: string
}

export function Post({ number, title, dateOfCreated, content }: PostProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/post/${number}`)
  }

  return (
    <PostContainer onClick={handleClick}>
      <small>
        {formatDistanceToNow(new Date(dateOfCreated), {
          addSuffix: true,
          locale: ptBR,
        })}
      </small>
      <PostHeader>
        <h2>{title}</h2>
      </PostHeader>
      <PostContent>
        <p>{content}</p>
      </PostContent>
    </PostContainer>
  )
}
