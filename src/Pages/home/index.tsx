import { AppContainer, PostsContainer } from '../../styles'
import { Post } from './components/post'
import { Profile } from './components/profile'
import { Search } from './components/search'

export function Home() {
  return (
    <AppContainer>
      <Profile />
      <Search />
      <PostsContainer>
        {Array.from({ length: 6 }, (_, index) => {
          return <Post key={index} />
        })}
      </PostsContainer>
    </AppContainer>
  )
}
