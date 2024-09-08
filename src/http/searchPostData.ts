import { GitHubIssue } from '../contexts/postsContext'
import { api } from '../lib/axios'

interface SearchPostDataRequest {
  issueCode: string
}

type SearchPostDataResponse = GitHubIssue

export async function searchPostData({
  issueCode,
}: SearchPostDataRequest): Promise<SearchPostDataResponse> {
  const repo = import.meta.env.VITE_REPO
  const result = await api.get(`/repos/${repo}/issues/${issueCode}`)
  return result.data
}
