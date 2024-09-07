import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  width: 54rem;
  margin-inline: auto;
`
