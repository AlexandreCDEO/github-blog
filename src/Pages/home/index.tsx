import { useContext } from 'react'
import { PostsContext } from '../../contexts/postsContext'
import { AppContainer, PostsContainer } from '../../styles'
import { Post } from './components/post'
import { Profile } from './components/profile'
import { Search } from './components/search'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <AppContainer>
      <Profile />
      <Search />

      {
        <PostsContainer>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                number={post.number}
                title={post.title}
                content={post.body}
                dateOfCreated={post.created_at}
              />
            )
          })}
        </PostsContainer>
      }
    </AppContainer>
  )
}
