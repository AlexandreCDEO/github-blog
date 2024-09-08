import styled from 'styled-components'

export const ProfileContainer = styled.section`
  margin-top: -5.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;

  height: 13.25rem;
  width: 54rem;
  margin-inline: auto;

  padding: 2rem 2rem 2rem 2.5rem;

  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
`

export const AvatarContainer = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 0.5rem;
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  position: relative;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;

    display: flex;
    gap: 0.5rem;

    & svg {
      color: ${(props) => props.theme.blue};
    }

    position: absolute;
    right: 0;
  }
`

export const ProfileInfo = styled.div`
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

export const ProfileSocial = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const SocialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & img {
    height: 1.125rem;
    width: 1.125rem;
  }

  & span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
