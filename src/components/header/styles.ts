import styled from 'styled-components'
import leftEffect from '../../assets/left-effect.svg'
import rightEffect from '../../assets/right-effect.svg'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  background-image: url(${leftEffect}), url(${rightEffect});
  background-position:
    left bottom 3rem,
    right bottom 1.88rem;
  background-repeat: no-repeat;
  background-size: auto;

  display: flex;
  justify-content: center;

  & img {
    margin-top: 4rem;

    height: 6.13rem;
    width: 9.25rem;
  }
`
