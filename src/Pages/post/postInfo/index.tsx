import {
  ArrowUpRightFromSquare,
  Calendar,
  ChevronLeft,
  MessageCircle,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import github from '../../../assets/github.svg'

import {
  InfoOfPost,
  InfosOfPost,
  PostInfoContainer,
  PostInfoContent,
  PostInfoHeader,
} from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostInfoProps {
  title: string
  username: string
  createdDate: string
  numberOfComments: number
}

export function PostInfo({
  title,
  username,
  createdDate,
  numberOfComments,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <Link to="/">
          <ChevronLeft size={12} />
          <span>voltar</span>
        </Link>
        <Link to="#">
          <ArrowUpRightFromSquare size={12} />
          <span>ver no github</span>
        </Link>
      </PostInfoHeader>
      <PostInfoContent>
        <h1>{title}</h1>
        <InfosOfPost>
          <InfoOfPost>
            <img src={github} alt="" />
            <span>{username}</span>
          </InfoOfPost>
          <InfoOfPost>
            <Calendar size={18} />
            <span>
              {formatDistanceToNow(new Date(createdDate), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </InfoOfPost>
          <InfoOfPost>
            <MessageCircle size={18} />
            <span>{numberOfComments} comentários</span>
          </InfoOfPost>
        </InfosOfPost>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
