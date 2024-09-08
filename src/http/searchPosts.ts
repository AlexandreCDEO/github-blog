import { GitHubIssue } from '../contexts/postsContext'
import { api } from '../lib/axios'

interface LoadPostRequest {
  query?: string
}

type LoadPostResponse = GitHubIssue[]

export async function searchPosts({
  query = '',
}: LoadPostRequest): Promise<LoadPostResponse> {
  const repo = import.meta.env.VITE_REPO
  console.log('repo', repo)
  const querySearch = `${query} repo:${repo}`

  const response = await api.get('/search/issues', {
    params: {
      q: querySearch,
    },
  })
  console.log('items', response.data.items)

  return response.data.items
}
