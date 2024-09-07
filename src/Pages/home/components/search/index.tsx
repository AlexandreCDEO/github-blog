import { SearchContainer, SearchHeader, SearchInput } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <SearchHeader>
        <span>Publicações</span>
        <small>6 publicações</small>
      </SearchHeader>
      <SearchInput placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
