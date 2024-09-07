import { styled } from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 54rem;
  margin-inline: auto;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }

  & small {
    color: ${(props) => props.theme['base-span']};
    font-size: 0%.875rem;
  }
`

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
