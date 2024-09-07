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

export function PostInfo() {
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
        <h1>JavaScript data types and data structures</h1>
        <InfosOfPost>
          <InfoOfPost>
            <img src={github} alt="" />
            <span>cameronwll</span>
          </InfoOfPost>
          <InfoOfPost>
            <Calendar size={18} />
            <span>Há 1 dia</span>
          </InfoOfPost>
          <InfoOfPost>
            <MessageCircle size={18} />
            <span>5 comentários</span>
          </InfoOfPost>
        </InfosOfPost>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
