import { PostContainer, PostContent, PostHeader } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <h2>JavaScript data types and data structures</h2>
        <small>há 1 dia</small>
      </PostHeader>
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in
        </p>
      </PostContent>
    </PostContainer>
  )
}
