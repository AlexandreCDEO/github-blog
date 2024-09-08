import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { PostsContext } from '../../../../contexts/postsContext'
import {
  SearchContainer,
  SearchForm,
  SearchHeader,
  SearchInput,
} from './styles'

export function Search() {
  const { posts, loadPosts } = useContext(PostsContext)

  const [search, setSearch] = useState('')

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    loadPosts(search)
  }

  return (
    <SearchContainer>
      <SearchHeader>
        <span>Publicações</span>
        <small>
          {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
        </small>
      </SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleSearch}
          value={search}
          placeholder="Buscar conteúdo"
        />
      </SearchForm>
    </SearchContainer>
  )
}
