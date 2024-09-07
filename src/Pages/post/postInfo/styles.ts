import { styled } from 'styled-components'

export const PostInfoContainer = styled.div`
  margin-top: -5.5rem;

  width: 54rem;
  height: 10.5rem;
  margin-inline: auto;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
`

export const PostInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & span {
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    & svg {
      color: ${(props) => props.theme.blue};
    }
  }
`

export const PostInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const InfosOfPost = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const InfoOfPost = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & img {
    height: 1.125rem;
    width: 1.125rem;
  }

  & span {
    color: ${(props) => props.theme['base-span']};
  }
`
