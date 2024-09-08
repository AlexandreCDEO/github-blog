import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PostsProvider } from './contexts/postsContext'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </ThemeProvider>
  )
}
