import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

interface Reactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface GitHubIssue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: string[]
  state: string
  locked: boolean
  assignee: string | null
  assignees: string[]
  milestone: string | null
  comments: number
  created_at: string
  updated_at: string
  closed_at: string | null
  author_association: string
  active_lock_reason: string | null
  body: string
  reactions: Reactions
  timeline_url: string
  performed_via_github_app: string | null
  state_reason: string | null
}

interface PostsContextType {
  posts: GitHubIssue[]
  loadPosts: (query: string) => void
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<GitHubIssue[]>([])
  async function loadPosts(query = '') {
    const repo = 'alexandrecdeo/github-blog'
    const querySearch = `${query} repo:${repo}`

    const response = await api.get('/search/issues', {
      params: {
        q: querySearch,
      },
    })

    setPosts(response.data.items)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, loadPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
