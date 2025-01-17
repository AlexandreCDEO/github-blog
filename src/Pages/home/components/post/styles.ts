import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-post']};

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border: 2px solid transparent;

  cursor: pointer;

  position: relative;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  & small {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;

    position: absolute;

    right: 1.5rem;
    top: 0.75rem;
  }
`

export const PostHeader = styled.div`
  display: flex;
  gap: 1rem;

  & h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.25rem;
  }
`

export const PostContent = styled.div`
  width: 22rem;
  height: 7rem;

  overflow: hidden;
`
